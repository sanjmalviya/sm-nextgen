"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, Sparkles, TrendingUp, DollarSign, 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, 
  Zap, BarChart2 
} from "lucide-react";

export default function HomeGrowthTools({ onStartConversation }) {
  // Tab: "roi" | "cac" | "audit"
  const [activeTool, setActiveTool] = useState("roi");

  // ROI Calculator
  const [adSpend, setAdSpend] = useState(25000);
  const [targetRoas, setTargetRoas] = useState(4.2);
  const projectedRevenue = Math.round(adSpend * targetRoas);
  const netProfitEstimated = Math.round(projectedRevenue - adSpend);

  // CAC Calculator
  const [totalMarketing, setTotalMarketing] = useState(60000);
  const [acquisitions, setAcquisitions] = useState(120);
  const estimatedCac = acquisitions > 0 ? Math.round(totalMarketing / acquisitions) : 0;

  return (
    <section id="growth-tools" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>GROWTH TOOLS & AUDITS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[#0B2545] dark:text-white mb-6">
            Stop Guessing. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Calculate Your True Growth Trajectory.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Use our interactive growth calculators to model marketing returns, audit customer acquisition costs, and identify bottlenecks before committing capital.
          </p>
        </div>

        {/* Interactive Tool Frame */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#0B2545] rounded-3xl border border-[#0B2545]/10 dark:border-white/10 shadow-xl overflow-hidden">
          
          {/* Tool Switcher Tabs */}
          <div className="flex border-b border-[#0B2545]/10 dark:border-white/10 bg-slate-50 dark:bg-black/20 p-2 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTool("roi")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                activeTool === "roi"
                  ? "bg-white dark:bg-[#071A30] text-[#0097B2] shadow-sm border border-slate-200 dark:border-white/10"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-[#0097B2]" />
              <span>ROAS & Revenue Forecaster</span>
            </button>

            <button
              onClick={() => setActiveTool("cac")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                activeTool === "cac"
                  ? "bg-white dark:bg-[#071A30] text-[#0097B2] shadow-sm border border-slate-200 dark:border-white/10"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              <DollarSign className="w-4 h-4 text-[#0097B2]" />
              <span>CAC Unit Economics Auditor</span>
            </button>

            <Link
              href="/tools"
              className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 text-[#0097B2] hover:bg-[#0097B2]/10 transition shrink-0"
            >
              <span>Explore All 8 Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Active Tool Content */}
          <div className="p-6 sm:p-10">
            {activeTool === "roi" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Monthly Marketing Budget: <span className="text-[#0097B2] font-mono text-base font-bold">${adSpend.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={5000}
                      max={200000}
                      step={5000}
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="w-full accent-[#0097B2] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>$5,000</span>
                      <span>$100,000</span>
                      <span>$200,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Target ROAS Multiple: <span className="text-[#0097B2] font-mono text-base font-bold">{targetRoas}x</span>
                    </label>
                    <input
                      type="range"
                      min={1.5}
                      max={8.0}
                      step={0.1}
                      value={targetRoas}
                      onChange={(e) => setTargetRoas(Number(e.target.value))}
                      className="w-full accent-[#0097B2] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>1.5x (Breakeven)</span>
                      <span>4.0x (Target)</span>
                      <span>8.0x (Exceptional)</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    *Based on closed-loop attribution models across verified Meta, Google Ads, and high-converting Next.js checkout funnels.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-[#0B2545]/10 dark:border-white/10 space-y-6 text-center md:text-left">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Projected Monthly Pipeline</span>
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0097B2] mt-1 font-mono">
                      ${projectedRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10 text-xs">
                    <div>
                      <span className="text-slate-400 block font-mono">Est. Net Yield</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm font-mono">+${netProfitEstimated.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono">Annualized Run Rate</span>
                      <span className="font-bold text-[#0B2545] dark:text-white text-sm font-mono">${(projectedRevenue * 12).toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={onStartConversation}
                    className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                  >
                    <span>Request Strategic Growth Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTool === "cac" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Total Sales & Marketing Spend: <span className="text-[#0097B2] font-mono text-base font-bold">${totalMarketing.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={10000}
                      max={250000}
                      step={5000}
                      value={totalMarketing}
                      onChange={(e) => setTotalMarketing(Number(e.target.value))}
                      className="w-full accent-[#0097B2] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      New Acquired Customers: <span className="text-[#0097B2] font-mono text-base font-bold">{acquisitions}</span>
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={5}
                      value={acquisitions}
                      onChange={(e) => setAcquisitions(Number(e.target.value))}
                      className="w-full accent-[#0097B2] cursor-pointer"
                    />
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    CAC should be evaluated against Customer Lifetime Value (LTV). A healthy growth system targets an LTV:CAC ratio of &gt; 3:1.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-[#0B2545]/10 dark:border-white/10 space-y-6 text-center md:text-left">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Blended Customer Acquisition Cost (CAC)</span>
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0097B2] mt-1 font-mono">
                      ${estimatedCac.toLocaleString()}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                      <span>Recommended Target LTV: <strong>${(estimatedCac * 3).toLocaleString()}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                      <span>Payback Period Target: <strong>&lt; 6 Months</strong></span>
                    </div>
                  </div>

                  <Link
                    href="/tools"
                    className="w-full py-3 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 text-[#0B2545] dark:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 transition"
                  >
                    <span>Open Full Growth Calculator Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
