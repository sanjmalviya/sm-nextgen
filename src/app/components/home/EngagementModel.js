"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, Crosshair, Map, Wrench, 
  Rocket, Gauge, Repeat, ArrowRight 
} from "lucide-react";

export default function EngagementModel({ onStartConversation }) {
  const steps = [
    {
      num: "01",
      name: "DISCOVER",
      icon: Search,
      action: "Deep Business Immersion",
      detail: "We audit your business model, customer economics, historical marketing data, and core commercial goals."
    },
    {
      num: "02",
      name: "DIAGNOSE",
      icon: Crosshair,
      action: "Friction Point Isolation",
      detail: "Identify the critical bottlenecks holding back revenue—whether it's weak positioning, low conversion, or high CAC."
    },
    {
      num: "03",
      name: "STRATEGIZE",
      icon: Map,
      action: "90-Day Execution Blueprint",
      detail: "Formulate a milestone-driven growth roadmap with clear channel prioritization and revenue targets."
    },
    {
      num: "04",
      name: "BUILD",
      icon: Wrench,
      action: "Infrastructure Engineering",
      detail: "Construct high-converting digital platforms, automated CRM routing, server-side tracking, and creative assets."
    },
    {
      num: "05",
      name: "EXECUTE",
      icon: Rocket,
      action: "Multi-Channel Demand Launch",
      detail: "Deploy targeted acquisition campaigns across high-intent search, algorithmic media, and retention channels."
    },
    {
      num: "06",
      name: "OPTIMIZE",
      icon: Gauge,
      action: "Attribution & Sprint Tuning",
      detail: "Analyze real bank revenue attribution, run rigorous conversion experiments, and optimize unit economics."
    },
    {
      num: "07",
      name: "SCALE",
      icon: Repeat,
      action: "Compounding Growth Systems",
      detail: "Automate repetitive operational friction with AI agents and scale marketing capital into predictable returns."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Client Engagement Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            One Partner. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              One Growth System.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            How we partner with ambitious founders and executive teams to reliably engineer, launch, and compound enterprise business growth.
          </p>
        </div>

        {/* Steps Horizontal/Grid Flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#0097B2]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0097B2]">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-1">
                    {st.name}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-300 mb-2 leading-tight">
                    {st.action}
                  </div>
                  <p className="text-[11px] text-[#E6EEF2]/65 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Assurance Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-white/[0.05] via-[#0097B2]/10 to-white/[0.05] border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="font-bold text-base text-white">
              No Cookie-Cutter Packages. Tailored Growth Partnerships.
            </h4>
            <p className="text-xs sm:text-sm text-[#E6EEF2]/70 mt-0.5">
              Engagements structured as dedicated Growth Retainers, strategic roadmaps, or enterprise system builds.
            </p>
          </div>
          <button
            onClick={onStartConversation}
            className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-xs tracking-wide transition-all cursor-pointer shrink-0"
          >
            Initiate Growth Diagnostic
          </button>
        </div>

      </div>
    </section>
  );
}
