"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Users,
  TrendingUp,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Send,
  ShieldCheck,
  ChevronRight,
  Handshake,
} from "lucide-react";

const PARTNER_PATHS = [
  {
    id: "referral",
    title: "Referral Partners",
    desc: "Introduce businesses that may benefit from our services through a transparent referral process.",
    href: "/partners/referral",
    icon: Users,
    cta: "Explore Referral Program",
    who: "Consultants, accountants, advisors and connectors.",
  },
  {
    id: "growth",
    title: "Growth Partners",
    desc: "Collaborate on strategy, co-selling and joint opportunities where our capabilities align.",
    href: "/partners/growth",
    icon: TrendingUp,
    cta: "Explore Growth Partnership",
    who: "Agencies, tech firms and growth consultants.",
  },
  {
    id: "execution",
    title: "Execution Partners",
    desc: "Contribute specialist skills to approved client projects that complement the wider growth plan.",
    href: "/partners/execution",
    icon: Wrench,
    cta: "Join Execution Network",
    who: "Designers, developers, media buyers and automation specialists.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", name: "Apply", desc: "Share your background, expertise and how you'd like to collaborate." },
  { step: "02", name: "Discuss Fit", desc: "An introductory conversation to align on capabilities, standards and working style." },
  { step: "03", name: "Agree Terms", desc: "Formalize commercial terms, scopes and responsibilities with written agreements." },
  { step: "04", name: "Collaborate", desc: "Work together on approved client projects or client introductions." },
  { step: "05", name: "Review", desc: "Regular feedback and reviews to strengthen the ongoing partnership." },
];

export function PartnerClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    partnerType: "Referral Partner",
    expertise: "",
    location: "",
    intro: "",
    portfolioLinks: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.consent) return;
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `Partner Application: ${formData.name} (${formData.partnerType})`,
        from_name: "SM NextGen Partner Application",
        ...formData,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      const msg = `Hi SM NextGen Team, I would like to apply as a ${formData.partnerType}.\nName: ${formData.name}\nPhone: ${formData.phone}\nExpertise: ${formData.expertise}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              SM NEXTGEN PARTNER ECOSYSTEM
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Referral · Growth · Execution Tracks
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Build Better Business{" "}
            <span className="text-[#0097B2]">
              Opportunities Together.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Connect your expertise, relationships or specialist capabilities with SM NextGen&apos;s business growth approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href="#apply"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Apply to Partner</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#paths"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Explore Partner Paths
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Fair Commercial Terms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Direct Principal Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Long-Term Strategic Synergy</span>
            </div>
          </div>

          {/* Premium Partnership Pathways Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Collaborative Model
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Three Dedicated Partnership Streams
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                Open Cohorts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {[
                { n: "01", t: "Referral Partners", d: "Introduce growing businesses & earn structured commission", l: "/partners/referral" },
                { n: "02", t: "Growth Partners", d: "Co-sell strategic solutions & joint venture opportunities", l: "/partners/growth" },
                { n: "03", t: "Execution Partners", d: "Specialist engineers, creators & performance media buyers", l: "/partners/execution" },
              ].map((p) => (
                <Link
                  key={p.n}
                  href={p.l}
                  className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group block"
                >
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] block mb-1">
                    Track {p.n}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                    {p.t}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {p.d}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. THREE PARTNER PATHS */}
      <section id="paths" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              PARTNER PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Three Ways to Collaborate.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PARTNER_PATHS.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.id}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-4">
                      {path.desc}
                    </p>
                    <div className="p-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 mb-6">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Who it&apos;s for:</span> {path.who}
                    </div>
                  </div>

                  <Link
                    href={path.href}
                    className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    <span>{path.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              COLLABORATION FLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
              How It Works.
            </h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#0097B2]">
              <span>Apply</span>
              <span className="text-slate-400">→</span>
              <span>Discuss Fit</span>
              <span className="text-slate-400">→</span>
              <span>Agree Terms</span>
              <span className="text-slate-400">→</span>
              <span>Collaborate</span>
              <span className="text-slate-400">→</span>
              <span>Review</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-2xl font-mono font-bold text-[#0097B2] block mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section id="apply" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              JOIN THE NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-3">
              Partner Application
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
              Submit your details to discuss fit with the SM NextGen partner ecosystem.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Application Received
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                  Thank you for your interest. We will review your application and reach out to schedule an introductory discussion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Business / Professional Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Company / Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://yourwork.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Partner Type *
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    >
                      <option value="Referral Partner">Referral Partner</option>
                      <option value="Growth Partner">Growth Partner</option>
                      <option value="Execution Partner">Execution Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Primary Expertise *
                    </label>
                    <input
                      type="text"
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleChange}
                      placeholder="e.g. B2B Strategy, Performance Ads, Next.js, SEO"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Location / Time Zone
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Udaipur, India / IST"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Short Introduction
                  </label>
                  <textarea
                    name="intro"
                    rows={3}
                    value={formData.intro}
                    onChange={handleChange}
                    placeholder="Briefly describe your business, client network, or execution background..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Relevant Portfolio Links
                  </label>
                  <input
                    type="text"
                    name="portfolioLinks"
                    value={formData.portfolioLinks}
                    onChange={handleChange}
                    placeholder="Github, Figma, Behance, or client references..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-[#0097B2] accent-[#0097B2] mt-0.5"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                    I consent to SM NextGen contacting me regarding this partnership application in accordance with the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? "Submitting..." : "Submit Partner Application"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
