"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const DASHBOARD_VIEWS = [
  {
    id: "marketing",
    label: "Marketing Performance",
    icon: TrendingUp,
    title: "Marketing Performance",
    subtitle: "Understand how your marketing channels are performing.",
    src: "/images/SM NextGen Marketing Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Marketing Performance dashboard visual preview displaying ad spend, total leads, conversions, 3.8x ROI, channel share, and campaign comparison",
    highlights: [
      "Understand how your marketing channels are performing",
      "Connect ad spend directly to inbound customer inquiries",
      "Shift budget toward highest-performing customer acquisition channels",
    ],
  },
  {
    id: "leads",
    label: "Lead Pipeline",
    icon: Users,
    title: "Lead Pipeline",
    subtitle: "Track enquiries and understand where opportunities stand.",
    src: "/images/Modern SaaS Lead Management Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Lead Management CRM dashboard visual preview showing total leads, qualification stages, lead source distribution, and recent lead table",
    highlights: [
      "Track enquiries and understand where opportunities stand",
      "Track response velocity and eliminate follow-up delays",
      "Identify high-intent prospects and monitor conversion stages",
    ],
  },
  {
    id: "conversion",
    label: "Conversion Insights",
    icon: Kanban,
    title: "Conversion Insights",
    subtitle: "Identify potential gaps in your customer journey.",
    src: "/images/SM NextGen Sales Pipeline Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Conversion Insights and Sales Pipeline Kanban board visual preview",
    highlights: [
      "Identify potential gaps in your customer journey",
      "Pinpoint landing page, form, and checkout friction points",
      "Measure stage-by-stage conversion velocity and close rates",
    ],
  },
  {
    id: "cac",
    label: "Customer Acquisition Cost",
    icon: BarChart3,
    title: "Customer Acquisition Cost",
    subtitle: "Understand what it takes to acquire a customer.",
    src: "/images/Business Performance Dashboard.png",
    width: 1672,
    height: 941,
    alt: "Customer Acquisition Cost and unit economics dashboard visual preview",
    highlights: [
      "Understand what it takes to acquire a customer across each channel",
      "Evaluate blended and paid CAC across product lines",
      "Protect gross margins before scaling ad spend",
    ],
  },
  {
    id: "roas",
    label: "ROI & ROAS",
    icon: TrendingUp,
    title: "ROI & ROAS",
    subtitle: "Evaluate marketing investment and campaign efficiency.",
    src: "/images/Isometric Performance Optimization Dashboard.png",
    width: 1672,
    height: 941,
    alt: "ROI & ROAS campaign efficiency dashboard visual preview",
    highlights: [
      "Evaluate marketing investment and campaign efficiency",
      "Break-even and target ROAS forecasting per campaign",
      "Track incremental return on advertising spend",
    ],
  },
  {
    id: "revenue",
    label: "Revenue Attribution",
    icon: IndianRupee,
    title: "Revenue Attribution",
    subtitle: "Understand how your acquisition activities contribute to business outcomes.",
    src: "/images/SM NextGen Revenue Analytics Dashboard.png",
    width: 1672,
    height: 941,
    alt: "SM NextGen Revenue & ROI Analytics dashboard visual preview showing total revenue, service category mix, and monthly revenue forecast",
    highlights: [
      "Understand how your acquisition activities contribute to business outcomes",
      "Track Customer Acquisition Cost (CAC) and Lifetime Value (LTV)",
      "Measure true return on ad spend tied directly to deposited revenue",
    ],
  },
];

export default function DashboardsShowcase() {
  const [activeId, setActiveId] = useState("marketing");
  const activeView = DASHBOARD_VIEWS.find((v) => v.id === activeId) || DASHBOARD_VIEWS[0];

  const dashboardFrameRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (dashboardFrameRef.current) {
      gsap.fromTo(
        dashboardFrameRef.current,
        {
          rotateX: 10,
          scale: 0.95,
          opacity: 0.85,
          transformPerspective: 1200,
        },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dashboardFrameRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="growth-intelligence"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] dark:text-cyan-300 text-xs font-subheading font-bold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>MAKE BETTER BUSINESS DECISIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-4">
            Know What's Working. <br />
            <span className="text-[#0097B2]">
              Understand What Needs to Improve.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed mb-2">
            Business growth becomes easier to manage when you can see what is happening across your marketing, customer acquisition and conversion processes.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            We help connect performance information to meaningful business decisions.
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

        {/* Split Showcase Frame with 3D Scroll Reveal */}
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

          {/* Right Framed Dashboard Image (Rises forward in 3D on scroll) */}
          <div style={{ perspective: "1200px" }} className="lg:col-span-8">
            <div
              ref={dashboardFrameRef}
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/90 dark:border-white/10 shadow-lg overflow-hidden will-change-transform"
            >
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

        {/* Closing Statement */}
        <div className="mt-8 text-center">
          <p className="text-sm sm:text-base font-bold font-heading text-[#0B2545] dark:text-white">
            Move beyond activity reports. Focus on the information that helps you make better decisions.
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
            *Illustrative interface previews. Actual client reporting configured with verified live attribution.
          </p>
        </div>
      </div>
    </section>
  );
}
