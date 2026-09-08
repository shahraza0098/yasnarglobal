import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "white";
  className?: string;
  withSquare?: boolean;
}

export function SectionEyebrow({
  children,
  variant = "blue",
  className = "",
  withSquare = true,
}: SectionEyebrowProps) {
  const colorStyles = {
    blue: "text-[#165dfc]",
    navy: "text-[#0b1528]",
    white: "text-white/90",
  }[variant];

  const squareStyles = {
    blue: "bg-[#165dfc]",
    navy: "bg-[#0b1528]",
    white: "bg-white",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] ${colorStyles} ${className}`}
    >
      {withSquare && (
        <span
          className={`inline-block size-2 rounded-[1px] shrink-0 ${squareStyles}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
