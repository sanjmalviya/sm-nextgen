"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, TrendingUp, Laptop, DollarSign, 
  Cpu, BarChart3, Check, ArrowRight 
} from "lucide-react";

export default function CapabilitiesGrid({ onSelectCapability }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "brand",
      name: "Brand & Positioning",
      icon: Sparkles,
      outcome: "Premium Perception & Recall",
      description: "Carving out distinct market authority so you never compete purely on price.",
      capabilities: [
        "Brand Strategy & Market Positioning",
        "Visual & Corporate Identity Systems",
        "Executive Messaging Architecture",
        "Creative Design Systems",
        "Omnichannel Digital Presence"
      ]
    },
    {
      id: "demand",
      name: "Demand Generation",
      icon: TrendingUp,
      outcome: "Predictable Customer Inflow",
      description: "Generating continuous, high-intent inbound demand across modern search and algorithmic media.",
      capabilities: [
        "Search Engine Optimization (SEO)",
        "AI Engine Optimization (GEO & AEO)",
        "Precision Paid Media (Meta, Google, LinkedIn)",
        "Authority Content & Thought Leadership",
        "High-Yield Lead Generation Systems"
      ]
    },
    {
      id: "digital",
      name: "Digital Experience",
      icon: Laptop,
      outcome: "Industry-Leading Conversion",
      description: "Engineering digital platforms designed from the ground up to convert traffic into revenue.",
      capabilities: [
        "Conversion-Optimized Web Platforms",
        "High-Velocity Landing Page Funnels",
        "Modern Headless E-Commerce Solutions",
        "Custom Web & Mobile Applications",
        "Data-Driven UX & Friction Elimination"
      ]
    },
    {
      id: "revenue",
      name: "Revenue Systems",
      icon: DollarSign,
      outcome: "Accelerated Deal Velocity",
      description: "Automating the path between a captured lead and a signed contract or transaction.",
      capabilities: [
        "Automated Sales Funnels & Pipelines",
        "CRM Architecture & Lifecycle Routing",
        "WhatsApp & Omnichannel Sales Automation",
        "Lead Scoring & Routing Protocols",
        "Customer Journey Orchestration"
      ]
    },
    {
      id: "ai",
      name: "AI & Automation",
      icon: Cpu,
      outcome: "Lean, Scalable Operations",
      description: "Eliminating repetitive human operational tasks with intelligent agents and automated pipelines.",
      capabilities: [
        "Autonomous AI Business Workflows",
        "Customer Support & Booking AI Agents",
        "Cross-System API Integrations",
        "Intelligent Process Automation",
        "Custom Proprietary AI Tooling"
      ]
    },
    {
      id: "data",
      name: "Data & Intelligence",
      icon: BarChart3,
      outcome: "Closed-Loop Attribution",
      description: "Transforming ambiguous marketing metrics into clear, actionable financial intelligence.",
      capabilities: [
        "Unified Growth & BI Dashboards",
        "Multi-Touch Server-Side Attribution",
        "Unit Economics & CAC/LTV Tracking",
        "Predictive Revenue Forecasting",
        "Rigorous A/B Experimentation Frameworks"
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Integrated Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            Growth Capabilities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Not Disconnected Services.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            Everything we build is designed around one goal: creating measurable, sustainable business growth. Rather than selling isolated tasks, we assemble the strategic capabilities required to achieve your commercial targets.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#0097B2]/40 p-7 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/20 flex items-center justify-center text-[#0097B2] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300">
                      {cat.outcome}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0097B2] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E6EEF2]/70 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                    {cat.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#E6EEF2]/90">
                        <Check className="w-3.5 h-3.5 text-[#0097B2] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectCapability && onSelectCapability(cat.name)}
                    className="text-xs font-bold text-[#0097B2] hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Explore {cat.name.split(" ")[0]} Architecture <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
