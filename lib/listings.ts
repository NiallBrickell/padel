// The seven candidate buildings from the next-steps sheet (bet 2), hand-keyed
// from the agents' live listings. Snapshot: August 2026 — listings move.

export type Listing = {
  id: string;
  name: string;
  area: string;
  /** e.g. "15,818 sq ft"; null when the listing doesn't state one. */
  size: string | null;
  /** e.g. "£9.75/sq ft" or "On application". */
  rent: string;
  /** Best stated height in metres; null when the listing doesn't say. */
  heightM: number | null;
  /** Short label for the height figure, e.g. "8m eaves". */
  heightLabel: string;
  /** Standout-fact chips; the first chip gets the highlight treatment. */
  chips: string[];
  /** One line on why it's interesting (facts from the sheet, no more). */
  why: string;
  url: string;
};

/** Courts need 6m+ clear; 8m is the comfortable ideal. Bars plot to 11m. */
export const HEIGHT_MIN_M = 6;
export const HEIGHT_IDEAL_M = 8;
export const HEIGHT_SCALE_MAX_M = 11;

export const LISTINGS: Listing[] = [
  {
    id: "panattoni-24",
    name: "Unit 24, Panattoni Park",
    area: "Burgess Hill",
    size: "15,818 sq ft",
    rent: "On application",
    heightM: 8,
    heightLabel: "8m eaves",
    chips: ["Closest spec match", "8m eaves"],
    why: "The closest spec match on the market — the right size band with 8m of clear height.",
    url: "https://property.shw.co.uk/property/details/35193/",
  },
  {
    id: "victoria-road-59",
    name: "59 Victoria Road",
    area: "Burgess Hill",
    size: "29,829 sq ft",
    rent: "On application",
    heightM: 10,
    heightLabel: "10m",
    chips: ["10m clear", "29,829 sq ft"],
    why: "Well over the size brief, but the most height of any candidate.",
    url: "https://property.shw.co.uk/property/details/26635/",
  },
  {
    id: "york-road-2",
    name: "Unit 2, York Road",
    area: "Burgess Hill",
    size: "20,000 sq ft",
    rent: "£9.75/sq ft",
    heightM: null,
    heightLabel: "height unstated — ask",
    chips: ["£9.75/sq ft", "20,000 sq ft"],
    why: "Top of the size band at a mid rent — the height question is the one to ask.",
    url: "https://www.gsp.uk.com/commercial-property/warehouse-and-industrial/",
  },
  {
    id: "lancing-3-5",
    name: "Units 3&5, Lancing Business Park",
    area: "Lancing",
    size: null,
    rent: "£10/sq ft",
    heightM: 6.7,
    heightLabel: "6.7m high-bay",
    chips: ["6.7m high-bay", "£10/sq ft"],
    why: "High-bay space that clears the 6m courts minimum.",
    url: "https://www.rightmove.co.uk/properties/168932528",
  },
  {
    id: "school-close-3-4",
    name: "Units 3&4, School Close",
    area: "Burgess Hill",
    size: null,
    rent: "£6.75/sq ft",
    heightM: null,
    heightLabel: "height unstated — view it",
    chips: ["Class E consent already", "£6.75/sq ft"],
    why: "Already holds Class E consent — worth viewing for the planning shortcut alone.",
    url: "https://www.rightmove.co.uk/properties/760551190483760",
  },
  {
    id: "ellen-street-3",
    name: "Unit 3, Ellen Street",
    area: "Portslade",
    size: "13,011 sq ft",
    rent: "On application",
    heightM: 6.5,
    heightLabel: "6.5m",
    chips: ["6.5m clear", "13,011 sq ft"],
    why: "Clears the courts minimum at the compact end of the size brief.",
    url: "https://www.rightmove.co.uk/properties/769819742381744",
  },
  {
    id: "buckingham-park",
    name: "Buckingham Park, Brooks Road",
    area: "Lewes",
    size: null,
    rent: "On application",
    heightM: null,
    heightLabel: "pre-let — spec set before build",
    chips: ["Takes pre-lets"],
    why: "Pre-let route via Oakley (Steven Harvey) — alongside Panattoni's design-and-build option at Burgess Hill.",
    url: "https://dtre.com/search/properties/118333-buckingham-park-brooks-road-lewes",
  },
];
