"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Laptop, ShoppingCart, Stethoscope, Building2, 
  Briefcase, Factory, ArrowRight, CheckCircle2 
} from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

const INDUSTRIES = [
  {
    id: "saas",
    title: "B2B SaaS & Tech",
    icon: Laptop,
    summary: "Engineered for rapid ARR acceleration, reduced churn, and compressed sales cycles.",
    focusAreas: [
      "Product-Led & Inbound Funnel Design",
      "Account-Based Marketing (ABM) for Enterprise",
      "Automated Demo Scheduling & Pipeline Routing",
      "LTV/CAC Unit Economics Optimization"
    ],
    metric: "Shorter Sales Cycles"
  },
  {
    id: "d2c",
    title: "D2C & Modern Commerce",
    icon: ShoppingCart,
    summary: "Custom headless architectures and retention workflows built to scale ROAS profitably.",
    focusAreas: [
      "Sub-Second Headless Next.js Storefronts",
      "Automated WhatsApp & Email Retention Workflows",
      "Frictionless Checkout & Mobile CRO",
      "Omnichannel Multi-Touch Ad Scaling"
    ],
    metric: "Higher Blended ROAS"
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinical Services",
    icon: Stethoscope,
    summary: "High-trust digital patient acquisition and automated scheduling systems.",
    focusAreas: [
      "Dominant Local Organic (SEO) Rankings",
      "Instant Online Booking & Consultation Portals",
      "Automated Multi-Channel Appointment Reminders",
      "Reputation & Verified Review Flywheels"
    ],
    metric: "Zero Friction Bookings"
  },
  {
    id: "realestate",
    title: "Hospitality & Real Estate",
    icon: Building2,
    summary: "High-intent lead generation and consultative nurture systems for high-ticket transactions.",
    focusAreas: [
      "Targeted High-Net-Worth Inbound Campaigns",
      "Interactive 3D Virtual Tours & Project Portals",
      "Instant Broker & Sales Desk CRM Routing",
      "Dynamic Retargeting on Premium Inventory"
    ],
    metric: "High-Ticket Pipeline"
  },
  {
    id: "services",
    title: "Professional & Financial Services",
    icon: Briefcase,
    summary: "Establishing category authority and generating pre-qualified consultative clients.",
    focusAreas: [
      "Executive Authority & Thought Leadership",
      "Pre-Consultation Qualification Filters",
      "Secure Client Portals & Document Workflows",
      "High-Value Retainer Offer Architecture"
    ],
    metric: "High-Margin Retainers"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial B2B",
    icon: Factory,
    summary: "Modernizing industrial brand presence and capturing domestic and global export demand.",
    focusAreas: [
      "Global Export Buyer Search Authority",
      "Automated RFQ (Request for Quote) Engines",
      "Distributor & Vendor Self-Service Portals",
      "Modern Enterprise Brand Positioning"
    ],
    metric: "Global Export Reach"
  }
];

export default function GrowthIndustries({ onSelectIndustry }) {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0]);

  return (
    <section id="industries" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B2545] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>SECTOR-SPECIFIC ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-5">
            Growth Strategies Built Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#0B2545]/75 dark:text-[#E6EEF2]/75 font-body leading-relaxed">
            Every industry has distinct unit economics, sales cycles, and buyer behaviors. We tailor growth engines specifically to your market dynamics.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const isCurrent = activeIndustry.id === ind.id;
            return (
              <Card3DTilt
                key={ind.id}
                onClick={() => setActiveIndustry(ind)}
                className={`p-7 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#F8FAFC] dark:bg-[#071A30] border-[#0097B2] shadow-lg shadow-[#0097B2]/15"
                    : "bg-white dark:bg-[#0B2545]/60 border-[#0B2545]/10 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 border border-[#0097B2]/25 flex items-center justify-center text-[#0097B2]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded bg-[#0097B2]/10 text-[#0097B2]">
                      {ind.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body leading-relaxed mb-6">
                    {ind.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.focusAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#0B2545]/85 dark:text-[#E6EEF2]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0097B2] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0B2545]/10 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#0097B2]">
                  <span>Request Sector Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="text-center">
          <p className="text-sm text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mb-4">
            Operating in a specialized niche or unique vertical?
          </p>
          <button
            onClick={() => onSelectIndustry && onSelectIndustry("Specialized Vertical")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border border-[#0B2545]/15 dark:border-white/15 font-semibold text-xs uppercase tracking-wider hover:border-[#0097B2] transition-colors cursor-pointer"
          >
            <span>Discuss Custom Vertical Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0097B2]" />
          </button>
        </div>

      </div>

    </section>
  );
}
