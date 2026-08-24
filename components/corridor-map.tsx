// Bespoke schematic map of the Brighton–Mid Sussex corridor: coastline along
// the bottom, the A23 running north–south and the A27 east–west, town labels,
// numbered teal pins for the seven candidate buildings (numbers match the
// listing cards below the map) and small neutral/amber markers for the
// existing and incoming padel venues. Pure inline SVG, themed entirely with
// the document's CSS variables — no external images.
//
// Placement is proportional to real coordinates (x ∝ longitude,
// y ∝ −latitude), lightly nudged where markers would otherwise collide.

const W = 920;
const H = 560;
const LON_MIN = -0.42;
const LON_MAX = 0.05;
const LAT_MIN = 50.79;
const LAT_MAX = 51.055;

function x(lon: number) {
  return Math.round(((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W);
}
function y(lat: number) {
  return Math.round(((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H);
}
function pt(lat: number, lon: number): [number, number] {
  return [x(lon), y(lat)];
}
function line(points: [number, number][]) {
  return points.map(([px, py], i) => `${i === 0 ? "M" : "L"} ${px} ${py}`).join(" ");
}

type Anchor = "start" | "middle" | "end";

/** Town reference dots + labels. */
const TOWNS: { name: string; at: [number, number]; label: [number, number]; anchor: Anchor }[] = [
  { name: "Worthing", at: pt(50.82, -0.37), label: [x(-0.37), y(50.82) + 16], anchor: "middle" },
  { name: "Lancing", at: pt(50.83, -0.32), label: [x(-0.32), y(50.83) + 16], anchor: "middle" },
  { name: "Shoreham", at: pt(50.83, -0.27), label: [x(-0.27) + 6, y(50.83) + 16], anchor: "middle" },
  { name: "Portslade", at: pt(50.84, -0.21), label: [x(-0.21) + 9, y(50.84) + 5], anchor: "start" },
  { name: "Hove", at: pt(50.83, -0.17), label: [x(-0.17) - 10, y(50.83) + 4], anchor: "end" },
  { name: "Brighton", at: pt(50.83, -0.14), label: [x(-0.14) + 12, y(50.83) + 4], anchor: "start" },
  { name: "Lewes", at: pt(50.87, 0.01), label: [x(0.01), y(50.87) + 17], anchor: "middle" },
  { name: "Hassocks", at: pt(50.92, -0.15), label: [x(-0.15), y(50.92) + 16], anchor: "middle" },
  { name: "Albourne", at: pt(50.93, -0.21), label: [x(-0.21), y(50.93) + 16], anchor: "middle" },
  { name: "Burgess Hill", at: pt(50.96, -0.13), label: [x(-0.13) + 52, y(50.96) - 5], anchor: "start" },
  { name: "Haywards Heath", at: pt(51.0, -0.1), label: [x(-0.1) + 11, y(51.0) + 4], anchor: "start" },
  { name: "Cuckfield", at: pt(51.01, -0.14), label: [x(-0.14) - 9, y(51.01) - 2], anchor: "end" },
];

/** The seven candidate buildings — numbered to match the listing cards. */
const CANDIDATES: { no: number; name: string; at: [number, number] }[] = [
  { no: 1, name: "Unit 24 Panattoni Park, Burgess Hill", at: pt(50.946, -0.168) },
  { no: 2, name: "59 Victoria Road, Burgess Hill", at: pt(50.968, -0.148) },
  { no: 3, name: "Unit 2 York Road, Burgess Hill", at: pt(50.98, -0.125) },
  { no: 4, name: "Units 3&5 Lancing Business Park", at: pt(50.842, -0.315) },
  { no: 5, name: "Units 3&4 School Close, Burgess Hill", at: pt(50.944, -0.118) },
  { no: 6, name: "Unit 3 Ellen Street, Portslade", at: pt(50.848, -0.212) },
  { no: 7, name: "Buckingham Park, Lewes", at: pt(50.878, 0.008) },
];

/** Existing / incoming padel venues. */
const VENUES: {
  name: string;
  at: [number, number];
  label: [number, number];
  anchor: Anchor;
  coming?: boolean;
}[] = [
  { name: "PADELHUB (Warninglid)", at: pt(51.02, -0.25), label: [x(-0.25) + 12, y(51.02) + 4], anchor: "start" },
  { name: "Eixo, Goddards Green", at: pt(50.95, -0.182), label: [x(-0.182) - 4, y(50.95) + 18], anchor: "middle" },
  { name: "Smash Padel", at: [x(-0.14) + 12, y(51.01) + 8], label: [x(-0.14) + 24, y(51.01) + 12], anchor: "start" },
  { name: "Withdean", at: pt(50.86, -0.15), label: [x(-0.15) - 12, y(50.86) - 2], anchor: "end" },
  { name: "Hove Beach Park", at: [x(-0.172) - 6, y(50.828) + 20], label: [x(-0.172) - 6, y(50.828) + 34], anchor: "middle" },
  { name: "Atmos, West Worthing", at: pt(50.822, -0.378), label: [x(-0.378) - 12, y(50.822) - 14], anchor: "start" },
  { name: "Club Padel (opening)", at: [x(-0.272) - 8, y(50.834) - 8], label: [x(-0.272) + 4, y(50.834) - 5], anchor: "start", coming: true },
  { name: "Consort Way (approved)", at: [x(-0.112) + 6, y(50.958)], label: [x(-0.112) + 18, y(50.958) + 17], anchor: "start", coming: true },
  { name: "Plumpton (approved)", at: pt(50.93, -0.06), label: [x(-0.06), y(50.93) + 18], anchor: "middle", coming: true },
];

const A27: [number, number][] = [
  pt(50.822, -0.42),
  pt(50.828, -0.37),
  pt(50.837, -0.32),
  pt(50.84, -0.27),
  pt(50.845, -0.22),
  pt(50.842, -0.17),
  pt(50.86, -0.12),
  pt(50.862, -0.08),
  pt(50.873, -0.02),
  pt(50.878, 0.05),
];

const A23: [number, number][] = [
  pt(50.815, -0.135),
  pt(50.86, -0.14),
  pt(50.9, -0.16),
  pt(50.935, -0.19),
  pt(50.955, -0.205),
  pt(50.99, -0.225),
  pt(51.02, -0.245),
  pt(51.055, -0.255),
];

/** The A2300 spur from the A23 at Hickstead into Burgess Hill. */
const A2300: [number, number][] = [
  pt(50.955, -0.205),
  pt(50.952, -0.182),
  pt(50.958, -0.145),
];

// Coastline: a gentle undulating line just south of the coastal towns,
// with the sea filled beneath it.
const COAST = `M 0 ${y(50.806)}
  C ${x(-0.36)} ${y(50.803)}, ${x(-0.3)} ${y(50.808)}, ${x(-0.26)} ${y(50.805)}
  C ${x(-0.2)} ${y(50.8)}, ${x(-0.15)} ${y(50.804)}, ${x(-0.1)} ${y(50.8)}
  C ${x(-0.05)} ${y(50.796)}, ${x(0.0)} ${y(50.795)}, ${W} ${y(50.792)}`;

function Pin({ no, name, at }: { no: number; name: string; at: [number, number] }) {
  const [px, py] = at;
  return (
    <g>
      <title>{name}</title>
      <path
        className="map-pin"
        d={`M ${px - 4} ${py - 7} L ${px} ${py} L ${px + 4} ${py - 7} Z`}
      />
      <circle className="map-pin" cx={px} cy={py - 12} r={8.5} />
      <text className="map-pin-no" x={px} y={py - 8.5} textAnchor="middle">
        {no}
      </text>
    </g>
  );
}

export function CorridorMap() {
  return (
    <figure className="fig map-fig breakout">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Schematic map of the Brighton–Mid Sussex corridor showing the A23 and A27, the seven candidate buildings as numbered pins, and existing and incoming padel venues"
      >
        <title>The Brighton–Mid Sussex corridor</title>

        {/* sea + coastline */}
        <path className="map-sea" d={`${COAST} L ${W} ${H} L 0 ${H} Z`} />
        <path className="map-coast" d={COAST} />
        <text className="map-sealabel" x={x(-0.09)} y={H - 14}>
          English Channel
        </text>

        {/* roads */}
        <path className="map-road" d={line(A27)} />
        <path className="map-road" d={line(A23)} />
        <path className="map-road minor" d={line(A2300)} />
        <text className="map-roadlabel" x={x(-0.02) - 12} y={y(50.873) - 10} textAnchor="middle">
          A27
        </text>
        <text className="map-roadlabel" x={x(-0.225) - 12} y={y(50.99)} textAnchor="end">
          A23
        </text>
        <text className="map-roadlabel minor" x={x(-0.182) - 2} y={y(50.952) - 8} textAnchor="middle">
          A2300
        </text>

        {/* towns */}
        {TOWNS.map((t) => (
          <g key={t.name}>
            <circle className="map-town" cx={t.at[0]} cy={t.at[1]} r={3} />
            <text
              className="map-townlabel"
              x={t.label[0]}
              y={t.label[1]}
              textAnchor={t.anchor}
            >
              {t.name}
            </text>
          </g>
        ))}

        {/* venues: open (neutral) and approved/coming (amber) */}
        {VENUES.map((v) => (
          <g key={v.name}>
            <title>{v.name}</title>
            <circle
              className={`map-venue${v.coming ? " coming" : ""}`}
              cx={v.at[0]}
              cy={v.at[1]}
              r={4}
            />
            {v.coming && (
              <circle
                className="map-venue-ring"
                cx={v.at[0]}
                cy={v.at[1]}
                r={7.5}
              />
            )}
            <text
              className={`map-venuelabel${v.coming ? " coming" : ""}`}
              x={v.label[0]}
              y={v.label[1]}
              textAnchor={v.anchor}
            >
              {v.name}
            </text>
          </g>
        ))}

        {/* candidate buildings — numbered pins, drawn last so they sit on top */}
        {CANDIDATES.map((c) => (
          <Pin key={c.no} no={c.no} name={c.name} at={c.at} />
        ))}
      </svg>

      <div className="map-legend font-ui" aria-hidden="false">
        <span className="ml-item">
          <span className="ml-swatch pin" aria-hidden="true">
            1
          </span>
          candidate building
        </span>
        <span className="ml-item">
          <span className="ml-swatch open" aria-hidden="true" />
          open venue
        </span>
        <span className="ml-item">
          <span className="ml-swatch coming" aria-hidden="true" />
          approved &amp; coming
        </span>
      </div>

      <figcaption>
        The corridor at a glance. Numbered teal pins are the seven candidate
        buildings (numbers match the cards below); grey dots are padel venues
        already open, amber dots are approved or opening soon. Positions are
        schematic.
      </figcaption>
    </figure>
  );
}
