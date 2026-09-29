"use client";
import React from "react";
import { Zap, TrendingDown, Target, ShieldCheck } from "lucide-react";

export default function GrowthStatsStrip() {
  const stats = [
    {
      icon: Zap,
      value: "+38%",
      label: "Average CRO Lift",
      desc: "Frictionless checkout & funnel optimization"
    },
    {
      icon: TrendingDown,
      value: "-24%",
      label: "Blended CAC Reduction",
      desc: "High-intent organic & inbound loops"
    },
    {
      icon: Target,
      value: "96.4%",
      label: "Attribution Precision",
      desc: "Closed-loop bank & CRM tracking"
    },
    {
      icon: ShieldCheck,
      value: "4-Hour",
      label: "Principal SLA Guarantee",
      desc: "Direct leadership access, zero junior reps"
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-[#071A30] border-y border-[#0B2545]/10 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#0B2545]/10 dark:divide-white/10">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""} flex items-center gap-4 text-left`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-none mb-1">
                    {s.value}
                  </h3>
                  <div className="text-xs font-bold text-[#0B2545]/90 dark:text-[#E6EEF2]/90 font-heading">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                    {s.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
