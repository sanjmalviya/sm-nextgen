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
  ChevronRight,
  Bot,
  Zap,
  Lock,
  Search
} from "lucide-react";

export default function DashboardTab({
  business,
  kpi,
  auditScore,
  auditCategories = [],
  opportunities = [],
  onApplyOpportunity,
  onNavigateTab,
  unansweredReviewsCount,
  onOpenConnectGoogle,
  onLoadBenchmarkData
}) {
  const isGoogleConnected = business?.googleConnected;

  // 1. UNCONNECTED STATE: 100% Clean / Zero Dummy Data until Google Business Profile is Linked
  if (!isGoogleConnected) {
    return (
      <div className="space-y-6 font-sans animate-in fade-in duration-200">
        
        {/* Main Connect Hero Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B2545] border border-cyan-500/30 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/10">
            {/* Google Multi-Color G Icon */}
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Step 1: Link Verified Storefront
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Connect Your Google Business Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To calculate your live 0–100 Growth Score, import customer reviews, and stream verified phone calls & direction requests from Google Maps, connect your listing below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenConnectGoogle}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-xl transition active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Connect with Google Account</span>
            </button>

            <button
              onClick={onOpenConnectGoogle}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#0097B2]" />
              <span>Verify Google Maps Listing</span>
            </button>
          </div>
        </div>

        {/* 2. Blank KPI Telemetry Placeholders (Zero Dummy Data) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-sm text-slate-300 uppercase tracking-wider font-mono">
              Live Google Telemetry (Awaiting Profile Connection)
            </h3>
            <span className="text-[11px] text-amber-400 font-mono font-bold flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Paused</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { label: "Rating", val: "--★", sub: "Disconnected", icon: Star },
              { label: "Reviews", val: "--", sub: "Disconnected", icon: MessageSquare },
              { label: "Unanswered", val: "--", sub: "Disconnected", icon: AlertTriangle },
              { label: "Completeness", val: "0%", sub: "Needs Audit", icon: CheckCircle2 },
              { label: "Calls", val: "--", sub: "Disconnected", icon: Phone },
              { label: "Directions", val: "--", sub: "Disconnected", icon: MapPin },
              { label: "Website Clicks", val: "--", sub: "Disconnected", icon: Eye }
            ].map((k, i) => {
              const Icon = k.icon;
              return (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-xs">
                    <span>{k.label}</span>
                    <Icon className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-400 font-mono">{k.val}</div>
                  <div className="text-[10px] text-slate-600 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    <span>{k.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Empty State: Algorithmic Growth Opportunities */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
            <Activity className="w-6 h-6 text-[#0097B2]" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h4 className="font-heading font-extrabold text-base text-white">
              No Algorithmic Growth Roadblocks Detected Yet
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Once you connect your Google Business Profile, our algorithmic engine will scan your 24 ranking factors, analyze local competitors, and generate prioritized action cards.
            </p>
          </div>
          <button
            onClick={onOpenConnectGoogle}
            className="px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs inline-flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>Connect Profile to Run Live Scan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    );
  }

  // 2. CONNECTED STATE: Render Full Active Growth OS Dashboard with Zero UI Overlaps
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
          <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
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
                  strokeDasharray={(auditScore || 80) + ", 100"}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white">{auditScore || 80}</span>
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
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.profileCompleteness || 85}%</div>
          <div className="text-[10px] text-emerald-400 mt-1">High fidelity</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Calls</span>
            <Phone className="w-3.5 h-3.5 text-[#0097B2]" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.calls}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.callsChange || "+18%"} vs last mo</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Directions</span>
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.directionRequests}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.directionsChange || "+24%"} vs last mo</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
            <span>Website Clicks</span>
            <Eye className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-white">{kpi.websiteClicks}</div>
          <div className="text-[10px] text-emerald-400 mt-1">{kpi.websiteClicksChange || "+12%"} vs last mo</div>
        </div>

      </div>

      {/* 3. Top Opportunities Section (Zero UI Overlap Layout) */}
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

        <div className="grid md:grid-cols-2 gap-4">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
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

                <p className="text-xs text-slate-300 leading-relaxed">
                  {opp.problem}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">Why it matters: </strong>
                  {opp.whyItMatters}
                </div>
              </div>

              {/* Zero-Overlap Responsive Action Row */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-[#0097B2] font-semibold leading-relaxed">
                  Action: {opp.recommendedAction}
                </span>
                <button
                  onClick={() => onApplyOpportunity(opp)}
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shadow-md"
                >
                  <span>{opp.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Done-For-You Agency Upsell Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0097B2]/15 via-blue-500/10 to-indigo-500/15 border border-[#0097B2]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-heading font-extrabold text-sm sm:text-base text-white">
            Want SM NextGen to manage & guarantee your local 3-Pack ranking?
          </h4>
          <p className="text-xs text-slate-300">
            Our Udaipur growth architects execute weekly Google posts, citation sync, photo geotagging, and review response systems.
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
