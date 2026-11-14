"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "@/app/components/HeroSkyBackdrop";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Send,
  Layers,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const POTENTIAL_PARTNERS = [
  "Growth consultants & fractional leaders",
  "Digital & creative agencies",
  "Technology & engineering firms",
  "Specialist business advisors",
];

const COLLABORATION_AREAS = [
  { title: "Joint Discovery", desc: "Collaborate on understanding prospective client needs and diagnostic reviews." },
  { title: "Complementary Services", desc: "Combine specialized agency or consulting strengths with our engineering and growth systems." },
  { title: "Co-Developed Proposals", desc: "Present unified, high-conviction growth proposals to mutual enterprise clients." },
  { title: "Shared Delivery Planning", desc: "Define synchronized roadmaps, resource allocations and account governance." },
  { title: "Agreed Responsibilities", desc: "Maintain absolute clarity on client ownership, communication and deliverables." },
];

const PROCESS_STEPS = [
  { step: "01", name: "Explore Fit", desc: "Initial alignment on values, service synergy and collaboration models." },
  { step: "02", name: "Define Opportunity", desc: "Identify specific co-pitching, co-selling or joint delivery scenarios." },
  { step: "03", name: "Agree Responsibilities", desc: "Establish mutual scopes, contracts and commercial understandings." },
  { step: "04", name: "Present Plan", desc: "Deliver integrated solutions directly to client decision-makers." },
  { step: "05", name: "Deliver & Review", desc: "Execute with shared accountability and continuous progress tracking." },
];

export function GrowthClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    portfolioUrl: "",
    expertise: "",
    location: "",
    intro: "",
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
        subject: `Growth Partner Application: ${formData.company || formData.name}`,
        from_name: "SM NextGen Growth Partner Intake",
        partnerType: "Growth Partner",
        ...formData,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      const msg = `Hi SM NextGen Team, I would like to explore a Growth Partnership.\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}`;
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
                GROWTH &amp; STRATEGIC PARTNERSHIPS
              </span>
              <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
              <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
                Co-Selling · Joint Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
              Collaborate on{" "}
              <span className="text-[#0097B2]">
                Bigger Growth Opportunities.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed mb-8">
              Work together on business strategy, co-selling and complementary client opportunities where our capabilities align.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#apply-growth"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm"
              >
                <span>Explore a Growth Partnership</span>
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

      {/* 2. POTENTIAL PARTNERS & COLLABORATION AREAS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                PARTNER PROFILES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-4">
                Potential Partners
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                We team up with established practitioners to unlock larger mandates and provide end-to-end client impact:
              </p>
            </div>

            <div className="space-y-3">
              {POTENTIAL_PARTNERS.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#0B2545] dark:text-white">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
              SYNERGY AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-6">
              Collaboration Areas
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {COLLABORATION_AREAS.map((area, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
                  <h3 className="text-base font-bold font-heading text-[#0B2545] dark:text-white mb-1.5">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              PARTNERSHIP JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Process from Discovery to Delivery.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10">
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
            Important: No implied joint venture, exclusivity or revenue share without signed terms.
          </p>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section id="apply-growth" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              STRATEGIC ALLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-3">
              Explore a Growth Partnership
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
              Submit your organization details to explore co-selling and mutual capabilities.
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
                  Thank you for reaching out. A senior partner will contact you shortly to coordinate an introductory fit discussion.
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
                      Business Email *
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
                      Company / Agency Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Agency or consultancy name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Company / Portfolio Website
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://youragency.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Collaboration Areas of Interest
                  </label>
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="e.g. Co-selling, Brand & Performance, Technology Integration, Joint Pitching"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Short Overview of Your Firm
                  </label>
                  <textarea
                    name="intro"
                    rows={3}
                    value={formData.intro}
                    onChange={handleChange}
                    placeholder="Describe your capabilities, client profile and potential collaboration models..."
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
                    I consent to SM NextGen contacting me regarding growth partnership discussions.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? "Submitting..." : "Apply as a Growth Partner"}</span>
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
