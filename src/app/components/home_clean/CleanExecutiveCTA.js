"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanExecutiveCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "Web & App Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `New Inquiry from ${formData.name} - SM NextGen`,
        from_name: "SM NextGen Web Portal",
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
        window.open(
          `https://wa.me/919179577717?text=${encodeURIComponent(
            `Hi SM NextGen team, I want to schedule a consultation.\n\nName: ${formData.name}\nService: ${formData.service}\nWebsite: ${formData.website || "N/A"}`
          )}`,
          "_blank"
        );
        setSubmitted(true);
      }
    } catch {
      window.open(
        `https://wa.me/919179577717?text=${encodeURIComponent(
          `Hi SM NextGen, I would like to schedule a consultation.\nName: ${formData.name}`
        )}`,
        "_blank"
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    window.open(
      `https://wa.me/919179577717?text=${encodeURIComponent(
        `Hi SM NextGen, I would like to schedule a consultation for my business.`
      )}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-4">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body">
            Connect with our senior software architects and growth engineers for a tailored strategic consultation.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Trust (Quly.in Style) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <Card3DTilt className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mb-8">
                  Our engineering team is ready to discuss your business requirements and architect your roadmap.
                </p>

                <div className="space-y-6 text-sm font-body">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2545] dark:text-white font-heading">
                        Headquarters
                      </div>
                      <div className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mt-0.5">
                        India (Delhi NCR / Mumbai) • Serving Global Clients
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2545] dark:text-white font-heading">
                        Email Support
                      </div>
                      <a href="mailto:info@smnextgen.com" className="text-xs text-[#0097B2] hover:underline mt-0.5 block">
                        info@smnextgen.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2545] dark:text-white font-heading">
                        Direct Phone / WhatsApp
                      </div>
                      <a href="tel:+919179577717" className="text-xs text-[#0097B2] hover:underline mt-0.5 block">
                        +91 91795 77717
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#0B2545]/10 dark:border-white/10 mt-8">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Priority Chat</span>
                </button>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <Card3DTilt className="p-8 sm:p-10">
              {submitted ? (
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#0097B2] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#0097B2]/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    Inquiry Submitted Successfully
                  </h4>
                  <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 max-w-md font-body mb-6">
                    Thank you for reaching out. Our engineering principals will review your project scope and contact you within 12 business hours.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-2.5 rounded-lg bg-[#0097B2] text-white text-xs font-semibold"
                  >
                    Open Priority WhatsApp Channel →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 91795 77717"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                        Company Website / URL
                      </label>
                      <input
                        type="text"
                        placeholder="company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                      Service / Solution of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                    >
                      <option value="Web & App Development">Web & App Development (Next.js / Headless)</option>
                      <option value="Demand Generation & SEO">Demand Generation & SEO / AEO</option>
                      <option value="AI & Business Automation">AI & Business Automation Systems</option>
                      <option value="Data Analytics & Intelligence">Data Analytics & Revenue Intelligence</option>
                      <option value="Full Growth Operating System">Full-Stack Business Growth Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0B2545] dark:text-white mb-1.5 block">
                      Project Requirements / Growth Objectives
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your project, current bottlenecks, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#071A30] border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
}
