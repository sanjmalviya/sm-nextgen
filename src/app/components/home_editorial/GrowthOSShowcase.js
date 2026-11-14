"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OS_DASHBOARDS = [
  {
    id: "growth-score",
    title: "Growth Score Engine & Audit (90/100)",
    desc: "SM NextGen Growth Score Engine: 90/100 Excellent • Top 3 Rank. 24-Point Audit breakdown (Completeness 19/20, Reviews 22/25, Media 12/15, Business Info 15/15) with 9 Verified Reviews on Google Maps.",
    image: "/images/Real Growth OS.png",
    alt: "Real Growth OS Dashboard showing 90/100 Growth Score, 24-Point Audit breakdown, 5-Star Rating, 9 Verified Reviews on Google Maps, and Top Growth Opportunities",
    badge: "Live Product Telemetry",
  },
  {
    id: "business-overview",
    title: "Business Overview Dashboard",
    desc: "Complete executive visibility across connected Google profiles, diagnostic health scores, and active growth levers.",
    image: "/images/Growth OS Business Overview Dashboard.png",
    alt: "Growth OS Business Overview Dashboard displaying health scores, customer activity, and growth metrics",
    badge: "Executive Overview",
  },
  {
    id: "crm-pipeline",
    title: "CRM Pipeline Dashboard",
    desc: "Track every inquiry from initial customer contact to appointment booking and won revenue with automated stage progression.",
    image: "/images/Growth OS CRM Pipeline Dashboard.png",
    alt: "Growth OS CRM Pipeline Dashboard showing leads, deal velocity, and conversion funnel",
    badge: "Pipeline Engine",
  },
  {
    id: "marketing-intel",
    title: "Marketing Intelligence Dashboard",
    desc: "Real-time Google 3-Pack rank tracking, local search impressions, direction requests, and call telemetry.",
    image: "/images/Growth OS Marketing Intelligence Dashboard.png",
    alt: "Growth OS Marketing Intelligence Dashboard showing local SEO telemetry and review response metrics",
    badge: "Local Telemetry",
  },
];

const PLATFORM_MODULES = [
  {
    num: "01",
    title: "Google Business Profile Audits",
    status: "AVAILABLE",
    isLive: true,
    desc: "Understand the strengths and gaps in your Google Business Profile.",
    badge: "FEATURE 01",
  },
  {
    num: "02",
    title: "Business Profile Insights",
    status: "AVAILABLE",
    isLive: true,
    desc: "Monitor profile performance signals, search impressions and customer actions.",
    badge: "FEATURE 02",
  },
  {
    num: "03",
    title: "Growth Score & Recommendations",
    status: "AVAILABLE",
    isLive: true,
    desc: "Prioritized 24-point audit score and high-impact growth actions.",
    badge: "FEATURE 03",
  },
  {
    num: "04",
    title: "Review Management",
    status: "AVAILABLE",
    isLive: true,
    desc: "Monitor customer feedback, ratings, and sentiment across Google Maps.",
    badge: "FEATURE 04",
  },
  {
    num: "05",
    title: "AI-Assisted Review Replies",
    status: "AVAILABLE",
    isLive: true,
    desc: "Create relevant, personalized responses to customer reviews in seconds.",
    badge: "FEATURE 05",
  },
  {
    num: "06",
    title: "Growth Action Tracking",
    status: "IN DEVELOPMENT",
    isLive: false,
    desc: "Manage key local visibility tasks and progress from one connected workspace.",
    badge: "FEATURE 06",
  },
];

