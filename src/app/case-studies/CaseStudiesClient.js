"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  ArrowRight,
  CheckCircle2,
  Tag,
  Building2,
  MapPin,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

const PROJECTS = [
  // 1. Featured Client Work: Apna Loanwala
  {
    id: "apna-loanwala",
    name: "Apna Loanwala",
    category: "Finance",
    industryTag: "Financial Services · Loan Consultancy",
    location: "Udaipur, Rajasthan",
    projectType: "Social Media Content & Digital Brand Communication",
    label: "Client Work",
    headline: "Making Loan Information Easier to Understand.",
    image: "/images/industries/finance-professional-services.png",
    challenge:
      "Loan services can be difficult for potential customers to understand. People often have questions about eligibility, documentation, loan types and rejection reasons before they are ready to enquire.",
    approach:
      "Build clearer, more approachable communication around loan-related services and common customer questions.",
    workCovered: [
      "Social media content planning",
      "Educational loan-related content",
      "Creative design and communication",
      "Content around car, commercial vehicle, business and project loans",
      "Awareness-led captions and enquiry-focused messaging",
    ],
    businessValue:
      "A more informative digital presence that helps potential customers understand available loan services and take the next step with greater clarity.",
  },
  // 2. Featured Client Work: TBH Events
  {
    id: "tbh-events",
    name: "TBH Events — The Black Horse Entertainment",
    category: "Events",
    industryTag: "Event Management · Weddings · Corporate Events",
    location: "Udaipur, Rajasthan",
    projectType: "Social Media Strategy & Creative Content",
    label: "Client Work",
    headline: "Presenting Event Experiences Through Premium Visual Storytelling.",
    image: "/images/industries/hospitality-resorts.png",
    challenge:
      "An event management brand needs to communicate more than event decoration. Potential customers need to see its ability to manage the complete experience — from planning and hospitality to production and execution.",
    approach:
      "Build a premium visual content direction that showcases the range of services and creates a stronger brand impression.",
    workCovered: [
      "Social media content planning",
      "Premium event creatives and carousel content",
      "Cinematic service showcase concepts",
      "Wedding and destination wedding communication",
      "Corporate event storytelling",
      "Content around décor, artist management, hospitality, logistics and event support",
    ],
    businessValue:
      "A clearer presentation of the brand's service capabilities, designed to attract attention from wedding, destination wedding and corporate event audiences.",
  },
  // 3. Concept Case Study: CK Homestay, Udaipur
  {
    id: "ck-homestay",
    name: "CK Homestay, Udaipur",
    category: "Hospitality",
    industryTag: "Hospitality · Homestay · Tourism",
    location: "Udaipur, Rajasthan",
    projectType: "Local Visibility & Direct Booking System",
    label: "Concept Case Study",
    headline: "Turning a Homestay's Online Presence into a Booking Journey.",
    image: "/images/industries/hospitality-resorts.png",
    growthFocus: "Local Visibility · Direct Enquiries · Booking Experience",
    challenge:
      "A beautiful homestay has comfortable rooms and a good guest experience, but depends heavily on third-party booking platforms. Its website is basic, local search visibility is limited and enquiries arrive through scattered channels.",
    approach:
      "Make it easier for travellers to discover the property, understand the experience and enquire directly.",
    workCovered: [
      "Hospitality-focused website",
      "Room, property and experience galleries",
      "Local SEO targeting Udaipur travel searches",
      "Google Business Profile optimization",
      "WhatsApp enquiry and booking flow",
      "Seasonal content and social media campaigns",
      "Lead tracking for booking enquiries",
    ],
    businessValue:
      "A stronger direct discovery and enquiry journey, with less dependence on scattered communication.",
  },
  // 4. Concept Case Study: Wooden Space, Udaipur
  {
    id: "wooden-space",
    name: "Wooden Space, Udaipur",
    category: "Interiors",
    industryTag: "Furniture · Interiors · Home & Living",
    location: "Udaipur, Rajasthan",
    projectType: "Branding, Digital Experience & Lead Generation",
    label: "Concept Case Study",
    headline: "Helping a Furniture Brand Turn Product Interest into Serious Enquiries.",
    image: "/images/industries/home-living.png",
    growthFocus: "Brand Presentation · Product Discovery · Qualified Enquiries",
    challenge:
      "Customers like the furniture but struggle to explore collections, compare options or understand customization. Product enquiries arrive through calls and messages without a consistent follow-up process.",
    approach:
      "Create a digital product experience that presents the brand professionally and guides customers towards an enquiry.",
    workCovered: [
      "Brand positioning and visual communication",
      "Product catalogue website",
      "Collection and category pages",
      "Product photography direction",
      "Local SEO and Google Business Profile",
      "Instagram product storytelling",
      "WhatsApp enquiry integration",
      "CRM-based enquiry tracking and follow-ups",
    ],
    businessValue:
      "A more organized product discovery experience and a clearer path from browsing to sales enquiry.",
  },
  // 5. Concept Case Study: Nivara Skin
  {
    id: "nivara-skin",
    name: "Nivara Skin",
    category: "D2C & E-commerce",
    industryTag: "D2C · Skincare · Beauty & Personal Care",
    location: "India",
    projectType: "Brand Strategy & E-commerce Growth",
    label: "Concept Case Study",
    headline: "Building a Skincare Brand Beyond Discount-Led Selling.",
    image: "/images/industries/d2c-ecommerce.png",
    growthFocus: "Brand Trust · Conversion · Customer Retention",
    challenge:
      "A new skincare brand has good products but struggles to communicate why customers should choose it. Its product pages lack clarity, paid campaigns attract visitors who do not purchase, and repeat purchases are not actively encouraged.",
    approach:
      "Connect brand positioning, product education, storefront experience and customer retention.",
    workCovered: [
      "Brand positioning and messaging",
      "Product packaging and visual identity direction",
      "Shopify e-commerce storefront",
      "Product education and ingredient-led content",
      "Meta and Google advertising strategy",
      "Landing page and checkout optimization",
      "WhatsApp and email follow-up journeys",
      "Repeat-purchase and customer retention flows",
      "Sales and product performance dashboard",
    ],
    businessValue:
      "A connected customer journey from product discovery to purchase and repeat engagement.",
  },
  // 6. Concept Case Study: TerraBasket
  {
    id: "terrabasket",
    name: "TerraBasket",
    category: "D2C & E-commerce",
    industryTag: "D2C · Organic Food · Packaged Products",
    location: "India",
    projectType: "E-commerce & Performance Marketing",
    label: "Concept Case Study",
    headline: "Connecting Product Discovery with a Better Online Buying Experience.",
    image: "/images/industries/d2c-ecommerce.png",
    growthFocus: "E-commerce · Customer Acquisition · Cart Recovery",
    challenge:
      "A packaged food brand wants to sell beyond its local market. Product discovery is limited, the online catalogue is difficult to navigate and customers need more information before placing an order.",
    approach:
      "Build an e-commerce experience supported by product-focused content and measurable acquisition campaigns.",
    workCovered: [
      "E-commerce website and product catalogue",
      "Product descriptions and category structure",
      "Packaging and brand communication",
      "Product-focused SEO",
      "Meta and Google campaign strategy",
      "Cart recovery automation",
      "WhatsApp customer support flows",
      "Order and sales analytics",
    ],
    businessValue:
      "A structured online sales channel with clearer product information and better visibility into the customer journey.",
  },
  // 7. Concept Case Study: Arovia Care Clinic
  {
    id: "arovia-care",
    name: "Arovia Care Clinic",
    category: "Healthcare",
    industryTag: "Healthcare · Clinics · Professional Services",
    location: "India",
    projectType: "Local SEO & Appointment Enquiry Systems",
    label: "Concept Case Study",
    headline: "Making It Easier for Patients to Discover and Contact a Clinic.",
    image: "/images/industries/healthcare-clinics.png",
    growthFocus: "Local Search · Patient Enquiries · Appointment Experience",
    challenge:
      "A local clinic has limited visibility in search results. Patients struggle to find service information, timings and contact details. Enquiries are handled manually, and follow-ups can be inconsistent.",
    approach:
      "Improve local discoverability and make the patient enquiry journey simpler.",
    workCovered: [
      "Healthcare website structure",
      "Treatment and service pages",
      "Local SEO strategy",
      "Google Business Profile optimization",
      "Appointment enquiry form",
      "WhatsApp enquiry flow",
      "Appointment reminders",
      "Enquiry tracking and reporting",
    ],
    businessValue:
      "A more accessible digital presence and an organized appointment enquiry process.",
  },
  // 8. Concept Case Study: ForgeCraft Industries
  {
    id: "forgecraft",
    name: "ForgeCraft Industries",
    category: "B2B",
    industryTag: "B2B · Manufacturing · Industrial Products",
    location: "India",
    projectType: "B2B Website & Lead Generation",
    label: "Concept Case Study",
    headline: "Turning a Product Catalogue into a B2B Sales Tool.",
    image: "/images/industries/manufacturing.png",
    growthFocus: "B2B Visibility · RFQs · Sales Pipeline",
    challenge:
      "A manufacturer has a wide product range but relies heavily on offline networks and referrals. Buyers cannot easily explore specifications, request quotations or understand the company's capabilities online.",
    approach:
      "Build a professional digital presence that supports product discovery and structured B2B enquiries.",
    workCovered: [
      "Industrial brand positioning",
      "B2B website development",
      "Product and specification catalogue",
      "Industry-specific landing pages",
      "SEO for product and application searches",
      "RFQ (Request for Quotation) forms",
      "CRM lead routing",
      "Automated enquiry acknowledgements",
      "Lead source and pipeline reporting",
    ],
    businessValue:
      "A more structured digital channel for product discovery, quotation requests and sales follow-up.",
  },
];

