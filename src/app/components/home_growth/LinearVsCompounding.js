"use client";
import React from "react";
import { XCircle, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function LinearVsCompounding({ onStartConversation }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            The Fundamental Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Linear Retainers vs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Compounding Systems.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            Most businesses don't have a marketing problem. They have a systems problem. Disconnected tactics produce linear fragility; integrated architecture produces compounding enterprise value.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Linear Agency Trap */}
          <Card3DTilt className="p-8 sm:p-10 border-red-500/20 bg-white/70 dark:bg-[#071A30]/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-semibold">
                  TRADITIONAL MARKETING AGENCIES
                </span>
                <AlertTriangle className="w-5 h-5 text-red-500/70" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                The Linear Agency Trap
              </h3>
              <div className="text-xs font-mono text-[#0B2545]/50 dark:text-[#E6EEF2]/50 mb-6">
                Trajectory: Flat, volatile & ad-spend dependent
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body mb-8">
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Siloed Tactics:</strong> SEO vendor doesn't talk to ad agency; ad agency doesn't touch the broken checkout funnel.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Asset Ownership:</strong> You rent clicks on a treadmill. The moment ad spend pauses, revenue collapses.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Vanity Metrics:</strong> Reports filled with impressions and clicks that don't reconcile with bank deposits.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Operational Chaos:</strong> More customers equal more manual fires, slow support, and margin dilution.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-xs font-mono text-red-500/80">
              RESULT // Compounding CAC, diminishing return on ad spend.
            </div>
          </Card3DTilt>

          {/* Right: The Compounding Growth Engine (SM NextGen) */}
          <Card3DTilt className="p-8 sm:p-10 border-[#0097B2]/40 bg-white/90 dark:bg-[#071A30]/90 shadow-xl shadow-[#0097B2]/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/15 text-[#0097B2] font-semibold">
                  SM NEXTGEN GROWTH ARCHITECTURE
                </span>
                <TrendingUp className="w-5 h-5 text-[#0097B2]" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                The Compounding Engine
              </h3>
              <div className="text-xs font-mono text-[#0097B2] mb-6">
                Trajectory: Exponential, asset-driven & margin-expanding
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span><strong>Integrated Ecosystem:</strong> Brand positioning, precision media, high-yield web UX, and automation synchronized.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span><strong>Permanent Growth Assets:</strong> High-converting funnels, algorithmic content, and custom AI agents owned by your balance sheet.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span><strong>Closed-Loop Attribution:</strong> Server-side telemetry tracing every dollar to signed contracts and customer LTV.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span><strong>Autonomous Scale:</strong> Systems multiply revenue velocity without requiring linear operational headcount.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onStartConversation}
              className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer text-center"
            >
              Transition to Compounding Growth →
            </button>
          </Card3DTilt>

        </div>

      </div>
    </section>
  );
}
