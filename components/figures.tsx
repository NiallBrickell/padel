/* The four inline SVG diagrams, ported essentially verbatim from the original
   static site. They are theme-aware via the CSS variables / classes defined in
   globals.css (.sT, .sL, .bar, .bandf, .st1–.st5, .noden, .flowA, .phase1, …). */

export function PipelineAbsorptionFigure() {
  return (
    <figure className="fig breakout">
      <svg
        viewBox="0 0 660 252"
        role="img"
        aria-label="Bar chart: implied average utilisation across all 65 catchment courts at end-2027 under three player-growth scenarios — 34% if growth stops dead, 54% at half the national growth rate, 74%+ on the national trajectory — against the venue's break-even band of 50 to 55% utilisation. The middle scenario sits right at break-even; only the growth-stops-dead scenario falls below it."
      >
        <line className="gline" x1="285" y1="42" x2="285" y2="196" />
        <line className="gline" x1="515" y1="42" x2="515" y2="196" />
        <line className="gline" x1="630" y1="42" x2="630" y2="196" />
        <rect className="bandf" x="400" y="42" width="23" height="154" />
        <line className="bandl" x1="400" y1="42" x2="400" y2="196" />
        <line className="bandl" x1="423" y1="42" x2="423" y2="196" />
        <text className="sW" x="411" y="32" textAnchor="middle">
          break-even 50–55%
        </text>

        <text className="sL" x="160" y="66" textAnchor="end">
          Growth stops dead
        </text>
        <text className="sM" x="160" y="80" textAnchor="end">
          ~10,000 players
        </text>
        <rect className="bar" x="170" y="55" width="156" height="26" rx="3" />
        <text className="sL" x="334" y="73" textAnchor="start">
          ~34%
        </text>

        <text className="sL" x="160" y="116" textAnchor="end">
          Half national growth
        </text>
        <text className="sM" x="160" y="130" textAnchor="end">
          ~16,000 players
        </text>
        <rect className="bar" x="170" y="105" width="248" height="26" rx="3" />
        <text className="sL" x="426" y="123" textAnchor="start">
          ~54%
        </text>

        <text className="sL" x="160" y="166" textAnchor="end">
          National trajectory
        </text>
        <text className="sM" x="160" y="180" textAnchor="end">
          ~22,000+ players
        </text>
        <rect className="bar" x="170" y="155" width="340" height="26" rx="3" />
        <text className="sL" x="518" y="173" textAnchor="start">
          ~74%+
        </text>

        <line className="axis" x1="170" y1="196" x2="630" y2="196" />
        <text className="sM" x="170" y="214" textAnchor="middle">
          0%
        </text>
        <text className="sM" x="285" y="214" textAnchor="middle">
          25%
        </text>
        <text className="sM" x="400" y="214" textAnchor="middle">
          50%
        </text>
        <text className="sM" x="515" y="214" textAnchor="middle">
          75%
        </text>
        <text className="sM" x="630" y="214" textAnchor="middle">
          100%
        </text>
        <text className="sM" x="400" y="240" textAnchor="middle">
          implied average utilisation across all ~65 courts, end-2027
        </text>
      </svg>
      <figcaption>
        The pipeline test: with the full pipeline now approved (~65 courts), the
        growth scenario clears the venue&rsquo;s 50–55% break-even comfortably,
        the middle scenario sits right at it, and only growth-stops-dead falls
        below — in a moderate-growth world, differentiation decides who wins.
      </figcaption>
    </figure>
  );
}

