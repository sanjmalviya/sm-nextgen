"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  HelpCircle, MessageSquare, Compass, Zap, Layers, Cpu, Award 
} from "lucide-react";
import Card3DTilt from "../components/3d/Card3DTilt";

const ENGAGEMENTS = [
  {
    id: "audit",
    tier: "01",
    name: "Growth Diagnostic & Audit",
    bestFor: "Companies needing clarity on CAC, funnel leaks, and conversion bottlenecks.",
    duration: "2-Week Intensive Sprint",
    structure: "Fixed Investment",
    highlight: false,
    description: "A comprehensive systemic review of your customer acquisition, unit economics, tech stack, and positioning before deploying capital.",
    deliverables: [
      "Full-Funnel CAC & LTV Unit Economics Audit",
      "Website & Tech Stack Performance Review (Core Web Vitals)",
      "Conversion Drop-Off & Revenue Leak Mapping",
      "Competitive Moat & Messaging Analysis",
      "Prioritized 12-Month Compounding Growth Roadmap"
    ],
    ctaText: "Request Growth Audit",
    ctaLink: "/contact?engagement=Growth+Audit"
  },
  {
    id: "sprint",
    tier: "02",
    name: "Growth Project Sprint",
    bestFor: "Companies requiring a specific mission-critical system engineered fast.",
    duration: "4 to 8 Weeks",
    structure: "Milestone-Based",
    highlight: false,
    description: "Focused execution sprint to build, re-platform, or optimize a high-impact growth component.",
    deliverables: [
      "Custom Enterprise Next.js Web Platform or Web App",
      "Full-Funnel CRO & Checkout Overhaul",
      "Automated AI Lead Qualification & CRM Sync",
      "Multi-Touch Revenue Attribution Setup",
      "Comprehensive Handover & Operations Playbook"
    ],
    ctaText: "Initiate Project Sprint",
    ctaLink: "/contact?engagement=Growth+Sprint"
  },
  {
    id: "partnership",
    tier: "03",
    name: "Comprehensive Growth Partnership",
    bestFor: "Ambitious businesses seeking an integrated strategic growth co-pilot.",
    duration: "Annual Strategic Engagement (Min. 6 Months)",
    structure: "Retained Partnership + Performance Alignment",
    highlight: true,
    badge: "MOST POPULAR FOR SCALING",
    description: "We act as your dedicated growth and technology arm. Strategy, marketing, technology, AI automation, and CRO under one roof.",
    deliverables: [
      "Everything in Audit & Project Sprints included",
      "Multi-Channel Demand Generation (Meta, Google, SEO, ABM)",
      "Continuous Landing Page & Conversion Velocity Testing",
      "Autonomous 24/7 AI Lead Nurturing & WhatsApp Routing",
      "Dedicated Principal Growth Architect & Engineering Lead",
      "Bi-Weekly Executive Strategy & P&L Reviews"
    ],
    ctaText: "Apply for Growth Partnership",
    ctaLink: "/contact?engagement=Growth+Partnership"
  },
  {
    id: "systems",
    tier: "04",
    name: "Enterprise Growth Systems",
    bestFor: "Multi-product businesses, fast-scaling D2C brands, or mature SaaS companies.",
    duration: "12-Month Scalable Retainer",
    structure: "Custom Retainer Architecture",
    highlight: false,
    description: "Deep enterprise integration engineering proprietary AI agents, headless commerce, data intelligence dashboards, and global market expansion.",
    deliverables: [
      "Multi-Market Inbound & Demand Architecture",
      "Custom Headless Commerce / Microservice Infrastructure",
      "Predictive Customer Cohort Modeling & LTV Maximization",
      "Internal Business Operations & Back-Office Automation",
      "Priority SLA & 24/7 Technical Operations Support"
    ],
    ctaText: "Explore Enterprise Systems",
    ctaLink: "/contact?engagement=Enterprise+Systems"
  },
  {
    id: "advisory",
    tier: "05",
    name: "Custom Executive Advisory",
    bestFor: "Founders, board members, and PE-backed portfolio companies.",
    duration: "Flexible Advisory Terms",
    structure: "Bespoke Governance",
    highlight: false,
    description: "High-level strategic counsel on market expansion, technology modernization, M&A tech due diligence, and capital allocation.",
    deliverables: [
      "Board-Level Growth & Unit Economics Governance",
      "Vendor & Agency Consolidation Advisory",
      "Technical Due Diligence & Architecture Audits",
      "Fractional Chief Growth Officer (CGO) Representation"
    ],
    ctaText: "Inquire for Executive Advisory",
    ctaLink: "/contact?engagement=Executive+Advisory"
  }
];

