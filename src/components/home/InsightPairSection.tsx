import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Hidden Drivers Card ── */
const drivers = [
  "Queue buildup between operations",
  "Resource conflicts across machines and labor",
  "Variability in demand and execution",
  "How everything interacts under load",
];

const HiddenDriversCard = () => (
  <div
    className="border border-trooba-offwhite/[0.08] rounded-lg p-5 sm:p-6 lg:p-8 h-full flex flex-col" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}
  >
    <span className="section-label block">The Hidden Drivers</span>
    <h2 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-4 leading-tight">
      You can't fix what you can't see
    </h2>
    <p className="text-[14px] sm:text-[15px] mb-5" style={{ color: "rgba(232,237,242,0.85)" }}>
      What actually drives delays isn't just processing time. It's:
    </p>
    <ul className="space-y-2.5 mb-5">
      {drivers.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span className="text-[14px] sm:text-[15px]" style={{ color: "rgba(232,237,242,0.85)" }}>{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-[14px] sm:text-[15px] mt-auto" style={{ color: "rgba(232,237,242,0.85)" }}>
      Without seeing this clearly, every improvement is guesswork.
    </p>
  </div>
);

/* ── Kingman Curve Card ── */
const KingmanCard = () => {
  const [utilisation, setUtilisation] = useState(80);

  const multiplier = useMemo(() => {
    const u = utilisation / 100;
    if (u >= 0.99) return 50;
    return 1 + u / (1 - u);
  }, [utilisation]);

  const color = utilisation < 70 ? "#00C4B4" : utilisation < 85 ? "#F59E0B" : "#ef4444";
  const label = utilisation < 70 ? "manageable" : utilisation < 85 ? "danger zone" : "critical";

  const curvePoints = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 97; i += 1) {
      const u = i / 100;
      const lt = 1 + u / (1 - u);
      const x = 50 + (i / 100) * 400;
      const y = 280 - Math.min(lt, 20) * 13;
      pts.push(`${x},${y}`);
    }
    return pts.join(" ");
  }, []);

  const dotX = 50 + (utilisation / 100) * 400;
  const dotY = 280 - Math.min(multiplier, 20) * 13;

  return (
    <div
      className="border border-trooba-offwhite/[0.08] rounded-lg p-5 sm:p-6 lg:p-8 h-full flex flex-col" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}
    >
      <span className="section-label block">Why Lead Times Are Long</span>
      <h2 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-4 leading-tight">
        It's not machine speed. It's utilisation math.
      </h2>

      <div className="rounded-lg p-3 lg:p-5 flex-1 flex flex-col" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0F1822" }}>
        <svg viewBox="0 0 500 320" className="w-full" fill="none">
          <rect x="50" y="20" width="280" height="260" fill="#00C4B4" opacity="0.04" />
          <rect x="330" y="20" width="60" height="260" fill="#F59E0B" opacity="0.06" />
          <rect x="390" y="20" width="60" height="260" fill="#ef4444" opacity="0.06" />
          <line x1="50" y1="280" x2="450" y2="280" stroke="rgb(148,163,180)" strokeWidth="1" />
          <line x1="50" y1="280" x2="50" y2="20" stroke="rgb(148,163,180)" strokeWidth="1" />
          <text x="250" y="310" textAnchor="middle" fill="rgb(148,163,180)" fontSize="11" fontFamily="DM Mono">UTILISATION %</text>
          {[0, 20, 40, 60, 80, 100].map((v) => (
            <text key={v} x={50 + v * 4} y="296" textAnchor="middle" fill="rgb(148,163,180)" fontSize="11" fontFamily="DM Mono">{v}%</text>
          ))}
          <text x="20" y="280" textAnchor="middle" fill="rgb(148,163,180)" fontSize="11" fontFamily="DM Mono">1×</text>
          <text x="20" y="150" textAnchor="middle" fill="rgb(148,163,180)" fontSize="11" fontFamily="DM Mono">10×</text>
          <text x="180" y="270" textAnchor="middle" fill="#00C4B4" fontSize="11" fontFamily="DM Mono" opacity="0.6">MANAGEABLE</text>
          <text x="420" y="270" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="DM Mono" opacity="0.6">DANGER</text>
          <polyline points={curvePoints} stroke="#00C4B4" strokeWidth="2.5" fill="none" />
          <circle cx={dotX} cy={dotY} r="7" fill={color} opacity="0.3" />
          <circle cx={dotX} cy={dotY} r="4" fill={color} />
        </svg>

        <div className="mt-4 flex flex-col items-center gap-3">
          <input
            type="range"
            min="10"
            max="97"
            value={utilisation}
            onChange={(e) => setUtilisation(Number(e.target.value))}
            className="w-full max-w-xs h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ background: "linear-gradient(to right, #00C4B4 0%, #F59E0B 70%, #ef4444 100%)" }}
          />
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-xs sm:text-sm tracking-wider" style={{ color }}>
              {utilisation}% → {multiplier.toFixed(1)}× lead time
            </span>
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold tracking-wider uppercase" style={{ color, backgroundColor: `${color}20` }}>
              {label}
            </span>
          </div>
          <p className="text-[11px] font-mono tracking-wide text-center" style={{ color: "#9CA3AF" }}>
            Drag the slider. This is why your factory has long lead times even when machines aren't 'full'.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Combined Section ── */
const InsightPairSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ScrollReveal>
          <HiddenDriversCard />
        </ScrollReveal>
        <ScrollReveal>
          <KingmanCard />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default InsightPairSection;
