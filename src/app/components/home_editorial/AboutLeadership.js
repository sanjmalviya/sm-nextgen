"use client";
import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, 
  Sparkles, Award, Users, Phone, Mail, MapPin
} from "lucide-react";

export default function AboutLeadership({ onStartConversation }) {
  const handleWhatsApp = () => {
    const msg = "Hi Sanjay, I would like to explore a strategic growth partnership with SM NextGen for my business.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 font-body">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDER & LEADERSHIP PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5 leading-tight">
            Built by Direct Operators. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#007a91]">
              Zero Middlemen or Junior Handoffs.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            We founded SM NextGen to end the traditional agency cycle where senior partners sell you a pitch, and then hand your company off to junior interns.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column (5 Cols): Authentic Founder Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-slate-50 dark:bg-[#0B2545]/50 border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 shadow-xl relative overflow-hidden group">
              
              {/* Founder Image Frame */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 shadow-inner">
                <img
                  src="/images/sanjay.png"
                  alt="Sanjay Malviya - Founder of SM NextGen"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Managing Principal</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold bg-[#0097B2]/30 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    Udaipur HQ
                  </span>
                </div>
              </div>

              {/* Founder Title & Credentials */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                    Sanjay Malviya
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#0097B2]">
                    Founder & Principal
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Enterprise business growth strategist, local SEO engineer, and full-stack software architect directing client engagements personally.
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0097B2]" /> Udaipur, Rajasthan
                  </span>
                  <a 
                    href="tel:+917073538077" 
                    className="font-bold text-[#0097B2] hover:underline"
                  >
                    +91 70735 38077
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): Philosophy & Non-Negotiable Commitments */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-tight">
                Our Guarantee: Senior Leadership at Every Touchpoint.
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                When you partner with SM NextGen, your growth roadmap, digital platforms, ad campaigns, and automations are directed and executed by senior specialists. We treat your marketing budget with the same financial discipline as our own.
              </p>
            </div>

            {/* 4 Non-Negotiable Commitments */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#0B2545] dark:text-white font-heading">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>4-Hour SLA Response</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Direct WhatsApp/Slack channel to principals with a guaranteed under-4-hour response turnaround.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#0B2545] dark:text-white font-heading">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>In-House Execution</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  We write every line of Next.js code, deploy every campaign, and build every AI bot with our in-house team.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#0B2545] dark:text-white font-heading">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Closed-Loop Truth</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  We track attribution directly against cash deposited in your bank account, not vanity ad impressions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#0B2545] dark:text-white font-heading">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Strict Commercial NDA</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Your business data, competitive positioning, and customer lists remain 100% confidential and protected.
                </p>
              </div>
            </div>

            {/* Direct Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={onStartConversation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/20 transition cursor-pointer"
              >
                <span>Schedule Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B2545] dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 dark:border-white/15 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Founder Directly</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