export default function GrowthOSShowcase() {
  const [activeDashboardIndex, setActiveDashboardIndex] = useState(0);
  const currentDash = OS_DASHBOARDS[activeDashboardIndex];

  const productMockupRef = useRef(null);
  const modulesGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. 3D Rise on product mockup frame
    if (productMockupRef.current) {
      gsap.fromTo(
        productMockupRef.current,
        {
          rotateX: 10,
          scale: 0.95,
          opacity: 0.85,
          transformPerspective: 1200,
        },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productMockupRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // 2. Cascade reveal on module cards
    if (modulesGridRef.current) {
      const cards = modulesGridRef.current.children;
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: modulesGridRef.current,
            start: "top 88%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F8FAFC] to-white dark:from-[#071A30] dark:via-[#0B2545] dark:to-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] dark:text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>INTRODUCING OUR SOFTWARE PRODUCT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4 leading-tight">
            Smarter Business Growth <br />
            <span className="text-[#0097B2]">
              Starts With Better Systems.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-3">
            SM NextGen Growth OS is our evolving software platform designed to help businesses understand growth opportunities, organize important workflows and take informed action.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Starting with Google Business Profile Growth, we're developing a connected experience around business insights, recommendations and actionable workflows.
          </p>
        </div>

        {/* Product Workflow Strip */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold">
          <span className="text-slate-400">PRODUCT WORKFLOW:</span>
          <span className="text-[#0B2545] dark:text-white">CONNECT</span>
          <span className="text-[#0097B2]">→</span>
          <span className="text-[#0B2545] dark:text-white">AUDIT</span>
          <span className="text-[#0097B2]">→</span>
          <span className="text-[#0B2545] dark:text-white">SCORE</span>
          <span className="text-[#0097B2]">→</span>
          <span className="text-[#0B2545] dark:text-white">PRIORITIZE</span>
          <span className="text-[#0097B2]">→</span>
          <span className="text-[#0B2545] dark:text-white">ACT</span>
          <span className="text-[#0097B2]">→</span>
          <span className="text-cyan-500 dark:text-cyan-400">MEASURE</span>
        </div>

        {/* Clean, Plain & Systematic Dashboard Showcase with 3D Rise */}
        <div className="mb-12">
          {/* Dashboard View Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            {OS_DASHBOARDS.map((dash, idx) => {
              const isSelected = activeDashboardIndex === idx;
              return (
                <button
                  key={dash.id}
                  type="button"
                  onClick={() => setActiveDashboardIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-subheading font-bold transition-colors cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? "bg-[#0B2545] dark:bg-[#0097B2] text-white border-[#0B2545] dark:border-[#0097B2]"
                      : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#0097B2]/50"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-cyan-300" : "bg-[#0097B2]"}`} />
                  <span>{dash.title}</span>
                </button>
              );
            })}
          </div>

          {/* Systematic Framed Product Mockup with 3D Perspective */}
          <div style={{ perspective: "1200px" }} className="w-full">
            <div
              ref={productMockupRef}
              style={{ transformStyle: "preserve-3d" }}
              className="max-w-5xl mx-auto rounded-2xl bg-[#040e1b] border border-slate-800 shadow-xl overflow-hidden will-change-transform"
            >
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300">
                    SM NextGen Growth OS — {currentDash.title}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  {currentDash.badge}
                </span>
              </div>

              <div className="relative w-full aspect-[16/9] bg-slate-950">
                <Image
                  src={currentDash.image}
                  alt={currentDash.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 980px"
                  className="object-contain object-top"
                />
              </div>

              <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <p className="font-light max-w-xl">{currentDash.desc}</p>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href="/growth-os"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    <span>Explore Growth OS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition border border-white/10"
                  >
                    <span>Request Early Access</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Modules Breakdown Grid */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
            KEY FEATURES &amp; AVAILABILITY
          </div>
          <div
            ref={modulesGridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
          >
            {PLATFORM_MODULES.map((mod, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase">
                      {mod.badge}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        mod.isLive
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <div className="text-center max-w-xl mx-auto pt-4 border-t border-slate-200/80 dark:border-white/10">
          <p className="text-sm font-semibold text-[#0B2545] dark:text-white font-heading">
            Built by SM NextGen. Designed to make local business growth easier to manage.
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
            *Features marked as available are fully operational. Additional automation workflows in scheduled development.
          </p>
        </div>
      </div>
    </section>
  );
}
