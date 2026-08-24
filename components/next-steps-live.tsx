"use client";

// Live layer for the next-steps document: each bet block links to the shared
// to-do store by stable `key`. Blocks with no matching store item render
// exactly as the static document (fallback). Assignment works two ways:
// a compact select menu in the bet's header, or dragging the bet onto a
// person chip in the sticky rail.

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { Checkbox } from "@/components/ui/checkbox";
import { StageStrip } from "@/components/stage-strip";
import {
  AssigneeSelect,
  DueBadge,
  PasscodeOverlay,
} from "@/components/todo-bits";
import { useTodos, type Todo, type TodosApi } from "@/lib/use-todos";

type LiveCtx = TodosApi & { byKey: Map<string, Todo> };

const Ctx = createContext<LiveCtx | null>(null);

export function NextStepsLive({ children }: { children: ReactNode }) {
  const api = useTodos();
  const byKey = useMemo(() => {
    const m = new Map<string, Todo>();
    for (const t of api.todos) if (t.key) m.set(t.key, t);
    return m;
  }, [api.todos]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 8 } }),
  );
  const active = activeId ? api.todos.find((t) => t.id === activeId) : null;

  function onDragEnd(e: DragEndEvent) {
    setActiveId(null);
    const overId = e.over?.id;
    if (typeof overId !== "string" || !overId.startsWith("person:")) return;
    const assignee = overId.slice("person:".length); // "" = unassigned
    const id = String(e.active.id);
    const t = api.todos.find((x) => x.id === id);
    if (!t || (t.assignee || "") === assignee) return;
    void api.mutate(
      { action: "assign", id, assignee },
      {
        optimistic: (todos) =>
          todos.map((x) => (x.id === id ? { ...x, assignee } : x)),
      },
    );
  }

  return (
    <Ctx.Provider value={{ ...api, byKey }}>
      <DndContext
        sensors={sensors}
        onDragStart={(e) => setActiveId(String(e.active.id))}
        onDragCancel={() => setActiveId(null)}
        onDragEnd={onDragEnd}
      >
        {children}
        <DragOverlay dropAnimation={null}>
          {active ? (
            <div className="drag-ghost font-ui">{active.text}</div>
          ) : null}
        </DragOverlay>
      </DndContext>
      <PasscodeOverlay
        open={api.needPasscode}
        error={api.passcodeError}
        onSubmit={api.submitPasscode}
        onCancel={api.cancelPasscode}
      />
    </Ctx.Provider>
  );
}

/* ---------------- stage progress strip (live wrapper) ---------------- */

/** The three-stage progress strip, fed from the shared store via context. */
export function LiveStageStrip() {
  const ctx = useContext(Ctx);
  return (
    <StageStrip todos={ctx?.todos ?? []} loading={!ctx || ctx.data === null} />
  );
}

/* ---------------- person chip rail ---------------- */

export function PeopleRail() {
  const ctx = useContext(Ctx);
  if (!ctx || ctx.data === null) return null; // static document until data loads
  const counts = new Map<string, number>();
  for (const t of ctx.todos) {
    if (t.done) continue;
    const who = t.assignee || "";
    counts.set(who, (counts.get(who) ?? 0) + 1);
  }
  return (
    <div
      className="bet-rail font-ui"
      role="group"
      aria-label="People — drop a bet on a name to assign it"
    >
      <span className="rail-hint" aria-hidden="true">
        drag a bet onto a name
      </span>
      {ctx.people.map((p) => (
        <RailChip key={p} name={p} label={p} count={counts.get(p) ?? 0} />
      ))}
      <RailChip name="" label="Unassigned" count={counts.get("") ?? 0} />
    </div>
  );
}

function RailChip({
  name,
  label,
  count,
}: {
  name: string;
  label: string;
  count: number;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: `person:${name}` });
  return (
    <span ref={setNodeRef} className={`rail-chip${isOver ? " over" : ""}`}>
      {label}
      <span className="ct">{count}</span>
    </span>
  );
}

/* ---------------- bet blocks ---------------- */

// Controls live inside draggable elements — don't start drags from them.
const stopDrag = {
  onPointerDown: (e: { stopPropagation: () => void }) => e.stopPropagation(),
  onTouchStart: (e: { stopPropagation: () => void }) => e.stopPropagation(),
};

/** The done checkbox, alone — it leads the header strip, before the title. */
function BetCheck({ ctx, item }: { ctx: LiveCtx; item: Todo }) {
  return (
    <span className="bet-check-wrap" {...stopDrag}>
      <Checkbox
        checked={item.done}
        onCheckedChange={() =>
          void ctx.mutate(
            { action: "toggle", id: item.id },
            {
              optimistic: (todos) =>
                todos.map((x) =>
                  x.id === item.id ? { ...x, done: !x.done } : x,
                ),
            },
          )
        }
        className="bet-check"
        aria-label={`Mark “${item.text}” as ${item.done ? "not done" : "done"}`}
      />
    </span>
  );
}

/**
 * The trailing control cluster: assignee select, due pill, drag grip.
 * (No theme badge here — themes are a board-only concept; inside the document
 * they read as noise.)
 */
