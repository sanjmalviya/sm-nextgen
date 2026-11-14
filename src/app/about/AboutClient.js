"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Compass,
  Layers,
  BarChart3,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  Cpu,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const PHILOSOPHY = [
  {
    num: "01",
    title: "Strategy Before Execution",
    desc: "Understand the problem before choosing the solution.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Integration Over Isolation",
    desc: "Connect marketing, technology and business systems.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Outcomes Over Activity",
    desc: "Focus on meaningful business progress, not vanity metrics.",
    icon: BarChart3,
  },
  {
    num: "04",
    title: "Systems Over Short-Term Fixes",
    desc: "Build foundations that support long-term growth.",
    icon: RefreshCw,
  },
];

const DIFFERENCE = [
  {
    title: "Business-First Thinking",
    desc: "Understand the bigger picture before taking action.",
    icon: Target,
  },
  {
    title: "Connected Capabilities",
    desc: "Bring the right expertise together around business objectives.",
    icon: Layers,
  },
  {
    title: "Technology-Enabled Growth",
    desc: "Use technology, AI and automation to build smarter systems.",
    icon: Cpu,
  },
  {
    title: "Long-Term Perspective",
    desc: "Focus on continuous improvement and sustainable progress.",
    icon: TrendingUp,
  },
];

const KEYWORDS = [
  "Strategy",
  "Marketing",
  "Technology",
  "AI",
  "Automation",
];

export default function AboutClient() {
  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Team, I would like to explore a strategic growth partnership.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* SECTION 01 — HERO WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              ABOUT SM NEXTGEN
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Strategy · Marketing · Technology · AI
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6 leading-tight">
            Business Growth Needs a{" "}
            <span className="text-[#0097B2]">
              Bigger Picture.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            We connect strategy, marketing, technology and AI to help businesses build stronger foundations and grow smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-we-work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              How We Grow
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Headquartered in Udaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Serving Growing Businesses Globally</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Senior Principal Strategy &amp; In-House Engineering</span>
            </div>
          </div>

          {/* Premium Visual Showcase Frame */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl transition-all duration-300">
            <div className="rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-900 mb-5 relative shadow-inner">
              <Image
                src="/images/Business Growth Team Meeting.png"
                alt="SM NextGen strategic business growth planning session"
                width={1600}
                height={700}
                priority
                quality={90}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <div className="text-left text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 inline-block mb-1.5">
                    Integrated Perspective
                  </span>
                  <p className="text-base sm:text-lg font-heading font-bold text-white">
                    Where Strategy, Systems &amp; Execution Connect
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase block mb-1">
                  01 · Connected Ecosystem
                </span>
                <p className="text-xs font-semibold text-[#0B2545] dark:text-white leading-tight">
                  Strategy, marketing &amp; engineering working as one unit
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase block mb-1">
                  02 · Direct Principal Touch
                </span>
                <p className="text-xs font-semibold text-[#0B2545] dark:text-white leading-tight">
                  No junior handoffs or uncoordinated agency silos
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase block mb-1">
                  03 · Revenue Impact
                </span>
                <p className="text-xs font-semibold text-[#0B2545] dark:text-white leading-tight">
                  Building compounded assets rather than vanity metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* SECTION 02 — WHO WE ARE */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
              More Than Services. A Growth Partner.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-4">
              SM NextGen is a Business Growth Partner built around one belief: every part of a business should work towards a common goal.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We bring the right capabilities together to solve challenges, create opportunities and build systems for sustainable growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {KEYWORDS.map((kw, i) => (
              <span
                key={kw}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm font-semibold text-[#0B2545] dark:text-white"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — WHY WE EXIST */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
                WHY SM NEXTGEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
                Businesses Need Solutions That Work Together.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                Managing multiple vendors and disconnected systems makes growth unnecessarily complicated.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
                We exist to bring the essential pieces together under one connected approach.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/30 text-sm sm:text-base font-bold text-[#0097B2]">
                <span>One Partner. One Direction. Connected Growth.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — OUR PHILOSOPHY */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              WHAT WE BELIEVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Growth Is the Objective. Everything Else Is a Mechanism.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                      {item.num}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW WE THINK DIFFERENTLY */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              THE SM NEXTGEN DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              We Look Beyond Individual Services.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {DIFFERENCE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
                >
                  <div className="flex items-center gap-3 font-bold font-heading text-lg text-[#0B2545] dark:text-white mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition"
            >
              <span>Explore How We Grow</span>
              <ArrowRight className="w-4 h-4 text-[#0097B2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — OUR VISION */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            WHERE WE&apos;RE HEADED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
            Building a Smarter Way for Businesses to Grow.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
            Our vision is to build a globally positioned Business Growth Partner that connects strategic thinking, modern technology and intelligent systems.
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            We want to make business growth more connected, efficient and accessible.
          </p>
        </div>
      </section>

      {/* SECTION 07 — FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
            LET&apos;S BUILD WHAT&apos;S NEXT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Your Next Chapter Starts With the Right Partner.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Let&apos;s understand your business, identify opportunities and explore the right path forward.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition cursor-pointer"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
