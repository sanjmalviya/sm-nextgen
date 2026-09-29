"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calculator, Gauge, Link2, DollarSign, 
  ArrowUpRight, Sparkles 
} from "lucide-react";

export default function GrowthToolsPreview() {
  const tools = [
    {
      title: "Growth Score Diagnostic",
      badge: "Signature Diagnostic",
      desc: "Instantly benchmark your business across brand, acquisition, conversion, technology, and automation.",
      icon: Gauge,
      href: "/tools#audit",
      metric: "6 Pillar Analysis"
    },
    {
      title: "ROI & Revenue Forecaster",
      badge: "Financial Modeling",
      desc: "Simulate return on ad spend (ROAS) and target monthly revenue yields before deploying ad budget.",
      icon: DollarSign,
      href: "/tools#roi",
      metric: "Dynamic Yield Curve"
    },
    {
      title: "CAC vs LTV Calculator",
      badge: "Unit Economics",
      desc: "Stress-test your customer acquisition cost against 12-month retention and lifetime value.",
      icon: Calculator,
      href: "/tools#cac",
      metric: "Viability Ratio"
    },
    {
      title: "Multi-Touch UTM Builder",
      badge: "Attribution",
      desc: "Generate clean, standardized campaign parameters for server-side analytics and attribution.",
      icon: Link2,
      href: "/tools#utm",
      metric: "Standardized Links"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030e1c] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
              Decision Support Infrastructure
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Free Tools for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Better Growth Decisions.
              </span>
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm transition-all w-max"
          >
            Access All Growth Tools <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.title}
                href={t.href}
                className="group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#0097B2]/50 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/20 flex items-center justify-center text-[#0097B2] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                      {t.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0097B2] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-[#E6EEF2]/70 leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#0097B2]">
                    {t.metric}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
