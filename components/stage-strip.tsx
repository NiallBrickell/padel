"use client";

// Three-segment stage progress strip shown at the top of the next-steps
// document and the /todos board. Each segment fills from live store data
// (done/total by key prefix); the currently-active stage carries the accent,
// later stages sit dimmed with their "unlocked by…" note, and a fully-done
// stage shows a quiet completion line. No confetti, no points.

import {
  STAGES,
  activeStage,
  stageProgress,
  type StagePrefix,
} from "@/lib/stages";
import type { Todo } from "@/lib/use-todos";

export function StageStrip({
  todos,
  loading,
}: {
  todos: Todo[];
  loading?: boolean;
}) {
  const progress = stageProgress(todos);
  const active: StagePrefix | null = loading ? "b1" : activeStage(progress);

  return (
    <div
      className="stage-strip breakout font-ui"
      role="group"
      aria-label="Progress through the three stages"
    >
      {STAGES.map((s) => {
        const { done, total } = progress[s.prefix];
        const complete = !loading && total > 0 && done === total;
        const state = complete
          ? "complete"
          : s.prefix === active || active === null
            ? "active"
            : "locked";
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        return (
          <div key={s.prefix} className={`stage-seg ${state}`}>
            <div className="seg-top">
              <span className="seg-kicker">Stage {s.n}</span>
              <span
                className="seg-count"
                aria-label={`${done} of ${total} done`}
              >
                {total > 0 ? `${done}/${total}` : loading ? "…" : "—"}
              </span>
            </div>
            <div className="seg-name">{s.name}</div>
            <div
              className="seg-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              aria-label={`Stage ${s.n} progress`}
            >
              <div className="seg-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="seg-note">
              {complete
                ? s.completeLine
                : state === "locked"
                  ? s.unlockNote
                  : " "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
