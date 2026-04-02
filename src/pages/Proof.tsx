import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageCTA from "@/components/PageCTA";

const ProofPage = () => (
  <>
    <Navbar />
    <main className="pt-16 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label block">Proof</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-16 leading-tight">
            Real factories. Not demo data.
          </h1>
        </ScrollReveal>

        {/* Tarinika */}
        <ScrollReveal>
          <div className="border border-font-mono/[0.08] rounded-lg p-8 lg:p-12 mb-8" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid block mb-1">Jewelry Manufacturing</span>
                <h2 className="font-display font-bold text-2xl text-white">Tarinika</h2>
              </div>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-trooba-teal px-3 py-1.5 rounded bg-trooba-teal/10">Completed</span>
            </div>

            <div className="text-[36px] font-display font-bold text-white mb-2">4 weeks → 7 days</div>
            <span className="font-mono text-sm tracking-[0.18em] uppercase text-trooba-teal block mb-8">&gt; 75% Lead Time Reduction</span>

            <div className="mb-8 space-y-3 max-w-md">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-trooba-mid w-12">Before</span>
                <div className="flex-1 h-6 bg-trooba-mid/30 rounded relative">
                  <span className="absolute right-2 top-1 font-mono text-[10px] text-trooba-mid">28 days</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-trooba-teal w-12">After</span>
                <div className="h-6 bg-trooba-teal/80 rounded relative" style={{ width: "25%" }}>
                  <span className="absolute right-2 top-1 font-mono text-[10px] text-trooba-navy">7 days</span>
                </div>
                <span className="font-mono text-sm text-trooba-teal ml-auto">−75%</span>
              </div>
            </div>

            <p className="text-font-mono/60 mb-3">
              True constraint was lot sizing and queue dynamics — not machine speed. The team had been optimizing individual machine throughput for years, missing the systemic bottleneck entirely.
            </p>
            <p className="text-font-mono/40 italic mb-4">"We were solving for the wrong thing."</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-trooba-mid">Tarinika is the founder's manufacturing company.</p>
          </div>
        </ScrollReveal>

        {/* Superpacks */}
        <ScrollReveal>
          <div className="border border-font-mono/[0.08] rounded-lg p-8 lg:p-12 mb-16" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid block mb-1">Corrugated Carton Mfg · ~300 SKUs</span>
                <h2 className="font-display font-bold text-2xl text-white">Superpacks</h2>
              </div>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-trooba-amber px-3 py-1.5 rounded bg-trooba-amber/10">Live Field Study</span>
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-1">Pilot in progress.</h3>
            <span className="font-mono text-xs tracking-[0.15em] text-trooba-mid block mb-8">Findings updated as they emerge.</span>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-3">What we're doing</h4>
                <ul className="space-y-2 text-font-mono/50 text-sm">
                  <li>· Full factory model being built — routings, equipment, demand patterns</li>
                  <li>· Shop-floor data collection under way across all major operations</li>
                  <li>· Bottleneck analysis and recommendations: in progress</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-3">Live Findings</h4>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-center gap-2 text-font-mono/60"><span className="text-trooba-teal">✓</span> Routing data captured for all major product families</li>
                  <li className="flex items-center gap-2 text-font-mono/60"><span className="text-trooba-teal">✓</span> Equipment utilisation baseline established</li>
                  <li className="flex items-center gap-2 text-font-mono/60"><span className="w-2 h-2 rounded-full bg-trooba-teal animate-pulse-teal-dot inline-block"></span> Full bottleneck map: in progress</li>
                </ul>
              </div>
            </div>

            <p className="font-mono text-[10px] tracking-wider uppercase text-trooba-mid mt-8">Case study updates as pilot advances.</p>
          </div>
        </ScrollReveal>

        {/* Methodology */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "How we collect data", desc: "Guided templates, on-site observation, and direct integration with your existing systems." },
              { title: "Confidence tiers", desc: "Every finding is tagged with a confidence level based on data quality and validation depth." },
              { title: "What we don't promise", desc: "We don't guarantee specific outcomes. We provide the model and the math — you make the decisions." },
            ].map((m) => (
              <div key={m.title} className="border border-font-mono/[0.08] rounded-lg p-6">
                <h3 className="font-display font-bold text-white text-base mb-2">{m.title}</h3>
                <p className="text-font-mono/50 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Industries */}
        <ScrollReveal>
          <h2 className="font-display font-bold text-xl text-white mb-6">Industries validated</h2>
          <div className="flex flex-wrap gap-3">
            {["High-SKU discrete manufacturing", "Corrugated & packaging", "Jewelry & accessories", "Complex routing environments"].map((ind) => (
              <div key={ind} className="inline-flex items-center gap-2 border border-trooba-teal/20 rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-trooba-teal flex-shrink-0" />
                <span className="text-font-mono/80 text-sm">{ind}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
    <PageCTA
      headline="Want to see this for your factory?"
      subtext="Get a flow analysis in under a week."
    />
    <Footer />
  </>
);

export default ProofPage;
