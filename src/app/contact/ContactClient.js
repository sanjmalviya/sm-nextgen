"use client";

import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, CheckCircle2, ShieldCheck, Clock
} from "lucide-react";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `Strategic Growth Inquiry: ${formData.company || formData.name}`,
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
        const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Consultation.\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGoal: ${formData.message}`;
        window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Leadership, I would like to schedule a Strategic Consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}`;
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
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#071A30] dark:to-[#030D1A] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
            Contact SM NextGen
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-4">
            Start a Growth Conversation.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Direct access to senior principals. We audit your revenue bottlenecks, evaluate unit economics, and outline an integrated compounding growth strategy.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Verified Contact Details */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols): Verified Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Headquarters & Contacts
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Udaipur, Rajasthan, India • Serving Clients Globally
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-white/10 text-xs sm:text-sm">
                <a
                  href="tel:+917073538077"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Phone Line</span>
                    <span className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">+91 70735 38077</span>
                  </div>
                </a>

                <a
                  href="mailto:info@smnextgen.com"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <span className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">info@smnextgen.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Office Address</span>
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed block">
                      HPPQ+Q5V, Sunderwas, Ganapati Nagar, <br />
                      Udaipur, Rajasthan 313001, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 font-bold text-[#0B2545] dark:text-white">
                  <Clock className="w-3.5 h-3.5 text-[#0097B2]" />
                  <span>4-Hour Business Response SLA</span>
                </div>
                <p className="font-light text-[11px] leading-relaxed">
                  We review incoming briefs personally and reply with actionable initial feedback within 4 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Clean 5-Field Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you. Sanjay Malviya or a senior growth strategist will review your requirements and reach out within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-[#0097B2] hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                      Request Strategic Consultation
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Fill out the form below. Zero sales pressure, complete confidentiality.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sanjay Malviya"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B2545] dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0097B2] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B2545] dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B2545] dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0097B2] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company Name or Website URL
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp / acme.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B2545] dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0097B2] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      What is your primary growth goal or challenge?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your customer acquisition goals, current CAC, or systems you want to improve."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B2545] dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0097B2] transition resize-none"
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

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2">
                    Direct founder review. Strict commercial NDA guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
