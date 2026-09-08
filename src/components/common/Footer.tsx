import React from "react";
import Link from "next/link";
import { COMPANY_DATA, NAV_LINKS, LEGAL_LINKS } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Name & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] rounded-sm inline-block"
              aria-label={`${COMPANY_DATA.legalName} Home`}
            >
              <div className="flex items-center gap-1">
                <span className="size-3 bg-[#165dfc] rounded-[1px]" />
                <span className="size-2 bg-[#0b1528] rounded-[0.5px]" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-[#0b1528] font-sans">
                {COMPANY_DATA.name}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              {COMPANY_DATA.legalName} develops practical digital products and
              software solutions designed to make technology more accessible and
              useful.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="size-2 bg-[#165dfc] rounded-[0.5px]" />
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Technology & Digital Products
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b1528] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#165dfc] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b1528] mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#165dfc] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b1528] mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-slate-600">
              <div>
                <span className="text-xs font-medium text-slate-400 block">
                  Phone
                </span>
                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  className="font-medium text-slate-800 hover:text-[#165dfc] transition-colors"
                >
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400 block">
                  Email
                </span>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="font-medium text-slate-800 hover:text-[#165dfc] transition-colors"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400 block">
                  Registered Address
                </span>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm mt-0.5">
                  {COMPANY_DATA.address.formatted}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {COMPANY_DATA.copyrightYear} {COMPANY_DATA.legalName}. All rights
            reserved.
          </p>
          <p className="text-slate-400">
            Registered in Jharkhand, India
          </p>
        </div>
      </div>
    </footer>
  );
}
