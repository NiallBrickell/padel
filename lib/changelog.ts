export type ChangelogEntry = {
  id: string;
  date: string; // display form, e.g. "27 Aug 2026"
  title: string;
  summary: string;
  links: { label: string; href: string }[];
};

// Newest first. The first entry drives the site-wide banner and the nav badge.
export const CHANGELOG: ChangelogEntry[] = [
  {
    id: "self-build-route",
    date: "27 Aug 2026",
    title: "The build-it-ourselves route",
    summary:
      "Section 10 of the business case gains a third way to get a building: buy a plot on the bikeable edge of a town and put up a fully enclosed six-court hall using a European kit system — roughly £1.6–2.8m owning the freehold, against £2.5m+ built conventionally in the UK. The new subsection carries the cost stack, five hall suppliers to quote, the design evidence that a kit hall can look like a club rather than a shed, and a sites shortlist led by a 2.46-acre plot at Wivelsfield. One decision is now in writing: no canopy courts, on the noise evidence. Next steps picks up the plot walk, the quote letters and the town-edge partner approaches, with two new cards on the board.",
    links: [
      { label: "Read the new subsection", href: "/#s10-selfbuild" },
      { label: "The new moves", href: "/next-steps" },
    ],
  },
  {
    id: "strategy-note",
    date: "24 Aug 2026",
    title: "The strategy note",
    summary:
      "A fourth document joins the set: the objective (become the corridor's padel institution), the two-company structure that separates the venue from the booking software, the operator-side platform wedge with the evidence from five other markets that fought their booking platforms, and the honest corrections from the research — no padel club exit multiples exist anywhere, so the venue has to be worth holding, not flipping. The founders' evening becomes three decisions, and two discovery questions are added to operator coffees already on the board.",
    links: [{ label: "Read the strategy note", href: "/strategy" }],
  },
  {
    id: "country-club-route",
    date: "24 Aug 2026",
    title: "The country-club route and the people map",
    summary:
      "The rural version of the venue became a first-class track rather than a daydream: a planning scoreboard of what wins and loses in the belt between the towns and the Downs, four named partner sites, and a corridor map. Next steps gained the people worth knowing — the Smash founders, the crowdfunding veterans, the solicitors who do EIS and property — and a watchlist of things being monitored rather than done.",
    links: [
      { label: "The country-club route", href: "/#s10-country" },
      { label: "People worth knowing", href: "/next-steps" },
    ],
  },
  {
    id: "site-launch",
    date: "24 Aug 2026",
    title: "The site itself",
    summary:
      "The business case and the next-steps sheet became this site: the documents as pages, a live action board with stages, assignees and themes, and a chat that has read everything here and can search the web — ask it anything the documents don't answer.",
    links: [
      { label: "The business case", href: "/" },
      { label: "The board", href: "/todos" },
    ],
  },
];

export const LATEST = CHANGELOG[0];
