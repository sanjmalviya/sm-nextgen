"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, ShoppingCart, Laptop, Stethoscope, 
  GraduationCap, Home, Hotel, Briefcase, MapPin, 
  Rocket, ArrowRight, CheckCircle2, ShieldCheck, 
  Sparkles, Layers, TrendingUp, Zap, HelpCircle
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "ecommerce",
    name: "E-Commerce & D2C Brands",
    tagline: "High-Velocity Cart Economics & Repeat LTV",
    icon: ShoppingCart,
    salesCycle: "Instant to 48 Hours",
    unitEconomics: "High CAC sensitivity, repeat purchase rate & blended ROAS",
    coreBottleneck: "Rising Meta/Google acquisition costs eroding first-order margins and post-purchase customer abandonment.",
    growthArchitecture: [
      "Sub-second Next.js / Shopify headless store architecture with 1-click checkout",
      "Dynamic multi-variant Meta & Google Performance Max catalog testing",
      "Automated WhatsApp & Email post-purchase retention drip flows",
      "Predictive LTV modeling and cross-channel cohort attribution"
    ],
    recommendedTools: ["ROAS Forecaster", "CAC Unit Economics Calculator"],
    href: "/contact?industry=Ecommerce+D2C"
  },
  {
    id: "saas",
    name: "B2B SaaS & Tech Startups",
    tagline: "Pipeline Velocity, Demo Conversion & Low Churn",
    icon: Laptop,
    salesCycle: "14 to 90 Days",
    unitEconomics: "LTV:CAC ratio > 3:1, Net Revenue Retention (NRR) & payback < 6 mo",
    coreBottleneck: "Traffic without qualified demo requests; long sales cycles with manual SDR follow-up slippage.",
    growthArchitecture: [
      "Positioning audit to articulate clear category differentiation and competitive moat",
      "Intent-based Google Search & LinkedIn ABM demand generation",
      "Interactive product-led demo experiences with instantaneous booking calendars",
      "Autonomous 24/7 AI qualification bots routing enterprise leads in < 5 minutes"
    ],
    recommendedTools: ["CAC Calculator", "Funnel Conversion Audit"],
    href: "/contact?industry=B2B+SaaS"
  },
  {
    id: "healthcare",
    name: "Healthcare, Clinics & Diagnostics",
    tagline: "Patient Trust, High Local 3-Pack Rank & Frictionless Inflow",
    icon: Stethoscope,
    salesCycle: "1 to 7 Days (Need-based)",
    unitEconomics: "High lifetime value per patient, strict compliance & reputation priority",
    coreBottleneck: "Unanswered reviews hurting local Google Maps rankings; missed appointment booking calls after office hours.",
    growthArchitecture: [
      "Local Google Maps 3-Pack dominance using Growth OS Google Business Profile engine",
      "AI review autopilot to maintain empathetic, 100% compliant review response velocity",
      "24/7 automated WhatsApp appointment booking & reminder system to reduce no-shows",
      "Educational, authority-building localized SEO content"
    ],
    recommendedTools: ["Google Business Profile Audit", "Local 3-Pack Telemetry"],
    href: "/contact?industry=Healthcare"
  },
  {
    id: "education",
    name: "Education, EdTech & Coaching",
    tagline: "Batch Enrollment, High-Conviction Webinars & Application Volume",
    icon: GraduationCap,
    salesCycle: "7 to 30 Days",
    unitEconomics: "High upfront course/tuition fees, high lead qualification requirement",
    coreBottleneck: "High volume of low-quality tire-kicker leads overwhelming admissions counselors.",
    growthArchitecture: [
      "Multi-step interactive quiz & application funnels to pre-qualify student intent",
      "Omnichannel performance advertising across YouTube, Instagram, and Search",
      "Automated WhatsApp counselor routing with instant aptitude score delivery",
      "Social proof and alumna outcome case study showcases"
    ],
    recommendedTools: ["Lead Funnel Calculator", "ROI Forecaster"],
    href: "/contact?industry=Education"
  },
  {
    id: "realestate",
    name: "Real Estate & Commercial Developments",
    tagline: "High-Ticket Inflow, Site Visit Bookings & Investor Trust",
    icon: Home,
    salesCycle: "30 to 180 Days",
    unitEconomics: "Very high transaction value; cost per qualified site visit is critical",
    coreBottleneck: "Fake form fills and low intent from broad ad targeting with zero tracking of site visit outcomes.",
    growthArchitecture: [
      "Ultra-targeted HNI & NRI digital advertising with verified phone OTP validation",
      "Immersive virtual tour landing pages engineered for instant brochure downloads",
      "Automated sales agent assignment and CRM sync within 60 seconds of submission",
      "Weekly closed-loop reporting linking digital ad spend to signed builder contracts"
    ],
    recommendedTools: ["CAC Calculator", "UTM Tracking Engine"],
    href: "/contact?industry=Real+Estate"
  },
  {
    id: "hospitality",
    name: "Hospitality, Resorts & Fine Dining",
    tagline: "Direct Room Bookings, Weekend Footfall & 5-Star Reviews",
    icon: Hotel,
    salesCycle: "24 Hours to 14 Days",
    unitEconomics: "Occupancy rates, banquet/wedding revenue, direct booking margin savings",
    coreBottleneck: "Over-reliance on heavy OTA commission fees (Booking.com/MakeMyTrip) and unmanaged negative reviews.",
    growthArchitecture: [
      "Direct booking landing engine offering guests exclusive perks and best rates",
      "Growth OS Google Maps optimization to capture high-intent travelers searching Udaipur / regional stays",
      "AI review autopilot drafting tailored luxury hospitality responses",
      "Visual social proof and lifestyle influencer distribution campaigns"
    ],
    recommendedTools: ["Growth OS GBP Audit", "ROAS Calculator"],
    href: "/contact?industry=Hospitality"
  },
  {
    id: "professional",
    name: "Professional Services & Advisory",
    tagline: "High-Fee Retainers, Authority Positioning & Client Qualification",
    icon: Briefcase,
    salesCycle: "21 to 90 Days",
    unitEconomics: "High annual contract values; founder-level trust requirement",
    coreBottleneck: "Reliance on unpredictable word-of-mouth with no systematic inbound client generation.",
    growthArchitecture: [
      "Authority-building editorial brand presence and thought leadership articles",
      "Targeted Google Search campaigns for commercial advisory and specialized consultancy",
      "Executive growth diagnostic intake forms that filter for budget and timeline",
      "Custom proposal calculators and automated meeting scheduling"
    ],
    recommendedTools: ["CAC Calculator", "Website Conversion Check"],
    href: "/contact?industry=Professional+Services"
  },
  {
    id: "localbusiness",
    name: "Local Businesses & Storefronts",
    tagline: "Store Visits, Direct Calls & Google Maps 3-Pack Monopoly",
    icon: MapPin,
    salesCycle: "Immediate / Same Day",
    unitEconomics: "High repeat footfall, walk-in customer volume, near-zero inventory delay",
    coreBottleneck: "Invisibility on Google Maps beyond a 1km radius and competitor 3-pack dominance.",
    growthArchitecture: [
      "SM NextGen Growth OS flagship deployment for complete Google Business Profile optimization",
      "24-point local SEO audit addressing primary/secondary categories and missing attributes",
      "Systematized review generation cards and QR codes to drive 5-star velocity",
      "Weekly promotional Google Posts with click-to-call direct tracking"
    ],
    recommendedTools: ["Growth OS Free Audit", "Local 3-Pack Diagnostic"],
    href: "/growth-os"
  },
  {
    id: "startups",
    name: "Startups & Scaling SMEs",
    tagline: "Product-Market Fit to Repeatable Scale",
    icon: Rocket,
    salesCycle: "Variable (Fast Iteration)",
    unitEconomics: "Lean capital deployment, fast experimentation velocity & runway preservation",
    coreBottleneck: "Disjointed tools, fragmented freelancers, and vanity metrics that don't yield bankable revenue.",
    growthArchitecture: [
      "The complete SM NextGen 6-stage framework: Discover → Diagnose → Strategize → Build → Optimize → Scale",
      "Single-point accountability across strategy, web engineering, ads, and AI automation",
      "Bi-weekly executive growth reviews with direct principal strategist access",
      "Scalable tech foundations engineered on Next.js, eliminating costly future rewrites"
    ],
    recommendedTools: ["Growth Score Diagnostic", "ROAS Forecaster"],
    href: "/contact?engagement=Growth+Partnership"
  }
];

