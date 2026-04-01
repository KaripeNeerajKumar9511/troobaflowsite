import ScrollReveal from "@/components/ScrollReveal";

const items = [
  "Your actual bottleneck — not the one you assumed",
  "Where work is piling up between operations",
  "Why lead time is increasing",
  "Where capacity is being lost",
  "What to fix first",
];

const FirstSessionSection = () => (
  <section className="py-20 md:py-28 px-6" style={{ background: "rgba(0,196,180,0.04)" }}>
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <span className="section-label inline-block mb-6">First Session</span>
        <h2 className="font-display font-bold text-[28px] md:text-[40px] leading-[1.15] text-foreground mb-8">
          What you'll see in your first session
        </h2>

        <ul className="space-y-3 pl-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-trooba-teal shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  </section>
);

export default FirstSessionSection;
