import * as React from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Shared ── */
const OpBoxNeutral = ({ label }: { label: string }) => (
  <div className="px-1.5 py-1.5 sm:px-5 sm:py-2.5 rounded-md bg-[rgba(30,58,95,0.2)] border border-[rgba(255,255,255,0.12)] text-center min-w-[38px] sm:min-w-[72px]">
    <span className="font-display text-[11px] sm:text-sm font-medium text-[#E8EDF2]">{label}</span>
  </div>
);

const OpBoxRed = ({ label }: { label: string }) => (
  <div className="px-1.5 py-1.5 sm:px-5 sm:py-2.5 rounded-md bg-red-950/30 border-2 border-red-500/70 text-center min-w-[38px] sm:min-w-[72px]">
    <span className="font-display text-[11px] sm:text-sm font-semibold text-red-400">{label}</span>
  </div>
);

const OpBoxAmber = ({ label }: { label: string }) => (
  <div className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-amber-950/30 border-2 border-amber-500 text-center min-w-[64px] sm:min-w-[80px]">
    <span className="font-display text-[14px] sm:text-base font-semibold text-amber-400">{label}</span>
  </div>
);

const FixedBox = ({ label }: { label: string }) => (
  <div className="px-1.5 py-1.5 sm:px-5 sm:py-2.5 rounded-md bg-[rgba(30,58,95,0.15)] border border-[rgba(255,255,255,0.1)] text-center min-w-[38px] sm:min-w-[72px]">
    <span className="font-display text-[11px] sm:text-sm text-muted-foreground">{label} </span>
    <span className="text-[12px] text-green-500/70">✓</span>
  </div>
);

const GrayArrowRight = () => (
  <div className="flex items-center shrink-0 mx-0.5">
    <div className="w-4 sm:w-6 h-[1px] bg-[rgba(255,255,255,0.15)]" />
    <div className="w-0 h-0 border-l-[5px] border-l-[rgba(255,255,255,0.2)] border-y-[3px] border-y-transparent" />
  </div>
);

/** Matches top row: Op — Op — Op with gray arrows in between (5 columns) */
const diagramTopGridClass =
  "grid w-full justify-items-center items-center gap-x-1.5 sm:gap-x-3 [grid-template-columns:auto_auto_auto_auto_auto]";

const RedArrowDown = () => (
  <div className="flex flex-col items-center gap-0.5 py-0.5">
    <div className="h-3 sm:h-4 border-l-[1.5px] border-red-500/50" />
    <span className="font-mono text-[11px] sm:text-xs text-red-400/80">fix</span>
  </div>
);

/** Vertical flow: shaft → “fix” → arrowhead (middle row → bottom row), centered on column */
const RedFixArrowDown = () => (
  <div className="flex flex-col items-center gap-0.5 py-2">
    <div className="h-3 sm:h-4 w-px shrink-0 bg-red-500/55" />
    <span className="font-mono text-[10px] sm:text-[11px] text-red-400/85 leading-none">fix</span>
    <div className="w-0 h-0 border-t-[5px] border-t-red-500/55 border-x-[4px] border-x-transparent shrink-0" />
  </div>
);

/** Top neutral row → middle “round” row */
const SubtleArrowDown = () => (
  <div className="flex flex-col items-center py-1 sm:py-1.5">
    <div className="h-2 sm:h-3 w-px shrink-0 bg-[rgba(255,255,255,0.22)]" />
    <div className="w-0 h-0 border-t-[4px] border-t-[rgba(255,255,255,0.28)] border-x-[3px] border-x-transparent shrink-0" />
  </div>
);

const JobChip = () => (
  <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] rounded-[2px] bg-[#F7C1C1] border border-[#E24B4A]/40" />
);

const AmberChip = () => (
  <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] rounded-[2px] bg-amber-400/50 border border-amber-500/40" />
);

/**
 * Dashed U-loop on the right: leaves fixed Op 3 (bottom), runs up the rail, returns into red Op 3 (middle).
 * Rounded joins + glass “repeats” pill (matches reference layout).
 */
/** Bottom leg Y: larger = line sits lower (nearer bottom of Op3✓) in the scaled SVG. */
const repeatsLoopPathD = (startY: number) =>
  `M 6 ${startY} H 34 V 80 Q 34 67 24 67 H 10`;

const REPEAT_LOOP_OVERLAY_PHONE_Y = 155;
/** md–lg: slightly lower start than phone so the hook aligns with the ✓ row on tablet. */
const REPEAT_LOOP_OVERLAY_TABLET_Y = 155;
/** Landscape rotation version: use a stable Y so the loop doesn't jump on rotate. */
const REPEAT_LOOP_OVERLAY_ROTATION_Y = 184;

function useMediaQuery(query: string) {
  const getMatches = React.useCallback(
    () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false),
    [query],
  );

  const [matches, setMatches] = React.useState<boolean>(getMatches);

  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();

    // Safari fallback
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

