import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about YASNARGLOBAL PRIVATE LIMITED — a technology company developing practical mobile applications, web applications, and digital products.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="ABOUT YASNARGLOBAL"
          title={
            <>
              Building Practical <br className="hidden sm:inline" />
              Technology for People.
            </>
          }
          description={COMPANY_DATA.aboutSummary}
        />

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-[#165dfc]/40 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#165dfc]" />
                <div className="size-10 bg-[#165dfc]/10 text-[#165dfc] rounded-lg flex items-center justify-center mb-6">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <SectionEyebrow variant="blue" className="mb-2">
                  OUR MISSION
                </SectionEyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1528] tracking-tight mb-4">
                  Purposeful Digital Products
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {COMPANY_DATA.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-[#165dfc]/40 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#0b1528]" />
                <div className="size-10 bg-[#0b1528]/10 text-[#0b1528] rounded-lg flex items-center justify-center mb-6">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <SectionEyebrow variant="navy" className="mb-2">
                  OUR VISION
                </SectionEyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1528] tracking-tight mb-4">
                  Accessible Digital Future
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {COMPANY_DATA.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Split Section: Approach to Software */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Editorial Photo */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -top-3 -right-3 z-20">
                  <GeometricBlock type="blue-solid" size="md" />
                </div>
                <div className="absolute -bottom-3 -left-3 z-20">
                  <GeometricBlock type="wireframe" size="md" />
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
                  <Image
                    src="/images/about-workspace.jpg"
                    alt="Focused software engineering and system architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <SectionEyebrow variant="blue">OUR APPROACH</SectionEyebrow>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
                  Technology Designed Around Real Needs.
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  At YASNARGLOBAL PRIVATE LIMITED, we prioritize clarity,
                  accessibility, and practical utility over needless complexity.
                  Our development approach centers on understanding how people
                  interact with software and creating products that genuinely
                  simplify their daily tasks.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Whether building educational mobile platforms or specialized web
                  applications, every solution is developed with high standards of
                  reliability, performance, and accessibility.
                </p>

                <div className="pt-2">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] rounded-md transition-colors shadow-xs"
                  >
                    View Our Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Focus Areas / Capabilities */}
        <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4 mb-14">
              <SectionEyebrow variant="blue">CAPABILITIES</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1528] tracking-tight">
                Areas of Technology Focus
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Consistent with our corporate charter, we focus our technical
                efforts across three primary software domains:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {COMPANY_DATA.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#165dfc]/40 transition-all group"
                >
                  <div>
                    <div className="size-8 bg-[#165dfc]/10 text-[#165dfc] rounded-md flex items-center justify-center mb-6 font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1528] mb-3 group-hover:text-[#165dfc] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <span className="size-1.5 bg-[#165dfc] rounded-full" />
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                      Domain
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
