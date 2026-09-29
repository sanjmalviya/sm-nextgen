"use client";
import React from "react";
import { Cpu, TrendingUp, Laptop, BarChart3, ArrowRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function BentoCapabilities3D({ onSelectCapability }) {
  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Built for Dominance. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Engineered for Scale.
            </span>
          </h2>
        </div>

        {/* 3D Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Autonomous AI Systems (Large 8 cols) */}
          <div className="md:col-span-8">
            <Card3DTilt className="p-8 sm:p-10 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2]">
                    ✦ AI Operating Core
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                  Autonomous AI Business Workflows
                </h3>
                <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body max-w-lg mb-8">
                  Eliminate repetitive manual bottlenecks. We build custom conversational AI booking agents, automated CRM lead routing, and cross-platform integrations.
                </p>
              </div>

              {/* Visual Pipeline Schematic */}
              <div className="p-4 rounded-xl bg-[#0097B2]/5 dark:bg-white/[0.03] border border-[#0097B2]/20 flex items-center justify-between text-xs font-mono text-[#0097B2]">
                <span>INBOUND LEAD</span>
                <span>→</span>
                <span>AI QUALIFICATION</span>
                <span>→</span>
                <span>WHATSAPP ROUTING</span>
                <span>→</span>
                <span>BOOKED CALENDAR</span>
              </div>
            </Card3DTilt>
          </div>

          {/* Card 2: Predictable Inbound Engine (4 cols) */}
          <div className="md:col-span-4">
            <Card3DTilt className="p-8 sm:p-10 h-full flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  Inbound Demand
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mb-6">
                  Predictable customer acquisition across Search, Paid Media & AI Answer Engines (GEO/AEO).
                </p>
              </div>

              <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-baseline justify-between">
                <span className="text-3xl font-extrabold font-heading text-[#0097B2]">4.8x</span>
                <span className="text-xs font-mono text-[#0B2545]/60 dark:text-[#E6EEF2]/60">Avg ROAS</span>
              </div>
            </Card3DTilt>
          </div>

          {/* Card 3: Modern Headless Web Platforms (4 cols) */}
          <div className="md:col-span-4">
            <Card3DTilt className="p-8 sm:p-10 h-full flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] mb-6">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  Digital Platforms
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mb-6">
                  High-velocity web architectures and headless commerce engineered for extreme conversion speed.
                </p>
              </div>

              <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-baseline justify-between">
                <span className="text-3xl font-extrabold font-heading text-[#0097B2]">&lt;0.8s</span>
                <span className="text-xs font-mono text-[#0B2545]/60 dark:text-[#E6EEF2]/60">Load Time</span>
              </div>
            </Card3DTilt>
          </div>

          {/* Card 4: Financial Attribution Intelligence (8 cols) */}
          <div className="md:col-span-8">
            <Card3DTilt className="p-8 sm:p-10 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2]">
                    ✦ Closed-Loop BI
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                  Closed-Loop Financial Telemetry
                </h3>
                <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body max-w-lg mb-6">
                  No vanity impressions or vague analytics. Every marketing dollar is tracked directly through to signed deals, customer lifetime value, and bank deposits.
                </p>
              </div>

              <button
                onClick={onSelectCapability}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer group"
              >
                <span>Audit your current architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
}
