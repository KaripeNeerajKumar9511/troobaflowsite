import ScrollReveal from "@/components/ScrollReveal";

/* ── Shared ── */
const OpBoxNeutral = ({ label }: { label: string }) => (
  <div className="px-2.5 py-2 sm:px-5 sm:py-2.5 rounded-md bg-[rgba(30,58,95,0.2)] border border-[rgba(255,255,255,0.1)] text-center min-w-[46px] sm:min-w-[72px]">
    <span className="font-display text-[13px] sm:text-sm font-medium text-[#E8EDF2]">{label}</span>
  </div>
);

const OpBoxRed = ({ label }: { label: string }) => (
  <div className="px-2.5 py-2 sm:px-5 sm:py-2.5 rounded-md bg-red-950/30 border-2 border-red-500/60 text-center min-w-[46px] sm:min-w-[72px]">
    <span className="font-display text-[13px] sm:text-sm font-semibold text-red-400">{label}</span>
  </div>
);

const OpBoxAmber = ({ label }: { label: string }) => (
  <div className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-amber-950/30 border-2 border-amber-500 text-center min-w-[64px] sm:min-w-[80px]">
    <span className="font-display text-[14px] sm:text-base font-semibold text-amber-400">{label}</span>
  </div>
);

const FixedBox = ({ label }: { label: string }) => (
  <div className="px-2.5 py-2 sm:px-5 sm:py-2.5 rounded-md bg-[rgba(30,58,95,0.15)] border border-[rgba(255,255,255,0.08)] text-center min-w-[46px] sm:min-w-[72px]">
    <span className="font-display text-[13px] sm:text-sm text-muted-foreground">{label} </span>
    <span className="text-[12px] text-green-500/70">✓</span>
  </div>
);

const GrayArrowRight = () => (
  <div className="flex items-center shrink-0 mx-0.5">
    <div className="w-4 sm:w-6 h-[1px] bg-[rgba(255,255,255,0.15)]" />
    <div className="w-0 h-0 border-l-[5px] border-l-[rgba(255,255,255,0.2)] border-y-[3px] border-y-transparent" />
  </div>
);

const RedArrowDown = () => (
  <div className="flex flex-col items-center gap-0.5 py-0.5">
    <div className="h-3 sm:h-4 border-l-[1.5px] border-red-500/50" />
    <span className="font-mono text-[11px] sm:text-xs text-red-400/80">fix</span>
  </div>
);

const JobChip = () => (
  <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] rounded-[2px] bg-[#F7C1C1] border border-[#E24B4A]/40" />
);

const AmberChip = () => (
  <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] rounded-[2px] bg-amber-400/50 border border-amber-500/40" />
);

