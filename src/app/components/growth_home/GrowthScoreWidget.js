"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, CheckCircle2, ArrowRight, RotateCcw, 
  Target, TrendingUp, AlertCircle, Zap, ShieldCheck 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const BUSINESS_MODELS = [
  { id: "saas", label: "B2B SaaS / Software", baseScore: 70 },
  { id: "d2c", label: "E-Commerce / D2C Brand", baseScore: 68 },
  { id: "healthcare", label: "Healthcare & Clinic Group", baseScore: 65 },
  { id: "services", label: "Professional & Financial Services", baseScore: 72 },
  { id: "startup", label: "High-Growth Startup / Manufacturing", baseScore: 66 },
];

const BOTTLENECK_OPTIONS = [
  { id: "cac", label: "High CAC / Declining Ad ROI", penalty: 18, lever: "Demand & CRO" },
  { id: "conversion", label: "Website Traffic Doesn't Convert", penalty: 22, lever: "Conversion & Digital Experience" },
  { id: "unqualified", label: "Inbound Leads Are Cold / Unqualified", penalty: 16, lever: "Strategy & Inbound Funnel" },
  { id: "manual", label: "Slow Follow-Up & Manual Operations", penalty: 20, lever: "AI & Business Automation" },
  { id: "tracking", label: "Disconnected Tools & No Attribution", penalty: 14, lever: "Data & Revenue Intelligence" },
];

const REVENUE_BRACKETS = [
  { id: "under5", label: "Under ₹5 Lakhs / mo", mult: 0.85 },
  { id: "5to25", label: "₹5L – ₹25 Lakhs / mo", mult: 1.0 },
  { id: "25to1cr", label: "₹25L – ₹1 Crore / mo", mult: 1.15 },
  { id: "1crplus", label: "₹1 Crore+ / mo", mult: 1.25 },
];

const GROWTH_GOALS = [
  { id: "double", label: "2x–3x Annual Revenue" },
  { id: "lower_cac", label: "Reduce CAC by 40%+ and Scale" },
  { id: "automate", label: "Automate Entire Lead-to-Close Flow" },
  { id: "global", label: "Expand Into Global International Markets" },
];