export function FundingStackFigure() {
  return (
    <figure className="fig breakout">
      <svg
        viewBox="0 0 680 402"
        role="img"
        aria-label="Layered diagram of the Route A funding stack totalling about £950k: founder capital of £75–100k at the base, Start Up Loans up to £100k, asset finance of £300–350k, landlord contribution of £50–100k, and a £250–350k equity round on top. Start Up Loans plus asset finance make up roughly £450k of debt across the structure."
      >
        <text className="sT" x="210" y="20" textAnchor="middle">
          ~£950k total requirement
        </text>

        <rect className="st5" x="110" y="35" width="200" height="102" rx="3" />
        <rect className="st4" x="110" y="140" width="200" height="34" rx="3" />
        <rect className="st3" x="110" y="177" width="200" height="119" rx="3" />
        <rect className="st2" x="110" y="299" width="200" height="34" rx="3" />
        <rect className="st1" x="110" y="336" width="200" height="34" rx="3" />

        <line className="lead" x1="312" y1="86" x2="330" y2="86" />
        <line className="lead" x1="312" y1="157" x2="330" y2="157" />
        <line className="lead" x1="312" y1="236" x2="330" y2="236" />
        <line className="lead" x1="312" y1="316" x2="330" y2="316" />
        <line className="lead" x1="312" y1="353" x2="330" y2="353" />

        <text className="sL" x="338" y="82">
          Equity round — £250–350k
        </text>
        <text className="sS" x="338" y="97">
          angels / EIS / crowdfunding · 25–35% dilution
        </text>

        <text className="sL" x="338" y="154">
          Landlord contribution — £50–100k
        </text>
        <text className="sS" x="338" y="169">
          rent-free + capital, priced into the lease
        </text>

        <text className="sL" x="338" y="232">
          Asset finance — £300–350k
        </text>
        <text className="sS" x="338" y="247">
          secured on courts &amp; fit-out · ~8–14% APR · 3–7 yrs
        </text>

        <text className="sL" x="338" y="313">
          Start Up Loans — up to £100k
        </text>
        <text className="sS" x="338" y="328">
          £25k × up to 4 founders · 7.5% fixed · no PG
        </text>

        <text className="sL" x="338" y="350">
          Founder capital — £75–100k
        </text>
        <text className="sS" x="338" y="365">
          required by every other layer
        </text>

        <path className="brk" d="M 98 177 L 90 177 L 90 333 L 98 333" />
        <text className="sS" x="82" y="248" textAnchor="end">
          ≈£450k
        </text>
        <text className="sM" x="82" y="262" textAnchor="end">
          debt across
        </text>
        <text className="sM" x="82" y="275" textAnchor="end">
          the structure
        </text>

        <text className="sM" x="210" y="392" textAnchor="middle">
          layer heights proportional to amount (upper of range)
        </text>
      </svg>
      <figcaption>
        The Route A stack: five sources, each taking the slice of risk it is built
        for. The two middle-lower layers — Start Up Loans and asset finance — are
        the ~£450k of blended debt the base case services with cover to spare;
        equity sits on top absorbing the pre-revenue venture risk.
      </figcaption>
    </figure>
  );
}

export function FinancingDecisionMapFigure() {
  return (
    <figure className="fig breakout">
      <svg
        viewBox="0 0 720 400"
        role="img"
        aria-label="Decision map of the five financing routes. A four-week validation phase prices routes A and B in the same conversations. If the raise closes, routes A or B build the full venue now for about £950k. If the raise stalls, route C builds a £250–450k small venue at a host club, trades 12 to 18 months, then refinances the full venue off filed accounts. Route D, franchising, is taken only if the experience gap matters more than the concept. Route E, not-for-profit with LTA loans, is a fork in what is being built and needs an explicit decision."
      >
        <defs>
          <marker
            id="arrA"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path className="mA" d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
          <marker
            id="arrD"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path className="mD" d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>

        <rect className="noden" x="20" y="60" width="180" height="88" rx="8" />
        <text className="sT" x="110" y="88" textAnchor="middle">
          Validation
        </text>
        <text className="sS" x="110" y="107" textAnchor="middle">
          weeks 1–4 · £5–10k
        </text>
        <text className="sS" x="110" y="123" textAnchor="middle">
          prices A &amp; B in the
        </text>
        <text className="sS" x="110" y="137" textAnchor="middle">
          same conversations
        </text>

        <rect className="nodeb" x="470" y="28" width="230" height="96" rx="8" />
        <text className="sT" x="585" y="54" textAnchor="middle">
          A / B — full venue now
        </text>
        <text className="sS" x="585" y="73" textAnchor="middle">
          ~£950k · full concept in ~1 yr
        </text>
        <text className="sS" x="585" y="89" textAnchor="middle">
          five-layer stack (A) or an
        </text>
        <text className="sS" x="585" y="103" textAnchor="middle">
          institutional anchor (B)
        </text>

        <rect className="nodeb" x="470" y="170" width="230" height="88" rx="8" />
        <text className="sT" x="585" y="196" textAnchor="middle">
          C — small venue first
        </text>
        <text className="sS" x="585" y="215" textAnchor="middle">
          £250–450k at a host club
        </text>
        <text className="sS" x="585" y="231" textAnchor="middle">
          little or no equity round
        </text>

        <line
          className="flowA"
          x1="200"
          y1="82"
          x2="466"
          y2="70"
          markerEnd="url(#arrA)"
        />
        <text className="sA" x="330" y="62">
          raise closes
        </text>

        <line
          className="flowA"
          x1="200"
          y1="126"
          x2="466"
          y2="200"
          markerEnd="url(#arrA)"
        />
        <text className="sA" x="268" y="176">
          raise stalls —
        </text>
        <text className="sA" x="268" y="191">
          the fallback becomes the plan
        </text>

        <path
          className="flowD"
          d="M 700 214 L 714 214 L 714 76 L 704 76"
          markerEnd="url(#arrD)"
        />
        <text className="sS" x="585" y="279" textAnchor="middle" fontStyle="italic">
          trade 12–18 months, then refinance
        </text>
        <text className="sS" x="585" y="293" textAnchor="middle" fontStyle="italic">
          the full venue off filed accounts
        </text>

        <path className="flowD" d="M 110 148 L 110 306" markerEnd="url(#arrD)" />
        <path
          className="flowD"
          d="M 110 250 L 480 250 L 480 306"
          markerEnd="url(#arrD)"
        />

        <rect className="noded" x="30" y="310" width="310" height="74" rx="8" />
        <text className="sL" x="46" y="336">
          D — franchise first
        </text>
        <text className="sS" x="46" y="354">
          taken only if the experience gap matters
        </text>
        <text className="sS" x="46" y="368">
          more than the concept · royalties for good
        </text>
        <text className="sM" x="122" y="302" fontStyle="italic">
          if experience &gt; position
        </text>

        <rect className="noded" x="380" y="310" width="310" height="74" rx="8" />
        <text className="sL" x="396" y="336">
          E — not-for-profit / LTA loans
        </text>
        <text className="sS" x="396" y="354">
          a fork in what we&rsquo;re building — cheapest money,
        </text>
        <text className="sS" x="396" y="368">
          no equity upside · explicit decision, not a default
        </text>
        <text className="sM" x="140" y="243" fontStyle="italic">
          if we want the club + a living, not an exit
        </text>
      </svg>
      <figcaption>
        The current lean, drawn: validation prices A and B in one set of
        conversations; C is the genuine fallback that becomes the plan if the raise
        stalls — and still reaches the full venue via filed accounts. D and E sit
        off the main line, each behind its own explicit decision.
      </figcaption>
    </figure>
  );
}

