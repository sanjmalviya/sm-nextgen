"use client";

import React from "react";
import Image from "next/image";
import { Unplug, Clock, EyeOff, Layers, ArrowRight, Check, X } from "lucide-react";

export default function BusinessChallenges({ onExploreSystem }) {
  const frictionPoints = [
    {
      icon: <Unplug className="w-5 h-5 text-[#0097B2]" />,
      title: "Siloed Channels",
      desc: "Disconnected landing pages and ads burn traffic before trust builds."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0097B2]" />,
      title: "Slow Lead Response",
      desc: "Unanswered inquiries cool off while faster competitors close the deal."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#0097B2]" />,
      title: "Vanity Reporting",
      desc: "Clicks look good on slides without showing actual revenue return."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0097B2]" />,
      title: "Tool Sprawl",
      desc: "Separate tools and vendors create handoff friction across teams."
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-subheading font-bold text-[#0097B2] uppercase tracking-wider">
            The Growth Problem
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-[1.15]">
              When Marketing &amp; Tech Work in Silos,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
                Growth Leaks.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Treating ads, websites, SEO, and follow-up as separate tasks wastes ad spend and lets high-intent buyers slip away.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white mr-1">Disconnected Agencies:</strong>
                  <span>Siloed vendors, vanity metrics, zero shared accountability.</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white mr-1">SM NextGen System:</strong>
                  <span>Strategy, demand, web engineering, AI &amp; revenue unified.</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onExploreSystem}
              className="inline-flex items-center gap-2 text-xs font-subheading font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider pt-1 cursor-pointer"
            >
              <span>Explore Connected System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto rounded-3xl bg-[#E6EEF2]/60 dark:bg-[#0B2545] border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-lg">
              <div className="rounded-2xl overflow-hidden bg-white shadow-xs">
                <Image
                  src="/images/From Decline to Digital Growth.png"
                  alt="Isometric illustration showing transformation from disconnected business decline to a structured digital growth ecosystem"
                  width={1122}
                  height={1402}
                  quality={85}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="w-full h-auto block"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-subheading font-semibold text-[#0B2545] dark:text-white">
                  Disconnected → Connected Growth
                </span>
                <span className="font-mono text-[11px] font-bold text-[#0097B2]">System Shift</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {frictionPoints.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all space-y-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-xs">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#0B2545] dark:text-white font-subheading">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
