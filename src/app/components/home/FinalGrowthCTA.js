"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Mail, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalGrowthCTA({ onOpenAudit, auditData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    growthStage: "Scaling ($100k-$1M ARR / ₹10L-₹1Cr)",
    biggestChallenge: "Acquisition & Qualified Pipeline",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit via Web3Forms
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
          subject: "🔥 High-Intent Growth Conversation Request (SM NextGen)",
          from_name: "SM NextGen Strategic Portal",
          "Executive Name": formData.name,
          "Corporate Email": formData.email,
          "WhatsApp Phone": formData.phone,
          "Business Name": formData.business,
          "Website URL": formData.website,
          "Growth Stage": formData.growthStage,
          "Primary Bottleneck": formData.biggestChallenge,
          "Executive Notes": formData.message || "Requested 30-minute growth diagnostic session.",
          "Diagnostic Score Telemetry": auditData ? `Composite Score: ${auditData.overallScore}/100 | Bottleneck: ${auditData.lowestCategory?.fullName}` : "Direct Intake"
        })
      });

      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
      setIsSubmitted(true);

      // 2. Redirect to WhatsApp
      const waMsg = `*Strategic Growth Conversation Request* 🚀\n\n*Name:* ${formData.name}\n*Company:* ${formData.business}\n*Website:* ${formData.website || 'N/A'}\n*Phone:* ${formData.phone}\n*Primary Constraint:* ${formData.biggestChallenge}\n*Stage:* ${formData.growthStage}\n\nPlease review my business telemetry and schedule our discovery session.`;
      
      setTimeout(() => {
        window.open(`https://wa.me/919179577717?text=${encodeURIComponent(waMsg)}`, "_blank");
      }, 1200);

    } catch (err) {
      console.error("Submission error:", err);
      // Fallback directly to WhatsApp
      const fallbackMsg = `Hi SM NextGen, I would like to schedule a Strategic Growth Conversation for ${formData.business || 'my business'}. Name: ${formData.name} | Phone: ${formData.phone}`;
      window.open(`https://wa.me/919179577717?text=${encodeURIComponent(fallbackMsg)}`, "_blank");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="growth-conversation" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/10">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0097B2]/12 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Trust */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block">
              Executive Engagement
            </span>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-[1.15]">
              Ready to Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Growth Engine?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#E6EEF2]/80 leading-relaxed font-light">
              Let&apos;s identify what is currently holding your business back—and build the strategy, technology, and execution systems to move it forward predictably.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]/90">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>30-minute high-level growth architecture & constraint diagnosis.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]/90">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>Zero sales pressure or generic agency pitches. Real unit economics talk.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6EEF2]/90">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>Actionable 90-day roadmap whether you partner with us or not.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-white/50">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#0097B2]" /> info@smnextgen.com</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#0097B2]" /> +91 70735 38077</span>
            </div>
          </div>

          {/* Right Column: High-Conversion Strategic Intake Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-white">Start a Growth Conversation</h3>
                    <p className="text-xs text-[#E6EEF2]/60 mt-1">
                      Fill in your business details below to initiate your strategic roadmap session.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Corporate Email *</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">WhatsApp Phone *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Company / Brand Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Current Growth Stage</label>
                      <select 
                        value={formData.growthStage}
                        onChange={(e) => setFormData({ ...formData, growthStage: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B2545] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0097B2] transition"
                      >
                        <option value="Early-Stage ($10k-$100k ARR)">Early-Stage (&lt; ₹25 Lakhs / $50K)</option>
                        <option value="Scaling ($100k-$1M ARR)">Scaling (₹25L – ₹2 Cr / $50k–$250k)</option>
                        <option value="Expansion ($1M-$5M+ ARR)">Expansion (₹2 Cr – ₹10 Cr+ / $1M+)</option>
                        <option value="Enterprise / Large SME">Established Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Biggest Constraint</label>
                      <select 
                        value={formData.biggestChallenge}
                        onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B2545] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0097B2] transition"
                      >
                        <option value="Customer Acquisition & High CAC">Customer Acquisition & High CAC</option>
                        <option value="Friction in Conversion & Low Yield">Conversion & Funnel Leaks</option>
                        <option value="Outdated Brand & Pricing Power">Weak Brand Authority / Positioning</option>
                        <option value="Manual Ops & Lack of Automation">Manual Ops & Disconnected CRM</option>
                        <option value="Complete Growth Engine Overhaul">Complete Growth Engine Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1 uppercase tracking-wider">Website or Pitch Deck URL (Optional)</label>
                    <input 
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0097B2] transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,151,178,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isSubmitting ? "Transmitting Telemetry..." : "Start My Growth Conversation →"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Diagnostic Request Received</h3>
                  <p className="text-sm text-[#E6EEF2]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our Growth Partners have received your business telemetry and are redirecting you to our executive WhatsApp channel for immediate scheduling.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono text-[#0097B2] hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
