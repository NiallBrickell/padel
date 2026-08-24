import type { Metadata } from "next";
import Link from "next/link";
import { TW } from "@/components/doc";
import { MobileToc, Toc, type TocSection } from "@/components/toc";
import {
  Ask,
  BetSec,
  Intel,
  Read,
  StaticBetCard,
  Want,
  WantLead,
  Who,
} from "@/components/bet-parts";
import { ListingsShowcase } from "@/components/listings";
import {
  Bet,
  LiveStageStrip,
  NextStepsLive,
  PeopleRail,
  SubBet,
} from "@/components/next-steps-live";
import { G } from "@/components/glossary";

export const metadata: Metadata = {
  title: "Next steps — Padel Business Case",
};

const SECTIONS: TocSection[] = [
  { id: "decisions", no: "§", title: "Two gating decisions" },
  {
    id: "stage-1",
    no: "1",
    title: "Find out if it’s real",
    subs: [
      { id: "bet-1", title: "Mill Wood Finance" },
      { id: "bet-2", title: "The three industrial agents" },
      { id: "bet-3", title: "Tennis Sussex" },
      { id: "bet-4", title: "Court suppliers" },
    ],
  },
  {
    id: "stage-2",
    no: "2",
    title: "Put the pieces in place",
    subs: [
      { id: "bet-5", title: "The two group decisions" },
      { id: "bet-6", title: "Start Up Loans" },
      { id: "bet-7", title: "EIS advance assurance" },
      { id: "bet-8", title: "South East Angels" },
      { id: "bet-9", title: "Sussex Innovation" },
    ],
  },
  {
    id: "stage-3",
    no: "3",
    title: "Commit or stop",
    subs: [
      { id: "bet-10", title: "Council pre-app advice" },
      { id: "bet-11", title: "Crowdcube" },
      { id: "bet-12", title: "LTA facility loans" },
    ],
  },
  { id: "monitoring", no: "§", title: "Being monitored" },
  { id: "scoreboard", no: "§", title: "The scoreboard" },
];

