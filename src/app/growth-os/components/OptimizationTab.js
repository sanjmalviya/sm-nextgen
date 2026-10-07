"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Sliders,
  Check,
  Building,
  Image,
  FileText,
  MapPin,
  Clock
} from "lucide-react";

export const OPTIMIZATION_ITEMS = [
  {
    id: "opt-1",
    category: "Profile",
    title: "Inject Primary City Anchor into GBP Title",
    issue: "Profile title does not specify 'Udaipur' explicitly, reducing prominence in neighboring search radiuses.",
    whyItMatters: "Local search algorithms give up to 34% weight to geographic prominence in map ranking packs.",
    action: "Append 'Udaipur' as secondary clinic descriptor without keyword stuffing.",
    points: 5,
    status: "PENDING"
  },
  {
    id: "opt-2",
    category: "Categories",
    title: "Add 'Dental Implants Provider' Category",
    issue: "High commercial-intent category missing from Google catalog.",
    whyItMatters: "Implant searches represent highest revenue dental queries with 4x average patient lifetime value.",
    action: "Add secondary category to backend GBP profile taxonomy.",
    points: 7,
    status: "PENDING"
  },
  {
    id: "opt-3",
    category: "Photos",
    title: "Upload High-Resolution Sterilization Lab Photos",
    issue: "No public photos showing European autoclaves and sanitization protocols.",
    whyItMatters: "Patient trust regarding hygiene is top conversion driver for elective medical care.",
    action: "Upload 3 verified sterile lab environment photos.",
    points: 4,
    status: "PENDING"
  },
  {
    id: "opt-4",
    category: "Content",
    title: "Publish Weekly Smile Makeover Google Post",
    issue: "Zero active promotional posts in the last 14 days.",
    whyItMatters: "Google posts expire after 7 days; active posts increase profile click-through rate by 22%.",
    action: "Generate and schedule promotional post with click-to-call CTA.",
    points: 5,
    status: "PENDING"
  },
  {
    id: "opt-5",
    category: "Local SEO",
    title: "Configure Neighborhood Service Radius",
    issue: "Service areas limited to Udaipur central, ignoring key suburbs: Sukher, Fatehpura, Panchwati.",
    whyItMatters: "Extends Google Maps radius coverage by 12 kilometers.",
    action: "Add suburban delivery zones to Google Business Profile settings.",
    points: 6,
    status: "PENDING"
  }
];

export default function OptimizationTab({ onApplyFix, appliedFixes }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Profile", "Categories", "Photos", "Content", "Local SEO"];

  const filtered = OPTIMIZATION_ITEMS.filter((item) => {
    if (activeCategory !== "ALL" && item.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Sliders className="w-3.5 h-3.5" />
          <span>Local SEO Optimization Center</span>
        </div>
        <h2 className="text-2xl font-heading font-extrabold text-white">
          High-Leverage Google Profile Optimizations
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Actionable recommendations prioritized by algorithmic ranking impact. Apply fixes directly with one click.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={"px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer " + (activeCategory === c ? "bg-[#0097B2] text-white shadow-md" : "bg-slate-900 text-slate-400 hover:text-white")}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Optimization Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isDone = appliedFixes[item.id];
          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#0097B2]/15 text-[#0097B2] border border-[#0097B2]/30">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    +{item.points} Growth Points
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-sm text-white">
                  {item.title}
                </h3>

                <div className="space-y-1.5 text-xs">
                  <p className="text-rose-300">
                    <strong className="text-rose-400">Issue: </strong>{item.issue}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-slate-400">Why it matters: </strong>{item.whyItMatters}
                  </p>
                  <p className="text-cyan-300">
                    <strong className="text-cyan-400">Action: </strong>{item.action}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Status: {isDone ? "Applied" : "Ready"}
                </span>

                {isDone ? (
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5" />
                    <span>Applied to Profile</span>
                  </div>
                ) : (
                  <button
                    onClick={() => onApplyFix(item.id, item.points, item.title)}
                    className="px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply Optimization</span>
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
