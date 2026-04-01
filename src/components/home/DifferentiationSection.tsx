import ScrollReveal from "@/components/ScrollReveal";

const DifferentiationSection = () => (
  <section className="section-padding px-6" style={{ background: "rgba(0,196,180,0.04)" }}>
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="border border-trooba-offwhite/[0.08] rounded-lg p-8 lg:p-16" style={{ background: "rgba(14,18,24,0.7)" }}>
          <span className="section-label block">What Makes Trooba Different</span>
          <h2 className="font-display font-bold text-3xl lg:text-[40px] text-white mb-4 leading-tight">
            Not a dashboard. Not a planning tool.
          </h2>
          <p className="text-lg max-w-2xl mb-8" style={{ color: "rgba(232,237,242,0.85)" }}>
            Trooba Flow doesn't just show data. It shows how your factory actually behaves — and what to change.
          </p>
          <p className="text-base max-w-2xl mt-3 mb-3" style={{ color: "rgba(232,237,242,0.55)" }}>
            Built on proven system modeling principles that capture real factory behavior — including queues, variability, and resource interactions.
          </p>

          <ul className="space-y-3 max-w-2xl mb-10">
            {[
              "No static reports",
              "No assumptions of fixed lead time",
              "No complex simulation setup",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-trooba-slate shrink-0" />
                <span className="text-lg" style={{ color: "rgba(232,237,242,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg max-w-2xl mb-5" style={{ color: "rgba(232,237,242,0.85)" }}>
            Just clear answers to:
          </p>

          <ul className="space-y-3 max-w-2xl">
            {[
              "Where are we losing time?",
              "Why is it happening?",
              "What should we fix first?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-trooba-teal text-lg font-semibold shrink-0">→</span>
                <span className="text-lg font-medium text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DifferentiationSection;
