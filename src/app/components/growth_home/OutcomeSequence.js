"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Eye, Target, Users, Zap, DollarSign, TrendingUp, 
  PieChart, Award, ArrowRight, CheckCircle2 
} from "lucide-react";

const SEQUENCE_STEPS = [
  { step: "01", name: "Attention", icon: Eye, focus: "Market Relevance", desc: "Targeted brand impressions that establish category authority." },
  { step: "02", name: "Demand", icon: Target, focus: "Inbound Intent", desc: "Capturing buyers actively looking for high-value solutions." },
  { step: "03", name: "Qualified Leads", icon: Users, focus: "Pipeline Quality", desc: "Rigorous automated qualification to filter out tire-kickers." },
  { step: "04", name: "Conversions", icon: Zap, focus: "Frictionless UX", desc: "High-speed landing pages and effortless onboarding flows." },
  { step: "05", name: "Closed Sales", icon: DollarSign, focus: "Fast Velocity", desc: "Automated routing and instant lead response under 5 minutes." },
  { step: "06", name: "Net Revenue", icon: TrendingUp, focus: "Predictable Cash", desc: "Reliable ARR/MRR growth and expanded gross profit margins." },
  { step: "07", name: "Better ROI", icon: PieChart, focus: "Lower CAC", desc: "Optimized marketing spend delivering 3x–5x return on investment." },
  { step: "08", name: "Compounding Growth", icon: Award, focus: "Enterprise Moat", desc: "Self-sustaining acquisition flywheel and customer retention loops." },
];

export default function OutcomeSequence({ onStartConversation }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>THE VALUE PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            We Build for Business Outcomes.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Every engagement starts with the business objective — not the marketing channel. We connect every step of your customer lifecycle into an unbroken chain of commercial value.
          </p>
        </div>

        {/* 8-Step Flow Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SEQUENCE_STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/50 transition-all duration-300 hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0097B2]">
                    STEP {s.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 dark:bg-[#0097B2]/20 flex items-center justify-center text-[#0097B2] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                  {s.focus}
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {s.name}
                </h3>
                <p className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body leading-relaxed">
                  {s.desc}
                </p>

                {/* Connection Indicator on Desktop */}
                {idx < SEQUENCE_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-[#0097B2]/40">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Guiding Philosophy Callout */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#071A30] text-white p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-bold font-mono uppercase tracking-widest text-[#0097B2] mb-3">
                COMMERCIAL ACCOUNTABILITY
              </div>
              <blockquote className="text-lg sm:text-2xl font-bold font-heading leading-snug mb-4">
                "We don't celebrate impressions. We celebrate lower customer acquisition costs, shortened sales cycles, and compounding revenue in your bank account."
              </blockquote>
              <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">
                By aligning our team with your commercial metrics, you get honest strategic counsel, zero marketing theater, and absolute clarity on what drives growth.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
              <button
                onClick={onStartConversation}
                className="w-full px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0097B2]/30 cursor-pointer"
              >
                <span>Engineer Your Revenue Engine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-[#E6EEF2]/60 text-center">
                Executive consultations held under strict NDA
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
