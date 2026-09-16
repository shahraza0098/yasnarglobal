"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Blocks,
  Bot,
  Palette,
  Cloud,
  Code2,
  Plug,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

const iconMap = {
  Globe,
  Smartphone,
  Blocks,
  Bot,
  Palette,
  Cloud,
  Code2,
  Plug,
};

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal and restore focus
  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
    if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
      previouslyFocusedElementRef.current = null;
    }
  }, []);

  // Open modal and store previously focused element
  const handleOpenModal = (service: ServiceItem, triggerElement: HTMLElement) => {
    previouslyFocusedElementRef.current = triggerElement;
    setSelectedService(service);
  };

  // Keyboard and scroll management
  useEffect(() => {
    if (!selectedService) return;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseModal();
      }

      // Tab trap inside modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedService, handleCloseModal]);

  return (
    <section
      id="services-list"
      className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 md:mb-16">
          <SectionEyebrow variant="blue">CAPABILITIES & EXPERTISE</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1528] tracking-tight leading-[1.15]">
            Engineered for Reliability. <br />
            Built for Scale.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            Explore our comprehensive suite of modern software engineering,
            application development, and workflow integration capabilities.
          </p>
        </div>

        {/* 8 Services Grid: 2 columns on desktop/tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName];
            const MAX_VISIBLE_CAPS = 6;
            const visibleCaps = service.capabilities.slice(0, MAX_VISIBLE_CAPS);
            const remainingCount = service.capabilities.length - MAX_VISIBLE_CAPS;

            return (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#165dfc]/40 transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* ─── Top: Hero Image ─── */}
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-5 sm:p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle bottom fade for seamless blend into content */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* ─── Body Content ─── */}
                <div className="flex flex-col flex-1 px-7 sm:px-8 pb-7 sm:pb-8">
                  {/* Icon + Number Row */}
                  <div className="flex items-center justify-between mt-5 mb-4">
                    <div className="size-12 rounded-xl bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#165dfc] group-hover:text-white">
                      <IconComponent className="size-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-300 tracking-wider select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1528] tracking-tight mb-2.5 group-hover:text-[#165dfc] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Capabilities */}
                  <div className="pt-5 border-t border-slate-100 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#165dfc]/70 block mb-3">
                      Key Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] text-slate-700 font-medium">
                      {visibleCaps.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <Check className="size-4 text-[#165dfc] shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                    {remainingCount > 0 && (
                      <p className="text-xs text-[#165dfc]/60 italic mt-2.5">
                        + {remainingCount} additional area{remainingCount > 1 ? "s" : ""}
                      </p>
                    )}
                  </div>

                  {/* View Details CTA */}
                  <div className="pt-6 mt-auto border-t border-slate-100">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(service, e.currentTarget)}
                      className="inline-flex items-center text-sm font-semibold text-[#165dfc] hover:text-[#0f4bd8] transition-colors group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] rounded-sm py-1"
                      aria-haspopup="dialog"
                      aria-label={`View details for ${service.title}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="size-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-[#f8fafc]">
              <div className="flex items-center gap-3.5">
                <div className="size-11 rounded-xl bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center shrink-0">
                  {(() => {
                    const ModalIcon = iconMap[selectedService.iconName];
                    return <ModalIcon className="size-5" />;
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#165dfc]">
                      {selectedService.number}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Service Details
                    </span>
                  </div>
                  <h3
                    id="service-modal-title"
                    className="text-xl sm:text-2xl font-bold text-[#0b1528] tracking-tight mt-0.5"
                  >
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseModal}
                className="p-2 rounded-lg text-slate-400 hover:text-[#0b1528] hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc]"
                aria-label="Close service details dialog"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
              {/* Modal Service Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 672px) 100vw, 672px"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Service Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  {selectedService.overview}
                </p>
              </div>

              {/* All Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <Check className="size-4 text-[#165dfc] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Engineering Deliverables
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {selectedService.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#165dfc] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-[#f8fafc] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Have specific requirements for this domain?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 bg-white rounded-md hover:bg-slate-50 transition-colors w-full sm:w-auto"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={handleCloseModal}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] rounded-md transition-colors shadow-xs w-full sm:w-auto"
                >
                  Inquire About This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
