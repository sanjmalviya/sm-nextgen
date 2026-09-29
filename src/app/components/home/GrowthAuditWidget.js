"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, CheckCircle, AlertTriangle, ArrowRight, 
  RotateCcw, Sliders, ShieldCheck, HelpCircle 
} from "lucide-react";

const CATEGORY_CONFIGS = [
  {
    key: "brand",
    label: "Brand & Market Positioning",
    question: "How distinct is your positioning compared to top market competitors?",
    minLabel: "Compete on price",
    maxLabel: "Clear category authority"
  },
  {
    key: "acquisition",
    label: "Demand Generation & Acquisition",
    question: "Are your customer acquisition channels predictable and multi-source?",
    minLabel: "Single source / erratic",
    maxLabel: "Multi-channel & steady"
  },
  {
    key: "conversion",
    label: "Conversion & Funnel Velocity",
    question: "How effectively does your digital experience turn visitors into active buyers?",
    minLabel: "High bounce / low yield",
    maxLabel: "High converting / low drop"
  },
  {
    key: "technology",
    label: "Technical Infrastructure",
    question: "How modern, fast, and scalable is your web platform and core architecture?",
    minLabel: "Legacy / slow",
    maxLabel: "Headless / lightning fast"
  },
  {
    key: "automation",
    label: "AI & Operational Automation",
    question: "Are your lead routing, customer messaging, and CRM tasks fully automated?",
    minLabel: "Heavy manual labor",
    maxLabel: "Autonomous AI workflows"
  },
  {
    key: "analytics",
    label: "Attribution & Unified Intelligence",
    question: "Can you accurately trace every marketing dollar directly to closed bank revenue?",
    minLabel: "Guesswork / vanity stats",
    maxLabel: "Closed-loop attribution"
  }
];

export default function GrowthAuditWidget({ onCompleteAudit }) {
  const [scores, setScores] = useState({
    brand: 60,
    acquisition: 50,
    conversion: 55,
    technology: 70,
    automation: 40,
    analytics: 45
  });

  const overallScore = useMemo(() => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    return Math.round(total / Object.keys(scores).length);
  }, [scores]);

  const lowestCategory = useMemo(() => {
    const entries = Object.entries(scores);
    entries.sort((a, b) => a[1] - b[1]);
    const lowestKey = entries[0][0];
    const config = CATEGORY_CONFIGS.find(c => c.key === lowestKey);
    return {
      name: config?.label.split(" ")[0] || "Automation",
      fullName: config?.label || "Automation & AI Workflows",
      score: entries[0][1]
    };
  }, [scores]);

  const handleSliderChange = (key, val) => {
    setScores(prev => ({ ...prev, [key]: Number(val) }));
  };

  return (
    <section id="growth-audit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Interactive Diagnostic
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            How Strong Is Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Growth Engine?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            Adjust the sliders below to evaluate your current business maturity across 6 core growth pillars. Instantly diagnose your biggest operational bottleneck.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>Calibrate Your Growth Pillars</span>
              <span className="text-xs font-mono text-white/40">Real-time Diagnostic</span>
            </h3>

            <div className="space-y-6">
              {CATEGORY_CONFIGS.map((cfg) => {
                const val = scores[cfg.key];
                return (
                  <div key={cfg.key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-bold text-white">
                        {cfg.label}
                      </label>
                      <span className="text-xs font-mono font-bold text-[#0097B2]">
                        {val} / 100
                      </span>
                    </div>

                    <p className="text-[11px] text-white/50 leading-tight">
                      {cfg.question}
                    </p>

                    <input 
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={val}
                      onChange={(e) => handleSliderChange(cfg.key, e.target.value)}
                      className="w-full accent-[#0097B2] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-white/35 font-mono">
                      <span>{cfg.minLabel}</span>
                      <span>{cfg.maxLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Real-Time Scorecard Result Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#0B2545] to-[#11325B] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0097B2]/20 rounded-full blur-3xl pointer-events-none"></div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-2">
                System Diagnostics
              </span>

              <h4 className="text-sm text-white/70 font-medium">Your Composite Growth Engine Score</h4>
              <div className="flex items-baseline gap-3 my-4">
                <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#0097B2]">
                  {overallScore}
                </span>
                <span className="text-xl font-mono text-white/40">/ 100</span>
              </div>

              {/* Individual Pillar Breakdown Strip */}
              <div className="space-y-2 py-4 border-y border-white/10 my-4 text-xs font-mono">
                {CATEGORY_CONFIGS.map(c => (
                  <div key={c.key} className="flex justify-between items-center text-white/80">
                    <span className="text-white/60">{c.label.split(" ")[0]}</span>
                    <span className={scores[c.key] < 50 ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                      {scores[c.key]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Identified Bottleneck Alert */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    Primary Bottleneck Identified
                  </div>
                  <p className="text-xs text-[#E6EEF2]/90 mt-0.5">
                    Your highest-leverage immediate opportunity is <strong className="text-white underline">{lowestCategory.fullName}</strong> (Score: {lowestCategory.score}/100).
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onCompleteAudit && onCompleteAudit({ overallScore, lowestCategory, scores })}
                className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,151,178,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Build My Custom Growth Roadmap
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
