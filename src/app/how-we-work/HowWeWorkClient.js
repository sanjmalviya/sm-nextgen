"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, Compass, Search, Wrench, Gauge, 
  TrendingUp, Award, CheckCircle2, ArrowRight, ShieldCheck, 
  HelpCircle, MessageSquare, ChevronRight 
} from "lucide-react";
import Card3DTilt from "../components/3d/Card3DTilt";

const METHODOLOGY_STAGES = [
  {
    step: "01",
    name: "Discover",
    tagline: "Market Realities & Commercial Landscape",
    icon: Search,
    duration: "Week 1",
    image: "/images/services/brand-strategy-positioning.png",
    description: "We immerse ourselves in your customer data, sales conversations, competitor offerings, and ideal buyer personas to uncover unexploited market white space.",
    deliverables: [
      "Ideal Customer Profile (ICP) & Persona Mapping",
      "Competitive Moat & Messaging Differentiation",
      "Historical Acquisition Channel Audit",
      "Executive Growth Objectives Alignment"
    ]
  },
  {
    step: "02",
    name: "Diagnose",
    tagline: "Systemic Revenue Bottleneck Identification",
    icon: Compass,
    duration: "Week 2",
    image: "/images/services/ai-data-analytics-business-intelligence.png",
    description: "We audit your complete funnel from top-of-funnel ad spend down to closed sales and repeat orders, identifying where conversion friction and money leaks exist.",
    deliverables: [
      "Full-Funnel CAC vs LTV Ratio Calculation",
      "Website Speed & Core Web Vitals Performance",
      "Checkout, Lead Form & CRM Drop-Off Mapping",
      "Vendor & Software Tool Bloat Assessment"
    ]
  },
  {
    step: "03",
    name: "Strategize",
    tagline: "The 12-Month Compounding Growth Architecture",
    icon: Compass,
    duration: "Week 3",
    image: "/images/services/digital-marketing.png",
    description: "We architect a high-conviction growth blueprint that aligns performance demand channels, web technology, AI automation, and unit economics.",
    deliverables: [
      "Custom 12-Month Compounding Growth Blueprint",
      "Offer Restructuring & High-Margin Pricing Models",
      "Multi-Channel Demand Generation Blueprint",
      "AI & Automation Workflow Specifications"
    ]
  },
  {
    step: "04",
    name: "Build",
    tagline: "Engineering Assets, Funnels & Automations",
    icon: Wrench,
    duration: "Weeks 4–8",
    image: "/images/services/web-app-development.png",
    description: "Our engineering and creative teams build production-grade web applications, dynamic conversion funnels, and autonomous lead routing bots.",
    deliverables: [
      "High-Performance Next.js Web Platforms",
      "Frictionless Landing Pages & CRO Architecture",
      "Autonomous 24/7 AI Qualification & WhatsApp Routing",
      "End-to-End Closed-Loop Multi-Touch Attribution"
    ]
  },
  {
    step: "05",
    name: "Optimize",
    tagline: "Iterative CRO & Acquisition Velocity",
    icon: Gauge,
    duration: "Ongoing",
    image: "/images/services/sales-funnel-conversion.png",
    description: "We run disciplined multi-variant experiments on landing pages, ad angles, and sales follow-up cadences to drive down CAC and lift conversions.",
    deliverables: [
      "Continuous Landing Page & Checkout Split Testing",
      "Ad Spend Efficiency Tuning & Bid Strategy Optimization",
      "Lead Response Time Compression (<5 minutes)",
      "Automated Retention & Repeat Purchase Sequences"
    ]
  },
  {
    step: "06",
    name: "Scale",
    tagline: "Compounding Market Dominance & Operations",
    icon: TrendingUp,
    duration: "Compounding",
    image: "/images/services/ai-business-automation-systems.png",
    deliverables: [
      "Aggressive Multi-Market Channel Expansion",
      "Autonomous AI Agent Deployment for Support & Sales",
      "Predictive Customer Cohort Modeling",
      "Executive Growth Dashboards & Board Reporting"
    ],
    description: "With proven unit economics and a frictionless funnel, we aggressively expand into new markets and automate back-office operations for high EBITDA."
  }
];

