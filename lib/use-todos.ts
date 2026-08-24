"use client";

// Shared client-side data layer for the group's to-do store.
// Used by the board (/todos) and the live next-steps document (/next-steps).

import { useCallback, useEffect, useRef, useState } from "react";

export type Todo = {
  id: string;
  text: string;
  by: string;
  assignee?: string;
  theme?: string;
  due?: string | null;
  key?: string | null;
  done: boolean;
  ts: number;
};

export type TodoData = { todos: Todo[]; people: string[]; themes: string[] };

export const LS_PASSCODE = "padel-passcode";
export const LS_NAME = "padel-display-name";

// Internal sentinel for "no assignee" in Select components (empty string is not
// a usable select value). Never rendered: every Select maps it to the visible
// label "Unassigned" via Base UI's `items` prop.
export const NONE = "@none";

export function loadLS(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function saveLS(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

/** "b1-millwood" → "Stage 1", "b3-preapp" → "Stage 3", anything else → null. */
export function stageLabel(key?: string | null): string | null {
  const m = key?.match(/^b([123])-/);
  return m ? `Stage ${m[1]}` : null;
}

export function formatDue(due: string): string {
  return new Date(`${due}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

export function isOverdue(due?: string | null, done?: boolean): boolean {
  if (!due || done) return false;
  const today = new Date();
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return due < iso;
}

function parseData(raw: unknown): TodoData {
  if (Array.isArray(raw)) return { todos: raw as Todo[], people: [], themes: [] };
  const obj = raw as Partial<TodoData>;
  return {
    todos: Array.isArray(obj?.todos) ? obj.todos : [],
    people: Array.isArray(obj?.people) ? obj.people : [],
    themes: Array.isArray(obj?.themes) ? obj.themes : [],
  };
}

function headers(): Record<string, string> {
  const h: Record<string, string> = { "Content-Type": "application/json" };
  const pc = loadLS(LS_PASSCODE);
  if (pc) h["x-passcode"] = pc;
  return h;
}

export type MutateOptions = {
  /** Applied to local state immediately; reverted if the request fails. */
  optimistic?: (todos: Todo[]) => Todo[];
};

export type TodosApi = {
  data: TodoData | null;
  todos: Todo[];
  people: string[];
  themes: string[];
  error: string | null;
  busy: boolean;
  refetch: () => Promise<void>;
  mutate: (body: Record<string, unknown>, opts?: MutateOptions) => Promise<boolean>;
  // passcode flow (mutations 401 until the group passcode is stored)
  needPasscode: boolean;
  passcodeError: string | null;
  submitPasscode: (passcode: string) => void;
  cancelPasscode: () => void;
};

export function useTodos(): TodosApi {
  const [data, setData] = useState<TodoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [needPasscode, setNeedPasscode] = useState(false);
  const [passcodeError, setPasscodeError] = useState<string | null>(null);

  const dataRef = useRef<TodoData | null>(null);
  const busyRef = useRef(false);
  const pendingRef = useRef<{
    body: Record<string, unknown>;
    opts?: MutateOptions;
  } | null>(null);

  // keep the ref in lockstep with state so mutate can snapshot/revert
  const commit = useCallback((d: TodoData | null) => {
    dataRef.current = d;
    setData(d);
  }, []);

  const refetch = useCallback(async () => {
    if (busyRef.current) return; // don't clobber an in-flight optimistic update
    try {
      const res = await fetch("/api/todos", { cache: "no-store" });
      if (!res.ok) {
        // only surface load errors before first successful load
        if (dataRef.current === null) {
          let msg = `Couldn’t load to-dos (${res.status}).`;
          try {
            const d = await res.json();
            if (d?.error) msg = d.error;
          } catch {
            /* ignore */
          }
          setError(msg);
        }
        return;
      }
      const parsed = parseData(await res.json());
      if (busyRef.current) return;
      commit(parsed);
    } catch {
      if (dataRef.current === null) setError("Network error — couldn’t load to-dos.");
    }
  }, [commit]);

  // initial load + refetch on focus / tab visible + light poll while visible
  useEffect(() => {
    // refetch is async: state updates land after the fetch resolves, not
    // synchronously in the effect body.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refetch();
    const onFocus = () => void refetch();
    const onVisible = () => {
      if (document.visibilityState === "visible") void refetch();
    };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") void refetch();
    }, 30_000);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(interval);
    };
  }, [refetch]);

  const mutate = useCallback(
    async (
      body: Record<string, unknown>,
      opts?: MutateOptions,
      isRetry = false,
    ): Promise<boolean> => {
      const snapshot = dataRef.current;
      if (opts?.optimistic && snapshot) {
        commit({ ...snapshot, todos: opts.optimistic(snapshot.todos) });
      }
      setBusy(true);
      busyRef.current = true;
      setError(null);
      const revert = () => {
        if (opts?.optimistic && snapshot) commit(snapshot);
      };
      try {
        const res = await fetch("/api/todos", {
          method: "POST",
          headers: headers(),
          body: JSON.stringify(body),
        });
        if (res.status === 401) {
          revert();
          // prompt for the passcode once, store it, retry once
          pendingRef.current = { body, opts };
          setPasscodeError(
            isRetry ? "That passcode wasn’t accepted — try again." : null,
          );
          setNeedPasscode(true);
          return false;
        }
        if (!res.ok) {
          revert();
          let msg = `That didn’t save (${res.status}).`;
          try {
            const d = await res.json();
            if (d?.error) msg = d.error;
          } catch {
            /* ignore */
          }
          setError(msg);
          return false;
        }
        commit(parseData(await res.json()));
        return true;
      } catch {
        revert();
        setError("Network error — that didn’t save.");
        return false;
      } finally {
        setBusy(false);
        busyRef.current = false;
      }
    },
    [commit],
  );

  const submitPasscode = useCallback(
    (passcode: string) => {
      const pc = passcode.trim();
      if (!pc) return;
      saveLS(LS_PASSCODE, pc);
      setNeedPasscode(false);
      setPasscodeError(null);
      const pending = pendingRef.current;
      pendingRef.current = null;
      if (pending) void mutate(pending.body, pending.opts, true);
    },
    [mutate],
  );

  const cancelPasscode = useCallback(() => {
    setNeedPasscode(false);
    setPasscodeError(null);
    pendingRef.current = null;
  }, []);

  return {
    data,
    todos: data?.todos ?? [],
    people: data?.people ?? [],
    themes: data?.themes ?? [],
    error,
    busy,
    refetch,
    mutate,
    needPasscode,
    passcodeError,
    submitPasscode,
    cancelPasscode,
  };
}
