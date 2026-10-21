"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  ArrowRight, Check
} from "lucide-react";

const CAPABILITY_PILLARS = [
  {
    num: "01",
    title: "Growth Strategy",
    desc: "We analyze unit economics, market positioning, and buyer intent to engineer high-margin commercial offerings before spending capital.",
    examples: ["Category Positioning", "Offer Architecture", "Competitor Gap Analysis"],
    icon: Compass,
    href: "/services/brand-strategy-positioning"
  },
  {
    num: "02",
    title: "Marketing & Demand",
    desc: "Targeted customer acquisition through Google Maps 3-Pack local SEO, disciplined performance media, and authority content.",
    examples: ["Google Maps Local SEO", "Meta & Google Paid Search", "B2B Lead Generation"],
    icon: TrendingUp,
    href: "/services/search-engine-optimization-seo"
  },
  {
    num: "03",
    title: "Conversion & Digital Experience",
    desc: "Production-grade Next.js web applications, headless commerce platforms, and CRO funnels engineered for frictionless conversion.",
    examples: ["Sub-Second Web Platforms", "Frictionless CRO Funnels", "Custom Web & Mobile Apps"],
    icon: Laptop,
    href: "/services/website-development"
  },
  {
    num: "04",
    title: "AI & Business Automation",
    desc: "Deploy autonomous conversational bots and WhatsApp workflows to qualify leads, book calls, and remove manual repetitive tasks.",
    examples: ["WhatsApp CRM Integration", "24/7 AI Qualification Bots", "Automated Intake Pipelines"],
    icon: Bot,
    href: "/services/ai-business-automation-systems"
  },
  {
    num: "05",
    title: "Data & Intelligence",
    desc: "End-to-end attribution tracking that connects every marketing rupee and inquiry to actual deposited revenue in your bank account.",
    examples: ["Closed-Loop Attribution", "CAC-to-LTV Unit Economics", "Executive BI Dashboards"],
    icon: BarChart3,
    href: "/services/ai-data-analytics-business-intelligence"
  },
  {
    num: "06",
    title: "Business Operations Support",
    desc: "Essential compliance governance, trademark protection, and financial advisory that protect and structure growing enterprises.",
    examples: ["Entity Registration", "GST & Financial Advisory", "Trademark & IP Protection"],
    icon: Scale,
    href: "/services/business-compliance-management"
  }
];

export default function ServicesEditorial() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              Strategic Capability Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight">
              Specialized Disciplines. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
                Delivered as One System.
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider shrink-0"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Capability Pillars Grid (3x2) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 flex items-center justify-center text-[#0097B2] dark:text-cyan-300 group-hover:bg-[#0097B2] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2.5 group-hover:text-[#0097B2] dark:group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-5">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/5 mb-6">
                    {pillar.examples.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#0097B2] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0097B2] dark:text-cyan-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Pillar</span>
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
