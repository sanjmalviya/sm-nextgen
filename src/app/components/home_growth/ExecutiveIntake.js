"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function ExecutiveIntake({ simulationData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    revenue: "₹25 Lakhs – ₹1 Crore/mo ($30K-$120K)",
    bottleneck: "Funnel Yield & Conversion Architecture",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `Strategic Growth Inquiry from ${formData.name}`,
        from_name: "SM NextGen Growth Platform",
        ...formData,
        simulated_target: simulationData ? simulationData.targetExpansion : "Not simulated",
        simulated_multiplier: simulationData ? simulationData.growthMultiple : "Not simulated",
        simulated_baseline: simulationData ? simulationData.currentMonthlyRevenue : "Not simulated"
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // WhatsApp fallback
        window.open(
          `https://wa.me/917073538077?text=${encodeURIComponent(
            `Hi SM NextGen, I want to discuss building a Compounding Growth Architecture.\n\nName: ${formData.name}\nRevenue: ${formData.revenue}\nWebsite: ${formData.website || "N/A"}`
          )}`,
          "_blank"
        );
        setSubmitted(true);
      }
    } catch {
      window.open(
        `https://wa.me/917073538077?text=${encodeURIComponent(
          `Hi SM NextGen, I would like to schedule a Strategic Growth Consultation.\nName: ${formData.name}`
        )}`,
        "_blank"
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDirectWhatsApp = () => {
    const text = simulationData
      ? `Hi SM NextGen, I simulated a ${simulationData.growthMultiple} compounding expansion for my company (${simulationData.currentMonthlyRevenue}) on your website.\nTarget: ${simulationData.targetExpansion}\n\nI would like to discuss implementing this growth system.`
      : `Hi SM NextGen, I would like to discuss architecting a Compounding Business Growth Engine for my company.`;

    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="growth-consultation" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      {/* Background Radial Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0097B2]/15 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Institutional Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Architect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Compounding Future.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            Schedule an executive growth diagnosis. No sales pitch — just a mathematical audit of your unit economics, acquisition funnels, and revenue bottlenecks.
          </p>
        </div>

        {/* 3D Form Container */}
        <Card3DTilt className="p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Access & Telemetry */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-mono mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PARTNER-LED ARCHITECTURE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                  Direct Principal Access
                </h3>

                <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                  You work directly with experienced growth architects and engineers, not junior sales representatives.
                </p>

                {/* Simulated Data Attached Pill */}
                {simulationData && (
                  <div className="p-4 rounded-xl bg-[#0097B2]/10 border border-[#0097B2]/30 mb-6">
                    <div className="text-xs font-mono text-[#0097B2] font-semibold mb-1">
                      ✦ Trajectory Simulation Attached
                    </div>
                    <div className="text-sm font-bold text-[#0B2545] dark:text-white">
                      Baseline: {simulationData.currentMonthlyRevenue}
                    </div>
                    <div className="text-xs text-[#0097B2] mt-1 font-semibold">
                      Target: {simulationData.targetExpansion} ({simulationData.growthMultiple})
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                    <span>Unit economics & CAC:LTV audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                    <span>Custom 90-day compounding sprint roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                    <span>Mutual NDA & enterprise confidentiality</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Priority Advisory</span>
              </button>
            </div>

            {/* Right Column: Executive Intake Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#0097B2]/10 border border-[#0097B2]/30 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#0097B2] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#0097B2]/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 max-w-sm font-body mb-6">
                    Our senior growth principals will review your unit economics and reach out within 12 business hours.
                  </p>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-6 py-2.5 rounded-lg bg-[#0097B2] text-white text-xs font-semibold"
                  >
                    Open Priority WhatsApp Channel →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                        Company Domain / URL
                      </label>
                      <input
                        type="text"
                        placeholder="company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                      Current Monthly Revenue
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white focus:outline-none focus:border-[#0097B2]"
                    >
                      <option value="Under ₹10L/mo ($15K)">Under ₹10L/mo ($15K)</option>
                      <option value="₹10L – ₹25L/mo ($15K-$30K)">₹10L – ₹25L/mo ($15K-$30K)</option>
                      <option value="₹25L – ₹1Cr/mo ($30K-$120K)">₹25L – ₹1Cr/mo ($30K-$120K)</option>
                      <option value="₹1Cr – ₹5Cr/mo ($120K-$600K)">₹1Cr – ₹5Cr/mo ($120K-$600K)</option>
                      <option value="₹5Cr+/mo ($600K+) Institutional Scale">₹5Cr+/mo ($600K+) Institutional Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-[#0B2545]/70 dark:text-[#E6EEF2]/70 uppercase mb-1 block">
                      Current Growth Friction / Objectives
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Outline your primary growth bottleneck (e.g. rising ad CAC, conversion drop-off, lack of inbound demand, manual operational drag)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-[#071A30]/80 border border-[#0B2545]/15 dark:border-white/10 text-xs sm:text-sm text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span>Initiating System Audit...</span>
                    ) : (
                      <>
                        <span>Submit Strategic Growth Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </Card3DTilt>

      </div>
    </section>
  );
}
