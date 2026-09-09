import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { GeometricBlock } from "@/components/common/GeometricBlock";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with YASNARGLOBAL PRIVATE LIMITED. Phone: +91 9608626035, Email: admin@yasnarglobal.com. Office in Hazaribagh, Jharkhand, India.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="GET IN TOUCH"
          title="Let's Start a Conversation."
          description="Have a question, inquiry, or need more information? We'd be happy to hear from you."
        />

        <section className="py-16 md:py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Column: Verified Company Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionEyebrow variant="blue" className="mb-3">
                    OFFICIAL CONTACT
                  </SectionEyebrow>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1528] tracking-tight">
                    Corporate Office & Communication
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    Direct communications regarding company products, web
                    platforms, and business inquiries.
                  </p>
                </div>

                {/* Contact Detail Cards */}
                <div className="space-y-4">
                  {/* Phone Card */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${COMPANY_DATA.phone}`}
                        className="text-base font-semibold text-[#0b1528] hover:text-[#165dfc] transition-colors mt-0.5 inline-block"
                      >
                        {COMPANY_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${COMPANY_DATA.email}`}
                        className="text-base font-semibold text-[#0b1528] hover:text-[#165dfc] transition-colors mt-0.5 inline-block"
                      >
                        {COMPANY_DATA.email}
                      </a>
                    </div>
                  </div>

                  {/* Registered Address Card */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Registered Office Address
                      </span>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed mt-0.5">
                        {COMPANY_DATA.address.formatted}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company Legal Entity Identification Notice */}
                <div className="p-5 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-[#0b1528]">
                    <GeometricBlock type="blue-solid" size="sm" />
                    <span>Legal Corporate Entity</span>
                  </div>
                  <p className="leading-relaxed">
                    {COMPANY_DATA.legalName} is registered under the Companies Act,
                    operating in the State of Jharkhand, Republic of India.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
