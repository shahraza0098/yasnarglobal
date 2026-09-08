import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { COMPANY_DATA } from "@/data/company";

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-2xl space-y-4 mb-14 md:mb-16">
          <SectionEyebrow variant="blue">WHY YASNARGLOBAL</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
            Focused on What <br />
            Matters.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            We build technology with a clear purpose — creating useful,
            accessible, and practical digital products.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COMPANY_DATA.focusPillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="bg-white rounded-xl p-8 sm:p-9 border border-slate-200 shadow-xs hover:border-[#165dfc]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Geometric Icon Motif matching the reference style */}
                <div className="mb-8" aria-hidden="true">
                  {index === 0 && (
                    <div className="grid grid-cols-3 gap-1 size-7">
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                    </div>
                  )}

                  {index === 1 && (
                    <div className="grid grid-cols-3 gap-1 size-7">
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                    </div>
                  )}

                  {index === 2 && (
                    <div className="grid grid-cols-3 gap-1 size-7">
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                    </div>
                  )}
                </div>

                {/* Card Number & Title */}
                <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-[#0b1528] tracking-tight mb-3 group-hover:text-[#165dfc] transition-colors">
                  {pillar.title}
                </h3>

                {/* Card Body */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="size-1.5 bg-slate-300 rounded-full group-hover:bg-[#165dfc] transition-colors" />
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                  Principle
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
