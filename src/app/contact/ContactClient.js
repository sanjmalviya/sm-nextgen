"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Send,
  ExternalLink,
} from "lucide-react";

const INDUSTRIES = [
  "E-commerce & D2C",
  "Hospitality & Travel",
  "Healthcare",
  "Real Estate & Construction",
  "Finance & Professional Services",
  "Manufacturing & B2B",
  "Retail & Local Business",
  "Technology & SaaS",
  "Other",
];

const HELP_OPTIONS = [
  "Business Growth Strategy",
  "Branding & Design",
  "Digital Marketing & SEO",
  "Website & E-commerce",
  "Lead Generation",
  "AI & Automation",
  "CRM & Business Systems",
  "Business Registration & Compliance",
  "Multiple Services",
  "Not Sure Yet",
];

const WHAT_HAPPENS_NEXT = [
  {
    step: "01",
    title: "We Understand",
    desc: "We learn about your business, goals and current challenges.",
  },
  {
    step: "02",
    title: "We Identify",
    desc: "We understand what needs attention and where opportunities exist.",
  },
  {
    step: "03",
    title: "We Recommend",
    desc: "We suggest relevant services, priorities and a practical way forward.",
  },
  {
    step: "04",
    title: "We Take It Forward",
    desc: "If we're the right fit, we discuss the scope and next steps.",
  },
];

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    helpWith: "",
    goals: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.industry || !formData.helpWith) return;
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `New Growth Enquiry: ${formData.company || formData.name} (${formData.industry})`,
        from_name: "SM NextGen Growth Intake",
        ...formData,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const waMsg = `Hi SM NextGen Team, I would like to start a growth conversation.\n\nName: ${formData.name}\nBusiness: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nNeed: ${formData.helpWith}\nGoals: ${formData.goals}`;
        window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const waMsg = `Hi SM NextGen Team, I would like to start a growth conversation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nNeed: ${formData.helpWith}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const waMsg = "Hi SM NextGen Team, I would like to chat about business growth.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
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
              LET&apos;S TALK GROWTH
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Direct Principal Strategy &amp; Execution
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Let&apos;s Build What&apos;s Next for{" "}
            <span className="text-[#0097B2]">
              Your Business.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you&apos;re starting, growing or ready to scale, let&apos;s understand your business and find the right way forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href="#contact-form"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-[#0097B2]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>24-Hour Business Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Direct Senior Partner Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>NDA &amp; Strict Confidentiality</span>
            </div>
          </div>

          {/* Premium Direct Channels Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Communication Channels
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Direct Line to Leadership
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40">
                Online &amp; Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <a
                href="https://wa.me/917073538077"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group block"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                  WhatsApp Business
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  +91 70735 38077 · Instant Chat
                </p>
              </a>

              <a
                href="mailto:contact@smnextgen.com"
                className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group block"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                  Direct Email
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  contact@smnextgen.com
                </p>
              </a>

              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 text-[#0097B2]" />
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  Headquarters
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Udaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. CONTACT FORM & DIRECT CHANNELS */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Col (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-2">
                  Tell Us a Little About Your Business.
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Share your goals, challenges or ideas. We&apos;ll take it from there.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                    Thank you for reaching out.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                    We&apos;ve received your enquiry and will get in touch with you.
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
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
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
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Website or Social Media Link
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com or instagram.com/..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="">Select Industry</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        What Do You Need Help With? *
                      </label>
                      <select
                        name="helpWith"
                        required
                        value={formData.helpWith}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      >
                        <option value="">Select Service Area</option>
                        {HELP_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Tell Us About Your Goals or Requirements
                    </label>
                    <textarea
                      name="goals"
                      rows={4}
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="Current challenges, what you want to achieve, timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2]"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Form Note: Your information will only be used to respond to your enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Contact & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 3. DIRECT CONTACT */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                DIRECT CONTACT
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                Prefer a Direct Conversation?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-light mb-6">
                Choose the channel that works best for you.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href="https://wa.me/917073538077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 hover:border-[#0097B2] transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2545] dark:text-white block group-hover:text-[#0097B2] transition">
                      WhatsApp: +91 70735 38077
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Start a direct conversation.
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+917073538077"
                  className="p-4 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 hover:border-[#0097B2] transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2545] dark:text-white block group-hover:text-[#0097B2] transition">
                      Call Us: +91 70735 38077
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Let&apos;s discuss your requirements.
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@smnextgen.com"
                  className="p-4 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 hover:border-[#0097B2] transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2545] dark:text-white block group-hover:text-[#0097B2] transition">
                      Email: info@smnextgen.com
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      For enquiries, proposals and business discussions.
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* 4. OFFICE LOCATION */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                OFFICE LOCATION
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                Find Us in Udaipur.
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-light mb-4">
                SM NextGen<br />
                HPPQ+Q5V, Sunderwas, Ganapati Nagar,<br />
                Udaipur, Rajasthan 313001, India.
              </p>

              <a
                href="https://maps.google.com/?q=Ganapati+Nagar,+Udaipur,+Rajasthan+313001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] hover:underline mb-4"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-video w-full bg-slate-100">
                <iframe
                  title="SM NextGen Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.188265011666!2d73.7155!3d24.5885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5647565b90f%3A0x6b447605d6cb35d0!2sGanapati%20Nagar%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT HAPPENS NEXT? */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              WHAT HAPPENS NEXT?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              A Simple Start. A Clear Direction.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_HAPPENS_NEXT.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-xs font-mono font-bold text-[#0097B2] block mb-2">
                  {item.step} — {item.title}
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Good Things Start With a Conversation.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            You bring the business challenge. We&apos;ll help you explore the right solution.
          </p>
          <div className="pt-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Let&apos;s Talk Growth</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
