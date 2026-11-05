"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Key, CheckCircle2, AlertTriangle, Loader2, ArrowLeft, Zap } from "lucide-react";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (searchParams) {
      const emailParam = searchParams.get("email");
      const tokenParam = searchParams.get("token") || searchParams.get("code");
      if (emailParam) setEmail(emailParam);
      if (tokenParam) setToken(tokenParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !token || !newPassword) {
      setErrorMsg("Please provide your email, reset code, and new password.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/growth-os/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, newPassword })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg("Password reset successfully! Redirecting to Growth OS...");
        setTimeout(() => {
          router.push("/growth-os");
        }, 1500);
      } else {
        setErrorMsg(data.error || "Failed to reset password. Please verify your code.");
      }
    } catch (err) {
      setErrorMsg("Network error: Could not reach authentication server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between font-sans selection:bg-[#0097B2] selection:text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#0097B2]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between border-b border-slate-900/80 relative z-10">
        <Link href="/growth-os" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center shadow-lg shadow-[#0097B2]/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base tracking-tight text-white block">
              SM NextGen <span className="text-[#0097B2] font-mono text-xs px-1.5 py-0.5 rounded bg-[#0097B2]/10 border border-[#0097B2]/30">GROWTH OS</span>
            </span>
          </div>
        </Link>

        <Link
          href="/growth-os?login=true"
          className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </Link>
      </header>

      {/* Card */}
      <main className="w-full max-w-md mx-auto px-4 py-12 relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-heading font-extrabold text-white tracking-tight">
              Create New Password
            </h2>
            <p className="text-xs text-slate-400">
              Enter your account email, verification code, and your chosen new password.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Account Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sanjmalviya88243@gmail.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Reset Code / Token</label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter reset code"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">New Password (Min. 6 chars)</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Confirm New Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-600 hover:from-[#007a91] hover:to-cyan-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#0097B2]/20 transition cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Updating Password...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Update Password & Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-600 border-t border-slate-900/60 relative z-10">
        SM NextGen Growth OS Platform — Account Security
      </footer>
    </div>
  );
}
