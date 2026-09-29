"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Sparkles, TrendingUp, 
  Cpu, Layers, Zap, Database, BarChart3, Repeat, 
  CheckCircle2, Compass
} from "lucide-react";

export default function HeroGrowthEngine({ onStartConversation }) {
  const [activeNode, setActiveNode] = useState(0);

  const engineNodes = [
    {
      id: "brand",
      name: "Brand & Position",
      icon: Compass,
      metric: "+180% Authority",
      desc: "Distinct market positioning and messaging that commands premium perception.",
      color: "from-cyan-500 to-blue-600",
      accent: "#0097B2"
    },
    {
      id: "demand",
      name: "Demand Generation",
      icon: TrendingUp,
      metric: "3.8x Qualified Pipeline",
      desc: "Multi-channel intent capture through search, algorithmic media, and high-value content.",
      color: "from-blue-500 to-indigo-600",
      accent: "#3B82F6"
    },
    {
      id: "conversion",
      name: "Conversion Engine",
      icon: Zap,
      metric: "+42% Conversion Rate",
      desc: "Frictionless digital experiences and high-intent landing flows engineered to convert.",
      color: "from-indigo-500 to-purple-600",
      accent: "#6366F1"
    },
    {
      id: "revenue",
      name: "Revenue Systems",
      icon: BarChart3,
      metric: "2.4x Deal Velocity",
      desc: "Automated sales pipelines, structured CRM routing, and lead-to-revenue tracking.",
      color: "from-purple-500 to-pink-600",
      accent: "#A855F7"
    },
    {
      id: "data",
      name: "Unified Intelligence",
      icon: Database,
      metric: "100% Attribution Clarity",
      desc: "Deep customer telemetry, multi-touch attribution, and real-time revenue analytics.",
      color: "from-pink-500 to-rose-600",
      accent: "#EC4899"
    },
    {
      id: "automation",
      name: "AI & Automation",
      icon: Cpu,
      metric: "65% Ops Friction Cut",
      desc: "Autonomous workflows, instant conversational routing, and zero-drop lead ops.",
      color: "from-rose-500 to-amber-600",
      accent: "#F43F5E"
    },
    {
      id: "scale",
      name: "Predictable Scale",
      icon: Repeat,
      metric: "Compounding Growth",
      desc: "Infrastructure built to absorb exponential demand without linear headcount expansion.",
      color: "from-teal-400 to-[#0097B2]",
      accent: "#14B8A6"
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#030e1c] overflow-hidden text-white">
      {/* Background Architectural Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0097B2]/12 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-[#0097B2] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse"></span>
            Category: Business Growth Partner
          </motion.div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-heading"
          >
            Your Business Deserves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6EEF2] to-[#0097B2]">
              More Than Marketing.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#E6EEF2]/80 max-w-3xl mx-auto leading-relaxed font-normal mb-8"
          >
            We build the strategy, systems, technology, and growth engine that help ambitious businesses acquire customers, increase revenue, and scale with complete confidence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onStartConversation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(0,151,178,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start a Growth Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#how-we-grow"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-[#E6EEF2] font-semibold text-base transition-all duration-300 backdrop-blur-sm text-center"
            >
              Explore How We Grow →
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-[#E6EEF2]/60"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#0097B2]" /> Strategic Alignment</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#0097B2]" /> Revenue Attribution</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#0097B2]" /> Scalable Systems</span>
          </motion.div>
        </div>

        {/* --- INTERACTIVE GROWTH ENGINE SYSTEM CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Top telemetry bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase">The Synchronized Growth Engine</span>
            </div>
            <div className="text-xs font-mono text-[#E6EEF2]/60">
              Interactive System Architecture • Click any node to inspect telemetry
            </div>
          </div>

          {/* Connected Pipeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {engineNodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = activeNode === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                    isActive 
                      ? "bg-white/15 border-[#0097B2] shadow-[0_0_20px_rgba(0,151,178,0.25)] scale-[1.02]" 
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/50">0{index + 1}</span>
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#0097B2]" : "text-white/60 group-hover:text-white"}`} />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white mb-1 line-clamp-1 leading-tight">
                    {node.name}
                  </div>
                  <div className="text-[11px] font-medium text-[#0097B2]">
                    {node.metric}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Deep-Dive Inspection Strip */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start md:items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${engineNodes[activeNode].color} flex items-center justify-center shrink-0 shadow-lg`}>
                {React.createElement(engineNodes[activeNode].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold">
                    Stage 0{activeNode + 1} / 07
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    Verified Lever: {engineNodes[activeNode].metric}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {engineNodes[activeNode].name}
                </h4>
                <p className="text-xs sm:text-sm text-[#E6EEF2]/75 max-w-2xl leading-relaxed mt-1">
                  {engineNodes[activeNode].desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={onStartConversation}
                className="px-5 py-2.5 rounded-xl bg-[#0097B2]/20 hover:bg-[#0097B2] border border-[#0097B2]/40 text-white font-semibold text-xs tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
              >
                Engineer This Lever
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