export default function NextStepsPage() {
  return (
    <div className="shell">
      <MobileToc sections={SECTIONS} />
      <NextStepsLive>
        <div className="layout">
          <div className="min-w-0">
            <header className="doc">
              <p className="kicker">Working sheet</p>
              <h1>Next steps — contacts and first bets</h1>
              <p className="meta">
                <b>Working sheet, August 2026</b> &nbsp;·&nbsp; Not for sharing
                outside the group
              </p>
            </header>

            <main className="doc-body">
              <LiveStageStrip />
              <PeopleRail />

              <section id="decisions" className="measure">
                <h2>Two decisions that gate everything else</h2>
                <p>
                  Every contact verified against the organisation’s own pages on
                  24 Aug 2026 unless marked ⚠. Each entry is a bet with the same
                  shape: who, <strong>the ask</strong> (what we actually
                  request), <strong>what we want</strong> (the outcomes —
                  including when the real prize is the relationship), and an
                  honest read on the odds.
                </p>
                <ol>
                  <li>
                    <strong>LTA money vs equity money — pick a lane.</strong>{" "}
                    The LTA loan scheme (Route E) only funds not-for-profit
                    structures; Crowdcube, angels and <G term="EIS">EIS</G> only
                    work for a company limited by shares. We cannot keep both
                    doors open past incorporation. Decide before applying for
                    anything.
                  </li>
                  <li>
                    <strong>
                      Set up as an operating company (
                      <G term="opco">opco</G>) that leases its building — before
                      any EIS application.
                    </strong>{" "}
                    HMRC’s{" "}
                    <G term="EIS advance assurance">advance assurance</G> looks
                    hard at ventures whose value sits in property: a company
                    that owns its freehold is a likely refusal, an operating
                    company leasing its premises is the standard pass. South
                    East Angels requires an EIS-qualifying round, so this
                    ordering is critical path for the whole equity side.
                  </li>
                </ol>
              </section>

              {/* ---------------- Stage 1 ---------------- */}
              <section id="stage-1" className="measure">
                <h2>Stage 1 — Find out if it’s real</h2>
                <p className="stage-prize">
                  Seven cheap probes. Cost: emails and a coffee. Prize: within
                  two weeks we know whether the money exists, whether a building
                  exists, and what it really costs — the difference between a
                  fun idea and a live project.
                </p>

                <Bet
                  betKey="b1-millwood"
                  id="bet-1"
                  title={
                    <>
                      1. Mill Wood Finance — the finance reality check{" "}
                      <span className="star">★ best first move</span>
                    </>
                  }
                >
                  <Who>
                    <strong>Henry Bolland</strong> (named padel contact) · 01273
                    523690 · millwoodfinance.com/padel-court-finance ·
                    Rustington, West Sussex — a padel-specialist{" "}
                    <G term="asset finance">asset-finance</G> broker, locally
                    based.
                  </Who>
                  <Ask>
                    <p>
                      Send the financial overview and ask two questions:{" "}
                      <em>
                        would you fund a new-start on this plan — and at what
                        terms and deposit?
                      </em>{" "}
                      They publish exactly what they want in a first pack:
                      business plan, cashflow forecast, evidence of own capital,
                      management experience, security position.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      A yes/no/maybe on Route A’s biggest layer from someone
                      whose job is placing exactly these deals.
                    </WantLead>
                    <ul>
                      <li>
                        Real numbers — rate, term, deposit — to replace the
                        model’s assumptions.
                      </li>
                      <li>
                        A broker relationship: when we go to credit committee
                        for real, we want the person who’s done ten padel deals
                        presenting ours.
                      </li>
                    </ul>
                  </Want>
                  <Read>
                    High odds of a substantive answer — local, specialist,
                    sales-motivated. This one email tests the whole financing
                    thesis.
                  </Read>
                </Bet>

                <Bet
                  betKey="b1-flude"
                  id="bet-2"
                  className="breakout"
                  title={<>2. The three industrial agents — the building search</>}
                >
                  <Who>
                    <strong>Andrew Halfacree</strong>, Director of Industrial
                    Agency at Flude (01273 740385 · a.halfacree@flude.com);{" "}
                    <strong>James Bryant</strong>, Head of Commercial Agency at
                    Graves Son &amp; Pilcher (jb@gsp.uk.com · 01273 321123);{" "}
                    <strong>SHW Brighton</strong> industrial team
                    (brighton@shw.co.uk · 01273 876200).
                  </Who>
                  <Ask>
                    <p>
                      The same brief to all three:{" "}
                      <em>
                        13,000–20,000 sq ft, 6m+ clear height over a courts zone
                        (apex counts, not just{" "}
                        <G term="eaves height">eaves</G>), A23/A27 corridor,{" "}
                        leasehold, long lease available —
                        what’s on, and what’s coming?
                      </em>{" "}
                      Ask specifically about the live candidates below. Plus:
                      Panattoni’s design-and-build option and Buckingham Park
                      Lewes pre-lets (Oakley: Steven Harvey,
                      steven@oakleyproperty.com, 01273 645772).
                    </p>
                    <ul className="subbet-list">
                      <SubBet
                        betKey="b1-gsp"
                        label="Same building brief to Graves Son & Pilcher"
                      />
                      <SubBet
                        betKey="b1-shw"
                        label="Same building brief to SHW Brighton"
                      />
                    </ul>
                  </Ask>
                  <Want>
                    <WantLead>
                      The real availability picture — including off-market and
                      coming-soon stock that never hits Rightmove.
                    </WantLead>
                    <ul>
                      <li>
                        Real rents and landlord appetite (
                        rent-free periods,
                        capital contributions) for our covenant.
                      </li>
                      <li>
                        To be <em>known as a serious requirement</em> — agents
                        ring credible occupiers first when the right shed
                        appears, and that phone call is the entire game in a
                        market this tight.
                      </li>
                    </ul>
                  </Want>
                  <ListingsShowcase />
                  <Intel label="Competitive intel worth raising in these conversations">
                    <p>
                      Burgess Hill’s Consort Way scheme is approved (DM/26/0781,
                      permission May 2026) — four indoor courts{" "}
                      <em>plus a café and social space</em> at Victoria Business
                      Park, from a local family (applicant Sally Vans Agnew of
                      Capital Hair &amp; Beauty), with conditions being
                      discharged as of August, so{" "}
                      fit-out is imminent. Eixo has three
                      more outdoor courts approved (Jan 2026) and Plumpton
                      Racecourse a 5-court centre (Aug 2026); Mid Sussex’s one
                      refusal was St Francis Sports &amp; Social Club in
                      Haywards Heath. Mention the Consort Way opening when
                      discussing Burgess Hill units — it affects which buildings
                      and positioning make sense there.
                    </p>
                  </Intel>
                  <Read>
                    High. Flude’s own director has talked up padel demand in the
                    press — agents know the sector wants sheds. Three agents =
                    the real picture within a week.
                  </Read>
                </Bet>

                <Bet
                  betKey="b1-tennis-sussex"
                  id="bet-3"
                  title={<>3. Tennis Sussex — build the county relationship</>}
                >
                  <Who>
                    <strong>Nicola Barnes</strong>, venue liaison ·
                    nicola.barnes@tennissussex.com · office 07398 145446 — and
                    their office is physically inside The Padel Hub, Haywards
                    Heath (Unit 4 Link 23, RH17 5JS), the warehouse venue we
                    already play at.
                  </Who>
                  <Ask>
                    <p>
                      A 30-minute coffee. We’re four locals building a serious
                      case for an indoor social padel venue in the corridor —
                      can she talk us through the Sussex padel scene and how the
                      LTA venue route works?
                    </p>
                  </Ask>
                  <Want note="— and this one is mostly a relationship play, deliberately">
                    <WantLead>
                      Most valuable of all, <em>being known</em>: county bodies
                      write letters of support for planning applications,
                      connect new venues to club networks and league
                      structures, and vouch for credible operators. A warm
                      relationship established now, before we need anything, is
                      worth more than any single fact she tells us.
                    </WantLead>
                    <ul>
                      <li>
                        The unpublished picture: county bodies hear who’s
                        circling which sites, which schemes are stuck in
                        planning, and which clubs want padel long before any of
                        it is public.
                      </li>
                      <li>
                        The practical run-through of LTA venue registration
                        (insurance, sanctioned competition, coach pipeline) so
                        we know if and when it’s worth it.
                      </li>
                    </ul>
                  </Want>
                  <Read>
                    High odds, near-zero cost — a friendly coffee at a venue we
                    were going to anyway, with compounding returns later.
                  </Read>
                </Bet>

                <Bet
                  betKey="b1-suppliers"
                  id="bet-4"
                  title={<>4. Court suppliers — the real capex number</>}
                >
                  <Who>
                    <strong>Padel Tech</strong> (built Padium; 150+ UK installs)
                    — info@padeltech.co.uk · 0131 581 8683;{" "}
                    <strong>Hexa Padel</strong> (East Grinstead number —
                    closest) — sales@hexapadel.co.uk · 01342 894508.
                  </Who>
                  <Ask>
                    <p>
                      Indicative cost, installed, for 4 doubles + 2 singles
                      courts indoor to LTA spec — and will you do a site
                      feasibility visit once we have a shortlist? (Padel Tech’s
                      form asks for planning status, funding status, canopy
                      y/n, court count — have answers ready.)
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      A real quote to replace the capex{" "}
                      table’s estimates — this number moves the whole model.
                    </WantLead>
                    <ul>
                      <li>
                        The feasibility-visit commitment: an installer’s
                        walk-through of a candidate building is a free
                        structural survey by someone who’s seen every mistake.
                      </li>
                      <li>
                        A build partner shortlist — the supplier also typically
                        brings the asset-finance introduction, connecting this
                        bet back to bet 1.
                      </li>
                    </ul>
                  </Want>
                  <Read>
                    High response odds (they sell courts); the information gets
                    sharp once we have a building to point at.
                  </Read>
                </Bet>
              </section>

              {/* ---------------- Stage 2 ---------------- */}
              <section id="stage-2" className="measure">
                <h2>Stage 2 — Put the pieces in place</h2>
                <p className="stage-prize">
                  Unlocked by Stage 1’s answers. Cost: some paperwork and £500.
                  Prize: a company that can actually receive money, with the
                  founder terms agreed while everyone is still friends.
                </p>

                <StaticBetCard id="bet-5" title={<>5. The two group decisions</>}>
                  <BetSec label="The ask (of ourselves)">
                    <p>
                      One evening, two decisions, written down. First:
                      not-for-profit (LTA loans at 2.5–5%,
                      community shares, no exit — Route E) vs company limited by
                      shares (equity, <G term="EIS">EIS</G>, upside). Second:
                      founder split, roles, and the{" "}
                      personal-guarantee policy
                      — who signs what, capped how.
                    </p>
                    <ul className="subbet-list">
                      <SubBet
                        betKey="b2-route-e-decision"
                        label="Decision 1 — LTA money vs equity money: pick a lane"
                      />
                      <SubBet
                        betKey="b2-founders-agreement"
                        label="Decision 2 — founder split, roles and the personal-guarantee policy"
                      />
                    </ul>
                  </BetSec>
                  <Want>
                    <WantLead>
                      The structural fork settled so every later application
                      points the same way — and the friendship-protecting
                      clarity of having agreed the hard terms before any money
                      moves.
                    </WantLead>
                    <p>This is the cheapest insurance in the entire plan.</p>
                  </Want>
                  <Read>
                    Certain to pay off; the only risk is not doing it.
                  </Read>
                </StaticBetCard>

                <Bet
                  betKey="b2-startup-loans"
                  id="bet-6"
                  title={<>6. Start Up Loans — the founder capital substitute</>}
                >
                  <Who>
                    apply.startuploans.co.uk; Sussex delivery partner is{" "}
                    <strong>Let’s Do Business Group</strong> (01424 205500 ·
                    info@ldbgroup.co.uk).
                  </Who>
                  <Ask>
                    <p>
                      One application per founder — £500–£25k each at 7.5%
                      fixed, no security, no{" "}
                      personal guarantees;
                      applying founders must together hold ≥50% of the company.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      Up to £100k of the stack that doesn’t depend on trading
                      history — the layer that substitutes for the founder cash
                      we don’t have.
                    </WantLead>
                    <p>Draw only when there’s a project to spend on.</p>
                  </Want>
                  <Read>
                    High approval odds for employed applicants with clean
                    credit; these are affordability-assessed personal loans and
                    the scheme exists for exactly this.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-eis"
                  id="bet-7"
                  title={
                    <>
                      7. EIS advance assurance — the domino that unlocks the
                      equity side
                    </>
                  }
                >
                  <Who>
                    SeedLegals runs it as HMRC agent for{" "}
                    <strong>£499 + VAT</strong>; HMRC typically responds in 3–4
                    weeks.
                  </Who>
                  <Ask>
                    <p>
                      <G term="EIS advance assurance">Advance assurance</G> that
                      investment in the company qualifies for{" "}
                      <G term="EIS">EIS</G> relief (needs: incorporated{" "}
                      leasehold{" "}
                      <G term="opco">opco</G>, business plan, forecasts,
                      evidence of prospective investors — a{" "}
                      crowdfunding platform
                      letter counts).
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The letter itself — without it no{" "}
                      angel network will look at us
                      and every investor conversation is theoretical.
                    </WantLead>
                    <p>
                      With it, every £1,000 cheque costs an investor £700.
                    </p>
                  </Want>
                  <Read>
                    Good odds if we’re set up as the leasing opco (sports
                    venues aren’t an excluded trade); this is why gating
                    decision 2 comes first.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-sea"
                  id="bet-8"
                  title={<>8. South East Angels — the first equity conversation</>}
                >
                  <Who>
                    Brighton-based angel network,
                    50+ angels, £3m+/yr deployed; pitch via the form at
                    southeastangels.co.uk/how-to-raise-with-us.
                  </Who>
                  <Ask>
                    <p>
                      A pitch slot for an EIS-qualifying round of £250–350k,
                      anchored by the demand data in the business case.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The first £50–150k of the equity slice soft-circled.
                    </WantLead>
                    <ul>
                      <li>
                        Even a “not yet” with introductions — local angel
                        networks know the county’s family offices and
                        operators.
                      </li>
                      <li>
                        A lead investor, which is also the unlock for a credible
                        Crowdcube round later.
                      </li>
                    </ul>
                  </Want>
                  <Read>
                    Medium — generalist angels, but local consumer-leisure with
                    our occupancy data is a good story.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-sussex-innovation"
                  id="bet-9"
                  title={<>9. Sussex Innovation — the second network</>}
                >
                  <Who>
                    <strong>Nigel Lambe</strong>, CEO ·
                    nigel.lambe@sussexinnovation.co.uk · 01273 704400;
                    membership from £50 + VAT/month.
                  </Who>
                  <Ask>
                    <p>
                      Community membership, the included strategy session, and
                      an intro to the University of Sussex Business Angels
                      programme.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      A second pool of local investors plus ongoing advisory
                      support for coffee money.
                    </WantLead>
                    <p>
                      And another set of people who know us before we’re asking
                      for anything.
                    </p>
                  </Want>
                  <Read>Medium, slower burn, tiny cost.</Read>
                </Bet>
              </section>

              {/* ---------------- Stage 3 ---------------- */}
              <section id="stage-3" className="measure">
                <h2>Stage 3 — Commit or stop</h2>
                <p className="stage-prize">
                  Unlocked by a building shortlist and Stage 2’s structure.
                  Cost: real money starts here (£600–£1,600 pre-app, then
                  commitments). Prize: keys — or a clean, cheap stop.
                </p>

                <Bet
                  betKey="b3-preapp"
                  id="bet-10"
                  title={
                    <>10. Council pre-application advice — the official signal</>
                  }
                >
                  <Who>
                    <strong>Mid Sussex DC</strong>{" "}
                    (planninginfo@midsussex.gov.uk · 01444 477566) — a padel
                    building is “Major” (≥1,000 sqm): £582 written / £1,164
                    meeting; change-of-use-only may fit the cheaper tier — ask.{" "}
                    <strong>Brighton &amp; Hove</strong>:
                    planning.applications@brighton-hove.gov.uk — Major: £952.75
                    written / £1,586.20 virtual.
                  </Who>
                  <Ask>
                    <p>
                      <G term="pre-app">Pre-app</G> advice on the shortlisted
                      building — change of use to indoor sport (
                      <G term="use class">Class E(d)</G>), with the
                      employment-and-community case attached.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The council’s written steer before committing to a lease —
                      the single strongest de-risking document a landlord,
                      lender or investor can be shown.
                    </WantLead>
                  </Want>
                  <Read>
                    Near-certain to deliver its purpose, which is why it waits
                    for a real building.
                  </Read>
                </Bet>

                <Bet
                  betKey="b3-crowdcube"
                  id="bet-11"
                  title={<>11. Crowdcube — the closer</>}
                >
                  <Who>
                    crowdcube.com/explore/raising; gates: UK ltd topco, property{" "}
                    <em>development</em> excluded (a{" "}
                    leasehold <G term="opco">opco</G> is
                    the standard fit); fees{" "}
                    <span style={{ color: "var(--warn)" }}>⚠</span> last
                    verified ~7% success + ~1% completion; pitches go public
                    only after ~30–50% is pre-committed from your own network.
                  </Who>
                  <Ask>
                    <p>
                      A raise to close the equity slice, launched once an anchor
                      exists.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The final £150–250k — and two hundred local investors who
                      are also two hundred founding members with a reason to
                      fill Tuesday nights.
                    </WantLead>
                    <p>The raise doubles as the membership launch.</p>
                  </Want>
                  <Read>
                    Genuinely promising for this concept (four padel precedents
                    at our size) — but it’s a closer, not an opener. Needs the
                    Stage 2 dominoes down.
                  </Read>
                </Bet>

                <Bet
                  betKey="b3-lta-loan"
                  id="bet-12"
                  title={
                    <>12. LTA facility loans — only on the not-for-profit fork</>
                  }
                >
                  <Who>
                    Eligibility check → expression of interest at lta.org.uk;
                    ~8 weeks to decision; wants 2 years of accounts, 3 quotes, a
                    business plan. Contact via the LTA Support Centre web form
                    (no phone line; the facilities@ email could not be
                    verified).{" "}
                    <span style={{ color: "var(--warn)" }}>
                      ⚠ Their pages say loans up to 5 years; earlier research
                      said 5–15 — verify on the call.
                    </span>
                  </Who>
                  <Ask>
                    <p>
                      A facility loan covering up to 50% of covered-court costs
                      at 5% fixed (2.5% in deprived areas).
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The cheapest capital in the sector — if and only if the
                      group chose the not-for-profit lane at decision 1.
                    </WantLead>
                  </Want>
                  <Read>
                    Strong odds <em>on that fork</em> — the scheme has funded
                    100+ padel courts; irrelevant on the equity fork.
                  </Read>
                </Bet>
              </section>

              {/* ---------------- Being monitored ---------------- */}
              <section id="monitoring" className="measure">
                <h2>Being monitored — nothing for anyone to do</h2>
                <p>
                  Not tasks — just things being watched, with the trigger that
                  turns each into one.
                </p>
                <div className="watchlist">
                  <div className="watch-item">
                    <span className="watch-dot" aria-hidden="true" />
                    <div className="watch-body">
                      <p className="watch-name font-ui">
                        British Business Bank — South East Investment Fund
                      </p>
                      <p>
                        Not launched as of late August 2026 despite the “summer
                        2026” target: no fund managers appointed for any product
                        line and no way for a borrower to apply or register
                        interest. The facts that matter when it opens: £350m
                        across the South East + East of England funds, loans
                        £25k–£2m, <strong>equity up to £5m</strong>, and the
                        same bank’s northern fund already backed a padel
                        operator.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">Trigger</span> fund managers
                        announced → the Route B1 conversation opens with a named
                        counterparty and becomes a Stage 1 task.
                      </p>
                    </div>
                  </div>
                  <div className="watch-item">
                    <span className="watch-dot" aria-hidden="true" />
                    <div className="watch-body">
                      <p className="watch-name font-ui">Club Padel, Shoreham</p>
                      <p>
                        Opens autumn 2026 — its first months of occupancy and
                        membership data are free validation (or warning) for the
                        whole thesis.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">Trigger</span> visible
                        trading data → feeds the commit-or-stop decision.
                      </p>
                    </div>
                  </div>
                  <div className="watch-item">
                    <span className="watch-dot" aria-hidden="true" />
                    <div className="watch-body">
                      <p className="watch-name font-ui">
                        Sussex &amp; Brighton Combined County Authority
                      </p>
                      <p>
                        £1.14bn investment fund from 2028; business-support
                        machinery still forming.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">Trigger</span> growth-hub or
                        fund launch → check fit.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ---------------- Scoreboard ---------------- */}
              <section id="scoreboard" className="measure">
                <h2>The scoreboard</h2>
                <TW size="wide">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Bet</th>
                        <th>Stage</th>
                        <th>Cost</th>
                        <th>What it tells us</th>
                        <th>Odds of useful signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mill Wood Finance</td>
                        <td>1</td>
                        <td>email</td>
                        <td>
                          Is the <G term="asset finance">asset-finance</G> layer
                          real, at what terms
                        </td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Flude + GS&amp;P + SHW</td>
                        <td>1</td>
                        <td>3 emails</td>
                        <td>Does a building exist; are we a known requirement</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Tennis Sussex</td>
                        <td>1</td>
                        <td>coffee</td>
                        <td>Local pipeline intel + the county relationship</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Padel Tech + Hexa</td>
                        <td>1</td>
                        <td>2 emails</td>
                        <td>
                          Real capex for our spec + a
                          feasibility visit
                        </td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>The two group decisions</td>
                        <td>2</td>
                        <td>an evening</td>
                        <td>Structure settled, founder terms in writing</td>
                        <td>Certain</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Start Up Loans</td>
                        <td>2</td>
                        <td>4 applications</td>
                        <td>£100k of the stack, yes/no</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>EIS advance assurance</td>
                        <td>2</td>
                        <td>£499 + VAT</td>
                        <td>Whether the equity side works at all</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>South East Angels</td>
                        <td>2</td>
                        <td>form</td>
                        <td>First equity interest + intros</td>
                        <td>Medium</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Sussex Innovation</td>
                        <td>2</td>
                        <td>£50/month</td>
                        <td>Second investor pool + advisory</td>
                        <td>Medium</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Council pre-app</td>
                        <td>3</td>
                        <td>£582–£1,586</td>
                        <td>Official planning signal on a real building</td>
                        <td>High (when timed right)</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Crowdcube</td>
                        <td>3</td>
                        <td>fees on success</td>
                        <td>The £150–250k closer + founding members</td>
                        <td>Good, sequenced last</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>LTA loan</td>
                        <td>3</td>
                        <td>form</td>
                        <td>Route E’s terms, on that fork only</td>
                        <td>High, gated on decision 1</td>
                      </tr>
                    </tbody>
                  </table>
                </TW>
                <p>
                  Stage 1 answers the four biggest unknowns — finance terms,
                  building availability, real capex, local intel — for the price
                  of about six emails and a coffee. Everything in Stage 2
                  either needs those answers or spends real money.
                </p>

                <Bet betKey="fun-play" className="fun" title={<>Play more padel</>} />
              </section>
            </main>

            <footer className="doc">
              Working sheet · August 2026 · Not for sharing outside the group ·
              Unfamiliar terms? <Link href="/glossary">Glossary →</Link>
            </footer>
          </div>

          <Toc sections={SECTIONS} />
        </div>
      </NextStepsLive>
    </div>
  );
}
