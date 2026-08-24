// Plain-English glossary of the finance/property jargon used across the
// business case and next-steps documents. Rendered inline via <G> tooltips
// (components/glossary.tsx) and listed in full at /glossary.

export type GlossaryEntry = { term: string; def: string };

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: "EIS",
    def: "Enterprise Investment Scheme — a UK tax break for people investing in young companies: they get 30% of what they invest back off their income tax, which makes investors far more willing to say yes.",
  },
  {
    term: "SEIS",
    def: "EIS's sibling for brand-new companies — 50% relief but capped at small amounts.",
  },
  {
    term: "EIS advance assurance",
    def: "A pre-approval letter from HMRC confirming an investment in the company would qualify for EIS relief. Investors generally won't commit without it.",
  },
  { term: "HMRC", def: "The UK tax authority." },
  {
    term: "opco",
    def: "The operating company — the company that runs the venue, as opposed to one that owns property.",
  },
  {
    term: "leasehold",
    def: "Renting the building on a long lease rather than owning it.",
  },
  { term: "freehold", def: "Owning the building/land outright." },
  {
    term: "asset-backed",
    def: "A business whose value sits mostly in property or equipment; the taxman is warier of giving EIS relief to these.",
  },
  {
    term: "EBITDA",
    def: "Profit from actually running the business, before loan interest, tax and accounting charges — the standard measure of whether the business itself makes money.",
  },
  {
    term: "capex",
    def: "Money spent up front to build and equip the venue.",
  },
  {
    term: "opex",
    def: "The ongoing running costs — rent, staff, energy.",
  },
  {
    term: "utilisation",
    def: "The share of bookable court hours that actually get booked.",
  },
  {
    term: "break-even",
    def: "The point where income covers all costs including loan repayments.",
  },
  {
    term: "asset finance",
    def: "Borrowing secured on the equipment itself (courts, lighting, kitchen kit) — the lender can repossess the kit, which is why new businesses can get it when they can't get normal loans.",
  },
  {
    term: "unsecured loan",
    def: "A loan with no collateral behind it — lenders want trading history before offering these.",
  },
  {
    term: "personal guarantee",
    def: "A founder personally promising to repay a business loan if the company can't — it puts personal assets on the line.",
  },
  {
    term: "working capital",
    def: "The cash buffer that pays the bills before revenue catches up.",
  },
  {
    term: "LTV",
    def: "Loan-to-value — the loan as a percentage of what the property is worth.",
  },
  {
    term: "Start Up Loans",
    def: "A government-backed scheme lending up to £25,000 per founder to new businesses, no security required.",
  },
  {
    term: "British Business Bank",
    def: "The state-owned bank that funds small businesses through schemes and regional funds.",
  },
  {
    term: "SEIF",
    def: "The British Business Bank's new South East Investment Fund — loans £25k–£2m and equity up to £5m for businesses in this region (not yet launched).",
  },
  {
    term: "NPIF II",
    def: "The same bank's Northern fund — it backed The Padel Club's expansion.",
  },
  {
    term: "equity crowdfunding",
    def: "Lots of people investing smaller amounts through a platform like Crowdcube in exchange for shares.",
  },
  {
    term: "angel investor",
    def: "A wealthy individual investing their own money in early companies.",
  },
  {
    term: "dilution",
    def: "The ownership percentage founders give away when they sell shares to raise money.",
  },
  {
    term: "pre-money valuation",
    def: "The value everyone agrees the company is worth before new investment goes in.",
  },
  {
    term: "community benefit society",
    def: "A not-for-profit company structure owned for community benefit — unlocks cheap sports-body loans but profits can't be paid out to founders.",
  },
  {
    term: "asset lock",
    def: "The rule in not-for-profit structures that profits and assets must stay in the organisation — founders can earn salaries but never sell the company.",
  },
  {
    term: "LTA",
    def: "The Lawn Tennis Association — the governing body for tennis and padel in Britain, which also lends money for court building.",
  },
  {
    term: "heads of terms",
    def: "A non-binding outline of a deal (e.g. a lease) agreed before lawyers draft the real contract.",
  },
  {
    term: "rent-free period",
    def: "A standard landlord sweetener — months of no rent at the start of a lease, usually covering the fit-out period.",
  },
  {
    term: "pre-app",
    def: "Pre-application advice — paying the council a few hundred pounds for an early official opinion before submitting a real planning application.",
  },
  {
    term: "use class",
    def: "The planning category for what a building may legally be used for; “Class E” includes indoor sport, so a building with it needs no change-of-use permission for padel.",
  },
  {
    term: "eaves height",
    def: "The height of a building at the edge of its roof — listings quote this, but the usable height in the middle (under the apex) is often greater.",
  },
  {
    term: "business rates",
    def: "The business equivalent of council tax, based on the property's “rateable value”.",
  },
  {
    term: "Playtomic",
    def: "The booking app most UK padel players use to find and book courts.",
  },
  {
    term: "Americano",
    def: "A social tournament format where partners rotate every round — good for meeting people.",
  },
  {
    term: "padel singles court",
    def: "A narrower court (20m × 6m vs 20m × 10m) for one-vs-one padel — rare in the UK.",
  },
  {
    term: "fit-out",
    def: "Converting the empty building into the finished venue — courts, bar, kitchen, changing rooms.",
  },
];

export const GLOSSARY_MAP: Record<string, string> = Object.fromEntries(
  GLOSSARY.map((e) => [e.term, e.def]),
);