export default function GrowthScoreWidget({ onCompleteDiagnostic }) {
  const [step, setStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedBottleneck, setSelectedBottleneck] = useState(null);
  const [selectedRevenue, setSelectedRevenue] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const calculateScore = () => {
    let base = selectedModel?.baseScore || 70;
    let penalty = selectedBottleneck?.penalty || 15;
    let mult = selectedRevenue?.mult || 1.0;
    let raw = Math.round((base - penalty + 25) * (mult * 0.95));
    return Math.max(42, Math.min(88, raw));
  };

  const handleReset = () => {
    setStep(1);
    setSelectedModel(null);
    setSelectedBottleneck(null);
    setSelectedRevenue(null);
    setSelectedGoal(null);
  };

  const handleFinalConsult = () => {
    if (onCompleteDiagnostic) {
      onCompleteDiagnostic({
        model: selectedModel?.label,
        bottleneck: selectedBottleneck?.label,
        revenue: selectedRevenue?.label,
        goal: selectedGoal?.label,
        score: calculateScore(),
      });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const score = calculateScore();

  return (
    <section id="growth-score" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE GROWTH AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
            Calculate Your Growth Readiness Score.
          </h2>
          <p className="text-base text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Identify your company's primary bottleneck in 60 seconds and see the exact levers needed to reach your next revenue milestone.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <Card3DTilt className="p-6 sm:p-10 bg-[#F8FAFC] dark:bg-[#071A30]/90 border border-[#0B2545]/10 dark:border-white/10 rounded-2xl shadow-xl">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between border-b border-[#0B2545]/10 dark:border-white/10 pb-4 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2]">
              {step <= 4 ? `Step 0${step} of 04` : "Diagnostic Summary"}
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-6 sm:w-10 h-1.5 rounded-full transition-colors ${
                    step >= i ? "bg-[#0097B2]" : "bg-[#0B2545]/10 dark:bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Business Model */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                What is your core business model?
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-6">
                Different models require distinct acquisition loops and retention architectures.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {BUSINESS_MODELS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedModel(item)}
                    className={`p-4 rounded-xl border text-left font-medium text-sm transition-all cursor-pointer ${
                      selectedModel?.id === item.id
                        ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                        : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  disabled={!selectedModel}
                  onClick={() => setStep(2)}
                  className={`px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    selectedModel
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md shadow-[#0097B2]/20 cursor-pointer"
                      : "bg-[#0B2545]/10 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Primary Bottleneck */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                What is your #1 growth bottleneck right now?
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-6">
                Where does your customer acquisition or revenue flow currently experience friction?
              </p>
              <div className="space-y-2.5 mb-8">
                {BOTTLENECK_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBottleneck(item)}
                    className={`w-full p-4 rounded-xl border text-left font-medium text-sm transition-all cursor-pointer ${
                      selectedBottleneck?.id === item.id
                        ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                        : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedBottleneck}
                  onClick={() => setStep(3)}
                  className={`px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    selectedBottleneck
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md shadow-[#0097B2]/20 cursor-pointer"
                      : "bg-[#0B2545]/10 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Current Monthly Revenue */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                What is your approximate monthly revenue?
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-6">
                This helps us calibrate unit economics and stage-appropriate leverage.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {REVENUE_BRACKETS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedRevenue(item)}
                    className={`p-4 rounded-xl border text-left font-medium text-sm transition-all cursor-pointer ${
                      selectedRevenue?.id === item.id
                        ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                        : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedRevenue}
                  onClick={() => setStep(4)}
                  className={`px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    selectedRevenue
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md shadow-[#0097B2]/20 cursor-pointer"
                      : "bg-[#0B2545]/10 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: 12-Month Goal */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                What is your primary commercial goal over the next 12 months?
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-6">
                We align our architecture around your destination.
              </p>
              <div className="space-y-2.5 mb-8">
                {GROWTH_GOALS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGoal(item)}
                    className={`w-full p-4 rounded-xl border text-left font-medium text-sm transition-all cursor-pointer ${
                      selectedGoal?.id === item.id
                        ? "bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20"
                        : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10 hover:border-[#0097B2]/40 text-[#0B2545] dark:text-[#E6EEF2]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(3)}
                  className="text-xs font-semibold text-[#0B2545]/60 dark:text-[#E6EEF2]/60 hover:text-[#0097B2] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedGoal}
                  onClick={() => setStep(5)}
                  className={`px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    selectedGoal
                      ? "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md shadow-[#0097B2]/20 cursor-pointer"
                      : "bg-[#0B2545]/10 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>Generate Score & Recommendations</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Score Calculation Result Screen */}
          {step === 5 && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Score Gauge Display */}
                <div className="lg:col-span-5 text-center p-8 rounded-2xl bg-white dark:bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 shadow-sm">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0097B2] mb-3">
                    Growth Readiness Index
                  </div>
                  <div className="relative inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-[#0097B2]/20 mb-4">
                    <div className="text-center">
                      <span className="text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white">
                        {score}
                      </span>
                      <span className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 block">/ 100</span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[#0B2545] dark:text-white mb-1">
                    {score >= 70 ? "High Growth Potential — Leaking at Margin" : "System Friction Detected"}
                  </div>
                  <div className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-4">
                    Based on {selectedModel?.label} parameters
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-[#0097B2] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Recalculate Diagnostics</span>
                  </button>
                </div>

                {/* Right: Bottleneck Analysis & Next Action */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Primary Constraint Identified</span>
                    </div>
                    <div className="text-base font-bold text-[#0B2545] dark:text-white">
                      "{selectedBottleneck?.label}"
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50 dark:bg-[#0097B2]/10 border border-[#0097B2]/20">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0097B2] mb-1">
                      Recommended Lever Activation:
                    </div>
                    <div className="text-sm font-semibold text-[#0B2545] dark:text-white">
                      Focus immediately on <strong>{selectedBottleneck?.lever}</strong> infrastructure to relieve funnel friction before scaling ad spend.
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleFinalConsult}
                      className="w-full py-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0097B2]/25 cursor-pointer"
                    >
                      <span>Schedule 30-Min Diagnostic Call with Our Principals</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[11px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 mt-2">
                      Your assessment answers will be pre-reviewed by our growth team prior to the call.
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </Card3DTilt>

      </div>

    </section>
  );
}
