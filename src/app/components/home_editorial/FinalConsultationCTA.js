"use client";
import React, { useState } from "react";
import { 
  ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, 
  Send, Phone, Sparkles, Clock, Check
} from "lucide-react";

export default function FinalConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "₹5L – ₹25 Lakhs / mo",
    primaryGoal: "Google Maps 3-Pack & Local SEO",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `New Growth Consultation Request: ${formData.company || formData.name}`,
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
        const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Growth Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nRevenue: ${formData.revenue}\nGoal: ${formData.primaryGoal}\nPhone: ${formData.phone}`;
        window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Growth Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const waMsg = "Hi SM NextGen Leadership, I would like to schedule a strategic consultation for my business.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  return (
    <section id="consultation" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2545] via-[#071A30] to-[#030D1A] text-white border-t border-white/10 overflow-hidden font-body">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#0097B2]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols): Bold Invitation & Trust */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/20 border border-[#0097B2]/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START YOUR ENGAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready to Build a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-400 to-teal-300">
                Connected Growth System?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Book a 45-minute confidential growth consultation with our managing principals. We'll audit your current funnel, diagnose customer acquisition bottlenecks, and map your 12-month scaling architecture.
            </p>

            {/* Credibility List */}
            <div className="space-y-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>Direct session with Managing Principals (No sales reps)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>Actionable growth diagnostic and unit economics audit</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0" />
                <span>Strict commercial non-disclosure agreement protection</span>
              </div>
            </div>

            {/* Alternative Direct WhatsApp Route */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-400">Prefer instant messaging?</span>
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp (+91 70735 38077)</span>
              </button>
            </div>

          </div>

          {/* Right Column (6 Cols): Elegant Intake Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#071A30]/90 border border-slate-700/80 p-7 sm:p-9 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Consultation Requested!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Our managing principals have received your briefing and will review your business information within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0097B2] hover:underline font-bold mt-2"
                  >
                    Submit another briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                    <h3 className="text-lg font-bold font-heading text-white">
                      Request Strategic Growth Consultation
                    </h3>
                    <span className="text-[10px] font-mono text-[#0097B2] font-bold uppercase">
                      45-Min Executive Session
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Business Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Company Name / URL
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. NextGen Apparel"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Monthly Revenue Run-Rate
                      </label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="Under ₹5 Lakhs / mo">Under ₹5 Lakhs / mo</option>
                        <option value="₹5L – ₹25 Lakhs / mo">₹5L – ₹25 Lakhs / mo</option>
                        <option value="₹25L – ₹1 Crore / mo">₹25L – ₹1 Crore / mo</option>
                        <option value="₹1 Crore+ / mo">₹1 Crore+ / mo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Primary Strategic Focus
                      </label>
                      <select
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="Google Maps 3-Pack & Local SEO">Google Maps 3-Pack & Local SEO</option>
                        <option value="Performance Ads & CAC Reduction">Performance Ads & CAC Reduction</option>
                        <option value="High-Speed Web Platform / Next.js">High-Speed Web Platform / Next.js</option>
                        <option value="AI Lead Routing & WhatsApp Automation">AI Lead Routing & WhatsApp Automation</option>
                        <option value="Full Connected Growth System">Full Connected Growth System</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Briefly Describe Your Main Growth Bottleneck
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Inquiries are slow to convert; looking to dominate local search and automate follow-ups..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#0097B2]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#007a91] hover:to-cyan-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 transition disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Submitting Briefing...</span>
                    ) : (
                      <>
                        <span>Confirm Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Guaranteed 4-Hour Response • 100% Confidential</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
