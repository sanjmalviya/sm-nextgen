"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Zap, Cpu, ArrowRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function FourGrowthVectors({ onSelectVector }) {
  const vectors = [
    {
      id: "positioning",
      num: "01",
      title: "Market Positioning & Pricing Power",
      tagline: "Escape the Commodity Trap",
      icon: Compass,
      metric: "+40%",
      metricLabel: "Gross Margin Expansion",
      description: "Carving out distinct category authority so your business never competes purely on price. We engineer narrative dominance and institutional market perception.",
      deliverables: ["Category Creation Strategy", "Executive Narrative Architecture", "Premium Brand Identity Systems"]
    },
    {
      id: "acquisition",
      num: "02",
      title: "Algorithmic Demand Infrastructure",
      tagline: "Predictable, Scalable Inflow",
      icon: Target,
      metric: "4.8x",
      metricLabel: "Average Blended ROAS",
      description: "Building permanent inbound customer generation across Search, High-Yield Paid Media, and AI Answer Engines (GEO & AEO). High intent, zero vanity.",
      deliverables: ["AI Engine Optimization (GEO/AEO)", "Precision Paid Media Infrastructure", "Authority Content & Lead Capture"]
    },
    {
      id: "conversion",
      num: "03",
      title: "Frictionless Conversion Architecture",
      tagline: "Every Click Yields Capital",
      icon: Zap,
      metric: "<0.8s",
      metricLabel: "Target Load Velocity",
      description: "Sub-second headless web applications, high-velocity landing page funnels, and data-driven UX engineered to maximize transaction yield from every visitor.",
      deliverables: ["Headless Next.js Web Platforms", "High-Velocity Sales Funnels", "Full-Funnel CRO & Friction Audits"]
    },
    {
      id: "automation",
      num: "04",
      title: "Autonomous Revenue Operations",
      tagline: "Scale Without Headcount Chaos",
      icon: Cpu,
      metric: "78%",
      metricLabel: "Manual Friction Reduction",
      description: "Eliminating human operational drag with custom conversational AI booking agents, automated WhatsApp & CRM pipelines, and closed-loop financial telemetry.",
      deliverables: ["Custom AI Booking & Sales Agents", "WhatsApp Omnichannel Automation", "Server-Side Multi-Touch Attribution"]
    }
  ];

  return (
    <section id="growth-vectors" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Core Growth Vectors
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Four Levers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Compounding Velocity.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            Sustainable enterprise growth requires all four vectors operating in perfect synchronization.
          </p>
        </div>

        {/* 4 Vector Cards Grid with Scroll Parallax */}
        <div className="grid md:grid-cols-2 gap-8">
          {vectors.map((vec, idx) => {
            const Icon = vec.icon;
            return (
              <motion.div
                key={vec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card3DTilt className="p-8 sm:p-10 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#0097B2] tracking-widest uppercase">
                        VECTOR {vec.num}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#0097B2] font-mono mb-1">
                      {vec.tagline}
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                      {vec.title}
                    </h3>

                    <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-8">
                      {vec.description}
                    </p>

                    <div className="space-y-2 mb-8 border-t border-[#0B2545]/10 dark:border-white/10 pt-4">
                      {vec.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-extrabold font-heading text-[#0097B2] mr-2">
                        {vec.metric}
                      </span>
                      <span className="text-xs font-mono text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
                        {vec.metricLabel}
                      </span>
                    </div>
                    <button
                      onClick={onSelectVector}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer group/btn"
                    >
                      <span>Deploy Vector</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card3DTilt>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
