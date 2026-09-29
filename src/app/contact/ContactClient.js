"use client";
import React, { useState, useEffect } from "react";
import { 
  MessageSquare, Clock, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, Mail, Sparkles, Building2, Send 
} from "lucide-react";
import Card3DTilt from "../components/3d/Card3DTilt";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    engagement: "Growth Diagnostic & Audit",
    revenue: "₹5L – ₹25 Lakhs / mo",
    challenge: "High CAC / Low Ad ROI",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const engParam = urlParams.get("engagement");
    const caseParam = urlParams.get("case");

    if (engParam) {
      setFormData((prev) => ({ ...prev, engagement: engParam }));
    }
    if (caseParam) {
      setFormData((prev) => ({ 
        ...prev, 
        message: `Inquiring regarding case blueprint: ${caseParam}` 
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `New Strategic Growth Inquiry: ${formData.company || formData.name}`,
        from_name: "SM NextGen Growth Intake",
        ...formData
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const waMsg = `Hi SM NextGen Leadership, I want to schedule a Strategic Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nEngagement: ${formData.engagement}\nRevenue: ${formData.revenue}\nPhone: ${formData.phone}`;
        window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Leadership, I want to schedule a Strategic Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppVIP = () => {
    const waMsg = `Hi SM NextGen Leadership, I would like to schedule a priority Growth Consultation with a Managing Principal.\n\nCompany: ${formData.company || "N/A"}\nRevenue: ${formData.revenue}`;
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#0B2545]/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE INTAKE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6">
            Let's Find Your Next <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Growth Opportunity.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#0B2545]/75 dark:text-[#E6EEF2]/75 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Schedule an executive growth audit. We'll analyze your current acquisition engine, identify revenue bottlenecks, and map your 12-month compounding growth architecture.
          </p>
        </div>
      </section>

      {/* 02: INTAKE & DIRECT CONTACT GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Principal Engagement & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#0097B2]/15 border border-[#0097B2]/30 flex items-center justify-center text-[#0097B2] shadow-sm shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Advisory Desk Active
                  </div>
                  <div className="font-bold text-[#0B2545] dark:text-white text-base font-heading">
                    Growth Advisory Team
                  </div>
                  <div className="text-xs text-[#0097B2] font-semibold">
                    Direct Consultation & Technical Scoping
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                Work Directly With Growth Experts
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 leading-relaxed mb-5 font-light">
                Every consultation connects you directly with experienced growth strategists and full-stack architects. No sales pressure, no junior reps.
              </p>

              <div className="space-y-3.5 border-t border-[#0B2545]/10 dark:border-white/10 pt-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                  <Clock className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Guaranteed Response Within 4 Business Hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                  <ShieldCheck className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Mutual Non-Disclosure Agreement (NDA) Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Clear Actionable Roadmap • Zero Aggressive Selling</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Priority Card */}
            <div className="p-7 rounded-2xl bg-teal-50/60 dark:bg-[#0097B2]/10 border border-[#0097B2]/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Priority WhatsApp Channel</span>
              </div>
              <p className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-5 leading-relaxed">
                Need urgent project consultation or direct advice? Connect with our growth desk directly on WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppVIP}
                className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
              >
                <span>Connect on WhatsApp (+91 70735 38077)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Official Contact Channels Card */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/60 border border-[#0B2545]/10 dark:border-white/10 text-xs text-[#0B2545]/80 dark:text-[#E6EEF2]/80 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0B2545]/10 dark:border-white/10 font-bold uppercase tracking-wider text-[11px] text-[#0097B2]">
                <span>Official Contact Details</span>
                <span className="text-emerald-500 font-mono">Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#0B2545]/70 dark:text-gray-400">Primary Phone:</span>
                <a href="tel:+917073538077" className="font-bold text-[#0097B2] hover:underline">+91 70735 38077</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#0B2545]/70 dark:text-gray-400">Email Support:</span>
                <a href="mailto:info@smnextgen.com" className="font-bold text-[#0097B2] hover:underline">info@smnextgen.com</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#0B2545]/70 dark:text-gray-400">Corporate Location:</span>
                <span className="font-medium text-[#0B2545] dark:text-white">Indore, MP, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card3DTilt className="p-8 sm:p-10 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 70735 38077"
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Company Name & Website
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp (acme.com)"
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Preferred Engagement Model
                      </label>
                      <select
                        name="engagement"
                        value={formData.engagement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="Growth Diagnostic & Audit">Growth Diagnostic & Audit (2 Weeks)</option>
                        <option value="Growth Project Sprint">Growth Project Sprint (4–8 Weeks)</option>
                        <option value="Comprehensive Growth Partnership">Comprehensive Growth Partnership (Retained)</option>
                        <option value="Enterprise Growth Systems">Enterprise Growth Systems (Full-Stack)</option>
                        <option value="Custom Executive Advisory">Custom Executive Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Monthly Revenue Range
                      </label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="Under ₹5 Lakhs / mo">Under ₹5 Lakhs / mo</option>
                        <option value="₹5L – ₹25 Lakhs / mo">₹5L – ₹25 Lakhs / mo</option>
                        <option value="₹25L – ₹1 Crore / mo">₹25L – ₹1 Crore / mo</option>
                        <option value="₹1 Crore+ / mo">₹1 Crore+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                      Tell Us About Your Growth Objectives
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you are looking to solve or scale in the next 6-12 months..."
                      className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0097B2]/25 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Request Executive Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 max-w-md mx-auto mb-6">
                    An SM NextGen Managing Principal is reviewing your company details and will reach out within 4 business hours to coordinate your diagnostic session.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0097B2] font-semibold hover:underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </Card3DTilt>
          </div>

        </div>
      </section>

    </main>
  );
}