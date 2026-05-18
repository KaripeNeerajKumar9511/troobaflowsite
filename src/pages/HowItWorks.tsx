import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageCTA from "@/components/PageCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does setup take?", a: "Most factories are modelled within a week. We guide you through data collection and handle the modelling ourselves." },
  { q: "What data do I need?", a: "Product routings, equipment lists, processing times, and demand data. We provide templates and work with whatever format you have." },
  { q: "How accurate are results?", a: "Results are based on proven queuing theory mathematics. Accuracy improves with data quality, and we validate against your observed lead times." },
  { q: "Do I need queuing theory expertise?", a: "No. Trooba Flow translates the math into plain-language actions. You see bottleneck maps and ranked recommendations, not equations." },
  { q: "How is this different from our ERP?", a: "Your ERP schedules work with fixed lead times. Trooba Flow models how work actually flows — capturing variability, queue dynamics, and utilisation effects your ERP can't see." },
  { q: "Can I run what-ifs without changing my live model?", a: "Yes. The What-If Studio lets you test any scenario — adding equipment, changing lot sizes, shifting demand — without affecting your baseline model." },
];

const HowItWorksPage = () => (
  <>
    <Navbar />
    <main className="pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label block">How It Works</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-12 leading-tight">
            The science. In plain language.
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display font-bold text-xl text-white mb-4">The core math</h2>
            <p className="text-font-mono/70 leading-relaxed">
              Kingman's equation: as a work cell approaches full utilisation, queue time grows exponentially — not linearly. At 80% utilisation, lead time is 4× baseline. At 90%, it's 9×. Trooba Flow makes this curve visible for every operation in your factory.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display font-bold text-xl text-white mb-4">What you input</h2>
            <ul className="space-y-2 text-font-mono/70">
              <li>· Products and SKUs — demand, lot sizes</li>
              <li>· Routings — operations in sequence</li>
              <li>· Equipment groups — quantities, reliability</li>
              <li>· Processing times — setup and run per operation</li>
              <li>· Variability estimates (guided)</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display font-bold text-xl text-white mb-4">What you get</h2>
            <ul className="space-y-2 text-font-mono/70">
              <li>· Bottleneck map — ranked by queue pressure</li>
              <li>· Lead time waterfall — where time is spent per product</li>
              <li>· What-If comparisons — before vs after any change</li>
              <li>· Action list — ranked by throughput impact</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display font-bold text-xl text-white mb-4">What Trooba is NOT</h2>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Not an ERP or scheduling tool</li>
              <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Not a discrete event simulation</li>
              <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Not a reporting dashboard</li>
              <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Not an AI black box — every result is traceable math</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <h2 className="font-display font-bold text-xl text-white mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-font-mono/[0.08] rounded-lg px-6">
                  <AccordionTrigger className="text-white font-display font-medium text-left hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-font-mono/60 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </main>
    <PageCTA
      headline="See how it applies to your factory"
      subtext="Get a flow analysis in under a week."
    />
    <Footer />
  </>
);

export default HowItWorksPage;
