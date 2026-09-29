"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Zap, Cpu, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function GrowthEngineCore3D({ onSelectEngine }) {
  const [activeTab, setActiveTab] = useState(0);

  const engines = [
    {
      id: "acquisition",
      name: "Acquisition Engine",
      tagline: "High-Intent Inbound Demand",
      icon: Target,
      metric: "4.8x",
      metricLabel: "Average ROAS",
      description: "Dominating search, algorithmic paid media, and AI-driven answer engines to generate predictable customer pipeline.",
      features: [
        "Search & AI Engine Optimization (SEO + GEO)",
        "Precision Paid Media (Meta, Google, LinkedIn)",
        "Automated Lead Capture Funnels"
      ]
    },
    {
      id: "conversion",
      name: "Conversion Architecture",
      tagline: "Turn Attention Into Revenue",
      icon: Zap,
      metric: "+185%",
      metricLabel: "Funnel Yield",
      description: "Eliminating digital friction points across web platforms, sales landing funnels, and mobile user checkout journeys.",
      features: [
        "Headless, Sub-Second Web Platforms",
        "High-Velocity Landing Page Funnels",
        "Data-Driven UX & Checkout Optimization"
      ]
    },
    {
      id: "automation",
      name: "Autonomous Systems",
      tagline: "Scale Without Headcount Chaos",
      icon: Cpu,
      metric: "78%",
      metricLabel: "Manual Task Reduction",
      description: "Connecting CRM, customer messaging, routing, and operational workflows with custom AI business agents.",
      features: [
        "Autonomous AI Customer & Booking Agents",
        "WhatsApp & Omnichannel Sales Automation",
        "Cross-Platform API & CRM Integration"
      ]
    },
    {
      id: "intelligence",
      name: "Financial Intelligence",
      tagline: "Closed-Loop Revenue Attribution",
      icon: BarChart3,
      metric: "100%",
      metricLabel: "Attribution Clarity",
      description: "Transforming ambiguous marketing data into real-time financial telemetry connecting ad spend directly to closed bank revenue.",
      features: [
        "Executive Unified Growth Dashboards",
        "Multi-Touch Server-Side Attribution",
        "Predictive CAC:LTV Forecasting Models"
      ]
    }
  ];

  const current = engines[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="growth-engine" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            The Growth Operating System
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Four Engines. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              One Unified System.
            </span>
          </h2>
        </div>

        {/* 4 Interactive Engine Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {engines.map((eng, idx) => {
            const Icon = eng.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={eng.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between h-28 ${
                  isActive
                    ? "bg-white dark:bg-[#071A30] border-[#0097B2] shadow-lg shadow-[#0097B2]/15 scale-[1.02]"
                    : "bg-white/50 dark:bg-white/[0.02] border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-[#0097B2] text-white" : "bg-[#0097B2]/10 text-[#0097B2]"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[#0B2545]/40 dark:text-white/40">
                    0{idx + 1}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold font-heading line-clamp-1 ${
                  isActive ? "text-[#0097B2]" : "text-[#0B2545] dark:text-[#E6EEF2]"
                }`}>
                  {eng.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Engine Interactive 3D Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Card3DTilt className="p-8 sm:p-10 border-[#0B2545]/10 dark:border-white/10">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                
                {/* Left: Telemetry Details */}
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-mono mb-4">
                    <CurrentIcon className="w-3.5 h-3.5" />
                    <span>{current.tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                    {current.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {current.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onSelectEngine}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer group"
                  >
                    <span>Deploy this engine for your business</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right: High-Impact Visual Metric Box */}
                <div className="md:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0097B2]/5 dark:bg-white/[0.03] border border-[#0097B2]/20 text-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0097B2] mb-2">
                    Verified Benchmark
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-2">
                    {current.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                    {current.metricLabel}
                  </div>
                </div>

              </div>
            </Card3DTilt>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
