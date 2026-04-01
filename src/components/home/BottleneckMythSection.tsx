import ScrollReveal from "@/components/ScrollReveal";

const BottleneckMythSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <span className="section-label inline-block mb-6">Hidden Constraints</span>
        <h2 className="font-display font-bold text-[28px] md:text-[40px] leading-[1.15] text-foreground mb-6">
          Your bottleneck is not where you think it is
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Most teams focus on the busiest machine.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          But delays are caused by:
        </p>

        <ul className="space-y-3 mb-8 pl-1">
          {[
            "Queues building up upstream",
            "Downstream blocking",
            "Resource conflicts across operations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-trooba-teal shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg text-muted-foreground leading-relaxed">
          The real constraint is often hidden — until you see the system.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default BottleneckMythSection;
