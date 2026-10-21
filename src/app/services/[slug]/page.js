// file: src/app/services/[slug]/page.js
import Link from "next/link";
import LeadForm from "./LeadForm";
import { 
  Check, ArrowRight, ShieldCheck, Laptop, 
  TrendingUp, Bot, Compass, BarChart3, Scale, 
  MessageSquare, Clock, Sparkles
} from "lucide-react";

export const revalidate = 60;

// Curated Service Knowledge Base
const SERVICE_DATABASE = {
  "search-engine-optimization-seo": {
    category: "Marketing & Demand",
    problem: "Most businesses spend thousands on ads because their organic presence and Google Maps 3-Pack rankings are invisible to high-intent local buyers.",
    whoFor: "Local service businesses, clinics, manufacturers, and multi-location brands seeking sustainable inbound customer calls without escalating ad spend.",
    deliverables: [
      "Google Business Profile 3-Pack Optimization & Geotagging",
      "High-Intent Commercial Keyword Architecture & Cluster Strategy",
      "Local Citation Consistency & NAP Directory Distribution",
      "Technical On-Page Core Web Vitals Performance Optimization",
      "Automated Review Generation & Reply Velocity Protocols"
    ],
    metric: "Rank #1 to #3 on Google Maps",
    icon: TrendingUp
  },
  "performance-advertising": {
    category: "Marketing & Demand",
    problem: "Ad budgets burn on generic Meta and Google campaigns that deliver clicks and impressions but zero qualified leads or sales pipeline.",
    whoFor: "Growing D2C brands, B2B companies, and high-ticket service firms looking for disciplined customer acquisition with a positive ROAS.",
    deliverables: [
      "Full-Funnel Meta (Facebook & Instagram) Ad Campaigns",
      "Google Search High-Intent Commercial Keyword Bidding",
      "Audience Segmentation, Retargeting & Lookalike Modeling",
      "Ad Creative Copywriting, Video Hooks & Asset Testing",
      "Closed-Loop Multi-Touch Revenue Attribution Tracking"
    ],
    metric: "Profitable CAC & Unit Economics",
    icon: TrendingUp
  },
  "website-development": {
    category: "Conversion & Digital Experience",
    problem: "Outdated, slow WordPress templates and clumsy page builders suffer from high bounce rates and cart drop-offs before users even read your offer.",
    whoFor: "Ambitious businesses that need a lightning-fast, production-grade digital platform that converts traffic into paying customers.",
    deliverables: [
      "Custom Sub-Second Next.js App Router Architecture",
      "Google Core Web Vitals Optimization (<0.8s LCP)",
      "Mobile-First Responsive Conversion Funnel Layouts",
      "Tailwind CSS Brand Design System & Accessibility (a11y)",
      "Enterprise Form Validation & Instant WhatsApp CRM Routing"
    ],
    metric: "Sub-Second LCP Load Speed",
    icon: Laptop
  },
  "ai-business-automation-systems": {
    category: "AI & Business Automation",
    problem: "Inbound leads wait hours for manual follow-up, customer support inquiries bottleneck staff, and repetitive data entry wastes valuable hours.",
    whoFor: "Companies receiving high daily customer inquiries that want to automate lead qualification, appointment booking, and CRM pipeline sync.",
    deliverables: [
      "Official WhatsApp Cloud API 24/7 Conversational Workflows",
      "Autonomous Lead Qualification & Calendar Booking Bots",
      "CRM & Payment Gateway Webhook Synchronization",
      "Automated Customer Review & Re-Engagement Drip Sequences",
      "Internal Document Extraction & Operational AI Tools"
    ],
    metric: "< 4 Minute First-Touch Response",
    icon: Bot
  },
  "brand-strategy-positioning": {
    category: "Growth Strategy",
    problem: "Businesses struggle with price competition and high CAC because their market positioning sounds identical to every other vendor in their category.",
    whoFor: "Founders and leadership teams preparing to scale, enter new markets, or reposition from commodity services into high-ticket category leaders.",
    deliverables: [
      "Ideal Customer Profile (ICP) & Buyer Intent Mapping",
      "Competitive Vulnerability & Market White-Space Identification",
      "Commercial Offer Structuring & High-Margin Pricing Models",
      "Core Value Proposition, Tagline & Brand Messaging Bible",
      "12-Month Compounding Growth Architecture Plan"
    ],
    metric: "Category Leadership & Higher Margins",
    icon: Compass
  },
  "ai-data-analytics-business-intelligence": {
    category: "Data & Intelligence",
    problem: "Leadership operates blind with disjointed Google Analytics and ad dashboards, unable to pinpoint which marketing channels actually deposit money in the bank.",
    whoFor: "Companies spending significant monthly capital across multiple marketing channels that require true unit economics visibility.",
    deliverables: [
      "Closed-Loop Multi-Touch Attribution Engine",
      "Real-Time Executive Business Intelligence Dashboards",
      "Customer Acquisition Cost (CAC) vs Lifetime Value (LTV) Tracking",
      "Cohort Churn & Repurchase Frequency Analysis",
      "Weekly Actionable Capital Reallocation Recommendations"
    ],
    metric: "100% Capital Allocation Clarity",
    icon: BarChart3
  },
  "business-compliance-management": {
    category: "Business Operations Support",
    problem: "Growing businesses face regulatory penalties, GST notices, or trademark vulnerability due to fragmented compliance management.",
    whoFor: "Enterprises, startups, and growing firms requiring airtight statutory compliance, intellectual property protection, and corporate governance.",
    deliverables: [
      "Comprehensive Corporate Compliance Audit & Oversight",
      "GST Return Filing, Reconciliation & Input Tax Optimization",
      "Trademark & Intellectual Property Defense",
      "Statutory Registers, Minutes & ROC Corporate Filings",
      "Financial Integrity & Executive Advisory Reviews"
    ],
    metric: "Airtight Statutory Protection",
    icon: Scale
  }
};

