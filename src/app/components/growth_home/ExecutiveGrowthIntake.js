"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, MessageSquare, Phone, Mail, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, Sparkles 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function ExecutiveGrowthIntake({ prefillData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    revenue: prefillData?.revenue || "₹5L – ₹25 Lakhs / mo",
    challenge: prefillData?.bottleneck || "High CAC / Low Ad ROI",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `New Executive Growth Consultation Request: ${formData.company || formData.name}`,
        from_name: "SM NextGen Growth Portal",
        ...formData,
        diagnosticScore: prefillData?.score || "N/A"
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback to WhatsApp
        const waMsg = `Hi SM NextGen Team, I would like to schedule an Executive Growth Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nRevenue: ${formData.revenue}\nChallenge: ${formData.challenge}\nPhone: ${formData.phone}`;
        window.open(`https://wa.me/919179577717?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Team, I would like to schedule an Executive Growth Consultation.\nName: ${formData.name}\nPhone: ${formData.phone}`;
      window.open(`https://wa.me/919179577717?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppPriority = () => {
    const waMsg = `Hi SM NextGen Team, I would like to schedule a priority Growth Consultation with a Managing Principal.\n\nCompany: ${formData.company || "N/A"}\nRevenue Bracket: ${formData.revenue}`;
    window.open(`https://wa.me/919179577717?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START THE CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Let's Find Your Next Growth Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Schedule an executive growth audit. We'll analyze your current acquisition engine, identify revenue bottlenecks, and map your 12-month compounding growth architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Principal Engagement & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/80 border border-[#0B2545]/10 dark:border-white/10">
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                Direct Principal Engagement
              </h3>
              <p className="text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 leading-relaxed mb-6">
                You will never be handed off to a junior account rep or sales coordinator. Every growth consultation is led directly by an SM NextGen principal strategist and systems architect.
              </p>

              <div className="space-y-3.5 border-t border-[#0B2545]/10 dark:border-white/10 pt-5">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
                  <Clock className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Guaranteed Response Within 4 Business Hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
                  <ShieldCheck className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Strict Non-Disclosure & Commercial Confidentiality</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>No Sales Pressure • Honest Diagnostic Value</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp VIP Button */}
            <div className="p-6 rounded-2xl bg-teal-50/50 dark:bg-[#0097B2]/10 border border-[#0097B2]/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Priority WhatsApp Channel</span>
              </div>
              <p className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-4">
                Need immediate principal feedback or urgent project consultation? Chat directly with our leadership team on WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppPriority}
                className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
              >
                <span>Connect via WhatsApp Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 px-2">
              Corporate Office: Indore, Madhya Pradesh, India • Global Operations
            </div>

          </div>

          {/* Right Column: High-Converting Intake Form (7 cols) */}
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
                        placeholder="e.g. Sanjeev Malviya"
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
                        placeholder="+91 91795 77717"
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
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                        Primary Growth Objective
                      </label>
                      <select
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="High CAC / Low Ad ROI">High CAC / Low Ad ROI</option>
                        <option value="Traffic Doesn't Convert">Traffic Doesn't Convert (Need CRO)</option>
                        <option value="Need Custom Web/App & Tech Stack">Need Custom Web/App & Tech Stack</option>
                        <option value="AI Automation & CRM Integration">AI Automation & CRM Integration</option>
                        <option value="Full Comprehensive Growth Partner">Full Comprehensive Growth Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-1.5">
                      Tell Us About Your Business & Current Objectives
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you are looking to achieve in the next 6-12 months..."
                      className="w-full px-4 py-3 rounded-xl border border-[#0B2545]/15 dark:border-white/15 bg-white dark:bg-[#0B2545]/50 text-[#0B2545] dark:text-white text-sm focus:outline-none focus:border-[#0097B2]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0097B2]/25 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Request Executive Growth Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 max-w-md mx-auto mb-6">
                    An SM NextGen Managing Principal is reviewing your business details and will reach out within 4 business hours to coordinate your diagnostic session.
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

      </div>

    </section>
  );
}
