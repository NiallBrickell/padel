// The three-stage structure of the next-steps plan, derived from the shared
// to-do store. A store item's stage is its key prefix: "b1-*" → Stage 1,
// "b2-*" → Stage 2, "b3-*" → Stage 3 (other keys, e.g. "fun-play", belong to
// no stage). Used by the stage progress strip on /next-steps and /todos and by
// the "Stage n" chips on board cards.

import type { Todo } from "@/lib/use-todos";

export type StagePrefix = "b1" | "b2" | "b3";

export type StageInfo = {
  prefix: StagePrefix;
  n: 1 | 2 | 3;
  name: string;
  /** One-line note shown while the stage is still locked (dimmed). */
  unlockNote: string | null;
  /** Quiet line shown when every store item in the stage is done. */
  completeLine: string;
};

export const STAGES: StageInfo[] = [
  {
    prefix: "b1",
    n: 1,
    name: "Find out if it’s real",
    unlockNote: null,
    completeLine: "Stage 1 complete — the idea survived contact with reality.",
  },
  {
    prefix: "b2",
    n: 2,
    name: "Put the pieces in place",
    unlockNote: "unlocked by Stage 1’s answers",
    completeLine:
      "Stage 2 complete — a company that can actually receive money.",
  },
  {
    prefix: "b3",
    n: 3,
    name: "Commit or stop",
    unlockNote: "unlocked by a building shortlist and the structure decisions",
    completeLine: "Stage 3 complete — keys, or a clean, cheap stop.",
  },
];

/** "b1-millwood" → "b1"; "fun-play" → null. */
export function stageOf(key?: string | null): StagePrefix | null {
  const m = key?.match(/^(b[123])-/);
  return (m?.[1] as StagePrefix | undefined) ?? null;
}

export type StageProgress = { done: number; total: number };

export function stageProgress(
  todos: Todo[],
): Record<StagePrefix, StageProgress> {
  const p: Record<StagePrefix, StageProgress> = {
    b1: { done: 0, total: 0 },
    b2: { done: 0, total: 0 },
    b3: { done: 0, total: 0 },
  };
  for (const t of todos) {
    const s = stageOf(t.key);
    if (!s) continue;
    p[s].total += 1;
    if (t.done) p[s].done += 1;
  }
  return p;
}

/**
 * The first stage that still has open work (or no known work yet). Null when
 * every stage has items and all of them are done.
 */
export function activeStage(
  progress: Record<StagePrefix, StageProgress>,
): StagePrefix | null {
  for (const s of STAGES) {
    const { done, total } = progress[s.prefix];
    if (total === 0 || done < total) return s.prefix;
  }
  return null;
}
