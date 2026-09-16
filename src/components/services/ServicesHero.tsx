import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { ArrowRight, ChevronDown, Globe, Smartphone, Bot, Palette } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative bg-white border-b border-slate-200/80 pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Background Geometric Motifs */}
      <div className="absolute top-10 right-12 hidden lg:block opacity-20" aria-hidden="true">
        <GeometricBlock type="wireframe" size="xl" />
      </div>
      <div className="absolute bottom-16 left-12 hidden xl:block opacity-15" aria-hidden="true">
        <GeometricBlock type="dot-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <SectionEyebrow variant="blue">OUR SERVICES</SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0b1528] tracking-tight leading-[1.12]">
              Technology that{" "}
              <span className="relative">
                <span className="relative z-10">moves your</span>
                <span
                  className="absolute bottom-1 left-0 w-full h-3 bg-[#165dfc]/10 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>{" "}
              <br className="hidden sm:inline" />
              business forward.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              From innovative digital products to intelligent AI-powered
              workflows, we help businesses turn ideas into scalable, impactful
              technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
              >
                Start a Project
                <ArrowRight className="size-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="#services-list"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#0b1528] bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc]"
              >
                Explore Services
                <ChevronDown className="size-4 ml-1.5 text-slate-500" />
              </a>
            </div>

            {/* Service Indicator Chips */}
            <div className="hidden sm:flex items-center gap-2 pt-4">
              <GeometricBlock type="blue-solid" size="sm" />
              <GeometricBlock type="navy-solid" size="sm" />
              <span className="tracking-wide uppercase text-[11px] text-slate-400 font-medium">
                8 Services • End-to-End Solutions
              </span>
            </div>
          </div>

          {/* Right Column: Hero Illustration Composition */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Accent — Top Right */}
            <div className="absolute -top-5 -right-5 hidden sm:block z-0" aria-hidden="true">
              <GeometricBlock type="blue-solid" size="lg" className="opacity-80" />
            </div>
            {/* Decorative Accent — Bottom Left */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block z-0" aria-hidden="true">
              <GeometricBlock type="wireframe" size="lg" />
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/60 border border-slate-200/80 shadow-lg p-3 sm:p-4">
              {/* Primary Hero Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/services/hero.jpg"
                  alt="Software development and digital services illustration showing web, mobile, and analytics tools"
                  fill
                  priority
                  className="object-contain p-2 sm:p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Service Indicator Cards */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm">
                  <div className="size-7 rounded-md bg-[#165dfc]/10 flex items-center justify-center shrink-0">
                    <Globe className="size-3.5 text-[#165dfc]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate">
                    Web
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm">
                  <div className="size-7 rounded-md bg-[#165dfc]/10 flex items-center justify-center shrink-0">
                    <Smartphone className="size-3.5 text-[#165dfc]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate">
                    Mobile
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm">
                  <div className="size-7 rounded-md bg-[#165dfc]/10 flex items-center justify-center shrink-0">
                    <Bot className="size-3.5 text-[#165dfc]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate">
                    AI
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm">
                  <div className="size-7 rounded-md bg-[#165dfc]/10 flex items-center justify-center shrink-0">
                    <Palette className="size-3.5 text-[#165dfc]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate">
                    Design
                  </span>
                </div>
              </div>
            </div>

            {/* Background Glow Effect */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#165dfc]/5 via-transparent to-transparent rounded-full blur-3xl -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
