import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing the use of YASNARGLOBAL PRIVATE LIMITED official website and software platforms.",
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="LEGAL"
          title="Terms & Conditions"
          description={`Effective Date: January 2026. Please read these terms carefully prior to utilizing the website and services of ${COMPANY_DATA.legalName}.`}
        />

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the website of {COMPANY_DATA.legalName}{" "}
                  (&quot;the Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) at{" "}
                  <span className="font-semibold">{COMPANY_DATA.domain}</span>, you
                  agree to be bound by these Terms &amp; Conditions and all
                  applicable laws and regulations of India. If you do not agree
                  with any portion of these terms, you should refrain from using
                  this website.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  All content, text, graphics, logos, layouts, source code, and
                  software materials displayed on or making up this website are the
                  exclusive proprietary property of {COMPANY_DATA.legalName} or its
                  licensors and are protected under Indian and international
                  copyright, trademark, and intellectual property laws.
                </p>
                <p className="mt-2">
                  You may not reproduce, modify, duplicate, distribute, license, or
                  create derivative works from any materials found on this site
                  without prior written authorization from the Company.
                </p>
              </div>

              {/* Product Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  3. Product Information & Descriptions
                </h2>
                <p>
                  We strive to ensure all information regarding our mobile
                  applications (such as Gyan Master) and digital software products
                  is accurate and up to date. However, product features,
                  availability, platform requirements, and release milestones are
                  subject to ongoing development and refinement without prior
                  notice.
                </p>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  4. Acceptable Use Policy
                </h2>
                <p>
                  When interacting with this website and any communication forms,
                  you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use the website for any unlawful, fraudulent, or malicious purpose.</li>
                  <li>Transmit unsolicited commercial solicitations, spam, or promotional material.</li>
                  <li>Attempt to compromise the security, integrity, or functionality of the hosting infrastructure.</li>
                  <li>Impersonate any individual or misrepresent your affiliation with any entity.</li>
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  5. External Links
                </h2>
                <p>
                  This website may contain links to external third-party sites or
                  app distribution channels (including the Google Play Store). These
                  links are provided solely for convenience. {COMPANY_DATA.legalName}{" "}
                  does not endorse, control, or assume responsibility for the
                  content, terms, or privacy practices of external websites.
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  6. Disclaimer of Warranties
                </h2>
                <p>
                  This website and all content herein are provided on an &quot;as is&quot;
                  and &quot;as available&quot; basis without warranties of any kind, whether
                  express or implied, including but not limited to merchantability,
                  fitness for a particular purpose, or non-infringement. We make no
                  guarantees that the site will operate uninterrupted or error-free.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  7. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted under applicable law,{" "}
                  {COMPANY_DATA.legalName}, its directors, employees, or agents
                  shall not be liable for any indirect, incidental, consequential,
                  or punitive damages arising out of your access to, use of, or
                  inability to use this website.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  8. Governing Law & Jurisdiction
                </h2>
                <p>
                  These Terms &amp; Conditions shall be governed by and construed in
                  accordance with the laws of the Republic of India. Any disputes
                  arising hereunder shall be subject to the exclusive jurisdiction
                  of the competent courts situated in Jharkhand, India.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  9. Modifications to Terms
                </h2>
                <p>
                  {COMPANY_DATA.legalName} reserves the right to revise or update
                  these terms at any time. Continued use of the website following
                  the posting of changes constitutes acceptance of the modified
                  terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 mt-8">
                <h2 className="text-xl font-bold text-[#0b1528] tracking-tight mb-2">
                  10. Inquiries & Legal Contact
                </h2>
                <p className="text-sm text-slate-600 mb-3">
                  For questions or legal communications regarding these Terms &amp;
                  Conditions, please reach out to us:
                </p>
                <div className="text-sm text-slate-800 space-y-1">
                  <p>
                    <strong>Company:</strong> {COMPANY_DATA.legalName}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="text-[#165dfc] underline font-medium"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </p>
                  <p>
                    <strong>Registered Address:</strong> {COMPANY_DATA.address.formatted}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
