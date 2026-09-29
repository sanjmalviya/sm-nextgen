"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building, Network, BarChart3, Target, 
  Cpu, Handshake, ArrowRight, CheckCircle2 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const PILLARS = [
  {
    icon: Building,
    title: "Business-First Thinking",
    tagline: "Strategy before tactics",
    desc: "We dissect your unit economics, gross margins, CAC payback periods, and competitive moat before touching ad platforms or writing code."
  },
  {
    icon: Network,
    title: "Connected Systems",
    tagline: "Zero operational silos",
    desc: "We eliminate the friction between marketing, web technology, AI automation, and your CRM pipeline. Every asset is engineered to feed the next."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Truth",
    tagline: "Honest attribution, zero fluff",
    desc: "We discard vanity metrics like impressions and clicks. We track closed-loop revenue, cash collections, and return on capital deployed."
  },
  {
    icon: Target,
    title: "Outcome-Focused Execution",
    tagline: "Aligned on commercial results",
    desc: "We don't deliver arbitrary tasks. Our performance is measured by qualified pipeline expansion, higher conversion velocity, and net revenue growth."
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Leverage",
    tagline: "Enterprise code & AI agents",
    desc: "We build on production-grade Next.js frameworks, integrate custom API microservices, and deploy autonomous AI agents to scale operations efficiently."
  },
  {
    icon: Handshake,
    title: "Long-Term Alignment",
    tagline: "High-conviction partners",
    desc: "We work alongside founders and executive teams as strategic co-pilots, aligning incentives to compound enterprise equity over multi-year horizons."
  }
];

export default function WhyGrowthPartner({ onStartConversation }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5" />
            <span>THE STRATEGIC ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Not Another Vendor. A Growth Partner.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Traditional agencies sell billable hours and disconnected deliverables. We align incentives around business outcomes, revenue velocity, and long-term enterprise value.
          </p>
        </div>

        {/* 6 Core Pillar Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card3DTilt
                key={pillar.title}
                className="p-7 sm:p-8 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/25 flex items-center justify-center text-[#0097B2] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                    {pillar.tagline}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#0097B2]">
                  <span>Core Standard</span>
                  <span>0{idx + 1}</span>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Executive Conversion Action */}
        <div className="text-center">
          <button
            onClick={onStartConversation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#0097B2]/25 cursor-pointer"
          >
            <span>Explore Growth Partnership Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
