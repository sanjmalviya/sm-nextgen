"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, CheckCircle2, Monitor, Smartphone } from "lucide-react";

export default function HeroEditorial({ onStartConversation }) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] overflow-hidden transition-colors duration-200 font-body">
      {/* Airy Sky & Cloudscape Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/Dreamy Blue Sky Cloudscape.png"
          alt="Bright sky and sunlit clouds symbolizing clarity and business growth altitude"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-80 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-[#F8FAFC] dark:from-[#030D1A]/85 dark:via-[#071A30]/85 dark:to-[#030D1A]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Centered Airy Editorial Pitch */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Positioning Status Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-slate-200/90 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              Your Complete Business Growth Partner
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Strategy · Marketing · Technology · AI · Analytics
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight leading-[1.1] text-[#0B2545] dark:text-white mb-6 drop-shadow-xs">
            Build a Better System for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-600 to-[#0B2545] dark:to-cyan-300">
              Business Growth.
            </span>
          </h1>

          {/* Clear Supporting Copy */}
          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Strategy, demand, modern web tech, AI automation, and revenue analytics—unified into one measurable growth system.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-9">
            <button
              type="button"
              onClick={onStartConversation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/growth-os"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/95 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/20 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Zap className="w-4 h-4 text-[#0097B2]" />
              <span>Explore Growth OS</span>
            </Link>
          </div>

          {/* Clean Trust Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>Senior Principal Led</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
              <span>Revenue-Focused ROI</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Composition: Desktop Overview + Mobile Companion Preview */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          {/* Desktop Growth Dashboard Frame */}
          <div className="lg:col-span-9 rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-md border border-slate-200/90 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-black/25">
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
                Visual Interface Preview
              </span>
            </div>

            <div className="relative w-full bg-white">
              <Image
                src="/images/SM NextGen Business Growth Dashboard.png"
                alt="SM NextGen Business Growth Dashboard showcasing lead generation, qualified pipeline funnel, 30.1% conversion rate, revenue insights, and AI recommendations"
                width={1672}
                height={941}
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 840px"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Mobile Executive Companion Card */}
          <div className="lg:col-span-3 rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-md border border-slate-200/90 dark:border-white/15 shadow-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70 dark:border-white/10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-subheading font-bold uppercase tracking-wider text-[#0B2545] dark:text-white">
                <Smartphone className="w-3.5 h-3.5 text-[#0097B2]" />
                Mobile Snapshot
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                3.8x ROI
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[240px] lg:max-w-none mx-auto rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm bg-[#E6EEF2]/40">
                <Image
                  src="/images/SM NextGen Business Dashboard.png"
                  alt="SM NextGen mobile executive business overview showing 1,240 leads, ₹12,46,000 revenue, and 3.8x marketing ROI"
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
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Leads, conversions &amp; revenue in one view.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Grounded Metric Highlights Bar */}
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="px-5 py-3.5 rounded-2xl bg-white/95 dark:bg-[#071A30]/90 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Pipeline Clarity</span>
            <span className="text-sm font-heading font-extrabold text-[#0B2545] dark:text-white">
              End-to-End Funnel
            </span>
          </div>
          <div className="px-5 py-3.5 rounded-2xl bg-white/95 dark:bg-[#071A30]/90 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Connected Stack</span>
            <span className="text-sm font-heading font-extrabold text-[#0097B2]">
              Ads · Web · AI · CRM
            </span>
          </div>
          <div className="px-5 py-3.5 rounded-2xl bg-white/95 dark:bg-[#071A30]/90 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
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
