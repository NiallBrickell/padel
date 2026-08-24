"use client";

// ONE progress indicator for the whole plan, shown on /next-steps and /todos:
// a single horizontal track segmented into the three stages (segment width
// proportional to that stage's task count), filled by done tasks, with one
// overall count and the three stage names as small labels under their
// segments. The active stage label carries the accent; later stages sit
// muted. This replaces the old three-card strip.

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
  const doneAll = STAGES.reduce((n, s) => n + progress[s.prefix].done, 0);
  const totalAll = STAGES.reduce((n, s) => n + progress[s.prefix].total, 0);

  function stateOf(prefix: StagePrefix): "complete" | "active" | "locked" {
    const { done, total } = progress[prefix];
    if (!loading && total > 0 && done === total) return "complete";
    if (prefix === active || active === null) return "active";
    return "locked";
  }

  return (
    <div className="stage-bar breakout font-ui">
      <div className="sb-top">
        <span className="sb-kicker">Progress</span>
        <span className="sb-count">
          {loading || totalAll === 0 ? "…" : `${doneAll} of ${totalAll} done`}
        </span>
      </div>
      <div
        className="sb-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={totalAll || 1}
        aria-valuenow={doneAll}
        aria-label={
          loading || totalAll === 0
            ? "Progress loading"
            : `${doneAll} of ${totalAll} tasks done`
        }
      >
        {STAGES.map((s) => {
          const { done, total } = progress[s.prefix];
          const pct = total > 0 ? (done / total) * 100 : 0;
          return (
            <div
              key={s.prefix}
              className={`sb-seg ${stateOf(s.prefix)}`}
              style={{ flexGrow: total > 0 ? total : 1 }}
              aria-hidden="true"
            >
              <div className="sb-fill" style={{ width: `${pct}%` }} />
            </div>
          );
        })}
      </div>
      <div className="sb-labels">
        {STAGES.map((s) => {
          const { done, total } = progress[s.prefix];
          return (
            <div
              key={s.prefix}
              className={`sb-label ${stateOf(s.prefix)}`}
              style={{ flexGrow: total > 0 ? total : 1 }}
            >
              <span className="sb-name">
                Stage {s.n} — {s.name}
              </span>
              <span
                className="sb-ct"
                aria-label={`${done} of ${total} done in stage ${s.n}`}
              >
                {total > 0 ? `${done}/${total}` : loading ? "…" : "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
