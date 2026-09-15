import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { ArrowRight, ChevronDown } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative bg-white border-b border-slate-200/80 pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Geometric Motifs */}
      <div className="absolute top-10 right-12 hidden lg:block opacity-35">
        <GeometricBlock type="wireframe" size="xl" />
      </div>
      <div className="absolute bottom-6 right-36 hidden sm:block opacity-60">
        <GeometricBlock type="blue-solid" size="sm" />
      </div>
      <div className="absolute top-1/2 right-1/4 hidden xl:block opacity-25">
        <GeometricBlock type="dot-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <SectionEyebrow variant="blue">OUR SERVICES</SectionEyebrow>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0b1528] tracking-tight leading-[1.12]">
            Technology that moves your business forward.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
            From innovative digital products to intelligent AI-powered workflows,
            we help businesses turn ideas into scalable, impactful technology
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
            >
              Start a Project
              <ArrowRight className="size-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <a
              href="#services-list"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#0b1528] bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-md transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc]"
            >
              Explore Services
              <ChevronDown className="size-4 ml-1.5 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
