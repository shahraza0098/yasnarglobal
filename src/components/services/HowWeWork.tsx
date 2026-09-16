import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PROCESS_STEPS } from "@/data/services";
import { Search, Map, Hammer, Rocket } from "lucide-react";

const stepIcons = [Search, Map, Hammer, Rocket];

/**
 * Curved SVG arrow connector between zigzag cards.
 * `direction` controls whether the arrow goes left→right or right→left.
 */
function ZigzagArrow({ direction }: { direction: "left-to-right" | "right-to-left" }) {
  const isLTR = direction === "left-to-right";

  return (
    <div className="hidden lg:flex justify-center items-center h-20 relative" aria-hidden="true">
      <svg
        viewBox="0 0 800 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id={`arrowhead-${direction}`}
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,4 L0,8 L2,4 Z" fill="#165dfc" />
          </marker>
          <linearGradient
            id={`arrow-gradient-${direction}`}
            x1={isLTR ? "0%" : "100%"}
            y1="0%"
            x2={isLTR ? "100%" : "0%"}
            y2="100%"
          >
            <stop offset="0%" stopColor="#165dfc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#165dfc" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d={
            isLTR
              ? "M 200,5 C 200,60 600,20 600,75"
              : "M 600,5 C 600,60 200,20 200,75"
          }
          stroke={`url(#arrow-gradient-${direction})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 4"
          markerEnd={`url(#arrowhead-${direction})`}
        />
        {/* Start dot */}
        <circle
          cx={isLTR ? 200 : 600}
          cy={5}
          r="4"
          fill="#165dfc"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-20">
          <SectionEyebrow variant="navy">OUR PROCESS</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            We follow a structured, collaborative workflow to ensure clarity,
            transparency, and steady progress at each phase of your project.
          </p>
        </div>

        {/* Zigzag Timeline with Curved Arrows */}
        <div className="relative max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step, idx) => {
            const StepIcon = stepIcons[idx];
            const isEven = idx % 2 === 0;
            const isLast = idx === PROCESS_STEPS.length - 1;

            // Arrow direction: left card → right card, or right card → left card
            const arrowDirection = isEven ? "left-to-right" : "right-to-left";

            return (
              <React.Fragment key={step.step}>
                {/* Step Card Row */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Card */}
                  <div
                    className={`${
                      isEven
                        ? "lg:col-start-1"
                        : "lg:col-start-2"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-[#165dfc]/30 transition-all duration-300 p-7 sm:p-8 group">
                      {/* Top Row: Icon + Phase Label */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="size-14 rounded-2xl bg-gradient-to-br from-[#165dfc]/10 to-[#165dfc]/5 border border-[#165dfc]/15 flex items-center justify-center shrink-0 group-hover:from-[#165dfc] group-hover:to-[#0f4bd8] transition-all duration-300">
                          <StepIcon className="size-6 text-[#165dfc] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xl font-extrabold text-[#165dfc] tracking-tight">
                              {step.step}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                              Phase {String(idx + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-2.5 group-hover:text-[#165dfc] transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          {PROCESS_STEPS.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                dotIdx <= idx
                                  ? "bg-[#165dfc] w-6"
                                  : "bg-slate-200 w-3"
                              }`}
                            />
                          ))}
                          <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                            {idx + 1}/{PROCESS_STEPS.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty side for offset */}
                  <div
                    className={`hidden lg:block ${
                      isEven
                        ? "lg:col-start-2"
                        : "lg:col-start-1 lg:row-start-1"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Curved Zigzag Arrow (between cards, not after last) */}
                {!isLast && <ZigzagArrow direction={arrowDirection} />}

                {/* Mobile connector (between cards, not after last) */}
                {!isLast && (
                  <div className="flex lg:hidden justify-center py-4" aria-hidden="true">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-6 bg-gradient-to-b from-[#165dfc]/40 to-[#165dfc]/20" />
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1,1 L6,6 L11,1" stroke="#165dfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
