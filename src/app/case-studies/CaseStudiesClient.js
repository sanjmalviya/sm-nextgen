"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, TrendingUp, ArrowRight, CheckCircle2, 
  Sparkles, Filter, Laptop, ShoppingBag, Stethoscope, Landmark, Factory
} from "lucide-react";
import Card3DTilt from "../components/3d/Card3DTilt";

const CASE_STUDIES = [
  {
    id: "logistics",
    category: "B2B SaaS",
    clientType: "Enterprise Supply Chain Platform",
    image: "/images/services/web-app-development.png",
    title: "Engineering a +48% Qualified Pipeline & -26% CAC",
    icon: Laptop,
    metrics: [
      { label: "Enterprise Pipeline", value: "+48%" },
      { label: "Customer Acquisition Cost", value: "-26%" },
      { label: "Lead Response Time", value: "< 5 Mins" }
    ],
    challenge: "High LinkedIn/Google ad spend generated low-intent clicks. Sales engineers spent 60% of their time manually screening unqualified leads.",
    solution: "Built a high-performance Next.js ROI calculator, deployed 24/7 AI lead qualification on WhatsApp/CRM, and executed account-based inbound funnels.",
    transformation: "Transitioned from chasing low-ticket leads to closing qualified multi-year enterprise contracts from a predictable inbound machine."
  },
  {
    id: "ecommerce",
    category: "D2C Commerce",
    clientType: "Omnichannel Lifestyle & Apparel Brand",
    image: "/images/services/e-commerce-development.png",
    title: "3.4x Blended ROAS & +38% Checkout Velocity",
    icon: ShoppingBag,
    metrics: [
      { label: "Checkout Conversion Rate", value: "+38%" },
      { label: "90-Day Repeat Orders", value: "+26%" },
      { label: "Blended Multi-Channel ROAS", value: "3.4x" }
    ],
    challenge: "Meta ad costs were escalating while an outdated Shopify template suffered high cart abandonment and zero customer retention loops.",
    solution: "Re-engineered modern storefront for sub-second speeds, integrated 1-click checkout, and deployed automated retention WhatsApp flows.",
    transformation: "Transformed from top-of-funnel customer churn into a high-LTV compounding direct-to-consumer brand."
  },
  {
    id: "healthcare",
    category: "Healthcare",
    clientType: "8-Location Clinical Care Group",
    image: "/images/services/whatsapp-automation-systems.png",
    title: "2.6x Organic Bookings with 65% Reduction in Missed Slots",
    icon: Stethoscope,
    metrics: [
      { label: "Monthly Organic Bookings", value: "2.6x" },
      { label: "Appointment No-Show Rate", value: "-65%" },
      { label: "Local Search Visibility", value: "Top 3 Ranks" }
    ],
    challenge: "Fragmented digital presence across clinic locations. Inquiries were handled manually via phone lines with high drop-off and missed appointments.",
    solution: "Dominated local organic search, built an instant self-service patient booking portal, and automated 24h reminder sequences via WhatsApp/SMS.",
    transformation: "Clinic coordinators transitioned from manual telephone firefighting to managing an automated, self-filling appointment book."
  },
  {
    id: "fintech",
    category: "B2B SaaS",
    clientType: "Cross-Border Payments & Treasury SaaS",
    image: "/images/services/ai-data-analytics-business-intelligence.png",
    title: "₹1.8Cr Qualified Pipeline & 2.4x Demo Conversion",
    icon: Landmark,
    metrics: [
      { label: "Attributed Revenue Pipeline", value: "₹1.8Cr" },
      { label: "Demo Booking Velocity", value: "2.4x" },
      { label: "Sales Cycle Compression", value: "-14 Days" }
    ],
    challenge: "Long 45-day sales cycles and fragmented attribution. Marketing could not verify which channels drove institutional deposits.",
    solution: "Implemented closed-loop bank revenue attribution, consultative demo qualification intake, and targeted executive thought leadership.",
    transformation: "Established clear visibility into CAC payback within 30 days and accelerated institutional funding rounds."
  },
  {
    id: "manufacturing",
    category: "Industrial",
    clientType: "Precision Tooling & Global Export Manufacturer",
    image: "/images/services/brand-strategy-positioning.png",
    title: "3.4x Global Buyer RFQs & Modern Export Moat",
    icon: Factory,
    metrics: [
      { label: "Verified International RFQs", value: "3.4x" },
      { label: "Export Market Discovery", value: "14 Countries" },
      { label: "Contract Win Rate", value: "+22%" }
    ],
    challenge: "Outdated brand perception and heavy reliance on physical trade shows for global export discovery.",
    solution: "Engineered an enterprise multilingual digital portal, interactive 3D product specification visualizers, and automated RFQ workflows.",
    transformation: "Modernized brand authority and established an autonomous international buyer acquisition pipeline."
  }
];

