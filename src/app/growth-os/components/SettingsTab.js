"use client";

import React, { useState } from "react";
import {
  Settings,
  Building,
  ShieldCheck,
  RefreshCw,
  LogOut,
  Sliders,
  DollarSign,
  Phone,
  MessageSquare
} from "lucide-react";

export default function SettingsTab({
  business,
  currentUser,
  onSignOut,
  currency,
  setCurrency,
  onResetDemo
}) {
  const [bizName, setBizName] = useState(business?.name || "Apex Dental Care & Implant Center");
  const [bizPhone, setBizPhone] = useState(business?.phone || "+91 70735 38077");
  const [bizAddress, setBizAddress] = useState(business?.address || "Plot 14, Saheli Nagar, Udaipur, Rajasthan");
  const [bizGoal, setBizGoal] = useState(business?.primaryGoal || "Get more calls");
  const [aiTone, setAiTone] = useState("Professional & Warm");
  const [savedMsg, setSavedMsg] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setSavedMsg("Settings updated successfully!");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Settings className="w-3.5 h-3.5" />
          <span>Workspace Preferences</span>
        </div>
        <h2 className="text-2xl font-heading font-extrabold text-white">
          Platform & Business Settings
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Manage Google integration credentials, AI response preferences, currency localization, and workspace administrators.
        </p>
      </div>

      {savedMsg && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          {savedMsg}
        </div>
      )}

      {/* Settings Form */}
      <form onSubmit={handleSave} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
        <h3 className="font-heading font-extrabold text-base text-white">
          Business Information
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Business Name</label>
            <input
              type="text"
              value={bizName}
              onChange={(e) => setBizName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Contact Phone</label>
            <input
              type="text"
              value={bizPhone}
              onChange={(e) => setBizPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-300 font-bold block mb-1">Address & Location</label>
          <input
            type="text"
            value={bizAddress}
            onChange={(e) => setBizAddress(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Primary Growth Goal</label>
            <select
              value={bizGoal}
              onChange={(e) => setBizGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            >
              <option value="Get more calls">Get more calls</option>
              <option value="Get more website visitors">Get more website visitors</option>
              <option value="Get more directions">Get more directions</option>
              <option value="Improve local visibility">Improve local visibility</option>
              <option value="Improve reviews">Improve reviews</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Default AI Reply Tone</label>
            <select
              value={aiTone}
              onChange={(e) => setAiTone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            >
              <option value="Professional & Warm">Professional & Warm</option>
              <option value="Friendly & Casual">Friendly & Casual</option>
              <option value="Polite & Apologetic">Polite & Apologetic</option>
              <option value="Premium & Executive">Premium & Executive</option>
            </select>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold transition active:scale-95 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Google Business Profile Connection Manager */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="font-heading font-extrabold text-base text-white">
          Google Business Profile Connection
        </h3>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-white">Google Profile Connected</div>
              <div className="text-[11px] text-slate-400">OAuth ID: gbp_live_apex_udaipur</div>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            Active Sync
          </span>
        </div>
      </div>

      {/* System Actions */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onResetDemo}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
        >
          Reset Demo Data to Initial Defaults
        </button>

        <button
          onClick={onSignOut}
          className="px-5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30 transition cursor-pointer flex items-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out of Growth OS</span>
        </button>
      </div>

    </div>
  );
}
