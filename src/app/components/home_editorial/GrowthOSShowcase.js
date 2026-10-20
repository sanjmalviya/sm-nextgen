"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Zap, Star, ShieldCheck, CheckCircle2, ArrowRight, 
  ArrowUpRight, Bot, MapPin, Activity, Sparkles, 
  Sliders, Lock, Eye, Clock, Check
} from "lucide-react";

export default function GrowthOSShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const LIVE_CAPABILITIES = [
    {
      title: "Google Business Ownership Gate",
      status: "LIVE & OPERATIONAL",
      isLive: true,
      desc: "Strict anti-spoofing ownership verification preventing competitors from claiming your Google profile without matching credentials or GBP ID.",
      badge: "Security & Auth"
    },
    {
      title: "24-Point Diagnostic Growth Audit",
      status: "LIVE & OPERATIONAL",
      isLive: true,
      desc: "Instant weighted diagnostic scoring across completeness, reviews, media freshness, Google Posts, and customer engagement.",
      badge: "Audit Engine"
    },
    {
      title: "AI Review Auto-Responder",
      status: "LIVE & OPERATIONAL",
      isLive: true,
      desc: "Multi-tone response generator (Professional, Friendly, Warm, Premium) tailored for Google 3-Pack SEO algorithm velocity.",
      badge: "Reputation AI"
    },
    {
      title: "Live Google Maps Telemetry",
      status: "LIVE & OPERATIONAL",
      isLive: true,
      desc: "Direct tracking of verified phone calls, customer direction requests, and search impressions from connected Google Profiles.",
      badge: "Telemetry"
    },
    {
      title: "Multi-Location Automated Ad Sync",
      status: "IN ROADMAP (Q1 2027)",
      isLive: false,
      desc: "Automated budget reallocation based on real-time footfall and local Google 3-Pack rank fluctuation.",
      badge: "Planned Module"
    },
    {
      title: "Autonomous WhatsApp Drip Scheduler",
      status: "IN ROADMAP (Q2 2027)",
      isLive: false,
      desc: "AI conversational re-engagement sequences that trigger when customers have not visited in 30+ days.",
      badge: "Planned Module"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F8FAFC] to-white dark:from-[#071A30] dark:via-[#0B2545] dark:to-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0097B2]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] dark:text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>SOFTWARE PRODUCT ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5 leading-tight">
            SM NextGen Growth OS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
              The Operating System for Business Prominence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            A purpose-built SaaS platform engineered to manage your Google Business Profile, automate review response velocity, audit local ranking factors, and give you complete clarity into customer inquiries.
          </p>
        </div>

        {/* Feature Split Layout: Interactive Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column (5 Cols): Capabilities List with Clear Status Tags */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">
              PLATFORM CAPABILITIES & STATUS
            </div>

            {LIVE_CAPABILITIES.map((cap, index) => {
              const isSelected = activeFeature === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white dark:bg-[#071A30] border-[#0097B2] shadow-lg shadow-[#0097B2]/10"
                      : "bg-slate-50 dark:bg-white/5 border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                      {cap.badge}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      cap.isLive 
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30" 
                        : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                    }`}>
                      {cap.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Realistic Product Interface Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#040e1b] border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white font-sans">
              
              {/* Product Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0097B2] flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-[#0097B2]/30">
                    OS
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-cyan-400">SM NEXTGEN GROWTH OS</div>
                    <div className="text-sm font-bold text-white">Live Workspace: SM NextGen HQ (Udaipur)</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                    Connected
                  </span>
                  <Link
                    href="/growth-os"
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0097B2] hover:text-cyan-300 transition"
                  >
                    <span>Full App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Central Mockup Dashboard Body */}
              <div className="space-y-4">
                
                {/* 3 Live Metric Badges */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Google Star Rating</div>
                    <div className="text-base font-extrabold text-amber-400 flex items-center gap-1 mt-0.5">
                      <Star className="w-4 h-4 fill-amber-400" />
                      5.0 ★
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono">47 Real Reviews</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Growth Audit Score</div>
                    <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                      88 / 100
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono">Profile Verified</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Inbound Calls</div>
                    <div className="text-base font-extrabold text-white mt-0.5">
                      198 Calls
                    </div>
                    <div className="text-[9px] text-cyan-400 font-mono">+18% This Month</div>
                  </div>
                </div>

                {/* Simulated 24-Point Audit Checklist Preview */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0097B2]" />
                      24-Point Diagnostic Health Checklist
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">Passing 21/24 Checks</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>NAP Consistency (Ganapati Nagar, Udaipur HQ)</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">100% Match</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Google Business Profile Ownership Gate</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Owner Verified</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>AI Review Autopilot (Drafting Enabled)</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">Active</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Interactive CTA Bar */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  <span>Sign in with authorized Google email or enter 10-digit GBP ID</span>
                </div>

                <Link
                  href="/growth-os"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#007a91] hover:to-cyan-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 transition"
                >
                  <span>Launch Growth OS Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
