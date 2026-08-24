import { anthropic } from "@ai-sdk/anthropic";
import { streamText, stepCountIs } from "ai";
import { Redis } from "@upstash/redis";
import { BUSINESS_CASE } from "@/lib/business-case-context";

const SYSTEM_PROMPT = `You are a discussion assistant embedded on a web page that presents a business case for opening a padel venue in the Brighton / Mid Sussex area of the UK. The readers are a small group of friends considering the venture together.

Ground every answer in the business case document provided below. When a question goes beyond the document, say so plainly and reason from general knowledge, clearly separating the two. Be direct about risks and weaknesses — the group wants honest assessment, not cheerleading. Keep answers conversational and reasonably short; use British English. Do not invent numbers that are not in the document.

You have a web_search tool. Use it when a question needs current information the document cannot answer — prices, availability, news, planning decisions, anything time-sensitive — and say what you found and where. Prefer the document for anything it already covers.`;

// ---- daily spend budget (best-effort, tracked in Upstash Redis) ----

const DEFAULT_DAILY_BUDGET_USD = 10;

function budgetUsd() {
  const parsed = Number.parseFloat(process.env.DAILY_BUDGET_USD ?? "");
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_DAILY_BUDGET_USD;
}

function spendKey() {
  const day = new Date().toISOString().slice(0, 10); // UTC YYYY-MM-DD
  return `spend:${day}`;
}

function hasRedisEnv() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function readSpendUsd(key) {
  try {
    const redis = Redis.fromEnv();
    const spent = Number.parseFloat((await redis.get(key)) ?? "0");
    return Number.isFinite(spent) ? spent : 0;
  } catch {
    return 0;
  }
}

async function recordSpendUsd(key, addUsd) {
  const redis = Redis.fromEnv();
  await redis.incrbyfloat(key, addUsd);
  await redis.expire(key, 172800); // 2 days — the key is only read on its own day
}

// Sonnet 5 pricing (USD per token) + web search ($10 per 1,000 searches).
// AI SDK usage mapping: inputTokenDetails.noCacheTokens = uncached input
// (Anthropic input_tokens), cacheReadTokens / cacheWriteTokens = cache reads
// and writes; outputTokens = completion tokens.
function costUsd(usage, searchCount) {
  const d = usage?.inputTokenDetails ?? {};
  return (
    ((d.noCacheTokens ?? 0) * 3) / 1e6 +
    ((usage?.outputTokens ?? 0) * 15) / 1e6 +
    ((d.cacheReadTokens ?? 0) * 0.3) / 1e6 +
    ((d.cacheWriteTokens ?? 0) * 3.75) / 1e6 +
    (searchCount ?? 0) * 0.01
  );
}

// Count web searches: prefer the raw Anthropic usage counter, fall back to
// counting web_search tool calls across steps.
function countSearches(steps, totalUsage) {
  try {
    const fromRaw = steps
      .map((s) => s?.usage?.raw?.server_tool_use?.web_search_requests ?? 0)
      .reduce((a, b) => a + (Number.isFinite(b) ? b : 0), 0);
    if (fromRaw > 0) return fromRaw;
    const totalRaw = totalUsage?.raw?.server_tool_use?.web_search_requests;
    if (Number.isFinite(totalRaw) && totalRaw > 0) return totalRaw;
    return steps
      .flatMap((s) => s?.content ?? [])
      .filter((p) => p?.type === "tool-call" && p?.toolName === "web_search").length;
  } catch {
    return 0;
  }
}

// Extract plain text from a useChat UIMessage (parts array) or a legacy
// { role, content } message.
function messageText(m) {
  if (typeof m?.content === "string") return m.content;
  if (Array.isArray(m?.parts)) {
    return m.parts
      .filter((p) => p?.type === "text" && typeof p.text === "string")
      .map((p) => p.text)
      .join("\n");
  }
  return "";
}

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Chat isn't connected yet — the site owner needs to set ANTHROPIC_API_KEY." },
      { status: 503 },
    );
  }

  // Enforce the daily budget before starting a stream (fail open on Redis errors).
  const key = spendKey();
  if (hasRedisEnv()) {
    const spent = await readSpendUsd(key);
    if (spent >= budgetUsd()) {
      return Response.json(
        { error: "The chat has hit its daily budget — try again tomorrow." },
        { status: 429 },
      );
    }
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid JSON" }, { status: 400 });
  }

  // Validate and truncate: user/assistant text only, last 30, 8000 chars each.
  const history = (Array.isArray(body?.messages) ? body.messages : [])
    .map((m) => ({ role: m?.role, text: messageText(m).trim() }))
    .filter((m) => (m.role === "user" || m.role === "assistant") && m.text.length > 0)
    .slice(-30)
    .map((m) => ({ role: m.role, content: m.text.slice(0, 8000) }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return Response.json({ error: "last message must be from the user" }, { status: 400 });
  }

  const result = streamText({
    model: anthropic("claude-sonnet-5"),
    maxOutputTokens: 8000,
    tools: {
      web_search: anthropic.tools.webSearch_20260209({ maxUses: 3 }),
    },
    stopWhen: stepCountIs(4),
    allowSystemInMessages: true,
    messages: [
      {
        role: "system",
        content: `${SYSTEM_PROMPT}\n\nToday's date is ${new Date().toISOString().slice(0, 10)}.\n\n<business_case>\n${BUSINESS_CASE}\n</business_case>`,
        providerOptions: {
          anthropic: { cacheControl: { type: "ephemeral" } },
        },
      },
      ...history,
    ],
    onFinish: async ({ steps, totalUsage }) => {
      // Best-effort spend accounting — a Redis hiccup must never break a chat response.
      try {
        if (hasRedisEnv()) {
          const searches = countSearches(steps ?? [], totalUsage);
          await recordSpendUsd(key, costUsd(totalUsage, searches));
        }
      } catch {
        /* ignore */
      }
    },
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
    onError: (err) => {
      const status = err && typeof err === "object" ? err.statusCode ?? err.status : undefined;
      if (status === 401) return "the site's API key is invalid";
      if (status === 429) return "rate limited — try again in a minute";
      if (typeof status === "number") return `API error ${status}`;
      return "chat failed";
    },
  });
}
