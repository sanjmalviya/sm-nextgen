"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ArrowRight, Eye, Users, 
  Magnet, DollarSign, RefreshCw, Layers, 
  BarChart, Sliders, CheckCircle, Network
} from "lucide-react";

export default function BusinessSystem() {
  const [selectedStage, setSelectedStage] = useState(3);

  const stages = [
    {
      id: "brand",
      title: "1. Brand",
      subtitle: "Positioning & Market Trust",
      icon: Sparkles,
      input: "Core Values & Value Prop",
      output: "Distinct Authority",
      detail: "Creates the baseline reputation so your company doesn't compete on price alone."
    },
    {
      id: "attention",
      title: "2. Attention",
      subtitle: "Reach & Visibility",
      icon: Eye,
      input: "Audience Profiling",
      output: "Relevant Eyeballs",
      detail: "Captures high-intent prospects across search engines, algorithmic media, and digital channels."
    },
    {
      id: "acquisition",
      title: "3. Acquisition",
      subtitle: "Inbound Pipeline",
      icon: Magnet,
      input: "Targeted Campaigns",
      output: "Qualified Leads / Traffic",
      detail: "Transforms casual interest into measurable prospect data entering your funnel."
    },
    {
      id: "conversion",
      title: "4. Conversion",
      subtitle: "Funnel Velocity",
      icon: Users,
      input: "UX & Messaging Architecture",
      output: "Active Buyers",
      detail: "Removes friction, objection hurdles, and delays between discovery and decision."
    },
    {
      id: "sales",
      title: "5. Sales & Closing",
      subtitle: "Pipeline Monetization",
      icon: DollarSign,
      input: "Automated Routing & CRM",
      output: "Closed Contracts / Orders",
      detail: "Ensures every qualified lead is followed up with instantly via omnichannel workflows."
    },
    {
      id: "retention",
      title: "6. Retention",
      subtitle: "Lifetime Value (LTV)",
      icon: RefreshCw,
      input: "Onboarding & Experience",
      output: "Repeat Revenue",
      detail: "Compounds ROI by turning one-time buyers into loyal advocates and repeat clients."
    },
    {
      id: "data",
      title: "7. Unified Data",
      subtitle: "Attribution & Metrics",
      icon: BarChart,
      input: "Customer Telemetry",
      output: "Closed-Loop Truth",
      detail: "Shows exactly which rupee or dollar of spend generated actual bottom-line profit."
    },
    {
      id: "scale",
      title: "8. Continuous Scale",
      subtitle: "Compounding Growth",
      icon: Sliders,
      input: "System Automation",
      output: "Sustainable Expansion",
      detail: "Reinvests verified insights to scale operations without chaos or diminishing returns."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden">
      {/* Background Radial accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0097B2]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Ecosystem Thinking
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-6">
            Your Business Is a System. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Growth Should Be Too.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            Marketing doesn&apos;t exist in isolation. Brand, acquisition, conversion, sales, technology, customer experience, and data all influence one another. When they operate in silos, growth stalls. We connect them into one resilient, compounding engine.
          </p>
        </div>

        {/* Interactive Loop Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {stages.map((stg, i) => {
            const Icon = stg.icon;
            const isSelected = selectedStage === i;
            return (
              <button
                key={stg.id}
                onClick={() => setSelectedStage(i)}
                className={`p-4 rounded-xl border text-center transition-all duration-300 relative cursor-pointer flex flex-col items-center justify-between ${
                  isSelected 
                    ? "bg-[#0097B2]/15 border-[#0097B2] shadow-[0_0_15px_rgba(0,151,178,0.3)] scale-[1.03]" 
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#0097B2]" : "text-white/60"}`} />
                </div>
                <span className="text-xs font-bold text-white block mb-0.5 leading-tight">
                  {stg.title.split('. ')[1]}
                </span>
                <span className="text-[10px] text-white/40 font-mono">
                  Step 0{i + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep-Dive Stage Detail Box */}
        <motion.div 
          key={selectedStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-1">
                Node Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stages[selectedStage].title}
              </h3>
              <p className="text-sm font-medium text-cyan-300 mb-4">
                {stages[selectedStage].subtitle}
              </p>
              <p className="text-sm text-[#E6EEF2]/75 leading-relaxed">
                {stages[selectedStage].detail}
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-mono text-white/50 block mb-1 uppercase tracking-wider">System Input</span>
                <span className="text-sm font-bold text-white block mb-1">{stages[selectedStage].input}</span>
                <span className="text-xs text-white/60">Feeds directly from upstream architecture.</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/30">
                <span className="text-[11px] font-mono text-[#0097B2] block mb-1 uppercase tracking-wider">Downstream Output</span>
                <span className="text-sm font-bold text-white block mb-1">{stages[selectedStage].output}</span>
                <span className="text-xs text-white/60">Catalyzes next growth cycle stage.</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
