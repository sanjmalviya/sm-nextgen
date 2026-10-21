"use client";

import React, { useState } from "react";
import { 
  ArrowRight, CheckCircle2, MessageSquare, 
  Send, Phone, Sparkles
} from "lucide-react";

export default function FinalConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `Strategic Growth Consultation Request: ${formData.name}`,
        from_name: "SM NextGen Strategic Intake",
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
        const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Growth Consultation.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nObjective: ${formData.objective}`;
        window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Growth Consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const waMsg = "Hi SM NextGen Leadership, I would like to schedule a strategic growth consultation for my business.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  return (
    <section id="consultation" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2545] via-[#071A30] to-[#030D1A] text-white border-t border-white/10 overflow-hidden font-body">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#0097B2]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (6 Cols): Clear Invitation */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Start a Conversation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Let's Find Your Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-400 to-teal-300">
                Growth Opportunity.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Schedule a confidential growth consultation with our leadership team. We will audit your acquisition bottlenecks and outline a connected scaling roadmap.
            </p>

            <div className="space-y-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Direct session with Senior Principals (Zero junior hand-offs)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Actionable bottleneck diagnostic with zero sales pressure</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                <span>Complete commercial NDA protection for your business data</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Quick Inquiry via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column (6 Cols): Clean 4-Field Consultation Form */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you. A managing principal will review your business context and reach out within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#0097B2] hover:underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold font-heading text-white">
                      Request Consultation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your details below to schedule an introductory growth session.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      What is your core growth objective?
                    </label>
                    <textarea
                      name="objective"
                      rows={3}
                      value={formData.objective}
                      onChange={handleChange}
                      placeholder="e.g. Improve Google 3-Pack rank, lower customer acquisition costs, or rebuild web conversion funnel."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <span>Sending Details...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Guaranteed response within 4 hours. No obligation.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
