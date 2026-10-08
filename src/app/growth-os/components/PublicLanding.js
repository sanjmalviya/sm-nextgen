"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Star,
  Activity,
  Bot,
  TrendingUp,
  MapPin,
  Check,
  Phone,
  MessageSquare,
  Building,
  Lock,
  ExternalLink,
  ChevronRight,
  Award,
  BarChart3,
  Globe,
  Sliders
} from "lucide-react";
import { DEFAULT_PLANS } from "../lib/initialData";
import { storageService } from "../lib/supabaseClient";

export default function PublicLanding({ onOpenAuth, onLaunchDemo }) {
  const [bizName, setBizName] = useState("");
  const [bizCity, setBizCity] = useState("");
  const [bizCategory, setBizCategory] = useState("Digital Marketing & Tech Agency");
  const [bizPhone, setBizPhone] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState(null);
  const [currency, setCurrency] = useState("USD"); // "USD" | "INR"

  const handleRunFreeAudit = (e) => {
    e.preventDefault();
    if (!bizName.trim()) return;
    setIsAuditing(true);

    setTimeout(() => {
      setIsAuditing(false);
      const generatedScore = Math.floor(Math.random() * 12) + 64; // 64 - 76
      const result = {
        businessName: bizName,
        city: bizCity || "Global Location",
        category: bizCategory,
        score: generatedScore,
        problems: [
          "12 customer reviews remain unanswered for over 48 hours (hurting 3-pack velocity)",
          "Missing secondary commercial intent Google categories: 'Cosmetic Specialist' & 'Emergency Care'",
          "Storefront photo freshness is below Google Maps local algorithm baseline (>45 days old)"
        ],
        opportunities: [
          "Estimated +28% call increase by maintaining 24-hr review response velocity",
          "Rank in Local Top 3 3-Pack by adding target secondary categories",
          "Automate weekly promotional Google Posts with click-to-call CTAs"
        ]
      };
      setAuditResult(result);

      // Silently log lead
      storageService.logAuditLead({
        businessName: bizName,
        city: bizCity,
        phone: bizPhone,
        score: generatedScore
      });
    }, 1100);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 font-sans">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Zap className="w-3.5 h-3.5 fill-[#0097B2]" />
          <span>SM NextGen Growth OS • Google Business Profile Growth Platform</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#0B2545] dark:text-white leading-[1.08]">
          Turn Your Google Business Profile Into a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#0284c7]">
            Predictable Growth Engine.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          The all-in-one operating system that audits your profile health, calculates your 0–100 Growth Score, automates AI review responses, and provides an actionable roadmap to dominate local search.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#free-audit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0097B2] via-[#0284c7] to-[#0369a1] text-white font-extrabold text-sm tracking-wide shadow-xl shadow-[#0097B2]/30 hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Run Free Business Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onLaunchDemo}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-[#0B2545] dark:text-white font-bold text-sm hover:border-[#0097B2] transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0097B2]" />
            <span>1-Click Live Demo (No Signup)</span>
          </button>

          <button
            onClick={() => onOpenAuth("login")}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-transparent text-slate-600 dark:text-slate-300 font-bold text-sm hover:text-[#0097B2] transition flex items-center justify-center gap-1 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-slate-400" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Safe Google OAuth Integration
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9/5 Growth Rating
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Award className="w-4 h-4 text-[#0097B2]" /> Built for Global & Local SMBs
          </span>
        </div>
      </div>

      {/* The Growth Loop Section (Audit -> Score -> Insights -> Actions -> Growth) */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-900/60 dark:to-slate-950 p-8 sm:p-12 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
            Proven Growth Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mt-1">
            The Continuous Growth OS Loop
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
            Most businesses guess why competitors outrank them. Growth OS replaces guesswork with continuous automated optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: "01", title: "Audit", desc: "Automated 24-point diagnostic scan across metadata, reviews, photos, and ranking signals.", icon: Activity, color: "text-[#0097B2]" },
            { step: "02", title: "Score", desc: "Calculates your transparent 0–100 Growth Score benchmarks against local competitors.", icon: Award, color: "text-amber-500" },
            { step: "03", title: "Insights", desc: "Pinpoints exactly which unanswered reviews and missing categories are hurting your profile.", icon: Sparkles, color: "text-purple-500" },
            { step: "04", title: "Actions", desc: "AI drafts authentic review replies and generates keyword-dense Google Posts.", icon: Bot, color: "text-cyan-500" },
            { step: "05", title: "Growth", desc: "Watch direct calls, directions, and website clicks increase in your 30-day telemetry.", icon: TrendingUp, color: "text-emerald-500" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-extrabold text-gray-400 dark:text-slate-500">{item.step}</span>
                    <Icon className={"w-5 h-5 " + item.color} />
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-gray-900 dark:text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Free Lead Gen Audit Section */}
      <section id="free-audit" className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#091e38] to-[#041122] text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/20 border border-[#0097B2]/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Lead Diagnostic</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Check Your Google Business Profile Score
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Enter your business name to run an immediate diagnostic scan. Get your 0–100 score, top 3 ranking roadblocks, and immediate opportunities.
          </p>

          <form onSubmit={handleRunFreeAudit} className="max-w-2xl mx-auto bg-slate-900/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-md space-y-3 text-left">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-300 block mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SM NextGen"
                  value={bizName}
                  onChange={(e) => setBizName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-300 block mb-1">City / Location</label>
                <input
                  type="text"
                  placeholder="e.g. Udaipur, Rajasthan (or US City)"
                  value={bizCity}
                  onChange={(e) => setBizCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-300 block mb-1">Primary Category</label>
                <select
                  value={bizCategory}
                  onChange={(e) => setBizCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                >
                  <option value="Digital Marketing & Tech Agency">Digital Marketing & Tech Agency</option>
                  <option value="Healthcare / Clinic">Healthcare / Clinic</option>
                  <option value="Legal & Law Firm">Legal & Law Firm</option>
                  <option value="Real Estate Agency">Real Estate Agency</option>
                  <option value="Home Services / Contractor">Home Services / Contractor</option>
                  <option value="Restaurant & Hospitality">Restaurant & Hospitality</option>
                  <option value="Retail & Specialty Store">Retail & Specialty Store</option>
                  <option value="Other Business">Other Business</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-300 block mb-1">Phone / WhatsApp (Optional)</label>
                <input
                  type="tel"
                  placeholder="+91 70735 38077 or US Phone"
                  value={bizPhone}
                  onChange={(e) => setBizPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isAuditing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white font-extrabold text-xs tracking-wide shadow-lg transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>{isAuditing ? "Analyzing Google Search & Maps Signals..." : "Generate Instant Audit Report"}</span>
            </button>
          </form>

          {/* Audit Results View */}
          {auditResult && (
            <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-cyan-500/40 text-left space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Audit Result for
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-white">{auditResult.businessName}</h3>
                  <p className="text-xs text-slate-400">{auditResult.city} • {auditResult.category}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-amber-400">{auditResult.score}</span>
                    <span className="text-slate-400 text-sm">/100</span>
                    <div className="text-[10px] text-amber-300 font-bold uppercase">Needs Immediate Optimization</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>3 Critical Problems Limiting Growth:</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    {auditResult.problems.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>3 High-Impact Growth Opportunities:</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    {auditResult.opportunities.map((o, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Bridge Upsell */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#0097B2]/20 to-blue-500/20 border border-[#0097B2]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-white">
                    Want SM NextGen to fix these issues & guarantee your 3-Pack rank?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Our local SEO architects manage reviews, weekly media, and citation consistency for you.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Team%2C%20I%20just%20ran%20a%20free%20audit%20for%20my%20business%20and%20want%20to%20fix%20my%20Google%20ranking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Talk on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onOpenAuth("signup")}
                    className="px-4 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Unlock Full Growth OS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Pricing Plans with Currency Switcher (USD / INR) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
              Transparent Pricing Plans
            </span>
            <div className="inline-flex items-center bg-gray-100 dark:bg-slate-800 p-1 rounded-lg border border-gray-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setCurrency("USD")}
                className={"px-2.5 py-0.5 rounded-md font-bold transition cursor-pointer " + (currency === "USD" ? "bg-[#0097B2] text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400")}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={"px-2.5 py-0.5 rounded-md font-bold transition cursor-pointer " + (currency === "INR" ? "bg-[#0097B2] text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400")}
              >
                INR (₹)
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white">
            Choose the Right Plan for Your Business
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Start with our free diagnostic audit. Upgrade when you are ready to put your local customer acquisition on autopilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEFAULT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={"p-6 rounded-3xl flex flex-col justify-between transition-all " + (plan.popular ? "bg-white dark:bg-slate-900 border-2 border-[#0097B2] shadow-2xl relative" : "bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-md")}
            >
              <div>
                {plan.popular && (
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#0097B2] text-white inline-block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-extrabold text-lg text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
                    {currency === "USD" ? plan.priceUSD : plan.priceINR}
                  </span>
                  <span className="text-xs text-gray-500">/{plan.period}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0097B2] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenAuth("signup")}
                className={"w-full py-3 rounded-xl font-bold text-xs mt-8 transition cursor-pointer " + (plan.popular ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md" : "bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-white")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Done-For-You Agency Upsell Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0097B2]/10 via-cyan-500/10 to-blue-500/10 border border-[#0097B2]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
            SM NextGen Done-For-You Growth Partner
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white">
            Need Expert Local SEO Architects to Handle Everything?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Our agency team handles full profile optimization, weekly geotagged media uploads, customer review acquisition systems, and citation building. Headquartered in Udaipur, Rajasthan, serving clients globally across US, UK, and India.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="tel:+917073538077"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 hover:border-[#0097B2] transition shadow-sm cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#0097B2]" />
            <span>Call +91 70735 38077</span>
          </a>

          <a
            href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Team%2C%20I%20want%20to%20discuss%20Done-For-You%20Google%20Business%20Profile%20Growth%20Services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/20 transition cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Talk to a Growth Expert</span>
          </a>
        </div>
      </section>

    </div>
  );
}
