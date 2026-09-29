"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Target, Network, LineChart, 
  Hourglass, Users2 
} from "lucide-react";

export default function WhySMNextGen() {
  const principles = [
    {
      title: "Business First",
      icon: Briefcase,
      tagline: "Economics over vanity metrics.",
      desc: "We start by understanding your margin profiles, customer lifetime value, and cash flow dynamics before touching a single marketing channel."
    },
    {
      title: "Outcome Driven",
      icon: Target,
      tagline: "Tied directly to revenue.",
      desc: "Clicks, likes, and impressions don't pay salaries. Every initiative we architect is evaluated by qualified pipeline, closed revenue, and margin expansion."
    },
    {
      title: "Integrated Growth",
      icon: Network,
      tagline: "Zero silo fragmentation.",
      desc: "Brand positioning, paid media, high-converting code, and automated CRM pipelines work together as one synchronized engine."
    },
    {
      title: "Data Informed",
      icon: LineChart,
      tagline: "Measurement over opinions.",
      desc: "We engineer multi-touch attribution and real-time dashboards so every strategic decision is backed by mathematical ground truth."
    },
    {
      title: "Long-Term Thinking",
      icon: Hourglass,
      tagline: "Assets that compound.",
      desc: "Instead of ephemeral ad campaigns that stop working the second you pause ad spend, we build durable brand equity and automated infrastructure."
    },
    {
      title: "One Growth Partner",
      icon: Users2,
      tagline: "Single-point accountability.",
      desc: "Eliminates the chaos of managing 5 disconnected agencies, freelancers, and dev shops. One senior team, aligned with your commercial goals."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Our Guiding Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            We Don&apos;t Just Run Campaigns. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              We Build Growth Systems.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            The traditional agency model is broken—freelancers chase micro-tasks, media buyers focus on vanity ROAS, and developers build pretty sites that don&apos;t convert. We engineer the complete system.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-7 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/20 flex items-center justify-center text-[#0097B2] mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-[#0097B2] mb-3">
                  {item.tagline}
                </div>
                <p className="text-xs sm:text-sm text-[#E6EEF2]/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
