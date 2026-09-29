"use client";
import React from "react";
import Link from "next/link";
import { 
  Compass, Laptop, Bot, BarChart3, ShieldCheck, 
  ArrowRight, CheckCircle2, MessageSquare, Sparkles, 
  Clock, Award, Users 
} from "lucide-react";
import Card3DTilt from "../components/3d/Card3DTilt";

const PILLARS = [
  {
    step: "01",
    title: "Business-First Architecture",
    icon: Compass,
    tagline: "Strategy before tactics",
    desc: "We analyze your P&L, unit economics, gross margins, and CAC payback periods before deploying capital or writing code."
  },
  {
    step: "02",
    title: "Full-Stack Software Moats",
    icon: Laptop,
    tagline: "Production-grade infrastructure",
    desc: "We build sub-second Next.js web applications, headless commerce platforms, and scalable cloud architectures."
  },
  {
    step: "03",
    title: "Autonomous AI Leverage",
    icon: Bot,
    tagline: "Speed & operational efficiency",
    desc: "We deploy conversational lead qualification bots, instant CRM routing, and automated retention loops."
  },
  {
    step: "04",
    title: "Closed-Loop Attribution",
    icon: BarChart3,
    tagline: "Real financial truth",
    desc: "We track end-to-end performance from first impression to cash deposited in your bank account. Zero vanity fluff."
  }
];

const METRICS = [
  { value: "10+", label: "Years Enterprise Experience", sub: "Strategic & technical execution" },
  { value: "340+", label: "Growth Systems Deployed", sub: "For B2B, D2C, and Healthcare" },
  { value: "99.4%", label: "On-Time SLA Delivery", sub: "Rigorous milestone governance" },
  { value: "4-Hour", label: "Principal Response SLA", sub: "Direct leadership access always" },
];

export default function AboutClient() {
  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Leadership, I would like to explore a strategic growth partnership for my business.";
    window.open(`https://wa.me/919179577717?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#0B2545]/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 cols: Punchy, Authoritative Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR STRATEGIC POSITIONING</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6 leading-tight">
                We're Building <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
                  More Than An Agency.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
                SM NextGen is a high-conviction <strong>Business Growth Partner</strong>. We replace fragmented agency retainers with a unified system combining growth strategy, modern software engineering, AI automation, and closed-loop revenue attribution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0097B2]/25"
                >
                  <span>Start a Growth Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-white font-semibold text-xs tracking-wider uppercase border border-[#0B2545]/15 dark:border-white/15 hover:border-[#0097B2] transition-all cursor-pointer"
                >
                  Direct WhatsApp to Principal
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Zero Freelancer Outsourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Direct Principal Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                  <span>Strict NDA Protection</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Strategic Visual Centerpiece */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3DTilt className="p-6 sm:p-8 bg-white dark:bg-[#0B2545]/80 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl w-full max-w-md">
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4 bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 flex items-center justify-center group">
                  <img
                    src="/images/services/brand-strategy-positioning.png"
                    alt="Strategic Positioning Architecture"
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] via-[#071A30]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                    Unified Growth Architecture
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-mono font-bold uppercase text-[#0097B2] mb-1">
                    Compounding Growth Model
                  </div>
                  <p className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
                    Strategy ➔ Code ➔ AI Automation ➔ Attribution ➔ Revenue
                  </p>
                </div>
              </Card3DTilt>
            </div>

          </div>
        </div>
      </section>

      {/* 02: 4 CORE SYSTEMIC PILLARS (Visual Grid) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-4">
            How We Are Built Differently
          </h2>
          <p className="text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
            Four foundational pillars that guarantee aligned commercial incentives and sustained enterprise execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Card3DTilt
                key={p.title}
                className="p-7 bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0097B2]">
                      {p.step}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                    {p.tagline}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B2545]/10 dark:border-white/10 text-xs font-semibold text-[#0097B2]">
                  System Standard
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* 03: COMMERCIAL PERFORMANCE METRIC STRIP */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#0B2545]/10 dark:divide-white/10">
            {METRICS.map((m, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""} text-left`}>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0097B2] mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-[#0B2545] dark:text-white mb-0.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04: DIRECT PRINCIPAL ACCESS GUARANTEE (Executive Feature Box) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#071A30] to-[#040e1b] text-white p-8 sm:p-12 shadow-2xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097B2]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Executive Portrait Card (4 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative group">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#0097B2]/40 shadow-2xl shadow-[#0097B2]/20 bg-[#0B2545]">
                  <img
                    src="/images/sanjay.png"
                    alt="Sanjay Malviya — Founder & Principal Growth Strategist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Direct Principal Partner
                    </div>
                    <div className="text-lg font-bold font-heading text-white">
                      Sanjay Malviya
                    </div>
                    <div className="text-xs text-[#0097B2] font-semibold">
                      Founder & Principal Growth Strategist
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Value Proposition & CTAs (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/20 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEADERSHIP COMMITMENT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading mb-4 leading-tight">
                Direct Principal Access. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                  Zero Account Management Bloat.
                </span>
              </h3>

              <p className="text-sm sm:text-base text-[#E6EEF2]/80 leading-relaxed font-light mb-6">
                When you partner with SM NextGen, your growth roadmap, software architecture, and acquisition campaigns are engineered and directed by experienced principals. You never get passed down to junior account reps, outsourced freelancers, or telephone-game coordinators.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8 text-xs font-medium text-[#E6EEF2]/90">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>4-Hour Principal SLA Response</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Full-Stack Architecture Governance</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Weekly Executive Growth Syncs</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Strict Commercial NDA Protection</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase text-center transition-all shadow-lg shadow-[#0097B2]/30 flex items-center justify-center gap-2"
                >
                  <span>Schedule Strategic Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase text-center border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Principal Directly</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

    </main>
  );
}