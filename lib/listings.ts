// The live candidates from the next-steps sheet: the seven candidate
// buildings hand-keyed from the agents' live listings, plus the four
// country-club partner targets (move 5) from the business case's
// country-club route. Snapshot: August 2026 — listings move. Card order
// sets the pin numbers (1–7) and target letters (A–D) on the corridor
// map — keep the two in step.

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
    why: "The closest match to our spec.",
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
    why: "Oversized, but the height is perfect.",
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
    why: "Height not stated — the first thing to ask.",
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
    why: "High-bay space clearing the 6m courts minimum.",
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
    why: "Already holds Class E consent — indoor sport needs no planning change of use. Worth a viewing for that alone, though the two-storey layout may rule it out.",
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
    why: "The only realistic Brighton-fringe option found.",
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
    why: "Takes pre-lets via Oakley (Steven Harvey, steven@oakleyproperty.com, 01273 645772).",
    url: "https://dtre.com/search/properties/118333-buckingham-park-brooks-road-lewes",
  },
];

// ---------------------------------------------------------------------------
// Country-club partner targets — the second kind of site. None of these is
// on the market; they're the named rural sites from the business case's
// country-club route (§10), approached with a partnership pitch (move 5).
// Letter order matches the hollow-ring markers on the corridor map.

export type PartnerTarget = {
  id: string;
  /** Map ring letter — matches the corridor map's hollow teal rings. */
  letter: "A" | "B" | "C" | "D";
  name: string;
  area: string;
  /** One-line status chip, e.g. "No padel yet". */
  status: string;
  /** Why it's interesting (facts from the business case, no more). */
  why: string;
  email?: string;
  /** Display phone number, e.g. "01273 846567". */
  phone?: string;
  /** Website domain when contact runs via the site, e.g. "manningsheath.com". */
  website?: string;
};

export const PARTNER_TARGETS: PartnerTarget[] = [
  {
    id: "mid-sussex-gc",
    letter: "A",
    name: "Mid Sussex Golf Club",
    area: "Ditchling",
    status: "Wants padel — refused on format",
    why: "The standout: they applied for four padel courts and were refused in September 2025 on noise and floodlighting. They want padel, and have land, a clubhouse, bar and Downs views — an indoor scheme answers the refusal.",
    email: "admin@midsussexgolfclub.co.uk",
    phone: "01273 846567",
  },
  {
    id: "singing-hills",
    letter: "B",
    name: "Singing Hills Golf Centre",
    area: "Albourne",
    status: "No padel yet",
    why: "Family-owned 27 holes at the foot of the Downs with a covered floodlit range, public restaurant, weddings and a big car park. Existing power and catering de-risk a build.",
    email: "shop@singinghills.co.uk",
    phone: "01273 835353",
  },
  {
    id: "hickstead",
    letter: "C",
    name: "Hickstead",
    area: "on the A23",
    status: "Diversifying",
    why: "The biggest rural leisure site in the belt, on the A23, actively diversifying into weddings and corporate events — and quiet outside the showjumping season.",
    email: "events@hickstead.co.uk",
  },
  {
    id: "mannings-heath",
    letter: "D",
    name: "Mannings Heath Golf & Wine Estate",
    area: "near Horsham",
    status: "No padel yet",
    why: "Golf plus vineyard plus restaurant — the closest existing brand to the concept’s tone.",
    website: "manningsheath.com",
    phone: "0330 1235 891",
  },
];
