// The two card grids inside "The live candidates — two kinds of site":
// dense cards for the seven industrial buildings, numbered to match the
// corridor map's pins, each plotting the building's stated height against
// the 6m courts minimum and the 8m ideal so spec-fit reads at a glance;
// then the four country-club partner targets, lettered A–D to match the
// map's hollow teal rings — same card family, but visually distinct
// (hollow-ring badge, teal outline) because they're approaches, not
// listings. No agent photos (rights) — the map and the cards carry the
// weight.

import {
  HEIGHT_IDEAL_M,
  HEIGHT_MIN_M,
  HEIGHT_SCALE_MAX_M,
  LISTINGS,
  PARTNER_TARGETS,
  type Listing,
  type PartnerTarget,
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

function ListingCard({ listing, no }: { listing: Listing; no: number }) {
  return (
    <article className="listing-card">
      <div className="lc-head">
        <span className="lc-no" aria-label={`Map pin ${no}`}>
          {no}
        </span>
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
      {listing.why && <p className="lc-why">{listing.why}</p>}
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

function PartnerCard({ target }: { target: PartnerTarget }) {
  return (
    <article className="listing-card partner">
      <div className="lc-head">
        <span className="lc-letter" aria-label={`Map ring ${target.letter}`}>
          {target.letter}
        </span>
        <h4 className="lc-name">{target.name}</h4>
        <span className="lc-area">{target.area}</span>
      </div>
      <span className="lc-status">{target.status}</span>
      <p className="lc-why">{target.why}</p>
      <p className="lc-contact">
        {target.email && (
          <a href={`mailto:${target.email}`}>{target.email}</a>
        )}
        {target.website && (
          <a
            href={`https://${target.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {target.website}
          </a>
        )}
        {target.phone && (
          <>
            {" "}
            <span aria-hidden="true">·</span> {target.phone}
          </>
        )}
      </p>
      <span className="lc-tag">Approach, not a listing</span>
    </article>
  );
}

export function ListingsShowcase() {
  return (
    <div className="listings breakout font-ui">
      <h4 className="listing-group-title">On the market — industrial units</h4>
      <div className="listings-grid">
        {LISTINGS.map((l, i) => (
          <ListingCard key={l.id} listing={l} no={i + 1} />
        ))}
      </div>
      <p className="listings-foot">
        Also: Panattoni offers design-and-build at Burgess Hill, and Buckingham
        Park in Lewes takes pre-lets (Oakley: Steven Harvey,
        steven@oakleyproperty.com, 01273 645772).
      </p>
    </div>
  );
}

export function PartnerTargetsShowcase() {
  return (
    <div className="listings partner-listings breakout font-ui">
      <h4 className="listing-group-title">Country-club partner targets</h4>
      <p className="listings-intro">
        None of these is on the market — they’re sites we’d approach with a
        partnership pitch (move 5). Recent approvals show exactly this format
        winning in the belt.
      </p>
      <div className="listings-grid">
        {PARTNER_TARGETS.map((t) => (
          <PartnerCard key={t.id} target={t} />
        ))}
      </div>
      <p className="listings-foot">
        The farm-building and equestrian-arena route exists too, but nothing is
        openly marketed right now — it runs through the rural agents (HJ Burt
        in Steyning, Batcheller Monkhouse, Churchill Country &amp; Equestrian).
      </p>
    </div>
  );
}
