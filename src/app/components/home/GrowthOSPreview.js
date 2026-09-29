"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Layers, Sparkles, Shield, 
  Terminal, Activity, ArrowRight, CheckCircle2 
} from "lucide-react";

export default function GrowthOSPreview({ onJoinWaitlist }) {
  const osModules = [
    { name: "Live Growth Score", status: "Active Telemetry", value: "84.2 pts", color: "text-emerald-400" },
    { name: "Omnichannel Attribution", status: "Server-Side Feed", value: "99.8% Matched", color: "text-[#0097B2]" },
    { name: "Autonomous AI Agents", status: "4 Running", value: "1,420 Actions/wk", color: "text-purple-400" },
    { name: "Real-Time Pipeline Yield", status: "Closed Revenue", value: "₹42.8L / $51K", color: "text-cyan-300" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0097B2]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Positioning */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
              Proprietary Technology
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6 leading-tight">
              The Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Behind Growth.
              </span>
            </h2>

            <p className="text-base text-[#E6EEF2]/80 leading-relaxed mb-6">
              We are engineering a new generation of business growth infrastructure. <strong>Growth OS™</strong> unifies strategy, multi-touch attribution, autonomous AI workflows, and pipeline telemetry into a single, cohesive operating environment.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Single pane of glass across marketing, sales, and financial yield.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>AI agents actively executing lead qualification and operational tasks.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Powered by SM NextGen strategic engineers for maximum execution velocity.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onJoinWaitlist}
                className="px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,151,178,0.35)] flex items-center gap-2 cursor-pointer"
              >
                Request Growth OS Access
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-white/50">
                Included with Growth Partner retainers
              </span>
            </div>
          </div>

          {/* Right Product UI Card Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.02] border border-white/15 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-white/50 ml-2">Growth OS v2.4 • Client Console</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" /> Live Telemetry
                </div>
              </div>

              {/* Console Metric Tiles */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {osModules.map((mod, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] font-mono text-white/40 uppercase mb-1">
                      {mod.name}
                    </div>
                    <div className={`text-xl font-black font-mono ${mod.color}`}>
                      {mod.value}
                    </div>
                    <div className="text-[10px] font-mono text-white/60 mt-1">
                      {mod.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Execution Feed */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-white/80 space-y-2">
                <div className="flex items-center gap-2 text-[#0097B2]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="font-bold">Growth Engine Execution Log:</span>
                </div>
                <div className="text-[11px] text-white/60 pl-5">
                  &gt; Ingested 342 search intent signals across high-tier target geos.
                </div>
                <div className="text-[11px] text-emerald-400/80 pl-5">
                  &gt; Automated Lead Concierge scheduled 14 enterprise demo reviews.
                </div>
                <div className="text-[11px] text-white/60 pl-5">
                  &gt; Unified attribution calculated ROAS at 4.12x for current sprint.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
