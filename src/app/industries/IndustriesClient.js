"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  ShoppingBag,
  Laptop,
  Stethoscope,
  Hotel,
  Home,
  Briefcase,
  Factory,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "d2c-ecommerce",
    name: "D2C & E-commerce",
    headline: "Build stronger product discovery, conversion and retention journeys.",
    icon: ShoppingBag,
    image: "/images/industries/d2c-ecommerce.png",
    challenges: "Product discovery, product-page clarity, cart abandonment, paid acquisition economics and repeat purchase.",
    capabilities: [
      { name: "Brand Strategy", href: "/services/brand-strategy-positioning" },
      { name: "E-commerce Development", href: "/services/e-commerce-development" },
      { name: "SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Performance Advertising", href: "/services/performance-advertising" },
      { name: "Email Automation", href: "/services/email-marketing-automation" },
      { name: "Analytics", href: "/services/ai-data-analytics-business-intelligence" },
    ],
    ctaText: "Build a Better E-commerce Journey",
  },
  {
    id: "b2b-technology",
    name: "B2B & Technology",
    headline: "Connect positioning, demand generation and longer sales cycles.",
    icon: Laptop,
    image: "/images/industries/b2b-saas-tech.png",
    challenges: "Complex offers, long buying cycles, low-intent enquiries, technical product explanation and sales handoffs.",
    capabilities: [
      { name: "Positioning", href: "/services/brand-strategy-positioning" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Lead Generation", href: "/services/lead-generation-systems" },
      { name: "Web Development", href: "/services/web-app-development" },
      { name: "CRM Workflows", href: "/services/automation-integration" },
      { name: "BI & Analytics", href: "/services/ai-data-analytics-business-intelligence" },
    ],
    ctaText: "Strengthen Your B2B Growth System",
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare & Clinics",
    headline: "Improve local discovery, service communication and appointment journeys.",
    icon: Stethoscope,
    image: "/images/industries/healthcare-clinics.png",
    challenges: "Local discovery, service clarity, appointment enquiries, trust and patient communication.",
    complianceNote: "Do not make medical outcome claims or use patient data without lawful permission.",
    capabilities: [
      { name: "Local SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Content", href: "/services/content-marketing" },
      { name: "WhatsApp Workflows", href: "/services/whatsapp-automation-systems" },
      { name: "Appointment Enquiry Systems", href: "/services/sales-funnel-conversion" },
    ],
    ctaText: "Improve Your Digital Patient Journey",
  },
  {
    id: "hospitality-resorts",
    name: "Hospitality & Resorts",
    headline: "Strengthen visibility, experience presentation and enquiry or booking paths.",
    icon: Hotel,
    image: "/images/industries/hospitality-resorts.png",
    challenges: "Online presentation, seasonal demand, direct enquiry journeys, booking information and reputation communication.",
    capabilities: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Local SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Social Media", href: "/services/social-media-marketing" },
      { name: "Performance Advertising", href: "/services/performance-advertising" },
      { name: "WhatsApp Enquiries", href: "/services/whatsapp-automation-systems" },
      { name: "Analytics", href: "/services/ai-data-analytics-business-intelligence" },
    ],
    ctaText: "Strengthen Your Hospitality Presence",
  },
  {
    id: "home-living",
    name: "Home & Living",
    headline: "Connect product presentation, discovery and purchase enquiries.",
    icon: Home,
    image: "/images/industries/home-living.png",
    challenges: "Product discovery, visual merchandising, catalogue complexity, customization enquiries and purchase confidence.",
    capabilities: [
      { name: "Brand Positioning", href: "/services/brand-strategy-positioning" },
      { name: "E-commerce", href: "/services/e-commerce-development" },
      { name: "Product Content", href: "/services/content-marketing" },
      { name: "SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Lead Generation", href: "/services/lead-generation-systems" },
      { name: "Automation", href: "/services/ai-business-automation-systems" },
    ],
    ctaText: "Create a Better Product Journey",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    headline: "Communicate expertise and create a clearer path to qualified enquiries.",
    icon: Briefcase,
    image: "/images/industries/finance-professional-services.png",
    challenges: "Explaining expertise, earning trust, qualifying enquiries and maintaining follow-up.",
    capabilities: [
      { name: "Positioning", href: "/services/brand-strategy-positioning" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Lead Generation", href: "/services/lead-generation-systems" },
      { name: "CRM Workflows", href: "/services/automation-integration" },
    ],
    ctaText: "Turn Expertise into Clearer Enquiries",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    headline: "Improve product discovery, technical communication and B2B enquiry workflows.",
    icon: Factory,
    image: "/images/industries/manufacturing.png",
    challenges: "Technical catalogue presentation, specification discovery, RFQs, distributor enquiries and long B2B sales cycles.",
    capabilities: [
      { name: "B2B Website", href: "/services/website-development" },
      { name: "SEO", href: "/services/search-engine-optimization-seo" },
      { name: "Content", href: "/services/content-marketing" },
      { name: "Lead Generation", href: "/services/lead-generation-systems" },
      { name: "CRM", href: "/services/automation-integration" },
      { name: "BI", href: "/services/ai-data-analytics-business-intelligence" },
    ],
    ctaText: "Build a Stronger B2B Enquiry System",
  },
];

