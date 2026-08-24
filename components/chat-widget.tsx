"use client";

import { useEffect, useMemo, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isToolUIPart } from "ai";
import type { SourceUrlUIPart, ToolUIPart, UIMessage } from "ai";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { Tool, ToolContent, ToolHeader } from "@/components/ai-elements/tool";

const LS_CHAT = "padel-chat-history";

function loadLS(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function saveLS(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

/** Restore persisted messages; migrates the pre-AI-SDK {role, content} format. */
function restoreMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];
  const raw = loadLS(LS_CHAT);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (m) => m && (m.role === "user" || m.role === "assistant"),
      )
      .map((m, i): UIMessage | null => {
        if (Array.isArray(m.parts)) return m as UIMessage;
        if (typeof m.content === "string" && m.content.trim()) {
          return {
            id: `legacy-${i}`,
            role: m.role,
            parts: [{ type: "text", text: m.content }],
          };
        }
        return null;
      })
      .filter((m): m is UIMessage => m !== null);
  } catch {
    return [];
  }
}

function friendlyError(error: Error): string {
  try {
    const data = JSON.parse(error.message);
    if (typeof data?.error === "string") return data.error;
  } catch {
    /* not JSON */
  }
  return error.message && error.message.length < 200
    ? error.message
    : "Something went wrong — please try again.";
}

function AssistantMessage({ message }: { message: UIMessage }) {
  const sources = message.parts.filter(
    (p): p is SourceUrlUIPart => p.type === "source-url",
  );
  return (
    <Message from="assistant">
      <MessageContent className="cw-assistant">
        {message.parts.map((part, i) => {
          if (part.type === "text") {
            return <MessageResponse key={i}>{part.text}</MessageResponse>;
          }
          if (isToolUIPart(part)) {
            const toolPart = part as ToolUIPart;
            const query =
              toolPart.input && typeof toolPart.input === "object"
                ? (toolPart.input as { query?: string }).query
                : undefined;
            return (
              <Tool key={i} className="cw-tool">
                <ToolHeader
                  type={toolPart.type}
                  state={toolPart.state}
                  title={query ? `Searched: ${query}` : "Searched the web"}
                />
                {query ? (
                  <ToolContent>
                    <p className="text-xs text-muted-foreground">
                      Web search: “{query}”
                    </p>
                  </ToolContent>
                ) : null}
              </Tool>
            );
          }
          return null;
        })}
        {sources.length > 0 && (
          <Sources>
            <SourcesTrigger count={sources.length} />
            <SourcesContent>
              {sources.map((s, i) => (
                <Source key={i} href={s.url} title={s.title ?? s.url} />
              ))}
            </SourcesContent>
          </Sources>
        )}
      </MessageContent>
    </Message>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const initialMessages = useMemo(() => restoreMessages(), []);

  const { messages, sendMessage, status, error, setMessages, stop, clearError } =
    useChat({
      transport: new DefaultChatTransport({ api: "/api/chat" }),
      messages: initialMessages,
    });

  // persist the conversation across reloads
  useEffect(() => {
    if (typeof window === "undefined") return;
    saveLS(LS_CHAT, JSON.stringify(messages));
  }, [messages]);

  const busy = status === "submitted" || status === "streaming";

  const onSubmit = ({ text }: { text: string }) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    clearError();
    void sendMessage({ text: trimmed });
    setInput("");
  };

  const clearChat = () => {
    stop();
    clearError();
    setMessages([]);
    saveLS(LS_CHAT, "[]");
  };

  return (
    <>
      <button
        type="button"
        className="cw-fab"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12a8 8 0 0 1-8 8H4.6a.6.6 0 0 1-.45-1L5.6 17A8 8 0 1 1 21 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="12" r="1.1" fill="currentColor" />
            <circle cx="13" cy="12" r="1.1" fill="currentColor" />
            <circle cx="17" cy="12" r="1.1" fill="currentColor" />
          </svg>
        )}
      </button>

      {open && (
        <div className="cw-panel" role="dialog" aria-label="Chat">
          <div className="flex items-center justify-between border-b border-(--line) px-3 py-2">
            <p className="text-sm font-semibold text-(--ink)">Chat</p>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearChat}
                className="text-xs text-(--muted) hover:text-(--ink)"
              >
                Clear history
              </button>
            )}
          </div>

          <Conversation className="min-h-0 flex-1">
            <ConversationContent className="gap-3 p-3">
              {messages.length === 0 && !error && (
                <p className="m-auto max-w-[26ch] pt-10 text-center text-sm text-(--muted)">
                  Ask anything about the business case, the strategy note or
                  the next-steps sheet.
                </p>
              )}
              {messages.map((m) =>
                m.role === "assistant" ? (
                  <AssistantMessage key={m.id} message={m} />
                ) : (
                  <Message from="user" key={m.id}>
                    <MessageContent>
                      {m.parts
                        .filter((p) => p.type === "text")
                        .map((p, i) => (
                          <p className="whitespace-pre-wrap" key={i}>
                            {p.type === "text" ? p.text : null}
                          </p>
                        ))}
                    </MessageContent>
                  </Message>
                ),
              )}
              {status === "submitted" && (
                <Shimmer className="px-1 text-sm" duration={1.5}>
                  Thinking…
                </Shimmer>
              )}
              {error && (
                <div className="rounded-md border border-(--warn-line) bg-(--warn-bg) px-3 py-2 text-sm text-(--warn)">
                  {friendlyError(error)}
                </div>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput onSubmit={onSubmit} className="border-t border-(--line) p-2">
            <PromptInputBody>
              <PromptInputTextarea
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder={busy ? "Thinking…" : "Ask a question…"}
                aria-label="Chat message"
              />
            </PromptInputBody>
            <PromptInputFooter>
              <PromptInputTools />
              <PromptInputSubmit
                status={status}
                onStop={stop}
                disabled={!busy && !input.trim()}
              />
            </PromptInputFooter>
          </PromptInput>
        </div>
      )}
    </>
  );
}
