"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Activity,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Sliders,
  Check,
  ChevronDown,
  Info
} from "lucide-react";

export const AUDIT_FACTORS = [
  // 1. Business Info
  { id: "af-1", category: "Business Information", name: "Exact Business Name Consistency", standard: "Matches official registered signage without keyword stuffing", current: "Registered Business Name", status: "PASS", points: 4, fixed: true },
  { id: "af-2", category: "Business Information", name: "Primary Category Accuracy", standard: "High intent primary category configured", current: "Core Industry Category", status: "PASS", points: 4, fixed: true },
  { id: "af-3", category: "Business Information", name: "Secondary Commercial Categories", standard: "At least 3 secondary categories configured", current: "Configured secondary categories", status: "WARN", points: 6, fixed: false, fixAction: "Add high-intent secondary categories" },
  { id: "af-4", category: "Business Information", name: "Direct Local Phone Number", standard: "Direct phone with international format (+91 or US +1)", current: "+91 70735 38077", status: "PASS", points: 3, fixed: true },
  { id: "af-5", category: "Business Information", name: "Storefront Physical Address", standard: "Precise street address with pincode / zip", current: "Verified commercial address", status: "PASS", points: 3, fixed: true },
  { id: "af-6", category: "Business Information", name: "Standard & Holiday Hours", standard: "Operating hours configured with holiday schedules", current: "Mon-Sat: 9:30 AM - 8:00 PM", status: "PASS", points: 3, fixed: true },
  { id: "af-7", category: "Business Information", name: "750-Char Business Description", standard: "Full 750 characters with local service keywords and CTA", current: "Needs local SEO optimization", status: "WARN", points: 5, fixed: false, fixAction: "Expand to 750 characters with SEO description tool" },

  // 2. Reviews & Reputation
  { id: "af-8", category: "Reviews & Reputation", name: "Average Star Rating Baseline", standard: "Above 4.5 stars for local 3-Pack placement", current: "4.8 Stars (Strong)", status: "PASS", points: 6, fixed: true },
  { id: "af-9", category: "Reviews & Reputation", name: "Total Review Volume Threshold", standard: "Over 50 verified customer reviews in metro area", current: "Verified Google Reviews", status: "PASS", points: 5, fixed: true },
  { id: "af-10", category: "Reviews & Reputation", name: "Unanswered Review Backlog", standard: "Zero unanswered reviews older than 48 hours", current: "Unanswered reviews pending response", status: "WARN", points: 8, fixed: false, fixAction: "Generate and publish AI replies for all reviews" },
  { id: "af-11", category: "Reviews & Reputation", name: "Review Response Velocity", standard: "Owner reply within 24 hours of customer posting", current: "Average response time", status: "WARN", points: 5, fixed: false, fixAction: "Enable 24-hr review alert workflows" },
  { id: "af-12", category: "Reviews & Reputation", name: "Negative Review De-escalation", standard: "100% of critical reviews have polite public resolution", current: "Resolution workflow pending", status: "WARN", points: 7, fixed: false, fixAction: "Publish professional resolution to critical feedback" },

  // 3. Media & Content
  { id: "af-13", category: "Media & Photos", name: "Verified Profile & Cover Logo", standard: "High-resolution cover image and brand logo", current: "Present & Verified", status: "PASS", points: 4, fixed: true },
  { id: "af-14", category: "Media & Photos", name: "Exterior Streetfront Photos", standard: "Clear daylight photos showing street signage and entrance", current: "Exterior photos uploaded", status: "PASS", points: 3, fixed: true },
  { id: "af-15", category: "Media & Photos", name: "Office Interior & Workspaces", standard: "Interior photos of customer service area, office, and facilities", current: "Interior photos on file", status: "WARN", points: 4, fixed: false, fixAction: "Upload new photos of business office & team" },
  { id: "af-16", category: "Media & Photos", name: "30-Day Visual Upload Freshness", standard: "At least 3 new photos uploaded in the last 30 days", current: "Photo upload recency check", status: "WARN", points: 6, fixed: false, fixAction: "Upload fresh photos of team & client deliverables" },

  // 4. Activity & Posts
  { id: "af-17", category: "Activity & Google Posts", name: "Weekly Google Post Frequency", standard: "At least 1 active post every 7 days (Google posts expire)", current: "Post frequency check", status: "WARN", points: 5, fixed: false, fixAction: "Publish weekly business update" },
  { id: "af-18", category: "Activity & Google Posts", name: "Promotional Call-To-Action Button", standard: "Google Posts include direct 'Call Now' or 'Book' CTAs", current: "Actionable CTA check", status: "WARN", points: 4, fixed: false, fixAction: "Attach 'Call Now' button to upcoming post" },
  { id: "af-19", category: "Activity & Google Posts", name: "Special Offer / Event Campaign", standard: "Active promotional offer or seasonal campaign live", current: "Seasonal promotion check", status: "WARN", points: 4, fixed: false, fixAction: "Launch promotional business offer" },
  { id: "af-20", category: "Activity & Google Posts", name: "Business Amenities & Attributes", standard: "Payment methods, accessibility, and service options declared", current: "Profile attributes configured", status: "PASS", points: 3, fixed: true },

  // 5. Customer Trust & Local SEO
  { id: "af-21", category: "Local SEO & Trust", name: "Verified Website Domain Link", standard: "Secure HTTPS website link matching local schema", current: "Website URL configured", status: "PASS", points: 4, fixed: true },
  { id: "af-22", category: "Local SEO & Trust", name: "Online Booking / Appointment URL", standard: "Dedicated direct contact / appointment link configured", current: "Configured & responsive", status: "PASS", points: 3, fixed: true },
  { id: "af-23", category: "Local SEO & Trust", name: "Service Area Coverage Configuration", standard: "Target neighborhood service areas specified in local radius", current: "Service radius specified", status: "WARN", points: 4, fixed: false, fixAction: "Refine micro-neighborhood coverage areas" },
  { id: "af-24", category: "Local SEO & Trust", name: "Google Q&A Pre-population", standard: "Top 5 frequently asked customer questions answered by owner", current: "Customer FAQ check", status: "WARN", points: 5, fixed: false, fixAction: "Pre-populate top 5 customer FAQs with verified answers" }
];

