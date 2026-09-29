"use client";
import React from "react";
import { Globe, ArrowRight, ShieldCheck, MapPin, Zap } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function GlobalPresence3D({ onStartConversation }) {
  const hubs = [
    { city: "New Delhi & Mumbai", region: "India HQ", timezone: "IST (UTC+5:30)", status: "Active" },
    { city: "San Francisco & New York", region: "North America", timezone: "PST / EST", status: "Active" },
    { city: "London", region: "UK & Western Europe", timezone: "GMT (UTC+0)", status: "Active" },
    { city: "Dubai", region: "Middle East & GCC", timezone: "GST (UTC+4)", status: "Active" },
    { city: "Singapore", region: "Southeast Asia", timezone: "SGT (UTC+8)", status: "Active" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] relative overflow-hidden transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0097B2] font-semibold block mb-3">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white">
            Born in India. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Operating Worldwide.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body mt-4">
            We partner with high-ambition founders across timezones, delivering high-speed execution with global standards.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {hubs.map((hub, i) => (
            <Card3DTilt key={i} className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-[#0B2545] dark:text-white">
                    {hub.city}
                  </div>
                  <div className="text-xs text-[#0B2545]/60 dark:text-[#E6EEF2]/60 font-body">
                    {hub.region} • {hub.timezone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] animate-pulse" />
                <span>{hub.status}</span>
              </div>
            </Card3DTilt>
          ))}

          {/* Borderless Stats Card */}
          <Card3DTilt className="p-5 flex flex-col justify-center bg-[#0097B2]/5 dark:bg-[#0097B2]/10 border-[#0097B2]/30">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0097B2] mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>FOLLOW-THE-SUN EXECUTION</span>
            </div>
            <div className="text-sm font-bold font-heading text-[#0B2545] dark:text-white">
              24/7 Synchronous Sprints
            </div>
          </Card3DTilt>
        </div>

      </div>
    </section>
  );
}
