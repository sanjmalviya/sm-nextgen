"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, Laptop, Bot, BarChart3, ShieldCheck, 
  ArrowRight, CheckCircle2, MessageSquare, Sparkles, 
  MapPin, Clock, Award, Users 
} from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Strategy Before Tactics",
    icon: Compass,
    desc: "We analyze unit economics, customer lifetime value, and competitive positioning before recommending ad channels or writing code."
  },
  {
    step: "02",
    title: "Full-Stack Software Engineering",
    icon: Laptop,
    desc: "We build production-grade Next.js web applications, client portals, and CRO funnels engineered for sub-second load times and high conversion."
  },
  {
    step: "03",
    title: "Autonomous AI & Workflow Leverage",
    icon: Bot,
    desc: "We implement official WhatsApp Cloud API workflows, 24/7 lead qualification bots, and automated pipeline hand-offs to eliminate manual delays."
  },
  {
    step: "04",
    title: "Closed-Loop Revenue Attribution",
    icon: BarChart3,
    desc: "We measure marketing performance against real deposited bank revenue rather than vanity ad clicks or slide-deck impressions."
  }
];

const WORKING_PRINCIPLES = [
  {
    title: "Direct Founder Engagement",
    desc: "Every partnership is directed personally by our founder, Sanjay Malviya. We do not pitch with senior executives and hand execution off to junior interns."
  },
  {
    title: "100% In-House Execution",
    desc: "Our engineering, media buying, SEO, and AI workflow teams work together in-house. We maintain complete quality control across every deliverable."
  },
  {
    title: "Commercial Confidentiality",
    desc: "We operate under strict mutual non-disclosure agreements to protect your commercial strategies, customer lists, and proprietary pricing."
  },
  {
    title: "Responsive Communication SLA",
    desc: "Active growth partners have direct WhatsApp and Slack channels with our leadership team, backed by an under-4-hour response commitment during business hours."
  }
];

export default function AboutClient() {
  const handleWhatsApp = () => {
    const msg = "Hi Sanjay, I would like to explore a strategic growth partnership with SM NextGen.";
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
                We're Building <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                  A Different Kind of Growth Partner.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                SM NextGen was founded to solve the core frustration business leaders face with traditional agencies: fragmented services, vanity metrics, and a total disconnect between marketing spend and bank deposits.
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
                  WhatsApp Leadership
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Headquartered in Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Serving Clients Across India, US & UK</span>
                </div>
              </div>
            </div>

            {/* Founder Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 p-6 shadow-xl text-center">
                <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-slate-900 mb-5 shadow-inner">
                  <img
                    src="/images/sanjay.png"
                    alt="Sanjay Malviya - Founder of SM NextGen"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-transparent to-transparent opacity-75" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono text-cyan-300 font-bold bg-[#0097B2]/30 px-2 py-0.5 rounded backdrop-blur-sm">
                      Founder & Managing Principal
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Sanjay Malviya
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Growth Strategist & Software Architect
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
            Ready for a Growth Partner That Takes Full Ownership?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Schedule an introductory consultation directly with Sanjay Malviya. We will review your current systems and discuss how a connected approach can scale your business.
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