const getServiceDetails = (slug) => {
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const entry = SERVICE_DATABASE[slug];

  if (entry) {
    return {
      title,
      category: entry.category,
      problem: entry.problem,
      whoFor: entry.whoFor,
      deliverables: entry.deliverables,
      metric: entry.metric,
      short_description: `Professional ${title} services engineered by SM NextGen to build compounding customer acquisition and operational efficiency.`
    };
  }

  // Sensible default for any dynamic slug
  return {
    title,
    category: "Strategic Growth Discipline",
    problem: `Businesses often struggle with fragmented execution in ${title.toLowerCase()}, resulting in high customer acquisition costs and lost revenue.`,
    whoFor: "Growing businesses seeking integrated, measurable growth systems rather than disconnected marketing tactics.",
    deliverables: [
      `Full-Funnel ${title} Diagnostic & Gap Analysis`,
      "Custom Implementation Architecture & Milestones",
      "In-House Engineering, Deployment & Quality Assurance",
      "Closed-Loop Attribution & Performance Telemetry",
      "Weekly Strategic Governance & Continuous Optimization"
    ],
    metric: "Compounding Growth System",
    short_description: `Enterprise-grade ${title} engineered by SM NextGen. Strategy, technology, and execution delivered as one connected system.`
  };
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = getServiceDetails(slug);
  
  return {
    title: `${service.title} | SM NextGen — Business Growth Partner`,
    description: service.short_description,
    keywords: `${service.title}, SM NextGen, business growth, growth partner, local SEO, marketing automation, Udaipur`,
    alternates: {
      canonical: `https://smnextgen.com/services/${slug}`,
    }
  };
}

export default async function ServiceDetail({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = getServiceDetails(slug);

  return (
    <main className="bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#071A30] dark:to-[#030D1A] border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>{service.category}</span>
              <span>•</span>
              <span>In-House Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
              {service.short_description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#0097B2]" />
                <span>Zero Outsourcing Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>{service.metric}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ANSWERS & STICKY INTAKE FORM */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Content (7 Cols): The 5 Core Answers */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Question 1: What Problem Does This Solve? */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                  01 • The Problem We Solve
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Why Fragmented Approaches Fail
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {service.problem}
                </p>
              </div>

              {/* Question 2: Who Is It For? */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                  02 • Target Audience
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Who This Discipline Is Built For
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {service.whoFor}
                </p>
              </div>

              {/* Question 3: What Do We Actually Deliver? */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 space-y-4">
                <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                  03 • Tangible Scope
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                  What SM NextGen Actually Delivers
                </h2>
                <div className="space-y-2.5 pt-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question 4: How Does The Engagement Work? */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 space-y-4">
                <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                  04 • Engagement Process
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2545] dark:text-white">
                  Our 4-Stage Execution Methodology
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1">
                    <span className="font-mono font-bold text-[#0097B2]">Stage 01 • Audit</span>
                    <p className="text-slate-600 dark:text-slate-300 font-light">Deep audit of your current channels, conversion friction, and competitor gaps.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1">
                    <span className="font-mono font-bold text-[#0097B2]">Stage 02 • Architecture</span>
                    <p className="text-slate-600 dark:text-slate-300 font-light">Custom implementation roadmap mathematically aligned with your unit economics.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1">
                    <span className="font-mono font-bold text-[#0097B2]">Stage 03 • Deployment</span>
                    <p className="text-slate-600 dark:text-slate-300 font-light">In-house engineering of assets, campaigns, funnels, and automated CRM webhooks.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1">
                    <span className="font-mono font-bold text-[#0097B2]">Stage 04 • Optimization</span>
                    <p className="text-slate-600 dark:text-slate-300 font-light">Weekly attribution reviews and continuous split-testing to maximize cashflow.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side (5 Cols): Sticky Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <LeadForm serviceTitle={service.title} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#071A30] to-[#040e1b] text-white border border-[#0097B2]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Ready to Discuss ${service.title}?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Speak Directly with Senior Strategists.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              We audit your requirements and outline a concrete execution proposal with zero junior hand-offs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              Request Consultation
            </Link>
            <a
              href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Team%2C%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
