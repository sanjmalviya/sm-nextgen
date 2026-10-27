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
  ArrowLeft
} from "lucide-react";
import { storageService } from "../lib/supabaseClient";

export default function AuthScreen({ onLoginSuccess, onBackToLanding }) {
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Sign up form state
  const [fullName, setFullName] = useState("");
  const [bizName, setBizName] = useState("");
  const [bizCategory, setBizCategory] = useState("Digital Marketing & Tech");
  const [bizCity, setBizCity] = useState("Udaipur, Rajasthan");
  const [bizPhone, setBizPhone] = useState("+91 70735 38077");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Login via Real Server Endpoint
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg("");
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
        // Sync local storage session as backup
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

  // Handle Sign Up & Workspace Provisioning via Real Server Endpoint
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");

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

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between font-sans selection:bg-[#0097B2] selection:text-white relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0097B2]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Application Bar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between border-b border-slate-900/80 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center text-white font-extrabold shadow-lg shadow-[#0097B2]/30">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight flex items-center gap-2">
              <span>SM NextGen Growth OS</span>
              <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0097B2]/20 text-[#0097B2] font-bold border border-[#0097B2]/30">
                SaaS v2.4
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Google Business Profile Algorithmic Operating System</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {onBackToLanding && (
            <button
              onClick={onBackToLanding}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer border border-slate-700/60"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Product Overview</span>
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Multi-Tenant Storage</span>
          </div>
        </div>
      </header>

      {/* Main Auth Form Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10 my-6">
        <div className="w-full max-w-lg bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
          
          {/* Headline & Subhead */}
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Workspace Access Gate</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {authMode === "login" ? "Sign In to Growth OS" : "Create Business Workspace"}
            </h1>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              {authMode === "login" 
                ? "Access your Google Business Profile performance dashboard, reviews AI, and audit tools."
                : "Register your business to initialize your dedicated Google growth operating system."}
            </p>
          </div>

          {/* Tab Switcher: Sign In vs Create Account */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-bold">
            <button
              onClick={() => { setAuthMode("login"); setErrorMsg(""); }}
              className={"flex-1 py-2.5 rounded-xl transition cursor-pointer " + (authMode === "login" ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20" : "text-slate-400 hover:text-white")}
            >
              Sign In
            </button>
            <button
              onClick={() => { setAuthMode("signup"); setErrorMsg(""); }}
              className={"flex-1 py-2.5 rounded-xl transition cursor-pointer " + (authMode === "signup" ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20" : "text-slate-400 hover:text-white")}
            >
              Create Account
            </button>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs flex items-start gap-2.5 animate-in fade-in">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. SIGN IN FORM */}
          {authMode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="admin@smnextgen.com"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1.5">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#0284c7] hover:opacity-95 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#0097B2]/20 transition active:scale-95 cursor-pointer mt-2"
              >
                <Lock className="w-4 h-4" />
                <span>{isLoading ? "Authenticating..." : "Sign In to Growth OS"}</span>
              </button>
            </form>
          ) : (
            /* 2. CREATE ACCOUNT FORM */
            <form onSubmit={handleSignUp} className="space-y-3.5 max-h-[62vh] overflow-y-auto pr-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma"
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
                      placeholder="e.g. City Health Clinic"
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
                      <option value="Digital Marketing & Tech">Digital Marketing & Tech</option>
                      <option value="Healthcare & Specialty Clinic">Healthcare & Specialty Clinic</option>
                      <option value="Legal & Law Firm">Legal & Law Firm</option>
                      <option value="Real Estate Agency">Real Estate Agency</option>
                      <option value="Restaurant & Hospitality">Restaurant & Hospitality</option>
                      <option value="Home Services & Contractor">Home Services & Contractor</option>
                      <option value="Retail & Specialty Store">Retail & Specialty Store</option>
                      <option value="Other Business">Other Business</option>
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
                    placeholder="+91 70735 38077"
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
                      placeholder="doctor@domain.com"
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
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0097B2] via-cyan-500 to-[#0284c7] hover:opacity-95 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#0097B2]/20 transition active:scale-95 cursor-pointer mt-3"
              >
                <Building className="w-4 h-4" />
                <span>{isLoading ? "Provisioning Workspace..." : "Create Account & Launch Workspace"}</span>
              </button>
            </form>
          )}

          {/* Security & Support Note */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Google Maps API Verified</span>
            </span>
            <span>Udaipur Head Office: +91 70735 38077</span>
          </div>

        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-600 border-t border-slate-900/60 relative z-10">
        SM NextGen Growth OS Platform • Engineered for Local 3-Pack Growth
      </footer>

    </div>
  );
}
