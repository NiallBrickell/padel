"use client";

// Shared to-do board: kanban columns (Unassigned + one per person) with
// drag-to-assign on wide screens, and the original list layout on narrow ones.

import { useEffect, useMemo, useRef, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  AssigneeSelect,
  BatchBadge,
  DueBadge,
  PasscodeOverlay,
  ThemeBadge,
  ThemeSelect,
  TrashIcon,
  themeSlot,
} from "@/components/todo-bits";
import {
  LS_NAME,
  loadLS,
  saveLS,
  useTodos,
  type Todo,
  type TodosApi,
} from "@/lib/use-todos";

const ALL = null;
const NO_THEME = "__none__"; // internal filter sentinel only — never rendered

function byBoardOrder(a: Todo, b: Todo) {
  // open cards first, then done cards sink to the bottom; oldest first
  return Number(a.done) - Number(b.done) || a.ts - b.ts;
}

export default function TodosPage() {
  const api = useTodos();
  const { todos, people, themes, mutate, busy, error, data } = api;

  // add form
  const [input, setInput] = useState("");
  const [addAssignee, setAddAssignee] = useState("");
  const [addTheme, setAddTheme] = useState("");
  const [addDue, setAddDue] = useState("");

  // display name, asked once before the first add
  const [needName, setNeedName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const pendingAddRef = useRef<{
    text: string;
    assignee: string;
    theme: string;
    due: string;
  } | null>(null);

  // filters
  const [themeFilter, setThemeFilter] = useState<string | null>(ALL);
  const [personFilter, setPersonFilter] = useState<string | null>(ALL); // list view

  // managers
  const [managePeople, setManagePeople] = useState(false);
  const [personInput, setPersonInput] = useState("");
  const [manageThemes, setManageThemes] = useState(false);
  const [themeInput, setThemeInput] = useState("");

  // board on wide screens, list fallback on narrow
  const [isWide, setIsWide] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 760px)");
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const themeFiltered = useMemo(() => {
    if (themeFilter === ALL) return todos;
    if (themeFilter === NO_THEME) return todos.filter((t) => !t.theme);
    return todos.filter((t) => t.theme === themeFilter);
  }, [todos, themeFilter]);

  const openCount = todos.filter((t) => !t.done).length;

  function submitAdd() {
    const text = input.trim();
    if (!text || busy) return;
    const by = loadLS(LS_NAME);
    if (!by) {
      pendingAddRef.current = {
        text,
        assignee: addAssignee,
        theme: addTheme,
        due: addDue,
      };
      setNeedName(true);
      return;
    }
    setInput("");
    setAddAssignee("");
    setAddTheme("");
    setAddDue("");
    void mutate({
      action: "add",
      text,
      by,
      assignee: addAssignee,
      theme: addTheme,
      due: addDue || null,
    });
  }

  function submitName(e: React.FormEvent) {
    e.preventDefault();
    const name = nameInput.trim();
    if (!name) return;
    saveLS(LS_NAME, name);
    setNeedName(false);
    const pending = pendingAddRef.current;
    pendingAddRef.current = null;
    if (pending) {
      setInput("");
      setAddAssignee("");
      setAddTheme("");
      setAddDue("");
      void mutate({
        action: "add",
        text: pending.text,
        by: name,
        assignee: pending.assignee,
        theme: pending.theme,
        due: pending.due || null,
      });
    }
  }

  return (
    <div className="shell">
      <div className="layout">
        <div className="min-w-0">
          <header className="doc">
            <p className="kicker">Shared board</p>
            <h1>To-dos</h1>
            <p className="meta">
              The group’s shared action board — drawn from the next-steps sheet.
              {data && (
                <>
                  {" "}
                  <b>
                    {openCount} open · {todos.length - openCount} done
                  </b>
                </>
              )}
            </p>
          </header>

          <main className="doc-body">
            <section className="todos-page" style={{ paddingTop: "1.2rem" }}>
              {error && (
                <p className="mb-3 max-w-xl rounded-md border border-(--warn-line) bg-(--warn-bg) px-3 py-2 font-ui text-sm text-(--warn)">
                  {error}
                </p>
              )}

              {data === null && !error && (
                <p className="font-ui text-sm text-(--muted)">Loading…</p>
              )}

              {data !== null && (
                <>
                  {themes.length > 0 && todos.length > 0 && (
                    <div
                      className="mb-4 flex flex-wrap items-center gap-1.5 font-ui"
                      role="group"
                      aria-label="Filter by theme"
                    >
                      <span className="text-xs font-semibold text-(--muted)">
                        Theme:
                      </span>
                      <button
                        type="button"
                        onClick={() => setThemeFilter(ALL)}
                        className={`todo-chip${themeFilter === ALL ? " on" : ""}`}
                      >
                        All
                      </button>
                      {themes.map((th) => (
                        <button
                          key={th}
                          type="button"
                          onClick={() =>
                            setThemeFilter(themeFilter === th ? ALL : th)
                          }
                          className={`todo-chip theme-chip th-${themeSlot(th)}${themeFilter === th ? " on" : ""}`}
                        >
                          {th}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          setThemeFilter(themeFilter === NO_THEME ? ALL : NO_THEME)
                        }
                        className={`todo-chip${themeFilter === NO_THEME ? " on" : ""}`}
                      >
                        No theme
                      </button>
                    </div>
                  )}

                  {todos.length === 0 && (
                    <p className="font-ui text-sm text-(--muted)">
                      Nothing here yet — add the first to-do below.
                    </p>
                  )}

                  {isWide !== null &&
                    (isWide ? (
                      <Board api={api} todos={themeFiltered} />
                    ) : (
                      <ListView
                        api={api}
                        todos={themeFiltered}
                        personFilter={personFilter}
                        setPersonFilter={setPersonFilter}
                      />
                    ))}

                  {/* add form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      submitAdd();
                    }}
                    className="mt-6 flex max-w-3xl flex-wrap items-center gap-2"
                  >
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Add a to-do…"
                      disabled={busy}
                      aria-label="New to-do"
                      className="min-w-48 flex-1"
                    />
                    <AssigneeSelect
                      value={addAssignee}
                      people={people}
                      onChange={setAddAssignee}
                      size="default"
                      className="w-32 font-ui"
                      ariaLabel="Assign to"
                    />
                    <ThemeSelect
                      value={addTheme}
                      themes={themes}
                      onChange={setAddTheme}
                      size="default"
                      className="w-40 font-ui"
                      ariaLabel="Theme"
                    />
                    <Input
                      type="date"
                      value={addDue}
                      onChange={(e) => setAddDue(e.target.value)}
                      aria-label="Due date"
                      className="w-38 font-ui"
                    />
                    <Button type="submit" disabled={busy || !input.trim()}>
                      Add
                    </Button>
                  </form>

                  {/* people + themes managers */}
                  <div className="mt-8 flex flex-col gap-3 border-t border-(--line-soft) pt-3 font-ui text-sm text-(--muted)">
                    <div>
                      <button
                        type="button"
                        className="text-xs font-semibold text-(--muted) hover:text-(--ink)"
                        onClick={() => setManagePeople(!managePeople)}
                        aria-expanded={managePeople}
                      >
                        People ({people.length}) {managePeople ? "▾" : "▸"}
                      </button>
                      {managePeople && (
                        <div className="mt-2 flex flex-col gap-2">
                          <div className="flex flex-wrap gap-1.5">
                            {people.map((p) => (
                              <span key={p} className="todo-chip static">
                                {p}
                                <button
                                  type="button"
                                  onClick={() =>
                                    void mutate({ action: "remove-person", name: p })
                                  }
                                  disabled={busy}
                                  aria-label={`Remove ${p}`}
                                  className="ml-1 hover:text-(--warn)"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const name = personInput.trim();
                              if (!name || busy) return;
                              setPersonInput("");
                              void mutate({ action: "add-person", name });
                            }}
                            className="flex items-center gap-2"
                          >
                            <Input
                              value={personInput}
                              onChange={(e) => setPersonInput(e.target.value)}
                              placeholder="Add a name…"
                              aria-label="New person"
                              className="h-8 max-w-48 text-sm"
                            />
                            <Button
                              type="submit"
                              size="sm"
                              variant="outline"
                              disabled={busy || !personInput.trim()}
                            >
                              Add person
                            </Button>
                          </form>
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        type="button"
                        className="text-xs font-semibold text-(--muted) hover:text-(--ink)"
                        onClick={() => setManageThemes(!manageThemes)}
                        aria-expanded={manageThemes}
                      >
                        Themes ({themes.length}) {manageThemes ? "▾" : "▸"}
                      </button>
                      {manageThemes && (
                        <div className="mt-2 flex flex-col gap-2">
                          <div className="flex flex-wrap gap-1.5">
                            {themes.map((th) => (
                              <span
                                key={th}
                                className={`todo-chip static theme-chip th-${themeSlot(th)}`}
                              >
                                {th}
                                <button
                                  type="button"
                                  onClick={() =>
                                    void mutate({ action: "remove-theme", name: th })
                                  }
                                  disabled={busy}
                                  aria-label={`Remove theme ${th}`}
                                  className="ml-1 hover:text-(--warn)"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const name = themeInput.trim();
                              if (!name || busy) return;
                              setThemeInput("");
                              void mutate({ action: "add-theme", name });
                            }}
                            className="flex items-center gap-2"
                          >
                            <Input
                              value={themeInput}
                              onChange={(e) => setThemeInput(e.target.value)}
                              placeholder="Add a theme…"
                              aria-label="New theme"
                              className="h-8 max-w-64 text-sm"
                            />
                            <Button
                              type="submit"
                              size="sm"
                              variant="outline"
                              disabled={busy || !themeInput.trim()}
                            >
                              Add theme
                            </Button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </section>
          </main>
        </div>
      </div>

      <PasscodeOverlay
        open={api.needPasscode}
        error={api.passcodeError}
        onSubmit={api.submitPasscode}
        onCancel={api.cancelPasscode}
      />

      {needName && (
        <div className="pc-overlay" role="dialog" aria-modal="true" aria-label="Your name">
          <form className="pc-box font-ui" onSubmit={submitName}>
            <p className="text-sm text-(--ink2)">
              What name should to-dos you add be signed with?
            </p>
            <Input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Your name"
              aria-label="Display name"
              autoFocus
            />
            <div className="flex gap-2">
              <Button type="submit" size="sm" disabled={!nameInput.trim()}>
                Save
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setNeedName(false);
                  pendingAddRef.current = null;
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

/* ---------------- board (wide screens) ---------------- */

function Board({ api, todos }: { api: TodosApi; todos: Todo[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 8 } }),
  );

  // Unassigned + one column per person; legacy assignees not in the people
  // list still get a column so their cards stay visible.
  const columns = useMemo(() => {
    const extra = Array.from(
      new Set(
        todos
          .map((t) => t.assignee || "")
          .filter((a) => a && !api.people.includes(a)),
      ),
    );
    return ["", ...api.people, ...extra];
  }, [api.people, todos]);

  const active = activeId ? todos.find((t) => t.id === activeId) : null;

  function onDragEnd(e: DragEndEvent) {
    setActiveId(null);
    const overId = e.over?.id;
    if (typeof overId !== "string" || !overId.startsWith("person:")) return;
    const assignee = overId.slice("person:".length);
    const id = String(e.active.id);
    const t = todos.find((x) => x.id === id);
    if (!t || (t.assignee || "") === assignee) return;
    void api.mutate(
      { action: "assign", id, assignee },
      {
        optimistic: (all) =>
          all.map((x) => (x.id === id ? { ...x, assignee } : x)),
      },
    );
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={(e) => setActiveId(String(e.active.id))}
      onDragCancel={() => setActiveId(null)}
      onDragEnd={onDragEnd}
    >
      <div className="board font-ui">
        {columns.map((name) => (
          <BoardColumn
            key={name || "@unassigned"}
            name={name}
            api={api}
            cards={todos.filter((t) => (t.assignee || "") === name)}
          />
        ))}
      </div>
      <DragOverlay dropAnimation={null}>
        {active ? (
          <div className="board-card overlay">
            <p className="bc-text clamp">{active.text}</p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function BoardColumn({
  name,
  cards,
  api,
}: {
  name: string; // "" = unassigned
  cards: Todo[];
  api: TodosApi;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: `person:${name}` });
  const sorted = [...cards].sort(byBoardOrder);
  const open = cards.filter((t) => !t.done).length;
  return (
    <div ref={setNodeRef} className={`board-col${isOver ? " over" : ""}`}>
      <div className="col-head">
        <span className="col-name">{name || "Unassigned"}</span>
        <span className="col-count">{open}</span>
      </div>
      <div className="col-body">
        {sorted.map((t) => (
          <BoardCard key={t.id} t={t} api={api} />
        ))}
        {sorted.length === 0 && <div className="col-empty">Drop cards here</div>}
      </div>
    </div>
  );
}

function BoardCard({ t, api }: { t: Todo; api: TodosApi }) {
  const { setNodeRef, listeners, isDragging } = useDraggable({ id: t.id });
  const stop = {
    onPointerDown: (e: React.PointerEvent) => e.stopPropagation(),
    onTouchStart: (e: React.TouchEvent) => e.stopPropagation(),
  };
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      className={`board-card group${t.done ? " done" : ""}${isDragging ? " dragging" : ""}`}
    >
      <div className="bc-top" {...stop}>
        <BatchBadge itemKey={t.key} />
        <ThemeSelect
          value={t.theme || ""}
          themes={api.themes}
          onChange={(theme) =>
            void api.mutate(
              { action: "set-theme", id: t.id, theme },
              {
                optimistic: (all) =>
                  all.map((x) => (x.id === t.id ? { ...x, theme } : x)),
              },
            )
          }
          className={`pill-select theme${t.theme ? ` themed th-${themeSlot(t.theme)}` : ""}`}
          ariaLabel={`Theme for “${t.text}”`}
          noneLabel="theme"
        />
        <button
          type="button"
          onClick={() => void api.mutate({ action: "delete", id: t.id })}
          disabled={api.busy}
          className="bc-delete text-(--muted) opacity-0 transition-opacity hover:text-(--warn) focus-visible:opacity-100 group-hover:opacity-100"
          aria-label={`Delete “${t.text}”`}
        >
          <TrashIcon />
        </button>
      </div>
      <p className={`bc-text clamp${t.done ? " line-through" : ""}`}>{t.text}</p>
      <div className="bc-bottom" {...stop}>
        <Checkbox
          checked={t.done}
          onCheckedChange={() =>
            void api.mutate(
              { action: "toggle", id: t.id },
              {
                optimistic: (all) =>
                  all.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)),
              },
            )
          }
          className="size-3.5"
          aria-label={`Mark “${t.text}” as ${t.done ? "not done" : "done"}`}
        />
        <DueBadge
          due={t.due}
          done={t.done}
          onChange={(due) =>
            void api.mutate(
              { action: "set-due", id: t.id, due },
              {
                optimistic: (all) =>
                  all.map((x) => (x.id === t.id ? { ...x, due } : x)),
              },
            )
          }
          label={`Due date for “${t.text}”`}
        />
        {t.by && <span className="bc-by">by {t.by}</span>}
      </div>
    </div>
  );
}

/* ---------------- list fallback (narrow screens) ---------------- */

function ListView({
  api,
  todos,
  personFilter,
  setPersonFilter,
}: {
  api: TodosApi;
  todos: Todo[];
  personFilter: string | null;
  setPersonFilter: (f: string | null) => void;
}) {
  const UNASSIGNED_FILTER = "__unassigned-filter__"; // internal only, never rendered
  const visible =
    personFilter === ALL
      ? todos
      : todos.filter((t) =>
          personFilter === UNASSIGNED_FILTER
            ? !t.assignee
            : t.assignee === personFilter,
        );
  const sorted = [...visible].sort(byBoardOrder);

  return (
    <div className="max-w-2xl">
      {api.people.length > 0 && todos.length > 0 && (
        <div
          className="mb-4 flex flex-wrap items-center gap-1.5 font-ui"
          role="group"
          aria-label="Filter by assignee"
        >
          <button
            type="button"
            onClick={() => setPersonFilter(ALL)}
            className={`todo-chip${personFilter === ALL ? " on" : ""}`}
          >
            All
          </button>
          {api.people.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPersonFilter(personFilter === p ? ALL : p)}
              className={`todo-chip${personFilter === p ? " on" : ""}`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              setPersonFilter(
                personFilter === UNASSIGNED_FILTER ? ALL : UNASSIGNED_FILTER,
              )
            }
            className={`todo-chip${personFilter === UNASSIGNED_FILTER ? " on" : ""}`}
          >
            Unassigned
          </button>
        </div>
      )}

      {todos.length > 0 && sorted.length === 0 && (
        <p className="font-ui text-sm text-(--muted)">Nothing matches this filter.</p>
      )}

      <div className="flex flex-col">
        {sorted.map((t) => (
          <div
            key={t.id}
            className="group flex items-start gap-3 rounded-md border-b border-(--line-soft) px-2 py-2.5 hover:bg-(--row-alt)"
          >
            <Checkbox
              checked={t.done}
              onCheckedChange={() =>
                void api.mutate(
                  { action: "toggle", id: t.id },
                  {
                    optimistic: (all) =>
                      all.map((x) =>
                        x.id === t.id ? { ...x, done: !x.done } : x,
                      ),
                  },
                )
              }
              disabled={api.busy}
              className="mt-1"
              aria-label={`Mark “${t.text}” as ${t.done ? "not done" : "done"}`}
            />
            <div className="min-w-0 flex-1">
              <p
                className={`leading-snug ${t.done ? "text-(--muted) line-through" : "text-(--ink)"}`}
              >
                {t.text}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5 font-ui text-[0.72rem] text-(--muted)">
                <BatchBadge itemKey={t.key} />
                <ThemeBadge theme={t.theme} />
                {t.by && <span>added by {t.by}</span>}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5 font-ui">
                <AssigneeSelect
                  value={t.assignee || ""}
                  people={api.people}
                  onChange={(assignee) =>
                    void api.mutate(
                      { action: "assign", id: t.id, assignee },
                      {
                        optimistic: (all) =>
                          all.map((x) =>
                            x.id === t.id ? { ...x, assignee } : x,
                          ),
                      },
                    )
                  }
                  disabled={api.busy}
                  className={`todo-assignee font-ui${t.assignee ? " assigned" : ""}`}
                  ariaLabel={`Assignee for “${t.text}”`}
                  noneLabel="Assign"
                />
                <ThemeSelect
                  value={t.theme || ""}
                  themes={api.themes}
                  onChange={(theme) =>
                    void api.mutate(
                      { action: "set-theme", id: t.id, theme },
                      {
                        optimistic: (all) =>
                          all.map((x) => (x.id === t.id ? { ...x, theme } : x)),
                      },
                    )
                  }
                  disabled={api.busy}
                  className="todo-assignee font-ui"
                  ariaLabel={`Theme for “${t.text}”`}
                  noneLabel="Theme"
                />
                <DueBadge
                  due={t.due}
                  done={t.done}
                  disabled={api.busy}
                  onChange={(due) =>
                    void api.mutate(
                      { action: "set-due", id: t.id, due },
                      {
                        optimistic: (all) =>
                          all.map((x) => (x.id === t.id ? { ...x, due } : x)),
                      },
                    )
                  }
                  label={`Due date for “${t.text}”`}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => void api.mutate({ action: "delete", id: t.id })}
              disabled={api.busy}
              className="bc-delete mt-1.5 text-(--muted) opacity-0 transition-opacity hover:text-(--warn) focus-visible:opacity-100 group-hover:opacity-100"
              aria-label={`Delete “${t.text}”`}
            >
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
