"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, ShieldCheck } from "lucide-react";

export default function GrowthOSError({ error, reset }) {
  useEffect(() => {
    console.error("Growth OS Route Error:", error);
  }, [error]);

  const handleResetSession = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("sm_growth_os_session");
        localStorage.removeItem("sm_growth_os_data");
      } catch (e) {}
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-100 font-sans">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Workspace Recovery Mode
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            SM NextGen Growth OS encountered a temporary client-side state issue. You can reload cleanly or reset your local workspace session below.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={() => reset ? reset() : window.location.reload()}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Platform</span>
          </button>

          <button
            onClick={handleResetSession}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>Reset Demo Session & Return Home</span>
          </button>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>SM NextGen Platform Engine • Udaipur, India</span>
        </div>
      </div>
    </div>
  );
}
