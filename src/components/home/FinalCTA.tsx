import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => (
  <section className="section-padding px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] text-white mb-4 leading-tight">
          Stop guessing what's slowing your factory down
        </h2>
        <p className="text-[18px] mb-8" style={{ color: "rgba(232,237,242,0.88)" }}>
          See exactly where time is being lost — and what to fix first.
        </p>
        <p className="text-xl font-display font-semibold text-trooba-teal mb-6">
          Get a flow analysis of your factory in under a week.
        </p>
        <div className="flex justify-center">
          <Link
            to="/request-access"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-trooba-teal text-trooba-navy font-display font-semibold text-lg hover:bg-trooba-teal-hover transition-colors"
            style={{ boxShadow: "0 0 24px rgba(0,196,180,0.18)" }}
          >
            → Request a Flow Analysis
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-0 gap-1 mt-6" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgb(255,255,255)" }}>
          <span className="md:after:content-['_·_']">Flow Analysis Session</span>
          <span className="md:after:content-['_·_']">Your Actual Data</span>
          <span>No Commitment Required</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
