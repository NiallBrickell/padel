import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Caveat, RouteHead, TW, Verdict } from "@/components/doc";
import {
  FinancingDecisionMapFigure,
  FundingStackFigure,
  NinetyDayTimelineFigure,
  PipelineAbsorptionFigure,
} from "@/components/figures";
import { MobileToc, Toc, type TocSection } from "@/components/toc";
import { G } from "@/components/glossary";

const SECTIONS: TocSection[] = [
  { id: "summary", no: "§", title: "Summary" },
  { id: "s2", no: "2", title: "Why padel, why now" },
  {
    id: "s3",
    no: "3",
    title: "Local market",
    subs: [
      { id: "s3-supply", title: "Current supply" },
      { id: "s3-demand", title: "Evidence of unmet demand" },
      { id: "s3-pipeline", title: "Pipeline" },
    ],
  },
  {
    id: "s4",
    no: "4",
    title: "Market sizing",
    subs: [
      { id: "s4-today", title: "Who plays here today" },
      { id: "s4-needed", title: "Players the venue needs" },
      { id: "s4-lands", title: "When the pipeline lands" },
      { id: "s4-singles", title: "Singles courts" },
    ],
  },
  { id: "s5", no: "5", title: "Format options" },
  { id: "s6", no: "6", title: "Competitive analysis" },
  {
    id: "s7",
    no: "7",
    title: "Financial overview",
    subs: [
      { id: "s7-capex", title: "Capital costs" },
      { id: "s7-revenue", title: "Revenue scenarios" },
      { id: "s7-opex", title: "Operating costs" },
      { id: "s7-profit", title: "Profitability" },
      { id: "s7-unit", title: "Unit economics" },
    ],
  },
  {
    id: "s8",
    no: "8",
    title: "Financing",
    subs: [
      { id: "s8-constraint", title: "The constraint" },
      { id: "s8-routes", title: "Five routes (A–E)" },
      { id: "s8-side", title: "Routes side by side" },
      { id: "s8-equity", title: "Why some equity" },
      { id: "s8-grants", title: "Grants and public money" },
      { id: "s8-investors", title: "Investors in UK padel" },
    ],
  },
  { id: "s9", no: "9", title: "Independent or franchise" },
  {
    id: "s10",
    no: "10",
    title: "Property and planning",
    subs: [
      { id: "s10-location", title: "Location" },
      { id: "s10-building", title: "Building requirements" },
      { id: "s10-market", title: "Buildings on the market" },
    ],
  },
  { id: "s11", no: "11", title: "Route to market" },
  { id: "s12", no: "12", title: "Risks" },
  { id: "s13", no: "13", title: "Pricing" },
  { id: "s14", no: "14", title: "90-day plan" },
  { id: "s15", no: "15", title: "Sources" },
];

