"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Compass,
  TrendingUp,
  Laptop,
  Bot,
  BarChart3,
  Scale,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Phone,
  MessageSquare,
} from "lucide-react";

const PILLARS = [
  {
    id: "strategy",
    num: "01",
    title: "Growth Strategy & Positioning",
    desc: "Build a stronger market position and a clear direction for growth.",
    icon: Compass,
    ctaText: "Explore Growth Strategy",
    services: [
      {
        name: "Brand Strategy & Positioning",
        href: "/services/brand-strategy-positioning",
        desc: "Clarify what your business stands for, who it serves and why customers should choose it.",
      },
      {
        name: "Sales Funnel & Conversion Strategy",
        href: "/services/sales-funnel-conversion",
        desc: "Understand where prospects drop off and create a clearer journey from first interaction to decision.",
      },
      {
        name: "Financial Consulting & Advisory",
        href: "/services/financial-consulting-advisory",
        desc: "Review business economics, costs and growth assumptions to support more informed planning.",
      },
    ],
  },
  {
    id: "marketing",
    num: "02",
    title: "Marketing & Demand Generation",
    desc: "Attract the right audience and create meaningful customer opportunities.",
    icon: TrendingUp,
    ctaText: "Explore Marketing Solutions",
    services: [
      {
        name: "Search Engine Optimization (SEO)",
        href: "/services/search-engine-optimization-seo",
        desc: "Improve search visibility through useful content, sound site structure and relevant search optimization.",
      },
      {
        name: "Performance Advertising",
        href: "/services/performance-advertising",
        desc: "Plan, launch and improve paid campaigns around audience fit, offer, conversion and measurement.",
      },
      {
        name: "Lead Generation Systems",
        href: "/services/lead-generation-systems",
        desc: "Connect the offer, acquisition channel, lead capture and follow-up process.",
      },
      {
        name: "Content Marketing",
        href: "/services/content-marketing",
        desc: "Turn customer questions, business expertise and product value into useful content across the right channels.",
      },
      {
        name: "Email Marketing & Lifecycle Automation",
        href: "/services/email-marketing-automation",
        desc: "Build relevant email journeys for onboarding, follow-up, retention and re-engagement.",
      },
      {
        name: "Social Media Marketing",
        href: "/services/social-media-marketing",
        desc: "Connect content, brand communication and audience engagement to the role social media should play in your growth.",
      },
    ],
  },
  {
    id: "digital",
    num: "03",
    title: "Conversion & Digital Experience",
    desc: "Build digital experiences that turn customer interest into action.",
    icon: Laptop,
    ctaText: "Explore Digital Solutions",
    services: [
      {
        name: "Website Development",
        href: "/services/website-development",
        desc: "Create a clear, responsive digital experience that helps visitors understand your offer and take the next step.",
      },
      {
        name: "Funnel & Landing Page Development",
        href: "/services/funnel-landing-page-development",
        desc: "Build focused landing experiences that connect the audience, offer, message and conversion action.",
      },
      {
        name: "E-Commerce Development",
        href: "/services/e-commerce-development",
        desc: "Build a product discovery and checkout experience that helps customers browse, evaluate and purchase.",
      },
      {
        name: "Web App Development",
        href: "/services/web-app-development",
        desc: "Design and develop web applications, portals and internal tools around clearly defined workflows.",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
        desc: "Plan and develop mobile applications that support a defined customer or operational workflow.",
      },
      {
        name: "UI/UX & Product Design",
        href: "/services/ui-ux-product-design",
        desc: "Shape clear user journeys and interfaces around customer needs and product goals.",
      },
      {
        name: "Website Maintenance & Support",
        href: "/services/website-maintenance-support",
        desc: "Support website updates, issue resolution and ongoing improvements through an agreed maintenance scope.",
      },
    ],
  },
  {
    id: "automation",
    num: "04",
    title: "AI & Business Automation",
    desc: "Connect workflows, automate repetitive tasks and work smarter.",
    icon: Bot,
    ctaText: "Explore AI & Automation",
    services: [
      {
        name: "AI Business Automation Systems",
        href: "/services/ai-business-automation-systems",
        desc: "Identify repeatable tasks and connect people, tools and AI where automation is practical.",
      },
      {
        name: "WhatsApp Automation Systems",
        href: "/services/whatsapp-automation-systems",
        desc: "Organize enquiry responses, information sharing and follow-ups through approved WhatsApp Business workflows.",
      },
      {
        name: "AI Chatbots & Conversational AI",
        href: "/services/ai-chatbots-conversational-ai",
        desc: "Create conversational experiences grounded in approved business information and designed around clear tasks.",
      },
      {
        name: "AI Marketing Automation",
        href: "/services/ai-marketing-automation",
        desc: "Use defined triggers and approved AI assistance to make campaign and lifecycle workflows more relevant.",
      },
      {
        name: "AI Lead Generation Systems",
        href: "/services/ai-lead-generation-systems",
        desc: "Use automation and AI assistance to support prospect research, qualification and sales preparation.",
      },
      {
        name: "Custom AI Tools & Integrations",
        href: "/services/custom-ai-tools-integrations",
        desc: "Design focused AI-assisted tools and integrations around real workflows, approved data and measurable utility.",
      },
      {
        name: "Automation & System Integration",
        href: "/services/automation-integration",
        desc: "Connect approved applications and automate handoffs between the systems your team already uses.",
      },
    ],
  },
  {
    id: "data",
    num: "05",
    title: "Data & Intelligence",
    desc: "Turn business information into actionable insights.",
    icon: BarChart3,
    ctaText: "Explore Data Solutions",
    services: [
      {
        name: "AI Data Analytics & Business Intelligence",
        href: "/services/ai-data-analytics-business-intelligence",
        desc: "Bring relevant performance information together so teams can understand activity, trends and opportunities.",
      },
      {
        name: "AI Content Creation Systems",
        href: "/services/ai-content-creation-systems",
        desc: "Combine editorial direction, reusable templates and AI assistance while keeping human review at the centre.",
      },
    ],
  },
  {
    id: "operations",
    num: "06",
    title: "Business Operations & Compliance",
    desc: "Build stronger operational foundations and manage essential business requirements through qualified coordination.",
    icon: Scale,
    ctaText: "Explore Business Support",
    services: [
      {
        name: "Business Compliance Management",
        href: "/services/business-compliance-management",
        desc: "Understand recurring compliance obligations and coordinate the right professional support for your business.",
      },
      {
        name: "Business Registration Services",
        href: "/services/business-registration-services",
        desc: "Understand common business-structure options and coordinate the documentation process with qualified professionals.",
      },
      {
        name: "GST Services & Advisory",
        href: "/services/gst-services",
        desc: "Coordinate GST registration and recurring compliance support through qualified tax professionals.",
      },
      {
        name: "Income Tax Services",
        href: "/services/income-tax-services",
        desc: "Coordinate tax documentation and filing support through appropriately qualified professionals.",
      },
      {
        name: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
        desc: "Organize financial records and reporting workflows so business owners can review performance with better clarity.",
      },
      {
        name: "Payroll & Employee Compliance",
        href: "/services/payroll-employee-compliance",
        desc: "Organize payroll inputs, employee records and compliance coordination through an agreed process.",
      },
      {
        name: "Trademark & Intellectual Property",
        href: "/services/trademark-intellectual-property",
        desc: "Organize trademark and intellectual-property application support with qualified professionals.",
      },
    ],
  },
];

