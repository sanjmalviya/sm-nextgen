"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Calculator,
  Compass,
  ArrowRight,
  CheckCircle2,
  Copy,
  RotateCcw,
  Sparkles,
  Search,
  ExternalLink,
  Percent,
  TrendingUp,
  DollarSign,
  Globe,
  Share2,
  ListChecks,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";

export default function ToolsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Tools");

  // Tool 1: ROAS Calculator
  const [roasAdSpend, setRoasAdSpend] = useState(25000);
  const [roasRevenue, setRoasRevenue] = useState(100000);

  // Tool 2: CAC Calculator
  const [cacTotalSpend, setCacTotalSpend] = useState(50000);
  const [cacNewCustomers, setCacNewCustomers] = useState(25);

  // Tool 3: Break-Even ROAS Calculator
  const [beAov, setBeAov] = useState(2000);
  const [beProductCost, setBeProductCost] = useState(800);
  const [beShipping, setBeShipping] = useState(150);
  const [bePaymentFee, setBePaymentFee] = useState(50);
  const [beOtherVar, setBeOtherVar] = useState(100);

  // Tool 4: Profit Margin Calculator
  const [pmPrice, setPmPrice] = useState(1500);
  const [pmCost, setPmCost] = useState(900);

  // Tool 5: UTM Builder
  const [utmUrl, setUtmUrl] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [copiedUtm, setCopiedUtm] = useState(false);

  // Tool 6: Website Growth Checklist
  const [websiteChecklist, setWebsiteChecklist] = useState({
    mobile: false,
    speed: false,
    clearOffer: false,
    contactEasy: false,
    ctaVisible: false,
    analyticsConnected: false,
    seoOptimized: false,
    easyEnquiry: false,
  });

  // Tool 7: Local SEO Readiness Checker
  const [localSeoChecklist, setLocalSeoChecklist] = useState({
    gbpClaimed: false,
    napCorrect: false,
    categoriesRelevant: false,
    servicesUpdated: false,
    photosRecent: false,
    reviewsResponded: false,
    directoriesConsistent: false,
    websiteLinked: false,
  });

  // Manual Review Form
  const [reviewName, setReviewName] = useState("");
  const [reviewUrl, setReviewUrl] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewPhone, setReviewPhone] = useState("");
  const [reviewDetails, setReviewDetails] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // --- Calculations ---
  // ROAS
  const calcRoas = roasAdSpend > 0 ? (roasRevenue / roasAdSpend).toFixed(2) : "0.00";
  const calcRevPerRupee = roasAdSpend > 0 ? (roasRevenue / roasAdSpend).toFixed(2) : "0.00";
  const calcNetAdRev = roasRevenue - roasAdSpend;

  // CAC
  const calcCac = cacNewCustomers > 0 ? (cacTotalSpend / cacNewCustomers).toFixed(2) : "0.00";

  // Break-Even ROAS
  const totalVariableCosts = Number(beProductCost) + Number(beShipping) + Number(bePaymentFee) + Number(beOtherVar);
  const contributionBeforeAds = Math.max(0, beAov - totalVariableCosts);
  const calcBeRoas = contributionBeforeAds > 0 ? (beAov / contributionBeforeAds).toFixed(2) : "N/A";
  const maxAdCostPerOrder = contributionBeforeAds;

  // Profit Margin
  const grossProfit = pmPrice - pmCost;
  const calcProfitMargin = pmPrice > 0 ? ((grossProfit / pmPrice) * 100).toFixed(1) : "0.0";
  const calcMarkup = pmCost > 0 ? ((grossProfit / pmCost) * 100).toFixed(1) : "0.0";

  // UTM Link Output
  const buildUtmUrl = () => {
    if (!utmUrl) return "";
    try {
      const url = new URL(utmUrl.startsWith("http") ? utmUrl : `https://${utmUrl}`);
      if (utmSource) url.searchParams.set("utm_source", utmSource);
      if (utmMedium) url.searchParams.set("utm_medium", utmMedium);
      if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign);
      if (utmTerm) url.searchParams.set("utm_term", utmTerm);
      if (utmContent) url.searchParams.set("utm_content", utmContent);
      return url.toString();
    } catch {
      return "";
    }
  };

  const handleCopyUtm = () => {
    const url = buildUtmUrl();
    if (url) {
      navigator.clipboard.writeText(url);
      setCopiedUtm(true);
      setTimeout(() => setCopiedUtm(false), 2000);
    }
  };

  const resetUtm = () => {
    setUtmUrl("");
    setUtmSource("");
    setUtmMedium("");
    setUtmCampaign("");
    setUtmTerm("");
    setUtmContent("");
  };

  // Checklist percentages
  const websiteItemsChecked = Object.values(websiteChecklist).filter(Boolean).length;
  const websitePercentage = Math.round((websiteItemsChecked / 8) * 100);

  const localSeoItemsChecked = Object.values(localSeoChecklist).filter(Boolean).length;
  const localSeoPercentage = Math.round((localSeoItemsChecked / 8) * 100);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewName || !reviewUrl || !reviewEmail || !reviewPhone) return;

    try {
      const payload = {
        access_key: "e4fe151c-7df8-43d9-9528-7657ad7a72d7",
        subject: `Manual Website Review Request: ${reviewName}`,
        from_name: "SM NextGen Free Tools Review",
        name: reviewName,
        website: reviewUrl,
        email: reviewEmail,
        phone: reviewPhone,
        notes: reviewDetails,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setReviewSubmitted(true);
    } catch {
      const waMsg = `Hi SM NextGen Team, I would like to request a manual website review for: ${reviewUrl}\nName: ${reviewName}\nPhone: ${reviewPhone}`;
      window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
      setReviewSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const waMsg = "Hi SM NextGen Team, I would like to discuss business growth tools and performance.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  const CATEGORIES = [
    "All Tools",
    "Marketing",
    "Sales & Revenue",
    "Website & SEO",
    "Business Growth",
  ];

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              FREE BUSINESS GROWTH TOOLS
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              7 Interactive Calculators &amp; Audits
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Make Smarter{" "}
            <span className="text-[#0097B2]">
              Business Decisions.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Free calculators and practical tools to help you understand your marketing, sales, website performance and business growth opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href="#tools-list"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <span>Explore Free Tools</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition flex items-center justify-center shadow-xs"
            >
              Talk to a Growth Expert
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-200 font-medium mb-12 sm:mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Free to Use — No Sign Up Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Verified Indian Rupee (₹) Math</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0097B2]" />
              <span>Instant Diagnostic Feedback</span>
            </div>
          </div>

          {/* Premium Interactive Tools Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Interactive Decision Engine
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Calculators &amp; Growth Checklists
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40">
                Live &amp; Instant
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {[
                { n: "01", t: "ROAS & Revenue Calculator", d: "Calculate ad return and net revenue" },
                { n: "02", t: "Customer Acquisition Cost", d: "Evaluate CAC against transaction margins" },
                { n: "03", t: "Break-Even ROAS Calculator", d: "Discover your minimum viable return" },
                { n: "04", t: "Profit Margin & Markup", d: "Determine gross margins and markup prices" },
                { n: "05", t: "Campaign UTM Builder", d: "Generate structured tracking links" },
                { n: "06", t: "Website Growth Audit", d: "8-point technical and UX checklist" },
              ].map((tool) => (
                <a
                  key={tool.n}
                  href="#tools-list"
                  className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group block"
                >
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] bg-cyan-50 dark:bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-200/60 dark:border-cyan-800/40 block w-max mb-1.5">
                    {tool.n}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">
                    {tool.t}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {tool.d}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. CATEGORY FILTERS */}
      <section id="tools-list" className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]/50 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isCurrent = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#0097B2] text-white shadow-sm"
                    : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED GROWTH CALCULATORS & TOOLS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* TOOL 01: ROAS CALCULATOR */}
          {(selectedCategory === "All Tools" || selectedCategory === "Marketing" || selectedCategory === "Sales & Revenue") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                    01. ROAS Calculator • Marketing &amp; Advertising
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                    Is Your Advertising Actually Paying Off?
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                    Calculate the revenue generated from your advertising spend.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Total Advertising Spend (₹)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={roasAdSpend}
                        onChange={(e) => setRoasAdSpend(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Revenue Generated from Ads (₹)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={roasRevenue}
                        onChange={(e) => setRoasRevenue(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mt-4">
                    Formula: ROAS = Revenue Attributed to Ads ÷ Ad Spend
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Note: This is an advertising efficiency calculation, not net business profit.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-white dark:bg-[#030D1A] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10">
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-6">
                    Calculated Results
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Return on Ad Spend (ROAS)</span>
                      <span className="text-4xl font-extrabold font-heading text-[#0097B2]">{calcRoas}x</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Revenue per ₹1 Spent</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{calcRevPerRupee}</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Net Revenue After Ad Spend</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{calcNetAdRev.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 02: CUSTOMER ACQUISITION COST (CAC) */}
          {(selectedCategory === "All Tools" || selectedCategory === "Marketing" || selectedCategory === "Sales & Revenue") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                    02. Customer Acquisition Cost Calculator • Sales &amp; Marketing
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                    How Much Does It Cost to Acquire a Customer?
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                    Understand how much you&apos;re spending to gain each new customer.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Total Marketing &amp; Sales Spend (₹)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={cacTotalSpend}
                        onChange={(e) => setCacTotalSpend(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Number of New Customers Acquired
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={cacNewCustomers}
                        onChange={(e) => setCacNewCustomers(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mt-4">
                    Formula: CAC = Total Acquisition Spend ÷ New Customers Acquired
                  </p>
                </div>

                <div className="lg:col-span-6 bg-white dark:bg-[#030D1A] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10">
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-6">
                    Calculated Results
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Customer Acquisition Cost (CAC)</span>
                      <span className="text-4xl font-extrabold font-heading text-[#0097B2]">₹{calcCac}</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Total Acquisition Spend</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{cacTotalSpend.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Cost per New Customer</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{calcCac}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 03: BREAK-EVEN ROAS */}
          {(selectedCategory === "All Tools" || selectedCategory === "Marketing" || selectedCategory === "Business Growth") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                    03. Break-Even ROAS Calculator • E-commerce &amp; Performance Marketing
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                    Know the ROAS You Need to Break Even.
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                    Find the advertising return required to cover your product and selling costs.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Average Order Value (₹)
                      </label>
                      <input
                        type="number"
                        value={beAov}
                        onChange={(e) => setBeAov(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Product Cost per Order (₹)
                      </label>
                      <input
                        type="number"
                        value={beProductCost}
                        onChange={(e) => setBeProductCost(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Shipping &amp; Fulfilment (₹)
                      </label>
                      <input
                        type="number"
                        value={beShipping}
                        onChange={(e) => setBeShipping(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Payment &amp; Platform Fees (₹)
                      </label>
                      <input
                        type="number"
                        value={bePaymentFee}
                        onChange={(e) => setBePaymentFee(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Other Variable Costs per Order (₹)
                      </label>
                      <input
                        type="number"
                        value={beOtherVar}
                        onChange={(e) => setBeOtherVar(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mt-4">
                    Formula: Break-Even ROAS = Average Order Value ÷ Contribution Before Advertising
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Note: Excludes fixed overheads and taxes unless entered as costs.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-white dark:bg-[#030D1A] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10">
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-6">
                    Calculated Results
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Break-Even ROAS</span>
                      <span className="text-4xl font-extrabold font-heading text-[#0097B2]">{calcBeRoas}x</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Contribution Before Advertising</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{contributionBeforeAds.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Maximum Break-Even Ad Cost per Order</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{maxAdCostPerOrder.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 04: PROFIT MARGIN CALCULATOR */}
          {(selectedCategory === "All Tools" || selectedCategory === "Business Growth" || selectedCategory === "Sales & Revenue") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                    04. Profit Margin Calculator • Business Finance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                    Understand What Your Business Keeps.
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                    Calculate the profit margin on a product or service.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Selling Price (₹)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={pmPrice}
                        onChange={(e) => setPmPrice(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Total Cost (₹)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={pmCost}
                        onChange={(e) => setPmCost(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm font-semibold text-[#0B2545] dark:text-white"
                      />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mt-4">
                    Formula: Profit Margin = (Selling Price − Total Cost) ÷ Selling Price × 100
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Note: The result reflects the costs entered, not necessarily final net profit.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-white dark:bg-[#030D1A] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10">
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-6">
                    Calculated Results
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Profit Margin (%)</span>
                      <span className="text-4xl font-extrabold font-heading text-[#0097B2]">{calcProfitMargin}%</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Gross Profit</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">₹{grossProfit.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Markup (%)</span>
                      <span className="text-base font-bold text-[#0B2545] dark:text-white">{calcMarkup}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 05: UTM LINK BUILDER */}
          {(selectedCategory === "All Tools" || selectedCategory === "Marketing") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                05. UTM Link Builder • Marketing Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                Track Where Your Website Traffic Comes From.
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                Create trackable campaign links to identify traffic sources in your analytics.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Website URL *
                  </label>
                  <input
                    type="text"
                    value={utmUrl}
                    onChange={(e) => setUtmUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Campaign Source *
                  </label>
                  <input
                    type="text"
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    placeholder="google, meta, newsletter"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Campaign Medium *
                  </label>
                  <input
                    type="text"
                    value={utmMedium}
                    onChange={(e) => setUtmMedium(e.target.value)}
                    placeholder="cpc, banner, email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Campaign Name *
                  </label>
                  <input
                    type="text"
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    placeholder="summer_sale, lead_gen_q1"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Campaign Term (Optional)
                  </label>
                  <input
                    type="text"
                    value={utmTerm}
                    onChange={(e) => setUtmTerm(e.target.value)}
                    placeholder="running+shoes"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                    Campaign Content (Optional)
                  </label>
                  <input
                    type="text"
                    value={utmContent}
                    onChange={(e) => setUtmContent(e.target.value)}
                    placeholder="logolink, textlink"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-xs text-[#0B2545] dark:text-white"
                  />
                </div>
              </div>

              {/* Output */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-mono font-bold text-slate-400 block mb-2">Generated Tracking Link:</span>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="text"
                    readOnly
                    value={buildUtmUrl() || "Enter your website URL and parameters above..."}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-[#0B2545] dark:text-white select-all"
                  />
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopyUtm}
                      disabled={!buildUtmUrl()}
                      className="px-4 py-2 rounded-xl bg-[#0097B2] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedUtm ? "Copied" : "Copy Link"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetUtm}
                      className="px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-300 text-xs font-bold cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 06: WEBSITE GROWTH CHECKLIST */}
          {(selectedCategory === "All Tools" || selectedCategory === "Website & SEO") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                06. Website Growth Checklist • Website &amp; Conversion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                Is Your Website Ready to Convert Visitors?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                A practical self-assessment covering the essentials of a business website.
              </p>

              <div className="grid md:grid-cols-2 gap-3.5 mb-8">
                {[
                  { key: "mobile", label: "Is your website mobile-friendly?" },
                  { key: "speed", label: "Does it load efficiently?" },
                  { key: "clearOffer", label: "Is your main service or product clear?" },
                  { key: "contactEasy", label: "Is the contact information easy to find?" },
                  { key: "ctaVisible", label: "Are your calls to action visible?" },
                  { key: "analyticsConnected", label: "Is your website connected to analytics?" },
                  { key: "seoOptimized", label: "Are important pages optimized for search?" },
                  { key: "easyEnquiry", label: "Can visitors enquire or purchase easily?" },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 cursor-pointer hover:border-[#0097B2]/40 transition"
                  >
                    <input
                      type="checkbox"
                      checked={websiteChecklist[item.key]}
                      onChange={(e) =>
                        setWebsiteChecklist((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="w-4 h-4 rounded text-[#0097B2] accent-[#0097B2]"
                    />
                    <span className="text-xs sm:text-sm text-[#0B2545] dark:text-slate-200">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Output */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Completed Checklist Percentage</span>
                    <span className="text-3xl font-extrabold font-heading text-[#0097B2]">{websitePercentage}% Complete</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                      {8 - websiteItemsChecked} items needing attention
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    Suggested Next Steps
                  </Link>
                </div>
                <p className="text-[11px] text-slate-400 mt-4">
                  Note: This is a self-assessment, not an automated technical audit.
                </p>
              </div>
            </div>
          )}

          {/* TOOL 07: LOCAL SEO READINESS CHECKER */}
          {(selectedCategory === "All Tools" || selectedCategory === "Website & SEO") && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
                07. Local SEO Readiness Checker • Local Business &amp; SEO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white mb-3">
                How Easily Can Customers Find Your Business Locally?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                Review the important foundations of your local online presence.
              </p>

              <div className="grid md:grid-cols-2 gap-3.5 mb-8">
                {[
                  { key: "gbpClaimed", label: "Google Business Profile claimed and verified" },
                  { key: "napCorrect", label: "Correct business name, address and phone" },
                  { key: "categoriesRelevant", label: "Relevant business categories" },
                  { key: "servicesUpdated", label: "Services and business description updated" },
                  { key: "photosRecent", label: "Recent business photos" },
                  { key: "reviewsResponded", label: "Customer reviews and responses" },
                  { key: "directoriesConsistent", label: "Consistent business information across directories" },
                  { key: "websiteLinked", label: "Website connected to the business profile" },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10 cursor-pointer hover:border-[#0097B2]/40 transition"
                  >
                    <input
                      type="checkbox"
                      checked={localSeoChecklist[item.key]}
                      onChange={(e) =>
                        setLocalSeoChecklist((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="w-4 h-4 rounded text-[#0097B2] accent-[#0097B2]"
                    />
                    <span className="text-xs sm:text-sm text-[#0B2545] dark:text-slate-200">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Output */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#030D1A] border border-slate-200/80 dark:border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Local SEO Readiness Score</span>
                    <span className="text-3xl font-extrabold font-heading text-[#0097B2]">{localSeoPercentage}%</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                      {8 - localSeoItemsChecked} missing setup items
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    Suggested Improvements
                  </Link>
                </div>
                <p className="text-[11px] text-slate-400 mt-4">
                  Note: A checklist-based assessment, not a live Google ranking report.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. MANUAL EXPERT REVIEW */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30]/50 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-3">
              WANT A MORE DETAILED PERSPECTIVE?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
              Some Growth Problems Need a Human Eye.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
              Our team can review your website and digital presence to identify potential improvement areas.
            </p>

            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Review Areas:
            </span>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Website structure and user experience",
                "Conversion journey",
                "SEO foundations",
                "Digital brand presentation",
                "Lead enquiry experience",
                "Marketing opportunities",
              ].map((area, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Note: This is a manual review request. The scope and delivery details will be confirmed with the business before work begins.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 shadow-sm">
              {reviewSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                    Review Request Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                    Our growth advisory team will review your website and get in touch with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-2">
                    Request a Website Review
                  </h3>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={reviewUrl}
                      onChange={(e) => setReviewUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={reviewEmail}
                        onChange={(e) => setReviewEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={reviewPhone}
                        onChange={(e) => setReviewPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                      What would you like us to review? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={reviewDetails}
                      onChange={(e) => setReviewDetails(e.target.value)}
                      placeholder="e.g. mobile conversion, SEO drop, lead flow..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#030D1A] border border-slate-200 dark:border-white/10 text-sm text-[#0B2545] dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Request a Website Review</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORE THAN FREE TOOLS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4">
            Numbers Show the Picture. Strategy Creates the Direction.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Use these tools to understand your business better. When you&apos;re ready to take the next step, SM NextGen can help connect strategy, marketing, technology and automation into one growth approach.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
          >
            <span>Explore Our Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Have a Bigger Growth Challenge?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Let&apos;s understand your business and identify the right opportunities.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#0097B2]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
