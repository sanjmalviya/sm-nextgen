"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Quote, ArrowRight, CheckCircle2, TrendingUp, 
  Lightbulb, Compass, Wrench, ShieldCheck 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const JOURNEY_STAGES = [
  {
    step: "01",
    phase: "Problem",
    icon: Lightbulb,
    headline: "The Chaos of Disconnected Vendors",
    story: "Founders were juggling 3-4 separate agencies: one for SEO, one for ads, a freelance web developer, and an intern doing social. Nobody was accountable for closed sales, customer acquisition costs kept climbing, and the founders spent half their week arbitrating between finger-pointing vendors."
  },
  {
    step: "02",
    phase: "Decision",
    icon: Compass,
    headline: "Stopping the Piecemeal Retainer Bleed",
    story: "Leadership recognized that buying disconnected tactics was a losing game. They chose to consolidate their entire growth stack under SM NextGen — aligning strategic positioning, software engineering, AI automation, and performance marketing under one shared commercial objective."
  },
  {
    step: "03",
    phase: "Strategy",
    icon: Compass,
    headline: "Dissecting Unit Economics & Defining the Moat",
    story: "We audited their entire funnel from first click to cash collected. We eliminated unprofitable ad sets, restructured their pricing and offer architecture, and engineered a clear 12-month compounding growth roadmap designed around gross margin expansion."
  },
  {
    step: "04",
    phase: "Transformation",
    icon: Wrench,
    headline: "Deploying the Integrated Growth Engine",
    story: "Within 45 days, we launched a custom high-speed Next.js web platform, wired automated 24/7 AI lead qualification on WhatsApp and email, set up multi-touch revenue attribution, and launched hyper-targeted demand generation campaigns."
  },
  {
    step: "05",
    phase: "Growth",
    icon: TrendingUp,
    headline: "Predictable Compounding Revenue Velocity",
    story: "Sales cycles shrank from 28 days to 9 days. Qualified inbound deal volume expanded 3.2x, while CAC dropped by 42%. The leadership team stopped firefighting and regained the freedom to focus entirely on enterprise product innovation and scaling."
  }
];

export default function ClientStoryJourney({ onStartConversation }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>THE PARTNERSHIP TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Every Growing Business Has a Story.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            From founder uncertainty and vendor burnout to a predictable, scalable revenue engine. The 5-stage evolution of working with SM NextGen.
          </p>
        </div>

        {/* 5-Step Narrative Pathway Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {JOURNEY_STAGES.map((j, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={j.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20 scale-[1.02]"
                    : "bg-[#F8FAFC] dark:bg-[#071A30]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                }`}
              >
                <div className={`text-[11px] font-mono font-bold ${isCurrent ? "text-white/80" : "text-[#0097B2]"} mb-1`}>
                  PHASE {j.step}
                </div>
                <div className="font-bold font-heading text-sm">
                  {j.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Narrative Box */}
        <Card3DTilt className="p-8 sm:p-12 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0097B2]">
                Phase 0{activeStep + 1} of 05 • {JOURNEY_STAGES[activeStep].phase}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white mb-6">
              {JOURNEY_STAGES[activeStep].headline}
            </h3>

            <p className="text-base sm:text-lg text-[#0B2545]/80 dark:text-[#E6EEF2]/80 font-body leading-relaxed mb-8">
              "{JOURNEY_STAGES[activeStep].story}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#0B2545]/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-medium text-[#0B2545]/70 dark:text-[#E6EEF2]/70">
                <ShieldCheck className="w-4 h-4 text-[#0097B2]" />
                <span>Documented across client partners in India & international markets</span>
              </div>
              <div className="flex items-center gap-3">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="text-xs font-semibold text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] cursor-pointer"
                  >
                    ← Previous Phase
                  </button>
                )}
                {activeStep < 4 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onStartConversation}
                    className="px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
                  >
                    <span>Write Your Growth Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Card3DTilt>

      </div>

    </section>
  );
}