export default function PricingClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsApp = (engagementName) => {
    const msg = `Hi SM NextGen Team, I would like to discuss the "${engagementName}" engagement model for my company.`;
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const faqs = [
    {
      q: "Why does SM NextGen not sell fixed cheap marketing packages?",
      a: "Cheap standardized packages treat every business as a commodity. A B2B enterprise software company needs a completely different acquisition and technical engine than a direct-to-consumer brand. We build customized, integrated growth systems engineered specifically around your unit economics and commercial objectives."
    },
    {
      q: "How does the Comprehensive Growth Partnership work?",
      a: "In a Growth Partnership, we integrate directly with your executive leadership as your strategic growth co-pilot. We handle strategy, high-speed software development, performance demand generation, automated AI workflows, and analytics. We align our deliverables with your qualified revenue pipeline, CAC reduction, and gross margin expansion."
    },
    {
      q: "Can we start with a Growth Diagnostic & Audit first?",
      a: "Yes. Many of our enterprise partners begin with our 2-week Growth Diagnostic. It allows both teams to evaluate data, audit unit economics, and inspect technical infrastructure before committing to a larger multi-quarter transformation."
    },
    {
      q: "Do you work under Non-Disclosure Agreements (NDAs)?",
      a: "Always. All executive consultations, financial data audits, customer acquisition metrics, and custom software codebases are protected under mutual NDAs."
    }
  ];

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center border-b border-[#0B2545]/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE ENGAGEMENT MODELS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
            Aligned Incentives. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Compounding Business Outcomes.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/75 max-w-2xl mx-auto leading-relaxed mb-10">
            We don't sell billable hours or cookie-cutter templates. We architect high-conviction growth partnerships designed around your unit economics and enterprise valuation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Full-Stack Strategy + Tech Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Zero Junior Account Hand-offs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Strict Mutual NDA Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02: 5 ENGAGEMENT MODELS GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-4">
            Five Strategic Ways to Partner
          </h2>
          <p className="text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
            Select the model that aligns with your current company stage, technical complexity, and growth objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {ENGAGEMENTS.slice(0, 3).map((plan) => (
            <Card3DTilt
              key={plan.id}
              className={`p-8 rounded-2xl flex flex-col justify-between relative ${
                plan.highlight
                  ? "bg-white dark:bg-[#071A30] border-2 border-[#0097B2] shadow-2xl scale-[1.02]"
                  : "bg-[#F8FAFC] dark:bg-[#0B2545]/60 border border-[#0B2545]/10 dark:border-white/10"
              }`}
            >
              <div>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0097B2] text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0097B2]">
                    MODEL {plan.tier}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0097B2]/10 text-[#0097B2]">
                    {plan.structure}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-xs text-[#0097B2] font-semibold mb-4">
                  Timeline: {plan.duration}
                </div>

                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-8 pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545] dark:text-white">
                    Deliverables Include:
                  </div>
                  {plan.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-lg shadow-[#0097B2]/25"
                      : "bg-white dark:bg-[#071A30] hover:bg-slate-100 dark:hover:bg-[#0B2545] text-[#0B2545] dark:text-white border border-[#0B2545]/15 dark:border-white/15 hover:border-[#0097B2]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleWhatsApp(plan.name)}
                  className="w-full mt-2.5 text-center text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] transition-colors cursor-pointer"
                >
                  Discuss via WhatsApp →
                </button>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* 2 Wide Models: Enterprise & Advisory */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {ENGAGEMENTS.slice(3, 5).map((plan) => (
            <Card3DTilt
              key={plan.id}
              className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B2545]/60 border border-[#0B2545]/10 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0097B2]">
                    MODEL {plan.tier}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0097B2]/10 text-[#0097B2]">
                    {plan.structure}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-xs text-[#0097B2] font-semibold mb-4">
                  Timeline: {plan.duration}
                </div>

                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-8 pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545] dark:text-white">
                    Deliverables Include:
                  </div>
                  {plan.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all bg-white dark:bg-[#071A30] hover:bg-slate-100 dark:hover:bg-[#0B2545] text-[#0B2545] dark:text-white border border-[#0B2545]/15 dark:border-white/15 hover:border-[#0097B2]"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleWhatsApp(plan.name)}
                  className="w-full mt-2.5 text-center text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] transition-colors cursor-pointer"
                >
                  Discuss via WhatsApp →
                </button>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* 03: FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>TRANSPARENCY & CLARITY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white">
              Partnership FAQ
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

      {/* 04: EXECUTIVE INTAKE BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2545] to-[#071A30] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4">
            Unsure Which Engagement Fits Your Stage?
          </h2>
          <p className="text-base text-[#E6EEF2]/80 leading-relaxed mb-8">
            Schedule a 30-minute growth diagnostic session with an SM NextGen principal. We'll evaluate your unit economics and identify the right starting point.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0097B2]/30"
            >
              Schedule Principal Consultation
            </Link>
            <button
              onClick={() => handleWhatsApp("General Partnership Inquiry")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              Chat on WhatsApp Directly
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}