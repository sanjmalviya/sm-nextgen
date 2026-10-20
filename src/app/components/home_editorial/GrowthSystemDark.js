"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, Laptop, Target, Bot, BarChart3, 
  ArrowRight, CheckCircle2, ChevronRight, Zap, 
  Layers, RefreshCw, Cpu, Activity, ShieldCheck
} from "lucide-react";

const SYSTEM_NODES = [
  {
    id: "strategy",
    num: "01",
    title: "Strategy & Offer Economics",
    category: "FOUNDATION",
    icon: Compass,
    tagline: "Define Category Moats Before Spending Ad Dollars",
    desc: "We analyze your P&L, gross margins, competitor vulnerabilities, and ideal customer profile (ICP) to engineer high-margin offers that convert.",
    deliverables: [
      "Competitive Moat & Category Positioning",
      "Offer Architecture & Pricing Optimization",
      "Unit Economics & CAC Payback Modeling",
      "12-Month Compounding Growth Blueprint"
    ],
    metric: "Foundation",
    metricValue: "P&L Grounded"
  },
  {
    id: "platform",
    num: "02",
    title: "High-Performance Web Platforms",
    category: "CONVERSION MOAT",
    icon: Laptop,
    tagline: "Sub-Second Next.js Speed Eliminates Cart & Form Drops",
    desc: "We build custom enterprise websites, web applications, and headless commerce platforms engineered for frictionless user journeys and high conversion rates.",
    deliverables: [
      "Next.js App Router Architecture",
      "Sub-Second Core Web Vitals (<0.8s LCP)",
      "Frictionless CRO Checkouts & Intake",
      "Mobile-First Responsive Precision"
    ],
    metric: "Conversion",
    metricValue: "+38% CRO Lift"
  },
  {
    id: "demand",
    num: "03",
    title: "Precision Demand & Local 3-Pack",
    category: "ACQUISITION ENGINE",
    icon: Target,
    tagline: "Capture High-Intent Buyers at the Moment of Search",
    desc: "We deploy disciplined Meta & Google ad campaigns paired with local Google Maps 3-Pack dominance to drive predictable inbound customer flow.",
    deliverables: [
      "Google Maps 3-Pack Ranking Dominance",
      "High-Intent Paid Search (Google Ads)",
      "High-ROAS Meta & Social Performance",
      "Authority Content & Technical SEO"
    ],
    metric: "Prominence",
    metricValue: "Rank #1 3-Pack"
  },
  {
    id: "automation",
    num: "04",
    title: "Autonomous AI & WhatsApp Routing",
    category: "OPERATIONAL LEVERAGE",
    icon: Bot,
    tagline: "Engage Inbound Leads in Under 4 Minutes 24/7",
    desc: "Intelligent conversational bots qualify inquiries, answer questions, and immediately route qualified opportunities directly to your sales calendar or WhatsApp.",
    deliverables: [
      "Autonomous 24/7 AI Lead Qualification",
      "Instant WhatsApp Cloud API Integration",
      "Automated Nurture & Review Request Loops",
      "Zero-Latency CRM Sales Pipeline Sync"
    ],
    metric: "Speed",
    metricValue: "< 3.8 Mins"
  },
  {
    id: "attribution",
    num: "05",
    title: "Closed-Loop Revenue Attribution",
    category: "FINANCIAL TRUTH",
    icon: BarChart3,
    tagline: "Track Every Rupee from First Impression to Bank Account",
    desc: "We eliminate guesswork with unified executive dashboards that track multi-touch attribution directly against cash deposited, enabling confident capital reinvestment.",
    deliverables: [
      "Closed-Loop Multi-Touch Attribution",
      "Real-Time Executive BI Dashboards",
      "CAC-to-LTV Cohort Tracking",
      "Continuous Conversion Rate Optimization"
    ],
    metric: "Clarity",
    metricValue: "96.4% Match"
  }
];

export default function GrowthSystemDark({ onStartConversation }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const activeNode = SYSTEM_NODES[activeNodeIndex];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030D1A] text-white border-y border-white/10 overflow-hidden font-body">
      
      {/* Background Gradients & Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE UNIFIED OPERATING SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-5 leading-tight">
            How Every Pillar of the <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-400 to-teal-300">
              Growth Engine Connects.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Not a disconnected list of services. A single, interconnected feedback loop where strategy informs code, code converts traffic, AI automates sales, and measurement dictates reinvestment.
          </p>
        </div>

        {/* 5-Node Interactive Connected Pipeline System */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column (5 Cols): The 5 Interconnected Pipeline Nodes */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>SYSTEM ARCHITECTURE NODES</span>
              <span className="text-[#0097B2]">Tap Node to Inspect</span>
            </div>

            {SYSTEM_NODES.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeNodeIndex === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-[#071A30] border-[#0097B2] shadow-xl shadow-[#0097B2]/15"
                      : "bg-[#0B2545]/40 border-white/5 hover:border-white/20 hover:bg-[#0B2545]/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive 
                        ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/30" 
                        : "bg-white/5 text-slate-400 border border-white/5"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#0097B2]">
                          NODE {node.num}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          • {node.category}
                        </span>
                      </div>
                      <div className="text-sm font-bold font-heading text-white">
                        {node.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold hidden sm:inline">
                      {node.metricValue}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? "rotate-90 text-[#0097B2]" : "text-slate-600"
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Deep Architectural Node Inspector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-3xl bg-[#071A30] border border-slate-700/80 p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Subtle Top-Right Ambient Backlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Node Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/20 border border-[#0097B2]/40 text-[#0097B2] flex items-center justify-center shadow-inner">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                        ACTIVE NODE {activeNode.num} // {activeNode.category}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white">
                        {activeNode.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Output: {activeNode.metricValue}</span>
                  </div>
                </div>

                {/* Tagline & Description */}
                <div className="text-sm font-semibold text-cyan-300 font-heading mb-3">
                  {activeNode.tagline}
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-8">
                  {activeNode.desc}
                </p>

                {/* Deliverables Grid */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core System Specifications & Deliverables
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeNode.deliverables.map((del, dIdx) => (
                      <div 
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Node Footer / Connection Indicator */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <RefreshCw className="w-3.5 h-3.5 text-[#0097B2] animate-spin" />
                  <span>Feeds into next node continuously</span>
                </div>

                <button
                  onClick={onStartConversation}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Build This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Global Connection Flow Summary Bar */}
        <div className="p-6 rounded-2xl bg-[#071A30]/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="font-bold text-slate-300">COMPLETE FLOW:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-400 font-bold">
            <span className="text-white">Strategy</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">Next.js Web</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">Demand & SEO</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">AI Automation</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-cyan-400">Deposited Bank Revenue</span>
          </div>
          <div className="text-emerald-400 font-bold">
            100% Attributed
          </div>
        </div>

      </div>
    </section>
  );
}
