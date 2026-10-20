"use client";
import React from "react";
import Link from "next/link";
import { 
  Share2, Search, TrendingUp, Laptop, Bot, 
  MessageSquare, Mail, Printer, ArrowRight, 
  Sparkles, CheckCircle2, ArrowUpRight
} from "lucide-react";

const SERVICES_LIST = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    benefit: "Brand Authority & Audience Capture",
    description: "High-trust executive content, reels, and community engagement engineered to build organic category presence.",
    icon: Share2,
    href: "/services/social-media-marketing",
    tag: "Attention Engine"
  },
  {
    id: "seo-local",
    title: "SEO & Local Google Maps SEO",
    benefit: "Google 3-Pack Category Dominance",
    description: "Local search dominance, review velocity systems, and technical on-page SEO that rank your business in the top 3.",
    icon: Search,
    href: "/services/search-engine-optimization-seo",
    tag: "High-Intent Inbound"
  },
  {
    id: "meta-google-ads",
    title: "Meta Ads & Google Ads",
    benefit: "Predictable Paid Customer Acquisition",
    description: "Disciplined media buying on Meta, Google Search, and YouTube focused on CAC optimization and profitable unit economics.",
    icon: TrendingUp,
    href: "/services/performance-advertising",
    tag: "Performance Media"
  },
  {
    id: "web-app-dev",
    title: "Website & Application Development",
    benefit: "Sub-Second Next.js Conversion Platforms",
    description: "Production-grade Next.js websites, custom client portals, and headless commerce platforms built for conversion.",
    icon: Laptop,
    href: "/services/website-development",
    tag: "Software Engineering"
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflow Optimization",
    benefit: "Operational Scale Without Headcount",
    description: "Autonomous lead qualification, intelligent document workflows, and operational automations that save hundreds of hours.",
    icon: Bot,
    href: "/services/ai-business-automation-systems",
    tag: "Operational AI"
  },
  {
    id: "whatsapp-crm",
    title: "WhatsApp Marketing & CRM Integration",
    benefit: "Instant Lead Routing (< 4 Minute Touch)",
    description: "Official WhatsApp Cloud API integrations, conversational sales funnels, and real-time CRM pipeline synchronization.",
    icon: MessageSquare,
    href: "/services/whatsapp-automation-systems",
    tag: "Conversational Sales"
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Lifecycle Flows",
    benefit: "High-LTV Customer Retention & Drip Loops",
    description: "Automated onboarding sequences, re-engagement drip flows, and segmented customer lifetime value optimization.",
    icon: Mail,
    href: "/services/email-marketing-automation",
    tag: "Retention Engine"
  },
  {
    id: "offline-branding",
    title: "Offline Branding, Printing & Collateral",
    benefit: "Tactile Brand Presence & Physical Trust",
    description: "High-grade commercial printing, physical marketing collateral, retail packaging, and executive brand identity systems.",
    icon: Printer,
    href: "/services/brand-strategy-positioning",
    tag: "Tangible Presence"
  }
];

export default function ServicesEditorial() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTEGRATED CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight">
              Specialized Disciplines. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                Delivered as One System.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light max-w-md leading-relaxed">
            Every capability is engineered to integrate seamlessly with the others. No handoff gaps between who writes the code, buys the media, or automates the sales pipeline.
          </p>
        </div>

        {/* Refined 8-Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_LIST.map((srv) => {
            const Icon = srv.icon;
            return (
              <Link
                key={srv.id}
                href={srv.href}
                className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Cyan Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#0097B2] transition-colors" />

                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center group-hover:bg-[#0097B2] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2 group-hover:text-[#0097B2] dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#0097B2] dark:text-cyan-400 mb-2.5">
                    {srv.benefit}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-[#0097B2] dark:group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Deep Link */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#040e1b] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-xs">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-[#0097B2]" />
            <span>Looking for a complete audit of your current channels and funnels?</span>
          </div>
          <Link
            href="/services"
            className="font-bold text-[#0097B2] hover:text-[#007a91] dark:hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <span>View All 32 Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
