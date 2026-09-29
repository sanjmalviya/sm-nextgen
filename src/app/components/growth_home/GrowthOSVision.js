"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Sparkles, Check, ArrowRight, ShieldCheck, 
  BarChart2, Zap, Bot, Database 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function GrowthOSVision() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-b border-[#0B2545]/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0097B2]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE NEXT CHAPTER • PROPRIETARY PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            What If Your Business Had a Growth Operating System?
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            We are engineering the future of enterprise acceleration: a unified intelligence platform combining real-time revenue attribution, autonomous AI agents, and predictive growth modeling.
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <Card3DTilt className="p-7 sm:p-8 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/25 flex items-center justify-center text-[#0097B2] mb-5">
                <Database className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                Module 01
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                Closed-Loop Attribution
              </h3>
              <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed">
                Connects every paid and organic touchpoint directly to bank receipts and Stripe/Razorpay invoices, killing vanity metrics forever.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 text-xs font-semibold text-[#0097B2]">
              Real-Time ROAS Truth
            </div>
          </Card3DTilt>

          <Card3DTilt className="p-7 sm:p-8 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/25 flex items-center justify-center text-[#0097B2] mb-5">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                Module 02
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                Autonomous AI Agents
              </h3>
              <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed">
                Sub-minute conversational qualification bots on WhatsApp, web chat, and email that book qualified meetings directly into sales calendars.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 text-xs font-semibold text-[#0097B2]">
              24/7 Lead Capture Engine
            </div>
          </Card3DTilt>

          <Card3DTilt className="p-7 sm:p-8 bg-white dark:bg-[#0B2545]/70 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/25 flex items-center justify-center text-[#0097B2] mb-5">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                Module 03
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                Predictive Intelligence
              </h3>
              <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed">
                Machine learning models that simulate CAC payback scenarios and recommend budget shifts before spending capital.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 text-xs font-semibold text-[#0097B2]">
              Risk-Adjusted Scaling
            </div>
          </Card3DTilt>

        </div>

        {/* Early Access Intake Box */}
        <div className="rounded-2xl bg-white dark:bg-[#030d18] border border-[#0097B2]/30 p-8 sm:p-12 shadow-xl max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIVATE ACCESS COHORT</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
            Join Growth OS Early Access
          </h3>
          <p className="text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 max-w-xl mx-auto mb-8">
            Growth OS is currently provided exclusively to active SM NextGen partner clients. Request early access for your executive team.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-[#F8FAFC] dark:bg-[#0B2545]/40 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
              >
                <span>Request Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              <span>Thank you! Your executive team has been prioritized for the next cohort.</span>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
