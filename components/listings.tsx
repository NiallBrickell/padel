// The candidate-buildings showcase inside bet 2: a card grid where each
// building's eaves height is plotted against the 6m courts minimum and the
// 8m ideal, so spec-fit reads at a glance. No agent photos (rights) — the
// cards carry the weight with type, chips and the height bars.

import {
  HEIGHT_IDEAL_M,
  HEIGHT_MIN_M,
  HEIGHT_SCALE_MAX_M,
  LISTINGS,
  type Listing,
} from "@/lib/listings";

function HeightBar({ listing }: { listing: Listing }) {
  const { heightM, heightLabel } = listing;
  const pct =
    heightM === null ? 0 : Math.min(100, (heightM / HEIGHT_SCALE_MAX_M) * 100);
  const minPct = (HEIGHT_MIN_M / HEIGHT_SCALE_MAX_M) * 100;
  const idealPct = (HEIGHT_IDEAL_M / HEIGHT_SCALE_MAX_M) * 100;
  const short = heightM !== null && heightM < HEIGHT_MIN_M;
  return (
    <div className={`hbar${heightM === null ? " unknown" : ""}`}>
      <div className="hbar-row">
        <span className="hbar-cap">height</span>
        <span className="hbar-val">{heightLabel}</span>
      </div>
      <div
        className="hbar-track"
        role="img"
        aria-label={
          heightM === null
            ? `Height not stated (courts need ${HEIGHT_MIN_M}m minimum)`
            : `${heightM}m against a ${HEIGHT_MIN_M}m minimum and ${HEIGHT_IDEAL_M}m ideal`
        }
      >
        {heightM !== null && (
          <div
            className={`hbar-fill${short ? " short" : ""}`}
            style={{ width: `${pct}%` }}
          />
        )}
        <div className="hbar-mark min" style={{ left: `${minPct}%` }} />
        <div className="hbar-mark ideal" style={{ left: `${idealPct}%` }} />
      </div>
      <div className="hbar-scale" aria-hidden="true">
        <span style={{ left: `${minPct}%` }}>6m min</span>
        <span style={{ left: `${idealPct}%` }}>8m ideal</span>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="listing-card">
      <div className="lc-head">
        <h4 className="lc-name">{listing.name}</h4>
        <span className="lc-area">{listing.area}</span>
      </div>
      <div className="lc-facts">
        <span>{listing.size ?? "size on application"}</span>
        <span aria-hidden="true">·</span>
        <span>{listing.rent}</span>
      </div>
      <HeightBar listing={listing} />
      <div className="lc-chips">
        {listing.chips.map((c, i) => (
          <span key={c} className={`lc-chip${i === 0 ? " lead" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <p className="lc-why">{listing.why}</p>
      <a
        className="lc-link"
        href={listing.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View listing →
      </a>
    </article>
  );
}

export function ListingsShowcase() {
  return (
    <div className="listings breakout font-ui">
      <div className="listings-head">
        <span className="bet-label">The live candidates</span>
        <span className="listings-note">snapshot Aug 2026 — listings move</span>
      </div>
      <div className="listings-grid">
        {LISTINGS.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}
