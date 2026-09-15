import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WhyChooseServices } from "@/components/services/WhyChooseServices";
import { HowWeWork } from "@/components/services/HowWeWork";
import { ServicesCta } from "@/components/services/ServicesCta";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: {
    absolute: "Services | YASNARGLOBAL PRIVATE LIMITED",
  },
  description:
    "Explore YASNARGLOBAL's technology services including web development, mobile app development, AI agent integration, blockchain, SaaS, and custom software solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | YASNARGLOBAL PRIVATE LIMITED",
    description:
      "Explore YASNARGLOBAL's technology services including web development, mobile app development, AI agent integration, blockchain, SaaS, and custom software solutions.",
    url: `${COMPANY_DATA.url}/services`,
    siteName: COMPANY_DATA.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | YASNARGLOBAL PRIVATE LIMITED",
    description:
      "Explore YASNARGLOBAL's technology services including web development, mobile app development, AI agent integration, blockchain, SaaS, and custom software solutions.",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* 1. Hero Section */}
        <ServicesHero />

        {/* 2. Services Grid with accessible detail modal */}
        <ServicesGrid />

        {/* 3. Why Choose Our Services Section */}
        <WhyChooseServices />

        {/* 4. How We Work Process Section */}
        <HowWeWork />

        {/* 5. Closing Call to Action */}
        <ServicesCta />
      </main>
    </div>
  );
}
