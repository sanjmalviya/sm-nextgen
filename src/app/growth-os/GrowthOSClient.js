"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Zap, Smartphone, ExternalLink, ShieldCheck, CheckCircle2, 
  ArrowRight, Sparkles, RefreshCw, BarChart3, Bot, Compass, 
  Award, ChevronRight, Activity, Laptop, Monitor
} from "lucide-react";

export default function GrowthOSClient() {
  const [viewMode, setViewMode] = useState("simulator"); // "simulator" | "desktop"
  const appUrl = "/growth-os";

  const modules = [
    {
      title: "GBP Health Diagnostics & Audit",
      desc: "Full automated diagnostic audit checking 24+ profile parameters, calculating an 81/100 health score with ranked critical fixes.",
      tag: "Audit Core",
      color: "from-cyan-500/20 to-blue-500/20",
      icon: <Activity className="w-5 h-5 text-[#0097B2]" />
    },
    {
      title: "AI Review Responder & Sentiment",
      desc: "Instant sentiment classification across all customer reviews with contextual 1-click AI response generation matching brand voice.",
      tag: "AI Autopilot",
      color: "from-purple-500/20 to-indigo-500/20",
      icon: <Bot className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Profile Health & Category Optimizer",
      desc: "Direct optimization of Primary & Secondary Google Categories, business operating hours, NAP consistency and service attributes.",
      tag: "Ranking Engine",
      color: "from-emerald-500/20 to-teal-500/20",
      icon: <Compass className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Automated Google Posts Engine",
      desc: "Autonomous weekly promotional & update posts generation with high-converting CTA links directly published to Google Search & Maps.",
      tag: "Content Engine",
      color: "from-amber-500/20 to-orange-500/20",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Rule-Based Event Automation",
      desc: "Event triggers such as auto-thanking 5-star reviews, SMS/Email alerts for ratings below 3 stars, and periodic health re-audits.",
      tag: "Workflow Engine",
      color: "from-rose-500/20 to-pink-500/20",
      icon: <Zap className="w-5 h-5 text-rose-400" />
    },
    {
      title: "Revenue & ROAS Attribution",
      desc: "Full funnel performance telemetry tracking customer calls, website clicks, direction requests and calculated monthly pipeline ROI.",
      tag: "ROI Analytics",
      color: "from-blue-500/20 to-cyan-500/20",
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Breadcrumb & Live Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200 dark:border-white/10 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono">
          <Link href="/" className="text-gray-500 hover:text-[#0097B2] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#0097B2] font-bold">Growth OS Platform</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Core Daemon Live on Production Suite</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-5">
          <Zap className="w-3.5 h-3.5 fill-[#0097B2]" />
          <span>SM NextGen SaaS Operating System</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-[#0B2545] dark:text-white leading-[1.1] mb-6">
          Google Business Profile <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#0284c7]">
            Growth Platform
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-8">
          The first working module of the SM NextGen Operating System. Helping multi-location businesses, agencies, and founders turn Google Search & Maps into predictable inbound customer engines.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0097B2] via-[#0284c7] to-[#0369a1] hover:brightness-110 text-white font-bold text-sm tracking-wide flex items-center gap-3 shadow-xl shadow-[#0097B2]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          >
            <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Launch Full Application (Production Suite)</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#simulator-view"
            className="px-6 py-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-semibold text-sm flex items-center gap-2 transition-all border border-gray-200 dark:border-white/10 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-[#0097B2]" />
            <span>Try Live Simulator Below</span>
          </a>
        </div>
      </div>

      {/* Simulator Section */}
      <section id="simulator-view" className="mb-20 scroll-mt-28">
        <div className="bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-[#071A30] dark:via-[#0B2545] dark:to-[#071A30] rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar inside card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200 dark:border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-[#0097B2] tracking-wider block">
                Interactive Live Preview
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                Growth OS In-Site Experience
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("simulator")}
                className={"px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer " + (viewMode === "simulator" ? "bg-[#0097B2] text-white shadow-md" : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300")}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile App View</span>
              </button>

              <button
                onClick={() => setViewMode("desktop")}
                className={"px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer " + (viewMode === "desktop" ? "bg-[#0097B2] text-white shadow-md" : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300")}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop View</span>
              </button>

              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all border border-emerald-500/30 ml-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Direct</span>
              </a>
            </div>
          </div>

          {/* Interactive Frame Container */}
          <div className="flex justify-center items-center">
            {viewMode === "simulator" ? (
              /* Mobile Simulator Frame */
              <div className="relative w-full max-w-[390px] h-[780px] bg-[#0B1120] rounded-[48px] p-3 shadow-2xl border-[6px] border-slate-700/80 dark:border-slate-800 ring-1 ring-white/20">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/10"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse"></div>
                </div>

                <div className="w-full h-full rounded-[40px] overflow-hidden bg-slate-900 relative">
                  <iframe
                    src={appUrl}
                    className="w-full h-full border-0"
                    title="Growth OS Mobile Simulator"
                  />
                </div>
              </div>
            ) : (
              /* Desktop Frame */
              <div className="w-full h-[650px] rounded-2xl overflow-hidden bg-slate-900 border border-gray-700 shadow-2xl relative">
                <iframe
                  src={appUrl}
                  className="w-full h-full border-0"
                  title="Growth OS Desktop Experience"
                />
              </div>
            )}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
            <span>Powered by Next.js 16 + React 19 • Next.js 16 Production Build • Enterprise Security</span>
          </div>

        </div>
      </section>

      {/* 6 Core Modules Grid */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-[#0097B2] tracking-wider block mb-2">
            Engine Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white">
            6 Specialized Growth Capabilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#071A30]/80 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/20 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#0097B2]">
                <span>Active in v1.0</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="bg-gradient-to-r from-[#0B2545] via-[#0D305A] to-[#0097B2] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-2 block">
            Ready to Accelerate Your Profile?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
            Start Using SM NextGen Growth OS Today
          </h2>
          <p className="text-sm text-gray-200 max-w-xl font-light">
            Connect your Google Business Profile in 60 seconds and generate your first automated health audit report.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#0B2545] font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-cyan-50 shadow-lg cursor-pointer"
          >
            <span>Open Growth OS</span>
            <ArrowRight className="w-4 h-4 text-[#0097B2]" />
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center justify-center"
          >
            Talk to Architect
          </Link>
        </div>
      </section>

    </div>
  );
}
