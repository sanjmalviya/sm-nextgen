"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function GrowthDiagnostic3D({ onCompleteAudit }) {
  const [revenueStage, setRevenueStage] = useState("scaling"); // 'early', 'scaling', 'enterprise'
  const [primaryFriction, setPrimaryFriction] = useState("conversion"); // 'traffic', 'conversion', 'automation', 'attribution'

  const stages = [
    { id: "early", label: "Seed / Emerging", range: "Under ₹10L/mo ($15K)" },
    { id: "scaling", label: "High-Growth Scale", range: "₹10L – ₹1Cr/mo ($15K-$150K)" },
    { id: "enterprise", label: "Established Enterprise", range: "₹1Cr+/mo ($150K+)" },
  ];

  const frictions = [
    { id: "traffic", label: "Inbound Demand & Traffic", desc: "Struggling with high ad costs & unpredictable leads" },
    { id: "conversion", label: "Funnel Yield & Conversion", desc: "Getting visitors but failing to convert into signed deals" },
    { id: "automation", label: "Manual Bottlenecks & Systems", desc: "Operations rely on slow, manual human tasks" },
    { id: "attribution", label: "Zero Attribution & Financial Fog", desc: "Unsure which channels actually yield closed revenue" },
  ];

  // Dynamic Score Calculation
  const scoreData = useMemo(() => {
    let baseScore = 54;
    let priority = "Full-Funnel Conversion Sprint";
    let bottleneck = "Funnel Friction & Dropoff";

    if (revenueStage === "early") {
      baseScore = 48;
      if (primaryFriction === "traffic") {
        baseScore = 42;
        priority = "High-Intent Inbound Acquisition (Search + Paid Media)";
        bottleneck = "Lack of Predictable Inbound Traffic Engine";
      } else if (primaryFriction === "conversion") {
        baseScore = 46;
        priority = "Sub-Second Conversion Architecture & Landing Pages";
        bottleneck = "High Drop-off Rate on Initial Touchpoint";
      } else {
        baseScore = 52;
        priority = "Automated CRM & Lead Routing Pipeline";
        bottleneck = "Manual Human Follow-up Latency";
      }
    } else if (revenueStage === "scaling") {
      baseScore = 64;
      if (primaryFriction === "conversion") {
        baseScore = 58;
        priority = "Full-Funnel CRO & Headless Web Re-Architecture";
        bottleneck = "Conversion Rate Plateau across Mobile";
      } else if (primaryFriction === "automation") {
        baseScore = 60;
        priority = "Autonomous AI Agents & WhatsApp Omnichannel Flows";
        bottleneck = "Operational Capacity Capping Deal Velocity";
      } else if (primaryFriction === "attribution") {
        baseScore = 62;
        priority = "Server-Side Multi-Touch Attribution & BI Telemetry";
        bottleneck = "Blended CAC Inefficiency on Ad Spend";
      } else {
        baseScore = 65;
        priority = "Multi-Channel Demand Engine Expansion";
        bottleneck = "Single-Channel Ad Fatigue";
      }
    } else {
      baseScore = 74;
      if (primaryFriction === "attribution") {
        baseScore = 68;
        priority = "Enterprise Financial Telemetry & Real-Time LTV Models";
        bottleneck = "Cross-Division Revenue Leakage";
      } else {
        baseScore = 72;
        priority = "Proprietary Autonomous AI Infrastructure";
        bottleneck = "Legacy Platform Tech Debt";
      }
    }

    return { score: baseScore, priority, bottleneck };
  }, [revenueStage, primaryFriction]);

  const handleClaimRoadmap = () => {
    if (onCompleteAudit) {
      onCompleteAudit({
        revenueStage,
        primaryFriction,
        score: scoreData.score,
        priority: scoreData.priority,
        bottleneck: scoreData.bottleneck
      });
    }
  };

  return (
    <section id="growth-diagnostic" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Instant 3D Diagnostic
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Evaluate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Growth Readiness Score.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            Benchmark your current revenue architecture and identify the single highest-leverage priority.
          </p>
        </div>

        {/* 3D Diagnostic Console */}
        <Card3DTilt className="p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Input Selection */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Stage */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#0097B2] font-semibold block mb-3">
                  01 // Business Scale
                </label>
                <div className="grid sm:grid-cols-3 gap-2.5">
                  {stages.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setRevenueStage(st.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        revenueStage === st.id
                          ? "bg-[#0097B2]/10 border-[#0097B2] text-[#0097B2]"
                          : "bg-white/40 dark:bg-white/[0.02] border-[#0B2545]/10 dark:border-white/10 text-[#0B2545] dark:text-[#E6EEF2] hover:border-[#0097B2]/30"
                      }`}
                    >
                      <div className="text-xs font-bold font-heading mb-0.5">{st.label}</div>
                      <div className="text-[10px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">{st.range}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Friction Point */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#0097B2] font-semibold block mb-3">
                  02 // Primary Revenue Bottleneck
                </label>
                <div className="space-y-2">
                  {frictions.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setPrimaryFriction(f.id)}
                      className={`w-full p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        primaryFriction === f.id
                          ? "bg-[#0097B2]/10 border-[#0097B2] text-[#0097B2]"
                          : "bg-white/40 dark:bg-white/[0.02] border-[#0B2545]/10 dark:border-white/10 text-[#0B2545] dark:text-[#E6EEF2] hover:border-[#0097B2]/30"
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-bold font-heading mb-0.5">{f.label}</div>
                        <div className="text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">{f.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                        primaryFriction === f.id ? "border-[#0097B2] bg-[#0097B2]" : "border-[#0B2545]/30 dark:border-white/30"
                      }`}>
                        {primaryFriction === f.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live 3D Score Dial & Output */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0097B2]/5 dark:bg-white/[0.03] border border-[#0097B2]/20 text-center">
              
              {/* Circular Gauge */}
              <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-[#0B2545]/10 dark:stroke-white/10"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0097B2"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * scoreData.score) / 100}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white">
                    {scoreData.score}
                  </span>
                  <span className="text-[10px] font-mono text-[#0097B2]">OUT OF 100</span>
                </div>
              </div>

              {/* Diagnosis Output */}
              <div className="w-full space-y-3 mb-6 text-left">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-[#071A30]/60 border border-[#0B2545]/10 dark:border-white/10">
                  <div className="text-[10px] font-mono text-[#0B2545]/60 dark:text-[#E6EEF2]/60 uppercase mb-0.5">
                    Critical Bottleneck
                  </div>
                  <div className="text-xs font-bold text-[#0B2545] dark:text-white font-heading">
                    {scoreData.bottleneck}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/30">
                  <div className="text-[10px] font-mono text-[#0097B2] uppercase mb-0.5">
                    Recommended Architecture
                  </div>
                  <div className="text-xs font-bold text-[#0097B2] font-heading">
                    {scoreData.priority}
                  </div>
                </div>
              </div>

              <button
                onClick={handleClaimRoadmap}
                className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Claim Custom Growth Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </Card3DTilt>

      </div>
    </section>
  );
}
