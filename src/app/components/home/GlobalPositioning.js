"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, ArrowRight, ShieldCheck, MapPin, Zap } from "lucide-react";

export default function GlobalPositioning({ onStartConversation }) {
  const [activeMarket, setActiveMarket] = useState(0);

  const markets = [
    {
      region: "India & South Asia",
      tagline: "Fast-Growing Startups & Established Enterprises",
      focus: "Scaling market share, optimizing performance ad unit economics, and deploying WhatsApp & CRM business automation systems.",
      activeNodes: "Delhi NCR • Mumbai • Bengaluru • Udaipur"
    },
    {
      region: "United States & Canada",
      tagline: "B2B SaaS, E-Commerce & Tech Startups",
      focus: "High-intent search customer acquisition, outbound sales automation, and conversion-optimized headless web engineering.",
      activeNodes: "San Francisco • New York • Austin • Toronto"
    },
    {
      region: "United Kingdom & Europe",
      tagline: "D2C Brands, Professional Firms & Tech Hubs",
      focus: "Brand authority building, cross-border digital positioning, multi-currency commerce, and GDPR-compliant intelligence.",
      activeNodes: "London • Berlin • Amsterdam • Dublin"
    },
    {
      region: "Middle East & UAE",
      tagline: "High-Growth Ventures, Luxury & Real Estate",
      focus: "Premium brand authority, high-net-worth lead generation systems, and localized digital presence.",
      activeNodes: "Dubai • Abu Dhabi • Riyadh • Doha"
    },
    {
      region: "Asia-Pacific (APAC)",
      tagline: "Cross-Border Commerce & Digital First Brands",
      focus: "Rapid digital market penetration, omnichannel lead routing, and scalable cloud automation.",
      activeNodes: "Singapore • Sydney • Melbourne • Tokyo"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#071A30] text-white relative overflow-hidden border-t border-white/5">
      {/* Background World Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0097B2]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 inline-block mb-4">
            Global Execution Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            Built for Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Without Borders.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6EEF2]/75 leading-relaxed">
            From ambitious domestic enterprises to international SaaS companies and global brands, we architect scalable growth engines designed to operate seamlessly across global markets and multi-currency environments.
          </p>
        </div>

        {/* Interactive Global Network Box */}
        <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Region Selector */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                Select Active Economic Region:
              </span>
              {markets.map((m, idx) => (
                <button
                  key={m.region}
                  onClick={() => setActiveMarket(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    activeMarket === idx
                      ? "bg-[#0097B2]/20 border-[#0097B2] shadow-md shadow-[#0097B2]/20 text-white"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] text-white/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Globe2 className={`w-4 h-4 ${activeMarket === idx ? "text-[#0097B2]" : "text-white/40"}`} />
                    <span className="font-bold text-sm sm:text-base">{m.region}</span>
                  </div>
                  <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Region Detail Card */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0097B2] font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Market Capability Telemetry</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {markets[activeMarket].region}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-cyan-300">
                {markets[activeMarket].tagline}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-white/40 uppercase">Strategic Growth Focus</span>
                <p className="text-xs sm:text-sm text-[#E6EEF2]/90 leading-relaxed">
                  {markets[activeMarket].focus}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <MapPin className="w-3.5 h-3.5 text-[#0097B2]" />
                <span>Active Target Nodes: {markets[activeMarket].activeNodes}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onStartConversation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold text-xs tracking-wide transition-all cursor-pointer"
                >
                  Launch Global Growth Sprint <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
