import type { Metadata } from "next";
import Link from "next/link";
import { TW } from "@/components/doc";
import { MobileToc, Toc, type TocSection } from "@/components/toc";
import {
  Ask,
  BetSec,
  Intel,
  Read,
  Want,
  WantLead,
  Who,
} from "@/components/bet-parts";
import { CorridorMap } from "@/components/corridor-map";
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
  { id: "decisions", no: "§", title: "Two decisions that come first" },
  {
    id: "stage-1",
    no: "1",
    title: "First conversations",
    subs: [
      { id: "bet-1", title: "Mill Wood Finance" },
      { id: "bet-2", title: "Three property agents" },
      { id: "candidates", title: "The live candidates" },
      { id: "bet-3", title: "Tennis Sussex" },
      { id: "bet-4", title: "Court suppliers" },
    ],
  },
  {
    id: "stage-2",
    no: "2",
    title: "Set up the company and start the applications",
    subs: [
      { id: "bet-5", title: "The two decisions" },
      { id: "bet-6", title: "Start Up Loans" },
      { id: "bet-7", title: "EIS advance assurance" },
      { id: "bet-8", title: "South East Angels" },
      { id: "bet-9", title: "Sussex Innovation" },
    ],
  },
  {
    id: "stage-3",
    no: "3",
    title: "Commit to a building, or stop",
    subs: [
      { id: "bet-10", title: "Council pre-app advice" },
      { id: "bet-11", title: "Crowdcube" },
      { id: "bet-12", title: "LTA facility loans" },
    ],
  },
  { id: "monitoring", no: "§", title: "Being watched" },
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
              <h1>Next steps — contacts and first moves</h1>
              <p className="meta">
                <b>Working sheet, August 2026</b> &nbsp;·&nbsp; Contact details
                were checked against each organisation’s own website on 24
                August 2026 unless marked ⚠
              </p>
            </header>

            <main className="doc-body">
              <LiveStageStrip />
              <PeopleRail />

              <section id="decisions" className="measure">
                <h2>Two decisions that come first</h2>
                <ol>
                  <li>
                    <strong>
                      Not-for-profit or company limited by shares — pick one.
                    </strong>{" "}
                    The LTA’s cheap loans (Route E in the business case) only go
                    to not-for-profit structures. Crowdcube, angels and{" "}
                    <G term="EIS">EIS</G> only work for a company limited by
                    shares. We can’t keep both options open once we incorporate,
                    so this decision comes before any application.
                  </li>
                  <li>
                    <strong>
                      Set up as an operating company (<G term="opco">opco</G>)
                      that leases its building — before any EIS application.
                    </strong>{" "}
                    HMRC’s{" "}
                    <G term="EIS advance assurance">advance assurance</G> looks
                    hard at companies whose value sits in property: one that
                    owns its freehold is likely to be refused, while an
                    operating company leasing its premises is the standard
                    pass. South East Angels only takes EIS-qualifying rounds,
                    so getting this right unlocks the whole equity side.
                  </li>
                </ol>
              </section>

              {/* ---------------- Stage 1 ---------------- */}
              <section id="stage-1" className="measure">
                <h2>Stage 1 — First conversations</h2>
                <p className="stage-prize">
                  Six emails and a coffee. Between them they answer the three
                  questions everything else depends on: will anyone lend to us,
                  does a suitable building exist, and what would it actually
                  cost to build? Until we know those, the rest is theory.
                </p>

                <Bet
                  betKey="b1-millwood"
                  id="bet-1"
                  no={1}
                  title="Mill Wood Finance — will anyone finance the courts?"
                  summary="Whether the main loan is available, and on what terms."
                >
                  <Who>
                    <strong>Henry Bolland</strong> · 01273 523690 ·
                    millwoodfinance.com/padel-court-finance. A broker in
                    Rustington that specialises in arranging finance for padel
                    courts.
                  </Who>
                  <Ask>
                    <p>
                      Send them the financial overview and ask directly:{" "}
                      <em>
                        would you arrange finance for a brand-new company on
                        this plan, and on what terms and deposit?
                      </em>{" "}
                      Their site lists what they want to see first: a business
                      plan, a cashflow forecast, evidence of our own money going
                      in, relevant experience, and what security is available.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The largest loan in the funding plan is{" "}
                      <G term="asset finance">asset finance</G> — borrowing
                      secured on the courts and fit-out itself.
                    </WantLead>
                    <p>
                      Mill Wood arranges exactly this for padel venues, so their
                      answer tells us quickly whether that part of the plan is
                      realistic. If it is, we also come away with real numbers
                      (rate, term, deposit) to replace our estimates, and a
                      broker who has already done padel deals to present ours to
                      lenders when the time comes.
                    </p>
                  </Want>
                  <Read>
                    Very likely to get a proper reply — they’re local,
                    specialist, and it’s how they make money.
                  </Read>
                </Bet>

                <Bet
                  betKey="b1-flude"
                  id="bet-2"
                  no={2}
                  className="breakout"
                  title="Three industrial property agents — find the building"
                  summary="Whether a building exists; gets us known to the agents."
                >
                  <Who>
                    <strong>Andrew Halfacree</strong>, Flude (01273 740385 ·
                    a.halfacree@flude.com); <strong>James Bryant</strong>,
                    Graves Son &amp; Pilcher (jb@gsp.uk.com · 01273 321123);{" "}
                    <strong>SHW Brighton</strong> industrial team
                    (brighton@shw.co.uk · 01273 876200).
                  </Who>
                  <Ask>
                    <p>
                      The same brief to all three. We’re looking for
                      13,000–20,000 sq ft with at least 6m of internal height
                      over the courts area (the apex counts, not just the{" "}
                      <G term="eaves height">eaves</G>), on the A23/A27
                      corridor, on a long lease. What’s available now, and
                      what’s coming? Then ask about the specific units in{" "}
                      <a href="#candidates">the live candidates</a> below.
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
                      Agents see buildings before they’re listed, so three
                      briefs get us the real availability picture within a week
                      — including rents and which landlords would contribute to
                      a fit-out in exchange for a long lease.
                    </WantLead>
                    <p>
                      Just as important, it puts us on their books as a serious
                      enquiry. In a market this tight, being the first phone
                      call when the right unit appears is the whole game.
                    </p>
                  </Want>
                  <Intel label="Worth mentioning in these conversations">
                    <p>
                      Burgess Hill’s Consort Way scheme is approved (May 2026)
                      — four indoor courts plus a café at Victoria Business
                      Park, run by a local family, with fit-out starting soon.
                      Eixo has three more outdoor courts approved and Plumpton
                      Racecourse a five-court centre. This affects which
                      Burgess Hill buildings and what positioning make sense,
                      so raise it when discussing that area.
                    </p>
                  </Intel>
                  <Read>
                    High. Flude’s own director has talked up padel demand in
                    the press — the agents already know this sector wants
                    buildings.
                  </Read>
                </Bet>

                {/* ------- The live candidates: map + grid ------- */}
                <div className="candidates breakout" id="candidates-block">
                  <h3 id="candidates">The live candidates</h3>
                  <p className="candidates-note font-ui">
                    August 2026 — listings move. Numbered pins on the map match
                    the cards below.
                  </p>
                  <CorridorMap />
                  <ListingsShowcase />
                </div>

                <Bet
                  betKey="b1-tennis-sussex"
                  id="bet-3"
                  no={3}
                  title="Tennis Sussex — get to know the county association"
                  summary="Local intelligence, plus the county relationship."
                >
                  <Who>
                    <strong>Nicola Barnes</strong>, venue liaison ·
                    nicola.barnes@tennissussex.com · 07398 145446. Their office
                    is inside The Padel Hub in Haywards Heath — the venue we
                    already play at.
                  </Who>
                  <Ask>
                    <p>
                      A 30-minute coffee. We’re four locals putting together a
                      serious plan for an indoor padel venue in the corridor —
                      could she talk us through the Sussex padel scene and how
                      LTA venue registration works?
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      Partly information, mostly the relationship — and it’s
                      worth being clear that the relationship is the point.
                    </WantLead>
                    <p>
                      County associations hear early who is planning courts
                      where and which schemes are stuck in planning. They also
                      write letters of support for planning applications, and
                      they connect new venues into the leagues and club
                      networks that fill weekday courts. Being known to them
                      before we need anything is the real value of the coffee.
                      Along the way we learn whether venue registration
                      (insurance, sanctioned competitions, coaching pipeline)
                      is worth it for us.
                    </p>
                  </Want>
                  <Read>
                    Easy yes, and it costs a coffee at a venue we were going to
                    anyway.
                  </Read>
                </Bet>

                <Bet
                  betKey="b1-suppliers"
                  id="bet-4"
                  no={4}
                  title="Court suppliers — what would it actually cost?"
                  summary="The real build cost for our spec."
                >
                  <Who>
                    <strong>Padel Tech</strong> (built Padium; 150+ UK
                    installations) — info@padeltech.co.uk · 0131 581 8683.{" "}
                    <strong>Hexa Padel</strong> (East Grinstead) —
                    sales@hexapadel.co.uk · 01342 894508.
                  </Who>
                  <Ask>
                    <p>
                      An indicative installed price for four doubles courts and
                      two singles courts, indoor, to LTA specification — and
                      whether they’ll visit candidate buildings once we have a
                      shortlist. Padel Tech’s enquiry form asks about planning
                      status, funding status and court count, so have answers
                      ready.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      A real quote to replace the estimates in the build budget
                      — this single number moves the whole financial model.
                    </WantLead>
                    <p>
                      A site visit from an installer is also effectively a free
                      structural check on any building we’re considering, from
                      people who have seen every conversion mistake already.
                      And suppliers usually bring their own finance
                      introductions, which connects back to the Mill Wood
                      conversation.
                    </p>
                  </Want>
                  <Read>
                    They sell courts, so they’ll answer. The numbers get much
                    more useful once we have a specific building to point at.
                  </Read>
                </Bet>
              </section>

              {/* ---------------- Stage 2 ---------------- */}
              <section id="stage-2" className="measure">
                <h2>Stage 2 — Set up the company and start the applications</h2>
                <p className="stage-prize">
                  These need Stage 1’s answers first. The cost is some
                  paperwork and about £500; the result is a company that can
                  actually receive money, with the awkward founder
                  conversations had while everything is still hypothetical.
                </p>

                <Bet
                  id="bet-5"
                  no={5}
                  title="The two decisions, made properly"
                  summary="Structure settled, founder terms in writing."
                >
                  <BetSec label="The ask (of ourselves)">
                    <p>
                      One evening, two decisions, written down. First, the
                      structure: not-for-profit or company limited by shares
                      (the fork described at the top of this sheet). Second,
                      founder terms: who owns what, who does what, and who
                      signs personal guarantees, capped at what.
                    </p>
                    <ul className="subbet-list">
                      <SubBet
                        betKey="b2-route-e-decision"
                        label="Decision 1 — not-for-profit or company limited by shares: pick one"
                      />
                      <SubBet
                        betKey="b2-founders-agreement"
                        label="Decision 2 — founder terms: who owns what, does what, signs what"
                      />
                    </ul>
                  </BetSec>
                  <Want>
                    <WantLead>
                      Every later application needs to know which structure we
                      are, so this unblocks everything.
                    </WantLead>
                    <p>
                      And agreeing the difficult terms now is far easier than
                      agreeing them once real money is involved. It’s the
                      cheapest insurance in the whole plan.
                    </p>
                  </Want>
                  <Read>
                    Nothing uncertain about it — it just needs doing.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-startup-loans"
                  id="bet-6"
                  no={6}
                  title="Start Up Loans — up to £100k that doesn’t need trading history"
                  summary="Whether £100k of the plan is confirmed."
                >
                  <Who>
                    Apply at apply.startuploans.co.uk. The Sussex delivery
                    partner is <strong>Let’s Do Business Group</strong> (01424
                    205500 · info@ldbgroup.co.uk).
                  </Who>
                  <Ask>
                    <p>
                      One application per founder — £500–£25,000 each at 7.5%
                      fixed over one to five years, with no security and no
                      personal guarantees. Founders applying must together hold
                      at least half the company.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      Up to £100k of the funding plan that doesn’t depend on
                      trading history — the layer that substitutes for the
                      founder capital we don’t have.
                    </WantLead>
                    <p>We’d only draw it once there’s a project to spend it on.</p>
                  </Want>
                  <Read>
                    Approval is likely for employed applicants with clean
                    credit; the scheme exists for exactly this situation.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-eis"
                  id="bet-7"
                  no={7}
                  title="EIS advance assurance — the letter that unlocks investors"
                  summary="Whether the investor route works at all."
                >
                  <Who>
                    SeedLegals handles it end-to-end for{" "}
                    <strong>£499 + VAT</strong>; HMRC usually responds within
                    three to four weeks.
                  </Who>
                  <Ask>
                    <p>
                      HMRC’s advance confirmation that investment in the
                      company would qualify for <G term="EIS">EIS</G> tax
                      relief. It needs an incorporated company, a business
                      plan, forecasts, and evidence of prospective investors —
                      a letter from a crowdfunding platform counts.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>The letter itself.</WantLead>
                    <p>
                      Angel networks won’t look at a company without it; with
                      it, an investor putting in £1,000 is effectively risking
                      £700 after the tax relief. It’s the domino that has to
                      fall before any investor conversation is real.
                    </p>
                  </Want>
                  <Read>
                    Good odds provided we’re set up as the leasing{" "}
                    <G term="opco">opco</G> — sports venues aren’t an excluded
                    trade.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-sea"
                  id="bet-8"
                  no={8}
                  title="South East Angels — the first investor conversation"
                  summary="First investor interest and introductions."
                >
                  <Who>
                    A Brighton-based angel network — 50+ investors, over £3m a
                    year invested. Pitches go through the form at
                    southeastangels.co.uk/how-to-raise-with-us.
                  </Who>
                  <Ask>
                    <p>
                      A pitch slot for an EIS-qualifying round of £250–350k,
                      built on the demand data in the business case.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The first £50–150k of the equity round soft-committed, or
                      failing that, introductions — local angel networks know
                      the county’s family offices and business owners.
                    </WantLead>
                    <p>
                      A lead investor from here also makes a later Crowdcube
                      round credible, since crowd platforms want a third to
                      half of the target committed before a pitch goes public.
                    </p>
                  </Want>
                  <Read>
                    Genuinely uncertain — generalist investors, but a local
                    leisure business with our occupancy data is a good story.
                  </Read>
                </Bet>

                <Bet
                  betKey="b2-sussex-innovation"
                  id="bet-9"
                  no={9}
                  title="Sussex Innovation — a second network for coffee money"
                  summary="A second investor pool and advice."
                >
                  <Who>
                    <strong>Nigel Lambe</strong>, CEO ·
                    nigel.lambe@sussexinnovation.co.uk · 01273 704400.
                    Community membership from £50 + VAT a month.
                  </Who>
                  <Ask>
                    <p>
                      Membership, the strategy session that comes with it, and
                      an introduction to the University of Sussex Business
                      Angels programme.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      A second pool of local investors, ongoing advisory
                      support, and more people who know us before we’re asking
                      them for anything.
                    </WantLead>
                  </Want>
                  <Read>Slower burn, tiny cost.</Read>
                </Bet>
              </section>

              {/* ---------------- Stage 3 ---------------- */}
              <section id="stage-3" className="measure">
                <h2>Stage 3 — Commit to a building, or stop</h2>
                <p className="stage-prize">
                  Real money starts here: planning advice on a specific
                  building, closing the funding, and the final decision against
                  the stop criteria in the business case.
                </p>

                <Bet
                  betKey="b3-preapp"
                  id="bet-10"
                  no={10}
                  title="Council pre-application advice — the official signal"
                  summary="The council’s view on a real building."
                >
                  <Who>
                    <strong>Mid Sussex DC</strong>{" "}
                    (planninginfo@midsussex.gov.uk · 01444 477566) — a
                    padel-sized building counts as a “Major” application: £582
                    for written advice, £1,164 with a meeting; a
                    change-of-use-only case may fit a cheaper tier, so ask.{" "}
                    <strong>Brighton &amp; Hove</strong>:
                    planning.applications@brighton-hove.gov.uk — £952.75
                    written, £1,586.20 with a meeting.
                  </Who>
                  <Ask>
                    <p>
                      The council’s <G term="pre-app">advice</G> on converting
                      the shortlisted building to indoor sport use, with the
                      jobs-and-community case attached.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The council’s written steer before we commit to a lease.
                    </WantLead>
                    <p>
                      It’s the single most persuasive de-risking document we
                      can show a landlord, a lender or an investor.
                    </p>
                  </Want>
                  <Read>
                    It reliably delivers what it’s for — which is why it waits
                    until there’s a real building.
                  </Read>
                </Bet>

                <Bet
                  betKey="b3-crowdcube"
                  id="bet-11"
                  no={11}
                  title="Crowdcube — the round that closes the gap"
                  summary="The final £150–250k, plus founding members."
                >
                  <Who>
                    crowdcube.com/explore/raising. Requirements: a UK limited
                    company at the top of the structure; property{" "}
                    <em>development</em> is excluded but an operating company
                    leasing its building is the standard fit. Fees were around
                    7% on success plus ~1% completion when last verified{" "}
                    <span style={{ color: "var(--warn)" }}>⚠</span>. Pitches
                    only go public once roughly a third to half of the target
                    is already committed from your own network.
                  </Who>
                  <Ask>
                    <p>
                      An equity round to close the remaining £150–250k,
                      launched once an anchor investor exists.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The money, and something money can’t usually buy — a
                      couple of hundred local investors who become founding
                      members with a personal stake in filling the venue on
                      quiet nights.
                    </WantLead>
                    <p>
                      Four UK padel businesses have raised at this size on the
                      platform already.
                    </p>
                  </Want>
                  <Read>
                    Promising for this kind of business, but it’s the closing
                    move, not the opening one.
                  </Read>
                </Bet>

                <Bet
                  betKey="b3-lta-loan"
                  id="bet-12"
                  no={12}
                  title="LTA facility loans — only on the not-for-profit route"
                  summary="The not-for-profit route’s terms."
                >
                  <Who>
                    Eligibility check and expression of interest at lta.org.uk;
                    about eight weeks to a decision; they ask for two years of
                    accounts, three quotes and a business plan. Contact goes
                    through their support-centre web form.{" "}
                    <span style={{ color: "var(--warn)" }}>
                      ⚠ Their pages currently say loans run up to five years;
                      earlier guidance said up to fifteen — worth confirming.
                    </span>
                  </Who>
                  <Ask>
                    <p>
                      A loan covering up to half the cost of covered courts at
                      5% fixed.
                    </p>
                  </Ask>
                  <Want>
                    <WantLead>
                      The cheapest capital available in this sport — but only
                      if the group chose the not-for-profit structure at
                      decision 1.
                    </WantLead>
                    <p>On the equity route this door is closed.</p>
                  </Want>
                  <Read>
                    Strong on that route (the scheme has funded over a hundred
                    padel courts); irrelevant otherwise.
                  </Read>
                </Bet>
              </section>

              {/* ---------------- Being watched ---------------- */}
              <section id="monitoring" className="measure">
                <h2>Being watched — nothing to do yet</h2>
                <p>
                  These aren’t tasks. They’re things being monitored, each with
                  the event that would turn it into one.
                </p>
                <div className="watchlist">
                  <div className="watch-item">
                    <span className="watch-dot" aria-hidden="true" />
                    <div className="watch-body">
                      <p className="watch-name font-ui">
                        British Business Bank — South East Investment Fund
                      </p>
                      <p>
                        Not launched as of late August 2026 despite a “summer
                        2026” target: no fund managers appointed and no way to
                        apply or register interest. When it does launch it
                        offers loans of £25k–£2m and equity up to £5m, and the
                        same bank’s northern fund has already backed a padel
                        operator.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">Becomes a task when</span>{" "}
                        fund managers are announced — then there’s a named
                        counterparty to approach.
                      </p>
                    </div>
                  </div>
                  <div className="watch-item">
                    <span className="watch-dot" aria-hidden="true" />
                    <div className="watch-body">
                      <p className="watch-name font-ui">Club Padel, Shoreham</p>
                      <p>
                        Opens autumn 2026. Its first months of occupancy and
                        membership numbers are free evidence for or against our
                        whole thesis.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">
                          Becomes relevant when
                        </span>{" "}
                        trading is visible — it feeds the final commit-or-stop
                        decision.
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
                        Controls a £1.14bn long-term investment fund from 2028;
                        its business-support arm is still being set up.
                      </p>
                      <p className="watch-trigger font-ui">
                        <span className="bet-label">Becomes a task when</span>{" "}
                        a fund or growth hub actually opens.
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
                        <th>Move</th>
                        <th>Stage</th>
                        <th>Cost</th>
                        <th>What it tells us</th>
                        <th>Likelihood of a useful answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mill Wood Finance</td>
                        <td>1</td>
                        <td>an email</td>
                        <td>
                          Whether the main loan is available, and on what terms
                        </td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Flude + GS&amp;P + SHW</td>
                        <td>1</td>
                        <td>3 emails</td>
                        <td>
                          Whether a building exists; gets us known to the
                          agents
                        </td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Tennis Sussex</td>
                        <td>1</td>
                        <td>a coffee</td>
                        <td>Local intelligence, plus the county relationship</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Padel Tech + Hexa</td>
                        <td>1</td>
                        <td>2 emails</td>
                        <td>The real build cost for our spec</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>The two decisions</td>
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
                        <td>Whether £100k of the plan is confirmed</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>EIS advance assurance</td>
                        <td>2</td>
                        <td>£499 + VAT</td>
                        <td>Whether the investor route works at all</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>South East Angels</td>
                        <td>2</td>
                        <td>a form</td>
                        <td>First investor interest and introductions</td>
                        <td>Uncertain</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Sussex Innovation</td>
                        <td>2</td>
                        <td>£50/month</td>
                        <td>A second investor pool and advice</td>
                        <td>Uncertain</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Council pre-app</td>
                        <td>3</td>
                        <td>£582–£1,586</td>
                        <td>The council’s view on a real building</td>
                        <td>High, once timed right</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Crowdcube</td>
                        <td>3</td>
                        <td>fees on success</td>
                        <td>The final £150–250k, plus founding members</td>
                        <td>Good, but goes last</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>LTA loan</td>
                        <td>3</td>
                        <td>a form</td>
                        <td>The not-for-profit route’s terms</td>
                        <td>High on that route only</td>
                      </tr>
                    </tbody>
                  </table>
                </TW>
                <p>
                  Stage 1 answers the biggest unknowns — financing, buildings,
                  build cost, local intelligence — for the price of six emails
                  and a coffee. Everything after it either needs those answers
                  or spends real money.
                </p>

                <Bet betKey="fun-play" className="fun" title="Play more padel" />
              </section>
            </main>

            <footer className="doc">
              Working sheet · August 2026 · Unfamiliar terms?{" "}
              <Link href="/glossary">Glossary →</Link>
            </footer>
          </div>

          <Toc sections={SECTIONS} />
        </div>
      </NextStepsLive>
    </div>
  );
}
