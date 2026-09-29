"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";
import GrowthTrajectory3D from "../3d/GrowthTrajectory3D";

export default function CleanHero3D({ onStartConversation, onExploreSolutions }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] overflow-hidden transition-colors duration-300">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0097B2]/10 dark:bg-[#0097B2]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean, Authoritative Text (Quly.in Style) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Sub-Title Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/25 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>SM NextGen — Business Growth Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15] text-[#0B2545] dark:text-white mb-6"
            >
              Empowering Ideas with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
                Technological & Strategic
              </span>{" "}
              Excellence.
            </motion.h1>

            {/* Grounded, Human-Written Lead Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/80 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              SM NextGen is your complete strategic business growth partner. We build scalable custom web platforms, automated customer acquisition engines, AI infrastructure, and data systems engineered for market leaders.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md shadow-[#0097B2]/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartConversation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/80 dark:bg-[#071A30]/80 hover:bg-white dark:hover:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border border-[#0B2545]/15 dark:border-white/15 font-semibold text-sm flex items-center justify-center transition-all hover:border-[#0097B2]/50 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </motion.div>

            {/* Credibility Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Certified Software & Growth Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
                <span>Zero Outsourcing • Direct Principal Access</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Compounding Growth Trajectory WebGL */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-lg h-[360px] sm:h-[420px] rounded-3xl bg-white/60 dark:bg-[#071A30]/60 border border-[#0B2545]/10 dark:border-white/10 shadow-xl overflow-hidden relative backdrop-blur-xl"
            >
              <GrowthTrajectory3D
                accentColor="#0097B2"
                gridColor="#0B2545"
                particleCount={1600}
                interactive={true}
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/80 dark:bg-[#081b33]/80 border border-[#0B2545]/10 dark:border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0B2545] dark:text-white font-heading">
                    Compounding Growth Vector
                  </div>
                  <div className="text-[10px] text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                    Automated Inflow • 4.8x Multiple
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