export function NinetyDayTimelineFigure() {
  return (
    <figure className="fig breakout">
      <svg
        viewBox="0 0 720 240"
        role="img"
        aria-label="Timeline of the 90-day validation plan in three phases: weeks 1 to 4 validate — venue visits, agent briefs, broker and SEIF conversations, operator interviews; weeks 5 to 8 structure — incorporation, EIS advance assurance, rebuilt model and building shortlist, investor one-pager; weeks 9 to 13 commit or stop — heads of terms, loan and finance applications, and a formal decision against the stop criteria. Total cash at risk to week 13 is about £5–10k."
      >
        <text className="sT" x="40" y="24">
          Validate
        </text>
        <text className="sT" x="240" y="24">
          Structure
        </text>
        <text className="sT" x="440" y="24">
          Commit — or stop
        </text>

        <rect className="phase1" x="40" y="34" width="196" height="26" rx="4" />
        <rect className="phase2" x="240" y="34" width="196" height="26" rx="4" />
        <rect className="phase3" x="440" y="34" width="250" height="26" rx="4" />

        <line className="axis" x1="40" y1="72" x2="690" y2="72" />
        <text className="sM" x="40" y="88">
          wk 1
        </text>
        <text className="sM" x="240" y="88" textAnchor="middle">
          wk 5
        </text>
        <text className="sM" x="440" y="88" textAnchor="middle">
          wk 9
        </text>
        <text className="sM" x="690" y="88" textAnchor="end">
          wk 13
        </text>

        <line className="gline" x1="240" y1="100" x2="240" y2="196" />
        <line className="gline" x1="440" y1="100" x2="440" y2="196" />

        <text className="sS" x="40" y="116">
          Visit every venue; log real
        </text>
        <text className="sS" x="40" y="131">
          peak availability
        </text>
        <text className="sS" x="40" y="150">
          Brief agents (SHW, GS&amp;P)
        </text>
        <text className="sS" x="40" y="169">
          Broker terms + SEIF call
        </text>
        <text className="sS" x="40" y="188">
          Talk to Eixo &amp; Smash founders
        </text>

        <text className="sS" x="252" y="116">
          Incorporate; founders&rsquo; agreement
        </text>
        <text className="sS" x="252" y="131">
          &amp; PG policy in writing
        </text>
        <text className="sS" x="252" y="150">
          EIS advance assurance
        </text>
        <text className="sS" x="252" y="169">
          Rebuild model; shortlist buildings
        </text>
        <text className="sS" x="252" y="188">
          One-pager; soft-circle the round
        </text>

        <text className="sS" x="452" y="116">
          Heads of terms on a building
        </text>
        <text className="sS" x="452" y="135">
          Start Up Loans ×4; asset finance
        </text>
        <text className="sS" x="452" y="150">
          to credit approval; round open
        </text>
        <text className="sS" x="452" y="169">
          Decision vs §12 stop criteria
        </text>
        <text className="sS" x="452" y="188">
          If go: planning in, open in 6–9 mo
        </text>

        <line className="bandl" x1="690" y1="30" x2="690" y2="196" />
        <text className="sW" x="690" y="216" textAnchor="end">
          week 13: formal commit-or-stop decision
        </text>
        <text className="sM" x="40" y="216">
          total cash at risk to week 13: ~£5–10k
        </text>
      </svg>
      <figcaption>
        Thirteen weeks from first venue visit to a commit-or-stop decision, with
        the sunk cost held to the validation budget throughout.
      </figcaption>
    </figure>
  );
}
