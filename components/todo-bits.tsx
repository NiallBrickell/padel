"use client";

// Small shared controls for the live to-do layer (board + next-steps document).

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NONE, batchLabel, formatDue, isOverdue } from "@/lib/use-todos";

/**
 * Assignee picker. Uses the internal NONE sentinel for "no assignee" but never
 * shows it: Base UI's `items` map guarantees the trigger renders a
 * human-readable label ("Unassigned" / the person's name), and the popup items
 * carry explicit labels.
 */
export function AssigneeSelect({
  value,
  people,
  onChange,
  disabled,
  size = "sm",
  className,
  ariaLabel,
  noneLabel = "Unassigned",
}: {
  value: string; // "" = unassigned
  people: string[];
  onChange: (assignee: string) => void; // "" = unassigned
  disabled?: boolean;
  size?: "sm" | "default";
  className?: string;
  ariaLabel: string;
  noneLabel?: string;
}) {
  // include a legacy assignee that's no longer in the people list
  const options = value && !people.includes(value) ? [...people, value] : people;
  const items: Record<string, string> = { [NONE]: noneLabel };
  for (const p of options) items[p] = p;
  return (
    <Select
      value={value || NONE}
      onValueChange={(v: string | null) => onChange(!v || v === NONE ? "" : v)}
      items={items}
      disabled={disabled}
    >
      <SelectTrigger size={size} className={className} aria-label={ariaLabel}>
        {/* belt and braces: even if the items map is ever bypassed, the raw
            sentinel must not render — map it to the label ourselves */}
        <SelectValue>
          {(v: string | null) => (!v || v === NONE ? noneLabel : (items[v] ?? v))}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="font-ui">
        <SelectItem value={NONE}>Unassigned</SelectItem>
        {options.map((p) => (
          <SelectItem key={p} value={p}>
            {p}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/**
 * Stable colour slot for a theme name: hash → one of 6 muted palette hues
 * (defined as .th-0 … .th-5 in globals.css), so custom themes get a
 * consistent colour too.
 */
export function themeSlot(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % 6;
}

/** Small coloured theme badge. Renders nothing when the item has no theme. */
export function ThemeBadge({ theme }: { theme?: string }) {
  if (!theme) return null;
  return <span className={`pill pill-theme th-${themeSlot(theme)}`}>{theme}</span>;
}

/** Theme picker — same sentinel discipline as AssigneeSelect ("No theme"). */
export function ThemeSelect({
  value,
  themes,
  onChange,
  disabled,
  size = "sm",
  className,
  ariaLabel,
  noneLabel = "No theme",
}: {
  value: string; // "" = no theme
  themes: string[];
  onChange: (theme: string) => void; // "" = clear
  disabled?: boolean;
  size?: "sm" | "default";
  className?: string;
  ariaLabel: string;
  noneLabel?: string;
}) {
  const options = value && !themes.includes(value) ? [...themes, value] : themes;
  const items: Record<string, string> = { [NONE]: noneLabel };
  for (const t of options) items[t] = t;
  return (
    <Select
      value={value || NONE}
      onValueChange={(v: string | null) => onChange(!v || v === NONE ? "" : v)}
      items={items}
      disabled={disabled}
    >
      <SelectTrigger size={size} className={className} aria-label={ariaLabel}>
        {/* same sentinel guard as AssigneeSelect */}
        <SelectValue>
          {(v: string | null) => (!v || v === NONE ? noneLabel : (items[v] ?? v))}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="font-ui">
        <SelectItem value={NONE}>No theme</SelectItem>
        {options.map((t) => (
          <SelectItem key={t} value={t}>
            <span
              className={`th-dot th-${themeSlot(t)}`}
              aria-hidden="true"
            />
            {t}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/** "Batch 1/2/3" pill derived from the item's stable key prefix. */
export function BatchBadge({ itemKey }: { itemKey?: string | null }) {
  const label = batchLabel(itemKey);
  if (!label) return null;
  return <span className="pill pill-batch">{label}</span>;
}

/**
 * Due-date badge that doubles as the control: an invisible native date input
 * sits on top of the pill, so clicking it opens the OS date picker. The raw
 * input is never visible — unset shows a quiet "+ due" pill, set shows
 * "due 12 Sep" (amber when overdue) with an × to clear.
 */
export function DueBadge({
  due,
  done,
  disabled,
  onChange,
  label,
}: {
  due?: string | null;
  done?: boolean;
  disabled?: boolean;
  onChange: (due: string | null) => void;
  label: string;
}) {
  const overdue = isOverdue(due, done);
  return (
    <span className="pill-due-wrap">
      <span className="pill-due-hit">
        <span
          className={`pill pill-due${overdue ? " overdue" : ""}${due ? "" : " empty"}`}
          aria-hidden="true"
        >
          {due ? (
            <>
              <span className="due-word">due</span> {formatDue(due)}
            </>
          ) : (
            "+ due"
          )}
        </span>
        <input
          type="date"
          className="pill-due-input"
          value={due ?? ""}
          disabled={disabled}
          aria-label={label}
          onChange={(e) => onChange(e.target.value || null)}
          onClick={(e) => {
            const el = e.currentTarget as HTMLInputElement & {
              showPicker?: () => void;
            };
            try {
              el.showPicker?.();
            } catch {
              /* needs user gesture / unsupported — typing still works */
            }
          }}
        />
      </span>
      {due && (
        <button
          type="button"
          className="pill-due-clear"
          disabled={disabled}
          onClick={() => onChange(null)}
          aria-label={`Clear due date (${label})`}
        >
          ×
        </button>
      )}
    </span>
  );
}

export function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Fixed overlay asking for the group passcode before the first mutation. */
export function PasscodeOverlay({
  open,
  error,
  onSubmit,
  onCancel,
}: {
  open: boolean;
  error: string | null;
  onSubmit: (passcode: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  if (!open) return null;
  return (
    <div className="pc-overlay" role="dialog" aria-modal="true" aria-label="Passcode">
      <form
        ref={formRef}
        className="pc-box font-ui"
        onSubmit={(e) => {
          e.preventDefault();
          if (!value.trim()) return;
          onSubmit(value);
          setValue("");
        }}
      >
        <p className="text-sm text-(--ink2)">
          Editing the shared list needs the group passcode.
        </p>
        <Input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Passcode"
          aria-label="Passcode"
          autoFocus
        />
        {error && <p className="text-xs text-(--warn)">{error}</p>}
        <div className="flex gap-2">
          <Button type="submit" size="sm" disabled={!value.trim()}>
            Unlock
          </Button>
          <Button type="button" size="sm" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
