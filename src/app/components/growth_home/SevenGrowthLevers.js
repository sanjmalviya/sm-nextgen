"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Compass, Palette, Target, Zap, Laptop, Bot, BarChart3, 
  ArrowRight, CheckCircle2, ChevronRight 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const LEVERS = [
  {
    num: "01",
    id: "strategy",
    title: "Strategy & Positioning",
    icon: Compass,
    image: "/images/services/brand-strategy-positioning.png",
    summary: "Define your market moat, ideal customer profile (ICP), and high-margin offer architecture.",
    capabilities: [
      "Category Design & Competitive Positioning",
      "Offer Architecture & Pricing Economics",
      "Customer Acquisition Cost (CAC) Modeling",
      "12-Month Compounding Growth Roadmaps"
    ],
    metric: "Foundation"
  },
  {
    num: "02",
    id: "experience",
    title: "Brand & Digital Experience",
    icon: Palette,
    image: "/images/services/ui-ux-product-design.png",
    summary: "Establish an elite brand presence with digital experiences built for trust and conversion.",
    capabilities: [
      "Enterprise Next.js Web Platforms",
      "High-Conversion UI/UX Product Design",
      "Brand Identity & Executive Storytelling",
      "Mobile-First Responsive Architectures"
    ],
    metric: "Perception"
  },
  {
    num: "03",
    id: "demand",
    title: "Demand Generation",
    icon: Target,
    image: "/images/services/performance-advertising.png",
    summary: "Capture high-intent market demand through scalable inbound and outbound acquisition channels.",
    capabilities: [
      "High-ROI Performance Marketing (Meta & Google)",
      "Organic Search (SEO) Category Authority",
      "B2B Account-Based Marketing (ABM)",
      "Content Engines & Inbound Flywheels"
    ],
    metric: "Acquisition"
  },
  {
    num: "04",
    id: "conversion",
    title: "Conversion & Revenue Optimization",
    icon: Zap,
    image: "/images/services/sales-funnel-conversion.png",
    summary: "Eliminate conversion friction and optimize every step from click to signed agreement or sale.",
    capabilities: [
      "Data-Driven CRO & Funnel Engineering",
      "Checkout & Onboarding Friction Reduction",
      "High-Velocity Landing Page Testing",
      "Lead-to-Opportunity Velocity Optimization"
    ],
    metric: "Efficiency"
  },
  {
    num: "05",
    id: "tech",
    title: "Technology & Infrastructure",
    icon: Laptop,
    image: "/images/services/web-app-development.png",
    summary: "Robust software engineering that turns digital touchpoints into automated revenue pipelines.",
    capabilities: [
      "Custom Web Applications & Portals",
      "Headless E-Commerce Systems (Shopify/Next)",
      "CRM & Pipeline Integrations (HubSpot, Zoho)",
      "API Orchestration & Cloud Infrastructure"
    ],
    metric: "Scale"
  },
  {
    num: "06",
    id: "ai",
    title: "AI & Business Automation",
    icon: Bot,
    image: "/images/services/ai-business-automation-systems.png",
    summary: "Deploy intelligent automation to respond in seconds, reduce overhead, and scale operations.",
    capabilities: [
      "Autonomous 24/7 AI Lead Qualification Bots",
      "Instant WhatsApp & SMS Sales Routing",
      "Automated Nurture & Retention Workflows",
      "Back-Office Process Automation"
    ],
    metric: "Leverage"
  },
  {
    num: "07",
    id: "data",
    title: "Data, Analytics & Intelligence",
    icon: BarChart3,
    image: "/images/services/ai-data-analytics-business-intelligence.png",
    summary: "Gain crystal-clear visibility into revenue attribution, customer lifetime value, and channel ROI.",
    capabilities: [
      "Multi-Touch Revenue Attribution Models",
      "Real-Time Executive Growth Dashboards",
      "Customer Lifetime Value (LTV) Cohort Tracking",
      "Predictive Growth & Churn Modeling"
    ],
    metric: "Truth"
  }
];

export default function SevenGrowthLevers({ onSelectLever }) {
  const [activeLever, setActiveLever] = useState(LEVERS[0]);

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>THE 7 GROWTH LEVERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            One Partner. Every Growth Lever.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Sustainable growth doesn't happen from one isolated tactic. We activate every lever across your customer acquisition, conversion, technology, and operations flywheel.
          </p>
        </div>

        {/* 7 Levers Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Levers Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {LEVERS.map((lever) => {
              const Icon = lever.icon;
              const isSelected = activeLever.id === lever.id;
              return (
                <button
                  key={lever.id}
                  onClick={() => setActiveLever(lever)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20 scale-[1.01]"
                      : "bg-[#F8FAFC] dark:bg-[#071A30]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`text-xs font-mono font-bold ${isSelected ? "text-white/80" : "text-[#0097B2]"}`}>
                      {lever.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-[#0097B2]"}`} />
                      <span className="font-bold font-heading text-sm sm:text-base">
                        {lever.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-white" : "text-[#0B2545]/40 dark:text-white/40"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Lever Detail Card (7 cols) */}
          <div className="lg:col-span-7">
            <Card3DTilt
              key={activeLever.id}
              className="p-8 sm:p-10 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-[#0B2545]/10 dark:border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/30 flex items-center justify-center text-[#0097B2]">
                    {React.createElement(activeLever.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono text-[#0097B2] uppercase tracking-wider">
                      Lever {activeLever.num} • {activeLever.metric}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                      {activeLever.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Clean Modern Lever Visual Preview Image (PNG) */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-[#0B2545]/10 dark:border-white/10 bg-slate-100 dark:bg-black/30 group">
                <img 
                  src={activeLever.image} 
                  alt={activeLever.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Production Architecture • Lever {activeLever.num}
                  </span>
                  <span className="text-xs font-bold text-white bg-[#0097B2] px-3 py-1 rounded-full shadow-sm">
                    {activeLever.metric} Focus
                  </span>
                </div>
              </div>

              <p className="text-base text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body leading-relaxed mb-8">
                {activeLever.summary}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0097B2]">
                  Strategic Capabilities Engineered:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeLever.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#0B2545]/60 border border-[#0B2545]/10 dark:border-white/10 flex items-start gap-2.5 text-sm font-medium text-[#0B2545] dark:text-[#E6EEF2]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#0B2545]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
                  Ready to activate Lever {activeLever.num} for your business?
                </span>
                <button
                  onClick={() => onSelectLever && onSelectLever(activeLever.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
                >
                  <span>Consult On This Lever</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </Card3DTilt>
          </div>

        </div>

      </div>

    </section>
  );
}