/* ── Left panel ── */
const LeftPanel = () => (
  <div className="flex flex-col items-center py-6 sm:py-8 px-2 sm:px-6">
    {/* Rows + U-shaped arrow on the right */}
    <div className="flex items-stretch w-full max-w-full justify-center gap-0.5 sm:gap-2 overflow-visible">
      {/* Left: the 3 rows */}
      <div className="flex flex-col items-center min-w-0">
          {/* Row 1: Op flow with arrows */}
          <div className="flex items-center justify-center">
            <OpBoxNeutral label="Op 1" />
            <GrayArrowRight />
            <OpBoxNeutral label="Op 2" />
            <GrayArrowRight />
            <OpBoxNeutral label="Op 3" />
          </div>

          {/* Spacing */}
          <div className="py-2" />

          {/* Rows 2-4 use grid for column alignment */}
          <div className="grid grid-cols-3 gap-x-2 sm:gap-x-3 justify-items-center items-end">
            {/* Row 2: Round labels + red boxes */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 1</span>
              <OpBoxRed label="Op 1" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 2</span>
              <OpBoxRed label="Op 2" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 3</span>
              <OpBoxRed label="Op 3" />
            </div>

            {/* Down arrows */}
            <div className="flex items-center py-2">
              <div className="flex flex-col items-center">
                <div className="h-3 sm:h-4 border-l-[1.5px] border-red-500/50" />
                <div className="w-0 h-0 border-t-[5px] border-t-red-500/40 border-x-[4px] border-x-transparent" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-red-400/80 ml-0.5">fix</span>
            </div>
            <div className="flex items-center py-2">
              <div className="flex flex-col items-center">
                <div className="h-3 sm:h-4 border-l-[1.5px] border-red-500/50" />
                <div className="w-0 h-0 border-t-[5px] border-t-red-500/40 border-x-[4px] border-x-transparent" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-red-400/80 ml-0.5">fix</span>
            </div>
            <div className="flex items-center py-2">
              <div className="flex flex-col items-center">
                <div className="h-3 sm:h-4 border-l-[1.5px] border-red-500/50" />
                <div className="w-0 h-0 border-t-[5px] border-t-red-500/40 border-x-[4px] border-x-transparent" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-red-400/80 ml-0.5">fix</span>
            </div>

            {/* Row 3: Fixed boxes */}
            <FixedBox label="Op 1" />
            <FixedBox label="Op 2" />
            <FixedBox label="Op 3" />
          </div>
      </div>

      {/* Right: U-shaped arrow with "repeats" label */}
      <div className="relative shrink-0 self-stretch w-[48px] sm:w-14 overflow-visible">
        {/* Arrowhead at Row 1 */}
        <div className="absolute left-0 right-0 top-[14px] flex items-center">
          <div className="w-0 h-0 border-r-[5px] border-r-red-400/60 border-y-[3px] border-y-transparent" />
          <div className="flex-1 h-0 border-t-[1.5px] border-dashed border-red-400/50" />
        </div>
        {/* Vertical line */}
        <div
          className="absolute right-0 top-[14px] bottom-[14px]"
          style={{ width: 0, borderRight: "1.5px dashed rgba(248,113,113,0.5)" }}
        />
        {/* Bottom connector at Row 3 */}
        <div className="absolute left-0 right-0 bottom-[14px]">
          <div className="h-0 border-t-[1.5px] border-dashed border-red-400/50" />
        </div>
        <span className="absolute top-1/2 left-0.5 sm:left-1 -translate-y-1/2 font-mono text-[8px] sm:text-[9px] text-red-400/60 whitespace-nowrap">
          ↻ repeats
        </span>
      </div>
    </div>

    {/* Sub-caption */}
    <p className="font-mono text-[10px] sm:text-[11px] text-[#9CA3AF] text-center mt-2">
      lead time never improves
    </p>

    {/* Bottom pill */}
    <div className="px-5 py-2 rounded-md bg-red-950/30 border border-red-500/20 mt-3">
      <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-red-400 text-center">
        bottleneck shifts. problem stays.
      </p>
    </div>
  </div>
);

/* ── Right panel ── */
const RightPanel = () => (
  <div className="flex flex-col items-center gap-4 sm:gap-5 py-6 sm:py-8 px-3 sm:px-6">
    {/* Op flow */}
    <div className="flex items-end justify-center">
      <div className="flex items-center self-end mb-[1px]">
        <OpBoxNeutral label="Op 1" />
        <GrayArrowRight />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[3px] mb-2">
          <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF]">jobs waiting</span>
          <div className="flex gap-[3px]">
            <JobChip /><JobChip /><JobChip />
          </div>
          <div className="flex gap-[3px]">
            <JobChip /><JobChip /><JobChip /><JobChip />
          </div>
        </div>
        <OpBoxAmber label="Op 2" />
      </div>

      <div className="flex items-center self-end mb-[1px]">
        <GrayArrowRight />
        <OpBoxNeutral label="Op 3" />
      </div>
    </div>

    {/* Teal arrow */}
    <div className="flex flex-col items-center -mt-1">
      <div className="h-5 sm:h-6 border-l-[2px] border-primary" />
      <div className="w-0 h-0 border-t-[6px] border-t-primary border-x-[5px] border-x-transparent" />
    </div>

    {/* Fix box */}
    <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-primary/[0.08] border border-primary/30 text-center">
      <p className="font-display text-sm sm:text-base font-bold text-primary leading-snug">
        Fix Op 2 once
      </p>
      <p className="font-display text-[12px] sm:text-sm text-primary/60 mt-0.5">
        lead time drops
      </p>
    </div>

    {/* Sub-caption */}
    <p className="font-mono text-[10px] sm:text-[11px] text-[#9CA3AF] text-center -mt-1">
      permanently
    </p>

    {/* Bottom pill */}
    <div className="px-5 py-2 rounded-md bg-primary/[0.06] border border-primary/20 mt-1">
      <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-primary text-center">
        one fix. permanent gain.
      </p>
    </div>
  </div>
);

/* ── Main section ── */
const ProblemSection = () => (
  <section className="section-padding px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="section-label block">The Real Problem</span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] text-white mb-4 leading-tight">
          The machine isn't the problem. The system is.
        </h2>
        <p className="text-lg max-w-2xl mb-8" style={{ color: "rgba(232,237,242,0.85)" }}>
          Work builds up, bottlenecks shift, and your ERP assumes lead times that haven't been true in years.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-0 rounded-lg overflow-visible sm:overflow-hidden border border-[rgba(255,255,255,0.08)]">
          <div className="border-b sm:border-b-0 sm:border-r border-dashed border-[rgba(255,255,255,0.08)]">
            <h3 className="font-mono tracking-[0.12em] uppercase text-center pt-5 sm:pt-6 px-3" style={{ fontSize: "13px", fontWeight: 500, color: "rgb(160,175,192)" }}>
              how most teams think
            </h3>
            <LeftPanel />
          </div>
          <div>
            <h3 className="font-mono tracking-[0.12em] uppercase text-center pt-5 sm:pt-6 px-3" style={{ fontSize: "13px", fontWeight: 500, color: "rgb(160,175,192)" }}>
              how trooba flow sees it
            </h3>
            <RightPanel />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-center text-sm mt-10" style={{ color: "rgba(232,237,242,0.55)" }}>
          Without seeing this clearly, every improvement is guesswork.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
