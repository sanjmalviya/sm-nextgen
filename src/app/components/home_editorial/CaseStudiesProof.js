"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, ArrowRight, ShieldCheck, CheckCircle2, 
  Sparkles, Laptop, ShoppingBag, Stethoscope, Factory, 
  ExternalLink, ArrowUpRight
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "b2b-saas",
    sector: "B2B SaaS & Supply Chain",
    clientModel: "Enterprise Logistics Platform",
    image: "/images/services/web-app-development.png",
    title: "Engineering a +48% Qualified Inbound Pipeline & -26% CAC",
    icon: Laptop,
    metrics: [
      { label: "Pipeline Lift", value: "+48%" },
      { label: "Blended CAC", value: "-26%" },
      { label: "Lead Response", value: "< 4 Mins" }
    ],
    challenge: "High LinkedIn & Google Ad spend drove top-of-funnel clicks, but manual sales reps took 5+ hours to screen prospects, resulting in high churn before demo calls.",
    solution: "Built a high-performance Next.js ROI calculator, integrated 24/7 autonomous WhatsApp qualification, and deployed targeted B2B inbound content funnels.",
    outcome: "Transitioned from chasing low-intent clicks to an autonomous inbound engine closing multi-year enterprise contracts."
  },
  {
    id: "d2c-commerce",
    sector: "D2C Commerce",
    clientModel: "Omnichannel Apparel & Lifestyle",
    image: "/images/services/e-commerce-development.png",
    title: "3.4x Blended ROAS & +38% Checkout Conversion Velocity",
    icon: ShoppingBag,
    metrics: [
      { label: "Checkout CRO", value: "+38%" },
      { label: "Repeat Orders", value: "+26%" },
      { label: "Blended ROAS", value: "3.4x" }
    ],
    challenge: "Escalating Meta ad costs and an outdated, sluggish template suffered a 72% cart drop-off rate with zero automated customer retention loops.",
    solution: "Re-engineered the digital storefront on a headless Next.js stack with 1-click checkout and automated WhatsApp abandoned-cart recovery sequences.",
    outcome: "Built a compounding direct-to-consumer brand with continuous LTV retention loops and profitable paid media scale."
  },
  {
    id: "healthcare",
    sector: "Healthcare & Clinics",
    clientModel: "8-Location Clinical Care Group",
    image: "/images/services/whatsapp-automation-systems.png",
    title: "2.6x Monthly Organic Bookings with 65% Reduction in Missed Slots",
    icon: Stethoscope,
    metrics: [
      { label: "Organic Bookings", value: "2.6x" },
      { label: "No-Show Drop", value: "-65%" },
      { label: "Google 3-Pack", value: "Rank #1" }
    ],
    challenge: "Fragmented digital presence across 8 physical clinic locations. Telephone receptionists were overwhelmed, leading to high dropped calls and missed slots.",
    solution: "Ranked clinics in Google Maps Top 3 via local SEO, built self-service booking, and deployed 24-hour WhatsApp appointment reminder sequences.",
    outcome: "Clinic coordinators shifted from telephone firefighting to managing a self-filling patient appointment book."
  },
  {
    id: "industrial",
    sector: "Industrial & Manufacturing",
    clientModel: "Global Tooling & Export Manufacturer",
    image: "/images/services/brand-strategy-positioning.png",
    title: "3.4x Verified International Buyer RFQs & Digital Export Moat",
    icon: Factory,
    metrics: [
      { label: "International RFQs", value: "3.4x" },
      { label: "Export Markets", value: "14 Countries" },
      { label: "Close Rate", value: "+22%" }
    ],
    challenge: "Legacy brand perception and heavy reliance on physical trade expos for international buyer discovery.",
    solution: "Engineered an enterprise multilingual digital portal, interactive 3D specification visualizers, and automated RFQ workflows.",
    outcome: "Established modern category authority and built an autonomous year-round international buyer acquisition pipeline."
  }
];

export default function CaseStudiesProof({ onExploreCase }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "B2B SaaS & Supply Chain", "D2C Commerce", "Healthcare & Clinics", "Industrial & Manufacturing"];

  const filteredStudies = selectedCategory === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.sector === selectedCategory);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PROVEN BLUEPRINTS & PROOF</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight">
              Documented Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                Engineered for Real Revenue.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light max-w-md leading-relaxed">
            Real enterprise architectures and documented demonstration blueprints across key business sectors. We build systems that compound over time.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 dark:border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0B2545] dark:bg-white text-white dark:text-[#0B2545] shadow-sm"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Grid of In-Depth Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredStudies.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="group rounded-3xl bg-slate-50 dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/50 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Banner with Metric Badges */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-[#040e1b]/40 to-transparent" />

                    {/* Sector Tag & Proof Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0B2545]/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#0097B2]" />
                        {cs.sector}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-mono font-bold">
                        Verified Blueprint
                      </span>
                    </div>

                    {/* 3 Prominent Metrics Bar Over Image */}
                    <div className="absolute bottom-3 left-4 right-4 grid grid-cols-3 gap-2">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-xl bg-[#071A30]/85 backdrop-blur-md border border-white/15 text-center">
                          <div className="text-sm sm:text-base font-extrabold text-[#0097B2] font-heading leading-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-300 font-medium truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="text-[11px] font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                      {cs.clientModel}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white leading-snug group-hover:text-[#0097B2] transition-colors">
                      {cs.title}
                    </h3>

                    {/* Challenge & Solution Breakdown */}
                    <div className="space-y-3 pt-2 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/5">
                        <strong className="text-rose-500 dark:text-rose-400 block mb-1 font-mono uppercase text-[10px] tracking-wider">
                          The Challenge:
                        </strong>
                        <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/5">
                        <strong className="text-[#0097B2] block mb-1 font-mono uppercase text-[10px] tracking-wider">
                          The Growth System:
                        </strong>
                        <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 sm:px-8 sm:py-5 bg-white/60 dark:bg-[#040e1b] border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#0097B2]">
                  <span>Explore Full Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#040e1b] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-slate-600 dark:text-slate-300">
            Want to see how this growth architecture applies directly to your P&L and customer journey?
          </span>
          <Link
            href="/case-studies"
            className="font-bold text-[#0097B2] hover:text-[#007a91] dark:hover:text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>View All Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
