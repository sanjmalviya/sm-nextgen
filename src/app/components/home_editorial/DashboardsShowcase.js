"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  Kanban,
  IndianRupee,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Eye,
} from "lucide-react";

const DASHBOARD_VIEWS = [
  {
    id: "marketing",
    label: "Marketing Performance",
    icon: TrendingUp,
    title: "Campaign Reach, Leads & ROI",
    subtitle: "Clear channel attribution across Ads, Organic Search, Social & WhatsApp.",
    src: "/images/SM NextGen Marketing Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Marketing Performance dashboard visual preview displaying ad spend, total leads, conversions, 3.8x ROI, channel share, and campaign comparison",
    highlights: [
      "Cost per lead vs. qualified conversions",
      "Side-by-side paid, organic & social comparison",
      "Quickly shift budget toward winning campaigns",
    ],
  },
  {
    id: "leads",
    label: "Lead Management",
    icon: Users,
    title: "Centralized Lead Intake & Qualification",
    subtitle: "Track every inquiry cleanly without speed-to-lead drop-off.",
    src: "/images/Modern SaaS Lead Management Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Lead Management CRM dashboard visual preview showing total leads, qualification stages, lead source distribution, and recent lead table",
    highlights: [
      "Monitor progression from raw lead to qualified buyer",
      "Spot channels delivering high-intent prospects",
      "Full visibility into recent inquiries and status",
    ],
  },
  {
    id: "pipeline",
    label: "Sales Pipeline",
    icon: Kanban,
    title: "Stage-by-Stage Deal Velocity",
    subtitle: "Complete sales visibility from first response through closed revenue.",
    src: "/images/SM NextGen Sales Pipeline Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Sales Pipeline Kanban board visual preview across New Leads, Contacted, Qualified, Proposal, and Converted stages",
    highlights: [
      "Spot stalled proposals with stage deal values",
      "Consistent handoffs from marketing to sales",
      "Measure close rates from qualified to won",
    ],
  },
  {
    id: "revenue",
    label: "Revenue Analytics",
    icon: IndianRupee,
    title: "Revenue Mix & Growth Forecasting",
    subtitle: "Connect service lines, average deal value, and revenue trends.",
    src: "/images/SM NextGen Revenue Analytics Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Revenue Analytics dashboard visual preview showing total revenue, 20.4% growth, service category mix, and monthly revenue forecast",
    highlights: [
      "Revenue share across marketing, web tech & CRM",
      "Track deal size and monthly growth momentum",
      "Project revenue trajectory from active pipeline",
    ],
  },
  {
    id: "overview",
    label: "Growth Tracking KPIs",
    icon: BarChart3,
    title: "Executive KPI Snapshot",
    subtitle: "Modular scorecards summarizing reach, clicks, conversion & revenue.",
    src: "/images/Modern Teal Marketing Dashboard UI.png",
    width: 1536,
    height: 1024,
    alt: "Modular SM NextGen marketing and growth analytics widgets preview displaying leads generated, conversion rate, 3.8x ROI, and channel trends",
    highlights: [
      "Fast weekly sparklines built for founders & leads",
      "Paid ads, social, SEO, web & WhatsApp views",
      "Marketing metrics tied to revenue outcomes",
    ],
  },
];

export default function DashboardsShowcase() {
  const [activeId, setActiveId] = useState("marketing");
  const activeView = DASHBOARD_VIEWS.find((v) => v.id === activeId) || DASHBOARD_VIEWS[0];

  return (
    <section
      id="growth-intelligence"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] dark:text-cyan-300 text-xs font-subheading font-bold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Clarity Across Every Metric</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-4">
            Connected Reporting for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
              Marketing, Sales &amp; Revenue.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Sample visual views showing how we unite marketing, leads, pipeline, and revenue in one place.
          </p>
        </div>

        {/* Interactive View Selector Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10"
          role="tablist"
          aria-label="Reporting interface previews"
        >
          {DASHBOARD_VIEWS.map((view) => {
            const Icon = view.icon;
            const isSelected = view.id === activeId;
            return (
              <button
                key={view.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(view.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-subheading font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#0B2545] dark:bg-[#0097B2] text-white border-[#0B2545] dark:border-[#0097B2] shadow-md"
                    : "bg-[#F8FAFC] dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-white/10 hover:border-[#0097B2]/50 hover:text-[#0097B2]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-300 dark:text-white" : "text-[#0097B2]"}`} />
                <span>{view.label}</span>
              </button>
            );
          })}
        </div>

        {/* Split Showcase Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#F8FAFC] dark:bg-[#071A30] border border-slate-200/90 dark:border-white/10 p-5 sm:p-8 shadow-sm">
          {/* Left Narrative Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
              Static Visual Interface Preview
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white leading-snug mb-2">
                {activeView.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {activeView.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-white/10">
              {activeView.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/growth-os"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
              >
                <span>Try Live Growth OS Software</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Framed Dashboard Image */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden">
              <div className="px-4 py-2.5 bg-slate-100/80 dark:bg-white/5 border-b border-slate-200/70 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-medium">
                    SM NextGen · {activeView.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#0097B2] font-bold">Sample UI View</span>
              </div>

              <div className="relative w-full bg-white">
                <Image
                  src={activeView.src}
                  alt={activeView.alt}
                  width={activeView.width}
                  height={activeView.height}
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
