import ScrollReveal from "@/components/ScrollReveal";

const personas = [
  { title: "Operations/Plant Managers", phrase: "Prove it. Fix it." },
  { title: "VP Operations / COO", phrase: "Decide with a model, not instinct." },
  { title: "CI Leaders", phrase: "Quantify before you commit." },
];

const stats = [
  { value: "30–75%", label: "Lead time reduction" },
  { value: "15–30%", label: "Capacity released" },
  { value: "10×", label: "Faster decisions" },
  { value: "< 1 week", label: "Data to first bottleneck map" },
];

const WhoSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Built For */}
        <ScrollReveal>
          <div className="border-l-4 border-l-primary rounded-lg p-5 sm:p-6 lg:p-8 h-full flex flex-col" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <span className="section-label block">Built For</span>
            <h2 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-4 leading-tight">
              For the people who own the problem.
            </h2>
            <div>
              {personas.map((p, i) => (
                <div
                  key={p.title}
                  className="flex items-baseline justify-between gap-4 py-2.5"
                  style={{ borderBottom: i < personas.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                >
                  <span className="font-display font-medium text-foreground text-[14px] sm:text-[15px] shrink-0">{p.title}</span>
                  <span className="text-[13px] sm:text-[14px] text-right" style={{ color: "#d1d5db" }}>{p.phrase}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: What to Expect */}
        <ScrollReveal>
          <div className="border-l-4 border-l-primary rounded-lg p-5 sm:p-6 lg:p-8 h-full flex flex-col" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
            <span className="section-label block">What to Expect</span>
            <div className="grid grid-cols-2 gap-3 mt-2 flex-1">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg p-3 sm:p-4 lg:p-6 text-center flex flex-col justify-center" style={{ backgroundColor: "#141C26", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-display font-bold text-foreground text-[24px] sm:text-[28px] lg:text-[36px] mb-1">{s.value}</div>
                  <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "rgb(148,163,180)", fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(148,163,180)" }}>
              Based on Real Factory Results and Proven System Modeling Principles.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhoSection;