const FILTERS = [
  "All Projects",
  "Client Work",
  "Hospitality",
  "D2C & E-commerce",
  "Finance",
  "Events",
  "Interiors",
  "Healthcare",
  "B2B",
];

const DEMONSTRATES = [
  { industry: "Hospitality", outcome: "Local visibility, direct enquiries and booking journeys." },
  { industry: "Finance", outcome: "Customer education, clear communication and enquiry generation." },
  { industry: "Events", outcome: "Premium positioning, visual storytelling and service presentation." },
  { industry: "D2C & E-commerce", outcome: "Brand building, online sales and customer retention." },
  { industry: "Furniture & Interiors", outcome: "Product discovery, digital catalogues and lead management." },
  { industry: "Healthcare", outcome: "Local search visibility and appointment enquiry systems." },
  { industry: "Manufacturing & B2B", outcome: "Product presentation, RFQs and sales pipeline systems." },
];

const APPROACH_STEPS = [
  { step: "01", name: "Understand", desc: "Learn the business, customers and objectives." },
  { step: "02", name: "Identify", desc: "Find the gaps affecting growth." },
  { step: "03", name: "Strategize", desc: "Choose the right priorities and solutions." },
  { step: "04", name: "Execute", desc: "Bring the required capabilities together." },
  { step: "05", name: "Improve", desc: "Review performance and refine the system." },
];

