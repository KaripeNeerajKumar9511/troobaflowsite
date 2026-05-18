import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  ["Static reports", "System behavior"],
  ["Fixed assumptions", "Dynamic flow"],
  ["Data overload", "Clear actions"],
  ["Requires experts", "Built for operators"],
];

const pills = [
  "No static reports",
  "No fixed assumptions",
  "No complex setup",
];

const quotes = [
  "Delays don't happen at machines. They happen between them.",
  "If you can't see flow, you can't improve it.",
];

const questions = [
  "Where are we losing time?",
  "Why is it happening?",
  "What should we fix first?",
];

const DifferentiationPairSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div
          className="border-l-4 border-l-primary rounded-lg p-6 sm:p-8 lg:p-12"
          style={{ backgroundColor: "rgba(30,58,95,0.2)" }}
        >
          {/* ── Header ── */}
          <span className="section-label block mb-4">What Makes Trooba Different</span>
          <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[32px] text-foreground leading-tight mb-8">
            Not a dashboard. Not a planning tool.
          </h2>

          {/* ── Two Columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left: Comparison table */}
            <div>
              <div>
                {/* Table header */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="px-3 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "#9CA3AF" }}>
                    Other tools
                  </div>
                  <div className="px-2">
                    <span className="text-xs font-semibold" style={{ color: "#00C4B4" }}>→</span>
                  </div>
                  <div className="px-3 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "#00C4B4" }}>
                    Trooba Flow
                  </div>
                </div>
                {/* Rows */}
                {rows.map(([other, trooba], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-0"
                    style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
                  >
                    <div
                      className="px-3 py-2.5 text-[13px] sm:text-[14px] line-through"
                      style={{ color: "#6B7280", textDecorationColor: "#6B7280" }}
                    >
                      {other}
                    </div>
                    <div className="px-2">
                      <span className="text-xs" style={{ color: "#00C4B4" }}>→</span>
                    </div>
                    <div className="px-3 py-2.5 text-[13px] sm:text-[14px] font-medium" style={{ color: "#FFFFFF" }}>
                      {trooba}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pills + quotes */}
            <div className="flex flex-col">
              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="inline-block px-3 py-1.5 rounded-full border border-border/40 text-[12px] sm:text-[13px] font-mono tracking-wide"
                    style={{ color: "rgba(232,237,242,0.6)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Pull-quotes */}
              <div className="space-y-4">
                {quotes.map((q) => (
                  <p
                    key={q}
                    className="pl-4 border-l-2 border-primary text-sm sm:text-base lg:text-lg font-display font-medium text-foreground/90 leading-snug"
                  >
                    {q}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom row ── */}
          <div className="pt-6" style={{ borderTop: "1px solid rgba(232,237,242,0.1)" }}>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {questions.map((q, i) => (
                <span key={q} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-muted-foreground/40 hidden sm:inline">·</span>
                  )}
                  <span className="text-primary text-sm font-semibold shrink-0">→</span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-primary whitespace-nowrap">
                    {q}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DifferentiationPairSection;
