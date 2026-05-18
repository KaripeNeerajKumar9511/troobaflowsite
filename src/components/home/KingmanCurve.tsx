import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const KingmanCurve = () => {
  const [utilisation, setUtilisation] = useState(80);

  const multiplier = useMemo(() => {
    const u = utilisation / 100;
    if (u >= 0.99) return 50;
    return 1 + u / (1 - u);
  }, [utilisation]);

  const color = utilisation < 70 ? "#00C4B4" : utilisation < 85 ? "#F59E0B" : "#ef4444";
  const label = utilisation < 70 ? "manageable" : utilisation < 85 ? "danger zone" : "critical";

  // Generate curve points
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
    <section className="section-padding px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="section-label block">Why Lead Times Are Long</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] text-white mb-8 leading-tight">
            It's not machine speed. It's utilisation math.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-lg p-4 md:p-6 lg:p-10" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", backgroundColor: "#0F1822" }}>
            <svg viewBox="0 0 500 320" className="w-full max-h-[280px] sm:max-h-none" fill="none">
              {/* Zones */}
              <rect x="50" y="20" width="280" height="260" fill="#00C4B4" opacity="0.04" />
              <rect x="330" y="20" width="60" height="260" fill="#F59E0B" opacity="0.06" />
              <rect x="390" y="20" width="60" height="260" fill="#ef4444" opacity="0.06" />

              {/* Axes */}
              <line x1="50" y1="280" x2="450" y2="280" stroke="rgb(255,255,255)" strokeWidth="1" />
              <line x1="50" y1="280" x2="50" y2="20" stroke="rgb(255,255,255)" strokeWidth="1" />

              {/* X labels */}
              <text x="250" y="310" textAnchor="middle" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">UTILISATION %</text>
              {[0, 20, 40, 60, 80, 100].map((v) => (
                <text key={v} x={50 + v * 4} y="296" textAnchor="middle" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">{v}%</text>
              ))}

              {/* Y labels */}
              <text x="20" y="280" textAnchor="middle" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">1×</text>
              <text x="20" y="150" textAnchor="middle" fill="rgb(255,255,255)" fontSize="11" fontFamily="DM Mono">10×</text>

              {/* Zone labels */}
              <text x="180" y="270" textAnchor="middle" fill="#00C4B4" fontSize="11" fontFamily="DM Mono" opacity="0.6">MANAGEABLE</text>
              <text x="420" y="270" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="DM Mono" opacity="0.6">DANGER</text>

              {/* Curve */}
              <polyline points={curvePoints} stroke="#00C4B4" strokeWidth="2.5" fill="none" />

              {/* Dot */}
              <circle cx={dotX} cy={dotY} r="7" fill={color} opacity="0.3" />
              <circle cx={dotX} cy={dotY} r="4" fill={color} />
            </svg>

            {/* Slider */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <input
                type="range"
                min="10"
                max="97"
                value={utilisation}
                onChange={(e) => setUtilisation(Number(e.target.value))}
                className="w-full max-w-md h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #00C4B4 0%, #F59E0B 70%, #ef4444 100%)`,
                }}
              />
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-3">
                <span className="font-mono text-sm tracking-wider" style={{ color }}>
                  {utilisation}% utilisation → {multiplier.toFixed(1)}× lead time
                </span>
                <span className="inline-block px-2 py-1 rounded text-xs font-mono font-semibold tracking-wider uppercase mt-1 md:mt-0" style={{ color, backgroundColor: `${color}20` }}>
                  {label}
                </span>
              </div>
              <p className="text-xs font-mono tracking-wide text-center" style={{ color: "#9CA3AF" }}>
                Drag the slider. This is why your factory has long lead times even when machines aren't "full".
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KingmanCurve;
