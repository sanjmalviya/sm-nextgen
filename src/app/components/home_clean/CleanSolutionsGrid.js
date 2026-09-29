"use client";
import React from "react";
import { Terminal, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanSolutionsGrid({ onSelectSolution }) {
  const products = [
    {
      id: "growth-os",
      icon: Terminal,
      name: "GrowthOS™ Enterprise",
      category: "Intelligence Platform",
      tagline: "Unified Growth & Telemetry Cockpit",
      description: "A centralized software platform that tracks all marketing spend, live website conversions, lead pipelines, and bank revenues in real-time.",
      features: ["Server-Side Multi-Touch Attribution", "Unit Economics & CAC:LTV Tracking", "Predictive Revenue Forecasting"]
    },
    {
      id: "nextgen-crm",
      icon: Users,
      name: "NextGen Autonomous CRM",
      category: "Sales Automation",
      tagline: "Sub-60s Inbound Lead Routing",
      description: "An intelligent customer relationship system with native WhatsApp API automation, autonomous AI qualification agents, and instant deal routing.",
      features: ["WhatsApp 1-Click Conversational AI", "Automated Lead Scoring & Routing", "Omnichannel Pipeline Management"]
    },
    {
      id: "funnel-architect",
      icon: Sparkles,
      name: "FunnelArchitect™ Engine",
      category: "Conversion Infrastructure",
      tagline: "Headless High-Velocity Funnels",
      description: "High-velocity sales funnel infrastructure engineered with Next.js for sub-second load times and frictionless transaction experiences.",
      features: ["Sub-Second Static Page Generation", "1-Click Friction-Free Checkout", "Automated Cart Recovery Sequences"]
    }
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Proprietary Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-4">
            Software & Systems Engineered for Scalable Growth.
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body">
            Proprietary digital assets built to give our partners permanent competitive advantages.
          </p>
        </div>

        {/* 3 Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Card3DTilt
                key={p.id}
                className="p-8 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] font-semibold">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {p.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0097B2] font-mono mb-4">
                    {p.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-[#0B2545]/10 dark:border-white/10 pt-4">
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0097B2] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <button
                    onClick={onSelectSolution}
                    className="w-full py-2.5 rounded-lg bg-[#0097B2]/10 hover:bg-[#0097B2] text-[#0097B2] hover:text-white font-semibold text-xs tracking-wide transition-all text-center cursor-pointer"
                  >
                    Request Platform Access →
                  </button>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
