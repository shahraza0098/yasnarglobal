"use client";

import React, { useState } from "react";

interface GooglePlayButtonProps {
  url?: string;
  className?: string;
}

export function GooglePlayButton({ url, className = "" }: GooglePlayButtonProps) {
  const [showNotice, setShowNotice] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!url) {
      e.preventDefault();
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 4000);
    }
  };

  const buttonContent = (
    <div className="relative inline-block">
      <div
        className={`inline-flex items-center gap-3 bg-[#0a0f1d] hover:bg-[#141b2d] text-white px-5 py-3 rounded-lg border border-slate-700/60 shadow-md transition-all duration-200 cursor-pointer select-none group ${className}`}
        onClick={handleClick}
        role={url ? "link" : "button"}
        aria-label="Get Gyan Master on Google Play"
      >
        {/* Google Play Vector Icon */}
        <svg
          className="w-6 h-6 shrink-0 transition-transform group-hover:scale-105"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.368-.61-.926-.61-1.614V3.428c0-.688.245-1.246.61-1.614z"
            fill="#00D3FF"
          />
          <path
            d="M17.18 8.614L13.792 12l3.388 3.386 3.824-2.185c.612-.35.996-.983.996-1.614 0-.63-.384-1.264-.996-1.614L17.18 8.614z"
            fill="#FFD200"
          />
          <path
            d="M3.609 22.186L13.792 12l3.388 3.386-11.83 6.76c-.46.263-.94.275-1.341.04z"
            fill="#FF3333"
          />
          <path
            d="M17.18 8.614L13.792 12 3.609 1.814C4.01 1.579 4.49 1.59 4.95 1.854l12.23 6.76z"
            fill="#00E676"
          />
        </svg>

        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] tracking-wider text-slate-400 font-medium uppercase">
            GET IT ON
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-white font-sans mt-0.5">
            Google Play
          </span>
        </div>
      </div>

      {showNotice && !url && (
        <div className="absolute top-full left-0 mt-2 w-64 p-2.5 bg-slate-900 text-slate-200 text-xs rounded-md shadow-xl border border-slate-700 z-30 animate-in fade-in slide-in-from-top-1">
          <p className="font-medium text-white">Google Play Store Link</p>
          <p className="text-slate-400 mt-0.5">
            The official Google Play listing URL will be updated upon final store deployment.
          </p>
        </div>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
