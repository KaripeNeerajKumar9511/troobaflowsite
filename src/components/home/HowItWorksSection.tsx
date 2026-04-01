import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Map your factory",
    detail: "SKUs · Routings · Equipment · Demand",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#00C4B4" strokeWidth="1.5">
        <rect x="2" y="2" width="7" height="7" rx="1" />
        <rect x="11" y="2" width="7" height="7" rx="1" />
        <rect x="2" y="11" width="7" height="7" rx="1" />
        <rect x="11" y="11" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Trooba Flow Engine",
    detail: "Variability · Utilisation · Flow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#00C4B4" strokeWidth="1.5">
        <path d="M2 14 Q5 4, 10 10 Q15 16, 18 6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Clear actions",
    detail: "Bottleneck map · What to fix first",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#00C4B4" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" />
        <circle cx="10" cy="10" r="4" />
        <circle cx="10" cy="10" r="1" fill="#00C4B4" />
      </svg>
    ),
  },
];

const HowItWorksSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div
          className="border border-trooba-offwhite/[0.08] rounded-lg p-5 sm:p-6 lg:p-8"
          style={{ backgroundColor: "rgba(30,58,95,0.2)" }}
        >
          <span className="section-label block">How It Works</span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-xl lg:text-2xl text-foreground mb-6 leading-tight">
            From factory data to clear action. Under a week.
          </h2>

          {/* 3-step flow */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col sm:flex-row items-center flex-1 min-w-0">
                {/* Step box */}
                <div
                  className="rounded-md border w-full sm:w-auto sm:flex-1 p-4"
                  style={{ background: "rgba(14,18,24,0.6)", borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {s.icon}
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary font-semibold">
                      STEP {s.num}
                    </span>
                  </div>
                  <span className="font-display font-bold text-[14px] sm:text-[15px] block" style={{ color: "rgba(232,237,242,0.95)" }}>
                    {s.title}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.06em] block mt-1" style={{ color: "rgba(232,237,242,0.55)" }}>
                    {s.detail}
                  </span>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden sm:flex items-center px-2">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path d="M0 8h20M16 3l5 5-5 5" stroke="#00C4B4" strokeWidth="2" />
                      </svg>
                    </div>
                    {/* Mobile: vertical arrow */}
                    <div className="sm:hidden flex justify-center py-1">
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M8 0v16M3 12l5 5 5-5" stroke="#00C4B4" strokeWidth="2" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Divider + reassurance */}
          <div className="mt-6 pt-5 flex flex-wrap justify-center gap-3 sm:gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {["No simulation modelling required", "No months of data prep", "Start seeing results in days"].map((text) => (
              <span
                key={text}
                className="inline-block font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 rounded"
                style={{ color: "#00C4B4", backgroundColor: "rgba(0,196,180,0.08)", border: "1px solid rgba(0,196,180,0.2)" }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HowItWorksSection;
