"use client";

import React from "react";
import {
  Star,
  Phone,
  MapPin,
  Eye,
  TrendingUp,
  Activity,
  ArrowRight,
  AlertTriangle,
  Sparkles,
  MessageSquare,
  Share2,
  CheckCircle2,
  Sliders,
  Building,
  ShieldCheck,
  Check,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function DashboardTab({
  business,
  kpi,
  auditScore,
  auditCategories,
  opportunities,
  onApplyOpportunity,
  onNavigateTab,
  unansweredReviewsCount
}) {
  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* 1. Main Proprietary Growth Score Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B2545] border border-[#0097B2]/30 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>SM NextGen Growth Score Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Google Business Profile Health & Growth Potential
            </h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Calculated across 24 algorithmic ranking factors (completeness, review velocity, photo freshness, and customer engagement).
            </p>
          </div>

          {/* Visual Circular Gauge / Score Card */}
          <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#0097B2]"
                  strokeDasharray={auditScore + ", 100"}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white">{auditScore}</span>
                <span className="text-[9px] text-slate-400 font-mono">/100</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                {auditScore >= 90 ? "Excellent • Top 3 Rank" : auditScore >= 75 ? "Good • High Growth Potential" : "Needs Immediate Fixes"}
              </div>
              <p className="text-[11px] text-slate-300 max-w-[160px] leading-tight">
                Benchmark: Beats 74% of competitors in {business?.city || "Udaipur"}.
              </p>
              <button
                onClick={() => onNavigateTab("audit")}
                className="text-[11px] font-bold text-[#0097B2] hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>View 24-point audit breakdown</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Category Breakdown Bars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
          {auditCategories.map((cat) => (
            <div key={cat.id} className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-slate-400 truncate max-w-[85px]">{cat.label}</span>
                <span className="font-bold text-white">{cat.score}/{cat.max}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={"h-full rounded-full " + (cat.status === "GOOD" ? "bg-emerald-500" : cat.status === "ATTENTION" ? "bg-amber-500" : "bg-rose-500")}
                  style={{ width: (cat.score / cat.max * 100) + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 7 Key KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Rating</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.rating}</div>
          <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" /> +0.2 this mo
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Reviews</span>
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.totalReviews}</div>
          <div className="text-[10px] text-slate-400 mt-1">Verified on Maps</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Unanswered</span>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-amber-400">{unansweredReviewsCount}</div>
          <div className="text-[10px] text-rose-400 mt-1">Needs AI reply</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Completeness</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.profileCompleteness}%</div>
          <div className="text-[10px] text-emerald-400 mt-1">High fidelity</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Calls</span>
            <Phone className="w-3.5 h-3.5 text-[#0097B2]" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.calls}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.callsChange} vs last mo</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Directions</span>
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.directionRequests}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.directionsChange} vs last mo</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Website Clicks</span>
            <Eye className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.websiteClicks}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.websiteClicksChange} vs last mo</div>
        </div>

      </div>

      {/* 3. Top Opportunities Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-extrabold text-base text-white">
              Your Top Growth Opportunities
            </h3>
            <p className="text-xs text-slate-400">
              High-impact algorithmic levers to boost your local rank and call volume.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#0097B2]">
            {opportunities.length} Action Items
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={"text-[10px] font-mono font-bold px-2 py-0.5 rounded-full " + (opp.priority === "HIGH" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30")}>
                    {opp.priorityLabel}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {opp.estimatedImpact}
                  </span>
                </div>

                <h4 className="font-heading font-extrabold text-sm text-white">
                  {opp.title}
                </h4>

                <p className="text-xs text-slate-300">
                  {opp.problem}
                </p>

                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Why it matters: </strong>
                  {opp.whyItMatters}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <span className="text-[11px] text-[#0097B2] font-semibold">
                  Action: {opp.recommendedAction.slice(0, 45)}...
                </span>
                <button
                  onClick={() => onApplyOpportunity(opp)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                >
                  <span>{opp.actionLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Growth Services Quick Actions Grid */}
      <div className="space-y-3">
        <h3 className="font-heading font-extrabold text-base text-white">
          Growth Operating System Modules
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { id: "audit", title: "24-Point Audit", desc: "Scan all 24 signals", badge: auditScore + "/100", icon: Activity, color: "text-rose-400", bg: "bg-rose-500/10" },
            { id: "reviews", title: "Reviews AI", desc: unansweredReviewsCount + " awaiting reply", badge: unansweredReviewsCount + " Pending", icon: MessageSquare, color: "text-amber-400", bg: "bg-amber-500/10" },
            { id: "optimization", title: "Optimization", desc: "Metadata & categories", badge: "5 Levers", icon: CheckCircle2, color: "text-cyan-400", bg: "bg-cyan-500/10" },
            { id: "performance", title: "Telemetry ROI", desc: "Calls, clicks & visits", badge: "+24.8%", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10" },
            { id: "tasks", title: "Action Center", desc: "Prioritized checklist", badge: "Workflow", icon: Sliders, color: "text-emerald-400", bg: "bg-emerald-500/10" },
            { id: "assistant", title: "Growth Assistant", desc: "AI strategy chat", badge: "AI Ready", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/10" }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigateTab(item.id)}
                className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-left flex flex-col justify-between shadow-sm transition active:scale-95 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={"w-8 h-8 rounded-xl flex items-center justify-center " + item.bg + " " + item.color}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-[#0097B2]">
                    {item.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Done-For-You Agency Upsell Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0097B2]/15 via-blue-500/10 to-indigo-500/15 border border-[#0097B2]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-heading font-extrabold text-sm sm:text-base text-white">
            Want SM NextGen to manage & guarantee your local 3-Pack ranking?
          </h4>
          <p className="text-xs text-slate-300">
            Our expert growth team executes weekly Google posts, citation sync, photo geotagging, and review response systems.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:+917073538077"
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#0097B2]" />
            <span>+91 70735 38077</span>
          </a>
          <a
            href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Team%2C%20I%20want%20to%20hire%20your%20team%20for%20Done-For-You%20Google%20Business%20Profile%20Management."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-extrabold transition flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
