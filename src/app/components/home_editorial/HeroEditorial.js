"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Sparkles, TrendingUp, ShieldCheck, 
  CheckCircle2, Star, Zap, Phone, ArrowUpRight, 
  Activity, MapPin, Eye, MousePointerClick, MessageSquare, 
  Clock, Check, Layers, BarChart3, Bot
} from "lucide-react";

export default function HeroEditorial({ onStartConversation }) {
  const [activeTab, setActiveTab] = useState("telemetry"); // "telemetry" | "reviews" | "ranking"

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] dark:from-[#030D1A] dark:via-[#071A30] dark:to-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] overflow-hidden transition-colors duration-300 font-body">
      
      {/* Subtle Atmospheric Radial Lights (No excessive glare) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-[#0097B2]/12 via-[#0097B2]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-[-100px] w-[350px] h-[350px] bg-cyan-500/8 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-0" />

      {/* Very Fine Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B254508_1px,transparent_1px),linear-gradient(to_bottom,#0B254508_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Positioning */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white shadow-sm mb-6 max-w-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[#0097B2] font-bold uppercase tracking-wider text-[11px] font-mono">
                Business Growth Partner
              </span>
              <span className="text-slate-300 dark:text-white/20">|</span>
              <Link 
                href="/growth-os" 
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0097B2] dark:hover:text-cyan-300 transition-colors"
              >
                <span>Growth OS v1.0 Live</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Confident Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight font-heading leading-[1.08] text-[#0B2545] dark:text-white mb-6">
              Your Business Deserves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                More Than Marketing.
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              SM NextGen helps businesses build sustainable growth through strategy, marketing, technology, AI, and automation. We replace fragmented agency retainers with a connected compounding growth system.
            </p>

            {/* Visual Growth-System Diagram: Strategy → Demand → Leads → Conversion → Sales → Revenue → Scale */}
            <div className="mb-8 p-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-sm max-w-2xl">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0097B2] mb-2 text-center lg:text-left">
                The SM NextGen Growth System Flow
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#0B2545] dark:text-slate-200">
                <span className="px-2.5 py-1 rounded-lg bg-[#0097B2]/10 border border-[#0097B2]/25 text-[#0097B2]">Strategy</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Demand</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Leads</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Conversion</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Sales</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Revenue</span>
                <span className="text-slate-400">→</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">Scale</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <button
                onClick={onStartConversation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Start a Growth Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/tools"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/15 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0097B2]" />
                <span>Get Your Growth Score</span>
              </Link>

              <Link
                href="/growth-os"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#0097B2] dark:text-slate-300 dark:hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              >
                <Zap className="w-3.5 h-3.5 text-[#0097B2]" />
                <span>Growth OS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Credibility Micro-Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Strategy + Tech + AI In-House</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Zero Outsourced Interns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Closed-Loop Attribution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Premium SaaS Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight for Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0097B2]/20 via-cyan-500/10 to-transparent blur-3xl -z-10 rounded-3xl" />

            {/* Main Window Frame */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#071A30] border border-slate-700/60 shadow-2xl overflow-hidden text-white font-sans transition-all duration-300">
              
              {/* Window Header / Tab Bar */}
              <div className="px-4 py-3 border-b border-slate-800 bg-[#040e1b] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono font-semibold text-slate-400 ml-2">
                    smnextgen.growth-os
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Live System</span>
                </div>
              </div>

              {/* Sub-Header Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/60 px-4 pt-2 gap-2 text-xs">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`pb-2.5 font-bold transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "telemetry" 
                      ? "border-[#0097B2] text-[#0097B2]" 
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Growth Telemetry</span>
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-2.5 font-bold transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "reviews" 
                      ? "border-[#0097B2] text-[#0097B2]" 
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Star className="w-3.5 h-3.5" />
                  <span>Review Autopilot</span>
                </button>

                <button
                  onClick={() => setActiveTab("ranking")}
                  className={`pb-2.5 font-bold transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "ranking" 
                      ? "border-[#0097B2] text-[#0097B2]" 
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>3-Pack Rank</span>
                </button>
              </div>

              {/* Window Body: Dynamic Tabs */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {activeTab === "telemetry" && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    
                    {/* Top Row: Growth Score & Quick Health */}
                    <div className="grid grid-cols-12 gap-3 items-stretch">
                      {/* Overall Growth Score */}
                      <div className="col-span-5 p-3.5 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#040e1b] border border-cyan-500/30 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                            GROWTH SCORE
                          </span>
                          <div className="text-3xl font-extrabold font-heading text-white tracking-tight flex items-baseline gap-1">
                            88<span className="text-xs text-slate-400 font-normal">/100</span>
                          </div>
                        </div>
                        <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Top 4% in Region</span>
                        </div>
                      </div>

                      {/* Primary KPI Stream */}
                      <div className="col-span-7 grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                          <div className="text-[10px] text-slate-400">Attributed Calls</div>
                          <div className="text-lg font-extrabold text-white mt-0.5">198</div>
                          <div className="text-[10px] text-emerald-400 font-mono">+18% MoM</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                          <div className="text-[10px] text-slate-400">Direction Clicks</div>
                          <div className="text-lg font-extrabold text-white mt-0.5">240</div>
                          <div className="text-[10px] text-emerald-400 font-mono">+14% MoM</div>
                        </div>
                      </div>
                    </div>

                    {/* Attribution Revenue Flow Graph Mock */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <BarChart3 className="w-3.5 h-3.5 text-[#0097B2]" />
                          Closed-Loop Revenue Pipeline
                        </span>
                        <span className="font-mono text-[11px] text-[#0097B2] font-bold">96.4% Precision</span>
                      </div>
                      
                      {/* CSS Bars Chart */}
                      <div className="h-20 flex items-end justify-between gap-2 pt-3 px-1">
                        {[
                          { m: "W1", h: "40%", rev: "₹2.8L" },
                          { m: "W2", h: "58%", rev: "₹4.1L" },
                          { m: "W3", h: "75%", rev: "₹5.6L" },
                          { m: "W4", h: "92%", rev: "₹7.4L" },
                        ].map((b, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                              {b.rev}
                            </span>
                            <div className="w-full bg-slate-800 rounded-md overflow-hidden h-14 flex items-end">
                              <div 
                                style={{ height: b.h }} 
                                className="w-full bg-gradient-to-t from-[#0097B2] to-cyan-400 rounded-t transition-all group-hover/bar:from-cyan-400 group-hover/bar:to-emerald-400" 
                              />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{b.m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Micro Pipeline Speed Indicator */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-white">Lead Response Autopilot</div>
                          <div className="text-[10px] text-slate-400">WhatsApp + CRM routing</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-emerald-400">&lt; 3.8 Mins</span>
                        <div className="text-[9px] text-slate-500">Industry avg: 4.2 hrs</div>
                      </div>
                    </div>

                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
                            AS
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Ankit Sharma</div>
                            <div className="text-[10px] text-slate-400">Google Verified Customer</div>
                          </div>
                        </div>
                        <div className="flex text-amber-400 text-xs">
                          {"★★★★★"}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        "SM NextGen ranked our Udaipur business in the top 3 on Google Maps within 45 days. Inbound inquiries grew by 3x."
                      </p>
                      
                      {/* AI Response Preview */}
                      <div className="p-2.5 rounded-xl bg-[#040e1b] border border-cyan-500/20 text-[11px] space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-cyan-400 font-mono font-bold">
                          <span className="flex items-center gap-1">
                            <Bot className="w-3 h-3" />
                            AI Response Draft (Professional Tone)
                          </span>
                          <span className="text-emerald-400">Ready to Publish</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          "Dear Ankit, thank you for your wonderful review! Our team is thrilled to see your business dominating the Google 3-Pack..."
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                      <span className="text-slate-300 font-medium">Review Velocity Booster</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">
                        +42 Reviews in 90 Days
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "ranking" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-xl bg-white flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Google Maps 3-Pack Telemetry</div>
                            <div className="text-[10px] text-slate-400">Udaipur, Rajasthan Region</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                          #1 Position
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <span className="font-bold text-emerald-300">1. SM NextGen</span>
                          <span className="font-mono text-xs text-white">5.0 ★ (47)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 opacity-60">
                          <span>2. Competitor Agency A</span>
                          <span className="font-mono text-xs">4.2 ★ (19)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 opacity-60">
                          <span>3. Competitor Studio B</span>
                          <span className="font-mono text-xs">4.1 ★ (12)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 py-3 border-t border-slate-800 bg-[#040e1b] flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">
                  Verified Google Business API Connected
                </span>
                <Link
                  href="/growth-os"
                  className="font-bold text-[#0097B2] hover:text-cyan-300 transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Launch Live OS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Realistic Floating Accent Card Bottom-Left */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-3.5 rounded-2xl bg-white dark:bg-[#040e1b] border border-slate-200 dark:border-white/10 shadow-2xl items-center gap-3 z-20 max-w-xs animate-float">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Blended ROAS</div>
                <div className="text-sm font-extrabold text-[#0B2545] dark:text-white font-heading">3.4x Target Return</div>
              </div>
            </div>

          </div>

        </div>

        {/* Enterprise Tech Platforms Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="font-mono font-bold uppercase tracking-wider text-[11px] text-[#0097B2] shrink-0">
            CONNECTED TECHNOLOGY & ECOSYSTEMS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-semibold text-xs tracking-wide">
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Next.js & React
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Google Cloud & Maps
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Meta Ads Platform
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> WhatsApp Business Cloud
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> OpenAI & Custom LLMs
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
