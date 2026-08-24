import type { Metadata } from "next";
import Link from "next/link";
import { MobileToc, Toc, type TocSection } from "@/components/toc";
import { G } from "@/components/glossary";

export const metadata: Metadata = {
  title: "Strategy — Padel Business Case",
};

const SECTIONS: TocSection[] = [
  { id: "objective", no: "§", title: "The objective, the strategy, the tactics" },
  { id: "strengths", no: "§", title: "Playing to strengths" },
  { id: "two-companies", no: "§", title: "Two companies, not one" },
  { id: "platform-wedge", no: "§", title: "The platform wedge — what the evidence says" },
  { id: "corrections", no: "§", title: "The honest corrections from the research" },
  { id: "changes", no: "§", title: "What this note changes" },
];

export default function StrategyPage() {
  return (
    <div className="shell">
      <MobileToc sections={SECTIONS} />
      <div className="layout">
        <div className="min-w-0">
          <header className="doc">
            <p className="kicker">Working note</p>
            <h1>Strategy note — how we win</h1>
            <p className="meta">
              <b>Working note, August 2026</b>
            </p>
          </header>

          <main className="doc-body">
            <section className="measure">
              <p>
                This sits on top of the business case: it doesn’t change the
                venue plan or the next-steps board, it explains the thinking
                that connects them and adds one new track. The evidence behind
                it comes from studying five markets where operators fought
                booking platforms (golf, boutique fitness, restaurants, hotels,
                food delivery), the operator-owned consortiums that became
                infrastructure (Visa, Best Western, Ace Hardware), and what has
                actually happened in padel.
              </p>
            </section>

            <section id="objective" className="measure">
              <h2>The objective, the strategy, the tactics</h2>
              <p>
                <strong>Objective:</strong> become the corridor’s padel
                institution — the club people belong to, not a venue they book.
                Everything else (the country-club setting, the membership, the
                cross-venue leagues, the software) serves that.
              </p>
              <p>
                <strong>Strategy in one sentence:</strong> use community and
                experience — the things sheds and marketplaces structurally
                can’t copy — to own the player relationship, and use our
                software strength to make other operators allies rather than
                rivals.
              </p>
              <p>
                <strong>Tactics:</strong> the board. Nothing in this note adds
                work to Stage 1 beyond a few extra questions in coffees we’re
                already having.
              </p>
            </section>

            <section id="strengths" className="measure">
              <h2>Playing to strengths</h2>
              <p>
                Our weakness is leisure track record. Our strengths are
                software, community instinct, and a local network that keeps
                turning out to be one connection deep. Three moves convert the
                strengths into cover for the weakness:
              </p>
              <ol>
                <li>
                  <strong>An experienced operator on the cap table.</strong> An
                  investor who has built and run padel venues answers “have you
                  done this before?” with someone else’s track record and real
                  skin in the game — stronger than an advisor, cheaper than a
                  franchise. The people list has the candidates; a founder who
                  has exited is ideal, because they’re free, non-conflicted,
                  and carry scar tissue we can learn from cheaply.
                </li>
                <li>
                  <strong>Our own booking rails from day one.</strong> The
                  venue runs on software we build and own: bookings,
                  membership, recurring slots, leagues, access, payments. This
                  is the plan anyway — the strategic point is to build it as a
                  product, not as internal tooling.
                </li>
                <li>
                  <strong>The corridor alliance.</strong> A cross-venue league
                  with the other local independents costs nothing, gives
                  players something no platform offers locally, and builds
                  operator relationships before any commercial conversation.
                  Allies first, customers later.
                </li>
              </ol>
            </section>

            <section id="two-companies" className="measure">
              <h2>Two companies, not one</h2>
              <p>
                The venue and the software are different assets with different
                investors, and each matches a different part of the group’s
                credibility.
              </p>
              <ul>
                <li>
                  <strong>VenueCo</strong> — the club. Leisure investors,{" "}
                  <G term="asset finance">asset finance</G>, the
                  operator-investor, the community round. Its story is the
                  business case.
                </li>
                <li>
                  <strong>PlatformCo</strong> — the software. A conventional
                  startup with a founding team whose track record is exactly
                  this kind of build. The venue is its first customer and live
                  testbed, on arm’s-length terms.
                </li>
              </ul>
              <p>
                Separate entities keep the venue’s lease and debt off the
                software company, keep each raise clean, and mean neither can
                sink the other. The operator-ownership idea becomes
                PlatformCo’s go-to-market: early operator customers get founder
                terms — zero commission and a stake — so the coalition lives in
                the cap table rather than in co-op law.
              </p>
            </section>

            <section id="platform-wedge" className="measure">
              <h2>The platform wedge — what the evidence says</h2>
              <p>
                <strong>
                  The pain is real and operators are already acting on it.
                </strong>{" "}
                Playtomic charges setup fees plus a per-booking commission
                (unpublished; sales-quote only) and owns the player
                relationship. Rocket Padel and Padium have already left it over
                access to their own customer data, and a Huddersfield operator
                built white-label booking from day one to “control our customer
                journey”. Meanwhile MATCHi — the operator-friendly alternative
                — is VC-owned and just merged into a 9,000-venue European
                platform.{" "}
                <strong>
                  No operator-owned booking platform exists anywhere in
                  European padel.
                </strong>{" "}
                The ground we’d stand on is genuinely unoccupied.
              </p>
              <p>
                <strong>
                  The five-market pattern says our scope is right.
                </strong>{" "}
                In golf, fitness, restaurants, hotels and delivery, the same
                fight ran and the same lessons fell out:
              </p>
              <ul>
                <li>
                  The operators who did well never boycotted the platform —
                  they <strong>confined it to off-peak</strong> and kept peak
                  inventory and members on their own channels. The venue that
                  leaves a marketplace entirely loses the demand it does want;
                  the venue that lets the marketplace price its peak inventory
                  gets hollowed out (“golfers who are Hot Deal players only
                  play Hot Deals” — discounted marketplace demand never
                  converts to direct customers).
                </li>
                <li>
                  Flat-fee, own-your-data challengers (Resy, Tock, SevenRooms,
                  ChowNow, foreUP) proved the wedge works and built businesses
                  worth hundreds of millions — but none displaced the incumbent
                  alone. The realistic ambition for PlatformCo is being the
                  best operator-side rails in one region and then one country,
                  not killing Playtomic.
                </li>
                <li>
                  Genuine operator ownership survived only where it stayed
                  disciplined: restaurant delivery co-ops run at well under 10%
                  effective commission and are still expanding; Visa and
                  Amadeus turned member consortiums into the world’s
                  infrastructure. The failure mode is also documented:
                  Interflora and FTD’s florists sold their co-op for a one-off
                  payout and watched it destroyed under leveraged owners within
                  a generation. Governance lesson for PlatformCo: operators
                  hold real equity that participates in any upside, and no
                  member — including us — gets control.
                </li>
              </ul>
              <p>
                <strong>Why the timing works, and its limit.</strong> In
                today’s supply-starved market, operators pay commission for
                demand they’d get anyway — the platform’s value is at its
                historic low, which is why the door is open. But Sweden flipped
                from scarcity to glut in about eighteen months, and when courts
                need filling, marketplace demand becomes valuable again. So
                PlatformCo is built for both states: the direct rails own the
                regulars and the peak (valuable in every market condition), and
                Playtomic or its successors stay useful for off-peak discovery.
                Complementary by design, not a war.
              </p>
              <p>
                <strong>Version one is deliberately small.</strong> The
                pre-formed group — the weekly foursome — is most of all
                bookings and needs no matchmaking, no marketplace, no
                liquidity. V1 is: recurring slots (“your Tuesday 7pm, held
                every week”), one-off direct bookings, member pricing, and the
                operator owning every scrap of customer data. The recurring
                slot is the killer feature — it’s a subscription in a market
                where the incumbent is transactional, it guarantees operators
                base-load revenue, and cancelling it means losing your slot.
                Direct-channel incentives are perks, not discounts — a free
                drink costs pence, feels like pounds, walks the player to the
                bar, and no platform contract clause can touch it. Not built in
                v1: matchmaking, open matches, any marketplace — those come
                only if the corridor alliance one day gives them liquidity for
                free.
              </p>
              <p>
                <strong>
                  Two questions to settle in coffees already on the board:
                </strong>{" "}
                what do local operators’ Playtomic contracts actually restrict
                (exclusivity is very unlikely in a market where platforms need
                supply more than supply needs them; price-parity clauses are
                the thing to glance for), and does Playtomic’s API allow
                calendar sync, which decides whether spare inventory flows to
                the marketplace smoothly or has to be partitioned.
              </p>
            </section>

            <section id="corrections" className="measure">
              <h2>The honest corrections from the research</h2>
              <p>
                Two things we believed got weaker, and the plan should absorb
                both.
              </p>
              <p>
                <strong>The exit story is thinner than assumed.</strong> No
                padel club transaction anywhere in Europe has a published price
                or multiple. The UK consolidators build rather than buy — David
                Lloyd, The Padel Club, Powerleague’s new owners are all
                greenfield — and the one fund that did roll up clubs (Triton’s
                LeDap, in the Nordics) wrote down ~€65m and closed most of its
                Swedish estate; distressed clubs sold at warehouse value. So
                “build it and sell to a consolidator” is a possibility, not a
                plan. The venue has to be worth <em>holding</em>: a business
                that pays its people well and throws off cash is the base case,
                and any future sale is upside. That happens to match why we
                want to build it anyway.
              </p>
              <p>
                <strong>Sweden’s other lesson is about size.</strong> The
                mega-clubs failed first; the operator who studied it now
                deliberately builds four-court sites. Our six-court,
                hospitality-led format sits on the right side of that finding,
                and the stop criteria in the business case — rerun the maths if
                the local pipeline grows again — are the mechanism that keeps
                us there.
              </p>
            </section>

            <section id="changes" className="measure">
              <h2>What this note changes</h2>
              <p>
                Almost nothing about the next month, which is the point of good
                strategy: Stage 1 proceeds exactly as boarded, with two
                discovery questions added to the operator coffees and the
                operator-investor conversation given priority among the people
                list. What it changes is what we’re building towards: one
                institution, two companies, and a piece of unoccupied ground —
                the operator-owned rails — that we’re better placed to take
                than anyone currently in the market.
              </p>
            </section>
          </main>

          <footer className="doc">
            Working note · August 2026 · Unfamiliar terms?{" "}
            <Link href="/glossary">Glossary →</Link>
          </footer>
        </div>

        <Toc sections={SECTIONS} />
      </div>
    </div>
  );
}