export default function HowWeWorkClient() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Team, I want to learn more about the 6-stage How We Grow methodology for my business.";
    window.open(`https://wa.me/919179577717?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const faqs = [
    {
      q: "How is this 6-stage methodology different from typical agency retainers?",
      a: "Typical agencies jump straight into running ads or redesigning a website without understanding your P&L, unit economics, or sales pipeline. Our 6-stage methodology diagnoses your true bottleneck first, ensuring that when we build and optimize, every rupee spent directly accelerates revenue."
    },
    {
      q: "How quickly do we start seeing measurable progress?",
      a: "During the first 2-3 weeks (Discover, Diagnose, Strategize), you receive complete visibility into your growth bottlenecks and a 12-month blueprint. During the Build stage (Weeks 4-8), conversion funnels and automations go live. Initial conversion rate lifts and lead flow improvements are typically observed within 30 to 45 days."
    },
    {
      q: "Who executes the work at each stage?",
      a: "All strategic, architectural, and engineering work is led directly by SM NextGen principal strategists and senior engineers. We never outsource to junior freelancers or disconnect strategy from execution."
    },
    {
      q: "Can we engage for just the Discover & Diagnose stages?",
      a: "Yes. Our Growth Diagnostic & Audit is available as an independent 2-week engagement. It provides you with an objective, data-backed assessment of your company's growth levers before committing to larger builds."
    }
  ];

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION WITH 3D WEBGL VISUAL */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#0B2545]/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>THE 6-STAGE GROWTH SYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
              How We Grow: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                From Problems to Compounding Value.
              </span>
            </h1>

            <p className="text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 max-w-xl leading-relaxed mb-8">
              A disciplined, data-driven operating methodology to diagnose revenue friction, engineer scalable digital infrastructure, and compound enterprise market share.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Full-Funnel Systemic Diagnosis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Production-Grade Code & Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Measurable Revenue Accountability</span>
              </div>
            </div>
          </div>

          {/* Right Executive Methodology Visual */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <Card3DTilt className="p-7 bg-white dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl w-full">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-5 bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 flex items-center justify-center">
                <img
                  src="/images/services/brand-strategy-positioning.png"
                  alt="6-Stage Growth Flywheel"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] via-[#071A30]/30 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Closed-Loop Flywheel
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                  Compounding Growth System
                </div>
              </div>

              {/* 6 Stage Mini Flow Indicator */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-[#0B2545] dark:text-white">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">01</span> Discover
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">02</span> Diagnose
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">03</span> Strategize
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">04</span> Build
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">05</span> Optimize
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="text-[#0097B2] font-mono block text-[10px]">06</span> Scale
                </div>
              </div>
            </Card3DTilt>
          </div>

        </div>
      </section>

      {/* 02: 6-STAGE METHODOLOGY INTERACTIVE EXPLORER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-4">
            The 6-Stage Growth Flywheel
          </h2>
          <p className="text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
            Click through each phase to inspect how our team systematically transforms your acquisition and revenue engine.
          </p>
        </div>

        {/* 6 Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {METHODOLOGY_STAGES.map((s, idx) => {
            const isCurrent = activeStage === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#0097B2] text-white border-[#0097B2] shadow-lg shadow-[#0097B2]/20 scale-[1.02]"
                    : "bg-[#F8FAFC] dark:bg-[#071A30]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                }`}
              >
                <div className={`text-[11px] font-mono font-bold ${isCurrent ? "text-white/80" : "text-[#0097B2]"} mb-1`}>
                  STAGE {s.step}
                </div>
                <div className="font-bold font-heading text-sm">
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <Card3DTilt className="p-8 sm:p-10 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl mb-20 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col (6 cols) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold font-mono text-[#0097B2]">
                  {METHODOLOGY_STAGES[activeStage].step}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0097B2]/10 text-[#0097B2]">
                  {METHODOLOGY_STAGES[activeStage].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                {METHODOLOGY_STAGES[activeStage].name}: {METHODOLOGY_STAGES[activeStage].tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body leading-relaxed mb-6">
                {METHODOLOGY_STAGES[activeStage].description}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-md shadow-[#0097B2]/20"
                >
                  <span>Initiate Stage 0{activeStage + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-5 py-3 rounded-xl bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-white text-xs font-semibold border border-[#0B2545]/15 dark:border-white/15 hover:border-[#0097B2] cursor-pointer"
                >
                  Discuss Details
                </button>
              </div>
            </div>

            {/* Right Col (6 cols): Stage Visual + Deliverables */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Visual Preview Image */}
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-[#0B2545]/10 dark:border-white/10 bg-[#0B2545] shadow-inner group">
                <img
                  src={METHODOLOGY_STAGES[activeStage].image}
                  alt={`${METHODOLOGY_STAGES[activeStage].name} Architecture`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] via-[#071A30]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                    STAGE {METHODOLOGY_STAGES[activeStage].step} • BLUEPRINT VISUAL
                  </span>
                </div>
              </div>

              {/* Deliverables Card */}
              <div className="bg-white dark:bg-[#0B2545]/60 p-5 sm:p-6 rounded-xl border border-[#0B2545]/10 dark:border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-3">
                  Core Stage Deliverables:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {METHODOLOGY_STAGES[activeStage].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#0B2545] dark:text-[#E6EEF2] leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Card3DTilt>

        {/* 03: METHODOLOGY FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white">
              Methodology FAQ
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#0B2545]/10 dark:border-white/10 bg-[#F8FAFC] dark:bg-[#071A30]/60 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold font-heading text-sm sm:text-base text-[#0B2545] dark:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#0097B2] ml-4 text-xl">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 leading-relaxed border-t border-[#0B2545]/5 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 04: BOTTOM CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2545] to-[#071A30] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4">
            Ready to Diagnose Your Growth System?
          </h2>
          <p className="text-base text-[#E6EEF2]/80 leading-relaxed mb-8">
            Book an initial consultation to discover the primary bottleneck holding back your customer acquisition and revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0097B2]/30"
            >
              Start With a Growth Diagnostic
            </Link>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              WhatsApp Principal Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}