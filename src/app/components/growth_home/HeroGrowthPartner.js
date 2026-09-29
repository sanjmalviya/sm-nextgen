"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Sparkles, TrendingUp, ShieldCheck, 
  CheckCircle2, Compass, Layers, Target, Users, DollarSign, Zap,
  Activity, ArrowUpRight
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function HeroGrowthPartner({ onStartConversation, onExploreHowWeGrow }) {
  const [activeTab, setActiveTab] = useState(0);

  const metrics = [
    { label: "Checkout CRO Lift", value: "+38%", detail: "Conversion & Funnel CRO" },
    { label: "CAC Optimization", value: "-24%", detail: "High-Intent Customer Acquisition" },
    { label: "Qualified Pipeline", value: "+48%", detail: "Instant Inbound Lead Routing" },
    { label: "Attribution Match", value: "96.4%", detail: "Accurate Revenue Tracking" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] overflow-hidden transition-colors duration-300">
      
      {/* Subtle Luminous Background Glow - Clean, non-distracting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#0097B2]/8 dark:bg-[#0097B2]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold, Confident Executive Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse" />
              <span>SM NextGen — Business Growth Partner</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] text-[#0B2545] dark:text-white mb-6">
              Your Business <br className="hidden sm:inline" />
              Deserves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                More Than Marketing.
              </span>
            </h1>

            {/* Subtitle - Clean & Concise */}
            <p className="text-lg sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/80 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
              We help growing companies build predictable revenue engines. From brand positioning and fast web platforms to AI automation and performance marketing — everything connects to bring you more qualified leads and sales.
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onStartConversation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0097B2]/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start a Growth Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/how-we-work"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F8FAFC] dark:bg-[#071A30]/80 hover:bg-slate-100 dark:hover:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border border-[#0B2545]/15 dark:border-white/15 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:border-[#0097B2]/50 cursor-pointer"
              >
                <span>How We Grow</span>
                <ArrowUpRight className="w-4 h-4 text-[#0097B2]" />
              </Link>
            </div>

            {/* Credibility Micro-Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Strategy + Tech + AI Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Zero Vanity Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Direct Growth Partners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek 3D Interactive Growth Architecture Card */}
          <div className="lg:col-span-5">
            <Card3DTilt className="p-8 sm:p-9 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#0B2545]/10 dark:border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#0097B2]">
                    System Architecture
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white">
                    Integrated Growth Engine
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Active Engine</span>
                </div>
              </div>

              {/* Executive Growth Telemetry Visual (Clean, Authentic, No AI Wireframe Orb) */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 flex items-center justify-center shadow-inner group">
                <img
                  src="/images/services/ai-data-analytics-business-intelligence.png"
                  alt="Enterprise Growth Telemetry"
                  className="w-full h-full object-cover object-center opacity-85 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] via-[#071A30]/30 to-transparent" />
                <div className="absolute top-2.5 right-3 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Attribution
                </div>
                <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                  Real Revenue & Attribution
                </div>
              </div>

              {/* 4 Interactive System Levers */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {metrics.map((m, idx) => (
                  <div
                    key={m.label}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      activeTab === idx
                        ? "bg-white dark:bg-[#0B2545] border-[#0097B2] shadow-md shadow-[#0097B2]/10"
                        : "bg-white/60 dark:bg-[#0B2545]/40 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/30"
                    }`}
                  >
                    <div className="text-2xl font-extrabold font-heading text-[#0097B2] mb-1">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold text-[#0B2545] dark:text-white mb-0.5">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 truncate">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Unified Growth Chain Progression */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0B2545]/60 border border-[#0B2545]/10 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0B2545]/60 dark:text-[#E6EEF2]/60 mb-2">
                  <span>STRATEGY</span>
                  <span>→</span>
                  <span>TECH</span>
                  <span>→</span>
                  <span>AI</span>
                  <span>→</span>
                  <span className="text-[#0097B2]">REVENUE</span>
                </div>
                <div className="w-full bg-[#0B2545]/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0097B2] to-cyan-400 h-full w-full rounded-full" />
                </div>
                <div className="text-[11px] text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mt-3 text-center">
                  Focused on: <strong className="text-[#0097B2]">{metrics[activeTab].detail}</strong>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-5 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-medium">
                  One Unified Partner
                </span>
                <Link
                  href="/tools"
                  className="font-bold text-[#0097B2] hover:underline flex items-center gap-1"
                >
                  <span>Test Your Growth Score</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </Card3DTilt>
          </div>

        </div>

        {/* Enterprise Tech & Platform Integration Strip */}
        <div className="mt-16 pt-8 border-t border-[#0B2545]/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
          <div className="font-mono font-bold uppercase tracking-wider text-[11px] text-[#0097B2] shrink-0">
            ENGINEERED WITH MODERN STACKS & PLATFORMS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-semibold text-xs tracking-wide">
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Next.js & React
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Google Cloud & Meta
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> Shopify Plus & Stripe
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> OpenAI & Claude AI
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0097B2] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" /> WhatsApp Business Cloud
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
