import ScrollReveal from "@/components/ScrollReveal";

const WhyHiddenSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="section-label block">The Hidden Drivers</span>
        <h2 className="font-display font-bold text-3xl lg:text-[40px] text-white mb-4 leading-tight">
          You can't fix what you can't see
        </h2>
        <p className="text-lg max-w-2xl mb-8" style={{ color: "rgba(232,237,242,0.85)" }}>
          What actually drives delays isn't just processing time. It's:
        </p>
        <ul className="space-y-3 max-w-2xl mb-8">
          {[
            "Queue buildup between operations",
            "Resource conflicts across machines and labor",
            "Variability in demand and execution",
            "How everything interacts under load",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-trooba-teal shrink-0" />
              <span className="text-lg" style={{ color: "rgba(232,237,242,0.85)" }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg max-w-2xl" style={{ color: "rgba(232,237,242,0.85)" }}>
          Without seeing this clearly, every improvement is guesswork.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyHiddenSection;
