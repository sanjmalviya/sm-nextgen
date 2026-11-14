"use client";

import React from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Compass,
  Layers,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Check,
} from "lucide-react";

const ENGAGEMENTS = [
  {
    id: "audit",
    num: "01",
    name: "Growth Audit (Sprint)",
    bestFor: "Businesses that need clarity before committing to execution.",
    desc: "Review the current business, identify growth bottlenecks and prioritize practical next steps.",
    mayInclude: [
      "Discovery and context gathering",
      "Current-state review",
      "Selected channel or funnel analysis",
      "Opportunity map",
      "Prioritized recommendations and discussion",
    ],
    outcome: "A clearer view of what to address first.",
    ctaText: "Discuss a Growth Audit",
    ctaLink: "/contact?engagement=Growth+Audit",
    highlight: false,
  },
  {
    id: "core",
    num: "02",
    name: "Core Growth System",
    bestFor: "Businesses that need connected support across selected growth priorities.",
    desc: "Bring relevant strategy, marketing and digital capabilities together around an agreed business objective.",
    mayInclude: [
      "Growth strategy definition",
      "Selected marketing channels",
      "Website or funnel improvements",
      "Lead process setup",
      "Reporting and performance tracking",
    ],
    outcome: "A coordinated growth plan and execution rhythm.",
    ctaText: "Explore a Core Growth System",
    ctaLink: "/contact?engagement=Core+Growth+System",
    highlight: true,
  },
  {
    id: "full-stack",
    num: "03",
    name: "Full-Stack Growth Partnership",
    bestFor: "Businesses with multiple connected priorities and a need for ongoing strategic and execution support.",
    desc: "Work with SM NextGen across agreed strategy, marketing, technology, automation and measurement priorities.",
    mayInclude: [
      "Ongoing growth planning",
      "Multi-channel demand generation",
      "Digital experience engineering",
      "Systems & tool integration",
      "Continuous reporting and optimization",
    ],
    outcome: "A connected approach across selected business growth functions.",
    ctaText: "Discuss a Growth Partnership",
    ctaLink: "/contact?engagement=Full+Stack+Partnership",
    highlight: false,
  },
];

const PROCESS_STEPS = [
  { step: "1", title: "Understand the business", desc: "We learn about your business model, customer base and growth objectives." },
  { step: "2", title: "Define the priority", desc: "Identify the critical bottlenecks that need attention first." },
  { step: "3", title: "Recommend the engagement", desc: "Propose the right engagement structure based on your needs." },
  { step: "4", title: "Agree scope and responsibilities", desc: "Confirm deliverables, timelines, assumptions and commitments." },
  { step: "5", title: "Begin the work", desc: "Execute with coordinated focus, accountability and regular communication." },
];

export default function PricingClient() {
  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              GROWTH ENGAGEMENTS &amp; PRICING
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Transparent · Structured · ROI Focused
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            The Right Engagement for the{" "}
            <span className="text-[#0097B2]">
              Work Ahead.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Every business has a different starting point. Choose a focused project, a strategic partnership or a connected system based on what needs to change.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#engagements"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              View Engagement Models
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>No Long-Term Lock-In</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Direct Principal Accountability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Clear Deliverables &amp; Milestones</span>
            </div>
          </div>

          {/* Premium Engagement Paths Visual Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Engagement Framework
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Three Transparent Models
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                Transparent Structure
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#0097B2] block mb-1">
                  Tier 01 · 2–3 Week Sprint
                </span>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  Growth Audit (Sprint)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Bottleneck discovery, conversion diagnostic &amp; prioritized roadmap.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0097B2]/5 border border-[#0097B2]/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#0097B2]">
                    Tier 02 · Recommended
                  </span>
                  <span className="text-[9px] font-mono font-bold bg-[#0097B2] text-white px-1.5 py-0.5 rounded">
                    Popular
                  </span>
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  Core Growth System
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                  Strategy, marketing execution, web optimization &amp; pipeline setup.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#0097B2] block mb-1">
                  Tier 03 · Enterprise Retainer
                </span>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  Full-Stack Growth Partnership
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Dedicated engineering, creative, performance &amp; AI automation team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. ENGAGEMENT MODELS */}
      <section id="engagements" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {ENGAGEMENTS.map((eng) => (
              <div
                key={eng.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all ${
                  eng.highlight
                    ? "bg-[#071A30] text-white border-2 border-[#0097B2] shadow-xl relative"
                    : "bg-slate-50 dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border border-slate-200/80 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0097B2]">
                      ENGAGEMENT {eng.num}
                    </span>
                    {eng.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0097B2] text-white">
                        Connected Focus
                      </span>
                    )}
                  </div>

                  <h2 className={`text-2xl font-bold font-heading mb-3 ${eng.highlight ? "text-white" : "text-[#0B2545] dark:text-white"}`}>
                    {eng.name}
                  </h2>

                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                      Best For:
                    </span>
                    <p className={`text-xs font-medium ${eng.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>
                      {eng.bestFor}
                    </p>
                  </div>

                  <p className={`text-sm font-light leading-relaxed mb-6 ${eng.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>
                    {eng.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                      May Include:
                    </span>
                    <ul className="space-y-2">
                      {eng.mayInclude.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                          <span className={eng.highlight ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl mb-6 ${eng.highlight ? "bg-white/5 border border-white/10" : "bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10"}`}>
                    <span className="text-[11px] font-mono font-bold text-[#0097B2] block mb-1">
                      Outcome:
                    </span>
                    <span className={`text-xs font-medium ${eng.highlight ? "text-white" : "text-[#0B2545] dark:text-white"}`}>
                      {eng.outcome}
                    </span>
                  </div>
                </div>

                <Link
                  href={eng.ctaLink}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition ${
                    eng.highlight
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md"
                      : "bg-[#0B2545] dark:bg-white text-white dark:text-[#0B2545] hover:bg-[#0097B2] dark:hover:bg-[#0097B2] dark:hover:text-white"
                  }`}
                >
                  <span>{eng.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING TRANSPARENCY SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            PRICING TRANSPARENCY
          </span>
          <blockquote className="text-xl sm:text-2xl font-heading font-medium text-[#0B2545] dark:text-white leading-relaxed mb-6">
            &ldquo;Investment depends on scope, complexity, platforms, integrations, delivery responsibilities and the level of ongoing support required. After understanding your requirements, we&apos;ll outline the recommended scope, deliverables, assumptions and investment.&rdquo;
          </blockquote>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            We tailor every engagement to your actual commercial reality. No hidden fees, no invented package minimums.
          </p>
        </div>
      </section>

      {/* 4. ENGAGEMENT PROCESS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              HOW WE INITIATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Our Engagement Process.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-2xl font-mono font-bold text-[#0097B2] block mb-2">
                  0{step.step}
                </span>
                <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Not Sure Which Engagement Fits? Let&apos;s Talk.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Let&apos;s understand your business, identify opportunities and explore the right path forward.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
