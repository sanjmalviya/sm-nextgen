"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  Building,
  User,
  Sparkles,
  Zap,
  ArrowRight,
  AlertTriangle,
  X,
  ShieldCheck,
  Check
} from "lucide-react";
import { storageService } from "../lib/supabaseClient";

export default function AuthPortal({ isOpen, onClose, initialMode = "login", onLoginSuccess }) {
  const [authMode, setAuthMode] = useState(initialMode); // "login" | "signup"
  const [loginEmail, setLoginEmail] = useState("admin@smnextgen.com");
  const [loginPassword, setLoginPassword] = useState("GrowthOS2026!");
  const [signUpName, setSignUpName] = useState("");
  const [signUpBusiness, setSignUpBusiness] = useState("");
  const [signUpCity, setSignUpCity] = useState("Udaipur, Rajasthan");
  const [signUpGoal, setSignUpGoal] = useState("Get more calls");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    setTimeout(() => {
      setAuthLoading(false);
      if (!loginEmail || !loginPassword) {
        setAuthError("Please provide both email and password.");
        return;
      }

      const userSession = {
        name: loginEmail.toLowerCase().includes("admin") ? "Sanjay Malviya (Growth Architect)" : "Dr. Sunita Mehra",
        email: loginEmail,
        businessName: "Apex Dental Care & Implant Center",
        role: "Workspace Administrator",
        location: "Plot 14, Saheli Nagar, Udaipur, Rajasthan",
        loginTime: new Date().toLocaleTimeString(),
        isDemo: false
      };

      storageService.saveSession(userSession);
      onLoginSuccess(userSession, "Welcome back, " + userSession.name + "! Growth OS unlocked.");
    }, 500);
  };

  const handleInstantDemoLogin = () => {
    setAuthLoading(true);
    setAuthError("");
    setTimeout(() => {
      setAuthLoading(false);
      const demoUser = {
        name: "Dr. Sunita Mehra (Clinic Director)",
        email: "demo@smnextgen.com",
        businessName: "Apex Dental Care & Implant Center",
        role: "Workspace Owner",
        location: "Plot 14, Saheli Nagar, Udaipur, Rajasthan",
        loginTime: new Date().toLocaleTimeString(),
        isDemo: true
      };
      storageService.saveSession(demoUser);
      onLoginSuccess(demoUser, "Demo session activated! Full Growth OS workspace loaded.");
    }, 400);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setAuthError("");
    if (!signUpName || !signUpEmail || !signUpPassword) {
      setAuthError("Please fill in your name, email and password.");
      return;
    }
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      const newUser = {
        name: signUpName,
        email: signUpEmail,
        businessName: signUpBusiness || (signUpName + " Business"),
        role: "Workspace Owner",
        location: signUpCity || "Udaipur, Rajasthan",
        primaryGoal: signUpGoal,
        loginTime: new Date().toLocaleTimeString(),
        isDemo: false
      };
      storageService.saveSession(newUser);
      onLoginSuccess(newUser, "Account created successfully! Welcome to SM NextGen Growth OS.");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-7 relative text-slate-100 font-sans space-y-5">
        
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Modal Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Platform Security Gate</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            SM NextGen Growth OS
          </h2>
          <p className="text-xs text-slate-400">
            Sign in or test with instant 1-click demo access.
          </p>
        </div>

        {/* 1-Click Instant Demo Login Banner */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0097B2]/15 via-cyan-500/10 to-blue-500/15 border border-[#0097B2]/30 text-center space-y-2 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-xs font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Instant 1-Click Platform Access</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Explore live workspace with pre-loaded Udaipur dental clinic reviews and 24-point audit data.
          </p>
          <button
            onClick={handleInstantDemoLogin}
            disabled={authLoading}
            className="w-full py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition hover:scale-[1.01] active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{authLoading ? "Launching..." : "Unlock Growth OS (1-Click Demo Login)"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Switcher: Login vs Sign Up */}
        <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold">
          <button
            onClick={() => { setAuthMode("login"); setAuthError(""); }}
            className={"flex-1 py-2 rounded-lg transition cursor-pointer " + (authMode === "login" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
          >
            Sign In
          </button>
          <button
            onClick={() => { setAuthMode("signup"); setAuthError(""); }}
            className={"flex-1 py-2 rounded-lg transition cursor-pointer " + (authMode === "signup" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
          >
            Register Business
          </button>
        </div>

        {authError && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {authMode === "login" ? (
          /* LOGIN FORM */
          <form onSubmit={handleLogin} className="space-y-3.5">
            <div>
              <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  placeholder="admin@smnextgen.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer mt-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{authLoading ? "Authenticating..." : "Sign In to Workspace"}</span>
            </button>
          </form>
        ) : (
          /* REGISTER BUSINESS FORM */
          <form onSubmit={handleSignUp} className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={signUpName}
                  onChange={e => setSignUpName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Business Name</label>
                <input
                  type="text"
                  required
                  value={signUpBusiness}
                  onChange={e => setSignUpBusiness(e.target.value)}
                  placeholder="e.g. City Health Dental"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">City / Location</label>
                <input
                  type="text"
                  value={signUpCity}
                  onChange={e => setSignUpCity(e.target.value)}
                  placeholder="Udaipur, Rajasthan"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Primary Growth Goal</label>
                <select
                  value={signUpGoal}
                  onChange={e => setSignUpGoal(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                >
                  <option value="Get more calls">Get more calls</option>
                  <option value="Get more website visitors">Get more website visitors</option>
                  <option value="Get more directions">Get more directions</option>
                  <option value="Improve local visibility">Improve local visibility</option>
                  <option value="Improve reviews">Improve reviews</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={signUpEmail}
                  onChange={e => setSignUpEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={signUpPassword}
                  onChange={e => setSignUpPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer mt-2"
            >
              <Building className="w-3.5 h-3.5" />
              <span>{authLoading ? "Setting up workspace..." : "Create Account & Launch Workspace"}</span>
            </button>
          </form>
        )}

        <div className="pt-2 text-center text-[10px] text-slate-500 border-t border-slate-800">
          <span>Enterprise Grade • Encrypted Storage • Next.js 16</span>
        </div>

      </div>

    </div>
  );
}
