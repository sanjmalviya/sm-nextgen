"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  ArrowRight, Check, MessageSquare, Phone, ChevronRight,
  ShieldCheck, Sparkles
} from "lucide-react";

const STRATEGIC_PILLARS = [
  {
    id: "strategy",
    num: "01",
    title: "Growth Strategy & Positioning",
    desc: "Market positioning, competitive moats, and offer economics engineered to drive high-margin customer acquisition.",
    icon: Compass,
    services: [
      { name: "Brand Strategy & Positioning", href: "/services/brand-strategy-positioning", desc: "Category leadership and messaging differentiation" },
      { name: "Sales Funnel & Conversion Strategy", href: "/services/sales-funnel-conversion", desc: "Full-funnel mapping and conversion rate architecture" },
      { name: "Financial Consulting & Advisory", href: "/services/financial-consulting-advisory", desc: "Unit economics, gross margin and CAC modeling" }
    ]
  },
  {
    id: "marketing",
    num: "02",
    title: "Marketing & Demand Generation",
    desc: "Targeted customer acquisition through Google Maps 3-Pack local SEO, disciplined performance media, and authority content.",
    icon: TrendingUp,
    services: [
      { name: "Search Engine Optimization (SEO)", href: "/services/search-engine-optimization-seo", desc: "Local 3-Pack prominence and organic commercial keywords" },
      { name: "Performance Advertising", href: "/services/performance-advertising", desc: "Meta, Google Search & YouTube ads with disciplined CAC" },
      { name: "Lead Generation Systems", href: "/services/lead-generation-systems", desc: "Predictable B2B inbound buyer acquisition pipelines" },
      { name: "Content Marketing", href: "/services/content-marketing", desc: "High-trust educational content and category thought leadership" },
      { name: "Email Marketing & Lifecycle Automation", href: "/services/email-marketing-automation", desc: "Customer retention drip loops and lifetime value expansion" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Organic attention capture and brand credibility flywheel" }
    ]
  },
  {
    id: "technology",
    num: "03",
    title: "Conversion & Digital Experience",
    desc: "Sub-second Next.js web applications, custom software portals, and high-velocity conversion funnels engineered for modern businesses.",
    icon: Laptop,
    services: [
      { name: "Website Development", href: "/services/website-development", desc: "Next.js platforms with sub-second LCP speed" },
      { name: "Funnel & Landing Page Development", href: "/services/funnel-landing-page-development", desc: "High-converting single-purpose commercial funnels" },
      { name: "E-Commerce Development", href: "/services/e-commerce-development", desc: "Modern storefronts with frictionless 1-click checkout" },
      { name: "Web App Development", href: "/services/web-app-development", desc: "Scalable client portals, internal dashboards and SaaS" },
      { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "Cross-platform iOS and Android growth apps" },
      { name: "UI/UX & Product Design", href: "/services/ui-ux-product-design", desc: "Frictionless digital user journeys and visual design systems" },
      { name: "Website Maintenance & Support", href: "/services/website-maintenance-support", desc: "Continuous security updates, speed audits and SLA support" }
    ]
  },
  {
    id: "automation",
    num: "04",
    title: "AI & Business Automation Systems",
    desc: "Autonomous conversational AI bots, WhatsApp Cloud API workflows, and CRM pipeline automation that remove manual friction.",
    icon: Bot,
    services: [
      { name: "AI Business Automation Systems", href: "/services/ai-business-automation-systems", desc: "Autonomous operational workflows and task orchestration" },
      { name: "WhatsApp Automation Systems", href: "/services/whatsapp-automation-systems", desc: "Official WhatsApp Cloud API lead capture and routing" },
      { name: "AI Chatbots & Conversational AI", href: "/services/ai-chatbots-conversational-ai", desc: "24/7 lead qualification and customer appointment booking" },
      { name: "AI Marketing Automation", href: "/services/ai-marketing-automation", desc: "Trigger-based lead nurture and lifecycle re-engagement" },
      { name: "AI Lead Generation Systems", href: "/services/ai-lead-generation-systems", desc: "Algorithmic ICP research and intent-based outreach" },
      { name: "Custom AI Tools & Integrations", href: "/services/custom-ai-tools-integrations", desc: "Bespoke internal AI tools and multi-platform APIs" },
      { name: "Automation & Integration", href: "/services/automation-integration", desc: "CRM, ERP, and payment gateway synchronized data flows" }
    ]
  },
  {
    id: "data",
    num: "05",
    title: "Data, Intelligence & Attribution",
    desc: "Closed-loop attribution that connects every marketing rupee and inbound inquiry directly to deposited revenue in your bank account.",
    icon: BarChart3,
    services: [
      { name: "AI Data Analytics & BI", href: "/services/ai-data-analytics-business-intelligence", desc: "Real-time executive dashboards and closed-loop multi-touch tracking" },
      { name: "Content Creation Systems", href: "/services/ai-content-creation-systems", desc: "Data-informed editorial workflows and asset production" }
    ]
  },
  {
    id: "operations",
    num: "06",
    title: "Business Operations & Compliance",
    desc: "Essential corporate compliance, trademark protection, and advisory services that establish institutional credibility for growing companies.",
    icon: Scale,
    services: [
      { name: "Business Compliance Management", href: "/services/business-compliance-management", desc: "Corporate governance and regulatory filings oversight" },
      { name: "Business Registration Services", href: "/services/business-registration-services", desc: "Entity incorporation, private limited, and startup registration" },
      { name: "GST Services & Advisory", href: "/services/gst-services", desc: "GST registration, monthly compliance, and input credit optimization" },
      { name: "Income Tax Services", href: "/services/income-tax-services", desc: "Corporate tax planning, return filing, and financial reporting" },
      { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping", desc: "Cloud bookkeeping, P&L management, and financial reconciliation" },
      { name: "Payroll & Employee Compliance", href: "/services/payroll-employee-compliance", desc: "PF, ESI, payroll structuring, and labour law compliance" },
      { name: "Trademark & Intellectual Property", href: "/services/trademark-intellectual-property", desc: "Brand trademark filing, IP defense, and portfolio protection" }
    ]
  }
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#071A30] dark:to-[#030D1A] border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            Integrated Growth Disciplines
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Strategic Capabilities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
              Delivered as One System.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
            We reject the fragmented agency model where separate vendors pass the buck. Explore the 6 integrated capability pillars we deploy to help ambitious businesses acquire customers, streamline operations, and compound revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
            >
              Start a Strategy Discussion
            </Link>
            <Link
              href="/industries"
              className="px-6 py-3 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-[#0097B2] transition"
            >
              View Industry Blueprints
            </Link>
          </div>
        </div>
      </section>

      {/* 6 Strategic Pillars In-Depth Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-[#071A30]/60 border border-slate-200/80 dark:border-white/10 shadow-xs"
              >
                {/* Pillar Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-white/10 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 flex items-center justify-center text-[#0097B2] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#0097B2]">
                          PILLAR {pillar.num}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Sub-services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pillar.services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="p-5 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/60 dark:border-white/5 hover:border-[#0097B2]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-[#0B2545] dark:text-white font-heading group-hover:text-[#0097B2] dark:group-hover:text-cyan-400 transition-colors mb-1.5 flex items-center justify-between">
                          <span>{service.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#0097B2]" />
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-[#0097B2] dark:text-cyan-400 mt-4 block">
                        Explore Capability →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Done-For-You Partner CTA */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#071A30] to-[#040e1b] text-white border border-[#0097B2]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Need a Connected Engagement?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Let's Map the Right Capability Mix for Your Business.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
              We begin every partnership with an intensive growth diagnostic to identify your true revenue bottlenecks before recommending specific services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              Schedule Consultation
            </Link>
            <a
              href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Team%2C%20I%20would%20like%20to%20discuss%20your%20Growth%20Capabilities."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
