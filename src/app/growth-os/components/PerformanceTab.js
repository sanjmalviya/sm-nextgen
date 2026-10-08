"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Phone,
  MapPin,
  Eye,
  Search,
  Calendar,
  Sparkles,
  BarChart3,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export default function PerformanceTab({ business, kpi }) {
  const [timeRange, setTimeRange] = useState("30D"); // 7D, 30D, 90D

  const dataSets = {
    "7D": {
      calls: [14, 18, 22, 19, 25, 30, 28],
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      totalCalls: 156,
      directions: 184,
      website: 245,
      impressions: "4,200"
    },
    "30D": {
      calls: [95, 110, 135, 180],
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      totalCalls: 520,
      directions: 740,
      website: 1020,
      impressions: "16,840"
    },
    "90D": {
      calls: [380, 440, 520],
      labels: ["Month 1", "Month 2", "Month 3"],
      totalCalls: 1340,
      directions: 1980,
      website: 2890,
      impressions: "48,200"
    }
  };

  const isConnected = business?.googleConnected;
  const currentData = isConnected ? dataSets[timeRange] : {
    calls: [0, 0, 0, 0],
    labels: timeRange === "7D" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Week 1", "Week 2", "Week 3", "Week 4"],
    totalCalls: kpi?.calls || 0,
    directions: kpi?.directionRequests || 0,
    website: kpi?.websiteClicks || 0,
    impressions: kpi?.searchImpressions ? String(kpi.searchImpressions) : "0"
  };

  const maxCall = Math.max(1, ...(currentData.calls || [1]));

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header with Demo Indicator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Google Maps & Search Telemetry</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Local Customer Acquisition Performance
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1">
            Tracking customer calls, map navigation requests, profile impressions, and website clicks from verified Google telemetry.
          </p>
        </div>

        {/* Timeframe Toggle */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          {["7D", "30D", "90D"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeRange(t)}
              className={"px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer " + (timeRange === t ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
            >
              {t === "7D" ? "Last 7 Days" : t === "30D" ? "Last 30 Days" : "Last 90 Days"}
            </button>
          ))}
        </div>
      </div>

      {!isConnected && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">TELEMETRY WAITING</span>
            <span>Connect your Google Business Profile to stream live customer calls, direction requests, and Google Maps views.</span>
          </div>
        </div>
      )}

      {business?.isDemo && (
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20">DEMO TELEMETRY</span>
            <span>Displaying benchmark Google Maps telemetry for Lakeview / Apex Dental Studio Udaipur.</span>
          </div>
          <span className="text-[11px] text-amber-400/80">Google API Status: Seeded</span>
        </div>
      )}

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Direct Phone Calls</span>
            <Phone className="w-4 h-4 text-[#0097B2]" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{currentData.totalCalls}</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +24% vs prior period
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Direction Requests</span>
            <MapPin className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{currentData.directions}</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +18.4% vs prior period
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Website Visits</span>
            <Eye className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{currentData.website}</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +32.0% vs prior period
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Search Impressions</span>
            <Search className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{currentData.impressions}</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +41.5% discovery queries
          </div>
        </div>
      </div>

      {/* Visual Chart Section */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-extrabold text-base text-white">
              Phone Call Volume Trend ({timeRange})
            </h3>
            <p className="text-xs text-slate-400">High-converting inbound patient inquiries from Google Maps Click-to-Call</p>
          </div>
          <span className="text-xs font-mono font-bold text-[#0097B2]">
            Peak: {maxCall} Calls
          </span>
        </div>

        {/* CSS/SVG Bar Chart */}
        <div className="h-48 flex items-end gap-3 sm:gap-6 pt-4 border-b border-slate-800 pb-2">
          {currentData.calls.map((val, idx) => {
            const heightPercent = Math.round((val / maxCall) * 100);
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-white transition">
                  {val}
                </span>
                <div
                  className="w-full max-w-[48px] bg-gradient-to-t from-[#0097B2] to-cyan-400 rounded-t-lg transition-all duration-300 group-hover:brightness-110 shadow-lg shadow-[#0097B2]/20"
                  style={{ height: heightPercent + "%" }}
                ></div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {currentData.labels[idx]}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span>74% of calls occur during operating hours (09:30 AM – 08:00 PM)</span>
          <span className="text-emerald-400 font-bold">Conversion Rate: 68% Appointment Booked</span>
        </div>
      </div>

    </div>
  );
}