export default function IndustriesClient() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const activeData = INDUSTRIES.find(ind => ind.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>SECTOR-SPECIFIC GROWTH SYSTEMS</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            How Growth Changes By <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">
              Industry & Economics.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            There is no universal marketing template. Growth mechanics depend entirely on your sales cycle, customer acquisition cost (CAC), and operational delivery model.
          </p>
        </div>

        {/* Industry Pill Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer ${
                  isSelected
                    ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20"
                    : "bg-white dark:bg-[#071A30] text-slate-600 dark:text-slate-300 hover:text-[#0097B2] border border-slate-200 dark:border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Blueprint Inspector Card */}
        <div className="bg-white dark:bg-[#071A30] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Profile & Bottleneck */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center">
                  <activeData.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                    {activeData.name}
                  </h2>
                  <p className="text-xs font-mono text-[#0097B2] font-semibold mt-0.5">
                    {activeData.tagline}
                  </p>
                </div>
              </div>

              {/* Economic Profile Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B2545] border border-slate-200 dark:border-white/10 space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider block">Typical Sales Velocity</span>
                  <span className="font-bold text-[#0B2545] dark:text-white">{activeData.salesCycle}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider block">Unit Economics Priority</span>
                  <span className="text-slate-600 dark:text-slate-300">{activeData.unitEconomics}</span>
                </div>
              </div>

              {/* Core Bottleneck */}
              <div className="p-5 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-rose-500 tracking-wider block">Primary Revenue Bottleneck</span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {activeData.coreBottleneck}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={activeData.href}
                  className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                >
                  <span>Schedule Consultation for {activeData.name.split("&")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: The SM NextGen Engineered Architecture */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200 lg:dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0097B2] block mb-2">
                  Engineered Solution
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                  The Compounding Growth Blueprint
                </h3>
              </div>

              <div className="space-y-3.5">
                {activeData.growthArchitecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5">
                    <div className="w-6 h-6 rounded-lg bg-[#0097B2]/15 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recommended Tool Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Zap className="w-4 h-4 text-[#0097B2]" />
                  <span>Recommended Audits:</span>
                  {activeData.recommendedTools.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 font-mono text-[11px] text-[#0B2545] dark:text-white">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="/tools" className="text-[#0097B2] font-bold hover:underline inline-flex items-center gap-1">
                  <span>Open Tools</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#071A30] to-[#0B2545] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading">Don't see your specific sector listed?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We apply the same 6-stage compounding growth framework to any business with clear unit economics, high customer lifetime value, or local service demand.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition shadow-lg"
          >
            Start a Growth Conversation →
          </Link>
        </div>

      </div>

    </main>
  );
}
