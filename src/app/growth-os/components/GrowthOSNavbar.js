"use client";

import React, { useState } from "react";
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
  Shield,
  ChevronDown,
  Plus,
  Key
} from "lucide-react";

export default function GrowthOSNavbar({
  currentUser,
  business,
  workspaces = [],
  activeWorkspaceId,
  onSwitchWorkspace,
  onOpenAddBusiness,
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
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);

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
    { id: "admin", label: "Master Admin", icon: Shield, badge: currentUser?.role === "ADMIN" ? "Admin" : null }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-2.5 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-2.5">
        
        {/* Top Row: Workspace Switcher, User Session, Controls */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Workspace Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsWorkspaceMenuOpen(!isWorkspaceMenuOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-[#0097B2]/20 shrink-0 text-xs">
                {business?.name ? business.name.slice(0, 2).toUpperCase() : "AD"}
              </div>
              <div className="max-w-[150px] sm:max-w-[220px]">
                <div className="flex items-center gap-1.5">
                  <h1 className="font-heading font-extrabold text-xs sm:text-sm text-white truncate">
                    {business?.name || "Apex Dental Care"}
                  </h1>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>
                <p className="text-[10px] text-slate-400 truncate flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-[#0097B2]" />
                  <span>{business?.city || "Udaipur"}</span>
                </p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isWorkspaceMenuOpen && (
              <div className="absolute top-12 left-0 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider">
                  Select Business Workspace
                </div>
                
                {workspaces.map((w) => {
                  const isCur = w.id === activeWorkspaceId;
                  return (
                    <button
                      key={w.id}
                      onClick={() => {
                        onSwitchWorkspace(w.id);
                        setIsWorkspaceMenuOpen(false);
                      }}
                      className={"w-full p-2.5 rounded-xl flex items-center justify-between text-left transition cursor-pointer " + (isCur ? "bg-[#0097B2]/15 border border-[#0097B2]/30 text-white" : "hover:bg-slate-800 text-slate-300")}
                    >
                      <div>
                        <div className="font-bold text-xs truncate max-w-[180px]">{w.name}</div>
                        <div className="text-[10px] text-slate-400">{w.city} • {w.score}/100 pts</div>
                      </div>
                      {isCur && <span className="w-2 h-2 rounded-full bg-[#0097B2]"></span>}
                    </button>
                  );
                })}

                <div className="pt-1 border-t border-slate-800">
                  <button
                    onClick={() => {
                      setIsWorkspaceMenuOpen(false);
                      if (onOpenAddBusiness) onOpenAddBusiness();
                      else setActiveTab("admin");
                    }}
                    className="w-full p-2 rounded-xl text-xs font-bold text-[#0097B2] hover:bg-[#0097B2]/10 flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Add New Business Workspace</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Controls: Sync, Currency, Role, Sign Out */}
          <div className="flex items-center gap-2 ml-auto">
            
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
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition cursor-pointer"
              title="Sync live with Google Maps API"
            >
              <RefreshCw className={"w-3.5 h-3.5 text-[#0097B2] " + (isSyncing ? "animate-spin" : "")} />
              <span className="hidden md:inline">{isSyncing ? "Syncing..." : "Sync"}</span>
            </button>

            {/* Master Admin Indicator Badge */}
            {currentUser?.role === "ADMIN" && (
              <button
                onClick={() => setActiveTab("admin")}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold cursor-pointer hover:bg-cyan-500/25 transition"
              >
                <Key className="w-3 h-3" />
                <span>Admin</span>
              </button>
            )}

            {/* User Avatar Chip */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-[10px]">
                {currentUser?.name ? currentUser.name[0] : "U"}
              </div>
              <span className="text-white font-medium max-w-[90px] truncate">{currentUser?.name?.split(" ")[0]}</span>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={onSignOut}
              className="px-2.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-1 border border-rose-500/20 transition cursor-pointer"
              title="Sign Out of Workspace"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

        </div>

        {/* Bottom Row: Tab Navigation Bar (Desktop / Tablet) */}
        <div className="hidden md:flex items-center gap-1.5 overflow-x-auto pb-0.5 pt-1 scrollbar-none border-t border-slate-800/60">
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
                  <span className={"text-[10px] px-1.5 py-0.2 rounded-full " + (isActive ? "bg-white/20 text-white" : "bg-slate-800 text-[#0097B2]")}>
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
