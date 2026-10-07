"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  RefreshCw,
  LogOut,
  Sparkles,
  Phone,
  MessageSquare,
  Building,
  User,
  Sliders,
  Home,
  Activity,
  CheckCircle2,
  TrendingUp,
  Bot,
  Settings,
  Wrench,
  Shield
} from "lucide-react";

export default function GrowthOSNavbar({
  currentUser,
  business,
  activeTab,
  setActiveTab,
  onSignOut,
  onSync,
  isSyncing,
  currency,
  setCurrency,
  unansweredCount,
  auditScore
}) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "audit", label: "24-Point Audit", icon: Activity, badge: auditScore + "/100" },
    { id: "optimization", label: "Optimization", icon: CheckCircle2 },
    { id: "reviews", label: "Reviews AI", icon: MessageSquare, badge: unansweredCount > 0 ? unansweredCount : null },
    { id: "performance", label: "Performance", icon: TrendingUp },
    { id: "tasks", label: "Action Center", icon: Sliders },
    { id: "assistant", label: "Growth Assistant", icon: Bot },
    { id: "tools", label: "AI Tools", icon: Wrench },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "admin", label: "Admin", icon: Shield }
  ];

  return (
    <header className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        
        {/* Top Row: Business Info, Telemetry Badges, User Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Business & Location Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-[#0097B2]/20 shrink-0">
              {business?.name ? business.name.slice(0, 2).toUpperCase() : "AD"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-extrabold text-sm sm:text-base text-white truncate max-w-[200px] sm:max-w-none">
                  {business?.name || "Apex Dental Care & Implant Center"}
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" /> Verified GBP
                </span>
                {business?.isDemo && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">
                    DEMO MODE
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#0097B2]" />
                <span>{business?.city || "Udaipur, Rajasthan"} • {business?.category || "Dental clinic"}</span>
              </p>
            </div>
          </div>

          {/* User Session, Currency Switcher, Sync & Sign Out */}
          <div className="flex items-center gap-2.5 ml-auto">
            
            {/* Currency Switcher */}
            <div className="hidden sm:inline-flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px]">
              <button
                onClick={() => setCurrency("USD")}
                className={"px-2 py-0.5 rounded font-bold transition cursor-pointer " + (currency === "USD" ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={"px-2 py-0.5 rounded font-bold transition cursor-pointer " + (currency === "INR" ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
              >
                INR (₹)
              </button>
            </div>

            {/* Live Sync Button */}
            <button
              onClick={onSync}
              disabled={isSyncing}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition cursor-pointer"
              title="Sync live with Google Business Profile API"
            >
              <RefreshCw className={"w-3.5 h-3.5 text-[#0097B2] " + (isSyncing ? "animate-spin" : "")} />
              <span className="hidden md:inline">{isSyncing ? "Syncing..." : "Sync Live"}</span>
            </button>

            {/* Talk to Expert Quick Bridge */}
            <a
              href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Growth%20Desk%2C%20I%20need%20expert%20help%20with%20my%20Google%20Business%20Profile."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 transition cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Agency Support</span>
            </a>

            {/* User Profile Chip */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-[10px]">
                {currentUser?.name ? currentUser.name[0] : "U"}
              </div>
              <span className="text-white font-medium max-w-[100px] truncate">{currentUser?.name}</span>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={onSignOut}
              className="px-2.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-1 border border-rose-500/20 transition cursor-pointer"
              title="Sign Out of Workspace"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

        </div>

        {/* Bottom Row: Tab Navigation Bar (Scrollable on tablet/desktop) */}
        <div className="hidden md:flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none border-t border-slate-800/60">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={"px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer " + (isActive ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20" : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800")}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={"text-[10px] px-1.5 py-0.2 rounded-full " + (isActive ? "bg-white/20 text-white" : "bg-[#0097B2]/20 text-[#0097B2]")}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
