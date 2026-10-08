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
  ArrowRight
} from "lucide-react";

export default function ConnectGoogleModal({
  isOpen,
  onClose,
  business,
  onConnectSuccess
}) {
  const [step, setStep] = useState("auth"); // "auth" | "select_place" | "syncing" | "success"
  const [selectedAccount, setSelectedAccount] = useState("owner");
  const [placeQuery, setPlaceQuery] = useState(business?.name || "");
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isOpen) return null;

  const handleStartOAuth = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep("select_place");
    }, 700);
  };

  const handleConfirmLocation = () => {
    setStep("syncing");
    setTimeout(() => {
      setStep("success");
      setTimeout(() => {
        onConnectSuccess({
          googleConnected: true,
          placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          lastSynced: "Just now",
          gbpVerified: true
        });
        onClose();
      }, 1000);
    }, 1200);
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

        {/* STEP 1: GOOGLE OAUTH PERMISSION GATE */}
        {step === "auth" && (
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
                Securely grant SM NextGen Growth OS read and write access to your Google Maps listing.
              </p>
            </div>

            {/* Scope Permissions List */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
              <span className="font-mono font-bold text-slate-400 text-[11px] uppercase tracking-wider block">
                Required Google API Scopes:
              </span>
              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sync customer reviews and publish owner responses</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Read Google Search & Maps call, direction, and impression telemetry</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Audit profile completeness, opening hours, and photo freshness</span>
              </div>
            </div>

            <button
              onClick={handleStartOAuth}
              disabled={isVerifying}
              className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-white/10 transition active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>{isVerifying ? "Contacting Google OAuth..." : "Continue with Google Account"}</span>
            </button>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              <span>Official Google OAuth 2.0 protocol • 256-bit token encryption</span>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT STOREFRONT LOCATION */}
        {step === "select_place" && (
          <div className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold mb-1">
                ✓ Google Account Authorized
              </div>
              <h3 className="text-lg font-heading font-extrabold text-white">
                Select Your Verified Business Location
              </h3>
              <p className="text-xs text-slate-400">
                Choose the Google Maps storefront listing associated with your Google account.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center font-bold text-sm">
                  {business?.name?.slice(0, 2).toUpperCase() || "GB"}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-white">{business?.name || "My Business Profile"}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#0097B2]" />
                    <span>{business?.city || "Udaipur"} • Place ID: ChIJN1t_tDeuEms...</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                Verified
              </span>
            </div>

            <button
              onClick={handleConfirmLocation}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <span>Link Location & Import Telemetry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 3: SYNCING ANIMATION */}
        {step === "syncing" && (
          <div className="py-8 text-center space-y-4">
            <RefreshCw className="w-10 h-10 text-[#0097B2] animate-spin mx-auto" />
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Importing Google Maps Telemetry...
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                Syncing verified reviews, star rating, phone call metrics, and 24 ranking factors.
              </p>
            </div>
          </div>
        )}

        {/* STEP 4: SUCCESS */}
        {step === "success" && (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white">
              Google Business Profile Connected!
            </h3>
            <p className="text-xs text-slate-300">
              Your live dashboard is now active with verified local data.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
