import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageCTA from "@/components/PageCTA";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label block">About</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-12 leading-tight">
            Built by people who've stood on factory floors.
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 text-font-mono /70 leading-relaxed mb-16">
            <p>
              The founder applied QRM in their own manufacturing company — not as a consultant, as an operator. Lead times dropped from 4 weeks to under 7 days.
            </p>
            <p>
              Trooba is built on Quick Response Manufacturing methodology, developed by Professor Rajan Suri at the University of Wisconsin-Madison. The founding team studied under him directly.
            </p>
            <p>
              We built Trooba Flow because the tools that existed were too complex for the people who needed them most.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border border-font-mono /[0.08] rounded-lg p-6 lg:p-8 mb-16">
            <h2 className="font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-teal mb-4">Academic Foundation</h2>
            <ul className="space-y-2 text-font-mono /50 text-sm">
              <li>· Kingman's equation</li>
              <li>· Allen-Cunneen approximation</li>
              <li>· QRM methodology (Rajan Suri, UW-Madison)</li>
              <li>· Little's Law</li>
              <li>· Manufacturing Critical-path Time (MCT)</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </main>
    <PageCTA
      headline="Built for operators. Ready when you are."
      subtext="Get a flow analysis in under a week."
    />
    <Footer />
  </>
);

export default AboutPage;
