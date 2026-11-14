"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * HeroSkyBackdrop
 * Reusable hero background layer that displays the signature bright, dreamy
 * blue sky & cloudscape backdrop matching the official SM NextGen hero visual standard.
 * Features a soft downward gradient transition into the page surface.
 */
export default function HeroSkyBackdrop({
  children,
  className = "",
  parallax = true,
  skyOpacity = "opacity-95 dark:opacity-15",
  gradientOverlay = "bg-gradient-to-b from-sky-100/20 via-white/25 to-[#F8FAFC] dark:from-[#030D1A]/85 dark:via-[#071A30]/85 dark:to-[#030D1A]",
}) {
  const containerRef = useRef(null);
  const skyRef = useRef(null);

  useEffect(() => {
    if (!parallax) return;
    const container = containerRef.current;
    const sky = skyRef.current;
    if (!container || !sky) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(sky, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#030D1A] ${className}`}
    >
      {/* 1. Airy Dreamy Blue Sky & Cloudscape Image Layer */}
      <div
        ref={skyRef}
        className="absolute -top-10 inset-x-0 h-[125%] z-0 pointer-events-none select-none overflow-hidden will-change-transform"
      >
        <Image
          src="/images/Dreamy Blue Sky Cloudscape.png"
          alt="Bright dreamy blue sky and sunlit clouds backdrop"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover object-top sm:object-center ${skyOpacity}`}
        />
        <div className={`absolute inset-0 ${gradientOverlay}`} />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
