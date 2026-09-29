"use client";
import React from "react";

export default function Card3DTilt({
  children,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-white dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 shadow-sm transition-colors duration-200 overflow-hidden ${className}`}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
