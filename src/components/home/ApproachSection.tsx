import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";

export function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Technology Image with Geometric Accents */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Geometric accents */}
            <div className="absolute -top-3 -left-3 z-20">
              <GeometricBlock type="navy-solid" size="md" />
            </div>
            <div className="absolute -bottom-3 -right-3 z-20">
              <GeometricBlock type="blue-solid" size="md" />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/collaborative-work.jpg"
                alt="Digital product development and collaborative engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1528]/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <SectionEyebrow variant="blue">LET&apos;S CONNECT</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
              Have a question or want to connect with us?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              We&apos;re open to conversations, ideas, feedback, and opportunities
              to build useful digital experiences.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
