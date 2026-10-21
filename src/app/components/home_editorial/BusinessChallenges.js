"use client";

import React from "react";
import { 
  Unplug, Clock, EyeOff, Layers, 
  ArrowRight, Check, X, ShieldAlert
} from "lucide-react";

export default function BusinessChallenges({ onExploreSystem }) {
  const frictionPoints = [
    {
      icon: <Unplug className="w-5 h-5 text-[#0097B2]" />,
      title: "Siloed Acquisition Channels",
      desc: "Paid ad traffic drives clicks, but disconnected landing pages and generic messaging cause high bounce rates before value is established."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0097B2]" />,
      title: "The Speed-to-Lead Leak",
      desc: "Inquiries sit unanswered for hours in inboxes while buyers quickly move to the next competitor who responds within minutes."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#0097B2]" />,
      title: "Attribution Blind Spots",
      desc: "Agencies report vanity impressions and clicks, leaving leadership without clear data on which channels generate profitable customer revenue."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0097B2]" />,
      title: "Fragmented Tool Subscriptions",
      desc: "Multiple disjointed SaaS tools held together by fragile automations create operational drag instead of compounding leverage."
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
            The Growth Problem
          </span>
        </div>

        {/* 2-Column Editorial Breakdown */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Clear Core Problem Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-[1.15]">
              When Marketing, Technology & Operations Operate Separately, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
                Growth Leaks.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Most businesses do not suffer from a lack of effort. They suffer from disconnected execution. Traditional marketing retainers treat ads, website design, SEO, and sales follow-up as isolated tasks. 
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              When channels operate in silos, ad spend is wasted on low-converting pages, high-intent leads slip away, and leadership is left guessing what actually drives bank deposits.
            </p>

            {/* Contrast Comparison Pill Box */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Fragmented Agencies:</strong> Disjointed vendors, vanity metrics, slow communication, and zero shared accountability.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">SM NextGen System:</strong> One growth partner unifying strategy, demand, web tech, automation, and unit economics.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onExploreSystem}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider pt-2 cursor-pointer"
            >
              <span>See How the Connected System Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: 4 Clean Friction Points */}
          <div className="lg:col-span-6 space-y-4">
            {frictionPoints.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/30 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-xs">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545] dark:text-white font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
