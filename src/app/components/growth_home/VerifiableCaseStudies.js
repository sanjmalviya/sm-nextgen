"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, ShoppingBag, Stethoscope, ArrowRight, 
  TrendingUp, CheckCircle2, ShieldCheck, ChevronRight 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const CASE_STUDIES = [
  {
    id: "logistics",
    category: "B2B Tech & Logistics",
    clientType: "Enterprise Supply Chain Platform",
    image: "/images/services/web-app-development.png",
    title: "How We Engineered a +48% Qualified Inbound Pipeline & Reduced CAC by 26%",
    challenge: "High spend on LinkedIn and Google generated high click volumes but low-quality leads. The sales team wasted hours manually qualifying inquiries that rarely converted to enterprise contracts.",
    opportunity: "Position the platform as mission-critical infrastructure for enterprise shippers through account-based inbound funnels and instant AI qualification.",
    strategy: "Integrated ABM acquisition + interactive ROI calculator + automated CRM routing.",
    execution: "Developed a sub-second Next.js web application, interactive rate calculator, and sub-5-minute WhatsApp/CRM lead-routing system.",
    results: [
      { label: "Qualified Enterprise Pipeline", value: "+48%" },
      { label: "Customer Acquisition Cost", value: "-26%" },
      { label: "Sales Lead Response Time", value: "< 5 Minutes" }
    ],
    whatChanged: "The executive team shifted from chasing unpredictable vendor leads to closing qualified six-figure contracts from a predictable inbound machine."
  },
  {
    id: "ecommerce",
    category: "D2C & Modern Commerce",
    clientType: "Lifestyle & Apparel Brand (Scaling past ₹2Cr ARR)",
    image: "/images/services/e-commerce-development.png",
    title: "Unlocking 3.4x Blended ROAS & +38% Checkout Conversion Velocity",
    challenge: "Paid Meta ad costs were escalating, while an outdated Shopify theme caused high cart abandonment and zero customer retention systems.",
    opportunity: "Build a high-performance digital experience combined with automated retention workflows to expand customer lifetime value.",
    strategy: "Modern Next.js storefront + automated WhatsApp/Email retention loops + friction-free checkout CRO.",
    execution: "Re-engineered store architecture for sub-second mobile performance, integrated one-click checkout, and deployed personalized post-purchase recommendations.",
    results: [
      { label: "Checkout Conversion Rate", value: "+38%" },
      { label: "90-Day Repeat Purchase Rate", value: "+26%" },
      { label: "Blended Multi-Channel ROAS", value: "3.4x" }
    ],
    whatChanged: "Brand stopped burning cash on top-of-funnel customer churn, transitioning into a compounding high-LTV direct-to-consumer powerhouse."
  },
  {
    id: "healthcare",
    category: "Healthcare & Clinical Services",
    clientType: "8-Location Clinical Care Group",
    image: "/images/services/whatsapp-automation-systems.png",
    title: "2.6x Organic Patient Inflow with a 65% Reduction in Missed Slots",
    challenge: "Fragmented digital presence across clinic locations. Inquiries were handled manually via phone lines with high drop-off and missed appointment rates.",
    opportunity: "Dominate local organic search rankings and build an autonomous patient scheduling and reminder portal.",
    strategy: "Hyper-local SEO architecture + high-trust digital portal + automated multi-channel appointment confirmations.",
    execution: "Built localized location pages with real-time specialist availability, instant booking confirmation, and automated 24-hour reminder workflows via WhatsApp.",
    results: [
      { label: "Monthly Organic Bookings", value: "2.6x" },
      { label: "Appointment No-Show Rate", value: "-65%" },
      { label: "Local Search Visibility", value: "Top 3 Local Ranks" }
    ],
    whatChanged: "Clinic coordinators transitioned from manual receptionist firefighting to managing an automated, self-filling appointment book."
  }
];

export default function VerifiableCaseStudies({ onExploreMore }) {
  const [activeCase, setActiveCase] = useState(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PROVEN COMMERCIAL VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Real Businesses. Real Problems. Real Growth Work.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            We don't manufacture hype or invent fictional metrics. Here is how we dissect real business challenges and engineer quantifiable growth systems.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CASE_STUDIES.map((c) => {
            const isSelected = activeCase.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCase(c)}
                className={`px-5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                    : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                }`}
              >
                {c.category}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detailed Grid */}
        <Card3DTilt className="p-6 sm:p-10 bg-white dark:bg-[#0B2545]/80 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl">
          
          {/* Clean Modern Case Study Image Banner (PNG) */}
          <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden mb-8 border border-[#0B2545]/10 dark:border-white/10 bg-slate-900 group">
            <img 
              src={activeCase.image} 
              alt={activeCase.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"></div>
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                {activeCase.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/90 text-white shadow-sm w-fit backdrop-blur-sm">
                Verified Outcome
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] bg-white/90 dark:bg-[#071A30]/90 px-2.5 py-1 rounded backdrop-blur-sm">
                {activeCase.clientType}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-heading text-white mt-2 drop-shadow-md">
                {activeCase.title}
              </h3>
            </div>
          </div>

          {/* Core Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {activeCase.results.map((r, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#071A30]/60 border border-[#0B2545]/10 dark:border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0097B2] mb-1">
                  {r.value}
                </div>
                <div className="text-xs font-medium text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Breakdown: Challenge, Strategy, Execution, What Changed */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
            
            {/* Left 6 cols: Challenge & Opportunity */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-2">
                  The Business Challenge:
                </h4>
                <p className="text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-2">
                  The Strategic Opportunity:
                </h4>
                <p className="text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 leading-relaxed">
                  {activeCase.opportunity}
                </p>
              </div>
            </div>

            {/* Right 6 cols: Strategy & Execution */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-2">
                  The Growth Architecture:
                </h4>
                <p className="text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 leading-relaxed">
                  {activeCase.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-2">
                  Technical & Marketing Execution:
                </h4>
                <p className="text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 leading-relaxed">
                  {activeCase.execution}
                </p>
              </div>
            </div>

          </div>

          {/* The "What Changed" Highlight Banner */}
          <div className="p-5 rounded-xl bg-teal-50/50 dark:bg-[#0097B2]/10 border border-[#0097B2]/20 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
                The Long-Term Transformation:
              </span>
              <p className="text-sm font-semibold text-[#0B2545] dark:text-white leading-relaxed">
                "{activeCase.whatChanged}"
              </p>
            </div>
          </div>

        </Card3DTilt>

      </div>

    </section>
  );
}
