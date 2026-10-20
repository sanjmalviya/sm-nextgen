"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, Compass, Wrench, Play, Gauge, TrendingUp, 
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Zap
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Discover",
    tagline: "Commercial Diagnostics & ICP Mapping",
    duration: "Week 1",
    icon: Search,
    desc: "We analyze your financial baseline, gross margins, current lead drop-offs, and competitor vulnerabilities to uncover unexploited market white space.",
    deliverables: [
      "Ideal Customer Profile (ICP) & Persona Mapping",
      "Historical Acquisition Channel Audit",
      "Competitor Messaging & Moat Analysis",
      "Executive Growth Objectives Alignment"
    ]
  },
  {
    step: "02",
    name: "Strategize",
    tagline: "The 12-Month Compounding Roadmap",
    duration: "Week 2",
    icon: Compass,
    desc: "We engineer a comprehensive growth roadmap that mathematically aligns performance demand channels, web technology, AI automation, and unit economics.",
    deliverables: [
      "Custom 12-Month Compounding Growth Blueprint",
      "Offer Restructuring & High-Margin Pricing Models",
      "Multi-Channel Demand Generation Blueprint",
      "AI & Automation Workflow Specifications"
    ]
  },
  {
    step: "03",
    name: "Build",
    tagline: "High-Performance Platforms & Automations",
    duration: "Weeks 3–6",
    icon: Wrench,
    desc: "Our engineering and creative teams build production-grade Next.js platforms, dynamic conversion funnels, and autonomous lead routing bots.",
    deliverables: [
      "Sub-Second Next.js Web Platforms (<0.8s LCP)",
      "High-Conversion Landing Pages & CRO Checkout",
      "Autonomous 24/7 AI Qualification & WhatsApp Routing",
      "Closed-Loop Multi-Touch Attribution Engine"
    ]
  },
  {
    step: "04",
    name: "Execute",
    tagline: "Omnichannel Demand & Local Prominence",
    duration: "Week 7 Onward",
    icon: Play,
    desc: "We launch disciplined Meta & Google ad campaigns paired with local Google Maps 3-Pack optimization to capture high-intent buyers.",
    deliverables: [
      "Google Maps 3-Pack Ranking Domination",
      "Disciplined High-ROAS Paid Search & Meta Media",
      "Executive Content & Authority SEO Flywheels",
      "Rapid Response Lead Cadences (<4 minutes)"
    ]
  },
  {
    step: "05",
    name: "Measure",
    tagline: "Closed-Loop Bank Revenue Attribution",
    duration: "Continuous",
    icon: Gauge,
    desc: "We track end-to-end performance from first impression to deposited bank revenue. Zero vanity reporting or misleading slide decks.",
    deliverables: [
      "Closed-Loop Attribution vs Actual Bank Cashflow",
      "Executive BI Telemetry & Cohort Retention",
      "CAC Payback Velocity Monitoring (<60 Days)",
      "Weekly Performance & Strategy Reviews"
    ]
  },
  {
    step: "06",
    name: "Improve",
    tagline: "Iterative Sprints & Compounding Scale",
    duration: "Compounding",
    icon: TrendingUp,
    desc: "With proven unit economics and a frictionless funnel, we run continuous A/B split tests, scale budgets profitably, and automate back-office operations.",
    deliverables: [
      "Continuous Landing Page & Checkout Split Testing",
      "Autonomous AI Agent Upgrades for Support & Sales",
      "Multi-Market & International Expansion",
      "Predictive Customer Lifetime Value (LTV) Sprints"
    ]
  }
];

export default function HowWeWorkProcess({ onStartConversation }) {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#040e1b] text-white border-t border-white/10 overflow-hidden font-body">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#0097B2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>DISCIPLINED EXECUTION METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-5 leading-tight">
            How We Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-400 to-teal-300">
              Compounding Business Growth.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A transparent 6-stage operational cycle where every phase has clear milestones, verifiable deliverables, and rigorous commercial governance.
          </p>
        </div>

        {/* 6 Stage Navigation Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#071A30] border-[#0097B2] shadow-lg shadow-[#0097B2]/20 text-white"
                    : "bg-[#0B2545]/40 border-white/5 hover:border-white/15 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-[#0097B2] text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    STAGE {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#0097B2]" : "text-slate-500"}`} />
                </div>
                <div className="text-sm font-bold font-heading truncate">
                  {s.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500 mt-1">
                  {s.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Stage Inspector Card */}
        <div className="rounded-3xl bg-[#071A30] border border-slate-700/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 cols: Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/20 border border-[#0097B2]/40 text-[#0097B2] flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0097B2] font-bold">
                    <span>STAGE {current.step} OF 06</span>
                    <span>•</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {current.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {current.name}: {current.tagline}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Guaranteed Stage Deliverables
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item, dIdx) => (
                    <div 
                      key={dIdx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 cols: Principle Governance Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#040e1b] border border-cyan-500/20 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    GOVERNANCE PRINCIPLE
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="text-lg font-bold font-heading text-white leading-snug">
                  "No Tactics Without Strategy. No Code Without Conversion."
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Every deliverable undergoes strict principal review before deployment. You have direct Slack/WhatsApp access to managing partners throughout all six stages.
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>SLA Guarantee</span>
                  <span className="text-emerald-400 font-bold">&lt; 4-Hour Response</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Process Link */}
        <div className="text-center">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0097B2] hover:text-cyan-300 transition"
          >
            <span>Read Complete 12-Month Scaling Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
