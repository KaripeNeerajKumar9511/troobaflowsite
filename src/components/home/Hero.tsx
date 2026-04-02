import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroDiagram = () => {
  const [queue, setQueue] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue((q) => (q >= 14 ? 8 : q + 1));
    }, 700);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <svg viewBox="0 0 480 260" className="w-full max-w-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cell 1 - Cutting */}
      <rect x="10" y="80" width="110" height="70" rx="6" stroke="#00C4B4" strokeWidth="2" fill="#0C0F14" />
      <text x="65" y="110" textAnchor="middle" fill="#E8EDF2" fontSize="13" fontFamily="DM Sans">Op 1</text>
      <text x="65" y="132" textAnchor="middle" fill="#00C4B4" fontSize="10" fontFamily="DM Mono" letterSpacing="0.1em">72% UTIL.</text>

      {/* Arrow 1 - fast */}
      <line x1="125" y1="115" x2="175" y2="115" stroke="#00C4B4" strokeWidth="2" className="flow-fast" />
      <polygon points="172,110 180,115 172,120" fill="#00C4B4" />

      {/* Cell 2 - Printing (bottleneck) */}
      <rect x="185" y="80" width="110" height="70" rx="6" stroke="#F59E0B" strokeWidth="2.5" fill="rgba(61,26,0,0.4)" className="animate-pulse-amber" />
      <text x="240" y="110" textAnchor="middle" fill="#E8EDF2" fontSize="13" fontFamily="DM Sans">Op 2</text>
      <text x="240" y="132" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="DM Mono" letterSpacing="0.1em">91% UTIL.</text>

      {/* Queue label */}
      <text x="240" y="65" textAnchor="middle" fill="#F59E0B" fontSize="11" fontFamily="DM Mono" letterSpacing="0.1em">
        QUEUE: {queue}
      </text>
      <text x="240" y="168" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="DM Mono" letterSpacing="0.15em">BOTTLENECK</text>

      {/* Arrow 2 - slow */}
      <line x1="300" y1="115" x2="350" y2="115" stroke="#94A3B4" strokeWidth="2" className="flow-slow" />
      <polygon points="347,110 355,115 347,120" fill="#94A3B4" opacity="0.6" />

      {/* Cell 3 - Finishing */}
      <rect x="360" y="80" width="110" height="70" rx="6" stroke="#4A5868" strokeWidth="1.5" fill="#0C0F14" />
      <text x="415" y="110" textAnchor="middle" fill="rgba(232,237,242,0.80)" fontSize="16" fontWeight="600" fontFamily="DM Sans">Op 3</text>
      <text x="415" y="132" textAnchor="middle" fill="rgba(232,237,242,0.60)" fontSize="12" fontFamily="DM Mono" letterSpacing="0.1em">WAITING...</text>

      {/* Legend - single row */}
      <line x1="63" y1="220" x2="93" y2="220" stroke="#00C4B4" strokeWidth="2" strokeDasharray="8 6" />
      <text x="98" y="224" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">Normal flow</text>
      <line x1="196" y1="220" x2="226" y2="220" stroke="#94A3B4" strokeWidth="2" strokeDasharray="3 9" opacity="0.7" />
      <text x="231" y="224" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">Starved flow</text>
      <rect x="335" y="215" width="10" height="10" rx="2" fill="rgba(245,158,11,0.3)" stroke="#F59E0B" strokeWidth="1" />
      <text x="350" y="224" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">Bottleneck</text>
    </svg>
  );
};

const Hero = () => (
  <section className="flex items-start lg:items-center pt-24 pb-16 px-6 lg:min-h-screen overflow-x-hidden">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left */}
      <div>
        <span className="section-label inline-block mb-6">Factory Flow Intelligence</span>
        <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[64px] leading-[1.1] text-white mb-6 w-full max-w-full">
          Cut manufacturing lead time by 30–70% without adding capacity.
        </h1>
        <p className="text-[18px] max-w-[500px] mb-8 leading-relaxed" style={{ color: "rgba(232,237,242,0.92)" }}>
          Identify bottlenecks, reduce queues, unlock hidden capacity using AI-powered flow intelligence.
        </p>
        <div className="flex mb-8">
          <Link
            to="/request-access"
            className="inline-flex w-auto justify-center items-center px-7 py-3.5 rounded-md bg-trooba-teal text-trooba-navy font-display font-semibold text-base hover:bg-trooba-teal-hover transition-colors"
          >
            → Request a Flow Analysis
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:gap-0 gap-1 text-white/70" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", color: "rgb(148,163,white/70)", textTransform: "uppercase" }}>
          <span className="md:after:content-['_·_'] md:after:mx-0">Proven in Real Factories</span>
          <span className="md:after:content-['_·_'] md:after:mx-0">No Complex Simulation</span>
          <span>Results in Days</span>
        </div>
      </div>

      {/* Right - Diagram */}
      <div className="flex justify-center mt-8 lg:mt-0 overflow-hidden">
        <div className="w-full max-w-[360px] mx-auto lg:max-w-none">
          <HeroDiagram />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
