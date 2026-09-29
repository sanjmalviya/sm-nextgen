"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, DollarSign, Users, Target, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GrowthResults({ onStartConversation }) {
  const [activeStudy, setActiveStudy] = useState(0);

  const studies = [
    {
      id: "b2b-saas",
      client: "B2B Cloud Analytics Platform",
      sector: "Enterprise SaaS",
      challenge: "High ad spend with flatlining demo requests and poor attribution clarity across a 60-day enterprise buying cycle.",
      diagnosis: "Generic value propositions, bloated form frictions, and completely disconnected ad audiences lacking intent filtering.",
      strategy: "Restructured ICP positioning around enterprise compliance pain points, implemented progressive qualification, and activated account-based search intent.",
      execution: "Headless interactive ROI calculator landing experience + automated HubSpot lead scoring + high-intent search capture.",
      metrics: [
        { label: "Pipeline Generated", val: "+240%" },
        { label: "CAC Reduction", val: "-38%" },
        { label: "Sales Cycle Velocity", val: "18 Days Faster" }
      ],
      businessImpact: "Secured enterprise ARR expansion and closed their Series A funding round with verified customer acquisition unit economics."
    },
    {
      id: "d2c-brand",
      client: "PureRoots Herbal Wellness",
      sector: "D2C & E-Commerce",
      challenge: "Rising Meta Ad costs (CAC) were eroding gross margins, while 70% of store visitors bounced on the product page.",
      diagnosis: "Over-reliance on static image ads without social proof, coupled with a sluggish checkout flow and zero post-purchase retention systems.",
      strategy: "Engineered a high-speed headless storefront, introduced interactive quiz-based personalization, and deployed automated WhatsApp cart recovery.",
      execution: "Next.js custom checkout flow + UGC video testing framework + 24/7 automated WhatsApp customer concierge.",
      metrics: [
        { label: "Blended ROAS", val: "3.4x" },
        { label: "Checkout Conversion", val: "+56%" },
        { label: "Repeat LTV (90d)", val: "+44%" }
      ],
      businessImpact: "Transitioned from razor-thin break-even margins to sustainable profitability, scaling monthly order volumes past 12,000 units."
    },
    {
      id: "hospitality-group",
      client: "Mewar Heritage Hospitality Group",
      sector: "Luxury Hospitality & Real Estate",
      challenge: "High reliance on third-party booking portals eating 18–22% commissions with low direct booking volume.",
      diagnosis: "Outdated legacy website with confusing mobile reservation flow and non-existent localized search and high-net-worth retargeting.",
      strategy: "Created an immersive direct-booking digital experience, aggressive local SEO dominance, and automated VIP concierge engagement.",
      execution: "Immersive high-performance web experience + direct WhatsApp VIP concierge + localized Google Search campaigns.",
      metrics: [
        { label: "Direct Bookings", val: "+185%" },
        { label: "OTA Commission Saved", val: "₹18.4 Lakhs" },
        { label: "Direct Inbound ROAS", val: "7.2x" }
      ],
      businessImpact: "Significantly boosted direct hotel profit margins and filled off-season occupancy through corporate retreat packages."
    }
  ];

  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
              Verifiable Commercial Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Growth Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Measurable.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 max-w-md leading-relaxed">
            We don&apos;t measure success by vanity metrics. We evaluate our work by the real commercial outcomes we create for our client partners.
          </p>
        </div>

        {/* Case Studies Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {studies.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveStudy(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeStudy === idx 
                  ? "bg-white/[0.08] border-[#0097B2] shadow-[0_0_20px_rgba(0,151,178,0.2)]" 
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
              }`}
            >
              <div className="text-[11px] font-mono text-[#0097B2] uppercase tracking-wider mb-1 font-semibold">
                {item.sector}
              </div>
              <div className="font-bold text-base sm:text-lg text-white">
                {item.client}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Case Study Card */}
        <motion.div
          key={activeStudy}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 backdrop-blur-xl"
        >
          {/* Metrics Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-white/10">
            {studies[activeStudy].metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center sm:text-left">
                <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0097B2]">
                  {m.val}
                </div>
                <div className="text-xs font-mono text-[#E6EEF2]/70 mt-1 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Architecture Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1">
                  1. Growth Constraint (Challenge)
                </span>
                <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">
                  {studies[activeStudy].challenge}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  2. Root Cause (Diagnosis)
                </span>
                <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">
                  {studies[activeStudy].diagnosis}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  3. Strategic Shift & Architecture
                </span>
                <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">
                  {studies[activeStudy].strategy}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  4. Commercial Business Impact
                </span>
                <p className="text-sm text-white font-medium leading-relaxed">
                  {studies[activeStudy].businessImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-white/50">
              Architecture verified with live client commercial telemetry.
            </span>
            <button
              onClick={onStartConversation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-xs tracking-wide transition-all cursor-pointer w-max"
            >
              Discuss Your Business Metrics <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
