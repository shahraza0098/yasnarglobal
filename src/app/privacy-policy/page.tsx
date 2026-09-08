import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for YASNARGLOBAL PRIVATE LIMITED. Learn how we handle information, data security, and communication.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="LEGAL"
          title="Privacy Policy"
          description={`Last updated: January 2026. This Privacy Policy applies to ${COMPANY_DATA.legalName} and our official website ${COMPANY_DATA.domain}.`}
        />

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  1. Overview & Commitment
                </h2>
                <p>
                  {COMPANY_DATA.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed
                  to safeguarding the privacy of visitors to our website (
                  <span className="font-semibold">{COMPANY_DATA.domain}</span>) and
                  users of our digital applications. This Privacy Policy details our
                  practices regarding the collection, handling, and security of
                  information when you interact with our official web platform.
                </p>
              </div>

              {/* Information Collected */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  2. Information We Collect
                </h2>
                <p>
                  We believe in minimal data collection. We only collect
                  information that you voluntarily provide directly to us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Contact Communications:</strong> When you initiate an
                    inquiry via our contact form, email, or telephone, we receive
                    the details you provide, including your name, email address,
                    phone number, and the message content.
                  </li>
                  <li>
                    <strong>Standard Web Server Logs:</strong> Like standard web
                    servers worldwide, basic non-personally identifiable technical
                    information (such as browser user agent, operating system, and
                    referring URL) may be processed transiently by hosting
                    infrastructure strictly for network diagnostics and system
                    security.
                  </li>
                </ul>
              </div>

              {/* How Information Is Used */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  3. How We Use Your Information
                </h2>
                <p>
                  Any information you share with {COMPANY_DATA.legalName} is
                  utilized solely for legitimate business communications:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>To respond directly to your questions, feedback, or inquiries.</li>
                  <li>To provide factual information about our digital products and solutions.</li>
                  <li>To maintain the stability, integrity, and security of our website.</li>
                  <li>To comply with applicable laws and regulatory requirements in India.</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, monetize, or trade your personal information
                  to any third parties.
                </p>
              </div>

              {/* Cookies & Tracking Technologies */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  4. Cookies & Tracking Technologies
                </h2>
                <p>
                  Our website does not employ tracking cookies, cross-site
                  behavioral advertising trackers, or invasive analytics tools. If
                  essential session cookies are utilized by underlying hosting
                  technologies, they are strictly operational and contain no
                  personally identifiable profiling data.
                </p>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  5. Third-Party Services & Links
                </h2>
                <p>
                  Our website may include links to external platforms, such as the
                  official Google Play Store for mobile applications. When you
                  navigate away from our domain to an external platform, their
                  respective privacy practices and policies govern your data. We
                  encourage you to review the privacy notices of any third-party
                  destinations you visit.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  6. Data Security
                </h2>
                <p>
                  We implement reasonable technical and organizational measures to
                  protect your information against unauthorized access, loss, or
                  alteration. All communications through our web platform are
                  encrypted in transit using modern Transport Layer Security (TLS /
                  HTTPS).
                </p>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  7. Your Rights
                </h2>
                <p>
                  In accordance with applicable Indian data protection laws, you
                  have the right to request access to any personal communication data
                  we hold about you, request corrections, or ask for the deletion
                  of your correspondence records. You may exercise these rights at
                  any time by writing to our designated email.
                </p>
              </div>

              {/* Policy Updates */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may periodically update this Privacy Policy to reflect changes
                  in our practices or regulatory standards. Any revisions will be
                  reflected on this page with an updated effective date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 mt-8">
                <h2 className="text-xl font-bold text-[#0b1528] tracking-tight mb-2">
                  9. Contact Us Regarding Privacy
                </h2>
                <p className="text-sm text-slate-600 mb-3">
                  If you have any questions, clarifications, or requests concerning
                  this Privacy Policy, please contact our corporate administration:
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
                    <strong>Address:</strong> {COMPANY_DATA.address.formatted}
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
