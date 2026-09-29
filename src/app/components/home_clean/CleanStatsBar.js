"use client";
import React from "react";
import { Laptop, Cpu, ShieldCheck, Clock } from "lucide-react";

export default function CleanStatsBar() {
  const stats = [
    {
      icon: Laptop,
      value: "10+",
      label: "Years Industry Experience",
      desc: "Engineering digital growth architectures"
    },
    {
      icon: Cpu,
      value: "340+",
      label: "Software & Growth Systems Delivered",
      desc: "For startups, SMEs & global enterprises"
    },
    {
      icon: ShieldCheck,
      value: "99.4%",
      label: "On-Time Project Delivery",
      desc: "Rigorous milestone-driven execution"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Dedicated Support & Ops",
      desc: "Synchronous global sprint cycles"
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
                <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-none mb-1">
                    {s.value}
                  </h3>
                  <div className="text-xs font-bold text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-heading">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-[#0B2545]/50 dark:text-[#E6EEF2]/50 font-body">
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
