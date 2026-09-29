"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Compass, Wrench, Gauge, TrendingUp, 
  ArrowRight, CheckCircle2, ChevronRight, Activity
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const STAGES = [
  {
    step: "01",
    name: "Diagnose",
    tagline: "Systemic Audit & Revenue Bottleneck Analysis",
    icon: Search,
    duration: "Week 1–2",
    deliverables: [
      "Full-Funnel CAC & LTV Unit Economics Audit",
      "Website & Tech Stack Performance Review",
      "Conversion Drop-off & Funnel Leak Mapping",
      "Competitive Moat & Market Positioning Review"
    ],
    outcome: "Clear visibility into why your current engine is leaking revenue."
  },
  {
    step: "02",
    name: "Strategize",
    tagline: "Growth Architecture & Moat Blueprint",
    icon: Compass,
    duration: "Week 2–3",
    deliverables: [
      "Custom 12-Month Growth Roadmap",
      "Offer Repositioning & Value Messaging",
      "Multi-Channel Demand Generation Blueprint",
      "Tech & Automation Integration Specs"
    ],
    outcome: "A battle-tested blueprint aligning marketing, tech, and sales."
  },
  {
    step: "03",
    name: "Build",
    tagline: "Digital Assets, Funnels & Automation Infrastructure",
    icon: Wrench,
    duration: "Week 4–8",
    deliverables: [
      "High-Performance Next.js Web/App Experiences",
      "Automated AI Lead Qualification & CRM Routing",
      "High-Intent Paid Acquisition & SEO Campaigns",
      "End-to-End Analytics & Multi-Touch Attribution"
    ],
    outcome: "Production-ready growth systems engineered to capture and convert."
  },
  {
    step: "04",
    name: "Optimize",
    tagline: "Iterative CRO & Acquisition Calibration",
    icon: Gauge,
    duration: "Ongoing",
    deliverables: [
      "Weekly Multi-Variant CRO & Landing Page Tests",
      "Ad Spend Efficiency & Bid Strategy Tuning",
      "Lead Response Time Compression (<5 mins)",
      "Customer Retention & Repeat Purchase Loops"
    ],
    outcome: "Lowering CAC while accelerating lead-to-revenue conversion rate."
  },
  {
    step: "05",
    name: "Scale",
    tagline: "Autonomous Operations & Compounding Dominance",
    icon: TrendingUp,
    duration: "Compounding",
    deliverables: [
      "Aggressive Multi-Market Channel Expansion",
      "Autonomous AI Agent Deployment for Support & Sales",
      "Predictive Customer Cohort Modeling",
      "Executive Growth Dashboards & Board Reporting"
    ],
    outcome: "Predictable, systematized revenue expansion with high EBITDA margins."
  }
];

export default function BusinessSystemFramework({ onStartConversation }) {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="framework" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>THE 5-STAGE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Your Business Is a System. Growth Should Be Too.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            We replace guesswork and disconnected agency retainers with a disciplined 5-stage compounding growth framework.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons (Horizontal on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0097B2] text-white border-[#0097B2] shadow-lg shadow-[#0097B2]/20 scale-[1.02]"
                    : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-white/80" : "text-[#0097B2]"}`}>
                    STAGE {s.step}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-[#0B2545]/5 dark:bg-white/5 text-[#0B2545]/60 dark:text-[#E6EEF2]/60"}`}>
                    {s.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-bold font-heading text-base">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#0097B2]"}`} />
                  <span>{s.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Comprehensive View */}
        <Card3DTilt className="p-8 sm:p-12 bg-white dark:bg-[#0B2545]/80 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Stage Overview & Outcome */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold font-mono text-[#0097B2]">
                  {STAGES[activeStage].step}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
                  {STAGES[activeStage].duration} Focus
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                {STAGES[activeStage].name}: {STAGES[activeStage].tagline}
              </h3>
              <p className="text-base text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                Our approach systematically eliminates operational blind spots before pouring capital into scaling.
              </p>

              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-[#0097B2]/10 border border-[#0097B2]/20 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                  Expected Outcome:
                </div>
                <div className="text-sm font-semibold text-[#0B2545] dark:text-white">
                  "{STAGES[activeStage].outcome}"
                </div>
              </div>

              <button
                onClick={onStartConversation}
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#0097B2] hover:bg-[#007a91] px-6 py-3 rounded-xl transition-all shadow-md shadow-[#0097B2]/25 cursor-pointer"
              >
                <span>Initiate Stage 01 Diagnosis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Col: Key Deliverables Checklist */}
            <div className="lg:col-span-6 bg-[#F8FAFC] dark:bg-[#071A30]/60 p-6 sm:p-8 rounded-xl border border-[#0B2545]/10 dark:border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-5">
                Key Execution Deliverables:
              </h4>
              <div className="space-y-4">
                {STAGES[activeStage].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-[#0B2545] dark:text-[#E6EEF2]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Card3DTilt>

      </div>

    </section>
  );
}
