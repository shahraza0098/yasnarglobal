import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline and Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            <SectionEyebrow variant="blue">
              TECHNOLOGY FOR A BETTER TOMORROW
            </SectionEyebrow>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0b1528] tracking-tight leading-[1.08] font-sans">
              Building Technology <br className="hidden sm:inline" />
              That Solves Real <br className="hidden sm:inline" />
              Problems.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              YASNARGLOBAL PRIVATE LIMITED develops practical digital products
              and software solutions designed to make technology more accessible
              and useful.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#0b1528] bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Contact Us
              </Link>
            </div>

            {/* Decorative Grid Marker Accent */}
            <div className="hidden sm:flex items-center gap-3 pt-6 text-xs text-slate-400 font-medium">
              <GeometricBlock type="blue-solid" size="sm" />
              <GeometricBlock type="navy-solid" size="sm" />
              <span className="tracking-wide uppercase text-[11px] text-slate-400">
                Modular Architecture • Purposeful Software
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Modular Image Grid Composition */}
          <div className="lg:col-span-6 relative">
            {/* Background Geometric Accent Blocks */}
            <div className="absolute -top-4 -right-4 hidden sm:block z-0">
              <GeometricBlock type="blue-solid" size="lg" className="opacity-90" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block z-0">
              <GeometricBlock type="wireframe" size="lg" />
            </div>

            {/* 4-Tile Composition Container */}
            <div className="relative z-10 grid grid-cols-2 gap-3.5 sm:gap-4 p-2 sm:p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80 shadow-lg">
              {/* Tile 1: Top Left - Editorial Portrait with Tech Focus */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Modern software engineer in professional workplace"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528]/85 via-[#0b1528]/25 to-transparent flex items-end p-3.5">
                  <p className="text-[11px] sm:text-xs text-white font-medium leading-snug">
                    &ldquo;Technology should create practical opportunities for everyone.&rdquo;
                  </p>
                </div>
              </div>

              {/* Tile 2: Top Right - Deep Navy Graphic Block with Nested Geometry */}
              <div className="relative aspect-square rounded-xl bg-[#0b1528] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex justify-between items-start">
                  <div className="size-6 bg-[#165dfc] rounded-[1px]" />
                  <div className="size-3 border border-white/40 rounded-[0.5px]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#165dfc] block">
                    PHILOSOPHY
                  </span>
                  <p className="text-white text-xs sm:text-sm font-semibold leading-snug">
                    Structured. Accessible. Resilient.
                  </p>
                </div>
                <div className="size-10 border-2 border-white/20 rounded-[2px] self-end" />
              </div>

              {/* Tile 3: Bottom Left - Vibrant Electric Blue Wave Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 group">
                <Image
                  src="/images/hero-wave.jpg"
                  alt="Abstract electric blue digital data flow"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528]/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="size-2.5 bg-[#165dfc] rounded-[0.5px]" />
                </div>
              </div>

              {/* Tile 4: Bottom Right - Navy Statement Card */}
              <div className="relative aspect-square rounded-xl bg-[#0b1528] p-5 sm:p-6 flex flex-col justify-center text-left">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#165dfc] font-bold">
                    CORE VALUES
                  </span>
                  <div className="text-white font-bold text-base sm:text-lg lg:text-xl leading-tight space-y-1">
                    <p className="text-white">Practical</p>
                    <p className="text-slate-300">Simple</p>
                    <p className="text-[#165dfc]">Impactful</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#165dfc]" />
                  <span className="size-1.5 rounded-full bg-white/40" />
                  <span className="size-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
