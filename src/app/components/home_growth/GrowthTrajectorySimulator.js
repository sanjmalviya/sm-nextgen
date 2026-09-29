"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Sparkles, DollarSign, Calculator } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function GrowthTrajectorySimulator({ onClaimRoadmap }) {
  // Simulator State
  const [currentRevenue, setCurrentRevenue] = useState(25); // In Lakhs/mo (e.g. ₹25L)
  const [conversionLift, setConversionLift] = useState(65); // In %
  const [retentionMultiplier, setRetentionMultiplier] = useState(1.8); // Multiplier

  // Calculation
  const simulation = useMemo(() => {
    const baselineAnnual = currentRevenue * 12;
    // Compounding growth formula: baseline * (1 + convLift/100) * (retentionMultiplier^0.6)
    const factor = (1 + conversionLift / 100) * Math.pow(retentionMultiplier, 0.7);
    const projectedAnnual = Math.round(baselineAnnual * factor);
    const netExpansion = projectedAnnual - baselineAnnual;
    const growthMultiple = (projectedAnnual / baselineAnnual).toFixed(1);

    return {
      baselineAnnual,
      projectedAnnual,
      netExpansion,
      growthMultiple,
    };
  }, [currentRevenue, conversionLift, retentionMultiplier]);

  const handleApply = () => {
    if (onClaimRoadmap) {
      onClaimRoadmap({
        currentMonthlyRevenue: `₹${currentRevenue} Lakhs/mo`,
        targetExpansion: `₹${simulation.netExpansion} Lakhs Annual Expansion`,
        growthMultiple: `${simulation.growthMultiple}x`,
        conversionTarget: `+${conversionLift}%`,
        retentionTarget: `${retentionMultiplier}x`
      });
    }
  };

  return (
    <section id="growth-simulator" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Predictive Growth Modeling
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Simulate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Compounding Trajectory.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            See the mathematical difference when positioning, demand velocity, and autonomous operations compound together.
          </p>
        </div>

        {/* 3D Simulator Interface */}
        <Card3DTilt className="p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Slider 1: Current Revenue */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase">01 // Current Monthly Revenue</span>
                  <span className="font-bold text-[#0097B2] text-sm font-heading">₹{currentRevenue} Lakhs / mo</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-[#0B2545]/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0097B2]"
                />
                <div className="flex justify-between text-[10px] text-[#0B2545]/40 dark:text-white/40 mt-1 font-mono">
                  <span>₹5L ($6K)</span>
                  <span>₹75L ($90K)</span>
                  <span>₹1.5Cr+ ($180K+)</span>
                </div>
              </div>

              {/* Slider 2: Conversion Lift */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase">02 // Target Funnel Yield Lift</span>
                  <span className="font-bold text-[#0097B2] text-sm font-heading">+{conversionLift}% Lift</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="180"
                  step="5"
                  value={conversionLift}
                  onChange={(e) => setConversionLift(Number(e.target.value))}
                  className="w-full h-2 bg-[#0B2545]/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0097B2]"
                />
                <div className="flex justify-between text-[10px] text-[#0B2545]/40 dark:text-white/40 mt-1 font-mono">
                  <span>+20% (Modest)</span>
                  <span>+90% (Optimized)</span>
                  <span>+180% (Re-architecture)</span>
                </div>
              </div>

              {/* Slider 3: Retention & LTV Multiplier */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase">03 // LTV & Retention Expansion</span>
                  <span className="font-bold text-[#0097B2] text-sm font-heading">{retentionMultiplier}x Multiplier</span>
                </div>
                <input
                  type="range"
                  min="1.2"
                  max="3.5"
                  step="0.1"
                  value={retentionMultiplier}
                  onChange={(e) => setRetentionMultiplier(Number(e.target.value))}
                  className="w-full h-2 bg-[#0B2545]/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0097B2]"
                />
                <div className="flex justify-between text-[10px] text-[#0B2545]/40 dark:text-white/40 mt-1 font-mono">
                  <span>1.2x (Standard)</span>
                  <span>2.2x (Automated Flows)</span>
                  <span>3.5x (Enterprise Retain)</span>
                </div>
              </div>

            </div>

            {/* Right: Projected Compounding Results */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[#0097B2]/5 dark:bg-white/[0.03] border border-[#0097B2]/20 flex flex-col justify-between">
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] font-semibold">
                  12-MONTH COMPOUNDING OUTPUT
                </span>
                <span className="text-xs font-mono text-[#0097B2] font-bold">
                  {simulation.growthMultiple}x EXPANSION
                </span>
              </div>

              {/* Projected Revenue Number */}
              <div className="mb-6">
                <div className="text-xs font-mono text-[#0B2545]/60 dark:text-[#E6EEF2]/60 uppercase mb-1">
                  Projected Annual Enterprise Revenue
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0097B2]">
                  ₹{(simulation.projectedAnnual / 100).toFixed(2)} Cr
                </div>
                <div className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body mt-1">
                  Baseline: ₹{(simulation.baselineAnnual / 100).toFixed(2)} Cr/yr → <strong>+₹{(simulation.netExpansion / 100).toFixed(2)} Cr Net Capital Expansion</strong>
                </div>
              </div>

              {/* Visual Trajectory SVG Curve */}
              <div className="relative w-full h-20 mb-6 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                  {/* Linear Baseline Path (Flat dotted) */}
                  <path
                    d="M 0 65 L 300 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-[#0B2545]/30 dark:text-white/20"
                  />
                  {/* Compounding Curve Path */}
                  <path
                    d="M 0 65 Q 150 55, 300 10"
                    fill="none"
                    stroke="#0097B2"
                    strokeWidth="3.5"
                  />
                  {/* Final Peak Dot */}
                  <circle cx="300" cy="10" r="5" fill="#0097B2" />
                  <circle cx="300" cy="10" r="10" fill="#0097B2" opacity="0.25" />
                </svg>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Architect This Roadmap for Your Company</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </Card3DTilt>

      </div>
    </section>
  );
}
