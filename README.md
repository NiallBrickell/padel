# Padel Business Case

The live site behind **[padel.niall.build](https://padel.niall.build)** — a business case for opening an independent padel venue in the Brighton–Mid Sussex corridor, plus the group's shared action board and a chat assistant grounded in the documents.

## What's here

- **`/`** — the business case: market sizing, local competitive map, financial projections, five financing routes, risks, 90-day plan.
- **`/next-steps`** — the action sheet: named contacts and next moves, batched by dependency, with live task state on each bet.
- **`/todos`** — the shared board: per-person lanes, drag to assign, due dates, themes.
- **Chat widget** — Claude (Sonnet 5) with the full documents as context and server-side web search, streaming via the Vercel AI SDK with AI Elements UI. Budget-capped per day.

## Stack

Next.js (App Router) · Tailwind CSS v4 · shadcn/ui + AI Elements · Vercel AI SDK (`@ai-sdk/anthropic`) · Upstash Redis (tasks + spend tracking) · deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Environment variables (set on Vercel; put in `.env.local` for local work — never commit them):

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Chat (without it `/api/chat` returns 503) |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | Tasks + daily budget counter |
| `SITE_PASSCODE` | Optional — gates task mutations when set |
| `DAILY_BUDGET_USD` | Optional — chat daily spend cap (default 10) |

The document pages are hand-authored TSX in `app/`; the chat's context module (`lib/business-case-context.js`) is regenerated from the source markdown by `scripts/generate-context.mjs` (runs on `prebuild`; falls back to the committed file when the source markdown isn't present, e.g. in CI).

## Contributing

PRs welcome — fix a number, improve the board, add a feature. Task mutations on the live site need the group passcode; ask Niall.
