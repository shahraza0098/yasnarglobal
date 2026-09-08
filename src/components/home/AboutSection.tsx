import React from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { COMPANY_DATA } from "@/data/company";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] border-y border-slate-200/80 relative overflow-hidden">
      {/* Decorative background grid subtle square */}
      <div className="absolute top-12 left-6 opacity-30 pointer-events-none hidden lg:block">
        <GeometricBlock type="wireframe" size="xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factual Company Story and Concept Blocks */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <SectionEyebrow variant="blue">ABOUT US</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.12]">
              Technology Focused on <br className="hidden sm:inline" />
              Real-World Impact.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {COMPANY_DATA.aboutSummary}
            </p>

            {/* Two Factual Concept Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Concept 1 */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#165dfc]/40 transition-colors group">
                <div className="size-10 rounded-lg bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center mb-3 group-hover:bg-[#165dfc] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0b1528]">
                  Digital Products
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Built with purpose.
                </p>
              </div>

              {/* Concept 2 */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#165dfc]/40 transition-colors group">
                <div className="size-10 rounded-lg bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center mb-3 group-hover:bg-[#165dfc] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0b1528]">
                  User Focused
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Simple and accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Workspace Imagery with Geometric Accents */}
          <div className="lg:col-span-6 relative">
            {/* Geometric accents overlapping the image */}
            <div className="absolute -top-3 -right-3 z-20">
              <GeometricBlock type="blue-solid" size="md" />
            </div>
            <div className="absolute -bottom-4 -left-4 z-20">
              <GeometricBlock type="navy-solid" size="md" />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/about-workspace.jpg"
                alt="Technology developer working on software solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1528]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
