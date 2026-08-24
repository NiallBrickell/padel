// Plain-English glossary of the genuinely confusing finance/property jargon
// used across the business case and next-steps documents — acronyms and terms
// of art only, not everyday business words. Rendered inline via <G> tooltips
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
  {
    term: "opco",
    def: "The operating company — the company that runs the venue, as opposed to one that owns property.",
  },
  {
    term: "EBITDA",
    def: "Profit from actually running the business, before loan interest, tax and accounting charges — the standard measure of whether the business itself makes money.",
  },
  {
    term: "asset finance",
    def: "Borrowing secured on the equipment itself (courts, lighting, kitchen kit) — the lender can repossess the kit, which is why new businesses can get it when they can't get normal loans.",
  },
  {
    term: "LTV",
    def: "Loan-to-value — the loan as a percentage of what the property is worth.",
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
    term: "community benefit society",
    def: "A not-for-profit company structure owned for community benefit — unlocks cheap sports-body loans but profits can't be paid out to founders.",
  },
  {
    term: "asset lock",
    def: "The rule in not-for-profit structures that profits and assets must stay in the organisation — founders can earn salaries but never sell the company.",
  },
  {
    term: "use class",
    def: "The planning category for what a building may legally be used for; “Class E” includes indoor sport, so a building with it needs no change-of-use permission for padel.",
  },
  {
    term: "pre-app",
    def: "Pre-application advice — paying the council a few hundred pounds for an early official opinion before submitting a real planning application.",
  },
  {
    term: "heads of terms",
    def: "A non-binding outline of a deal (e.g. a lease) agreed before lawyers draft the real contract.",
  },
  {
    term: "eaves height",
    def: "The height of a building at the edge of its roof — listings quote this, but the usable height in the middle (under the apex) is often greater.",
  },
  {
    term: "Americano",
    def: "A social tournament format where partners rotate every round — good for meeting people.",
  },
  {
    term: "pre-money valuation",
    def: "The value everyone agrees the company is worth before new investment goes in.",
  },
];

export const GLOSSARY_MAP: Record<string, string> = Object.fromEntries(
  GLOSSARY.map((e) => [e.term, e.def]),
);
