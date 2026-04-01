import ScrollReveal from "@/components/ScrollReveal";

const ProofSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="section-label block">Proof in the Field</span>
        <h2 className="font-display font-bold text-3xl lg:text-[40px] text-white mb-12 leading-tight">
          Real factories. Not demo data.
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Tarinika */}
        <ScrollReveal>
          <div className="border border-trooba-offwhite/[0.08] rounded-lg p-6 lg:p-8 h-full" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <span className="font-mono text-[12px] tracking-[0.18em] uppercase" style={{ color: "rgb(148,163,180)" }}>Jewelry Manufacturing</span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-trooba-teal px-2 py-1 rounded bg-trooba-teal/10 flex-shrink-0">Completed</span>
            </div>

            <div className="text-[28px] font-display font-bold text-white mb-1">4 weeks → 7 days</div>
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-trooba-teal">&gt; 75% Lead Time Reduction</span>

            {/* Bar chart */}
            <div className="mt-6 mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] w-12" style={{ color: "rgb(148,163,180)" }}>Before</span>
                <div className="flex-1 h-5 bg-trooba-mid/30 rounded relative">
                  <span className="absolute right-2 top-0.5 font-mono text-[12px]" style={{ color: "rgb(148,163,180)" }}>28 days</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] text-trooba-teal w-12">After</span>
                <div className="h-5 bg-trooba-teal/80 rounded relative" style={{ width: "25%" }}>
                  <span className="absolute right-2 top-0.5 font-mono text-[12px] text-white font-semibold">7 days</span>
                </div>
                <span className="font-mono text-xs text-trooba-teal ml-auto">−75%</span>
              </div>
            </div>

            <p className="font-display text-[15px] mb-3" style={{ color: "rgba(232,237,242,0.88)" }}>
              True constraint was lot sizing and queue dynamics — not machine speed.
            </p>
            <p className="font-display italic text-[16px] mb-4" style={{ color: "rgba(232,237,242,0.92)", borderLeft: "3px solid #00C4B4", paddingLeft: "14px", marginTop: "12px" }}>
              "We were solving for the wrong thing."
            </p>
            <p className="font-mono text-[12px] tracking-wider uppercase" style={{ color: "rgb(148,163,180)" }}>
              Tarinika is the founder's manufacturing company.
            </p>
          </div>
        </ScrollReveal>

        {/* Superpacks */}
        <ScrollReveal>
          <div className="border border-trooba-offwhite/[0.08] rounded-lg p-6 lg:p-8 h-full" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <span className="font-mono text-[12px] tracking-[0.18em] uppercase" style={{ color: "rgb(148,163,180)" }}>Corrugated Carton Mfg · ~300 SKUs</span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-trooba-amber px-2 py-1 rounded bg-trooba-amber/10 flex-shrink-0">Live Field Study</span>
            </div>

            <h3 className="text-[22px] font-display font-bold text-white mb-1">Pilot in progress.</h3>
            <span className="font-mono text-[14px] tracking-[0.15em]" style={{ color: "rgb(148,163,180)" }}>Findings updated as they emerge.</span>

            <div className="mt-6 mb-6">
              <h4 className="font-mono text-[12px] tracking-[0.18em] uppercase mb-3" style={{ color: "rgb(148,163,180)" }}>What we're doing</h4>
              <ul className="space-y-2 text-[14px]" style={{ color: "rgba(232,237,242,0.85)" }}>
                <li>· Full factory model being built</li>
                <li>· Shop-floor data collection under way</li>
                <li>· Bottleneck analysis: in progress</li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[12px] tracking-[0.18em] uppercase mb-3" style={{ color: "rgb(148,163,180)" }}>Live Findings</h4>
              <ul className="space-y-2.5 text-[14px]">
                <li className="flex items-center gap-2" style={{ color: "rgba(232,237,242,0.85)" }}>
                  <span className="text-trooba-teal">✓</span> Routing data captured
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(232,237,242,0.85)" }}>
                  <span className="text-trooba-teal">✓</span> Equipment utilisation baseline established
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(232,237,242,0.85)" }}>
                  <span className="w-2 h-2 rounded-full bg-trooba-teal animate-pulse-teal-dot inline-block"></span>
                  Full bottleneck map: in progress
                </li>
              </ul>
            </div>

            <p className="font-mono text-[12px] tracking-wider uppercase mt-6" style={{ color: "rgb(148,163,180)" }}>
              Case study updates as pilot advances.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ProofSection;
