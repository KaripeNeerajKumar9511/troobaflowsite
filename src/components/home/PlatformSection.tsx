import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  { num: "01", title: "Bottleneck Intelligence", desc: "Find the true constraint — not just the busiest machine." },
  { num: "02", title: "Flow Modeling Engine", desc: "Model your system under any conditions. Results in hours." },
  { num: "03", title: "What-If Studio", desc: "Test changes before committing. No risk, full clarity." },
  { num: "04", title: "Action Engine", desc: "Know what to fix first, and why." },
];

const operations = ["OP1", "OP2", "OP3", "OP4"];
const heatmapData = [
  { product: "Product A", cells: [
    { value: 72, label: "72%", level: "amber" },
    { value: 88, label: "88%", level: "red", tag: "BOTTLENECK" },
    { value: 48, label: "48%", level: "green" },
    { value: 41, label: "41%", level: "green" },
  ]},
  { product: "Product B", cells: [
    { value: 91, label: "91%", level: "red", tag: "BOTTLENECK" },
    { value: 68, label: "68%", level: "amber" },
    { value: 55, label: "55%", level: "green" },
    { value: 70, label: "70%", level: "amber" },
  ]},
  { product: "Product C", cells: [
    { value: 45, label: "45%", level: "green" },
    { value: 52, label: "52%", level: "green" },
    { value: 74, label: "74%", level: "amber" },
    { value: 85, label: "85%", level: "red", tag: "BOTTLENECK" },
  ]},
  { product: "Product D", cells: [
    { value: 58, label: "58%", level: "green" },
    { value: 76, label: "76%", level: "amber" },
    { value: 61, label: "61%", level: "green" },
    { value: 49, label: "49%", level: "green" },
  ]},
];

const cellColors: Record<string, { bg: string; text: string; border: string }> = {
  red:   { bg: "rgba(239,68,68,0.18)", text: "#ef4444", border: "rgba(239,68,68,0.4)" },
  amber: { bg: "rgba(245,158,11,0.14)", text: "#F59E0B", border: "rgba(245,158,11,0.3)" },
  green: { bg: "rgba(0,196,180,0.12)", text: "#00C4B4", border: "rgba(0,196,180,0.25)" },
};

