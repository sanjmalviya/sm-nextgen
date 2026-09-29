"use client";
import React from "react";
import { Laptop, TrendingUp, Cpu, BarChart3, ArrowRight } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanServicesGrid({ onSelectService }) {
  const services = [
    {
      id: "web-development",
      icon: Laptop,
      title: "Web & App Development",
      description: "At SM NextGen, we build high-availability, scalable, and secure Web & Mobile Applications designed to empower modern businesses. Backed by an expert engineering team, we engineer custom Next.js platforms, headless e-commerce, and conversion architectures that provide seamless UX and deliver measurable business outcomes.",
      linkText: "Explore More"
    },
    {
      id: "demand-generation",
      icon: TrendingUp,
      title: "Demand Generation & SEO",
      description: "We engineer predictable inbound customer flow across Search Engine Optimization (SEO), AI Answer Engine Optimization (GEO & AEO), and precision paid acquisition. We replace vanity clicks with qualified pipeline, low customer acquisition costs, and compounding organic search dominance.",
      linkText: "Explore More"
    },
    {
      id: "ai-automation",
      icon: Cpu,
      title: "AI & Business Automation",
      description: "Eliminate repetitive manual bottlenecks and scale without headcount chaos. We architect custom conversational AI booking agents, automated WhatsApp and CRM pipelines, and intelligent API workflows that capture, qualify, and route leads around the clock.",
      linkText: "Explore More"
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data Analytics & Intelligence",
      description: "Transform ambiguous marketing metrics into actionable financial clarity. We deploy server-side multi-touch attribution, predictive CAC:LTV forecasting models, and unified executive growth dashboards that connect marketing spend directly to bank deposits.",
      linkText: "Explore More"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Quly.in Style) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-4">
            Explore the Innovative Solutions We Provide to Meet Your Needs.
          </h2>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body">
            SM NextGen provides top-notch Web, Software, AI Automation, and Strategic Growth Solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Card3DTilt
                key={svc.id}
                className="p-7 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/75 font-body leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10">
                  <button
                    onClick={onSelectService}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0097B2] hover:text-[#007a91] transition-colors cursor-pointer group/link"
                  >
                    <span>{svc.linkText}</span>
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
