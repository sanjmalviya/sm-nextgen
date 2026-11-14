"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, CheckCircle2, Monitor, Smartphone, Lock, Activity, ShieldCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroEditorial({ onStartConversation }) {
  const [activeView, setActiveView] = useState("desktop");
  const sectionRef = useRef(null);
  const cloudscapeRef = useRef(null);
  const mockupWrapperRef = useRef(null);
  const dashboardFrameRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Subtle Background Parallax on Cloudscape
    if (cloudscapeRef.current) {
      gsap.to(cloudscapeRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 2. 3D Mockup Unfolding (Awwwards / Daiki Fujita style)
    // Starts tilted in 3D perspective and smoothly unfolds flat as the user scrolls down
    if (mockupWrapperRef.current && dashboardFrameRef.current) {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        dashboardFrameRef.current,
        {
          rotateX: isMobile ? 6 : 12,
          scale: 0.95,
          y: 20,
          transformPerspective: 1200,
          transformOrigin: "center top",
        },
        {
          rotateX: 0,
          scale: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mockupWrapperRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1.1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-b border-slate-200/80 dark:border-white/5 font-body overflow-hidden"
    >
      {/* 1. Airy Sky & Cloudscape Backdrop with Scroll-Driven Parallax */}
      <div
        ref={cloudscapeRef}
        className="absolute -top-10 inset-x-0 h-[120%] z-0 pointer-events-none select-none overflow-hidden will-change-transform"
      >
        <Image
          src="/images/Dreamy Blue Sky Cloudscape.png"
          alt="Bright dreamy blue sky and sunlit clouds backdrop"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-top sm:object-center opacity-95 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/20 via-white/25 to-[#F8FAFC] dark:from-[#030D1A]/85 dark:via-[#071A30]/85 dark:to-[#030D1A]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Centered Editorial Pitch */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Positioning Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              YOUR COMPLETE BUSINESS GROWTH PARTNER
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Strategy. Marketing. Technology. Growth.
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight leading-[1.08] text-[#0B2545] dark:text-white mb-6">
            Make Every Part of Your Business Work{" "}
            <span className="text-[#0097B2]">
              Towards Growth.
            </span>
          </h1>

          {/* Clear Supporting Copy */}
          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            SM NextGen brings strategy, marketing, technology and AI together to help businesses attract the right customers, convert more opportunities and build stronger growth systems.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={onStartConversation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/how-we-work"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/20 shadow-xs transition-colors"
            >
              <Zap className="w-4 h-4 text-[#0097B2]" />
              <span>Explore How We Grow</span>
            </Link>
          </div>

          {/* Three Supporting Points */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>Business-First Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>Connected Marketing &amp; Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>Measurable Growth &amp; Performance</span>
            </div>
          </div>
        </div>

        {/* 2. Hero Visual Composition (100% Centered with Ambient Glow & 3D Unfold) */}
        <div
          ref={mockupWrapperRef}
          style={{ perspective: "1200px" }}
          className="max-w-5xl mx-auto w-full text-center"
        >
          {/* Dashboard Heading & Elements */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white">
              Your Business. One Connected Growth View.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light mt-1.5 max-w-2xl mx-auto">
              See how your marketing, customer acquisition and business performance connect.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xs">Marketing Performance</span>
              <span>·</span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xs">Lead Pipeline</span>
              <span>·</span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xs">Conversion</span>
              <span>·</span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xs">Revenue Insights</span>
            </div>

            {/* Viewport View Switcher Pill */}
            <div className="mt-5 inline-flex p-1 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-md border border-slate-200/90 dark:border-white/15 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveView("desktop")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-subheading uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeView === "desktop"
                    ? "bg-[#0097B2] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0B2545] dark:hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop Command Center</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("mobile")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-subheading uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeView === "mobile"
                    ? "bg-[#0097B2] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0B2545] dark:hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Executive Companion</span>
              </button>
            </div>
          </div>

          {/* Unified Centered Frame with Ambient Teal Halo */}
          <div className="relative w-full">
            {/* Ambient Teal Radial Halo */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#0097B2]/20 via-sky-400/25 to-teal-400/20 rounded-3xl blur-2xl opacity-60 dark:opacity-25 pointer-events-none" />

            <div
              ref={dashboardFrameRef}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#071A30] border border-slate-200/90 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(11,37,69,0.14)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden will-change-transform transition-all duration-300"
            >
              {/* macOS Style Glass Titlebar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-black/30 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 inline-block" />
                  <span className="ml-2 hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0097B2]" />
                    SM NextGen Growth Platform
                  </span>
                </div>

                {/* Centered URL Bar */}
                <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-300 shadow-2xs">
                  <Lock className="w-3 h-3 text-[#0097B2]" />
                  <span>https://app.smnextgen.com/{activeView === "desktop" ? "growth-overview" : "executive-snapshot"}</span>
                </div>

                {/* Telemetry Badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  CONNECTED
                </span>
              </div>

              {/* Viewport Content */}
              {activeView === "desktop" ? (
                <div className="relative w-full bg-white">
                  <Image
                    src="/images/SM NextGen Business Growth Dashboard.png"
                    alt="SM NextGen Business Growth Dashboard showcasing marketing performance, lead pipeline, conversion rates, and revenue insights"
                    width={1672}
                    height={941}
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="w-full h-auto block"
                  />
                  {/* Floating Micro-Highlight Banner */}
                  <div className="absolute bottom-3 sm:bottom-4 inset-x-4 sm:inset-x-6 flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-md border border-slate-200/90 dark:border-white/15 text-left shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-[#0097B2]" />
                      </div>
                      <div>
                        <p className="text-xs font-heading font-bold text-[#0B2545] dark:text-white">
                          Unified Telemetry Active
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light hidden sm:block">
                          Attribution, qualification stages, and conversion velocity unified in real-time.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0097B2] px-2.5 py-1 rounded bg-[#0097B2]/10">
                      Top 3 Market Rank
                    </span>
                  </div>
                </div>
              ) : (
                <div className="py-8 sm:py-12 px-4 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-[#071A30] dark:to-[#030D1A]">
                  <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-[2.5rem] border-[6px] border-slate-800 dark:border-slate-700 bg-slate-950 p-2.5 shadow-2xl overflow-hidden relative">
                    {/* Speaker / Dynamic Island */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2" />
                    <div className="rounded-[1.8rem] overflow-hidden bg-white">
                      <Image
                        src="/images/SM NextGen Business Dashboard.png"
                        alt="SM NextGen mobile executive business overview showing marketing, lead pipeline, and revenue metrics"
                        width={1122}
                        height={1402}
                        priority
                        quality={90}
                        sizes="360px"
                        className="w-full h-auto block"
                      />
                    </div>
                    <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mt-3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Disclaimer */}
        <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-4">
          *Illustrative dashboard preview. Connects to verified client data when operational.
        </p>

        {/* Grounded Metric Highlights Bar (4 Pillars from Brief) */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="px-4 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-1 text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Marketing Performance</span>
            <span className="text-xs sm:text-sm font-heading font-extrabold text-[#0B2545] dark:text-white">
              Verified Ad ROI &amp; Spend
            </span>
          </div>
          <div className="px-4 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-1 text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Lead Pipeline</span>
            <span className="text-xs sm:text-sm font-heading font-extrabold text-[#0097B2]">
              Instant Qualification Flow
            </span>
          </div>
          <div className="px-4 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-1 text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Conversion System</span>
            <span className="text-xs sm:text-sm font-heading font-extrabold text-[#0B2545] dark:text-white">
              +43% Avg. Conversion Lift
            </span>
          </div>
          <div className="px-4 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-1 text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Revenue Insights</span>
            <span className="text-xs sm:text-sm font-heading font-extrabold text-[#0097B2]">
              End-to-End Attribution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
