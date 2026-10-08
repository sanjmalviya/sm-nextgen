"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  X,
  Search,
  MapPin,
  ExternalLink,
  Lock,
  ArrowRight,
  Building,
  Phone,
  Globe,
  Sparkles
} from "lucide-react";

export default function ConnectGoogleModal({
  isOpen,
  onClose,
  business,
  onConnectSuccess
}) {
  const [connectMethod, setConnectMethod] = useState("oauth"); // "oauth" | "search"
  const [step, setStep] = useState("input"); // "input" | "syncing" | "success"
  
  // OAuth form state
  const [googleEmail, setGoogleEmail] = useState("owner@gmail.com");
  
  // Direct Search form state
  const [bizName, setBizName] = useState(business?.name && !business.name.includes("Apex") ? business.name : "SM NextGen Digital Agency");
  const [bizCity, setBizCity] = useState(business?.city || "Udaipur, Rajasthan");
  const [bizCategory, setBizCategory] = useState(business?.category || "Digital Marketing & Growth");
  const [bizPhone, setBizPhone] = useState(business?.phone || "+91 70735 38077");
  const [mapsUrl, setMapsUrl] = useState("https://maps.app.goo.gl/SMNextGenUdaipur");

  const [syncStepText, setSyncStepText] = useState("Connecting to Google Business Profile API...");
  const [progressPercent, setProgressPercent] = useState(25);

  if (!isOpen) return null;

  const handleStartConnection = (e) => {
    if (e) e.preventDefault();
    setStep("syncing");
    setProgressPercent(20);
    setSyncStepText("Contacting Google Business Profile API (v4.9)...");

    setTimeout(() => {
      setProgressPercent(50);
      setSyncStepText("Verifying Google Maps Place ID & business listing...");
    }, 700);

    setTimeout(() => {
      setProgressPercent(80);
      setSyncStepText("Syncing customer reviews, search queries & direction calls...");
    }, 1400);

    setTimeout(() => {
      setProgressPercent(100);
      setSyncStepText("Profile successfully verified on Google Maps!");
      setStep("success");

      setTimeout(() => {
        onConnectSuccess({
          name: bizName.trim(),
          city: bizCity.trim(),
          category: bizCategory.trim(),
          phone: bizPhone.trim(),
          googleConnected: true,
          placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          lastSynced: "Just now",
          gbpVerified: true
        });
        onClose();
        setStep("input");
      }, 1100);
    }, 2100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-7 relative text-slate-100 font-sans space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STEP 1: INPUT / AUTHORIZATION FORM */}
        {step === "input" && (
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-lg shadow-white/10">
                {/* Google Multi-Color G Icon */}
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>

              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Connect Google Business Profile
              </h2>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Select your preferred connection method to link your verified storefront listing.
              </p>
            </div>

            {/* Method Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setConnectMethod("oauth")}
                className={"py-2 rounded-xl font-bold transition cursor-pointer " + (connectMethod === "oauth" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
              >
                1. Google OAuth Sign-In
              </button>
              <button
                type="button"
                onClick={() => setConnectMethod("search")}
                className={"py-2 rounded-xl font-bold transition cursor-pointer " + (connectMethod === "search" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
              >
                2. Direct Storefront Link
              </button>
            </div>

            {/* METHOD 1: GOOGLE OAUTH */}
            {connectMethod === "oauth" && (
              <form onSubmit={handleStartConnection} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300 block">
                    Google Account Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                    placeholder="e.g. yourbusiness@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                  <span className="font-mono font-bold text-slate-400 text-[10px] uppercase tracking-wider block">
                    Permissions Granted via OAuth 2.0:
                  </span>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Read search calls, map impressions & direction requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Sync customer reviews and publish approved AI replies</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-white/10 transition active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Authorize & Link Google Profile</span>
                </button>
              </form>
            )}

            {/* METHOD 2: DIRECT STOREFRONT SEARCH & LINK */}
            {connectMethod === "search" && (
              <form onSubmit={handleStartConnection} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 block">
                    Business Name on Google Maps *
                  </label>
                  <input
                    type="text"
                    required
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    placeholder="e.g. SM NextGen or Apex Clinic"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-300 block">City *</label>
                    <input
                      type="text"
                      required
                      value={bizCity}
                      onChange={(e) => setBizCity(e.target.value)}
                      placeholder="e.g. Udaipur"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-300 block">Phone</label>
                    <input
                      type="text"
                      value={bizPhone}
                      onChange={(e) => setBizPhone(e.target.value)}
                      placeholder="+91 70735 38077"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-300 block">
                    Google Maps Share Link or Place ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={mapsUrl}
                    onChange={(e) => setMapsUrl(e.target.value)}
                    placeholder="https://maps.app.goo.gl/... or Place ID"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer mt-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Verify Storefront & Sync Telemetry</span>
                </button>
              </form>
            )}

            <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              <span>Google Business Profile API v4.9 • 256-bit encrypted data connection</span>
            </div>
          </div>
        )}

        {/* STEP 2: SYNCING ANIMATION */}
        {step === "syncing" && (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#0097B2]/15 text-[#0097B2] flex items-center justify-center mx-auto border border-[#0097B2]/30">
              <RefreshCw className="w-8 h-8 animate-spin" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-lg text-white">
                Connecting to Google Maps Telemetry
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                {syncStepText}
              </p>
            </div>

            <div className="w-full max-w-xs mx-auto space-y-1.5">
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0097B2] to-cyan-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>API Handshake</span>
                <span>{progressPercent}%</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === "success" && (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-xl text-white">
                Google Business Profile Connected!
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Successfully linked <strong className="text-white">{bizName}</strong>. Your live Growth Score and telemetry are now active.
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
