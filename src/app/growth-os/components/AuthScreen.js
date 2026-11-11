"use client";

import React, { useState } from "react";
import {
  Lock,
  Mail,
  Building,
  User,
  Sparkles,
  Zap,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  Briefcase,
  Key,
  ArrowLeft,
  Loader2,
  RefreshCw
} from "lucide-react";
import { storageService } from "../lib/supabaseClient";

export default function AuthScreen({ onLoginSuccess, onBackToLanding }) {
  // Modes: "login" | "signup" | "forgot" | "reset"
  const [authMode, setAuthMode] = useState("login");
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Sign up form state
  const [fullName, setFullName] = useState("");
  const [bizName, setBizName] = useState("");
  const [bizCategory, setBizCategory] = useState("Digital Marketing & Tech");
  const [bizCity, setBizCity] = useState("Udaipur, Rajasthan");
  const [bizPhone, setBizPhone] = useState("+91 88243 25438");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  // Forgot / Reset password state
  const [resetEmail, setResetEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [resetStep, setResetStep] = useState(1); // 1 = request, 2 = enter code & new pass

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Login
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!loginEmail || !loginPassword) {
      setErrorMsg("Please enter both your email address and password.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/growth-os/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail.trim().toLowerCase(),
          password: loginPassword
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        storageService.saveSession(data.user);
        if (data.workspace?.id) {
          storageService.setActiveWorkspaceId(data.workspace.id);
        }
        onLoginSuccess(data.user, data.workspace, data.hasCompletedProfile, `Welcome back, ${data.user.name}!`);
      } else {
        setErrorMsg(data.error || "Authentication failed. Please verify credentials.");
      }
    } catch (err) {
      setErrorMsg("Network error: Could not reach authentication server.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!fullName.trim() || !bizName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setErrorMsg("Please fill in all required fields to register your business workspace.");
      return;
    }

    if (signupPassword.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/growth-os/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: signupEmail.trim().toLowerCase(),
          password: signupPassword,
          businessName: bizName.trim(),
          category: bizCategory,
          city: bizCity.trim(),
          phone: bizPhone.trim()
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        storageService.saveSession(data.user);
        if (data.workspace?.id) {
          storageService.setActiveWorkspaceId(data.workspace.id);
        }
        onLoginSuccess(data.user, data.workspace, false, `Account created! Welcome to SM NextGen Growth OS, ${data.user.name}.`);
      } else {
        setErrorMsg(data.error || "Failed to create account. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error: Could not connect to server during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Request Password Reset Code
  const handleRequestReset = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!resetEmail.trim()) {
      setErrorMsg("Please enter your account email address.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/growth-os/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail.trim().toLowerCase() })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message || `A verification code was sent to ${resetEmail}. Please check your inbox or spam folder.`);
        setResetCode(""); // ZERO AUTO-FILL: Never auto-fill; wait for real code from email
        setResetStep(2);
      } else {
        setErrorMsg(data.error || "Could not process password reset request.");
      }
    } catch (err) {
      setErrorMsg("Network error: Failed to connect to password reset service.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Complete Password Reset
  const handleCompleteReset = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!resetCode.trim() || !newPassword.trim()) {
      setErrorMsg("Please enter the verification code and your new password.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters long.");
      return;
    }

    if (confirmNewPassword && newPassword !== confirmNewPassword) {
      setErrorMsg("New passwords do not match. Please re-enter.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/growth-os/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: resetEmail.trim().toLowerCase(),
          token: resetCode.trim(),
          newPassword
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        storageService.saveSession(data.user);
        onLoginSuccess(data.user, null, data.user?.hasCompletedProfile, "Password reset successfully! Welcome back.");
      } else {
        setErrorMsg(data.error || "Failed to reset password. Please check your reset code.");
      }
    } catch (err) {
      setErrorMsg("Network error: Failed to connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between font-sans selection:bg-[#0097B2] selection:text-white relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0097B2]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Application Bar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between border-b border-slate-900/80 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center shadow-lg shadow-[#0097B2]/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base tracking-tight text-white block">
              SM NextGen <span className="text-[#0097B2] font-mono text-xs px-1.5 py-0.5 rounded bg-[#0097B2]/10 border border-[#0097B2]/30">GROWTH OS</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
              GOOGLE BUSINESS PROFILE REPUTATION & LOCAL 3-PACK ENGINE
            </span>
          </div>
        </div>

        {onBackToLanding && (
          <button
            onClick={onBackToLanding}
            className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </button>
        )}
      </header>

      {/* Main Authentication Container */}
      <main className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          
          {/* Form Header */}
          <div className="space-y-1 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {authMode === "login" && "Sign In to Growth OS"}
              {authMode === "signup" && "Launch Your Growth Workspace"}
              {authMode === "forgot" && "Reset Workspace Password"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {authMode === "login" && "Access your live Google Business Profile telemetry & AI review copilot."}
              {authMode === "signup" && "Start your 14-day free trial. Powered by Supabase & Google Cloud APIs."}
              {authMode === "forgot" && "Enter your email to receive a secure password recovery code."}
            </p>
          </div>

          {/* Mode Tabs (Only for login and signup) */}
          {authMode !== "forgot" && (
            <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => { setAuthMode("login"); setErrorMsg(""); setSuccessMsg(""); }}
                className={`py-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                  authMode === "login"
                    ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20 font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>Existing Workspace Sign In</span>
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode("signup"); setErrorMsg(""); setSuccessMsg(""); }}
                className={`py-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                  authMode === "signup"
                    ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20 font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>New Business Registration</span>
              </button>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Message */}
          {successMsg && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* GOOGLE OAUTH 2.0 BUTTON (Available for Login & Signup) */}
          {authMode !== "forgot" && (
            <div className="space-y-3">
              <a
                href="/api/auth/google"
                className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-3 transition shadow-lg shadow-white/10 active:scale-[0.99] cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google (OAuth 2.0)</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="h-px bg-slate-800 flex-1" />
                <span className="text-[11px] font-mono text-slate-500 uppercase">or credentials</span>
                <div className="h-px bg-slate-800 flex-1" />
              </div>
            </div>
          )}

          {/* MODE 1: LOGIN */}
          {authMode === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-mono font-bold text-slate-300">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("forgot");
                      setResetEmail(loginEmail);
                      setErrorMsg("");
                      setSuccessMsg("");
                    }}
                    className="text-[11px] text-[#0097B2] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-600 hover:from-[#007a91] hover:to-cyan-700 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#0097B2]/20 transition active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Session...</span>
                  </>
                ) : (
                  <>
                    <Key className="w-4 h-4" />
                    <span>Sign In to Growth Workspace</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* MODE 2: SIGN UP */}
          {authMode === "signup" && (
            <form onSubmit={handleSignUp} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Business Name *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={bizName}
                      onChange={(e) => setBizName(e.target.value)}
                      placeholder="SM NextGen"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Primary Category</label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <select
                      value={bizCategory}
                      onChange={(e) => setBizCategory(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    >
                      <option value="Marketing agency">Marketing agency</option>
                      <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                      <option value="Software Company">Software Company</option>
                      <option value="Website Designer">Website Designer</option>
                      <option value="Dental Clinic">Dental Clinic</option>
                      <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                      <option value="Retail Store">Retail Store</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">City / Region *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={bizCity}
                      onChange={(e) => setBizCity(e.target.value)}
                      placeholder="Udaipur, Rajasthan"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Contact Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="tel"
                    value={bizPhone}
                    onChange={(e) => setBizPhone(e.target.value)}
                    placeholder="+91 88243 25438"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="info@smnextgen.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Create Password *</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="password"
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#0284c7] hover:opacity-95 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#0097B2]/20 transition active:scale-95 cursor-pointer mt-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Provisioning Workspace...</span>
                  </>
                ) : (
                  <>
                    <Building className="w-4 h-4" />
                    <span>Create Account & Launch Workspace</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* MODE 3: FORGOT PASSWORD */}
          {authMode === "forgot" && (
            <div className="space-y-4">
              {resetStep === 1 ? (
                <form onSubmit={handleRequestReset} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Registered Account Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/20 transition cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Instructions...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Send Password Reset Code</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => { setAuthMode("login"); setErrorMsg(""); setSuccessMsg(""); }}
                      className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 mx-auto transition cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Sign In</span>
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleCompleteReset} className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#0097B2]" />
                      <span>Code Sent to: <strong className="text-cyan-300">{resetEmail}</strong></span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Please check your inbox (and spam/junk folder) for your 6-digit verification code. Enter it below to set your new password.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                      Enter 6-Digit Verification Code *
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        required
                        autoFocus
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        placeholder="Enter 6-digit code from email"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono tracking-wider text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">New Password *</label>
                      <div className="relative">
                        <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="password"
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Min. 6 chars"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Confirm Password *</label>
                      <div className="relative">
                        <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="password"
                          required
                          value={confirmNewPassword}
                          onChange={(e) => setConfirmNewPassword(e.target.value)}
                          placeholder="Repeat password"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Updating Password...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verify Code & Reset Password</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <button
                      type="button"
                      onClick={() => { setResetStep(1); setErrorMsg(""); }}
                      className="hover:text-white transition cursor-pointer flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      <span>Change email</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleRequestReset}
                      disabled={isLoading}
                      className="text-[#0097B2] hover:underline transition cursor-pointer"
                    >
                      Didn't receive email? Resend
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Security & Support Note */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Google Maps & Cloud API Verified</span>
            </span>
            <span>Udaipur Head Office: +91 88243 25438</span>
          </div>

        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-600 border-t border-slate-900/60 relative z-10">
        SM NextGen Growth OS Platform — Engineered for Local 3-Pack Growth
      </footer>

    </div>
  );
}
