"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  RotateCw,
  Search,
  Activity,
  Layers,
  Wrench,
  TrendingUp,
  Zap,
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "DISCOVER",
    headline: "Understand Before You Act.",
    description: "We explore your business model, customers, market and growth objectives.",
    icon: Search,
    image: "/images/wg01-discover.png",
    focusAreas: [
      "Business Understanding",
      "Customer Research",
      "Market Analysis",
      "Growth Objectives",
    ],
  },
  {
    step: "02",
    name: "DIAGNOSE",
    headline: "Find What's Holding You Back.",
    description: "We identify gaps across marketing, sales, conversions and operations.",
    icon: Activity,
    image: "/images/wg02-diagnose.png",
    focusAreas: [
      "Growth Bottlenecks",
      "Marketing Performance",
      "Conversion Gaps",
      "System Analysis",
    ],
  },
  {
    step: "03",
    name: "STRATEGIZE",
    headline: "Create a Clear Direction.",
    description: "We prioritize opportunities and develop a practical growth roadmap.",
    icon: Compass,
    image: "/images/wg03-strategize.png",
    focusAreas: [
      "Growth Priorities",
      "Channel Strategy",
      "Resource Planning",
      "Execution Roadmap",
    ],
  },
  {
    step: "04",
    name: "BUILD",
    headline: "Turn Strategy Into Action.",
    description: "We implement the right combination of marketing, branding, technology and automation.",
    icon: Wrench,
    image: "/images/wg04-build.png",
    focusAreas: [
      "Marketing Execution",
      "Digital Experiences",
      "Technology Systems",
      "AI & Automation",
    ],
  },
  {
    step: "05",
    name: "OPTIMIZE",
    headline: "Measure. Learn. Improve.",
    description: "We evaluate performance and refine the systems supporting your business.",
    icon: Zap,
    image: "/images/wg05-optimize.png",
    focusAreas: [
      "Performance Tracking",
      "Conversion Improvement",
      "Data Analysis",
      "Process Refinement",
    ],
  },
  {
    step: "06",
    name: "SCALE",
    headline: "Build for What's Next.",
    description: "We strengthen successful processes and identify opportunities for sustainable expansion.",
    icon: TrendingUp,
    image: "/images/wg06-scale.png",
    focusAreas: [
      "Growth Expansion",
      "System Efficiency",
      "Process Scalability",
      "Continuous Development",
    ],
  },
];

const FAQS = [
  {
    q: "01. How is this different from a traditional agency?",
    a: "We connect business strategy, marketing, technology and automation instead of treating them as isolated services.",
  },
  {
    q: "02. Does every business follow the same process?",
    a: "The framework stays consistent. The strategy and execution adapt to each business.",
  },
  {
    q: "03. Can we start with only one stage?",
    a: "Yes. Engagement scope depends on your business needs and objectives.",
  },
  {
    q: "04. How do you measure progress?",
    a: "Through relevant business indicators such as leads, conversions, acquisition costs, performance and operational improvements.",
  },
  {
    q: "05. Do you provide long-term growth partnerships?",
    a: "Yes. We can support ongoing execution, optimization and growth development based on the agreed engagement.",
  },
];

export default function HowWeWorkClient() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* SECTION 01 — HERO WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              THE SM NEXTGEN GROWTH FRAMEWORK
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Strategy · Execution · Continuous Scale
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6 leading-tight">
            Growth Is a Process.{" "}
            <span className="text-[#0097B2]">
              We Make It Work.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            A structured approach to understanding challenges, building solutions and creating sustainable business growth.
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
              href="#stages"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Explore Our Framework
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Business-First Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Connected Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Continuous Improvement</span>
            </div>
          </div>

          {/* Premium 6-Stage Process Carousel Visual Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Iterative Growth Engine
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Six Connected Stages. Zero Gaps.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40">
                Continuous Flywheel
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-left">
              {[
                { n: "01", t: "DISCOVER", d: "Market & Model" },
                { n: "02", t: "DIAGNOSE", d: "Bottlenecks" },
                { n: "03", t: "STRATEGIZE", d: "Growth Roadmap" },
                { n: "04", t: "BUILD", d: "Tech & Marketing" },
                { n: "05", t: "OPTIMIZE", d: "Refine & Scale" },
                { n: "06", t: "SCALE", d: "Expand Footprint" },
              ].map((s) => (
                <div
                  key={s.n}
                  className="p-3 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group"
                >
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] bg-cyan-50 dark:bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-200/60 dark:border-cyan-800/40 block w-max mb-1.5">
                    {s.n}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                    {s.t}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* SECTION 02 — THE SIX-STAGE FRAMEWORK */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              OUR GROWTH METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
              Six Stages. One Connected Growth Journey.
            </h2>
          </div>

          {/* Visual flow strip */}
          <div className="mb-14 p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px] text-xs font-mono font-bold text-[#0B2545] dark:text-white">
              <span className="text-[#0097B2]">DISCOVER</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">DIAGNOSE</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">STRATEGIZE</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">BUILD</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">OPTIMIZE</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">SCALE</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAGES.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0097B2]">
                      STAGE {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — EXPLORE EACH STAGE */}
      <section id="stages" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              FROM UNDERSTANDING TO EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Every Stage Has a Purpose.
            </h2>
          </div>

          {/* Interactive tab selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
            {STAGES.map((s, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                      : "bg-white dark:bg-[#071A30] border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                  }`}
                >
                  <div className={`text-[10px] font-mono font-bold ${isCurrent ? "text-white/80" : "text-[#0097B2]"} mb-0.5`}>
                    STAGE {s.step}
                  </div>
                  <div className="font-bold font-heading text-xs sm:text-sm">
                    {s.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display */}
          <div className="p-8 sm:p-10 bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold text-[#0097B2] block mb-2">
                  STAGE {STAGES[activeStage].step} — {STAGES[activeStage].name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-4">
                  {STAGES[activeStage].headline}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                  {STAGES[activeStage].description}
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Focus Areas:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {STAGES[activeStage].focusAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-[#0B2545] dark:text-[#E6EEF2]">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stage Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-md">
                  <Image
                    src={STAGES[activeStage].image}
                    alt={`SM NextGen ${STAGES[activeStage].name} Stage`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — THE GROWTH LOOP */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            GROWTH DOESN&apos;T STOP AT IMPLEMENTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
            Every Improvement Creates the Next Opportunity.
          </h2>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 inline-block mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold text-[#0B2545] dark:text-white">
              <span className="text-[#0097B2]">Discover</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Diagnose</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Strategize</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Build</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Optimize</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Scale</span>
              <span className="text-slate-400">→</span>
              <span className="text-cyan-500 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" /> Repeat
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            We continuously learn from performance and adapt the next growth priorities as your business evolves.
          </p>
        </div>
      </section>

      {/* SECTION 05 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white">
              Questions About How We Grow
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071A30] overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold font-heading text-sm sm:text-base text-[#0B2545] dark:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#0097B2] ml-4 text-xl">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
            LET&apos;S FIND YOUR NEXT GROWTH OPPORTUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Every Business Has Room to Grow. Let&apos;s Find Yours.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Start with a conversation about your business, challenges and goals.
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
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