function BetMeta({ ctx, item }: { ctx: LiveCtx; item: Todo }) {
  return (
    <span className="bet-meta font-ui" {...stopDrag}>
      <AssigneeSelect
        value={item.assignee || ""}
        people={ctx.people}
        onChange={(assignee) =>
          void ctx.mutate(
            { action: "assign", id: item.id, assignee },
            {
              optimistic: (todos) =>
                todos.map((x) => (x.id === item.id ? { ...x, assignee } : x)),
            },
          )
        }
        size="sm"
        className={`pill-select${item.assignee ? " assigned" : ""}`}
        ariaLabel={`Assignee for “${item.text}”`}
        noneLabel="assign"
      />
      <DueBadge
        due={item.due}
        done={item.done}
        onChange={(due) =>
          void ctx.mutate(
            { action: "set-due", id: item.id, due },
            {
              optimistic: (todos) =>
                todos.map((x) => (x.id === item.id ? { ...x, due } : x)),
            },
          )
        }
        label={`Due date for “${item.text}”`}
      />
      <span className="grip" aria-hidden="true">
        ⠿
      </span>
    </span>
  );
}

/**
 * A full bet block (h3 + content). If the store has an item with `betKey`,
 * the block becomes a live card: done checkbox, assignee menu, due date and
 * drag-to-assign. Otherwise it renders the static document markup unchanged.
 */
export function Bet({
  betKey,
  id,
  className,
  title,
  children,
}: {
  betKey: string;
  /** Anchor id placed on the h3 (used by the TOC scrollspy). */
  id?: string;
  /** Extra class on the card wrapper (e.g. "fun"). */
  className?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  const ctx = useContext(Ctx);
  const item = ctx?.byKey.get(betKey);
  if (!ctx || !item) {
    // No matching store item (or data not loaded yet): same card chrome,
    // no live controls — the document reads identically either way.
    return (
      <div className={`bet-card${className ? ` ${className}` : ""}`}>
        <div className="bet-head static">
          <h3 id={id}>{title}</h3>
        </div>
        {children}
      </div>
    );
  }
  return (
    <BetCard ctx={ctx} item={item} id={id} className={className} title={title}>
      {children}
    </BetCard>
  );
}

function BetCard({
  ctx,
  item,
  id,
  className,
  title,
  children,
}: {
  ctx: LiveCtx;
  item: Todo;
  id?: string;
  className?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  const { setNodeRef, listeners, isDragging } = useDraggable({ id: item.id });
  return (
    <div
      ref={setNodeRef}
      className={`bet-card${item.done ? " done" : ""}${isDragging ? " dragging" : ""}${className ? ` ${className}` : ""}`}
    >
      <div className="bet-head" {...listeners}>
        <BetCheck ctx={ctx} item={item} />
        <h3 id={id}>{title}</h3>
        <BetMeta ctx={ctx} item={item} />
      </div>
      {children}
    </div>
  );
}

/**
 * A live list item (used for bets that are a single `<li>` in the document,
 * e.g. the gating decisions). Falls back to a plain `<li>`.
 */
export function BetLi({
  betKey,
  children,
}: {
  betKey: string;
  children: ReactNode;
}) {
  const ctx = useContext(Ctx);
  const item = ctx?.byKey.get(betKey);
  if (!ctx || !item) return <li>{children}</li>;
  return (
    <BetLiCard ctx={ctx} item={item}>
      {children}
    </BetLiCard>
  );
}

function BetLiCard({
  ctx,
  item,
  children,
}: {
  ctx: LiveCtx;
  item: Todo;
  children: ReactNode;
}) {
  const { setNodeRef, listeners, isDragging } = useDraggable({ id: item.id });
  return (
    <li
      ref={setNodeRef}
      {...listeners}
      className={`bet-li${item.done ? " done" : ""}${isDragging ? " dragging" : ""}`}
    >
      {children}
      <span className="bet-controls font-ui">
        <BetCheck ctx={ctx} item={item} />
        <BetMeta ctx={ctx} item={item} />
      </span>
    </li>
  );
}

/**
 * A compact live sub-task row for store items that share a bet block
 * (e.g. the GS&P / SHW briefs inside bet 2). Renders nothing when the store
 * has no matching item — the document then reads exactly as before.
 */
export function SubBet({ betKey, label }: { betKey: string; label: string }) {
  const ctx = useContext(Ctx);
  const item = ctx?.byKey.get(betKey);
  if (!ctx || !item) return null;
  return <SubBetRow ctx={ctx} item={item} label={label} />;
}

function SubBetRow({
  ctx,
  item,
  label,
}: {
  ctx: LiveCtx;
  item: Todo;
  label: string;
}) {
  const { setNodeRef, listeners, isDragging } = useDraggable({ id: item.id });
  return (
    <li
      ref={setNodeRef}
      {...listeners}
      className={`subbet${item.done ? " done" : ""}${isDragging ? " dragging" : ""}`}
      title={item.text}
    >
      <BetCheck ctx={ctx} item={item} />
      <span className="subbet-label">↳ {label}</span>
      <BetMeta ctx={ctx} item={item} />
    </li>
  );
}