export default function BusinessCasePage() {
  return (
    <div className="shell">
      <MobileToc sections={SECTIONS} />
      <div className="layout">
        <div className="min-w-0">
          <header className="doc">
            <p className="kicker">Draft for discussion</p>
            <h1>Padel venue — business case</h1>
            <p className="meta">
              <b>Brighton / Hove / Mid Sussex</b> &nbsp;·&nbsp; August 2026
              &nbsp;·&nbsp; v0.1
            </p>
          </header>

          <main className="doc-body">
            {/* ============ SUMMARY ============ */}
            <section id="summary" className="measure">
              <h2>Summary</h2>
              <p>
                This is a first proper look at whether opening an independent padel
                venue around Brighton and Mid Sussex stacks up: the demand, the
                competition, what it costs to build and run, how it could be
                financed, what the risks are, and what to do next without spending
                real money.
              </p>
              <p>
                The version modelled throughout is a six-court indoor venue (four
                doubles, two singles) with a licensed bar, kitchen and some outdoor
                space — a social venue rather than a pay-and-play facility.
                That’s one of three formats considered in Section 5, used as the
                working model so the numbers are concrete.
              </p>
              <p>
                <strong>What the research found:</strong>
              </p>
              <ul>
                <li>
                  <strong>
                    Local demand is strong, measurable, and currently capped by
                    supply.
                  </strong>{" "}
                  The council’s courts at Hove Beach Park have run at 97% occupancy
                  since March 2025; the council says publicly that demand “far
                  exceeds supply in the city”; sampled peak days at the nearest
                  large indoor venue show zero available slots. Working backwards
                  from occupancy, roughly{" "}
                  <strong>
                    9,500–11,000 people already play regularly within the catchment
                  </strong>{" "}
                  — about three times the national participation rate — and they
                  are playing as much as the courts allow, not as much as they
                  want.
                </li>
                <li>
                  <strong>The UK market is early.</strong> GB passed one million
                  players in May 2026 after participation doubled in 2025, yet has
                  roughly one court per 37,000 people against Spain’s one per
                  3,100. Demand per court has nearly doubled since 2019 even as
                  court numbers grew 36-fold — capacity is being absorbed as fast
                  as it is built.
                </li>
                <li>
                  <strong>There’s a clear gap in the offer.</strong> Nearly all
                  local supply is courts in industrial units with minimal
                  hospitality. The best-performing venues locally and in London are
                  the ones with food, drink and social programming — and no venue
                  in the catchment occupies that position yet, though one
                  competitor is building towards it.
                </li>
                <li>
                  <strong>
                    The economics work at moderate{" "}
                    utilisation.
                  </strong>{" "}
                  Base case: ~£990k revenue and ~£350k{" "}
                  <G term="EBITDA">EBITDA</G> on ~£950k invested.{" "}
                  Break-even including debt service sits
                  at roughly 50–55% court utilisation, against observed local
                  utilisation of 85–97%.
                  Filling the venue needs ~1,290 regular players — about 12–14% of
                  the people already playing locally, before any growth.
                </li>
              </ul>
              <p>
                <strong>
                  The two hard parts — neither fatal, both shape the plan:
                </strong>
              </p>
              <ol>
                <li>
                  <strong>Financing.</strong> A single bank loan for ~£950k does
                  not exist for a new company with no trading history or leisure
                  background — so the real question is how to answer that gap, and
                  Section 8 lays out four routes rather than one plan:{" "}
                  <strong>(A)</strong> assemble a full stack now (founder capital,{" "}
                  Start Up Loans,{" "}
                  <G term="asset finance">asset finance</G> on the courts,
                  landlord contribution, a £250–350k <G term="EIS">EIS</G> equity
                  round with precedents at exactly this size);{" "}
                  <strong>(B)</strong> bring in institutional capital — the{" "}
                  British Business Bank’s
                  brand-new South East Investment Fund (loans £25k–£2m, equity to
                  £5m), the leisure
                  funds already invested in padel as anchor investors, or landlord
                  “build-to-suit” capital via the lease; <strong>(C)</strong> build
                  a small £250–450k version first at an existing sports club, trade
                  12–18 months, and finance the full venue off real accounts;{" "}
                  <strong>(D)</strong> franchise first to borrow someone else’s
                  credibility and playbook; or <strong>(E)</strong> structure as a
                  not-for-profit and unlock the LTA loans that
                  have built 100+ padel courts — the cheapest money in the
                  sector, at the price of an{" "}
                  <G term="asset lock">asset lock</G> (salaries yes, equity
                  upside no). The current lean:
                  price A and B together during validation, hold C as a genuine
                  fallback, take D only if the experience gap matters more than the
                  concept, and decide on E explicitly — it’s a fork in what we’re
                  building, not a financing tactic.
                </li>
                <li>
                  <strong>Timing.</strong> A premium six-court indoor venue with a
                  high-end bar is under construction in Shoreham right now, opening
                  autumn 2026, with two further multi-court venues in the local
                  planning pipeline. The response is set out in Section 6 —
                  different corridor, lower price point, membership-led — but the
                  practical consequence is a clock: this position supports a
                  limited number of venues and the pipeline suggests it fills
                  within 12–18 months.
                </li>
              </ol>
              <p>
                <strong>Where this lands:</strong> the case supports proceeding —
                but only as far as a four-week validation phase (site search,
                lender conversations, competitor visits) costing £5–10k, run
                against pre-agreed stop criteria (Section 12). If validation holds,
                the commit decision lands in about three months, ahead of the
                window closing.
              </p>
            </section>

            {/* ============ 2 ============ */}
            <section id="s2" className="measure">
              <h2>
                <span className="no">2</span>Why padel, why now
              </h2>
              <p>
                Padel is the fastest-growing sport in Britain, and the growth is
                compounding rather than spiking:
              </p>
              <TW size="mid">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>2019</th>
                      <th>2024</th>
                      <th>2025</th>
                      <th>May 2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GB players (played in past year)</td>
                      <td>15,000</td>
                      <td>400,000</td>
                      <td>860,000</td>
                      <td>
                        <strong>1,000,000</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>GB courts</td>
                      <td>~50</td>
                      <td>870</td>
                      <td>~1,550</td>
                      <td>
                        <strong>1,825</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Players per court</strong>
                      </td>
                      <td>~300</td>
                      <td>~460</td>
                      <td>~555</td>
                      <td>
                        <strong>~550</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p className="src">
                Source: LTA, the governing body for padel in Great Britain.
              </p>
              <p>
                The bottom row is the one that matters for a would-be operator:
                court numbers grew 36-fold in seven years and demand per court
                still nearly doubled. A doubles court running a realistic booking
                day saturates at roughly 250–300 regular players; the national
                average of ~550 past-year players per court is why peak slots sell
                out in minutes and why observed occupancy at good venues runs 85%+.
                New capacity is being absorbed as fast as it is built.
              </p>
              <ul>
                <li>
                  Participation more than doubled in 2025 (+115%). The LTA’s
                  target of 1,000 courts by end-2026 was reached in July 2025, a
                  year early.
                </li>
                <li>
                  Playtomic’s 2026 Global Padel Report classifies the UK as a
                  “Hotspot” market: demand consistently outpacing supply, ~85%
                  average court occupancy, and roughly half of UK players reporting
                  difficulty booking peak slots.
                </li>
                <li>
                  Retention distinguishes a sport from a craze: 92% of first-time
                  players return, UK play frequency has held steady at ~4 sessions
                  per month throughout the boom, and two-thirds of GB padel players
                  also play tennis — the sport recruits from an established base.
                </li>
                <li>
                  The sport is structurally social: doubles by default, 90-minute
                  sessions, playable across mixed abilities, with tournament
                  formats (<G term="Americano">Americano</G>) designed around
                  rotating partners. These
                  mechanics drive food and beverage spend directly.
                </li>
              </ul>
              <Caveat title="The Swedish crash — the case against, in one box">
                <p>
                  Sweden multiplied its court stock thirtyfold in three years, then
                  destroyed an estimated €500m of capital: ~90 operator
                  bankruptcies in 2023 alone, 100+ facilities closed, the largest
                  chain shutting 50 of its 63 clubs. The crucial nuance:{" "}
                  <strong>Swedish participation held up throughout</strong> —
                  600,000+ Swedes were still playing as venues collapsed around
                  them. The crash came from oversupply, cheap capital and a spike
                  in energy costs, not from falling demand. The lessons this plan
                  adopts: watch local players-per-court (not national sentiment),
                  keep leverage modest, and never compete on court capacity alone.
                  Section 12 covers this fully.
                </p>
              </Caveat>
              <Caveat title="Data caveats worth knowing">
                <p>
                  “One million players” means played at least once in the past
                  year; regular players are estimated at ~400k. Occupancy figures
                  vary by source (Playtomic’s ~85% skews towards its own
                  high-demand clubs; a broader UK estimate is ~74%, with indoor at
                  ~71% and outdoor ~45%). Per-court profit claims of £130k+ mostly
                  come from companies selling courts or finance — Savills’ ~£160k{" "}
                  <em>revenue</em> per covered court is the defensible anchor, and
                  it is what Section 7 builds on.
                </p>
              </Caveat>
            </section>

            {/* ============ 3 ============ */}
            <section id="s3" className="measure">
              <h2>
                <span className="no">3</span>Local market
              </h2>
              <h3 id="s3-supply">
                Current supply within ~20 minutes of the Brighton–Burgess Hill
                corridor
              </h3>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th>Venue</th>
                      <th>Location</th>
                      <th>Courts</th>
                      <th>Format</th>
                      <th>Price/court/hr</th>
                      <th>Food &amp; drink</th>
                      <th>Booking</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Game4Padel, Hove Beach Park</td>
                      <td>Hove seafront</td>
                      <td>4</td>
                      <td>Outdoor</td>
                      <td>~£28–32</td>
                      <td>None (public park)</td>
                      <td>MATCHi</td>
                    </tr>
                    <tr>
                      <td>Game4Padel, Withdean</td>
                      <td>Brighton</td>
                      <td>3</td>
                      <td>Covered (canopy)</td>
                      <td>~£40–48</td>
                      <td>None; pub adjacent</td>
                      <td>MATCHi</td>
                    </tr>
                    <tr>
                      <td>PADELHUB Crawley</td>
                      <td>Off A23 nr Warninglid</td>
                      <td>5 indoor + 2 outdoor</td>
                      <td>Warehouse</td>
                      <td>£30–60</td>
                      <td>Licensed bar + café</td>
                      <td>Playtomic</td>
                    </tr>
                    <tr>
                      <td>Eixo Padel</td>
                      <td>Goddards Green, nr Burgess Hill</td>
                      <td>7 (incl. 1 kids, 1 single)</td>
                      <td>Mixed indoor/outdoor</td>
                      <td>£24–44</td>
                      <td>Coffee bar</td>
                      <td>Own/Playskan</td>
                    </tr>
                    <tr>
                      <td>Smash Padel Mid Sussex</td>
                      <td>Cuckfield (rugby club)</td>
                      <td>3</td>
                      <td>Outdoor + canopy</td>
                      <td>£24–44</td>
                      <td>Rugby clubhouse</td>
                      <td>Playskan</td>
                    </tr>
                    <tr>
                      <td>Atmos Padel Worthing</td>
                      <td>Angmering (rugby club)</td>
                      <td>4</td>
                      <td>Outdoor</td>
                      <td>£24–32</td>
                      <td>None</td>
                      <td>Playtomic</td>
                    </tr>
                    <tr>
                      <td>West Worthing Club</td>
                      <td>Worthing</td>
                      <td>2</td>
                      <td>Covered</td>
                      <td>Modest</td>
                      <td>Members’ bar</td>
                      <td>ClubSpark</td>
                    </tr>
                    <tr>
                      <td>The Triangle</td>
                      <td>Burgess Hill</td>
                      <td>1</td>
                      <td>Covered</td>
                      <td>Pay &amp; play</td>
                      <td>Leisure-centre café</td>
                      <td>Places Leisure</td>
                    </tr>
                    <tr>
                      <td>
                        Others (Henfield, Cottesmore golf hotel, Bluecoat Horsham,
                        Hassocks racquets club)
                      </td>
                      <td>—</td>
                      <td>~8–10</td>
                      <td>Mostly outdoor</td>
                      <td>£30–40</td>
                      <td>Varies</td>
                      <td>Mixed</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Approximately <strong>30 courts</strong> serve a catchment of
                roughly <strong>450,000 people</strong> (Brighton &amp; Hove 284k,
                Mid Sussex 155k, plus the Adur/Worthing/Lewes fringes): about one
                court per 15,000 people.
              </p>

              <h3 id="s3-demand">Evidence of unmet demand</h3>
              <ul>
                <li>
                  Hove Beach Park: <strong>97% average weekly occupancy</strong>{" "}
                  across 392 bookable court-hours per week, sustained over six
                  months. The council’s user survey found court availability to be
                  the single biggest barrier to playing more.
                </li>
                <li>
                  Withdean’s single pop-up court ran at ~90% occupancy, prompting
                  the council to build three permanent covered courts this year.
                </li>
                <li>
                  PADELHUB Crawley and Atmos Worthing showed{" "}
                  <strong>zero available Playtomic slots</strong> on days sampled
                  in August 2026.
                </li>
                <li>
                  The commercial agent on the Shoreham scheme describes indoor
                  supply around Brighton as constrained by the lack of suitable
                  buildings rather than by demand.
                </li>
              </ul>
              <p>
                Where the binding constraint is building stock, incumbents cannot
                respond quickly to demand. That is a favourable structure for a new
                entrant able to secure a suitable site (Section 10).
              </p>

              <h3 id="s3-pipeline">Pipeline</h3>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Location</th>
                      <th>Courts</th>
                      <th>Status</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Club Padel, Fishermans Wharf</strong>
                      </td>
                      <td>Shoreham</td>
                      <td>6 indoor</td>
                      <td>
                        <strong>Under construction; opens autumn 2026</strong>
                      </td>
                      <td>
                        “Sussex’s first premium indoor padel club.” High-end bar
                        overlooking courts; £50–60/hr; founder membership tiers
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>The Padel Club @ Q Leisure</strong>
                      </td>
                      <td>Albourne (Hickstead)</td>
                      <td>4 covered + 2 outdoor</td>
                      <td>Planning submitted (DM/25/3096); targeting 2026</td>
                      <td>National chain; clubhouse with food and drink</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Padel centre, Consort Way</strong>
                      </td>
                      <td>Burgess Hill town centre</td>
                      <td>4 indoor</td>
                      <td>
                        <strong>Approved May 2026</strong>; conditions being
                        discharged Aug 2026 — fit-out{" "}
                        imminent
                      </td>
                      <td>
                        Includes a café and social space; local family applicant
                        (Vans Agnew), pay-and-play positioning
                      </td>
                    </tr>
                    <tr>
                      <td>Eixo Padel expansion</td>
                      <td>Goddards Green</td>
                      <td>+3 outdoor</td>
                      <td>Approved Jan 2026</td>
                      <td>Existing venue adding courts</td>
                    </tr>
                    <tr>
                      <td>Hove Fitness Centre</td>
                      <td>Hove</td>
                      <td>3 canopied</td>
                      <td>Application in; noise objections</td>
                      <td>Residential noise contested</td>
                    </tr>
                    <tr>
                      <td>Housedean Farm grain store</td>
                      <td>Nr Lewes (SDNP)</td>
                      <td>1 indoor</td>
                      <td>Application in</td>
                      <td>Farm diversification</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Plumpton Racecourse</strong>
                      </td>
                      <td>Lewes edge</td>
                      <td>5</td>
                      <td>
                        <strong>Approved Aug 2026</strong>
                      </td>
                      <td>
                        Hurstwood Sports Group; converting an existing building
                      </td>
                    </tr>
                    <tr>
                      <td>“Brighton Padel &amp; Wellbeing Hub”</td>
                      <td>Undisclosed</td>
                      <td>TBC</td>
                      <td>Website only</td>
                      <td>Padel + fitness + spa concept; unverified</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                If the full pipeline completes, the catchment reaches{" "}
                <strong>~60 courts by end-2027</strong> — one per ~7,500 people,
                still two to three times below current Spanish or Swedish
                provision. The relevant question is whether the catchment can
                absorb the pipeline plus one further venue. Sections 4 and 6
                address this from the demand and competitive sides respectively.
              </p>
            </section>

            {/* ============ 4 ============ */}
            <section id="s4" className="measure">
              <h2>
                <span className="no">4</span>Market sizing
              </h2>
              <p>
                Three questions, answered in order: how many people play here
                today, how many the venue needs, and what happens when the full
                pipeline of new courts lands.
              </p>

              <h3 id="s4-today">How many people play in the catchment today</h3>
              <p>
                The naive method — applying national participation rates (~0.7% of
                the population playing regularly) to a 450k catchment — gives
                ~3,100 regular players. The revealed local demand says that
                materially understates reality:
              </p>
              <ul>
                <li>
                  The catchment’s ~30 courts observably run at 70–95% occupancy
                  (Hove Beach Park 97%; Withdean ~90%; zero sampled availability at
                  the two big Playtomic venues).
                </li>
                <li>
                  30 courts × ~15 bookable hours/day × ~70–80% blended utilisation
                  ≈ <strong>9,500–11,000 court-hours per month</strong>. Doubles
                  puts four players on a court, so that is roughly 38,000–44,000
                  player-sessions per month.
                </li>
                <li>
                  At the UK-typical 4 sessions per player per month:{" "}
                  <strong>
                    ~9,500–11,000 people already playing regularly in the catchment
                  </strong>{" "}
                  — around 2.4% of the population, three times the national rate,
                  in a market where the council’s own survey says availability is
                  the main barrier to playing more.
                </li>
              </ul>
              <p>
                That is consistent with the catchment profile — affluent (Mid
                Sussex median salary £37.7k), young (Brighton median age 37.9), and
                early to the sport — and it means today’s player base is a floor,
                capped by supply rather than interest.
              </p>

              <h3 id="s4-needed">How many players the venue needs</h3>
              <p>Working back from the base case (Section 7):</p>
              <ul>
                <li>
                  4 doubles courts × 15 hours/day × 60% utilisation, plus 2 singles
                  courts at 45% ≈ 5,150 player-sessions per month
                </li>
                <li>
                  At 4 sessions per player per month:{" "}
                  <strong>~1,290 regular players</strong> using the venue as their
                  main club
                </li>
                <li>
                  Against ~9,500–11,000 people already playing locally: a required
                  share of{" "}
                  <strong>
                    12–14% of current active players, assuming zero growth
                  </strong>
                  .
                </li>
              </ul>

              <h3 id="s4-lands">What happens when the pipeline lands</h3>
              <p>
                The real test is end-2027: ~65 courts in the catchment (current
                stock, full pipeline including the approved Consort Way and Eixo
                expansions, plus this venue). Total capacity at that point is
                ~29,600 court-hours per month. What average utilisation each
                scenario produces:
              </p>
              <TW size="mid">
                <table>
                  <thead>
                    <tr>
                      <th>Player-base scenario (end-2027)</th>
                      <th>Active players</th>
                      <th>Implied average utilisation across all ~65 courts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Growth stops dead today</td>
                      <td>~10,000</td>
                      <td>~34%</td>
                    </tr>
                    <tr>
                      <td>Half the current national growth rate</td>
                      <td>~16,000</td>
                      <td>~54%</td>
                    </tr>
                    <tr>
                      <td>National trajectory continues</td>
                      <td>~22,000+</td>
                      <td>~74%+ (supply-capped again)</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <PipelineAbsorptionFigure />
              <p>
                Read against the venue’s break-even of 50–55% utilisation (Section
                7): the growth scenario clears comfortably, but with the pipeline
                now fully approved the{" "}
                <strong>
                  middle scenario sits right at break-even on raw averages
                </strong>{" "}
                — meaning in a moderate-growth world, differentiation decides who
                wins, not the rising tide. That is the strongest quantitative
                argument in this document for the social-venue format over another
                pay-and-play box, and it hardens the stop criteria: if the pipeline
                grows again before a lease is signed, the maths must be rerun.
                National participation grew 115% last year; the middle row assumes
                it slows by half, twice.
              </p>
              <p>
                <strong>The metric to watch is local players per court.</strong>{" "}
                Above ~200, courts stay full regardless of operator; below ~120,
                differentiation decides who wins; a sustained slide towards ~80 is
                the Swedish signal and triggers the stop criteria in Section 12.
              </p>

              <h3 id="s4-singles">Singles courts</h3>
              <p>
                A padel singles court measures
                20m × 6m against 20m × 10m for
                doubles, so it fits floor-space a doubles court cannot use. Within
                20 miles there is one bookable outdoor singles court (Eixo) and one
                indoor (Eastbourne). Singles serves two-player groups, lunchtime
                sessions and coaching; two singles courts cost roughly one doubles
                court to build and improve the layout efficiency of an irregular
                unit. The downside is limited and the differentiation is real.
              </p>
            </section>

            {/* ============ 5 ============ */}
            <section id="s5" className="measure">
              <h2>
                <span className="no">5</span>Format options
              </h2>
              <p>Three realistic formats:</p>
              <Tabs defaultValue="a" className="doc-tabs breakout">
                <TabsList>
                  <TabsTrigger value="a">A — Pay-and-play</TabsTrigger>
                  <TabsTrigger value="b">B — Full hospitality</TabsTrigger>
                  <TabsTrigger value="c">C — At an existing club</TabsTrigger>
                </TabsList>
                <TabsContent value="a" className="measure">
                  <p>
                    <strong>Option A — standard pay-and-play venue.</strong>{" "}
                    Industrial unit, 4–6 courts, app-based bookings, minimal
                    staffing. Cheapest to build (£500–700k indoor) and leanest to
                    run, with local proof that it fills. The weakness is strategic:
                    this is the format the entire pipeline is building, and once
                    supply catches demand it competes on price and availability
                    alone. Sound today; exposed within three years.
                  </p>
                </TabsContent>
                <TabsContent value="b" className="measure">
                  <p>
                    <strong>Option B — courts with a full hospitality layer.</strong>{" "}
                    The same courts plus a licensed bar, kitchen, garden/terrace
                    and membership programming. Adds £200–300k of{" "}
                    capex and
                    requires hospitality operations. In return: 20–35% of revenue
                    from streams pay-and-play venues do not have, customers with
                    reasons to attend beyond slot availability, and materially
                    better resilience if court prices fall. This is the format
                    modelled in the rest of the document.
                  </p>
                </TabsContent>
                <TabsContent value="c" className="measure">
                  <p>
                    <strong>Option C — courts at an existing sports club.</strong>{" "}
                    Adding courts at a rugby, golf or tennis club (the Smash
                    Padel–Haywards Heath RFC model). Substantially cheaper
                    (£250–450k, outdoor/canopy), with an existing clubhouse and
                    easier planning, but on a revenue-share, on someone else’s
                    site, with the bar revenue accruing to the host. A viable
                    fallback if the Option B funding structure cannot be closed.
                  </p>
                </TabsContent>
              </Tabs>
              <p>
                <strong>Where this lands.</strong> Option B is preferred on the
                evidence rather than on taste: the one local venue with a bar and
                tournament programme is the busiest in the catchment; the two
                strongest recent London openings (Padel Social Club, Padium) are
                hospitality-led with waitlisted memberships; and the hospitality
                layer is the part competitors can’t retrofit into a shed (no
                space, no licence, no kitchen). It’s also the part of the plan to
                test hardest during validation — if lender and landlord
                conversations won’t support the extra capex, Option C stays open.
              </p>
              <p>Option B in outline:</p>
              <ul>
                <li>
                  <strong>Four indoor doubles and two indoor singles courts</strong>
                  , competition-spec, adequate clear height, climate-controlled.
                  Large enough to sustain leagues and a social calendar; small
                  enough to retain a club feel.
                </li>
                <li>
                  <strong>A licensed bar and kitchen</strong> with courtside
                  sightlines, so waiting and spectating drive dwell time and spend.
                </li>
                <li>
                  <strong>Outdoor terrace and a planted indoor social space</strong>{" "}
                  for the winter months — the cheapest single intervention that
                  separates the venue from a sports centre.
                </li>
                <li>
                  <strong>Membership at ~£30–35/month</strong>: extended booking
                  window, discounted rates, leagues, member events, guest passes.
                  Local benchmark: PADELHUB charges £35–45/month; Padel Social
                  Club’s £60/month London tier sold out. No venue in the catchment
                  has built a membership with genuine club value.
                </li>
                <li>
                  <strong>Programming</strong>: weekly Americanos, box leagues, a
                  coaching academy, corporate events (£30–60/head is the prevailing
                  UK rate). Programmed hours fill off-peak capacity and feed bar
                  revenue.
                </li>
                <li>
                  <strong>Tone</strong>: informal and accessible — a country-club
                  standard of comfort without members’-club exclusivity.
                </li>
              </ul>
            </section>

            {/* ============ 6 ============ */}
            <section id="s6" className="measure">
              <h2>
                <span className="no">6</span>Competitive analysis
              </h2>
              <p>
                <strong>
                  Current rivalry is low; rivalry within 18 months will be real.
                </strong>{" "}
                At 90–97% occupancy, today’s venues share a queue rather than
                compete. By end-2027 the catchment could hold nearly 60 courts. If
                participation continues on anything near its current trajectory,
                demand outruns even that supply; nonetheless, entry is visible
                (planning applications are public) and further entrants should be
                assumed.
              </p>
              <p>
                <strong>
                  The entrant that matters most is Club Padel, Shoreham
                </strong>{" "}
                (autumn 2026): premium indoor, high-end bar, founder memberships —
                the closest existing project to Option B. Three considerations:
              </p>
              <ol>
                <li>
                  <strong>Geography.</strong> Shoreham serves the coastal strip
                  west of Brighton. A site in the Burgess Hill–Hassocks–A23
                  corridor serves the Mid Sussex commuter towns and north Brighton
                  — a different 20-minute drive-time map containing only Eixo and
                  PADELHUB.
                </li>
                <li>
                  <strong>Price.</strong> Club Padel has set its list price at
                  £50–60/hour. A position at £36–44 peak — comparable experience,
                  mid-market price, membership-led — is open and defensible.
                </li>
                <li>
                  <strong>Information value.</strong> A well-funded operator
                  committing seven figures to the same thesis in the same catchment
                  is strong external validation, and its occupancy and membership
                  data will be publicly observable within months of opening —
                  before this project reaches the point of committed capital.
                </li>
              </ol>
              <p>
                <strong>Substitutes.</strong> Gyms, five-a-side, tennis and other
                leisure spend. Padel is currently taking share from these, and 92%
                first-session retention indicates it holds what it takes. The most
                credible substitute threat is padel bolted onto existing gyms
                (David Lloyd is the UK’s largest padel operator), but its nearest
                padel sites are outside this catchment and its product is an add-on
                for existing members rather than a standalone destination.
              </p>
              <p>
                <strong>Supplier power.</strong> Court manufacturers and installers
                are numerous, which supports both capex negotiation and
                asset-finance terms. The supplier with genuine leverage is
                Playtomic (~80% of UK booking-platform share), whose commission is
                unpublished and which owns the customer relationship. Mitigation is
                covered in Section 11.
              </p>
              <p>
                <strong>Buyer power.</strong> Players are currently
                availability-first. As supply catches up, price sensitivity will
                rise for undifferentiated court time; it rises far less for a venue
                with membership and community attached. This asymmetry is the core
                of the strategy.
              </p>
              <p>
                <strong>Durable advantages available to this project:</strong> the
                licensed premises, kitchen and outdoor space (planning consent,
                licence and capex a competitor cannot cheaply replicate); the
                membership base (accumulates and does not transfer); site control
                (7m+ clear-height buildings near Brighton are the market’s
                acknowledged constraint, so a secured building is itself a
                barrier); and programming density (the venue running the leagues
                holds the players).
              </p>
              <p>
                <strong>On timing.</strong> We wouldn’t be first to this position,
                and don’t need to be — but it supports a limited number of venues,
                and the local pipeline suggests it gets filled within 12–18 months.
                That argues for running the validation phase now and reaching a
                decision within three months.
              </p>
            </section>

            {/* ============ 7 ============ */}
            <section id="s7" className="measure">
              <h2>
                <span className="no">7</span>Financial overview
              </h2>
              <p>
                All figures are pre-diligence estimates from operator benchmarks,
                supplier pricing and published local rates; the validation phase
                firms them up. VAT is excluded throughout.
              </p>

              <h3 id="s7-capex">Capital costs — ~£950k total requirement (base)</h3>
              <TW>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Estimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4 doubles court kits, installed (indoor spec)</td>
                      <td>£240k</td>
                    </tr>
                    <tr>
                      <td>2 singles court kits, installed</td>
                      <td>£80k</td>
                    </tr>
                    <tr>
                      <td>Groundworks / floor preparation</td>
                      <td>£60k</td>
                    </tr>
                    <tr>
                      <td>Lighting, electrical, 3-phase upgrade</td>
                      <td>£50k</td>
                    </tr>
                    <tr>
                      <td>
                        Fit-out: bar, kitchen, changing rooms, terrace/garden,
                        HVAC, mezzanine
                      </td>
                      <td>£250k</td>
                    </tr>
                    <tr>
                      <td>Design, planning, professional fees, licensing</td>
                      <td>£60k</td>
                    </tr>
                    <tr>
                      <td>Booking, access control, AV, systems</td>
                      <td>£25k</td>
                    </tr>
                    <tr>
                      <td>Contingency (~12%)</td>
                      <td>£85k</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Capex</strong>
                      </td>
                      <td>
                        <strong>~£850k</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Working capital /
                        opening-period buffer
                      </td>
                      <td>£100k</td>
                    </tr>
                    <tr className="total">
                      <td>
                        <strong>Total funding requirement</strong>
                      </td>
                      <td>
                        <strong>~£950k</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Range across realistic sites: <strong>£700k to £1.2m</strong>{" "}
                depending on the building. For calibration: 4-court outdoor clubs
                run £250–450k all-in; Padium’s 8-court flagship cost ~£5m; a
                13-court centre in Farnham cost £2.75m. This project sits
                deliberately mid-market.
              </p>

              <h3 id="s7-revenue">Revenue — three scenarios (steady state, year 2)</h3>
              <p>
                Assumptions: 15 bookable hours/day, 363 days/year. Doubles blended
                £26–36/hour across peak and off-peak; singles £20–24/hour;
                membership ~£30–35/month. Local price ceiling: £60/hour (PADELHUB
                peak; Club Padel list price).
              </p>
              <TW size="mid">
                <table>
                  <thead>
                    <tr>
                      <th>Revenue line</th>
                      <th>Conservative</th>
                      <th>
                        <strong>Base</strong>
                      </th>
                      <th>Strong</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Doubles utilisation</td>
                      <td>45%</td>
                      <td>
                        <strong>60%</strong>
                      </td>
                      <td>72%</td>
                    </tr>
                    <tr>
                      <td>Court hire (doubles + singles)</td>
                      <td>£395k</td>
                      <td>
                        <strong>£530k</strong>
                      </td>
                      <td>£660k</td>
                    </tr>
                    <tr>
                      <td>Memberships (250 / 350 / 500 members)</td>
                      <td>£90k</td>
                      <td>
                        <strong>£125k</strong>
                      </td>
                      <td>£180k</td>
                    </tr>
                    <tr>
                      <td>Bar and kitchen</td>
                      <td>£110k</td>
                      <td>
                        <strong>£180k</strong>
                      </td>
                      <td>£260k</td>
                    </tr>
                    <tr>
                      <td>Coaching (net)</td>
                      <td>£45k</td>
                      <td>
                        <strong>£70k</strong>
                      </td>
                      <td>£95k</td>
                    </tr>
                    <tr>
                      <td>Events, corporate, tournaments</td>
                      <td>£35k</td>
                      <td>
                        <strong>£60k</strong>
                      </td>
                      <td>£95k</td>
                    </tr>
                    <tr>
                      <td>Retail and racket hire</td>
                      <td>£15k</td>
                      <td>
                        <strong>£25k</strong>
                      </td>
                      <td>£35k</td>
                    </tr>
                    <tr className="total">
                      <td>
                        <strong>Total revenue</strong>
                      </td>
                      <td>
                        <strong>£690k</strong>
                      </td>
                      <td>
                        <strong>£990k</strong>
                      </td>
                      <td>
                        <strong>£1,325k</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Non-court revenue is 30% of the base case — the top of the 20–35%
                band achieved by well-run clubs, which is the purpose of the
                format. (Standard pay-and-play venues typically run food and
                beverage at 4–7% of revenue.)
              </p>
              <p>
                Deliberately excluded from the model as upside:{" "}
                <strong>sponsorship</strong>. Established clubs get up to ~10% of
                revenue from sponsorship and brand partnerships (court naming, kit
                and equipment deals, local businesses backing leagues — Rocket
                Padel runs an EA7/Armani tie-up at the national scale), and the
                pre-opening version matters for financing too: founding sponsors
                and court naming rights are cash that arrives before the doors
                open, sold against exactly the demand data in this document.
              </p>

              <h3 id="s7-opex">Operating costs (base)</h3>
              <TW>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rent (~15,000 sq ft at £8–10/sq ft, corridor rates)</td>
                      <td>£135k</td>
                    </tr>
                    <tr>
                      <td>
                        Business rates (leisure
                        multiplier, post-2026 regime)
                      </td>
                      <td>£45k</td>
                    </tr>
                    <tr>
                      <td>
                        Staff (GM, lean reception via app bookings, bar/kitchen
                        team, head coach on hybrid terms)
                      </td>
                      <td>£250k</td>
                    </tr>
                    <tr>
                      <td>F&amp;B cost of goods (~40% of F&amp;B revenue)</td>
                      <td>£72k</td>
                    </tr>
                    <tr>
                      <td>Utilities (indoor, climate-controlled)</td>
                      <td>£50k</td>
                    </tr>
                    <tr>
                      <td>Booking platform and payments (~5% of court revenue)</td>
                      <td>£27k</td>
                    </tr>
                    <tr>
                      <td>Court maintenance and sinking fund</td>
                      <td>£15k</td>
                    </tr>
                    <tr>
                      <td>Insurance, marketing, software, professional fees</td>
                      <td>£45k</td>
                    </tr>
                    <tr className="total">
                      <td>
                        <strong>Total operating costs</strong>
                      </td>
                      <td>
                        <strong>~£640k</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>

              <h3 id="s7-profit">Profitability</h3>
              <TW size="mid">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Conservative</th>
                      <th>
                        <strong>Base</strong>
                      </th>
                      <th>Strong</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EBITDA</td>
                      <td>~£75k</td>
                      <td>
                        <strong>~£350k</strong>
                      </td>
                      <td>~£620k</td>
                    </tr>
                    <tr>
                      <td>EBITDA margin</td>
                      <td>11%</td>
                      <td>
                        <strong>35%</strong>
                      </td>
                      <td>47%</td>
                    </tr>
                    <tr>
                      <td>Debt service (~£450k debt across the structure)</td>
                      <td>~£130k</td>
                      <td>~£130k</td>
                      <td>~£130k</td>
                    </tr>
                    <tr>
                      <td>Cash after debt service</td>
                      <td>
                        <strong>–£55k</strong>
                      </td>
                      <td>
                        <strong>~£220k</strong>
                      </td>
                      <td>~£490k</td>
                    </tr>
                    <tr>
                      <td>Payback on ~£950k</td>
                      <td>n/a</td>
                      <td>
                        <strong>~4 years</strong>
                      </td>
                      <td>~2 years</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                The conservative column is the one to take seriously: at 45%
                utilisation the venue is EBITDA-positive but can’t service its
                debt. Two facts sit either side of it. Every observed local
                comparable runs at 85–97% — roughly double the conservative
                assumption. And the ancillary layer is the margin of safety: a
                pay-and-play venue at 45% utilisation has no other engine, whereas
                this format still has membership, bar and events revenue.
                Break-even including debt service lands at roughly{" "}
                <strong>50–55% utilisation</strong> — the number both we and any
                lender will focus on.
              </p>

              <h3 id="s7-unit">Unit economics</h3>
              <p>
                An indoor doubles court-hour costs roughly £11–13 to provide (rent,
                rates, utilities, staff share, maintenance) and sells for £26–36.
                Each booked hour brings ~2.4 people past the bar on average. Court
                hire drives margin; hospitality drives retention; membership drives
                predictability. The operating design connects the three.
              </p>
            </section>

            {/* ============ 8 ============ */}
            <section id="s8" className="measure">
              <h2>
                <span className="no">8</span>Financing — the biggest bottleneck
              </h2>

              <h3 id="s8-constraint">The constraint, briefly</h3>
              <p>
                No UK padel venue in the £500k–£2m range that we found was funded
                mainly by{" "}
                unsecured bank debt. Unsecured
                lenders underwrite against
                filed accounts: Funding Circle excludes businesses under a year
                old, iwoca caps new companies around £10k, Starling wants trading
                businesses plus{" "}
                personal guarantees, and the
                high-street banks cap
                unsecured lending at £25k–£100k against track records a new company
                doesn’t have. Projected revenue, however well-evidenced, isn’t
                collateral. The gap in our case is exactly that — no trading
                history and no leisure background — so the routes below differ
                mainly in <em>how they answer that gap</em>: assemble around it,
                borrow someone’s credibility, or go and earn the track record
                first.
              </p>
              <p id="s8-routes">
                Five real routes, for discussion. They aren’t all mutually
                exclusive — and the validation phase can test the first two in the
                same set of conversations.
              </p>

              <Tabs defaultValue="a" className="doc-tabs breakout">
                <TabsList>
                  <TabsTrigger value="a">A — Full stack now</TabsTrigger>
                  <TabsTrigger value="b">B — Institutional capital</TabsTrigger>
                  <TabsTrigger value="c">C — Small first, big later</TabsTrigger>
                  <TabsTrigger value="d">D — Franchise first</TabsTrigger>
                  <TabsTrigger value="e">E — Not-for-profit / LTA</TabsTrigger>
                </TabsList>

                <TabsContent value="a" className="measure">
                  <RouteHead letter="A">
                    Route A — raise the full ~£950k now, independently
                  </RouteHead>
                  <p>
                    Assemble the money from the sources that will actually deal
                    with a newco, each taking the slice of risk it’s built for:
                  </p>
                  <TW size="wide">
                    <table>
                      <thead>
                        <tr>
                          <th>Layer</th>
                          <th>Amount</th>
                          <th>Description</th>
                          <th>Cost / terms</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Founder capital</td>
                          <td>£75–100k</td>
                          <td>Founders’ own investment</td>
                          <td>Required by every other layer</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Start Up Loans</strong> (British Business Bank)
                          </td>
                          <td>
                            up to <strong>£100k</strong>
                          </td>
                          <td>
                            £25k per founder × up to 4 founders; personal loans
                            with{" "}
                            <strong>
                              no security and no personal guarantee
                            </strong>
                            ; 12 months’ mentoring included
                          </td>
                          <td>7.5% fixed, 1–5 years</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Asset finance</strong> on courts and fit-out
                          </td>
                          <td>£300–350k</td>
                          <td>
                            HP/lease secured on the equipment itself. A
                            padel-specific broker market exists (Johnson Reed, GSM
                            Finance, Gable, Systems Finance) and suppliers offer
                            packages (Padel Galis: £50k court ≈ £1,727/month over 3
                            years). Johnson Reed states it considers new businesses
                            with a plan, forecasts and deposit, and finances
                            bar/gym/changing-room fit-out
                          </td>
                          <td>~8–14% APR-equivalent, 3–7 years</td>
                        </tr>
                        <tr>
                          <td>Landlord contribution</td>
                          <td>£50–100k equivalent</td>
                          <td>
                            Rent-free period plus
                            capital contribution — standard
                            incentives on hard-to-let big-box units, which 7m-eaves
                            sheds are
                          </td>
                          <td>Priced into the lease</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Equity round</strong> (
                            angels / EIS /{" "}
                            crowdfunding)
                          </td>
                          <td>£250–350k</td>
                          <td>See supporting detail below</td>
                          <td>
                            25–35% dilution at a
                            defensible newco valuation
                          </td>
                        </tr>
                        <tr className="total">
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>~£950k</strong>
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </TW>
                  <FundingStackFigure />
                  <p>
                    Blended debt across the structure is ~£450k; Section 7’s base
                    case services it with cover to spare.
                  </p>
                  <Verdict>
                    <p>
                      <strong>What has to be true:</strong> the equity round closes
                      at £250–350k (precedents exist at exactly this size — see
                      supporting detail below); an asset-finance broker approves a
                      newco with a plan and deposit (Johnson Reed says explicitly
                      that it considers them); and a landlord with a hard-to-let 7m
                      shed wants a long lease enough to contribute.
                    </p>
                    <p>
                      <strong>For:</strong> the full concept on day one, no
                      royalties, all the upside, and the fastest route to the
                      position before the window closes.
                    </p>
                    <p>
                      <strong>Against:</strong> the hardest raise on the least
                      evidence; personal guarantees likely on some layers; every
                      execution risk lands on us at once.
                    </p>
                  </Verdict>
                </TabsContent>

                <TabsContent value="b" className="measure">
                  <RouteHead letter="B">
                    Route B — bring in institutional capital
                  </RouteHead>
                  <p>
                    Institutional money comes in three shapes for a project like
                    this, in rising order of how much proof they demand:
                  </p>
                  <p>
                    <strong>B1 — the South East Investment Fund.</strong> The
                    British Business Bank’s new fund for the region (£350m across
                    its South East and East of England funds) will write{" "}
                    <strong>loans of £25k–£2m and equity up to £5m</strong> — and
                    its northern sibling (<G term="NPIF II">NPIF II</G>) put
                    £1.5m into The Padel Club’s
                    expansion, so the parent institution already understands this
                    exact sector. One counterparty could anchor most of the
                    requirement. Status check (late Aug 2026): the fund{" "}
                    <strong>has not yet launched</strong> despite a “summer 2026”
                    target — no fund managers appointed, no application route
                    open, and nothing for a borrower to do until launch beyond
                    monitoring. Treat B1 as a strong option on a slipping timeline
                    rather than a door to knock on today.
                  </p>
                  <p>
                    <strong>
                      B2 — the leisure funds and family offices already in padel,
                      as anchor investors.
                    </strong>{" "}
                    Active Partners and Clark Group led Padel Social Club’s £5.5m
                    round; Dwellcourt Group backed PadelStars from its early sites;
                    family offices joined the PSC round alongside. Realistically
                    these don’t fund a whole first venue — but one of them
                    anchoring a third of the equity round changes everything about
                    how the rest closes, and a corridor-level thesis with this
                    document’s demand data is exactly what gets the meeting. The
                    softer version of “partner with an institution” — their
                    capital and pattern-recognition, our venue.
                  </p>
                  <p>
                    <strong>
                      B3 — landlord or developer capital via the lease
                      (“build-to-suit”).
                    </strong>{" "}
                    The heaviest-duty version: a property owner funds part or all
                    of the build against a long lease at a rent that reflects their
                    capital — the standard mechanism by which institutions fund
                    leisure boxes for tenants they believe in. It shrinks the raise
                    dramatically and moves construction risk to people who build
                    for a living; the price is a 15–25 year lease commitment at a
                    materially higher rent, and it needs a landlord who believes in
                    padel. The small version of this (contribution + rent-free) is
                    already in Route A; the full version is worth tabling with any
                    landlord whose shed has sat empty.
                  </p>
                  <Verdict>
                    <p>
                      <strong>What has to be true:</strong> an institution backs a
                      first-time leisure team — NPIF backed The Padel Club{" "}
                      <em>after</em> it had operating sites, so every version of
                      this route probably requires the experienced-GM hire up
                      front, and B2/B3 also need the thesis to land with people who
                      see many decks.
                    </p>
                    <p>
                      <strong>For:</strong> the cheapest large money realistically
                      open to us; one sophisticated counterparty instead of five;
                      an institutional stamp that makes every other conversation
                      (landlord, brokers, angels, council) easier.
                    </p>
                    <p>
                      <strong>Against:</strong> institutional diligence takes
                      months; tougher governance terms than friendly angels; B3
                      trades capital today for the largest long-term commitment in
                      the plan.
                    </p>
                    <p>
                      <strong>Why it’s worth testing first:</strong> one email
                      each to the padel-experienced funds (B2) establishes whether
                      that route exists now; B1 needs only monitoring until the
                      fund actually launches. Still the highest information value
                      per hour of anything in the plan.
                    </p>
                  </Verdict>
                </TabsContent>

                <TabsContent value="c" className="measure">
                  <RouteHead letter="C">
                    Route C — earn the track record first, then build the full
                    venue
                  </RouteHead>
                  <p>
                    Take the credibility gap at face value and close it the direct
                    way: build the small version now, run it, and finance the real
                    thing off actual accounts.
                  </p>
                  <p>
                    The small version is Section 5’s Option C — three or four
                    canopy courts at a rugby, golf or tennis club, £250–450k
                    all-in. At that size the funding question changes completely:
                    founder capital plus Start Up Loans plus asset finance can
                    cover it{" "}
                    <strong>with little or no equity round at all</strong>. Trade
                    for 12–18 months at the occupancy the local market strongly
                    suggests, then approach the same lenders — and the{" "}
                    <G term="SEIF">SEIF</G> — as an
                    operator with filed accounts, at which point everything
                    reprices: banks lend, asset finance gets cheap, and the full
                    venue raise becomes routine.
                  </p>
                  <Verdict>
                    <p>
                      <strong>What has to be true:</strong> a host club deal on
                      sensible terms; and the social-venue position still being
                      open in two years.
                    </p>
                    <p>
                      <strong>For:</strong> the smallest cheque, the lowest risk,
                      and it converts “these guys have no background” into the one
                      thing that fully answers it. Also teaches us to run a padel
                      operation while the mistakes are cheap.
                    </p>
                    <p>
                      <strong>Against:</strong> the window — the pipeline suggests
                      the destination-venue position fills within 12–18 months, so
                      this route may mean watching someone else take it while we
                      practise. Two builds instead of one, and small-site
                      operations are a real time commitment for what it proves.
                    </p>
                  </Verdict>
                </TabsContent>

                <TabsContent value="d" className="measure">
                  <RouteHead letter="D">
                    Route D — franchise first, for backing and experience
                  </RouteHead>
                  <p>
                    The other way to borrow credibility: buy it. Game4Padel
                    franchises at ~£100k liquid capital with “funding support”;
                    Major Padel Club from ~£70k; Vida Del Padel is expanding. The
                    franchisor brings build expertise, systems and a lender story;
                    bank franchise desks exist for exactly this shape.
                  </p>
                  <Verdict>
                    <p>
                      <strong>What has to be true:</strong> a franchisor whose
                      format and territory work here, and terms that leave
                      debt-service margin intact.
                    </p>
                    <p>
                      <strong>For:</strong> the most structured path for
                      first-timers — someone else’s playbook, someone else’s
                      mistakes already made. Directly answers the experience gap.
                    </p>
                    <p>
                      <strong>Against:</strong> the lender uplift attaches to{" "}
                      <em>proven</em> systems, and UK padel franchising is two
                      years old; royalties come out of margin permanently; the
                      available formats are pay-and-play (the thing Section 5
                      argues against); Game4Padel already operates Brighton’s
                      council courts; and the track record earned is “ran a
                      franchise unit”, which only partly transfers to our own
                      concept. Section 9 has the full analysis.
                    </p>
                  </Verdict>
                </TabsContent>

                <TabsContent value="e" className="measure">
                  <RouteHead letter="E">
                    Route E — go not-for-profit and unlock the LTA’s money
                  </RouteHead>
                  <p>
                    The cheapest capital in this sector is reserved for
                    not-for-profits, and nothing says we have to be a company
                    limited by shares. Structured as a company limited by guarantee
                    or a{" "}
                    <G term="community benefit society">
                      community benefit society
                    </G>
                    , the venue qualifies for the{" "}
                    <strong>
                      LTA facility loans that have already built 100+ padel courts
                    </strong>
                    : up to 50% of covered-court costs (£75k–£130k per court) at{" "}
                    <strong>5% fixed</strong> (2.5% in deprived areas) over 5–15
                    years, plus up to 100% of floodlight costs, with the LTA
                    providing business-modelling and construction support
                    alongside. The same structure opens community shares (a CBS can
                    raise from local people under FCA-light rules, with Crowdfunder
                    matched funding), Sport England money, and puts us near the
                    front of the queue if the government’s covered-courts fund
                    ever publishes an application route.
                  </p>
                  <p>
                    <strong>
                      The actual constraint, stated precisely: an asset lock.
                    </strong>{" "}
                    Profits must be reinvested, and on winding up the assets go to
                    a community purpose — so there is no equity upside and no exit,
                    ever. What it does <em>not</em> mean: founders can still be
                    employed on proper market salaries, the venue can still run a
                    licensed bar (member clubs do everywhere), and a membership-led
                    community club arguably fits this structure better than a
                    shareholder one. The other conditions are real but livable:
                    community-access commitments (15+ hours/week of public access
                    at accessible pricing), LTA registration and safeguarding
                    standards, and a governance board answerable to members. One
                    wrinkle to check early: the LTA’s criteria ask for two years
                    of accounts, which may point to partnering with an established
                    club as the borrowing entity (a natural crossover with Route C)
                    or entering via the Quick Access scheme.
                  </p>
                  <Verdict>
                    <p>
                      <strong>What has to be true:</strong> that what we actually
                      want is a great club and a living from running it — not a
                      sellable asset.
                    </p>
                    <p>
                      <strong>For:</strong> the cheapest money in this entire
                      document; planning and council goodwill comes with it; the
                      structure <em>is</em> the community concept rather than a
                      compromise of it.
                    </p>
                    <p>
                      <strong>Against:</strong> no equity value, full stop — this
                      is a livelihood and a clubhouse, not an investment;
                      community-access conditions cap some peak-hour yield;
                      decisions get shared with a membership.
                    </p>
                  </Verdict>
                </TabsContent>
              </Tabs>

              <h3 id="s8-side">The routes side by side</h3>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Cash needed now</th>
                      <th>Time to the full concept</th>
                      <th>Founder ownership</th>
                      <th>The bet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>A — full stack now</strong>
                      </td>
                      <td>~£950k raised</td>
                      <td>~1 year</td>
                      <td>65–75%</td>
                      <td>The raise closes on evidence alone</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>B — SEIF-anchored</strong>
                      </td>
                      <td>~£950k, one anchor</td>
                      <td>~1–1.5 years</td>
                      <td>depends on terms</td>
                      <td>A new fund backs a first-time team</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>C — small first, big later</strong>
                      </td>
                      <td>£250–450k</td>
                      <td>~2.5–3 years</td>
                      <td>85–100%</td>
                      <td>The position is still open when we’re ready</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>D — franchise first</strong>
                      </td>
                      <td>£100–200k</td>
                      <td>possibly never (their format)</td>
                      <td>100% of a royalty-bearing unit</td>
                      <td>A young franchise system is worth its fee</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>E — not-for-profit / LTA</strong>
                      </td>
                      <td>LTA loan up to ~50% + community shares + small stack</td>
                      <td>~1–1.5 years</td>
                      <td>Salaries yes, equity no</td>
                      <td>We want the club and a living, not an exit</td>
                    </tr>
                  </tbody>
                </table>
              </TW>

              <p>
                <strong>Where we currently lean, for discussion:</strong> run A and
                B together through validation — the same conversations (brokers,
                agents, the SEIF, a first angel coffee) price both within four
                weeks. Hold C as the genuine fallback rather than a consolation:
                it’s the only commercial route that fully solves the credibility
                problem, and if the raise stalls it becomes the plan rather than
                the failure. D earns its place because it attacks the experience
                gap most directly, but it costs the concept — worth choosing only
                if we decide experience matters more than the position. E is not a
                fallback but a fork in what we’re building: it carries the
                strongest financing package of the five, paid for entirely in
                upside — the right answer if what we want is the club and a good
                living from it, the wrong one if any of us is counting on an exit.
                That deserves an explicit decision among us, not a default.
              </p>

              <FinancingDecisionMapFigure />

              <p>
                Also looked at and set aside: a commercial mortgage (
                freehold-only,
                needs trading history) and a council concession like Hove Beach
                Park (the channel exists but is currently occupied, and costs the
                licence and the format).
              </p>

              <h3 id="s8-equity">
                Supporting detail: why some equity belongs in routes A and B
              </h3>
              <p>
                The debt-first instinct is right for a cash-generative asset
                business — but the first ~£300k of risk (planning, licensing and
                the build, all pre-revenue) is venture risk that debt providers
                simply won’t price. Equity absorbs the risk debt refuses; debt
                finances the asset-backed layer it’s
                good at. An EIS-qualifying
                round — 30% income-tax relief to investors, which meaningfully
                improves the terms we can ask for — covering 25–35% of the company
                is how this gets solved at this scale.
              </p>
              <p>
                Precedents: Social Sports Society raised £307k on Crowdcube against
                a £250k target; The Padel Hub raised ~£163k on Crowdcube alongside
                £1.24m elsewhere in the round; Court de Padel has raised £641k
                across two Crowdcube rounds from a single open club; Smash Padel
                raised ~£537k at a £5.8m{" "}
                <G term="pre-money valuation">pre-money valuation</G>; The Padel
                Club’s
                expansion round included EIS investment from Endeavour Ventures.
                Crowdfunding has an additional property relevant to a membership
                venue: two hundred local investors are two hundred founding
                members.
              </p>

              <h3 id="s8-grants">Supporting detail: grants and public money</h3>
              <p>
                For a company limited by shares, the realistic grant expectation is{" "}
                <strong>zero</strong>. Sport England’s Movement Fund excludes
                for-profits explicitly; the LTA’s loan schemes fund
                not-for-profits only (which is exactly what makes Route E
                interesting); the government’s £3m for covered padel facilities in
                2026/27 is routed through the LTA towards roughly three community
                projects nationally, with no application route yet published; and
                the post-UKSPF local funds are directed at deprived areas outside
                the South East.
              </p>
              <p>What a for-profit does get is tax-side and worth six figures:</p>
              <ul>
                <li>
                  <strong>
                    Full expensing and the Annual Investment Allowance
                  </strong>
                  : 100% first-year relief on plant and machinery — LED lighting,
                  electrical systems, HVAC, kitchen and bar equipment, systems. The
                  court structures themselves occupy an unsettled position between
                  “plant” and “premises”; a capital-allowances specialist’s
                  opinion before the build is warranted, as the classification
                  moves six figures of relief.
                </li>
                <li>
                  <strong>
                    Permanently lower retail/hospitality/leisure rates multipliers
                  </strong>{" "}
                  from April 2026, plus improvement relief on qualifying works to
                  occupied premises.
                </li>
                <li>
                  <strong>Council concessions</strong>: Brighton &amp; Hove has
                  twice granted council land to a padel operator (Hove Beach Park,
                  Withdean) in exchange for community pricing — a channel that
                  exists, currently occupied by Game4Padel.
                </li>
              </ul>
              <p>
                (Longer-range: the new Sussex &amp; Brighton Mayoral Combined
                Authority controls a £1.14bn 30-year investment fund from 2028 —
                one to monitor, not to wait for.)
              </p>

              <h3 id="s8-investors">
                Supporting detail: investors active in UK padel
              </h3>
              <p>
                The investor base for this sector is established and identifiable:
              </p>
              <ul>
                <li>
                  <strong>Individuals (verified):</strong> Andy and Jamie Murray,
                  Andrew Castle, Annabel Croft, Virgil van Dijk, Jamie Vardy,
                  Dominic Calvert-Lewin, Tammy Abraham, Callum Wilson and Marcus
                  Tavernier all hold Game4Padel stakes (most recent round at a £27m
                  valuation). Stormzy backs Padel Social Club and increased his
                  stake in its May 2026 £5.5m round. Spotify co-founder Martin
                  Lorentzon is the principal backer of Padium. Savills reports
                  professional footballers commissioning venue feasibility studies
                  — athlete capital is actively seeking venue deals.
                </li>
                <li>
                  <strong>Funds:</strong> Active Partners and Clark Group (Padel
                  Social Club), Endeavour Ventures (EIS, The Padel Club), PXN/NPIF
                  II (British Business Bank), Dwellcourt Group (PadelStars),
                  Frasers Group (Slazenger Padel Clubs).
                </li>
                <li>
                  <strong>Local:</strong> South East Angels is a Brighton-based
                  angel network; the University of Sussex Business Angels programme
                  operates through Sussex Innovation. No dedicated UK
                  sports-and-leisure angel syndicate exists — generalist networks
                  are doing these deals.
                </li>
                <li>
                  <strong>EIS note:</strong> padel operators demonstrably secure
                  EIS investment, but leisure trades can face qualification
                  questions;{" "}
                  <G term="EIS advance assurance">advance assurance</G> (in the
                  validation plan) should
                  precede any approach so the 30% relief is bankable in the offer.
                </li>
              </ul>
            </section>

            {/* ============ 9 ============ */}
            <section id="s9" className="measure">
              <h2>
                <span className="no">9</span>Independent, franchise or partnership?
              </h2>
              <p>
                <strong>
                  The recommendation is independent, with the expertise bought in.
                </strong>{" "}
                Since this is the first question anyone asks, the reasoning in
                full:
              </p>
              <p>
                <strong>The case for franchising.</strong> Brand, build expertise,
                booking technology, and some lender comfort. Game4Padel franchises
                (~£100k liquid capital required, franchisee brings the site), Major
                Padel Club from ~£70k, and Vida Del Padel is expanding. Banks
                genuinely do favour established franchise systems.
              </p>
              <p>
                <strong>Why it doesn’t fit here.</strong> The lender uplift
                applies to proven systems with years of franchisee accounts, and UK
                padel franchising is roughly two years old. Discovery in padel runs
                through Playtomic and local occupancy is 90%+ regardless of
                operator, so a franchisor’s brand adds least in precisely this
                market. The royalty comes permanently out of the margin needed for
                debt service. And most decisively: the available franchise formats
                are the pay-and-play model — Option A — which this plan
                specifically argues against. (Game4Padel operating Brighton’s
                council courts would complicate a local franchise anyway.)
              </p>
              <p>
                <strong>
                  What franchising really offers — credibility — can be assembled
                  directly:
                </strong>
              </p>
              <ul>
                <li>
                  a court supplier/installer with an extensive UK track record
                  (bringing feasibility, specification, and typically the
                  asset-finance introduction);
                </li>
                <li>
                  an experienced padel general manager or head coach as an early
                  hire, potentially with equity — the answer to “who is operating
                  this?” from lenders, landlords and planners;
                </li>
                <li>
                  an asset-finance broker whose business is presenting exactly this
                  package to credit committees;
                </li>
                <li>
                  LTA venue registration (safeguarding standards, accredited
                  coaches, sanctioned competition, buying-group discounts on
                  lighting and utilities).
                </li>
              </ul>
              <p>
                <strong>Partnership models</strong> (an operator builds and runs
                courts on a landowner’s site for a revenue share — Game4Padel’s
                other model, Padel United’s landowner programme) are designed for
                landowners seeking passive income. They answer a different question
                and are noted only for completeness.
              </p>
            </section>

            {/* ============ 10 ============ */}
            <section id="s10" className="measure">
              <h2>
                <span className="no">10</span>Property and planning
              </h2>
              <h3 id="s10-location">Location</h3>
              <p>
                <strong>
                  Target: the A23/A27 corridor, outside the South Downs National
                  Park.
                </strong>{" "}
                Priority zones in order:
              </p>
              <ol>
                <li>
                  <strong>Burgess Hill / Hassocks / Hickstead corridor</strong> —
                  the centre of the Mid Sussex catchment, 15 minutes from north
                  Brighton, industrial rents ~£7–12/sq ft, and a planning authority
                  with a strong padel approval record (Consort Way, Albourne,
                  Cuckfield, Goddards Green all approved; one refusal, at a
                  Haywards Heath social club). The gap between Eixo and PADELHUB
                  sits here — though the approved four-court Consort Way venue with
                  its café (Section 3) will contest the town-centre end of it,
                  which sharpens the case for the fuller social format rather than
                  weakening the location.
                </li>
                <li>
                  <strong>Brighton fringe industrial</strong> (Hollingbury,
                  Moulsecoomb, Portslade) — closest to the densest demand; tightest
                  stock and highest rents (~£11/sq ft).
                </li>
                <li>
                  <strong>Shoreham/Lancing</strong> (~£7/sq ft) — the cheapest
                  large units, but directly adjacent to Club Padel; justified only
                  by a clearly superior building.
                </li>
              </ol>
              <p>
                <strong>
                  The South Downs idea, reluctantly, doesn’t survive the planning
                  reality.
                </strong>{" "}
                Pyecombe and the surrounding countryside sit inside the National
                Park, where the SDNPA is the planning authority. National policy
                gives park landscape “great weight”, blocks major development
                except in exceptional circumstances, and asks whether the need
                could be met outside the park — which it obviously could. The park
                is also an International Dark Sky Reserve, which makes external
                lighting a battle in itself. The good news: the setting the concept
                wants — Downs views, trees, a garden — is achievable on the park’s
                edge without any of that.
              </p>
              <h3 id="s10-building">Building requirements</h3>
              <ul>
                <li>
                  A padel court is 20m × 10m; indoor play needs{" "}
                  <strong>7–8m clear height</strong> (LTA minimum 6m, recommended
                  8m). Standard industrial <G term="eaves height">eaves</G> run
                  6–8m, so genuinely suitable
                  units are scarce — the market’s main constraint, and a barrier
                  in this plan’s favour once a building is secured.
                </li>
                <li>
                  Four doubles, two singles and the hospitality space require
                  roughly <strong>1,400–1,600 m² (15–17,000 sq ft)</strong>:
                  £110–170k/year at corridor rents.
                </li>
                <li>
                  Change of use from industrial (B2/B8) to indoor sport (
                  <G term="use class">Class E(d)</G>) requires planning
                  permission. Indoor schemes avoid the
                  noise objections currently defeating outdoor padel applications
                  nationally (Harrogate refused despite 4m acoustic barriers; Bath
                  refusing applications broadly; Withdean operating under a noise
                  abatement order). An enclosed building is a materially easier
                  application than floodlit outdoor courts near housing.
                  <G term="pre-app">Pre-application advice</G> first; the
                  objection to prepare for is
                  loss of employment land, answered by the jobs the format creates
                  on site.
                </li>
                <li>
                  Licensing: premises licence from the district council (£100–635
                  application fee by rateable value, 28-day consultation,
                  realistically 6–10 weeks); one founder obtains a personal licence
                  (~£200 including the course); standard conditions (Challenge 25,
                  CCTV, hours). Food business registration is free and due 28 days
                  before opening. Straightforward, but it must be sequenced into
                  the build programme.
                </li>
                <li>
                  Indicative timeline from keys to opening:{" "}
                  <strong>6–9 months</strong> (planning 2–3 months; court lead
                  times 2–3 months; fit-out in parallel).
                </li>
              </ul>
              <h3 id="s10-market">
                Buildings actually on the market (August 2026)
              </h3>
              <p>
                A sweep of live listings confirms the corridor logic — the coastal
                Brighton–Shoreham strip is tight (one agent reports 850,000 sq ft
                of logged occupier demand against “very little available”), while{" "}
                <strong>
                  Burgess Hill has both the supply and the tall buildings
                </strong>
                :
              </p>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th>Building</th>
                      <th>Size</th>
                      <th>Rent</th>
                      <th>Height</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Unit 24, Panattoni Park, Burgess Hill</strong>
                      </td>
                      <td>15,818 sq ft</td>
                      <td>On application</td>
                      <td>
                        <strong>8m eaves</strong>
                      </td>
                      <td>
                        New-build Grade A on the A2300; closest match to the spec
                        found; sister units run up to 12.5m clear, and the
                        developer offers design-and-build from ~7,700 sq ft
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>59 Victoria Road, Burgess Hill</strong>
                      </td>
                      <td>29,829 sq ft</td>
                      <td>On application</td>
                      <td>
                        <strong>10m min</strong>
                      </td>
                      <td>
                        Oversized but the height is perfect; subdivision or
                        growth-room conversation
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Unit 2, York Road, Burgess Hill</strong>
                      </td>
                      <td>20,000 sq ft</td>
                      <td>£195k/yr (£9.75/sq ft)</td>
                      <td>Unverified</td>
                      <td>
                        Detached unit at sensible money; height to check first
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Units 3 &amp; 5, Lancing Business Park</strong>
                      </td>
                      <td>10,847–30,524 sq ft</td>
                      <td>£10/sq ft</td>
                      <td>
                        <strong>6.7m high-bay</strong>
                      </td>
                      <td>
                        Above legal minimum, below ideal; take together or
                        separately
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Units 3 &amp; 4, School Close, Burgess Hill</strong>
                      </td>
                      <td>15,786 sq ft</td>
                      <td>£110k/yr (£6.75/sq ft)</td>
                      <td>Doubtful (two floors)</td>
                      <td>
                        Cheapest found — and{" "}
                        <strong>already holds Class E consent</strong>, which
                        covers indoor sport; worth one viewing purely for the
                        planning shortcut
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Unit 3, Ellen Street, Portslade</strong>
                      </td>
                      <td>13,011 sq ft</td>
                      <td>On application</td>
                      <td>6.5m</td>
                      <td>
                        The only realistic Brighton-fringe candidate found; near
                        Portslade station
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Two further notes from the sweep: essentially nothing over 5,000 sq
                ft is currently marketed in the Hassocks–Hickstead–Henfield belt,
                so that part of the corridor means new-build or a host-club deal;
                and rents confirm the model’s assumptions (£6.75–£13/sq ft across
                candidates against £8–10 modelled). Listings move — this table is a
                snapshot for the agent conversations, not a shortlist decision.
              </p>
            </section>

            {/* ============ 11 ============ */}
            <section id="s11" className="measure">
              <h2>
                <span className="no">11</span>Booking platform and route to market
              </h2>
              <ul>
                <li>
                  <strong>Launch on Playtomic.</strong> With ~80% of UK
                  booking-platform share it is the discovery channel, and its
                  management software covers scheduling, payments, matchmaking,
                  tournaments and memberships. Costs are quote-only (roughly
                  €100+/month SaaS plus an unpublished booking commission plus a
                  player-side service fee); budget ~5% of court revenue and
                  negotiate.
                </li>
                <li>
                  <strong>Hold the member relationship directly.</strong>{" "}
                  Memberships, leagues, coaching and events should run on the
                  venue’s own systems, with Playtomic as top-of-funnel for casual
                  hire. The platform risk is not the fee but customer ownership; a
                  membership base is the structural hedge, and MATCHi and other
                  platforms provide credible switching leverage in negotiation.
                </li>
                <li>
                  <strong>Pre-launch</strong>: a founding-member tier (Club Padel’s
                  “Original 100” and Padel Social Club’s sold-out tiers
                  demonstrate willingness to pre-pay), a crowdfunding round
                  doubling as member acquisition, founding sponsors and court
                  naming rights sold before opening (local firms, sports brands,
                  the corporate-events pipeline’s future customers), launch-week
                  Americanos, and relationships with the rugby, tennis and golf
                  clubs that already hold the target demographic.
                </li>
              </ul>
            </section>

            {/* ============ 12 ============ */}
            <section id="s12" className="measure">
              <h2>
                <span className="no">12</span>Risks
              </h2>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th>Risk</th>
                      <th>Evidence</th>
                      <th>Mitigation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Local overbuild</strong> (“Sweden risk”)
                      </td>
                      <td>
                        Sweden: courts ×30 in 3 years, ~90 operator bankruptcies in
                        2023, ~€500m capital destroyed — while participation held
                        up. Oversupply, cheap capital and energy costs, not falling
                        demand. Chile shows a similar correction.
                      </td>
                      <td>
                        Monitor local players per court (~330 today; healthy above
                        ~200, contested below ~120, Swedish-signal at ~80 — see
                        §4). Differentiate on the layer competitors cannot
                        retrofit. Cap debt so 45% utilisation is painful rather
                        than fatal. Stop criteria below.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Participation decline</strong>
                      </td>
                      <td>
                        Counter-evidence: 92% return rate, stable ~4
                        sessions/month, two-thirds also play tennis; squash’s
                        decline took decades.
                      </td>
                      <td>
                        The format is the hedge: a licensed social venue with
                        courts weathers a cooling sport far better than a
                        pay-and-play shed, and the building retains alternative
                        uses (pickleball, events).
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Debt service at low utilisation</strong>
                      </td>
                      <td>
                        The conservative case is EBITDA-positive but cash-negative
                        after debt service (§7).
                      </td>
                      <td>
                        Total debt capped at ~£450k; fixed rates where available;
                        £100k working-capital buffer; membership pre-sales before
                        opening; finance terms matched to asset life.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Club Padel Shoreham succeeds first</strong>
                      </td>
                      <td>Under construction; premium format; £50–60/hr.</td>
                      <td>
                        Different corridor, lower price point, membership-led (§6).
                        Its first six months of trading are observable before this
                        project commits capital — validation or warning, either way
                        at no cost.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>No suitable building</strong>
                      </td>
                      <td>
                        7m+ eaves stock near Brighton is acknowledged to be scarce.
                      </td>
                      <td>
                        Search the full corridor including Burgess Hill; consider a
                        new-build canopy hybrid on edge-of-park land; engage agents
                        (SHW, Graves Son &amp; Pilcher) immediately; offer
                        landlords a covenant-strengthening long lease.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Planning refusal</strong>
                      </td>
                      <td>National pattern of outdoor refusals on noise.</td>
                      <td>
                        Indoor-only scheme, pre-application advice,
                        employment-generating case, Mid Sussex’s approval record.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Personal guarantee exposure</strong>
                      </td>
                      <td>
                        Unsecured top-ups and some asset finance will require PGs;
                        several friends co-signing guarantees on a failed venture
                        is the worst realistic outcome.
                      </td>
                      <td>
                        Prefer the no-PG layers (Start Up Loans, equity, landlord
                        contribution). Where PGs are unavoidable, cap and apportion
                        them in writing before signature. This requires an explicit
                        founders’ agreement, not goodwill.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Founder inexperience in hospitality/leisure
                        </strong>
                      </td>
                      <td>True.</td>
                      <td>
                        Experienced GM hired pre-opening; supplier-led build; LTA
                        registration; a hospitality-experienced advisory
                        shareholder if the equity round allows.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Playtomic dependency</strong>
                      </td>
                      <td>~80% platform share; unpublished fees.</td>
                      <td>
                        Membership base as owned demand; credible alternative
                        platforms as negotiating leverage.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                <strong>Stop criteria, agreed in advance:</strong> no suitable
                building within 9 months; asset-finance quotes above ~15%
                APR-equivalent; the equity round failing to close at a defensible
                valuation; Club Padel Shoreham visibly struggling on demand (rather
                than execution) by spring 2027; or the catchment court pipeline
                doubling again before a lease is signed. Any one of these triggers
                a stop, with total sunk cost held to the validation budget.
              </p>
            </section>

            {/* ============ 13 ============ */}
            <section id="s13" className="measure">
              <h2>
                <span className="no">13</span>Pricing
              </h2>
              <TW size="mid">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Local reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Doubles, peak (per court/hr)</td>
                      <td>£40–44</td>
                      <td>PADELHUB £30–60; Club Padel £60; Withdean ~£48</td>
                    </tr>
                    <tr>
                      <td>Doubles, off-peak</td>
                      <td>£26–30</td>
                      <td>Market £24–32</td>
                    </tr>
                    <tr>
                      <td>Singles (per court/hr)</td>
                      <td>£20–24</td>
                      <td>No meaningful local comparator</td>
                    </tr>
                    <tr>
                      <td>Membership</td>
                      <td>£30–35/month</td>
                      <td>PADELHUB £35–45; London social venues £60+ (sold out)</td>
                    </tr>
                    <tr>
                      <td>Americano / league entry</td>
                      <td>£10–15</td>
                      <td>PADELHUB £5–15</td>
                    </tr>
                    <tr>
                      <td>Group coaching / clinics</td>
                      <td>£15–25/person</td>
                      <td>Market £15–40</td>
                    </tr>
                    <tr>
                      <td>Private coaching</td>
                      <td>£45–60/hr + court</td>
                      <td>Market £40–70</td>
                    </tr>
                    <tr>
                      <td>Corporate events</td>
                      <td>£35–55/head</td>
                      <td>UK market £30–60</td>
                    </tr>
                    <tr>
                      <td>Racket hire</td>
                      <td>£4–6</td>
                      <td>Standard</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Blended court yield in the model: doubles ~£32/hour, singles
                ~£22/hour. The position is deliberately mid-market: premium
                experience at accessible prices, with membership carrying the
                loyalty economics.
              </p>
            </section>

            {/* ============ 14 ============ */}
            <section id="s14" className="measure">
              <h2>
                <span className="no">14</span>Next steps — 90-day validation plan
              </h2>
              <NinetyDayTimelineFigure />
              <p>
                <strong>Weeks 1–4 — validate</strong>
              </p>
              <ol>
                <li>
                  Visit every venue in the Section 3 table as customers. Attempt
                  peak bookings across two weeks on Playtomic/MATCHi and log actual
                  availability — an independent occupancy dataset.
                </li>
                <li>
                  Brief SHW and Graves Son &amp; Pilcher: 15–17,000 sq ft, 7m+
                  clear height, A23/A27 corridor. Obtain the genuine longlist and
                  rents.
                </li>
                <li>
                  Present the Section 7 numbers to three asset-finance brokers
                  (Johnson Reed first) and ask for indicative terms and deposit
                  requirements — the fastest available feasibility test for Route
                  A. In the same week, contact the South East Investment Fund’s
                  managers to establish whether Route B exists for a first-time
                  team.
                </li>
                <li>
                  Approach the Eixo and Smash Padel founders — recent local
                  operators with direct experience of what they would do
                  differently.
                </li>
              </ol>
              <p>
                <strong>Weeks 5–8 — structure</strong>
              </p>
              <ol start={5}>
                <li>
                  Incorporate the company; agree founder equity, roles, and the
                  personal-guarantee policy in writing.
                </li>
                <li>Apply for EIS advance assurance.</li>
                <li>
                  Rebuild the model with actual rents and finance quotes; shortlist
                  two buildings; obtain pre-application planning advice on the
                  leading candidate.
                </li>
                <li>
                  Produce the investor one-pager from this document and soft-circle
                  the equity round.
                </li>
              </ol>
              <p>
                <strong>Weeks 9–13 — commit or stop</strong>
              </p>
              <ol start={9}>
                <li>
                  <G term="heads of terms">Heads of terms</G> on a building
                  (subject to planning), with the landlord contribution and
                  rent-free period negotiated in.
                </li>
                <li>
                  Start Up Loan applications (×4); asset finance to credit
                  approval; equity round open.
                </li>
                <li>
                  Formal decision against the Section 12 stop criteria. If
                  proceeding: planning application submitted, licensing sequenced,
                  opening targeted 6–9 months out.
                </li>
              </ol>
              <p>
                Total cash at risk through week 13: approximately{" "}
                <strong>£5–10k</strong> (professional advice, pre-application fees,
                incorporation).
              </p>
            </section>

            {/* ============ 15 ============ */}
            <section id="s15" className="measure">
              <h2>
                <span className="no">15</span>Appendix — sources
              </h2>
              <p>
                Key sources behind the numbers (full URLs preserved in the research
                notes):
              </p>
              <ul>
                <li>
                  <strong>Market:</strong> LTA participation and court statistics
                  (May 2026: 1M players, 1,825 courts); Playtomic Global Padel
                  Report 2026 (UK “Hotspot” classification, ~85% occupancy);
                  Savills UK padel research (April 2025); Leisure DB UK padel
                  report (December 2025).
                </li>
                <li>
                  <strong>Local:</strong> Brighton &amp; Hove City Council releases
                  (Hove Beach Park 97% occupancy; Withdean covered courts, April
                  2026); Brighton &amp; Hove News (Club Padel Shoreham, June 2026;
                  Hove Fitness Centre objections); Mid Sussex DC planning records
                  (DM/25/3096 Albourne; DM/26/0781 Burgess Hill);
                  Playtomic/Playskan venue listings and pricing.
                </li>
                <li>
                  <strong>Costs and planning:</strong> LTA Padel Court Construction
                  Guidance (2025); published UK court supplier and installer
                  pricing; steel-frame building cost guides; use-class and padel
                  planning analyses (Nexa Law, Freeths); SDNPA Local Plan and Dark
                  Skies Technical Advice Note; Licensing Act 2003 fee schedules.
                </li>
                <li>
                  <strong>Financing:</strong> British Business Bank Start Up Loans
                  terms (7.5% from April 2026); lender criteria (Funding Circle,
                  iwoca, Starling, high-street banks); padel asset-finance brokers
                  (Johnson Reed, GSM, Gable, Systems Finance); Padel Galis leasing
                  terms; LTA Facility/Quick Access Loan schemes; British Business
                  Bank South East Investment Fund; Crowdcube raises (Social Sports
                  Society, The Padel Hub, Court de Padel, Smash Padel); NPIF
                  II/The Padel Club case study; Padel Social Club £5.5m round
                  (Active Partners, Clark Group, Stormzy).
                </li>
                <li>
                  <strong>Cautionary:</strong> Sweden padel-market collapse
                  coverage (European Business Magazine; Bloomberg, 2023; Creditsafe
                  bankruptcy data); Playtomic Global Padel Report 2026 overcapacity
                  analysis; UK squash participation decline data.
                </li>
              </ul>
            </section>
          </main>

          <footer className="doc">
            Draft for discussion among friends · v0.1 · August 2026 · Brighton /
            Hove / Mid Sussex · Unfamiliar terms?{" "}
            <Link href="/glossary">Glossary →</Link>
          </footer>
        </div>

        <Toc sections={SECTIONS} />
      </div>
    </div>
  );
}
