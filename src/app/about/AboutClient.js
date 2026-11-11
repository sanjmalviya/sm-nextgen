"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Laptop,
  Bot,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Strategy Before Tactics",
    icon: Compass,
    desc: "Unit economics, offers, and positioning validated before spending ad capital.",
  },
  {
    step: "02",
    title: "Full-Stack Web Engineering",
    icon: Laptop,
    desc: "Sub-second Next.js websites and CRO funnels built for higher conversion.",
  },
  {
    step: "03",
    title: "AI & Workflow Automation",
    icon: Bot,
    desc: "WhatsApp Cloud API and 24/7 lead qualification that stop manual delays.",
  },
  {
    step: "04",
    title: "Closed-Loop Attribution",
    icon: BarChart3,
    desc: "Every channel measured against real qualified pipeline and revenue.",
  },
];

const WORKING_PRINCIPLES = [
  {
    title: "Senior Leadership Execution",
    desc: "Your growth roadmap is directed and executed by senior strategists and engineers—never handed off to junior interns.",
  },
  {
    title: "100% In-House Team",
    desc: "Engineering, performance media, SEO, and AI automation specialists collaborate under one roof.",
  },
  {
    title: "Commercial Confidentiality",
    desc: "Strict mutual NDAs safeguard your strategies, customer records, and commercial data.",
  },
  {
    title: "4-Hour Communication SLA",
    desc: "Dedicated WhatsApp and Slack channels backed by an under-4-hour response commitment.",
  },
];

export default function AboutClient() {
  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Team, I would like to explore a strategic growth partnership.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 01: HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#071A30] dark:to-[#030D1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-4">
                About SM NextGen
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6 leading-tight">
                A Connected Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                  Measurable Growth.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                SM NextGen replaces fragmented retainers and vanity reporting with one unified system spanning strategy, web engineering, demand, AI, and revenue analytics.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <span>Start a Growth Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition cursor-pointer"
                >
                  WhatsApp Our Team
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Headquartered in Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Serving Clients Across India, US &amp; UK</span>
                </div>
              </div>
            </div>

            {/* Agency Partnership Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 p-5 shadow-xl">
                <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-4 shadow-inner">
                  <Image
                    src="/images/Business Growth Team Meeting.png"
                    alt="SM NextGen cross-functional strategy, engineering, and marketing team collaborating on business growth"
                    width={1672}
                    height={941}
                    quality={85}
                    sizes="(max-width: 1024px) 95vw, 440px"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white">
                  SM NextGen Advisory &amp; Engineering
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  In-House Strategists, Marketers, Developers &amp; AI Specialists
                </p>
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0097B2]" /> Udaipur, India
                  </span>
                  <a href="tel:+917073538077" className="font-bold text-[#0097B2] hover:underline">
                    +91 70735 38077
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: THE 4 ARCHITECTURAL PILLARS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              How We Think
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Four Non-Negotiable Tenets of Our Growth Architecture.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                      TENET {p.step}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03: WORKING COMMITMENTS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              Client Relationship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Our Commitments to Every Client Partner.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {WORKING_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
              >
                <div className="flex items-center gap-2.5 font-bold font-heading text-base text-[#0B2545] dark:text-white mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>{principle.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed pl-6.5">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: CLOSING INTAKE CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Ready for a Growth Partner With Complete Accountability?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Schedule an introductory consultation with our senior growth team to audit your funnel and map your next growth stage.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
