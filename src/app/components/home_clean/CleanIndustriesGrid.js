"use client";
import React from "react";
import { Building2, ShoppingBag, Stethoscope, Hotel, Briefcase, Rocket, ArrowRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanIndustriesGrid({ onSelectIndustry }) {
  const industries = [
    {
      icon: Building2,
      name: "Banking & Financial Services",
      desc: "High-security lead acquisition, compliance-ready CRM workflows, and financial attribution modeling."
    },
    {
      icon: ShoppingBag,
      name: "Retail & Modern E-Commerce",
      desc: "Headless storefronts, automated WhatsApp checkout recovery, and predictive LTV retention systems."
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Life Sciences",
      desc: "Patient appointment booking AI, localized search dominance, and trust-first clinical positioning."
    },
    {
      icon: Hotel,
      name: "Hospitality & Tourism",
      desc: "Proprietary direct booking engines eliminating 20% OTA commissions with automated guest remarketing."
    },
    {
      icon: Briefcase,
      name: "Professional & B2B Services",
      desc: "High-ticket executive lead qualification, automated pipeline routing, and authority brand architecture."
    },
    {
      icon: Rocket,
      name: "Startups & High-Growth SMEs",
      desc: "Capital-efficient growth engines, unit economics validation, and 90-day market scaling sprints."
    }
  ];

  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Industry Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-4">
            Tailored Growth Architectures for Every Sector.
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body">
            We adapt our core technology and growth systems to the specific unit economics of your industry.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Card3DTilt
                key={i}
                className="p-7 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <button
                    onClick={onSelectIndustry}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer group/link"
                  >
                    <span>View Sector Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
