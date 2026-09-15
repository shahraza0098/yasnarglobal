import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PROCESS_STEPS } from "@/data/services";

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 md:mb-16">
          <SectionEyebrow variant="navy">OUR PROCESS</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            We follow a structured, collaborative workflow to ensure clarity,
            transparency, and steady progress at each phase of your project.
          </p>
        </div>

        {/* 4 Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between group hover:border-[#165dfc]/40 transition-colors"
            >
              <div>
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center size-9 rounded-lg bg-[#0b1528] text-white font-mono text-xs font-bold">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phase 0{idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#0b1528] tracking-tight mb-3 group-hover:text-[#165dfc] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator Bar */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#165dfc]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Step {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
