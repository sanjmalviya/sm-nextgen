"use client";

import React from "react";
import Link from "next/link";
import { 
  Search, Stethoscope, Compass, Wrench, Gauge, TrendingUp, 
  ArrowRight
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Discover",
    tagline: "Market Realities & Commercial Landscape",
    desc: "We analyze your buyer personas, sales feedback, competitor vulnerabilities, and historical acquisition channels to uncover unexploited market white space.",
    icon: Search
  },
  {
    step: "02",
    name: "Diagnose",
    tagline: "Bottleneck & Revenue Leak Audit",
    desc: "We audit your complete customer journey from ad click to bank deposit, identifying drop-offs in page load speed, checkout friction, and lead follow-up.",
    icon: Stethoscope
  },
  {
    step: "03",
    name: "Strategize",
    tagline: "12-Month Compounding Roadmap",
    desc: "We architect a high-conviction growth blueprint that mathematically aligns unit economics, positioning, web technology, and automated retention loops.",
    icon: Compass
  },
  {
    step: "04",
    name: "Build",
    tagline: "Production-Grade Engineering",
    desc: "Our engineering and creative teams build sub-second Next.js web applications, frictionless CRO funnels, and 24/7 autonomous WhatsApp lead-routing bots.",
    icon: Wrench
  },
  {
    step: "05",
    name: "Optimize",
    tagline: "Conversion Velocity & Attribution",
    desc: "We run disciplined multi-variant experiments on landing pages and ad angles while tracking closed-loop revenue against actual bank cashflow.",
    icon: Gauge
  },
  {
    step: "06",
    name: "Scale",
    tagline: "Profitable Capital Reinvestment",
    desc: "With proven unit economics and a frictionless conversion engine, we scale acquisition budgets and automate back-office operations with confidence.",
    icon: TrendingUp
  }
];

export default function HowWeWorkProcess({ onStartConversation }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            SM NextGen Growth Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-4">
            How We Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
              Compounding Growth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Our disciplined 6-stage engineering protocol transforms customer acquisition from random marketing guesswork into a predictable growth machine.
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0097B2] dark:text-cyan-400 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PHASE {stage.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                    {stage.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0097B2] dark:text-cyan-400 mb-2.5">
                    {stage.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Footer Link to Methodology */}
        <div className="text-center">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-200 dark:border-white/10"
          >
            <span>Read The Complete 6-Stage Engineering Protocol</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0097B2]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
