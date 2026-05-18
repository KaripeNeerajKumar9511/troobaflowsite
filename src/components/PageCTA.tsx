import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  headline: string;
  subtext: string;
}

const PageCTA = ({ headline, subtext }: Props) => (
  <section className="py-16 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
          {headline}
        </h2>
        <p className="text-base mb-6" style={{ color: "rgba(232,237,242,0.75)" }}>
          {subtext}
        </p>
        <Link
          to="/request-access"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-trooba-teal text-trooba-navy font-display font-semibold text-lg hover:bg-trooba-teal-hover transition-colors"
          style={{ boxShadow: "0 0 24px rgba(0,196,180,0.18)" }}
        >
          → Request a Flow Analysis
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default PageCTA;
