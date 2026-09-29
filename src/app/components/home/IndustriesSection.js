"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, ShoppingBag, Bed, Stethoscope, 
  GraduationCap, Briefcase, Rocket, Factory, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

export default function IndustriesSection({ onSelectIndustry }) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "saas",
      title: "B2B SaaS & Tech",
      icon: Rocket,
      challenge: "High customer acquisition cost and long enterprise sales cycles.",
      solution: "Demand capture via search intent, automated lead qualification, and interactive ROI tooling.",
      metrics: ["Reduced Sales Cycle", "Lower Blended CAC", "Higher Deal Velocity"]
    },
    {
      id: "d2c",
      title: "E-Commerce & D2C",
      icon: ShoppingBag,
      challenge: "Rising ad platform CPMs eating into contribution margins and cart abandonment.",
      solution: "High-speed headless checkouts, post-purchase retention workflows, and algorithmic media testing.",
      metrics: ["3x+ Sustainable ROAS", "Lower Cart Drop-off", "+40% Repeat LTV"]
    },
    {
      id: "hospitality",
      title: "Hospitality & Travel",
      icon: Bed,
      challenge: "High dependency on OTA platforms taking 18–25% commission per room/villa.",
      solution: "Direct booking engine optimization, high-net-worth retargeting, and automated VIP concierge messaging.",
      metrics: ["Direct Booking Growth", "OTA Commission Savings", "Higher RevPAR"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Clinics",
      icon: Stethoscope,
      challenge: "Building local authority, patient trust, and booking friction for specialized treatments.",
      solution: "Hyper-local SEO, transparent credibility architectures, and instant consultation scheduling.",
      metrics: ["High Patient Trust", "Direct Consult Bookings", "Verified Reviews"]
    },
    {
      id: "services",
      title: "Professional Services",
      icon: Briefcase,
      challenge: "Competing on price against commoditized agencies and slow referrals.",
      solution: "Thought-leadership positioning, executive messaging, and outbound qualification funnels.",
      metrics: ["Premium Retainers", "Qualified Inbound", "Executive Authority"]
    },
    {
      id: "startups",
      title: "Startups & Emerging SMEs",
      icon: Factory,
      challenge: "Scattered marketing efforts with limited runway and uncertain customer unit economics.",
      solution: "Turnkey Growth Engine deployment, fast feedback validation loops, and founder-aligned execution.",
      metrics: ["Rapid Go-to-Market", "Predictable CAC", "Investor-Grade Metrics"]
    }
  ];

  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Domain Specialization
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            Built Around How Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Actually Grows.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            A B2B SaaS company doesn&apos;t grow the same way as an E-commerce store or a luxury resort. We engineer specialized growth architectures tailored to your exact business model and cash flow dynamics.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isCurrent = activeTab === i;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#0097B2] text-white shadow-[0_0_15px_rgba(0,151,178,0.3)]"
                    : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Detailed Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block">
                Target Architecture • {industries[activeTab].title}
              </span>
              
              <div>
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1">
                  The Core Sector Challenge:
                </span>
                <p className="text-sm sm:text-base text-[#E6EEF2]/80 leading-relaxed">
                  {industries[activeTab].challenge}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#0097B2] font-bold uppercase tracking-wider block mb-1">
                  How the Growth Engine Solves It:
                </span>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {industries[activeTab].solution}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectIndustry && onSelectIndustry(industries[activeTab].title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-xs tracking-wide transition-all cursor-pointer"
                >
                  Discuss {industries[activeTab].title} Roadmap <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                Validated Commercial Outcomes
              </h4>
              <div className="space-y-3">
                {industries[activeTab].metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
