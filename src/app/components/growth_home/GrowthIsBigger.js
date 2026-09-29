"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, Laptop, Bot, BarChart3, ArrowRight, 
  Check, X, Zap, RefreshCw, Cpu
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const SYSTEM_PILLARS = [
  {
    icon: Megaphone,
    title: "Marketing",
    role: "Generates Buyer Demand",
    desc: "Brings high-intent customers to you through precision Google & Meta ads, organic search SEO, and high-trust content.",
    color: "#0097B2",
    image: "/images/services/digital-marketing.png"
  },
  {
    icon: Laptop,
    title: "Technology",
    role: "Converts Traffic into Revenue",
    desc: "Builds fast web platforms, frictionless sales funnels, and checkout systems that convert visitors into paying clients.",
    color: "#0B2545",
    image: "/images/services/website-development.png"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    role: "Speeds Up Sales & Operations",
    desc: "Sets up instant WhatsApp replies, smart lead routing to your sales team, and automated customer follow-ups.",
    color: "#0097B2",
    image: "/images/services/ai-business-automation-systems.png"
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    role: "Clear Revenue Insights",
    desc: "Clear dashboards showing exactly which channels drive genuine sales and profit, giving you confidence to scale.",
    color: "#0B2545",
    image: "/images/services/ai-data-analytics-business-intelligence.png"
  },
];

export default function GrowthIsBigger({ onExploreFramework }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>THE STRATEGIC SHIFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Growth Is Bigger Than Marketing.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Marketing brings the attention, but fast websites, smart automation, and great customer experience turn that attention into lasting revenue.
          </p>
        </div>

        {/* 4 Pillars Unified Grid with Clean PNG Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SYSTEM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card3DTilt
                key={pillar.title}
                className="p-5 sm:p-6 flex flex-col justify-between h-full bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 overflow-hidden group"
              >
                <div>
                  {/* Clean Visual Image Banner */}
                  <div className="relative h-40 w-full rounded-xl overflow-hidden mb-5 border border-[#0B2545]/10 dark:border-white/10 bg-slate-100 dark:bg-black/30">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 dark:brightness-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                      <div className="w-8 h-8 rounded-lg bg-[#0097B2] text-white flex items-center justify-center text-xs shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                    {pillar.role}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#0097B2]">
                  <span>Connected Component</span>
                  <span>0{idx + 1}</span>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Comparative Contrast Box: Siloed Agency vs SM NextGen Growth System */}
        <div className="rounded-2xl bg-white dark:bg-[#030d18] border border-[#0B2545]/10 dark:border-white/10 p-6 sm:p-10 shadow-lg overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
              The Fundamental Difference in Execution
            </h3>
            <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
              Why piecemeal freelancers and vanity marketing agencies fail to deliver compounding enterprise value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left: Traditional Agency Approach */}
            <div className="p-6 rounded-xl bg-red-50/50 dark:bg-red-950/10 border border-red-200/50 dark:border-red-900/20">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-heading text-base mb-4">
                <X className="w-5 h-5 shrink-0" />
                <span>The Traditional Agency Trap</span>
              </div>
              <ul className="space-y-3 text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Sells isolated retainers (SEO, Social, Ads) without understanding the core business model.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Celebrates vanity metrics (impressions, clicks, reach) while cash flow remains stagnant.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Cannot fix your broken funnel, slow website, CRM bottlenecks, or disconnected checkout.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Zero accountability for actual closed sales, customer retention, or EBITDA.</span>
                </li>
              </ul>
            </div>

            {/* Right: SM NextGen Growth Partner Model */}
            <div className="p-6 rounded-xl bg-teal-50/60 dark:bg-[#0097B2]/10 border border-[#0097B2]/30">
              <div className="flex items-center gap-2 text-[#0097B2] font-bold font-heading text-base mb-4">
                <Check className="w-5 h-5 shrink-0" />
                <span>The SM NextGen Growth Partner Model</span>
              </div>
              <ul className="space-y-3 text-sm text-[#0B2545]/90 dark:text-[#E6EEF2]/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] mt-2 shrink-0" />
                  <span><strong>Holistic Business System:</strong> Strategy, marketing, code, AI, and analytics working in unison.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] mt-2 shrink-0" />
                  <span><strong>Tied to Commercial Outcomes:</strong> Focused on CAC reduction, conversion velocity, and net revenue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] mt-2 shrink-0" />
                  <span><strong>Full-Stack Technical Capabilities:</strong> We write production code, integrate APIs, and automate workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] mt-2 shrink-0" />
                  <span><strong>Long-Term Strategic Partner:</strong> We align incentives to compound your company's equity value over years.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#0B2545]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm font-medium text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
              Stop hiring 5 disconnected vendors. Get one integrated business growth partner.
            </p>
            <button
              onClick={onExploreFramework}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer"
            >
              <span>Explore Our 5-Stage System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