const BottleneckHeatmap = () => (
  <div className="mt-6">
    <div className="overflow-x-auto -mx-2 px-2">
      <table className="w-full text-left" style={{ minWidth: 340, borderCollapse: "separate", borderSpacing: "3px" }}>
        <thead>
          <tr>
            <th className="pb-2 pr-2" style={{ width: 80 }} />
            {operations.map((op) => (
              <th key={op} className="pb-2 text-center font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase" style={{ color: "rgb(148,163,180)" }}>
                {op}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {heatmapData.map((row) => (
            <tr key={row.product}>
              <td className="pr-2 py-0.5 font-mono text-[10px] sm:text-[11px] tracking-[0.08em]" style={{ color: "rgba(232,237,242,0.75)" }}>
                {row.product}
              </td>
              {row.cells.map((cell, i) => {
                const c = cellColors[cell.level];
                return (
                  <td key={i} className="py-0.5">
                    <div
                      className="rounded text-center py-2 px-1"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <span className="font-mono text-[10px] sm:text-xs font-semibold" style={{ color: c.text }}>
                        {cell.label}
                      </span>
                      {cell.tag && (
                        <span className="block font-mono text-[7px] sm:text-[8px] tracking-[0.15em] mt-0.5" style={{ color: c.text }}>
                          {cell.tag}
                        </span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex items-center gap-5 mt-4">
      {[
        { label: "Bottleneck", color: cellColors.red },
        { label: "Watch", color: cellColors.amber },
        { label: "Normal", color: cellColors.green },
      ].map((l) => (
        <div key={l.label} className="flex items-center gap-1.5">
          <span className="block w-2.5 h-2.5 rounded-sm" style={{ background: l.color.bg, border: `1px solid ${l.color.border}` }} />
          <span className="font-mono text-[10px] tracking-[0.1em]" style={{ color: l.color.text }}>{l.label}</span>
        </div>
      ))}
    </div>

    <p className="font-mono text-[11px] tracking-[0.08em] mt-3" style={{ color: "rgba(232,237,242,0.65)" }}>
      Instantly identify constraints across products and operations.
    </p>
    <p className="md:hidden font-mono text-[10px] tracking-wide text-center mt-2" style={{ color: "rgba(232,237,242,0.4)" }}>
      ← scroll to see full grid →
    </p>
  </div>
);

/* ── Tile 02: Flow Modeling Engine ── */
const desktopFlowSvg = `<svg width="100%" viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg">
  <text font-family="DM Mono,monospace" font-size="12" letter-spacing="1.2" fill="#9CA3AF" x="20" y="20">SCENARIO</text>
  <text font-family="DM Mono,monospace" font-size="12" letter-spacing="1.2" fill="#9CA3AF" x="226" y="20">BOTTLENECK</text>
  <text font-family="DM Mono,monospace" font-size="12" letter-spacing="1.2" fill="#9CA3AF" x="358" y="20">LEAD TIME</text>
  <text font-family="DM Mono,monospace" font-size="12" letter-spacing="1.2" fill="#9CA3AF" x="474" y="20">QUEUE</text>
  <line x1="10" y1="30" x2="570" y2="30" stroke="#2d3748" stroke-width="0.5"/>
  <rect x="10" y="36" width="560" height="46" rx="4" fill="#1a0808" opacity="0.7"/>
  <text font-family="DM Sans,sans-serif" font-size="15" fill="#9CA3AF" x="20" y="62" dominant-baseline="central">Current state</text>
  <rect x="222" y="44" width="110" height="28" rx="4" fill="#7a2020" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="14" font-weight="600" fill="#F09595" x="277" y="60" text-anchor="middle" dominant-baseline="central">Op 2 · 91%</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#E24B4A" x="400" y="62" text-anchor="middle" dominant-baseline="central">28 days</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#E24B4A" x="510" y="62" text-anchor="middle" dominant-baseline="central">14 jobs</text>
  <rect x="10" y="88" width="560" height="46" rx="4" fill="#110e00" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="15" fill="#9CA3AF" x="20" y="114" dominant-baseline="central">+ 1 worker at Op 2</text>
  <rect x="222" y="96" width="110" height="28" rx="4" fill="#633806" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="14" font-weight="600" fill="#FAC775" x="277" y="112" text-anchor="middle" dominant-baseline="central">Op 2 · 74%</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#EF9F27" x="400" y="114" text-anchor="middle" dominant-baseline="central">11 days</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#EF9F27" x="510" y="114" text-anchor="middle" dominant-baseline="central">3 jobs</text>
  <rect x="10" y="140" width="560" height="46" rx="4" fill="#020f0a" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="15" fill="#9CA3AF" x="20" y="166" dominant-baseline="central">Halve batch size</text>
  <rect x="222" y="148" width="110" height="28" rx="4" fill="#085041" opacity="0.7"/>
  <text font-family="DM Sans,sans-serif" font-size="14" font-weight="600" fill="#5DCAA5" x="277" y="164" text-anchor="middle" dominant-baseline="central">Op 2 · 68%</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#1D9E75" x="400" y="166" text-anchor="middle" dominant-baseline="central">8 days</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#1D9E75" x="510" y="166" text-anchor="middle" dominant-baseline="central">2 jobs</text>
  <rect x="10" y="192" width="560" height="46" rx="4" fill="#04342C" opacity="0.9"/>
  <rect x="10" y="192" width="560" height="46" rx="4" fill="none" stroke="#1D9E75" stroke-width="1"/>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="600" fill="#9FE1CB" x="20" y="218" dominant-baseline="central">Worker + smaller batches</text>
  <rect x="222" y="200" width="110" height="28" rx="4" fill="#085041"/>
  <text font-family="DM Sans,sans-serif" font-size="14" font-weight="600" fill="#9FE1CB" x="277" y="216" text-anchor="middle" dominant-baseline="central">Op 2 · 52%</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#5DCAA5" x="400" y="218" text-anchor="middle" dominant-baseline="central">6 days</text>
  <text font-family="DM Sans,sans-serif" font-size="17" font-weight="700" fill="#5DCAA5" x="510" y="218" text-anchor="middle" dominant-baseline="central">1 job</text>
  <rect x="544" y="202" width="22" height="22" rx="11" fill="#1D9E75"/>
  <text font-family="DM Sans,sans-serif" font-size="9" font-weight="700" fill="#04342C" x="555" y="215" text-anchor="middle" dominant-baseline="central">★</text>
</svg>`;

const mobileFlowSvg = `<svg width="100%" viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg">
  <text font-family="DM Mono,monospace" font-size="11" letter-spacing="0.8" fill="#9CA3AF" x="10" y="18">SCENARIO</text>
  <text font-family="DM Mono,monospace" font-size="11" letter-spacing="0.8" fill="#9CA3AF" x="172" y="18">LEAD TIME</text>
  <text font-family="DM Mono,monospace" font-size="11" letter-spacing="0.8" fill="#9CA3AF" x="262" y="18">QUEUE</text>
  <line x1="6" y1="26" x2="314" y2="26" stroke="#2d3748" stroke-width="0.5"/>
  <rect x="6" y="32" width="308" height="44" rx="4" fill="#1a0808" opacity="0.7"/>
  <text font-family="DM Sans,sans-serif" font-size="13" fill="#9CA3AF" x="12" y="57" dominant-baseline="central">Current state</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#E24B4A" x="205" y="57" text-anchor="middle" dominant-baseline="central">28 days</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#E24B4A" x="282" y="57" text-anchor="middle" dominant-baseline="central">14 jobs</text>
  <rect x="6" y="82" width="308" height="44" rx="4" fill="#110e00" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="13" fill="#9CA3AF" x="12" y="107" dominant-baseline="central">+1 worker</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#EF9F27" x="205" y="107" text-anchor="middle" dominant-baseline="central">11 days</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#EF9F27" x="282" y="107" text-anchor="middle" dominant-baseline="central">3 jobs</text>
  <rect x="6" y="132" width="308" height="44" rx="4" fill="#020f0a" opacity="0.6"/>
  <text font-family="DM Sans,sans-serif" font-size="13" fill="#9CA3AF" x="12" y="157" dominant-baseline="central">Halve batch size</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#1D9E75" x="205" y="157" text-anchor="middle" dominant-baseline="central">8 days</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#1D9E75" x="282" y="157" text-anchor="middle" dominant-baseline="central">2 jobs</text>
  <rect x="6" y="182" width="308" height="44" rx="4" fill="#04342C" opacity="0.9"/>
  <rect x="6" y="182" width="308" height="44" rx="4" fill="none" stroke="#1D9E75" stroke-width="1"/>
  <text font-family="DM Sans,sans-serif" font-size="13" font-weight="600" fill="#9FE1CB" x="12" y="207" dominant-baseline="central">Both combined</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#5DCAA5" x="205" y="207" text-anchor="middle" dominant-baseline="central">6 days</text>
  <text font-family="DM Sans,sans-serif" font-size="15" font-weight="700" fill="#5DCAA5" x="282" y="207" text-anchor="middle" dominant-baseline="central">1 job</text>
  <rect x="292" y="192" width="20" height="20" rx="10" fill="#1D9E75"/>
  <text font-family="DM Sans,sans-serif" font-size="10" font-weight="700" fill="#04342C" x="302" y="204" text-anchor="middle" dominant-baseline="central">★</text>
</svg>`;

const FlowDiagram = () => (
  <div className="mt-6">
    <div className="hidden md:block" dangerouslySetInnerHTML={{ __html: desktopFlowSvg }} />
    <div className="block md:hidden" dangerouslySetInnerHTML={{ __html: mobileFlowSvg }} />
  </div>
);

/* ── Tile 03: What-If Studio ── */
const WhatIfComparison = () => (
  <div className="mt-6">
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded border border-border p-3 sm:p-4" style={{ background: "rgba(14,18,24,0.7)" }}>
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#9CA3AF] block mb-3">Before</span>
        <div className="mb-3">
          <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF] block">Lead Time</span>
          <span className="font-mono text-base sm:text-lg font-semibold text-foreground">18 days</span>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF] block">Throughput</span>
          <span className="font-mono text-base sm:text-lg font-semibold text-foreground">340 units/wk</span>
        </div>
      </div>
      <div className="rounded border border-primary/30 p-3 sm:p-4" style={{ background: "rgba(0,196,180,0.06)" }}>
        <span className="font-mono text-[10px] tracking-widest uppercase text-primary block mb-3">After</span>
        <div className="mb-3">
          <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF] block">Lead Time</span>
          <span className="font-mono text-base sm:text-lg font-semibold text-primary">7 days</span>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF] block">Throughput</span>
          <span className="font-mono text-base sm:text-lg font-semibold text-primary">490 units/wk</span>
        </div>
      </div>
    </div>
    <p className="font-mono text-[11px] tracking-[0.08em] mt-3" style={{ color: "rgba(232,237,242,0.65)" }}>
      Test changes before committing. Compare outcomes instantly.
    </p>
  </div>
);

/* ── Tile 04: Action Engine ── */
const actions = [
  { action: "Reduce batch size at Op 2", impact: "saves 3.2 days" },
  { action: "Reallocate labour at Op 3", impact: "frees 18% capacity" },
  { action: "Adjust routing for Product B", impact: "reduces queue by 60%" },
];

const ActionList = () => (
  <div className="mt-6">
    <ol className="space-y-3">
      {actions.map((a, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="font-mono text-xs font-semibold text-primary mt-0.5 shrink-0">{i + 1}.</span>
          <span className="text-[13px] sm:text-[14px]" style={{ color: "rgba(232,237,242,0.85)" }}>
            {a.action} <span className="font-mono text-xs text-primary ml-1">→ {a.impact}</span>
          </span>
        </li>
      ))}
    </ol>
    <p className="font-mono text-[11px] tracking-[0.08em] mt-3" style={{ color: "rgba(232,237,242,0.65)" }}>
      Prioritised actions ranked by impact.
    </p>
  </div>
);

const PlatformSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="section-label block">The Platform</span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-white mb-8 sm:mb-12 leading-tight">
          Four capabilities. One clear picture.
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((c) => (
          <ScrollReveal key={c.num}>
            <div className="border border-trooba-offwhite/[0.08] border-l-4 border-l-trooba-teal/70 rounded-md p-5 sm:p-6 md:p-6 lg:p-8 h-full transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-l-trooba-teal" style={{ backgroundColor: "rgba(30,58,95,0.2)" }}>
              <span className="font-mono text-[11px] tracking-[0.2em] text-trooba-teal">{c.num}</span>
              <h3 className="font-display font-bold text-white text-base mt-2 mb-2">{c.title}</h3>
              <p className="text-[14px] sm:text-[15px]" style={{ color: "rgba(232,237,242,0.85)" }}>{c.desc}</p>
              {c.num === "01" && <BottleneckHeatmap />}
              {c.num === "02" && <FlowDiagram />}
              {c.num === "03" && <WhatIfComparison />}
              {c.num === "04" && <ActionList />}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformSection;
