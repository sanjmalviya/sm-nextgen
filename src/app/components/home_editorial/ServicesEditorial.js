"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  ArrowRight, Check
} from "lucide-react";

const CAPABILITY_PILLARS = [
  {
    num: "01",
    title: "Growth Strategy",
    desc: "Market positioning, offer design, and unit economics before scaling spend.",
    examples: ["Category Positioning", "Offer Architecture", "Competitor Analysis"],
    icon: Compass,
    href: "/services/brand-strategy-positioning"
  },
  {
    num: "02",
    title: "Marketing & Demand",
    desc: "Targeted demand via Local SEO, Google Maps, and high-intent paid media.",
    examples: ["Google Maps SEO", "Paid Search & Meta", "B2B Lead Generation"],
    icon: TrendingUp,
    href: "/services/search-engine-optimization-seo"
  },
  {
    num: "03",
    title: "Web & Conversion",
    desc: "Sub-second Next.js websites, landing funnels, and e-commerce builds.",
    examples: ["Fast Web Platforms", "CRO Landing Funnels", "Web & Mobile Apps"],
    icon: Laptop,
    href: "/services/website-development"
  },
  {
    num: "04",
    title: "AI & Automation",
    desc: "24/7 qualification bots, WhatsApp workflows, and instant CRM routing.",
    examples: ["WhatsApp CRM Flows", "AI Lead Bots", "Automated Intake"],
    icon: Bot,
    href: "/services/ai-business-automation-systems"
  },
  {
    num: "05",
    title: "Data & Analytics",
    desc: "Closed-loop tracking tying ad spend directly to qualified revenue.",
    examples: ["Revenue Attribution", "CAC & LTV Tracking", "Executive Dashboards"],
    icon: BarChart3,
    href: "/services/ai-data-analytics-business-intelligence"
  },
  {
    num: "06",
    title: "Business Operations",
    desc: "Registrations, compliance, GST advisory, and trademark protection.",
    examples: ["Entity Registration", "GST & Compliance", "Trademark Protection"],
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

        {/* Growth Philosophy Visual Hub Feature */}
        <div className="mb-12 rounded-3xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="max-w-xs sm:max-w-sm mx-auto rounded-2xl bg-white p-3 border border-slate-100 shadow-xs">
              <Image
                src="/images/Isometric Teal Growth Strategy Hub.png"
                alt="Isometric hub illustrating how business strategy, marketing, software engineering, AI automation, and data analytics converge around measurable growth"
                width={1122}
                height={1402}
                quality={85}
                sizes="(max-width: 1024px) 80vw, 360px"
                className="w-full h-auto block"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] dark:text-cyan-300 text-[11px] font-subheading font-bold uppercase tracking-wider">
              Connected Growth Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-tight">
              Why Disciplines Multiply When Built Together.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Great marketing stalls on a slow site; fast websites underperform without clear strategy and follow-up. Aligning every discipline compounds results.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                { label: "Strategy Before Spend", text: "Positioning and unit economics validated early." },
                { label: "Conversion Engineering", text: "Sub-second web architecture built to convert." },
                { label: "AI & CRM Leverage", text: "Automated lead qualification and fast follow-up." },
                { label: "Unified Analytics", text: "Campaigns tracked to pipeline and revenue." }
              ].map((item) => (
                <div key={item.label} className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-slate-200/70 dark:border-white/10">
                  <div className="text-xs font-subheading font-bold text-[#0B2545] dark:text-white mb-1">{item.label}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-light leading-snug">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
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