const MODEL_STEPS = [
  { label: "Customer", desc: "Who you serve and what they value" },
  { label: "Offer", desc: "How your products or services are packaged" },
  { label: "Buying Journey", desc: "How customers discover, evaluate and choose" },
  { label: "Sales Process", desc: "How inquiries move to closed sales" },
  { label: "Operations", desc: "How work is delivered reliably and efficiently" },
  { label: "Measurement", desc: "How performance is tracked and improved" },
];

export default function IndustriesClient() {
  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              INDUSTRY-SPECIFIC GROWTH SOLUTIONS
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              8 Sectors · Practical Models
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Different Industries.{" "}
            <span className="text-[#0097B2]">
              Different Growth Challenges.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Your customers, sales cycle and operating model shape how your business grows. We connect the right capabilities around your industry&apos;s needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Discuss Your Industry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#industry-list"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Explore Industries
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Tailored Sales Cycles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Regulatory &amp; Compliance Aware</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>End-to-End Execution</span>
            </div>
          </div>

          {/* Premium Industry Sectors Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Sector Specialization
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Engineered for Specific Customer Journeys
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                8 Verticals
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              {[
                { n: "D2C & E-Commerce", i: ShoppingBag, id: "d2c-ecommerce" },
                { n: "B2B & SaaS Tech", i: Laptop, id: "b2b-technology" },
                { n: "Healthcare & Clinics", i: Stethoscope, id: "healthcare-clinics" },
                { n: "Hospitality & Resorts", i: Hotel, id: "hospitality-resorts" },
                { n: "Home & Living", i: Home, id: "home-living" },
                { n: "Professional Services", i: Briefcase, id: "professional-services" },
                { n: "Manufacturing & B2B", i: Factory, id: "manufacturing" },
                { n: "Education & EdTech", i: Layers, id: "education" },
              ].map((s) => {
                const Icon = s.i;
                return (
                  <a
                    key={s.n}
                    href={`#${s.id}`}
                    className="p-3 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition block group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 group-hover:bg-[#0097B2] text-[#0097B2] group-hover:text-white flex items-center justify-center mb-2 transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition leading-tight">
                      {s.n}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. INTRO OVERVIEW CARDS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="p-5 rounded-2xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2] transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {ind.headline}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DETAILED INDUSTRY SECTIONS */}
      <section id="industry-list" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 scroll-mt-24 shadow-sm"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white">
                        {ind.name}
                      </h2>
                    </div>

                    <p className="text-base text-[#0097B2] font-semibold mb-4">
                      {ind.headline}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Common Challenges:
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                          {ind.challenges}
                        </p>
                      </div>

                      {ind.complianceNote && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                          {ind.complianceNote}
                        </p>
                      )}
                    </div>

                    <div className="mb-6 pt-4 border-t border-slate-200/80 dark:border-white/10">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                        Relevant Capabilities:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.capabilities.map((cap) => (
                          <Link
                            key={cap.href}
                            href={cap.href}
                            className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white font-medium hover:border-[#0097B2] transition flex items-center gap-1.5"
                          >
                            <span>{cap.name}</span>
                            <ArrowRight className="w-3 h-3 text-[#0097B2]" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
                    >
                      <span>{ind.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-900 shadow-sm">
                      <Image
                        src={ind.image}
                        alt={`${ind.name} Solutions`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SHARED SECTION: START WITH YOUR BUSINESS MODEL */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              FOUNDATIONAL ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
              Start With Your Business Model.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Before jumping into tactics or channels, we look at the fundamentals that govern how your business operates and grows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {MODEL_STEPS.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-base font-bold text-[#0097B2] font-heading block mb-1">
                  {s.label}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 font-light">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center sm:text-left">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Discuss Your Industry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
