"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_DATA, NAV_LINKS } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] rounded-sm py-1"
          aria-label={`${COMPANY_DATA.name} Home`}
        >
          {/* Geometric mark inspired by reference */}
          <div className="flex items-center gap-1">
            <span className="size-3 bg-[#165dfc] rounded-[1px] transition-transform duration-200 group-hover:scale-110" />
            <span className="size-2 bg-[#0b1528] rounded-[0.5px]" />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0b1528] font-sans">
            {COMPANY_DATA.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#165dfc] font-semibold"
                    : "text-slate-600 hover:text-[#0b1528]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#165dfc] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] rounded-md transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] focus-visible:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-700 hover:text-[#0b1528] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-50 text-[#165dfc] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0b1528]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] rounded-md transition-colors shadow-xs"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
