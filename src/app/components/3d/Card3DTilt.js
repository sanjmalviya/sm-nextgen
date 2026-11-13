"use client";

import React from "react";

/**
 * Clean, plain card container with no 3D wobble, tilting, or glare gimmicks.
 * Provides clean, predictable layout.
 */
export default function Card3DTilt({
  children,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}
