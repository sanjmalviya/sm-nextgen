"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import GrowthTrajectory3D from "../3d/GrowthTrajectory3D";

export default function HeroGrowth3D({ onStartConversation, onExploreSimulator }) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      {/* 3D Compounding Growth Trajectory WebGL Centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-85 dark:opacity-95">
        <div className="w-full max-w-5xl h-[420px] sm:h-[600px]">
          <GrowthTrajectory3D
            accentColor="#0097B2"
            gridColor="#0B2545"
            particleCount={2200}
            interactive={true}
          />
        </div>
      </div>

      {/* Ambient Radial Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#0097B2]/15 dark:bg-[#0097B2]/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Institutional Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0097B2]/10 dark:bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse" />
          <span>Institutional Business Growth Partner</span>
        </motion.div>

        {/* Global-Tier Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.12] mb-6 text-[#0B2545] dark:text-white"
        >
          Engineering Compounding <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
            Growth Systems
          </span>{" "}
          That Last.
        </motion.h1>

        {/* Crisp, Authoritative Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/80 max-w-2xl mx-auto font-body leading-relaxed mb-10"
        >
          We architect the strategic positioning, acquisition infrastructure, and autonomous operations that take ambitious companies from linear plateaus to compounding market dominance.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          <button
            onClick={onStartConversation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-[#0097B2]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Architect Your Growth System</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreSimulator}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/80 dark:bg-[#071A30]/80 hover:bg-white dark:hover:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border border-[#0B2545]/15 dark:border-white/15 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-md transition-all duration-200 hover:border-[#0097B2]/50 cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 text-[#0097B2]" />
            <span>Simulate 12-Month Trajectory</span>
          </button>
        </motion.div>

        {/* Live Floating Telemetry Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl"
        >
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/75 dark:bg-[#071A30]/75 border border-[#0B2545]/10 dark:border-white/10 backdrop-blur-md shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-[#0B2545] dark:text-white font-heading">
                4.8x Multiple
              </div>
              <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                Average LTV:CAC Ratio
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/75 dark:bg-[#071A30]/75 border border-[#0B2545]/10 dark:border-white/10 backdrop-blur-md shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-[#0B2545] dark:text-white font-heading">
                +185% Yield
              </div>
              <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                Funnel Conversion Velocity
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/75 dark:bg-[#071A30]/75 border border-[#0B2545]/10 dark:border-white/10 backdrop-blur-md shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-[#0B2545] dark:text-white font-heading">
                $48M+ Scaled
              </div>
              <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                Audited Client Revenue
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
