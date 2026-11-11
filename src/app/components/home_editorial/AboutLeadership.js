"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export default function AboutLeadership({ onStartConversation }) {
  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Team, I would like to explore a strategic growth partnership for my business.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const GUARANTEES = [
    {
      title: "4-Hour SLA Response",
      desc: "Direct WhatsApp & Slack channels with under-4-hour turnaround.",
    },
    {
      title: "100% In-House Team",
      desc: "Code, campaigns, analytics, and AI automations built directly by our specialists.",
    },
    {
      title: "Closed-Loop Attribution",
      desc: "Performance measured against qualified pipeline and revenue—not vanity clicks.",
    },
    {
      title: "Strict Commercial NDA",
      desc: "Your data, strategy, and customer lists remain 100% confidential.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-subheading font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Partnership &amp; Execution Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4 leading-tight">
            Senior Operators.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
              Zero Junior Handoffs.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Your growth roadmap, web platform, ads, and automations are directed and built by experienced specialists under clear commercial discipline.
          </p>
        </div>

        {/* Partnership & Team Trust Visual Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-3xl bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100">
              <Image
                src="/images/Analytics Meeting in a Modern Office.png"
                alt="Strategic growth advisor reviewing live business performance analytics with a client in a modern glass office"
                width={1672}
                height={941}
                quality={85}
                sizes="(max-width: 768px) 100vw, 580px"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-4 px-1">
              <span className="text-[11px] font-subheading font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
                Strategic Partnership
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                Collaborative Advisory &amp; Data Reviews
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Regular 1-on-1 strategy sessions translating marketing signals into clear growth decisions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100">
              <Image
                src="/images/Business Growth Team Meeting.png"
                alt="In-house SM NextGen cross-functional team collaborating around laptops and Business Growth analytics display"
                width={1672}
                height={941}
                quality={85}
                sizes="(max-width: 768px) 100vw, 580px"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-4 px-1">
              <span className="text-[11px] font-subheading font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
                Execution Trust
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                Cross-Functional In-House Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Strategists, developers, marketers, and AI engineers delivering together under one roof.
              </p>
            </div>
          </div>
        </div>

        {/* Compact 4-Card Guarantee Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-[#0B2545] dark:text-white font-subheading">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>{g.title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onStartConversation}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/20 transition cursor-pointer"
          >
            <span>Schedule Strategic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-subheading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/15 transition cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp Growth Team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
