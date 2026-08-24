import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Caveat, TW } from "@/components/doc";
import { MobileToc, Toc, type TocSection } from "@/components/toc";
import {
  Bet,
  BetLi,
  NextStepsLive,
  PeopleRail,
  SubBet,
} from "@/components/next-steps-live";

export const metadata: Metadata = {
  title: "Next steps — Padel Business Case",
};

const SECTIONS: TocSection[] = [
  { id: "decisions", no: "§", title: "Two gating decisions" },
  { id: "batches", no: "§", title: "The batches — 13 bets" },
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
            <PeopleRail />
            <section id="decisions" className="measure">
              <h2>Two decisions that gate everything else</h2>
              <p>
                Every contact below was verified against the organisation’s own
                pages on 24 Aug 2026 unless marked ⚠. Each entry is a bet: what it
                costs (mostly an email), what it tells us, and an honest read on
                the odds it pays off.
              </p>
              <ol>
                <BetLi betKey="b2-route-e-decision">
                  <strong>LTA money vs equity money — structural fork.</strong> The
                  LTA loan scheme (Route E) only funds not-for-profit structures;
                  Crowdcube, angels and EIS only work for a company limited by
                  shares. We cannot keep both doors open past incorporation. Decide
                  before applying for anything.
                </BetLi>
                <li>
                  <strong>Leasehold opco before EIS.</strong> HMRC’s advance
                  assurance looks hard at asset-backed ventures; a freehold-owning
                  company is a likely refusal, a trading operator leasing its
                  premises is the standard pass. South East Angels{" "}
                  <em>requires</em> an EIS-qualifying round, so this ordering is
                  critical path for the whole equity side.
                </li>
              </ol>
            </section>

            <section id="batches" className="measure">
              <h2>The batches — thirteen first bets</h2>
              <p>
                Batch 1 hits the four biggest unknowns — finance terms, building
                availability, SEIF status, real capex — for the price of about
                seven emails. Everything in Batch 2 either needs those answers or
                spends real money; Batch 3 needs the earlier dominoes down.
              </p>

              <Tabs defaultValue="b1" className="doc-tabs breakout" id="batch-tabs">
                <TabsList>
                  <TabsTrigger value="b1">Batch 1 — send this week</TabsTrigger>
                  <TabsTrigger value="b2">Batch 2 — weeks 2–4</TabsTrigger>
                  <TabsTrigger value="b3">Batch 3 — later dominoes</TabsTrigger>
                </TabsList>

                {/* ---------------- Batch 1 ---------------- */}
                <TabsContent value="b1" className="measure">
                  <p>
                    <strong>
                      Batch 1 — send this week (cost: five emails, one browser
                      check).
                    </strong>
                  </p>

                  <Bet
                    betKey="b1-millwood"
                    title={
                      <>
                        1. Mill Wood Finance — padel asset finance, and it’s
                        local ★ best first call
                      </>
                    }
                  >
                  <ul>
                    <li>
                      <strong>Henry Bolland</strong> (named padel contact) · 01273
                      523690 · millwoodfinance.com/padel-court-finance ·
                      Rustington, West Sussex
                    </li>
                    <li>
                      The only broker that publishes its first-pack list: business
                      plan + cashflow forecast, evidence of own capital,
                      management/padel experience (preferred), security (assets or
                      PGs), repayment from court cashflow. Send the financial
                      overview section and ask two questions:{" "}
                      <em>
                        would you fund a new-start on this plan, and at what
                        terms/deposit?
                      </em>
                    </li>
                    <li>
                      <strong>
                        Read: high likelihood of a substantive answer.
                      </strong>{" "}
                      Local, padel-specialist, sales-motivated. Their answer is the
                      fastest feasibility test of Route A that exists.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b1-flude"
                    title={
                      <>
                        2. Flude — the industrial agent with the best published
                        contact
                      </>
                    }
                  >
                  <ul>
                    <li>
                      <strong>Andrew Halfacree</strong>, Director, Industrial
                      Agency · 01273 740385 · a.halfacree@flude.com (plus Tom
                      Woodward, 01273 740384)
                    </li>
                    <li>
                      Brief: 13,000–20,000 sq ft, 6m+ height over a courts zone
                      (apex counts, not just eaves — pitched roofs are fine),
                      A23/A27 corridor, leasehold, long lease available. Ask
                      what’s on and what’s coming.
                    </li>
                    <li>
                      <strong>Read: high.</strong> Flude’s own director talked up
                      padel demand in the press on the Shoreham scheme — they know
                      the sector wants sheds. Send the same brief to{" "}
                      <strong>James Bryant at Graves Son &amp; Pilcher</strong>{" "}
                      (jb@gsp.uk.com, 01273 321123) and <strong>SHW Brighton</strong>{" "}
                      (brighton@shw.co.uk FAO the Industrial &amp; Logistics team,
                      01273 876200). Three agents = the real availability picture
                      in a week.
                    </li>
                    <SubBet
                      betKey="b1-gsp"
                      label="Same building brief to Graves Son & Pilcher"
                    />
                    <SubBet
                      betKey="b1-shw"
                      label="Same building brief to SHW Brighton"
                    />
                    <li>
                      <strong>Ask about these specific live listings</strong>{" "}
                      (found Aug 2026): Unit 24 Panattoni Park Burgess Hill (15,818
                      sq ft, 8m eaves — closest spec match; SHW/Vail Williams); 59
                      Victoria Road Burgess Hill (29,829 sq ft, 10m — oversized,
                      subdivision?); Unit 2 York Road Burgess Hill (20,000 sq ft,
                      £9.75/sq ft — GS&amp;P, height unstated); Units 3&amp;5
                      Lancing Business Park (6.7m high-bay, £10/sq ft — GS&amp;P);
                      Units 3&amp;4 School Close Burgess Hill (£6.75/sq ft,{" "}
                      <strong>already has Class E consent</strong> — Flude’s own
                      listing; height doubtful, view anyway); Unit 3 Ellen Street
                      Portslade (13,011 sq ft, 6.5m — SHW Crawley). Also: Panattoni
                      offers design-and-build at Burgess Hill, and Buckingham Park
                      Lewes takes pre-lets from June 2026 (Oakley: Steven Harvey,
                      steven@oakleyproperty.com, 01273 645772).
                    </li>
                    <li>
                      <strong>
                        Competitive intel — ✅ RESOLVED 24 Aug 2026 (checked on
                        the planning register):
                      </strong>{" "}
                      the April press story was the Consort Way scheme, and it is{" "}
                      <strong>approved</strong> (DM/26/0781, permission 14 May
                      2026): four indoor courts <em>plus a café and social space</em>{" "}
                      at Victoria Business Park, applicant Sally Vans Agnew (local
                      family, Capital Hair &amp; Beauty; likely vehicle Foundry
                      Investment Capital Ltd — its SIC codes include “operation of
                      sports facilities”). A discharge-of-conditions application
                      went in 11 Aug 2026, so fit-out is imminent. No second
                      Burgess Hill scheme exists. Also approved: 3 more outdoor
                      courts at Eixo (Jan 2026) and Plumpton Racecourse’s 5-court
                      centre (Aug 2026); one refusal at St Francis Sports &amp;
                      Social Club, Haywards Heath. Business case §3/§4/§10 updated
                      accordingly — mention the Consort Way opening when talking to
                      agents about Burgess Hill units.
                    </li>
                    <SubBet
                      betKey="b1-burgesshill-check"
                      label="Verify the Burgess Hill application with Mid Sussex DC"
                    />
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b1-seif"
                    title={
                      <>
                        3. British Business Bank — South East Investment Fund —
                        ✅ CHECKED 24 AUG 2026, nothing to do yet
                      </>
                    }
                  >
                  <ul>
                    <li>
                      <strong>Status: not launched.</strong> The page still says
                      “coming soon / summer 2026” (unchanged since March); no fund
                      managers appointed for any product line; no borrower
                      application or expression-of-interest route exists; SMEs can
                      apply only “as soon as the funds launch”. Facts: £350m
                      across the SE + East of England funds; loans £25k–£2m;{" "}
                      <strong>equity up to £5m</strong>.
                    </li>
                    <li>
                      <strong>No human action.</strong> Claude monitors for the
                      launch/manager announcement; the moment managers are named,
                      the Route B1 conversation opens with a named counterparty.
                      (Optional 30-second human task only if wanted: join the BBB
                      Nations &amp; Regions newsletter with your own email.)
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b1-tennis-sussex"
                    title={<>4. Tennis Sussex — local intel, hiding in plain sight</>}
                  >
                  <ul>
                    <li>
                      <strong>Nicola Barnes</strong> (venue liaison) ·
                      nicola.barnes@tennissussex.com · office: 07398 145446 — and
                      their office is physically{" "}
                      <strong>
                        inside The Padel Hub, Haywards Heath (Unit 4 Link 23, RH17
                        5JS)
                      </strong>
                      , i.e. the big warehouse venue we already play at.
                    </li>
                    <li>
                      Ask for a conversation about padel demand in Sussex, the
                      venue registration route, and who else is circling which
                      sites. County bodies know the planning pipeline gossip before
                      it’s public.
                    </li>
                    <li>
                      <strong>Read: high, and cheap.</strong> Worst case, a
                      friendly coffee at a venue we were going to anyway.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b1-suppliers"
                    title={<>5. Court suppliers — feasibility conversations</>}
                  >
                  <ul>
                    <li>
                      <strong>Padel Tech</strong> (built Padium; 150+ UK installs):
                      info@padeltech.co.uk · 0131 581 8683. Their form asks
                      planning status / funding status / canopy / court count —
                      have answers ready. <strong>Hexa Padel</strong> (East
                      Grinstead number — closest): sales@hexapadel.co.uk · 01342
                      894508.
                    </li>
                    <li>
                      Ask both: indicative cost for 4 doubles + 2 singles indoor,
                      and whether they’ll do a site feasibility visit once we
                      have a shortlist (neither advertises free visits — ask).
                    </li>
                    <li>
                      <strong>
                        Read: high response likelihood (they sell courts), medium
                        information value until we have a building
                      </strong>{" "}
                      — but their number for our spec tightens the capex table, and
                      installers see every building problem before we do.
                    </li>
                  </ul>
                  </Bet>
                  <Caveat>
                    <p>
                      Skip PadelBuild UK (placeholder website, likely pre-launch)
                      and route Padel Galis via their Spanish HQ if wanted (+34 963
                      767 781 — no verified UK contact).
                    </p>
                  </Caveat>
                </TabsContent>

                {/* ---------------- Batch 2 ---------------- */}
                <TabsContent value="b2" className="measure">
                  <p>
                    <strong>
                      Batch 2 — once Batch 1 signals come back (weeks 2–4).
                    </strong>
                  </p>

                  <Bet
                    betKey="b2-startup-loans"
                    title={<>6. Start Up Loans — one application per founder</>}
                  >
                  <ul>
                    <li>
                      Apply at apply.startuploans.co.uk (£500–£25k each, 7.5%
                      fixed, no security/PGs, max £100k per business; applying
                      founders must together hold ≥50%). Sussex delivery partner is{" "}
                      <strong>Let’s Do Business Group</strong> (01424 205500 ·
                      info@ldbgroup.co.uk) — you’re assigned one partner
                      permanently at submission, so it’s worth a pre-call.
                    </li>
                    <li>
                      <strong>Read: high approval likelihood</strong> for employed
                      applicants with clean credit — these are
                      affordability-assessed personal loans, and the scheme exists
                      precisely for this. Timing note: only draw when there’s a
                      project to spend on.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b2-eis"
                    title={<>7. EIS advance assurance — the prerequisite domino</>}
                  >
                  <ul>
                    <li>
                      SeedLegals runs it for <strong>£499 + VAT</strong> as HMRC
                      agent; typical HMRC turnaround ~3–4 weeks (up to 6–8). Needs:
                      incorporated company, business plan, forecasts, use of funds
                      — and evidence of prospective investors (a crowdfunding
                      platform letter counts).
                    </li>
                    <li>
                      <strong>
                        Read: good odds if we’re a leasehold opco
                      </strong>{" "}
                      (sports venues aren’t an excluded trade; the risk-to-capital
                      test is the hurdle). Do this before approaching any angel.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b2-sea"
                    title={<>8. South East Angels — Brighton’s own network</>}
                  >
                  <ul>
                    <li>
                      Pitch via their Airtable form
                      (southeastangels.co.uk/how-to-raise-with-us). 50+ angels,
                      £3m+/yr deployed.{" "}
                      <strong>
                        Gate: the round must be S/EIS-qualifying
                      </strong>{" "}
                      — hence #7 first.
                    </li>
                    <li>
                      <strong>Read: medium.</strong> Generalist angels, but local +
                      consumer-leisure with our demand data is a good story. Even a
                      “not yet” comes with intros.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b2-sussex-innovation"
                    title={
                      <>
                        9. University of Sussex Business Angels / Sussex
                        Innovation
                      </>
                    }
                  >
                  <ul>
                    <li>
                      <strong>Nigel Lambe</strong> (CEO, Sussex Innovation) ·
                      nigel.lambe@sussexinnovation.co.uk · 01273 704400. Access for
                      non-alumni runs through Sussex Innovation membership (
                      <strong>from £50+VAT/month</strong>, includes a strategy
                      session).
                    </li>
                    <li>
                      <strong>Read: medium, slower burn</strong> — but the
                      membership itself buys advisory support and a network for a
                      coffee-money price.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b3-preapp"
                    title={
                      <>
                        10. Council pre-application advice — after a shortlist
                        exists, not before
                      </>
                    }
                  >
                  <ul>
                    <li>
                      <strong>Mid Sussex</strong>:
                      planninginfo@midsussex.gov.uk · 01444 477566. A padel
                      building is “Major” (≥1,000 sqm):{" "}
                      <strong>£582 written / £1,164 meeting</strong>.
                      Change-of-use-only may fit the cheaper “Other” tier
                      (£165/£335) — ask when booking.
                    </li>
                    <li>
                      <strong>Brighton &amp; Hove</strong>:
                      planning.applications@brighton-hove.gov.uk. Major
                      (1,000–4,999 sqm):{" "}
                      <strong>£952.75 written / £1,586.20 virtual meeting</strong>.
                    </li>
                    <li>
                      <strong>
                        Read: near-certain to deliver its purpose
                      </strong>{" "}
                      (an official signal on a specific building) — which is why it
                      waits for the building.
                    </li>
                  </ul>
                  </Bet>
                </TabsContent>

                {/* ---------------- Batch 3 ---------------- */}
                <TabsContent value="b3" className="measure">
                  <p>
                    <strong>Batch 3 — needs the earlier dominoes down.</strong>
                  </p>

                  <Bet
                    betKey="b3-crowdcube"
                    title={<>11. Crowdcube / Republic Europe</>}
                  >
                  <ul>
                    <li>
                      Crowdcube: apply via crowdcube.com/explore/raising. Gates: UK
                      ltd topco; property <em>development</em> excluded (opco
                      leasing courts is the standard fit). Fees{" "}
                      <span style={{ color: "var(--warn)" }}>⚠</span> last
                      verified at 7% success + ~1% completion; pitch goes public
                      only after an initial target is hit from our own network —
                      plan on <strong>~30–50% pre-committed</strong> before launch.
                      Republic Europe (ex-Seedrs) is operating in 2026:
                      republic.com/raise.
                    </li>
                    <li>
                      <strong>
                        Read: genuinely promising for this concept
                      </strong>{" "}
                      (members-as-investors; four padel precedents at our size) —
                      but it’s a closer, not an opener. It needs the anchor from
                      batches 1–2 first.
                    </li>
                  </ul>
                  </Bet>

                  <Bet
                    betKey="b3-lta-loan"
                    title={
                      <>
                        12. LTA facility loan — only if we take the
                        not-for-profit fork
                      </>
                    }
                  >
                  <ul>
                    <li>
                      Eligibility check → EOI at lta.org.uk (facility loan scheme);{" "}
                      <strong>~8 weeks to decision</strong>; wants 2 years of
                      accounts, 3 quotes, business plan. Contact via the LTA
                      Support Centre web form (there is no phone line; the
                      facilities@ email address could not be verified).
                    </li>
                    <li>
                      <strong>
                        Read: strong odds <em>if</em> we choose that structure
                      </strong>{" "}
                      — the scheme has funded 100+ padel courts and prioritises
                      exactly this kind of project. Gated entirely on decision #1
                      at the top of this sheet.
                    </li>
                  </ul>
                  </Bet>
                  <Caveat>
                    <p>
                      Note: their current pages say loans up to 5 years, our
                      earlier research said 5–15 — verify on the call.
                    </p>
                  </Caveat>

                  <Bet
                    betKey="b3-sbcca"
                    title={
                      <>
                        13. Sussex &amp; Brighton Combined County Authority —
                        watch, don’t wait
                      </>
                    }
                  >
                  <ul>
                    <li>
                      Live since March 2026 (£117m initial funding; no mayor until
                      May 2028; business support machinery still forming, no
                      growth-hub contact published yet). Interim route: Invest
                      Brighton &amp; Hove via the council’s business pages.
                    </li>
                    <li>
                      <strong>Read: nothing to send yet.</strong> Re-check
                      quarterly.
                    </li>
                  </ul>
                  </Bet>
                </TabsContent>
              </Tabs>
            </section>

            <section id="scoreboard" className="measure">
              <h2>The scoreboard</h2>
              <TW size="wide">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Bet</th>
                      <th>Cost</th>
                      <th>What it tells us</th>
                      <th>Odds of useful signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mill Wood Finance</td>
                      <td>email</td>
                      <td>Is Route A’s asset-finance layer real, at what terms</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Flude + GS&amp;P + SHW</td>
                      <td>3 emails</td>
                      <td>Does a building exist</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>SEIF page check</td>
                      <td>5 minutes</td>
                      <td>Is Route B1 open yet, and via whom</td>
                      <td>Certain</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tennis Sussex</td>
                      <td>email/coffee</td>
                      <td>Local pipeline intel, registration route</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Padel Tech + Hexa</td>
                      <td>2 emails</td>
                      <td>Real capex for our spec</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Start Up Loans</td>
                      <td>4 applications</td>
                      <td>£100k of the stack, yes/no</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>EIS advance assurance</td>
                      <td>£499 + VAT</td>
                      <td>Whether the equity side works at all</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>South East Angels</td>
                      <td>form</td>
                      <td>First £50–150k of equity interest</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Sussex Innovation</td>
                      <td>£50/month</td>
                      <td>Network + second angel pool</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Council pre-app</td>
                      <td>£582–£1,586</td>
                      <td>Official planning signal on a real building</td>
                      <td>High (when timed right)</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Crowdcube</td>
                      <td>fees on success</td>
                      <td>The £250–350k closer</td>
                      <td>Good, but sequenced last</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>LTA loan</td>
                      <td>form</td>
                      <td>Route E’s terms, if we fork that way</td>
                      <td>High, gated on structure</td>
                    </tr>
                  </tbody>
                </table>
              </TW>
              <p>
                Batch 1 hits the four biggest unknowns — finance terms, building
                availability, SEIF status, real capex — for the price of about
                seven emails. Everything in Batch 2 either needs those answers or
                spends real money.
              </p>
            </section>
          </main>

          <footer className="doc">
            Working sheet · August 2026 · Not for sharing outside the group
          </footer>
        </div>

        <Toc sections={SECTIONS} />
      </div>
      </NextStepsLive>
    </div>
  );
}
