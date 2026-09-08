import React from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";

interface PageHeroProps {
  eyebrow: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className = "",
}: PageHeroProps) {
  return (
    <div
      className={`relative bg-white border-b border-slate-200/80 pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden ${className}`}
    >
      {/* Subtle Background Geometric Accents */}
      <div className="absolute top-8 right-12 hidden lg:block opacity-40">
        <GeometricBlock type="wireframe" size="lg" />
      </div>
      <div className="absolute bottom-4 right-28 hidden sm:block opacity-60">
        <GeometricBlock type="blue-solid" size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <SectionEyebrow variant="blue">{eyebrow}</SectionEyebrow>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0b1528] tracking-tight leading-[1.12]">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