export default function ServicesClient() {
  const [selectedPillar, setSelectedPillar] = useState("all");

  const filteredPillars = selectedPillar === "all"
    ? PILLARS
    : PILLARS.filter((p) => p.id === selectedPillar);

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* SECTION 01 — HERO WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              OUR GROWTH CAPABILITIES
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              32 Modular Services · 6 Pillars
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Everything Your Business Needs to{" "}
            <span className="text-[#0097B2]">
              Move Forward.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            From growth strategy to marketing, technology and intelligent systems — the right capabilities, connected around your business.
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
              href="#pillars"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Explore Our Capabilities
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Integrated Full-Stack Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Revenue &amp; Performance Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Modern Engineering &amp; AI</span>
            </div>
          </div>

          {/* Premium Capabilities Grid Visual Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Capability Architecture
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Six Core Growth Disciplines
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                Unified Delivery
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              {[
                { n: "01", t: "Growth Strategy", s: "Positioning, Economics & Funnels", id: "strategy" },
                { n: "02", t: "Marketing & Demand", s: "SEO, Performance Ads & Content", id: "marketing" },
                { n: "03", t: "Digital Experience", s: "Web, Mobile Apps & E-Commerce", id: "digital" },
                { n: "04", t: "AI & Automation", s: "WhatsApp Workflows & Systems", id: "ai" },
                { n: "05", t: "Data & Intelligence", s: "Attribution, BI & Analytics", id: "data" },
                { n: "06", t: "Business Operations", s: "Compliance & Corporate Support", id: "operations" },
              ].map((p) => (
                <a
                  key={p.n}
                  href={`#${p.id}`}
                  className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group block"
                >
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] block mb-1">
                    Pillar {p.n}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                    {p.t}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {p.s}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* SECTION 02 — SIX CAPABILITY PILLARS */}
      <section id="pillars" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              ONE PARTNER. CONNECTED CAPABILITIES.
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Six Capabilities. One Growth Direction.
            </h2>
          </div>

          {/* Pillar Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button
              onClick={() => setSelectedPillar("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedPillar === "all"
                  ? "bg-[#0097B2] text-white"
                  : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-[#0097B2]"
              }`}
            >
              All Capabilities (6)
            </button>
            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedPillar === p.id
                    ? "bg-[#0097B2] text-white"
                    : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-[#0097B2]"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Pillars and Child Services */}
          <div className="space-y-16">
            {filteredPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80 dark:border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0097B2] block">
                          PILLAR {pillar.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#0B2545] dark:text-white">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md font-light">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Child Services Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pillar.services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="group p-5 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2] transition flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                              {svc.name}
                            </h4>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0097B2] group-hover:translate-x-0.5 transition" />
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            {svc.desc}
                          </p>
                        </div>
                        <span className="text-[11px] font-bold text-[#0097B2] mt-4 flex items-center gap-1">
                          <span>View Capability Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — OUR APPROACH */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              BUILT AROUND YOUR BUSINESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
              Not Every Business Needs Everything.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We identify what matters most and bring together the right capabilities for your goals.
            </p>
          </div>

          {/* Process Strip */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 inline-block mb-8">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono font-bold text-[#0B2545] dark:text-white">
              <span className="text-[#0097B2]">Understand</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Prioritize</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Implement</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#0097B2]">Improve</span>
            </div>
          </div>

          <div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] uppercase tracking-wider hover:underline"
            >
              <span>Explore How We Grow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW OUR CAPABILITIES CONNECT */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              BEYOND INDIVIDUAL SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Better Together. Built for Growth.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Strategy", role: "defines the direction." },
              { label: "Marketing", role: "creates demand." },
              { label: "Digital Experience", role: "converts opportunities." },
              { label: "AI & Automation", role: "improves efficiency." },
              { label: "Data", role: "guides decisions." },
              { label: "Business Operations", role: "strengthens foundations." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-base font-bold text-[#0097B2] font-heading block mb-1">
                  {item.label}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 font-light">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
            LET&apos;S BUILD YOUR NEXT GROWTH SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            The Right Solutions Start With the Right Conversation.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Tell us where your business stands and where you want to go.
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
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
