"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, ArrowRight, CheckCircle2, 
  HelpCircle, Sparkles, RefreshCw 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const PROBLEMS = [
  {
    num: "01",
    symptom: "You get website traffic, but visitors bounce without converting.",
    rootCause: "Weak value proposition, slow load speeds (>3s), or confusing navigation paths.",
    solution: "High-conversion CRO architecture, sub-second Next.js speed, and clear friction-free UX."
  },
  {
    num: "02",
    symptom: "You run paid ads, but your Customer Acquisition Cost (CAC) keeps surging.",
    rootCause: "Ad campaigns dump traffic onto generic homepages with no intent alignment.",
    solution: "Dedicated dynamic landing pages matched to specific search intents and automated retargeting."
  },
  {
    num: "03",
    symptom: "Your sales team receives inquiries, but most leads are unqualified or low-budget.",
    rootCause: "Missing qualification filters at the top of the funnel and loose ad targeting.",
    solution: "Multi-step smart qualification intake that screens out bad-fit prospects automatically."
  },
  {
    num: "04",
    symptom: "You have an exceptional product, but your digital presence looks dated.",
    rootCause: "Generic WordPress/Shopify templates that fail to signal premium enterprise authority.",
    solution: "Custom enterprise digital design system that commands premium pricing and deep institutional trust."
  },
  {
    num: "05",
    symptom: "Inquiries arrive, but manual follow-up takes hours and leads go cold.",
    rootCause: "No automated routing; relying on manual email checking and unorganized spreadsheets.",
    solution: "Sub-5-minute automated WhatsApp, SMS, and calendar booking sequences that engage instantly."
  },
  {
    num: "06",
    symptom: "Your CRM, marketing ads, and customer data live in completely disconnected silos.",
    rootCause: "Fragmented SaaS tools bought piecemeal with no unified API architecture.",
    solution: "Unified data pipeline connecting your ad accounts, website, CRM, and billing systems."
  },
  {
    num: "07",
    symptom: "You pay monthly agency retainers, but no one can prove actual revenue ROI.",
    rootCause: "Agency reports on vanity metrics (impressions, clicks) instead of cash collected.",
    solution: "Closed-loop multi-touch revenue attribution showing exact ROI per marketing rupee spent."
  }
];

export default function ConnectedProblems({ onGetScore }) {
  return (
    <section id="problems" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>SYSTEMIC BOTTLENECKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Growth Problems Are Connected.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Most business challenges are symptoms of disconnected systems. When one piece breaks, the entire engine stalls.
          </p>
        </div>

        {/* 7 Connected Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROBLEMS.slice(0, 6).map((item) => (
            <Card3DTilt
              key={item.num}
              className="p-6 sm:p-7 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-500">
                    BOTTLENECK {item.num}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-xs font-bold">
                    !
                  </div>
                </div>

                <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-4 leading-snug">
                  "{item.symptom}"
                </h3>

                <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 mb-2">
                  <strong className="text-[#0B2545] dark:text-white">Root Cause:</strong> {item.rootCause}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                <div className="flex items-start gap-2 text-xs font-medium text-[#0097B2]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>The Growth Fix:</strong> {item.solution}</span>
                </div>
              </div>
            </Card3DTilt>
          ))}

          {/* 7th Problem Card - Wide on Larger Screens */}
          <div className="md:col-span-2 lg:col-span-3">
            <Card3DTilt className="p-6 sm:p-8 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 mb-2">
                    <span>BOTTLENECK 07</span>
                    <span>•</span>
                    <span>THE BLIND SPEND PARADOX</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    "{PROBLEMS[6].symptom}"
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-3">
                    <strong className="text-[#0B2545] dark:text-white">Root Cause:</strong> {PROBLEMS[6].rootCause}
                  </p>
                  <p className="text-xs sm:text-sm text-[#0097B2] font-semibold">
                    <strong className="text-[#0097B2]">The Growth Fix:</strong> {PROBLEMS[6].solution}
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <div className="w-full p-4 rounded-xl bg-teal-50 dark:bg-[#0097B2]/10 border border-[#0097B2]/20 text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                      Systemic Result
                    </div>
                    <div className="text-xl font-extrabold text-[#0B2545] dark:text-white">
                      100% Attribution
                    </div>
                    <div className="text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
                      Zero guesswork on your marketing spend
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Holistic Resolution Callout */}
        <div className="rounded-2xl bg-white dark:bg-[#030d18] border border-[#0097B2]/30 p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE UNIFIED DIAGNOSIS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
            We Look at the Whole Growth System.
          </h3>
          <p className="text-base text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed max-w-2xl mx-auto mb-8">
            We don't sell band-aids. We find the bottleneck, connect the dots, and engineer the complete solution across marketing, code, and sales operations.
          </p>
          <button
            onClick={onGetScore}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm transition-all shadow-md shadow-[#0097B2]/25 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Your Growth Score & Bottleneck Analysis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