export default function CaseStudiesClient() {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === "All Projects") return true;
    if (selectedFilter === "Client Work") return p.label === "Client Work";
    return p.category === selectedFilter;
  });

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              OUR WORK IN ACTION
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Client Proof &amp; Concept Blueprints
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-6 leading-tight">
            Real Business Challenges.{" "}
            <span className="text-[#0097B2]">
              Thoughtful Growth Solutions.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Every business has a different growth challenge. Explore how strategy, marketing, branding, technology and automation can work together to solve them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Discuss Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Explore Our Work
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Verified Client Outcomes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>System Architecture Blueprints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Multi-Channel Attribution</span>
            </div>
          </div>

          {/* Premium Case Studies Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Documented Proof
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Featured Case Studies &amp; Blueprints
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                8 Case Studies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase">
                    Finance
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40">
                    Live Client
                  </span>
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  Apna Loanwala
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Customer education &amp; high-intent loan inquiry engine.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase">
                    Luxury Events
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40">
                    Live Client
                  </span>
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  TBH Events
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Luxury event positioning &amp; premium visual storytelling.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase">
                    Hospitality
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5">
                    Concept
                  </span>
                </div>
                <p className="text-xs font-bold text-[#0B2545] dark:text-white">
                  CK Homestay
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Local SEO &amp; direct commission-free booking funnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. FILTERS & LABEL SYSTEM */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]/50">
        <div className="max-w-7xl mx-auto">
          {/* Label System Explainer */}
          <div className="flex flex-wrap items-center gap-4 text-xs mb-8 p-4 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10">
            <span className="font-bold text-[#0B2545] dark:text-white">Project Labels:</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Client Work
              </span>
              <span className="text-slate-500 dark:text-slate-400">Actual client engagement.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Concept Case Study
              </span>
              <span className="text-slate-500 dark:text-slate-400">Illustrative project, not a commissioned client engagement.</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const isCurrent = selectedFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#0097B2] text-white shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 & 4. PROJECTS LISTING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Col: Info */}
                <div className="lg:col-span-8">
                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        project.label === "Client Work"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                      }`}
                    >
                      {project.label}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {project.industryTag}
                    </span>
                    {project.location && (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0097B2]" />
                        {project.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <h4 className="text-lg font-bold text-[#0097B2] mb-4">
                    {project.headline}
                  </h4>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        The Business Challenge:
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {project.label === "Client Work" ? "Our Approach:" : "Our Growth Approach:"}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Work Covered / Proposed Execution */}
                  <div className="mb-6 pt-4 border-t border-slate-200/80 dark:border-white/10">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                      {project.label === "Client Work" ? "Work Covered:" : "Proposed Execution:"}
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.workCovered.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Value */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 mb-6">
                    <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-1">
                      Business Value:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {project.businessValue}
                    </p>
                    {project.growthFocus && (
                      <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Growth Focus: {project.growthFocus}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right Col: Visual Card */}
                <div className="lg:col-span-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-900 shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mt-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Project Type:</span> {project.projectType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHAT THESE PROJECTS DEMONSTRATE */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              WHAT THESE PROJECTS DEMONSTRATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              One Growth Partner. Different Business Challenges.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEMONSTRATES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10"
              >
                <h3 className="text-base font-bold font-heading text-[#0097B2] mb-2">
                  {item.industry}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
              Every Project Starts With the Business Problem.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {APPROACH_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10"
              >
                <span className="text-xs font-mono font-bold text-[#0097B2] block mb-2">
                  {s.step} — {s.name}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Your Business Could Be Our Next Growth Story.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Tell us where your business stands, what is holding it back and where you want to go.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
