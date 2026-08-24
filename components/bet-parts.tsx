// Typographic structure for the bet cards on /next-steps. Every bet from the
// working sheet has the same shape — who / the ask / what we want / the read —
// and these parts give that shape a consistent visual grammar without touching
// the sheet's wording.

import type { ReactNode } from "react";

/** The contact line — compact UI type under the card header. */
export function Who({ children }: { children: ReactNode }) {
  return (
    <p className="bet-who font-ui">
      <span className="bet-label">Who</span> {children}
    </p>
  );
}

/** A labelled card-body section ("The ask" / "What we want" / custom). */
export function BetSec({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="bet-sec">
      <span className="bet-label font-ui">{label}</span>
      <div className="bet-sec-body">{children}</div>
    </div>
  );
}

export function Ask({ children }: { children: ReactNode }) {
  return <BetSec label="The ask">{children}</BetSec>;
}

export function Want({
  note,
  children,
}: {
  /** Optional inline aside after the label (kept from the sheet's wording). */
  note?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="bet-sec">
      <span className="bet-label font-ui">What we want</span>
      {note ? <span className="bet-label-note font-ui">{note}</span> : null}
      <div className="bet-sec-body">{children}</div>
    </div>
  );
}

/** The payoff line — the strongest outcome, styled to land. */
export function WantLead({ children }: { children: ReactNode }) {
  return <p className="want-lead">{children}</p>;
}

/** The odds, as a quiet card footer. */
export function Read({
  label = "The read",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <p className="bet-read">
      <span className="bet-label font-ui">{label}</span> {children}
    </p>
  );
}

/** Tinted block for the competitive-intel material inside bet 2. */
export function Intel({
  label = "Competitive intel",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="bet-intel">
      <span className="bet-label font-ui">{label}</span>
      {children}
    </aside>
  );
}

/**
 * Card chrome for a bet that has no single store item of its own (bet 6 — the
 * two group decisions live as two sub-rows instead of one header checkbox).
 */
export function StaticBetCard({
  id,
  title,
  children,
}: {
  id?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="bet-card static">
      <div className="bet-head static">
        <h3 id={id}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
