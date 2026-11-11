"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Laptop, ShoppingBag, Stethoscope, 
  ArrowRight
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "b2b-saas",
    sector: "B2B SaaS & Supply Chain",
    clientModel: "Enterprise Logistics Platform",
    title: "Predictable Inbound Pipeline & Lower CAC",
    icon: Laptop,
    metrics: [
      { label: "Pipeline Velocity", value: "+48%" },
      { label: "CAC Reduction", value: "-26%" },
      { label: "Lead Response", value: "< 4 Mins" }
    ],
    challenge: "Manual screening delayed follow-ups and dropped high-intent demo requests.",
    solution: "Built an interactive ROI funnel with automated WhatsApp & CRM qualification.",
    outcome: "Shortened sales cycles and lifted qualified demo completions."
  },
  {
    id: "d2c-commerce",
    sector: "D2C Commerce",
    clientModel: "Lifestyle & Apparel Brand",
    title: "Profitable Ad Scaling & Fast Checkout",
    icon: ShoppingBag,
    metrics: [
      { label: "Checkout Conv.", value: "+38%" },
      { label: "Repeat Orders", value: "+26%" },
      { label: "Blended ROAS", value: "3.4x" }
    ],
    challenge: "Slow mobile pages and fragmented retargeting drove cart abandonment.",
    solution: "Rebuilt on sub-second Next.js with 1-click checkout and WhatsApp repeat loops.",
    outcome: "Turned one-time ad buyers into repeat customers with profitable unit economics."
  },
  {
    id: "healthcare",
    sector: "Healthcare & Clinics",
    clientModel: "Multi-Location Clinic Group",
    title: "Google 3-Pack Visibility & Auto Booking",
    icon: Stethoscope,
    metrics: [
      { label: "Consultations", value: "2.6x" },
      { label: "No-Shows", value: "-65%" },
      { label: "Maps Rank", value: "Top 3" }
    ],
    challenge: "Low local visibility and manual phone booking led to missed inquiries.",
    solution: "Optimized Google Business Profiles with online scheduling and WhatsApp reminders.",
    outcome: "Created a steady, self-filling appointment calendar across locations."
  }
];

export default function CaseStudiesProof({ onExploreCase }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              Selected Work & Case Blueprints
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight">
              Documented Impact. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
                Engineered for Real Businesses.
              </span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] dark:text-cyan-400">
                      {study.sector}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0B2545] dark:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-5">
                    Context: {study.clientModel}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-white dark:bg-black/20 border border-slate-200/60 dark:border-white/5 mb-5 text-center">
                    {study.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-sm sm:text-base font-extrabold text-[#0B2545] dark:text-white font-heading">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Solution Narrative */}
                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Challenge: </strong>
                      {study.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Solution: </strong>
                      {study.solution}
                    </div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0097B2] dark:text-cyan-400 hover:underline"
                >
                  <span>Explore Architecture Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Human Storytelling Section: Real Businesses & Daily Execution */}
        <div className="mt-14 pt-12 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-subheading font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
              Real Businesses · Real Ambition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-tight">
              Built for Teams Who Want Clarity Over Chaos.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
              <div className="rounded-2xl overflow-hidden aspect-[3/2] bg-slate-100">
                <Image
                  src="/images/Indian Entrepreneurs in Action.png"
                  alt="Indian business leaders across D2C, healthcare, manufacturing, technology, and hospitality enterprises"
                  width={1536}
                  height={1024}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 px-1">
                <h4 className="text-base font-bold font-subheading text-[#0B2545] dark:text-white mb-1">
                  Tailored for Ambitious SMBs Across Industries
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Systems designed for how D2C brands, clinics, B2B SaaS, manufacturing, and hospitality teams grow.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
              <div className="rounded-2xl overflow-hidden aspect-[3/2] bg-slate-100">
                <Image
                  src="/images/Focused Work in a Modern Office.png"
                  alt="Focused strategic execution at a modern workspace with laptop and growth plan"
                  width={1536}
                  height={1024}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-4 px-1">
                <h4 className="text-base font-bold font-subheading text-[#0B2545] dark:text-white mb-1">
                  Structured Execution, Less Noise
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Replace fragmented vendors with one clear roadmap, automated lead flow, and visible weekly progress.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
