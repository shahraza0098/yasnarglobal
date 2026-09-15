"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
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
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs hover:border-[#165dfc]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-xl bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center transition-colors group-hover:bg-[#165dfc] group-hover:text-white">
                      <IconComponent className="size-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-3 group-hover:text-[#165dfc] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="pt-2 pb-6 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Key Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                      {service.capabilities.slice(0, 6).map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <Check className="size-3.5 text-[#165dfc] shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                      {service.capabilities.length > 6 && (
                        <li className="text-[11px] text-slate-400 italic pt-0.5">
                          + {service.capabilities.length - 6} additional areas
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: View Details Action */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(service, e.currentTarget)}
                    className="inline-flex items-center text-sm font-semibold text-[#165dfc] hover:text-[#0f4bd8] transition-colors group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#165dfc] rounded-sm py-1"
                    aria-haspopup="dialog"
                    aria-label={`View details for ${service.title}`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>

                  <span className="size-1.5 rounded-full bg-slate-200 group-hover:bg-[#165dfc] transition-colors" />
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
