import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

export function CtaBanner() {
  return (
    <section className="bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] lg:min-h-[460px]">
          {/* Left Column: Heading & Action */}
          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-12 py-16 lg:py-20 flex flex-col justify-center space-y-6 sm:space-y-8 bg-white border-r border-slate-100">
            <SectionEyebrow variant="blue">YASNARGLOBAL</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.12]">
              Technology for People. <br />
              Possibilities for Tomorrow.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed max-w-md">
              Discover how practical, accessible digital products can make a
              meaningful difference.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column: High-Res Earth Network Satellite Image with Deep Navy/Blue Geometry */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-auto bg-[#070e1b] overflow-hidden">
            <Image
              src="/images/earth-network.jpg"
              alt="Global digital network and connectivity"
              fill
              className="object-cover object-center brightness-95"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Geometric blue overlay block on corner */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#165dfc] opacity-90 hidden sm:block" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0b1528]/80 backdrop-blur-xs hidden sm:block border-t border-l border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
