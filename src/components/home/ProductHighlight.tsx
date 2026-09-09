import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { GooglePlayButton } from "@/components/common/GooglePlayButton";
import { DeviceMockup } from "@/components/common/DeviceMockup";
import { PRODUCTS_DATA } from "@/data/company";

export function ProductHighlight() {
  const gyanMaster = PRODUCTS_DATA[0];

  return (
    <section id="product-showcase" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Product Information */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <SectionEyebrow variant="blue">OUR PRODUCT</SectionEyebrow>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0b1528] tracking-tight">
                {gyanMaster.name}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-[#165dfc]">
                {gyanMaster.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {gyanMaster.description}
            </p>

            {/* Play Store CTA */}
            <div className="pt-2">
              <GooglePlayButton url={gyanMaster.playStoreUrl} />
            </div>

            {/* Factual Product Category Indicator */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <span className="size-2 bg-[#165dfc] rounded-[0.5px]" />
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Category: {gyanMaster.category}
              </span>
            </div>
          </div>

          {/* Right Column: Device Mockup with Asymmetric Navy & Blue Geometric Slabs */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Navy & Blue Geometric Backing Slabs */}
            <div
              className="absolute -top-6 right-2 sm:right-10 w-44 h-44 bg-[#0b1528] rounded-2xl -z-10 shadow-lg"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 left-2 sm:left-10 w-40 h-40 bg-[#165dfc] rounded-2xl -z-10 shadow-md opacity-90"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 -right-4 -translate-y-1/2 hidden sm:block -z-10"
              aria-hidden="true"
            >
              <GeometricBlock type="wireframe" size="lg" />
            </div>

            {/* Neutral Smartphone Device Frame with Clean Placeholder */}
            <div className="relative z-10 py-6">
              <DeviceMockup screenshotUrl="/images/gyan-master-screenshot.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
