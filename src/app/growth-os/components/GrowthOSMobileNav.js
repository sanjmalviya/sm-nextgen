"use client";

import React, { useState } from "react";
import {
  Home,
  Activity,
  MessageSquare,
  Shield,
  Plus,
  X,
  Sliders,
  Sparkles,
  Bot,
  Settings
} from "lucide-react";

export default function GrowthOSMobileNav({
  activeTab,
  setActiveTab,
  unansweredCount,
  onOpenAddReview,
  onOpenAddBusiness
}) {
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  return (
    <>
      {/* Quick Action Bottom Sheet Drawer */}
      {isQuickActionsOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setIsQuickActionsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-slate-900 border-t border-slate-800 rounded-t-3xl p-5 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0097B2]" />
                <h3 className="font-heading font-extrabold text-sm text-white">Quick Growth Actions</h3>
              </div>
              <button
                onClick={() => setIsQuickActionsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setIsQuickActionsOpen(false);
                  setActiveTab("reviews");
                  if (onOpenAddReview) onOpenAddReview();
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <MessageSquare className="w-5 h-5 text-amber-400 mb-1.5" />
                <div className="font-bold text-xs text-white">+ Add Review</div>
                <div className="text-[10px] text-slate-400">Post & test AI reply</div>
              </button>

              <button
                onClick={() => {
                  setIsQuickActionsOpen(false);
                  setActiveTab("audit");
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <Activity className="w-5 h-5 text-rose-400 mb-1.5" />
                <div className="font-bold text-xs text-white">24-Point Audit</div>
                <div className="text-[10px] text-slate-400">Fix profile warnings</div>
              </button>

              <button
                onClick={() => {
                  setIsQuickActionsOpen(false);
                  setActiveTab("tasks");
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <Sliders className="w-5 h-5 text-emerald-400 mb-1.5" />
                <div className="font-bold text-xs text-white">Action Center</div>
                <div className="text-[10px] text-slate-400">Prioritized checklist</div>
              </button>

              <button
                onClick={() => {
                  setIsQuickActionsOpen(false);
                  setActiveTab("admin");
                  if (onOpenAddBusiness) onOpenAddBusiness();
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <Shield className="w-5 h-5 text-cyan-400 mb-1.5" />
                <div className="font-bold text-xs text-white">Master Admin</div>
                <div className="text-[10px] text-slate-400">Multi-biz & metrics</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Dock (Mobile App Style) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-1.5 flex items-center justify-around font-sans">
        
        {/* 1. Home */}
        <button
          onClick={() => setActiveTab("dashboard")}
          className={"flex flex-col items-center justify-center p-1.5 rounded-xl transition cursor-pointer " + (activeTab === "dashboard" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Home</span>
        </button>

        {/* 2. Reviews */}
        <button
          onClick={() => setActiveTab("reviews")}
          className={"flex flex-col items-center justify-center p-1.5 rounded-xl transition cursor-pointer relative " + (activeTab === "reviews" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            {unansweredCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-amber-500 text-slate-950 font-extrabold text-[9px] px-1 rounded-full">
                {unansweredCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5">Reviews</span>
        </button>

        {/* 3. Center Quick Action (+) FAB */}
        <button
          onClick={() => setIsQuickActionsOpen(true)}
          className="w-11 h-11 -mt-4 rounded-full bg-gradient-to-tr from-[#0097B2] to-cyan-400 text-white shadow-lg shadow-[#0097B2]/40 flex items-center justify-center active:scale-90 transition-transform cursor-pointer border-2 border-slate-900"
          title="Quick Growth Actions"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* 4. Audit */}
        <button
          onClick={() => setActiveTab("audit")}
          className={"flex flex-col items-center justify-center p-1.5 rounded-xl transition cursor-pointer " + (activeTab === "audit" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
        >
          <Activity className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Audit</span>
        </button>

        {/* 5. Master Admin */}
        <button
          onClick={() => setActiveTab("admin")}
          className={"flex flex-col items-center justify-center p-1.5 rounded-xl transition cursor-pointer " + (activeTab === "admin" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
        >
          <Shield className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Admin</span>
        </button>

      </nav>
    </>
  );
}