const repeatsLoopStrokeProps = {
  stroke: "currentColor" as const,
  strokeWidth: 1.75,
  strokeDasharray: "5 4",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  opacity: 0.92,
};

const RepeatsLoopLabel = () => (
  <span className="absolute top-[70%] left-0 z-10 -translate-y-1/2 whitespace-nowrap rounded-full border border-red-400/35 bg-[rgba(15,23,42,0.58)] px-1.5 py-0.5 sm:px-2 font-mono text-[8px] sm:text-[9px] text-red-200/95 shadow-sm backdrop-blur-md">
    ↻ repeats
  </span>
);

/** Overlay rail: phone + tablet (< lg). Same box as mobile so SVG scales like mobile (aside column stretches differently and breaks alignment). */
const RepeatsLoopRailOverlay = () => {
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isMdUp = useMediaQuery("(min-width: 768px)");

  // Portrait: keep tuned phone/tablet values.
  // Landscape: force the rotation/stable geometry to prevent jumping when the layout crosses `md`.
  const overlayStartY = isLandscape
    ? REPEAT_LOOP_OVERLAY_ROTATION_Y
    : isMdUp
      ? REPEAT_LOOP_OVERLAY_TABLET_Y
      : REPEAT_LOOP_OVERLAY_PHONE_Y;

  return (
    <div
      className="pointer-events-none lg:hidden absolute right-0 top-[10px] bottom-[18px] w-10 sm:w-11"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible text-red-400/85"
        viewBox="0 0 44 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid meet"
      >
        <path d={repeatsLoopPathD(overlayStartY)} {...repeatsLoopStrokeProps} />
        <path d="M 2 67 L 10 62 L 10 72 Z" fill="currentColor" opacity={0.88} />
      </svg>
      <RepeatsLoopLabel />
    </div>
  );
};

/** Side column rail (lg+ only). Desktop path; not used on tablet so layout matches tuned overlay. */
const RepeatsLoopRailAside = () => (
  <div className="pointer-events-none relative hidden lg:block shrink-0 self-stretch w-12 sm:w-16 overflow-visible" aria-hidden>
    <svg
      className="absolute inset-0 h-full w-full overflow-visible text-red-400/85"
      viewBox="0 0 44 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid meet"
    >
      <path d={repeatsLoopPathD(130)} {...repeatsLoopStrokeProps} />
      <path d="M 2 67 L 10 62 L 10 72 Z" fill="currentColor" opacity={0.88} />
    </svg>
    <RepeatsLoopLabel />
  </div>
);

/* ── Left panel ── */
const LeftPanel = () => (
  <div className="flex flex-col items-center py-6 sm:py-8 px-2 sm:px-6">
    {/* Rows + U-shaped arrow on the right */}
    <div className="flex items-stretch w-full max-w-full justify-center gap-0.5 sm:gap-2 overflow-visible">
      {/* Left: the 3 rows */}
      <div className="flex flex-col items-center min-w-0 relative pr-10 sm:pr-11 lg:pr-0">
          {/* Same width for top row + grid so each column stacks Op → round → fix → done */}
          <div className="inline-flex flex-col items-stretch mx-auto w-max max-w-full">
            {/* Row 1: Op —→ Op —→ Op (5 columns so lower rows align under each Op) */}
            <div className={diagramTopGridClass}>
              <OpBoxNeutral label="Op 1" />
              <GrayArrowRight />
              <OpBoxNeutral label="Op 2" />
              <GrayArrowRight />
              <OpBoxNeutral label="Op 3" />
            </div>

            {/* Top → middle */}
            <div className={diagramTopGridClass}>
              <SubtleArrowDown />
              <div aria-hidden className="min-w-0" />
              <SubtleArrowDown />
              <div aria-hidden className="min-w-0" />
              <SubtleArrowDown />
            </div>

            <div className={`${diagramTopGridClass} items-end`}>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 1</span>
                <OpBoxRed label="Op 1" />
              </div>
              <div aria-hidden className="min-w-0" />
              <div className="flex flex-col items-center">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 2</span>
                <OpBoxRed label="Op 2" />
              </div>
              <div aria-hidden className="min-w-0" />
              <div className="flex flex-col items-center">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#9CA3AF] mb-1">round 3</span>
                <OpBoxRed label="Op 3" />
              </div>
            </div>

            {/* Middle → bottom */}
            <div className={diagramTopGridClass}>
              <RedFixArrowDown />
              <div aria-hidden className="min-w-0" />
              <RedFixArrowDown />
              <div aria-hidden className="min-w-0" />
              <RedFixArrowDown />
            </div>

            <div className={diagramTopGridClass}>
              <FixedBox label="Op 1" />
              <div aria-hidden className="min-w-0" />
              <FixedBox label="Op 2" />
              <div aria-hidden className="min-w-0" />
              <FixedBox label="Op 3" />
            </div>
          </div>

          <RepeatsLoopRailOverlay />
      </div>

      <RepeatsLoopRailAside />
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
