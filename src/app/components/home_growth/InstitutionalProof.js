"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function InstitutionalProof({ onStartConversation }) {
  const metrics = [
    { value: "$48M+", label: "Verified Revenue Generated", caption: "Across Indian & Global Enterprises" },
    { value: "4.8x", label: "Average LTV:CAC Multiple", caption: "Audited Compounding Unit Economics" },
    { value: "340+", label: "Growth Systems Deployed", caption: "Across SaaS, D2C & Professional Firms" },
    { value: "<0.8s", label: "Target Platform Velocity", caption: "Headless Sub-Second Conversion Speed" },
  ];

  const cases = [
    {
      client: "Enterprise SaaS Platform",
      geography: "US & European Markets",
      metric: "+320%",
      metricLabel: "Inbound Pipeline Growth",
      challenge: "High CAC on Google Ads with 48% demo no-show rate and zero automated qualification.",
      architecture: "Engineered high-intent SEO/GEO answer engine discovery, sub-second demo funnel, and automated WhatsApp/email qualification."
    },
    {
      client: "Premium D2C Commerce Brand",
      geography: "India & Middle East",
      metric: "5.4x",
      metricLabel: "Compounded ROAS at Scale",
      challenge: "Over-reliance on volatile Meta ad algorithms; customer acquisition cost rose 64% in Q3.",
      architecture: "Deployed automated WhatsApp checkout recovery, zero-friction 1-click cart, and predictive LTV retention workflows."
    },
    {
      client: "Luxury Hospitality & Resorts Group",
      geography: "India & Southeast Asia",
      metric: "₹18.4M",
      metricLabel: "Direct Organic Bookings",
      challenge: "OTA platforms eating 20-25% commission fees per booking with zero guest relationship retention.",
      architecture: "Architected proprietary direct booking platform with autonomous AI concierge chat and automated remarketing."
    }
  ];

  return (
    <section id="proof" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
              Audited Enterprise Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
              Institutional Proof. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Compounding Revenue.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 max-w-md font-body leading-relaxed">
            We measure our success by balance-sheet impact: customer acquisition cost compression, pipeline velocity, and durable enterprise valuation.
          </p>
        </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-white dark:bg-[#071A30] border border-[#0B2545]/10 dark:border-white/10 text-center flex flex-col justify-center shadow-sm"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0097B2] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0B2545] dark:text-white font-heading mb-1">
                {m.label}
              </div>
              <div className="text-[11px] text-[#0B2545]/50 dark:text-[#E6EEF2]/50 font-body">
                {m.caption}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Executive Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Card3DTilt key={i} className="p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#0097B2] uppercase tracking-wider">
                    {c.geography}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#0B2545]/40 dark:text-white/40 group-hover:text-[#0097B2] transition-colors" />
                </div>

                <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-6">
                  {c.client}
                </h3>

                <div className="mb-6 p-4 rounded-xl bg-[#0097B2]/5 dark:bg-white/[0.03] border border-[#0097B2]/20">
                  <div className="text-3xl font-extrabold font-heading text-[#0097B2] mb-0.5">
                    {c.metric}
                  </div>
                  <div className="text-xs font-semibold text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body">
                    {c.metricLabel}
                  </div>
                </div>

                <div className="space-y-3 text-xs font-body leading-relaxed mb-6">
                  <div>
                    <span className="font-semibold text-[#0B2545] dark:text-white block mb-0.5">Friction Point:</span>
                    <span className="text-[#0B2545]/60 dark:text-[#E6EEF2]/65">{c.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0097B2] block mb-0.5">System Architecture:</span>
                    <span className="text-[#0B2545]/60 dark:text-[#E6EEF2]/65">{c.architecture}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onStartConversation}
                className="w-full py-2.5 rounded-lg bg-[#0097B2]/10 hover:bg-[#0097B2] text-[#0097B2] hover:text-white font-semibold text-xs tracking-wide transition-all duration-200 text-center cursor-pointer"
              >
                Engineer Similar Outcomes →
              </button>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
