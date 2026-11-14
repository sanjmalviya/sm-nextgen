"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "@/app/components/HeroSkyBackdrop";
import {
  Wrench,
  ArrowRight,
  CheckCircle2,
  Send,
  Code,
  Palette,
  BarChart3,
  Bot,
  Search,
  PenTool,
} from "lucide-react";

const DISCIPLINES = [
  { name: "Design & UX/UI", icon: Palette, desc: "Design systems, brand guidelines, conversion wireframes and prototypes." },
  { name: "Full-Stack Development", icon: Code, desc: "Next.js, React, Tailwind CSS, API integrations and Shopify storefronts." },
  { name: "Paid Media & Ads", icon: BarChart3, desc: "Meta Ads, Google Search, YouTube Ads and performance tracking." },
  { name: "SEO & Content", icon: Search, desc: "Technical SEO audits, on-page optimization, content briefs and copywriting." },
  { name: "Automation & AI Workflows", icon: Bot, desc: "WhatsApp Cloud API, CRM integrations, Zapier/Make and AI chatbots." },
  { name: "Analytics & BI", icon: BarChart3, desc: "Google Analytics 4, Tag Manager, dashboard engineering and attribution." },
];

const WHAT_MATTERS = [
  { title: "Quality of Work", desc: "Production-grade execution that meets rigorous commercial standards." },
  { title: "Clear Communication", desc: "Proactive updates, responsiveness and adherence to milestones." },
  { title: "Reliability & Deadlines", desc: "Delivering agreed scopes on time without last-minute delays." },
  { title: "Documentation", desc: "Clean code, commented assets and clear handover notes." },
  { title: "Confidentiality", desc: "Strict adherence to NDAs protecting client data and intellectual property." },
  { title: "Clear Scope", desc: "Well-defined deliverables, milestones and compensation before work begins." },
];

const PROCESS_STEPS = [
  { step: "01", name: "Apply", desc: "Submit your portfolio, technical background and core skills." },
  { step: "02", name: "Skill & Portfolio Review", desc: "Our team evaluates your past work against project quality benchmarks." },
  { step: "03", name: "Fit Discussion", desc: "A brief conversation on availability, working style and preferred project types." },
  { step: "04", name: "Scope & Terms", desc: "Mutual agreement on project scope, milestone fees and deadlines." },
  { step: "05", name: "Project Collaboration", desc: "Collaborate directly on approved client deliverables." },
];

export function ExecutionClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    discipline: "Development",
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
        subject: `Execution Partner Application: ${formData.name} (${formData.discipline})`,
        from_name: "SM NextGen Execution Partner Intake",
        partnerType: "Execution Partner",
        ...formData,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      const msg = `Hi SM NextGen Team, I would like to join the Execution Partner Network.\nName: ${formData.name}\nDiscipline: ${formData.discipline}\nPortfolio: ${formData.portfolioUrl}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Frosted Positioning Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
              <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
                SPECIALIST EXECUTION PARTNER NETWORK
              </span>
              <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
              <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
                Design · Engineering · Media Buying
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
              Bring Your Expertise to{" "}
              <span className="text-[#0097B2]">
                Meaningful Business Projects.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed mb-8">
              We collaborate with specialists when a project needs skills that complement the wider growth plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#apply-execution"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm"
              >
                <span>Apply as an Execution Partner</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/partners"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
              >
                Back to All Partners
              </Link>
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. POTENTIAL DISCIPLINES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              SPECIALIST DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Potential Disciplines.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCIPLINES.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT MATTERS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              QUALITY STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              What Matters to Us.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_MATTERS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2 font-bold font-heading text-base text-[#0B2545] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              ONBOARDING PATHWAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Process for Collaboration.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
                <span className="text-2xl font-mono font-bold text-[#0097B2] block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-8">
            Note: We do not claim every applicant is vetted, approved or guaranteed work. Opportunities depend on active client project requirements and verified portfolio fit.
          </p>
        </div>
      </section>

      {/* 5. APPLICATION FORM */}
      <section id="apply-execution" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              JOIN THE NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-3">
              Apply as an Execution Partner
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
              Submit your portfolio and technical skills for evaluation.
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
                  Thank you for submitting your portfolio. Our team will review your work and contact you when a project matches your capabilities.
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
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
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
                      Primary Discipline *
                    </label>
                    <select
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    >
                      <option value="Design & UX/UI">Design &amp; UX/UI</option>
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="Paid Media & Ads">Paid Media &amp; Ads</option>
                      <option value="SEO & Content">SEO &amp; Content</option>
                      <option value="Automation & AI">Automation &amp; AI</option>
                      <option value="Analytics & BI">Analytics &amp; BI</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Portfolio / GitHub / Dribbble URL *
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      required
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://yourwork.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
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
                      placeholder="e.g. Udaipur / Remote IST"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Specific Tools, Frameworks &amp; Skills
                  </label>
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="e.g. Next.js 15, Tailwind, Supabase, Meta Ads Manager, Webflow"
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
                    placeholder="Briefly describe your recent projects and typical availability..."
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
                    I consent to SM NextGen reviewing my details and contacting me regarding project collaboration.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? "Submitting..." : "Apply as an Execution Partner"}</span>
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
