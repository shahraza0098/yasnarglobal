import React from "react";

interface GeometricBlockProps {
  type?: "blue-solid" | "navy-solid" | "wireframe" | "dual" | "dot-grid";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GeometricBlock({
  type = "blue-solid",
  size = "md",
  className = "",
}: GeometricBlockProps) {
  const sizeMap = {
    sm: "size-6",
    md: "size-10",
    lg: "size-16",
    xl: "size-24",
  }[size];

  if (type === "blue-solid") {
    return (
      <div
        className={`${sizeMap} bg-[#165dfc] rounded-[1px] shadow-sm ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (type === "navy-solid") {
    return (
      <div
        className={`${sizeMap} bg-[#0b1528] rounded-[1px] shadow-sm ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (type === "wireframe") {
    return (
      <div
        className={`${sizeMap} border-2 border-[#165dfc]/40 rounded-[1px] bg-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (type === "dual") {
    return (
      <div className={`relative ${sizeMap} ${className}`} aria-hidden="true">
        <div className="absolute top-0 left-0 size-3/4 bg-[#0b1528] rounded-[1px]" />
        <div className="absolute bottom-0 right-0 size-1/2 bg-[#165dfc] rounded-[1px]" />
      </div>
    );
  }

  if (type === "dot-grid") {
    return (
      <div
        className={`grid grid-cols-3 gap-1.5 p-1 ${className}`}
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`size-1.5 rounded-[0.5px] ${
              i % 2 === 0 ? "bg-[#165dfc]" : "bg-[#0b1528]/30"
            }`}
          />
        ))}
      </div>
    );
  }

  return null;
}
