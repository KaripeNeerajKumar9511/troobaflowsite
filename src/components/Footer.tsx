import { Link } from "react-router-dom";
import markSrc from "@/assets/trooba-mark-dark.svg";

const Footer = () => (
<footer className="border-t border-trooba-offwhite/[0.08] py-5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <img src={markSrc} alt="Trooba" className="h-7" />
        <span className="font-display font-semibold text-white text-[20px] tracking-tight uppercase">trooba <span className="text-primary">flow</span></span>
      </div>
      <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-trooba-teal">
        Factory Flow Intelligence
      </span>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:flex md:flex-row md:gap-8 mt-3 text-sm text-center" style={{ color: "rgba(232,237,242,0.82)" }}>
        <Link to="/how-it-works" className="hover:text-trooba-teal transition-colors">How It Works</Link>
        <Link to="/proof" className="hover:text-trooba-teal transition-colors">Proof</Link>
        <Link to="/about" className="hover:text-trooba-teal transition-colors">About</Link>
        <Link to="/request-access" className="hover:text-trooba-teal transition-colors">Request a Flow Analysis</Link>
      </div>
      <p className="font-mono text-[12px] tracking-wider uppercase" style={{ color: "rgb(148,163,180)" }}>
        © 2026 Trooba Technologies
      </p>
    </div>
  </footer>
);

export default Footer;
