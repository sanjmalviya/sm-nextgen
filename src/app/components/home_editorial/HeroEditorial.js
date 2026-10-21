"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Sparkles, TrendingUp, Zap, 
  CheckCircle2, Star, MapPin, Eye, MessageSquare, 
  Activity, ArrowUpRight, ShieldCheck, Layers
} from "lucide-react";

export default function HeroEditorial({ onStartConversation }) {
  const [activePreviewTab, setActivePreviewTab] = useState("telemetry"); // "telemetry" | "growth-os"

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] dark:from-[#030D1A] dark:via-[#071A30] dark:to-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] overflow-hidden transition-colors duration-200 font-body">
      
      {/* Subtle Atmospheric Background Radial Glows */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-[#0097B2]/10 via-[#0097B2]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-0" />
      
      {/* Fine Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B254506_1px,transparent_1px),linear-gradient(to_bottom,#0B254506_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative, Concise Editorial Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Positioning Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#0097B2] font-mono font-bold uppercase tracking-wider text-[11px]">
                Business Growth Partner
              </span>
              <span className="text-slate-300 dark:text-white/20">|</span>
              <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                Strategy • Tech • AI • Operations
              </span>
            </div>

            {/* Confident Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-[#0B2545] dark:text-white mb-6">
              Build a Better System for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                Business Growth.
              </span>
            </h1>

            {/* Clear Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              SM NextGen brings strategy, marketing, technology, and automation together to help businesses attract customers, improve conversion, and scale with greater clarity.
            </p>

            {/* Exactly Two Purposeful Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <button
                type="button"
                onClick={onStartConversation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#0097B2]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Start a Growth Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/growth-os"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/15 shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Zap className="w-4 h-4 text-[#0097B2]" />
                <span>Explore Growth OS</span>
              </Link>
            </div>

            {/* Clean Trust Pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Direct Founder Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Full-Stack Engineering In-House</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Closed-Loop Attribution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, High-Craft System Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Frame */}
              <div className="rounded-3xl bg-[#071A30] border border-white/10 shadow-2xl p-6 sm:p-7 text-white backdrop-blur-md">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                      SM NextGen Connected Engine
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                    SYSTEM ACTIVE
                  </span>
                </div>

                {/* Tabbed View Selector */}
                <div className="grid grid-cols-2 p-1 rounded-xl bg-black/40 border border-white/10 mb-6 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("telemetry")}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      activePreviewTab === "telemetry" 
                        ? "bg-[#0097B2] text-white shadow-xs" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Growth Telemetry
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("growth-os")}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      activePreviewTab === "growth-os" 
                        ? "bg-[#0097B2] text-white shadow-xs" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Growth OS Platform
                  </button>
                </div>

                {activePreviewTab === "telemetry" ? (
                  <div className="space-y-4">
                    {/* Primary Highlight Card */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-[#0097B2] uppercase tracking-wider font-bold">
                          Closed-Loop Pipeline
                        </span>
                        <span className="text-xs text-emerald-400 font-bold font-mono">
                          +42% Growth
                        </span>
                      </div>
                      <div className="text-2xl font-extrabold font-heading tracking-tight">
                        Predictable Inbound Flow
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Strategy, performance ads, conversion funnels, and CRM automation operating as one connected architecture.
                      </p>
                    </div>

                    {/* Metric Tiles */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[11px] text-slate-400 block font-mono">Customer Inquiries</span>
                        <span className="text-xl font-extrabold text-white font-heading mt-1 block">3.4x Velocity</span>
                        <span className="text-[10px] text-emerald-400 mt-0.5 block">Sub-5 min follow-up</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[11px] text-slate-400 block font-mono">Blended Unit CAC</span>
                        <span className="text-xl font-extrabold text-white font-heading mt-1 block">-32% Reduced</span>
                        <span className="text-[10px] text-[#0097B2] mt-0.5 block">Disciplined spend</span>
                      </div>
                    </div>

                    {/* Integrated Levers Row */}
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#0097B2]" />
                        <span>Live Unit Economics Attribution</span>
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">Active</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Growth OS Preview Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0097B2]/20 to-transparent border border-[#0097B2]/30">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                          Google Business Engine
                        </span>
                        <span className="text-xs text-emerald-400 font-bold font-mono">
                          Live v1.0
                        </span>
                      </div>
                      <div className="text-2xl font-extrabold font-heading tracking-tight">
                        Google 3-Pack Telemetry
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Automated review response drafting, 24-point ranking audits, and local prominence management.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Review Reply Velocity</span>
                        <span className="text-emerald-400 font-mono font-bold">&lt; 24 Hours</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#0097B2] rounded-full w-[85%]" />
                      </div>
                    </div>

                    <Link
                      href="/growth-os"
                      className="w-full py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Open Growth OS Workspace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
