"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, Award, Target, Zap, 
  Code2, Cpu, BarChart2, TrendingUp, 
  ArrowUpRight 
} from "lucide-react";

export default function GrowthLevers({ onSelectLever }) {
  const levers = [
    {
      id: "strategy",
      title: "Strategy",
      tagline: "Find the opportunity.",
      desc: "Market gap diagnosis, audience economics, and competitor vulnerability mapping.",
      icon: Compass,
      outcome: "High-margin focus",
      color: "from-blue-500/20 to-cyan-500/10",
      accentColor: "#0097B2"
    },
    {
      id: "brand",
      title: "Brand",
      tagline: "Build the position.",
      desc: "Commanding category authority and compelling messaging that cuts through noise.",
      icon: Award,
      outcome: "Pricing power & recall",
      color: "from-purple-500/20 to-indigo-500/10",
      accentColor: "#8B5CF6"
    },
    {
      id: "acquisition",
      title: "Acquisition",
      tagline: "Generate demand.",
      desc: "Predictable, multi-channel inbound customer generation across Search, Paid Media & AI discovery.",
      icon: Target,
      outcome: "Sustainable inbound flow",
      color: "from-cyan-500/20 to-teal-500/10",
      accentColor: "#06B6D4"
    },
    {
      id: "conversion",
      title: "Conversion",
      tagline: "Turn attention into customers.",
      desc: "Eliminating friction points across landing funnels, messaging, and digital user journeys.",
      icon: Zap,
      outcome: "Higher customer yield",
      color: "from-amber-500/20 to-orange-500/10",
      accentColor: "#F59E0B"
    },
    {
      id: "technology",
      title: "Technology",
      tagline: "Build the infrastructure.",
      desc: "Fast, resilient web platforms, headless storefronts, and integrated modern web architectures.",
      icon: Code2,
      outcome: "Enterprise stability",
      color: "from-emerald-500/20 to-teal-500/10",
      accentColor: "#10B981"
    },
    {
      id: "automation",
      title: "Automation",
      tagline: "Remove repetitive work.",
      desc: "Connecting CRM, customer messaging, routing, and operational workflows with AI agents.",
      icon: Cpu,
      outcome: "Lean operational cost",
      color: "from-rose-500/20 to-pink-500/10",
      accentColor: "#F43F5E"
    },
    {
      id: "intelligence",
      title: "Intelligence",
      tagline: "Measure what matters.",
      desc: "Unified analytics dashboards that connect marketing spend directly to closed bank revenue.",
      icon: BarChart2,
      outcome: "Zero guesswork",
      color: "from-indigo-500/20 to-blue-500/10",
      accentColor: "#6366F1"
    },
    {
      id: "scale",
      title: "Scale",
      tagline: "Build for what's next.",
      desc: "Institutionalizing systems so your revenue multiplies without multiplying headcount or chaos.",
      icon: TrendingUp,
      outcome: "Compounding value",
      color: "from-sky-500/20 to-cyan-500/10",
      accentColor: "#0284C7"
    }
  ];

  return (
    <section id="growth-levers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] relative overflow-hidden text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
              The Multi-Disciplinary Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              One Partner. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Every Growth Lever.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E6EEF2]/70 max-w-md leading-relaxed">
            Sustainable growth rarely comes from one channel. We connect the critical parts of your business into one coordinated, resilient growth system.
          </p>
        </div>

        {/* 8 Levers Interactive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {levers.map((lever, idx) => {
            const Icon = lever.icon;
            return (
              <motion.div
                key={lever.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#0097B2]/50 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Subtle Hover Backlight */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: lever.accentColor }}
                ></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04] group-hover:scale-110 transition-transform"
                      style={{ color: lever.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/30 group-hover:text-[#0097B2] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#0097B2] transition-colors">
                    {lever.title}
                  </h3>
                  <div className="text-xs font-semibold text-white/90 mb-3 tracking-wide">
                    {lever.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#E6EEF2]/65 leading-relaxed mb-6">
                    {lever.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#0097B2]">
                    {lever.outcome}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
