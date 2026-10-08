"use client";

import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ExternalLink,
  MapPin,
  Search,
  Star,
  Globe,
  ArrowRight,
  Sparkles,
  Link2
} from "lucide-react";

export default function ConnectGoogleModal({
  isOpen,
  onClose,
  business,
  onConnectSuccess
}) {
  const [activeMode, setActiveMode] = useState("verify"); // "verify" | "oauth"
  
  // Verification Form State
  const [businessName, setBusinessName] = useState(business?.name || "SM NextGen");
  const [city, setCity] = useState(business?.city || "Udaipur, Rajasthan");
  const [mapsUrl, setMapsUrl] = useState("");
  
  // Status & Verification Result
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifiedListing, setVerifiedListing] = useState(null);

  if (!isOpen) return null;

  // Handle Real-Time Verification via /api/google-business/verify
  const handleVerify = async (e) => {
    if (e) e.preventDefault();
    setVerifyError("");
    setVerifiedListing(null);
    setIsVerifying(true);

    try {
      const res = await fetch("/api/google-business/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: businessName,
          city: city,
          url: mapsUrl
        })
      });

      const data = await res.json();

      if (res.ok && data.verified && data.business) {
        setVerifiedListing(data.business);
      } else {
        setVerifyError(data.error || "❌ Verification failed. No verified listing was found on Google Maps matching this information.");
      }
    } catch (err) {
      setVerifyError("Network error: Could not connect to Google verification service. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  // Confirm and Sync Verified Business into Workspace
  const handleConfirmSync = () => {
    if (!verifiedListing) return;
    onConnectSuccess(verifiedListing);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base text-white">Connect Google Business Profile</h3>
              <p className="text-xs text-slate-400">Strict Verification: Connect your live, registered Google Maps storefront</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveMode("verify")}
            className={"pb-3 text-xs font-bold transition border-b-2 cursor-pointer flex items-center gap-1.5 " + (activeMode === "verify" ? "border-[#0097B2] text-[#0097B2]" : "border-transparent text-slate-400 hover:text-slate-200")}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google Maps Live Verification</span>
          </button>

          <button
            onClick={() => setActiveMode("oauth")}
            className={"pb-3 text-xs font-bold transition border-b-2 cursor-pointer flex items-center gap-1.5 " + (activeMode === "oauth" ? "border-[#0097B2] text-[#0097B2]" : "border-transparent text-slate-400 hover:text-slate-200")}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Google Cloud OAuth 2.0</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* TAB 1: GOOGLE MAPS LIVE VERIFICATION */}
          {activeMode === "verify" && (
            <div className="space-y-4">
              
              {!verifiedListing ? (
                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#0097B2]" />
                      <span>Live Google Maps Verification</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Only active, registered Google Maps listings are accepted. Enter your business name as registered on Google Maps, or paste your Google Maps share link to authenticate your profile.
                    </p>
                  </div>

                  {verifyError && (
                    <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-1 animate-in fade-in">
                      <div className="font-bold flex items-center gap-1.5 text-rose-200">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Google Verification Failed</span>
                      </div>
                      <p className="text-[11px] leading-relaxed pl-5.5">{verifyError}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                        Registered Business Name on Google Maps *
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. SM NextGen"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                        City / Registered Region
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Udaipur, Rajasthan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-mono font-bold text-slate-300">
                          Google Maps Share Link or Place ID (Optional)
                        </label>
                        <span className="text-[10px] text-slate-500">e.g. https://maps.app.goo.gl/...</span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={mapsUrl}
                          onChange={(e) => setMapsUrl(e.target.value)}
                          placeholder="Paste Google Maps share link (e.g. https://maps.app.goo.gl/xxx)"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                        />
                        <Link2 className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-600 hover:from-[#007a91] hover:to-cyan-700 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#0097B2]/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Listing on Google Maps...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        <span>Verify & Fetch Live Listing</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* VERIFIED LISTING PREVIEW CARD */
                <div className="space-y-4 animate-in fade-in">
                  <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Google Maps Storefront</span>
                      </span>
                      {verifiedListing.rating > 0 && (
                        <div className="flex items-center gap-1 text-amber-400 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{verifiedListing.rating}★ ({verifiedListing.totalReviews} reviews)</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-heading font-extrabold text-white">{verifiedListing.name}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{verifiedListing.category || "Business Listing"}</p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-emerald-500/20">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{verifiedListing.address || verifiedListing.city}</span>
                      </div>
                      {verifiedListing.phone && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-emerald-400">📞</span>
                          <span>{verifiedListing.phone}</span>
                        </div>
                      )}
                      {verifiedListing.placeId && (
                        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                          <span>Place ID:</span>
                          <span className="text-slate-300">{verifiedListing.placeId}</span>
                        </div>
                      )}
                    </div>

                    {verifiedListing.mapsUrl && (
                      <a
                        href={verifiedListing.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] text-[#0097B2] hover:underline pt-1"
                      >
                        <span>View verified listing on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setVerifiedListing(null)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                    >
                      Change Business
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmSync}
                      className="flex-1 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#0097B2]/30 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Connect to Workspace</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: GOOGLE CLOUD OAUTH 2.0 */}
          {activeMode === "oauth" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Google Cloud Console API Credentials</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  For automated 1-click review publishing and bidirectional syncing, Google requires an authorized Google Cloud OAuth 2.0 Web Client ID registered under your organization domain.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
                  <div>Required Scopes:</div>
                  <div className="text-cyan-400">• https://www.googleapis.com/auth/business.manage</div>
                  <div className="text-cyan-400">• https://www.googleapis.com/auth/business.reviews</div>
                </div>
              </div>

              <a
                href="https://accounts.google.com/o/oauth2/v2/auth?client_id=SM_NEXTGEN_OAUTH&redirect_uri=https://smnextgen.com/growth-os&response_type=code&scope=https://www.googleapis.com/auth/business.manage"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Google Cloud OAuth Client ID is being configured in Google Cloud Console. For immediate live connection, please use the 'Google Maps Live Verification' tab!");
                }}
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Sign in with Google (OAuth 2.0)</span>
              </a>

              <p className="text-[11px] text-center text-slate-500">
                Or use <button onClick={() => setActiveMode("verify")} className="text-[#0097B2] underline cursor-pointer">Live Google Maps Verification</button> for instant zero-config connection.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
