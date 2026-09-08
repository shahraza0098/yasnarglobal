import React from "react";
import Image from "next/image";

interface DeviceMockupProps {
  screenshotUrl?: string;
  alt?: string;
  className?: string;
}

export function DeviceMockup({
  screenshotUrl,
  alt = "Gyan Master Educational Application Interface",
  className = "",
}: DeviceMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[310px] md:w-[330px] rounded-[42px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(11,21,40,0.35)] ring-1 ring-white/20 ${className}`}
    >
      {/* Device Outer Frame Accents */}
      <div className="absolute -inset-px rounded-[43px] border border-slate-700/50 pointer-events-none" />

      {/* Screen Enclosure */}
      <div className="relative w-full aspect-[9/19.5] rounded-[34px] overflow-hidden bg-[#070e1b] flex flex-col justify-between p-6 select-none">
        {/* Device Notch / Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-end px-3">
          <div className="size-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
        </div>

        {/* If official screenshot is provided, render it cleanly */}
        {screenshotUrl ? (
          <div className="absolute inset-0 z-10">
            <Image
              src={screenshotUrl}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 340px"
            />
          </div>
        ) : (
          /* Neutral Branded Placeholder Screen (Adhering strictly to client instructions: no invented screens/features) */
          <div className="relative z-10 flex flex-col items-center justify-between h-full pt-8 pb-4 text-center">
            {/* Minimal Status Bar */}
            <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-medium px-2">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="inline-block size-1.5 rounded-full bg-slate-400" />
                <span className="inline-block size-1.5 rounded-full bg-slate-400" />
                <span className="inline-block size-1.5 rounded-full bg-slate-400" />
              </div>
            </div>

            {/* Central Official Placeholder Identification */}
            <div className="my-auto flex flex-col items-center px-4">
              <div className="size-16 rounded-2xl bg-[#165dfc]/15 border border-[#165dfc]/30 flex items-center justify-center mb-5 text-[#165dfc] shadow-lg shadow-[#165dfc]/10">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white">
                Gyan Master
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#165dfc] font-semibold mt-1">
                Educational Application
              </p>

              <div className="mt-8 px-3 py-1.5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] text-slate-400 leading-relaxed max-w-[200px]">
                Official App Interface & Play Store Availability Coming Soon
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="w-28 h-1 bg-white/30 rounded-full mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
