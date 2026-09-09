import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { GooglePlayButton } from "@/components/common/GooglePlayButton";
import { DeviceMockup } from "@/components/common/DeviceMockup";
import { PRODUCTS_DATA, COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore digital products by YASNARGLOBAL PRIVATE LIMITED, featuring Gyan Master — an educational application designed for learners.",
};

export default function ProductsPage() {
  const primaryProduct = PRODUCTS_DATA[0];

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="OUR PRODUCTS"
          title="Digital Products Built With Purpose."
          description="Explore software applications and digital solutions engineered by YASNARGLOBAL PRIVATE LIMITED for practical real-world utility."
        />

        {/* Featured Product: Gyan Master */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f8fafc] rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
              {/* Decorative Corner Geometric Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#165dfc]/10 rounded-bl-full pointer-events-none hidden sm:block" />
              <div className="absolute bottom-6 right-8 hidden lg:block opacity-40">
                <GeometricBlock type="dot-grid" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                {/* Left Column: Product Information */}
                <div className="lg:col-span-7 space-y-6 sm:space-y-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#165dfc]/10 text-[#165dfc] text-xs font-bold uppercase tracking-wider rounded-md">
                    <span className="size-1.5 rounded-full bg-[#165dfc]" />
                    Featured Application
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b1528] tracking-tight">
                      {primaryProduct.name}
                    </h2>
                    <p className="text-lg sm:text-xl font-medium text-[#165dfc]">
                      {primaryProduct.tagline}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                    {primaryProduct.description}
                  </p>

                  {/* Clean Technical & Architectural Points (Strictly Factual) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Domain
                      </div>
                      <div className="text-sm font-semibold text-[#0b1528]">
                        Educational Application
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Platform
                      </div>
                      <div className="text-sm font-semibold text-[#0b1528]">
                        Android / Mobile Ecosystem
                      </div>
                    </div>
                  </div>

                  {/* Google Play Button */}
                  <div className="pt-2">
                    <GooglePlayButton url={primaryProduct.playStoreUrl} />
                  </div>
                </div>

                {/* Right Column: Device Mockup */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div
                    className="absolute -top-4 -right-4 w-36 h-36 bg-[#0b1528] rounded-2xl -z-10 hidden sm:block"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#165dfc] rounded-2xl -z-10 hidden sm:block"
                    aria-hidden="true"
                  />
                  <DeviceMockup screenshotUrl="/images/gyan-master-screenshot.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Product Pipeline Architecture Notice */}
        <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <SectionEyebrow variant="navy" className="justify-center mb-4">
              PRODUCT PIPELINE
            </SectionEyebrow>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1528] tracking-tight mb-4">
              Expanding Our Software Portfolio
            </h3>

            <p className="text-slate-600 leading-relaxed text-base mb-8">
              {COMPANY_DATA.legalName} continually evaluates real-world challenges
              to research and develop practical mobile and web applications. Future
              solutions will be announced here as they complete development.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0b1528] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shadow-xs"
            >
              Contact Us for Inquiries
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
