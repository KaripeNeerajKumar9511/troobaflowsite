import ScrollReveal from "@/components/ScrollReveal";

const rows = [
  ["Static reports", "System behavior"],
  ["Fixed assumptions", "Dynamic flow"],
  ["Data overload", "Clear actions"],
  ["Requires experts", "Built for operators"],
];

const quotes = [
  "Your factory is a system. Start treating it like one.",
  "Delays don't happen at machines. They happen between them.",
  "If you can't see flow, you can't improve it.",
];

const WhyDifferentSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <span className="section-label inline-block mb-6">Why Trooba Flow</span>
        <h2 className="font-display font-bold text-[28px] md:text-[40px] leading-[1.15] text-foreground mb-10">
          Most tools tell you what happened.<br className="hidden md:block" /> We show you why.
        </h2>

        {/* Comparison table */}
        <div className="rounded-lg border border-border overflow-hidden mb-14">
          <div className="grid grid-cols-2">
            <div className="px-5 py-3 bg-muted/50 font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Other tools
            </div>
            <div className="px-5 py-3 bg-muted/50 font-mono text-xs tracking-widest uppercase text-trooba-teal">
              Trooba Flow
            </div>
          </div>
          {rows.map(([other, trooba], i) => (
            <div key={i} className="grid grid-cols-2 border-t border-border">
              <div className="px-5 py-4 text-muted-foreground/70 text-base line-through decoration-muted-foreground/30">
                {other}
              </div>
              <div className="px-5 py-4 text-foreground text-base font-medium">
                {trooba}
              </div>
            </div>
          ))}
        </div>

        {/* Pull-quotes */}
        <div className="space-y-6">
          {quotes.map((q) => (
            <p
              key={q}
              className="pl-5 border-l-2 border-trooba-teal text-xl md:text-2xl font-display font-medium text-foreground/90 leading-snug"
            >
              {q}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyDifferentSection;
