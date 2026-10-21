"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Laptop, ShoppingBag, Stethoscope, Factory, 
  ArrowRight, CheckCircle2
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "b2b-saas",
    sector: "B2B SaaS & Supply Chain",
    clientModel: "Enterprise Logistics Software Platform",
    title: "Engineering a Predictable Inbound Pipeline & Lower Unit CAC",
    icon: Laptop,
    metrics: [
      { label: "Pipeline Velocity", value: "+48%" },
      { label: "Unit CAC Reduction", value: "-26%" },
      { label: "Lead Response Time", value: "< 4 Mins" }
    ],
    challenge: "High LinkedIn & Google search spend brought visits, but manual screening caused slow response times and high prospect drop-off before demo scheduling.",
    solution: "Engineered a Next.js interactive ROI model, automated 24/7 lead qualification via WhatsApp and CRM webhook, and aligned ad creative with commercial intent.",
    outcome: "Built an autonomous inbound qualification engine that shortened sales cycles and increased qualified demo completions."
  },
  {
    id: "d2c-commerce",
    sector: "D2C Commerce",
    clientModel: "Omnichannel Lifestyle & Apparel Brand",
    title: "Profitable Paid Media Scaling & Sub-Second Checkout Velocity",
    icon: ShoppingBag,
    metrics: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Repeat Order Rate", value: "+26%" },
      { label: "Blended Media ROAS", value: "3.4x" }
    ],
    challenge: "Sluggish mobile storefront performance and fragmented retargeting resulted in high cart drop-off rates and rising customer acquisition costs.",
    solution: "Re-engineered modern storefront on Next.js for sub-second page loads, implemented 1-click checkout, and established automated post-purchase WhatsApp drip loops.",
    outcome: "Transformed one-off ad buyers into repeat customers while establishing profitable blended unit economics across Meta and Google ads."
  },
  {
    id: "healthcare",
    sector: "Healthcare & Clinics",
    clientModel: "Multi-Location Clinical Care Group",
    title: "Google Maps 3-Pack Prominence & Automated Appointment Reminders",
    icon: Stethoscope,
    metrics: [
      { label: "Direct Consultations", value: "2.6x" },
      { label: "Appointment Drop-off", value: "-65%" },
      { label: "Google Maps Prominence", value: "Top 3 Ranks" }
    ],
    challenge: "Fragmented digital presence across clinic locations led to lost patient inquiries, high phone hold times, and unconfirmed missed appointments.",
    solution: "Optimized Google Business Profiles and local citations, deployed an online patient booking portal, and automated confirmation reminders via WhatsApp.",
    outcome: "Clinic front-desk teams transitioned from manual call handling to an automated, self-filling consultation calendar."
  }
];

export default function CaseStudiesProof({ onExploreCase }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
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

      </div>
    </section>
  );
}
