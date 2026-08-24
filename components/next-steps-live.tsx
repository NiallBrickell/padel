"use client";

// Live layer for the next-steps document: each bet block links to the shared
// to-do store by stable `key`. Blocks with no matching store item render the
// same collapsible card without the live controls (fallback). Assignment
// works two ways: a compact select menu in the bet's header, or dragging the
// bet onto a person chip in the sticky rail.
//
// Every bet renders collapsed by default — a compact row with the number,
// title, live controls and a one-line summary — and expands on click to the
// full who / the ask / what we want / the read card. Expansion state is
// remembered per card in localStorage.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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

/* ---------------- stage progress bar (live wrapper) ---------------- */

/** The single segmented progress bar, fed from the shared store via context. */
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
      aria-label="People — drop a move on a name to assign it"
    >
      <span className="rail-hint" aria-hidden="true">
        drag a move onto a name
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

// Controls live inside draggable, clickable elements — don't start drags from
// them, and don't let their clicks toggle the card open/closed.
const stopThrough = {
  onPointerDown: (e: { stopPropagation: () => void }) => e.stopPropagation(),
  onTouchStart: (e: { stopPropagation: () => void }) => e.stopPropagation(),
  onClick: (e: { stopPropagation: () => void }) => e.stopPropagation(),
};

/** The done checkbox, alone — it leads the header strip, before the title. */
function BetCheck({ ctx, item }: { ctx: LiveCtx; item: Todo }) {
  return (
    <span className="bet-check-wrap" data-controls {...stopThrough}>
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

/** The trailing control cluster: assignee select, due pill, drag grip. */
function BetMeta({ ctx, item }: { ctx: LiveCtx; item: Todo }) {
  return (
    <span className="bet-meta font-ui" data-controls {...stopThrough}>
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

/** Expansion state per card, remembered in localStorage (nice-to-have). */
function useCardOpen(storeKey: string | undefined, collapsible: boolean) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Restore persisted expansion once, after hydration — reading storage
    // during render would mismatch the server-rendered (collapsed) HTML.
    if (!collapsible || !storeKey) return;
    try {
      if (localStorage.getItem(`ns-open:${storeKey}`) === "1") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot post-hydration restore from an external store
        setOpen(true);
      }
    } catch {
      /* storage unavailable — default collapsed */
    }
  }, [collapsible, storeKey]);
  const toggle = useCallback(() => {
    setOpen((o) => {
      const next = !o;
      if (storeKey) {
        try {
          localStorage.setItem(`ns-open:${storeKey}`, next ? "1" : "0");
        } catch {
          /* fine */
        }
      }
      return next;
    });
  }, [storeKey]);
  return [open, toggle] as const;
}

type BetProps = {
  /** Stable store key; omit for cards with no single store item (bet 5). */
  betKey?: string;
  /** Anchor id placed on the h3 (used by the TOC scrollspy). */
  id?: string;
  /** The move's number in the sheet (1–12). */
  no?: number;
  /** Extra class on the card wrapper (e.g. "fun"). */
  className?: string;
  title: ReactNode;
  /** One-line collapsed summary (the scoreboard's "What it tells us"). */
  summary?: string;
  children?: ReactNode;
};

/**
 * A bet/move card. Collapsed by default: number + title + live controls +
 * summary line. Click anywhere on the row (except the controls) to expand the
 * full card. If the store has an item with `betKey`, the header carries the
 * live controls (done / assignee / due / drag-to-assign); otherwise the same
 * card renders without them and the document reads identically.
 */
export function Bet(props: BetProps) {
  const ctx = useContext(Ctx);
  const item = props.betKey ? ctx?.byKey.get(props.betKey) : undefined;
  if (!ctx || !item) return <StaticBet {...props} />;
  return <LiveBet {...props} ctx={ctx} item={item} />;
}

function StaticBet(props: BetProps) {
  const collapsible = props.children != null;
  const [open, toggle] = useCardOpen(props.betKey ?? props.id, collapsible);
  return (
    <CardChrome {...props} open={open} onToggle={toggle} collapsible={collapsible} />
  );
}

function LiveBet({
  ctx,
  item,
  ...props
}: BetProps & { ctx: LiveCtx; item: Todo }) {
  const collapsible = props.children != null;
  const [open, toggle] = useCardOpen(props.betKey ?? props.id, collapsible);
  const { setNodeRef, listeners, isDragging } = useDraggable({ id: item.id });
  return (
    <CardChrome
      {...props}
      open={open}
      onToggle={toggle}
      collapsible={collapsible}
      done={item.done}
      dragging={isDragging}
      dragRef={setNodeRef}
      listeners={listeners}
      lead={<BetCheck ctx={ctx} item={item} />}
      meta={<BetMeta ctx={ctx} item={item} />}
    />
  );
}

function CardChrome({
  id,
  no,
  className,
  title,
  summary,
  children,
  open,
  onToggle,
  collapsible,
  done,
  dragging,
  dragRef,
  listeners,
  lead,
  meta,
}: BetProps & {
  open: boolean;
  onToggle: () => void;
  collapsible: boolean;
  done?: boolean;
  dragging?: boolean;
  dragRef?: (el: HTMLElement | null) => void;
  listeners?: Record<string, unknown>;
  lead?: ReactNode;
  meta?: ReactNode;
}) {
  const bodyId = id ? `${id}-body` : undefined;
  const live = lead != null || meta != null;
  const cls =
    `bet-card${collapsible ? " clps" : ""}${open ? " open" : ""}` +
    `${done ? " done" : ""}${dragging ? " dragging" : ""}` +
    `${className ? ` ${className}` : ""}`;
  return (
    <div ref={dragRef} className={cls}>
      <div
        className={`bet-head${live ? "" : " static"}`}
        {...(listeners ?? {})}
        onClick={
          collapsible
            ? (e) => {
                const t = e.target as HTMLElement | null;
                if (t?.closest("[data-controls]")) return;
                onToggle();
              }
            : undefined
        }
      >
        {lead}
        <h3 id={id} className="bet-title">
          {collapsible ? (
            <button
              type="button"
              className="bet-toggle"
              aria-expanded={open}
              aria-controls={bodyId}
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              {no != null && (
                <span className="bet-no font-ui" aria-hidden="true">
                  {no}
                </span>
              )}
              <span className="bet-title-text">{title}</span>
            </button>
          ) : (
            <>
              {no != null && (
                <span className="bet-no font-ui" aria-hidden="true">
                  {no}
                </span>
              )}
              {title}
            </>
          )}
        </h3>
        {meta}
        {collapsible && <span className="chev" aria-hidden="true" />}
      </div>
      {collapsible && summary ? (
        <p className="bet-summary">{summary}</p>
      ) : null}
      {collapsible ? (
        <div id={bodyId} className="bet-body">
          <div className="bet-body-in" inert={!open}>
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

/**
 * A compact live sub-task row for store items that share a bet block
 * (e.g. the GS&P / SHW briefs inside bet 2, or the two decisions in bet 5).
 * Renders nothing when the store has no matching item — the document then
 * reads exactly as before.
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
