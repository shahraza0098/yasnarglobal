import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { SERVICE_PRINCIPLES } from "@/data/services";

export function WhyChooseServices() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 md:mb-16">
          <SectionEyebrow variant="blue">OUR PRINCIPLES</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
            Built around your goals.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            Every project starts with understanding the problem. We combine
            thoughtful design, modern technology, and practical execution to
            create solutions that deliver value.
          </p>
        </div>

        {/* 4 Principles Grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICE_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              className="bg-[#f8fafc] rounded-xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-[#165dfc]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Geometric Icon Motif */}
                <div className="mb-6" aria-hidden="true">
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

                  {index === 3 && (
                    <div className="grid grid-cols-3 gap-1 size-7">
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                      <div className="bg-[#0b1528] rounded-[0.5px]" />
                      <div className="bg-transparent" />
                      <div className="bg-[#165dfc] rounded-[0.5px]" />
                    </div>
                  )}
                </div>

                <span className="font-mono text-xs font-semibold text-slate-400 block mb-2">
                  {principle.number}
                </span>

                <h3 className="text-xl font-bold text-[#0b1528] tracking-tight mb-3 group-hover:text-[#165dfc] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="size-1.5 bg-slate-300 rounded-full group-hover:bg-[#165dfc] transition-colors" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
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
