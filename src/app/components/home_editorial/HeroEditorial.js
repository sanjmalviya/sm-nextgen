"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, CheckCircle2, Monitor, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroEditorial({ onStartConversation }) {
  const sectionRef = useRef(null);
  const cloudscapeRef = useRef(null);
  const mockupWrapperRef = useRef(null);
  const desktopFrameRef = useRef(null);
  const mobileCardRef = useRef(null);

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
    if (mockupWrapperRef.current) {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        desktopFrameRef.current,
        {
          rotateX: isMobile ? 8 : 14,
          rotateY: isMobile ? -3 : -6,
          scale: 0.94,
          transformPerspective: 1200,
          transformOrigin: "center top",
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          y: isMobile ? 12 : 24,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mockupWrapperRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1.1,
          },
        }
      );

      gsap.fromTo(
        mobileCardRef.current,
        {
          rotateX: isMobile ? 6 : 12,
          rotateY: isMobile ? 4 : 8,
          scale: 0.92,
          transformPerspective: 1200,
          transformOrigin: "center top",
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          y: isMobile ? -6 : -14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mockupWrapperRef.current,
            start: "top 75%",
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
          alt="Bright sky and sunlit clouds backdrop"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-75 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-[#F8FAFC] dark:from-[#030D1A]/90 dark:via-[#071A30]/85 dark:to-[#030D1A]" />
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

        {/* 2. Hero Visual Composition with 3D Scroll-Driven Unfolding */}
        <div
          ref={mockupWrapperRef}
          style={{ perspective: "1200px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Dashboard Header Bar */}
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
              Your Business. One Connected Growth View.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light mt-1">
              See how your marketing, customer acquisition and business performance connect.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Marketing Performance</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Lead Pipeline</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Conversion</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Revenue Insights</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Desktop Growth Dashboard Frame (Unfolds from 3D Tilt to Flat on Scroll) */}
            <div
              ref={desktopFrameRef}
              style={{ transformStyle: "preserve-3d" }}
              className="lg:col-span-9 rounded-2xl bg-white dark:bg-[#071A30] border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col will-change-transform"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-black/25">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-300">
                    <Monitor className="w-3.5 h-3.5 text-[#0097B2]" />
                    SM NextGen Unified Business Overview
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0097B2]/10 text-[#0097B2] dark:text-cyan-300 font-mono text-[10px] font-bold">
                  Illustrative Preview
                </span>
              </div>

              <div className="relative w-full bg-white">
                <Image
                  src="/images/SM NextGen Business Growth Dashboard.png"
                  alt="SM NextGen Business Growth Dashboard showcasing marketing performance, lead pipeline, conversion rates, and revenue insights"
                  width={1672}
                  height={941}
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 840px"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Mobile Executive Companion Card (Complimentary 3D Parallax on Scroll) */}
            <div
              ref={mobileCardRef}
              style={{ transformStyle: "preserve-3d" }}
              className="lg:col-span-3 rounded-2xl bg-white dark:bg-[#071A30] border border-slate-200 dark:border-white/15 shadow-xl p-4 sm:p-5 flex flex-col justify-between will-change-transform"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70 dark:border-white/10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-subheading font-bold uppercase tracking-wider text-[#0B2545] dark:text-white">
                  <Smartphone className="w-3.5 h-3.5 text-[#0097B2]" />
                  Executive Snapshot
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Connected
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-[240px] lg:max-w-none mx-auto rounded-xl overflow-hidden border border-slate-100 dark:border-white/10 shadow-xs bg-[#E6EEF2]/40">
                  <Image
                    src="/images/SM NextGen Business Dashboard.png"
                    alt="SM NextGen mobile executive business overview showing marketing, lead pipeline, and revenue metrics"
                    width={1122}
                    height={1402}
                    priority
                    quality={85}
                    sizes="(max-width: 1024px) 240px, 280px"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/70 dark:border-white/10 text-center lg:text-left">
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Marketing, pipeline &amp; revenue connected in real time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Disclaimer */}
        <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-4">
          *Illustrative dashboard preview. Connects to verified client data when operational.
        </p>

        {/* Grounded Metric Highlights Bar */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Pipeline Clarity</span>
            <span className="text-sm font-heading font-extrabold text-[#0B2545] dark:text-white">
              End-to-End Funnel
            </span>
          </div>
          <div className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Connected Stack</span>
            <span className="text-sm font-heading font-extrabold text-[#0097B2]">
              Ads · Web · AI · CRM
            </span>
          </div>
          <div className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Decision Focus</span>
            <span className="text-sm font-heading font-extrabold text-[#0B2545] dark:text-white">
              Verified ROI &amp; Revenue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