export default function AuditTab({ auditScore, appliedFixes, onApplyAuditFix, business, serverAudit, onRerunAudit }) {
  const [filter, setFilter] = useState("ALL"); // ALL, ATTENTION, PASS
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const factors = AUDIT_FACTORS.map((f) => {
    if (f.id === "af-1" && business?.name) return { ...f, current: business.name };
    if (f.id === "af-2" && business?.category) return { ...f, current: business.category };
    if (f.id === "af-4" && business?.phone) return { ...f, current: business.phone };
    if (f.id === "af-5" && business?.address) return { ...f, current: `${business.address}, ${business.city || ""}` };
    if (f.id === "af-21" && business?.website) return { ...f, current: business.website };
    return f;
  });

  const categories = ["ALL", "Business Information", "Reviews & Reputation", "Media & Photos", "Activity & Google Posts", "Local SEO & Trust"];

  const filteredFactors = factors.filter((f) => {
    const isResolved = f.fixed || appliedFixes[f.id];
    if (filter === "ATTENTION" && isResolved) return false;
    if (filter === "PASS" && !isResolved) return false;
    if (selectedCategory !== "ALL" && f.category !== selectedCategory) return false;
    return true;
  });

  const resolvedCount = factors.filter(f => f.fixed || appliedFixes[f.id]).length;
  const attentionCount = factors.length - resolvedCount;

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {!business?.googleConnected && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">BASELINE PROFILE</span>
            <span>Displaying initial diagnostic checklist. Link your Google Business Profile to verify actual ranking status on Google Maps.</span>
          </div>
        </div>
      )}
      
      {/* Audit Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>24-Point Algorithmic Diagnostic</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Comprehensive Google Profile Audit
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1">
            SM NextGen proprietary 24-point audit framework. Evaluates local SEO factors (relevance, prominence, and completeness). Not an official Google rating or ranking guarantee.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Current Score</div>
            <div className="text-3xl font-extrabold text-[#0097B2]">{auditScore}<span className="text-xs text-slate-500 font-normal">/100</span></div>
          </div>
          <div className="h-10 w-px bg-slate-800"></div>
          <div>
            <div className="text-xs text-emerald-400 font-bold">{resolvedCount} Passing</div>
            <div className="text-xs text-amber-400 font-bold">{attentionCount} Needs Action</div>
          </div>
        </div>
      </div>

      {/* Filter and Category Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Status Filters */}
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilter("ALL")}
            className={"px-3 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "ALL" ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
          >
            All 24 Factors
          </button>
          <button
            onClick={() => setFilter("ATTENTION")}
            className={"px-3 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "ATTENTION" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white")}
          >
            Needs Action ({attentionCount})
          </button>
          <button
            onClick={() => setFilter("PASS")}
            className={"px-3 py-1.5 rounded-lg font-bold transition cursor-pointer " + (filter === "PASS" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white")}
          >
            Passing ({resolvedCount})
          </button>
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-xs text-white px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c === "ALL" ? "All Categories" : c}</option>
          ))}
        </select>
      </div>

      {/* 24 Audit Items Table / List */}
      <div className="space-y-3">
        {filteredFactors.map((item) => {
          const isResolved = item.fixed || appliedFixes[item.id];
          return (
            <div
              key={item.id}
              className={"p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 " + (isResolved ? "bg-slate-900/60 border-slate-800/80" : item.status === "FAIL" ? "bg-rose-500/5 border-rose-500/30" : "bg-amber-500/5 border-amber-500/30")}
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {isResolved ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> PASS
                    </span>
                  ) : item.status === "FAIL" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      <XCircle className="w-3 h-3" /> CRITICAL
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <AlertTriangle className="w-3 h-3" /> ATTENTION
                    </span>
                  )}

                  <span className="text-[11px] font-mono text-slate-400">{item.category}</span>
                  <span className="text-[10px] font-bold text-[#0097B2]">+{item.points} pts</span>
                </div>

                <h3 className="font-heading font-extrabold text-sm text-white">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-300">
                  <span className="text-slate-400">Current status: </span>
                  <strong className={isResolved ? "text-emerald-400" : "text-amber-300"}>{isResolved ? "Optimized & Active" : item.current}</strong>
                </p>

                <p className="text-[11px] text-slate-400">
                  <span className="text-slate-500">Google Best Practice: </span>{item.standard}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                {isResolved ? (
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5" />
                    <span>Factor Resolved</span>
                  </div>
                ) : (
                  <button
                    onClick={() => onApplyAuditFix(item.id, item.points, item.fixAction || item.name)}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white text-xs font-extrabold shadow-md transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fix Now (+{item.points} pts)</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
