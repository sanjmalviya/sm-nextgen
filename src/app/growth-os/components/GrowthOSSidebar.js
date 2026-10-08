"use client";

import React, { useState } from "react";
import {
  Home,
  Activity,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Sliders,
  Bot,
  Wrench,
  Settings,
  Shield,
  Zap,
  MapPin,
  ChevronDown,
  Plus,
  LogOut,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Key,
  ExternalLink
} from "lucide-react";

export default function GrowthOSSidebar({
  activeTab,
  setActiveTab,
  business,
  workspaces = [],
  activeWorkspaceId,
  onSwitchWorkspace,
  onOpenAddBusiness,
  currentUser,
  onSignOut,
  onOpenConnectGoogle,
  auditScore,
  unansweredReviewsCount
}) {
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);

  const isMasterAdmin = currentUser?.role === "ADMIN";
  const isGoogleConnected = business?.googleConnected;

  // Base navigation items for all business owners
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "audit", label: "24-Point Audit", icon: Activity, badge: auditScore ? `${auditScore}` : null },
    { id: "optimization", label: "Optimization", icon: CheckCircle2 },
    { id: "reviews", label: "Reviews AI", icon: MessageSquare, badge: unansweredReviewsCount > 0 ? `${unansweredReviewsCount}` : null },
    { id: "performance", label: "Performance", icon: TrendingUp },
    { id: "tasks", label: "Action Center", icon: Sliders },
    { id: "assistant", label: "AI Growth Assistant", icon: Bot },
    { id: "tools", label: "AI Content Tools", icon: Wrench },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  // Only Master Admin gets the Admin Tab
  if (isMasterAdmin) {
    menuItems.push({
      id: "admin",
      label: "Master Admin",
      icon: Shield,
      badge: "Owner"
    });
  }

  return (
    <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800 h-screen sticky top-0 shrink-0 font-sans select-none z-30">
      
      {/* 1. BRAND LOGO & WORKSPACE SELECTOR */}
      <div className="p-4 border-b border-slate-800 space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center text-white shadow-md shadow-[#0097B2]/30">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-sm text-white tracking-tight flex items-center gap-1.5">
              <span>SM NextGen</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#0097B2]/20 text-[#0097B2] font-bold">
                OS
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">Google Business Profile Engine</p>
          </div>
        </div>

        {/* Workspace Dropdown */}
        <div className="relative">
          <button
            onClick={() => isMasterAdmin && setIsWorkspaceMenuOpen(!isWorkspaceMenuOpen)}
            className={"w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-left flex items-center justify-between transition " + (isMasterAdmin ? "hover:border-slate-700 cursor-pointer" : "cursor-default")}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] font-bold text-[#0097B2] shrink-0">
                {business?.name?.slice(0, 2).toUpperCase() || "GB"}
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">{business?.name || "My Business"}</div>
                <div className="text-[10px] text-slate-500 truncate">{business?.city || "Udaipur"}</div>
              </div>
            </div>
            {isMasterAdmin && <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
          </button>

          {/* Master Admin Workspace Switcher Dropdown */}
          {isMasterAdmin && isWorkspaceMenuOpen && (
            <div className="absolute top-12 left-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2">
              <div className="px-2.5 py-1 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Switch Business Workspace
              </div>
              {workspaces.map((w) => (
                <button
                  key={w.id}
                  onClick={() => {
                    onSwitchWorkspace(w.id);
                    setIsWorkspaceMenuOpen(false);
                  }}
                  className={"w-full p-2 rounded-xl text-left text-xs transition cursor-pointer flex items-center justify-between " + (w.id === activeWorkspaceId ? "bg-[#0097B2]/15 text-white font-bold" : "text-slate-400 hover:text-white hover:bg-slate-800")}
                >
                  <span className="truncate max-w-[170px]">{w.name}</span>
                  {w.id === activeWorkspaceId && <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]"></span>}
                </button>
              ))}
              <div className="pt-1 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsWorkspaceMenuOpen(false);
                    if (onOpenAddBusiness) onOpenAddBusiness();
                  }}
                  className="w-full p-2 rounded-xl text-left text-xs font-bold text-[#0097B2] hover:bg-[#0097B2]/10 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Client Workspace</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Google Business Profile Connection Indicator */}
        <div>
          {isGoogleConnected ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Google Maps Synced</span>
            </div>
          ) : (
            <button
              onClick={onOpenConnectGoogle}
              className="w-full flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 hover:border-amber-400 text-[11px] text-amber-300 font-bold transition active:scale-95 cursor-pointer shadow-sm"
            >
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>Connect Google Profile</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. VERTICAL NAVIGATION LIST */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={"w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition cursor-pointer text-xs font-semibold " + (isActive ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/25 font-bold" : "text-slate-400 hover:text-white hover:bg-slate-800/70")}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={"w-4 h-4 " + (isActive ? "text-white" : "text-slate-400")} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={"text-[10px] px-2 py-0.2 rounded-full font-bold " + (isActive ? "bg-white/20 text-white" : item.badge === "Owner" ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-[#0097B2]")}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* 3. USER FOOTER & SIGN OUT */}
      <div className="p-3.5 border-t border-slate-800 bg-slate-950/40 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-extrabold text-xs shrink-0">
              {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">{currentUser?.name || "User"}</div>
              <div className="text-[10px] font-mono text-slate-500 truncate flex items-center gap-1">
                {isMasterAdmin ? (
                  <span className="text-cyan-400 font-bold">Master Admin</span>
                ) : (
                  <span>Business Owner</span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onSignOut}
            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
            title="Sign Out of Growth OS"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

    </aside>
  );
}
