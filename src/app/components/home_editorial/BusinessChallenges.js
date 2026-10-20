"use client";
import React from "react";
import { 
  AlertTriangle, Unplug, Clock, EyeOff, Layers, 
  TrendingDown, CheckCircle2, ArrowRight, XCircle, 
  Zap, HelpCircle, ShieldAlert
} from "lucide-react";

const CHALLENGES = [
  {
    id: "disconnected",
    num: "01",
    icon: Unplug,
    badge: "Channel Disconnect",
    title: "Disconnected Marketing Channels & Wasted Ad Spend",
    description: "Paid ads bring clicks, but slow landing pages, generic messaging, and broken tracking burn up to 40% of media budgets before a visitor even considers buying.",
    impact: "High CAC & Empty Pipelines",
    uiCard: {
      type: "metric",
      metric: "42%",
      label: "Media budget wasted on unoptimized funnels",
      sub: "Industry average across disconnected agencies"
    }
  },
  {
    id: "followup",
    num: "02",
    icon: Clock,
    badge: "Speed to Lead",
    title: "Inconsistent Lead Follow-Up & Revenue Leaks",
    description: "Inquiries arrive via forms or WhatsApp, but manual responses take 2 to 6 hours. By the time your sales rep calls back, the buyer has already signed with a faster competitor.",
    impact: "68% Drop-off Before First Touch",
    uiCard: {
      type: "timeline",
      time: "4.2 Hours",
      status: "Competitor Won the Deal",
      note: "Target with SM NextGen AI: < 4 Mins"
    }
  },
  {
    id: "attribution",
    num: "03",
    icon: EyeOff,
    badge: "Blind Attribution",
    title: "Vanity Reporting with Zero Bank-Level Visibility",
    description: "Agencies celebrate 'impressions', 'reach', and 'click-through rates' on monthly slide decks, while business owners have no idea which campaigns actually generate deposited revenue.",
    impact: "Blind Capital Allocation",
    uiCard: {
      type: "comparison",
      agencySays: "1.2M Impressions",
      realityIs: "Unknown Revenue ROI"
    }
  },
  {
    id: "bloat",
    num: "04",
    icon: Layers,
    badge: "Tool Bloat",
    title: "Software Sprawl & Fragile Manual Integrations",
    description: "Businesses pay for 7 to 10 disconnected tools (CRM, landing page builder, WhatsApp tool, email software, analytics) held together by fragile zaps that constantly break.",
    impact: "Software Clutter & Team Frustration",
    uiCard: {
      type: "tools",
      count: "8+ SaaS Subscriptions",
      result: "Zero Unified Data Flow"
    }
  }
];

export default function BusinessChallenges({ onExploreSystem }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>THE REALITY GAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5 leading-tight">
            Why Traditional Marketing Retainers <br className="hidden sm:inline" />
            Fail Ambitious Businesses.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            When marketing is treated as disconnected silos instead of a unified operating system, customer acquisition costs spiral while revenue leaks through every gap.
          </p>
        </div>

        {/* 4 Core Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {CHALLENGES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-7 sm:p-9 rounded-3xl bg-slate-50/80 dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0097B2]/5 rounded-full blur-2xl group-hover:bg-[#0097B2]/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-rose-500 dark:text-rose-400 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      PROBLEM {item.num}
                    </span>
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-2.5">
                    {item.badge}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom UI Snapshot Card inside Problem Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Bottleneck Impact</div>
                      <div className="text-sm font-extrabold text-[#0B2545] dark:text-white font-heading">
                        {item.impact}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-rose-500 font-bold bg-rose-500/10 px-2 py-1 rounded-md">
                    Leak Detected
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* The Solution Transition Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#071A30] to-[#040e1b] border border-cyan-500/30 text-white shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/20 border border-[#0097B2]/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Zap className="w-3.5 h-3.5 text-cyan-300" />
                <span>THE SM NEXTGEN SOLUTION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2 leading-tight">
                One Partner. One Connected Operating System.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                We eliminate finger-pointing by taking full-stack ownership: high-conviction growth strategy, sub-second web platforms, autonomous WhatsApp & AI qualification, and closed-loop bank revenue attribution.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <button
                onClick={onExploreSystem}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 transition cursor-pointer"
              >
                <span>Explore The System</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400">
                100% In-House Strategic Governance
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
