"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    num: "01",
    label: "Stage one",
    title: "Discover",
    focus: "Focus: Business model, customer profile, market and goals.",
    desc: "Understand your business, customers, market and objectives.",
    image: "/images/wg01-discover.png",
    alt: "Isometric business research environment representing discovery",
  },
  {
    num: "02",
    label: "Stage two",
    title: "Diagnose",
    focus: "Focus: Growth gaps, performance and opportunities.",
    desc: "Identify the bottlenecks affecting acquisition, conversions, sales and operations.",
    image: "/images/wg02-diagnose.png",
    alt: "Isometric business audit environment identifying a workflow bottleneck",
  },
  {
    num: "03",
    label: "Stage three",
    title: "Strategize",
    focus: "Focus: Strategy, priorities and execution planning.",
    desc: "Create a prioritized roadmap based on business objectives and available resources.",
    image: "/images/wg03-strategize.png",
    alt: "Isometric strategic roadmap planning environment",
  },
  {
    num: "04",
    label: "Stage four",
    title: "Build",
    focus: "Focus: Development, implementation and execution.",
    desc: "Implement the right combination of marketing, branding, technology and automation.",
    image: "/images/wg04-build.png",
    alt: "Isometric digital infrastructure and web engineering construction environment",
  },
  {
    num: "05",
    label: "Stage five",
    title: "Optimize",
    focus: "Focus: Measurement, analysis and continuous improvement.",
    desc: "Evaluate performance and improve the systems that drive progress.",
    image: "/images/wg05-optimize.png",
    alt: "Isometric performance optimization dashboard with analytics dials",
  },
  {
    num: "06",
    label: "Stage six",
    title: "Scale",
    focus: "Focus: Systems, efficiency and sustainable expansion.",
    desc: "Strengthen successful processes and expand growth opportunities.",
    image: "/images/wg06-scale.png",
    alt: "Isometric enterprise business network scaling upwards",
  },
];

export default function GrowthProcessDiagram() {
  const gridRef = useRef(null);
  const artworksRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Staggered 3D Card Entrance on Scroll
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        {
          y: 60,
          rotateX: 12,
          opacity: 0,
          transformPerspective: 1200,
        },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
          },
        }
      );
    }

    // 2. Subtle scroll-linked floating parallax for each isometric artwork
    artworksRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1.2,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      {/* Systematic Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAFB] dark:bg-[#0097B2]/10 border border-[#D6EEF1] dark:border-[#0097B2]/20 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" />
          <span>THE SM NEXTGEN GROWTH FRAMEWORK</span>
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4 leading-tight">
          From Business Challenges to{" "}
          <span className="text-[#0097B2]">
            Measurable Progress.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
          Every business has a different starting point. We follow a structured process to understand what matters, identify opportunities and build the right solutions.
        </p>

        <div className="inline-flex items-center gap-2 mt-5 text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
          <span>SIX CONNECTED STAGES</span>
        </div>
      </div>

      {/* Systematic 6-Card Grid Layout with 3D Perspective */}
      <div
        ref={gridRef}
        style={{ perspective: "1200px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {STAGES.map((stage, idx) => (
          <article
            key={stage.num}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071A30] shadow-xs hover:border-[#0097B2]/40 transition-colors p-5 flex flex-col justify-between will-change-transform"
          >
            <div>
              {/* Card Top: Number & Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] dark:bg-[#0097B2] text-white text-xs font-bold font-heading flex items-center justify-center shrink-0">
                  {stage.num}
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    {stage.label}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white leading-tight">
                    {stage.title}
                  </h3>
                </div>
              </div>

              {/* Artwork Figure with Scroll Parallax */}
              <figure className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-50 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <div
                  ref={(el) => {
                    artworksRef.current[idx] = el;
                  }}
                  className="w-full h-full relative will-change-transform"
                >
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover object-center"
                  />
                </div>
              </figure>

              {/* Card Copy */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
                {stage.desc}
              </p>
            </div>

            {/* Card Foot: Focus Label & Direct Arrow */}
            <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-[#0097B2] dark:text-cyan-400">
                {stage.focus}
              </span>
              <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[#0097B2]">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
