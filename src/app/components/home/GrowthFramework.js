"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Wrench, TrendingUp, Sliders, CheckCircle2, ArrowRight } from "lucide-react";

export default function GrowthFramework({ onStartConversation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DIAGNOSE",
      subtitle: "Uncovering the Real Growth Constraints",
      icon: Search,
      summary: "Understand the business model, unit economics, market positioning, competitors, and where revenue leaks occur in the existing funnel.",
      deliverables: [
        "Full Growth Engine & Tech Audit",
        "Unit Economics & CAC/LTV Diagnostic",
        "Competitor & Market White-Space Mapping",
        "Conversion Bottleneck Identification"
      ],
      impact: "Zero wasted spend on channels that won't move the needle."
    },
    {
      num: "02",
      title: "STRATEGIZE",
      subtitle: "Architecting the High-Impact Roadmap",
      icon: Compass,
      summary: "Prioritize the highest-leverage growth vectors and formulate a multi-quarter execution blueprint with clear mathematical milestones.",
      deliverables: [
        "90-Day Priority Growth Roadmap",
        "Channel Prioritization Matrix",
        "Audience Archetypes & Positioning Architecture",
        "Revenue Forecasting & Budget Model"
      ],
      impact: "Executive alignment on what to build, why, and in what order."
    },
    {
      num: "03",
      title: "BUILD",
      subtitle: "Engineering the Infrastructure",
      icon: Wrench,
      summary: "Build the digital conversion experiences, tracking telemetry, sales automation, CRM workflows, and acquisition assets.",
      deliverables: [
        "High-Converting Web & Landing Infrastructures",
        "Automated CRM & Lead Routing Pipelines",
        "Multi-Touch Tracking & Server-Side Attribution",
        "Creative & Messaging Asset Library"
      ],
      impact: "Institutional assets that convert visitors at industry-leading benchmarks."
    },
    {
      num: "04",
      title: "GROW",
      subtitle: "Acquisition, Testing & Optimization",
      icon: TrendingUp,
      summary: "Activate demand across organic search, algorithmic paid media, and outbound triggers. Iteratively test messaging and improve cost per acquisition.",
      deliverables: [
        "Multi-Channel Paid & Organic Demand Inflow",
        "Continuous A/B Conversion Rate Optimization",
        "Weekly Sprint Reviews & Cohort Analyses",
        "Pipeline Velocity Tracking"
      ],
      impact: "Predictable, qualified inbound customer generation at optimal CAC."
    },
    {
      num: "05",
      title: "SCALE",
      subtitle: "Automation, Efficiency & Compounding",
      icon: Sliders,
      summary: "Automate operational processes with AI agents, improve margin efficiency, expand into new markets, and build systems that compound.",
      deliverables: [
        "Autonomous AI Operational Workflows",
        "Customer Retention & LTV Expansion Cycles",
        "Cross-Border / Multi-Market Expansion",
        "Compounding Growth Infrastructure"
      ],
      impact: "Revenue scales 3x–10x without breaking internal team capacity."
    }
  ];

  return (
    <section id="how-we-grow" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Proprietary Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            Diagnose. Strategize. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Build. Grow. Scale.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            We don&apos;t sell random marketing tactics. We execute an engineering-grade growth framework designed to turn chaotic operations into predictable, compounding revenue machines.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? "bg-[#0097B2]/20 border-[#0097B2] shadow-[0_0_20px_rgba(0,151,178,0.25)]"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-[#0097B2]" : "text-white/40"}`}>
                    PHASE {step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#0097B2]" : "text-white/50"}`} />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Step Detailed Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-6 sm:p-10 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-widest">
                  Phase {steps[activeStep].num} Deep Dive
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-[#E6EEF2]/80 leading-relaxed mb-6">
                {steps[activeStep].summary}
              </p>

              <div className="p-4 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/30 mb-6">
                <span className="text-xs font-mono text-[#0097B2] font-semibold block uppercase mb-1">Strategic Payoff</span>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {steps[activeStep].impact}
                </p>
              </div>

              <button
                onClick={onStartConversation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Apply Framework to Your Business
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                Key Architecture Deliverables
              </h4>
              <ul className="space-y-3.5">
                {steps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#E6EEF2]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
