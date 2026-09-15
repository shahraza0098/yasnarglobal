import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { ArrowRight } from "lucide-react";

export function ServicesCta() {
  return (
    <section className="bg-white border-t border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="bg-[#0b1528] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl">
          {/* Subtle Background Geometric Accents */}
          <div className="absolute -top-12 -right-12 hidden md:block opacity-20">
            <GeometricBlock type="wireframe" size="xl" />
          </div>
          <div className="absolute bottom-6 right-16 hidden lg:block opacity-30">
            <GeometricBlock type="blue-solid" size="md" />
          </div>
          <div className="absolute top-8 right-1/3 hidden xl:block opacity-20">
            <GeometricBlock type="dot-grid" />
          </div>

          <div className="max-w-2xl space-y-6 relative z-10">
            <SectionEyebrow variant="white">START A CONVERSATION</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Have an idea? <br />
              Let&apos;s build it.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Tell us what you&apos;re working on, and let&apos;s explore how
              technology can help bring it to life.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1528]"
              >
                Start a Project
                <ArrowRight className="size-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