export default function CaseStudiesClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "B2B SaaS", "D2C Commerce", "Healthcare", "Industrial"];

  const filteredStudies = selectedCategory === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#0B2545]/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED COMMERCIAL RESULTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
            Real Businesses. Real Problems. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Quantifiable Growth Systems.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/75 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            We don't manufacture vanity metrics or show empty logos. Here is how we dissect real business friction and engineer scalable compounding revenue engines.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20 scale-[1.02]"
                    : "bg-white dark:bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 text-[#0B2545] dark:text-white hover:border-[#0097B2]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 02: CASE STUDIES GRID (Visual & Concise) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {filteredStudies.map((study) => {
            const Icon = study.icon;
            return (
              <Card3DTilt
                key={study.id}
                className="p-6 sm:p-8 bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Modern Case Study Image Banner (PNG) */}
                  <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden mb-6 border border-[#0B2545]/10 dark:border-white/10 bg-slate-900">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white shadow-sm backdrop-blur-sm">
                        Verified Impact
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0097B2] bg-white/90 dark:bg-[#071A30]/90 px-2 py-0.5 rounded backdrop-blur-sm">
                        {study.clientType}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-6 leading-snug">
                    {study.title}
                  </h3>

                  {/* 3 Metric Gauges */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white dark:bg-[#0B2545]/60 border border-[#0B2545]/10 dark:border-white/10 text-center">
                        <div className="text-lg sm:text-2xl font-extrabold font-heading text-[#0097B2] mb-0.5">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-medium leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Solution Visual Chips */}
                  <div className="space-y-3 mb-6 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30">
                      <strong className="text-red-600 dark:text-red-400 block mb-1">Challenge:</strong>
                      <span className="text-[#0B2545]/80 dark:text-[#E6EEF2]/80">{study.challenge}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-teal-50/60 dark:bg-[#0097B2]/10 border border-[#0097B2]/30">
                      <strong className="text-[#0097B2] block mb-1">Growth Architecture:</strong>
                      <span className="text-[#0B2545]/90 dark:text-[#E6EEF2]/90">{study.solution}</span>
                    </div>
                  </div>

                  {/* Long-Term Transformation */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B2545]/40 border border-[#0B2545]/10 dark:border-white/10 flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B2545] dark:text-white">Outcome: </strong>
                      <span className="text-[#0B2545]/75 dark:text-[#E6EEF2]/75">"{study.transformation}"</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-medium">
                    Sector: {study.category}
                  </span>
                  <Link
                    href={`/contact?case=${encodeURIComponent(study.title)}`}
                    className="font-bold text-[#0097B2] hover:text-[#007a91] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Discuss This Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* 03: EXECUTIVE CONSULTATION CALLOUT */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#071A30] text-white p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
            Want to Replicate These Results for Your Company?
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/80 max-w-xl mx-auto mb-8 font-light">
            Schedule an executive growth audit. We'll analyze your current acquisition funnel, calculate CAC leaks, and map your 12-month compounding growth architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#0097B2]/30"
            >
              Start a Growth Conversation
            </Link>
            <Link
              href="/how-we-work"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase border border-white/20 transition-all"
            >
              Explore Our Methodology
            </Link>
          </div>
        </div>

      </section>

    </main>
  );
}