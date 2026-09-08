import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductHighlight } from "@/components/home/ProductHighlight";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Asymmetric Editorial Hero */}
        <HeroSection />

        {/* Factual Introduction & Concept Blocks */}
        <AboutSection />

        {/* Featured Gyan Master Product Showcase */}
        <ProductHighlight />

        {/* Why Yasnarglobal Core Pillars */}
        <WhyUsSection />

        {/* Connect & Approach Split Section */}
        <ApproachSection />

        {/* Editorial Closing Banner */}
        <CtaBanner />
      </main>
    </div>
  );
}
