"use client";
import React from "react";
import { Search, Compass, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanFramework({ onStartConversation }) {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Audit & Diagnostics",
      timeline: "Days 1–14",
      description: "Comprehensive evaluation of your current unit economics, acquisition funnels, digital infrastructure, and competitor vulnerabilities."
    },
    {
      num: "02",
      icon: Compass,
      title: "Strategic Architecture",
      timeline: "Days 15–30",
      description: "Modeling CAC:LTV targets, designing the high-velocity web conversion funnel, and formulating the omnichannel demand roadmap."
    },
    {
      num: "03",
      icon: Wrench,
      title: "High-Velocity Build",
      timeline: "Days 31–60",
      description: "Engineering headless Next.js platforms, deploying autonomous AI agents, setting up CRM pipelines, and activating acquisition channels."
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Compounding Scale",
      timeline: "Day 61 Onward",
      description: "Continuous CRO experimentation, multi-channel demand scaling, closed-loop financial attribution, and operational margin expansion."
    }
  ];

  return (
    <section id="methodology" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-4">
            A Rigorous, Milestone-Driven Framework.
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body">
            From initial economic audit to compounding enterprise valuation.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <Card3DTilt
                key={st.num}
                className="p-7 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#0097B2]">
                      {st.num}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#0097B2] font-semibold mb-1">
                    {st.timeline}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <span className="text-[11px] font-mono text-[#0B2545]/50 dark:text-[#E6EEF2]/50 uppercase">
                    Stage Verified Milestone
                  </span>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
