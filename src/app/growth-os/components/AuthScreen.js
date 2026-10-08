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
  Key
} from "lucide-react";
import { storageService, SEED_USERS } from "../lib/supabaseClient";

export default function AuthScreen({ onLoginSuccess }) {
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

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!loginEmail || !loginPassword) {
      setErrorMsg("Please enter both your email address and password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const users = storageService.getUsers();
      const user = users.find(u => u.email.toLowerCase() === loginEmail.trim().toLowerCase());

      if (!user) {
        setErrorMsg("No account found with this email. Please create an account below.");
        return;
      }

      if (user.password !== loginPassword) {
        setErrorMsg("Incorrect password. Please verify and try again.");
        return;
      }

      // Valid session
      storageService.saveSession(user);
      if (user.businessId) {
        storageService.setActiveWorkspaceId(user.businessId);
      }
      onLoginSuccess(user, `Welcome back, ${user.name}!`);
    }, 450);
  };

  // Quick Master Admin Login
  const handleMasterAdminLogin = () => {
    setIsLoading(true);
    setErrorMsg("");
    setTimeout(() => {
      setIsLoading(false);
      const adminUser = SEED_USERS[0]; // Sanjay Malviya
      storageService.saveSession(adminUser);
      storageService.setActiveWorkspaceId(adminUser.businessId);
      onLoginSuccess(adminUser, "Master Admin Superpowers unlocked! Full platform access granted.");
    }, 300);
  };

  // Handle Sign Up & Workspace Provisioning
  const handleSignUp = (e) => {
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
    setTimeout(() => {
      try {
        const newBizId = `biz-${Date.now()}`;
        const newUserId = `user-${Date.now()}`;

        // 1. Create and save new business workspace
        const newWorkspace = {
          id: newBizId,
          name: bizName.trim(),
          category: bizCategory,
          secondaryCategories: [`${bizCategory} Specialist`, "Emergency Service"],
          primaryGoal: "Get more calls",
          website: `https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
          phone: bizPhone.trim() || "+91 70735 38077",
          email: signupEmail.trim(),
          address: `Main Market Road, ${bizCity.split(",")[0]}`,
          city: bizCity.trim(),
          state: "Rajasthan",
          country: "India",
          postalCode: "313001",
          rating: 0,
          totalReviews: 0,
          score: 0,
          plan: "AI Growth Pro",
          status: "Active",
          isDemo: false,
          googleConnected: false,
          lastSynced: "Pending connection",
          description: `${bizName} is a top-rated ${bizCategory.toLowerCase()} in ${bizCity} dedicated to excellence and customer satisfaction.`
        };
        storageService.addWorkspace(newWorkspace);
        storageService.setActiveWorkspaceId(newBizId);

        // Initialize zero dummy data state for new business
        storageService.saveWorkspaceState(newBizId, {
          kpi: {
            rating: 0,
            totalReviews: 0,
            unansweredReviews: 0,
            profileCompleteness: 45,
            calls: 0,
            callsChange: "+0%",
            directionRequests: 0,
            directionsChange: "+0%",
            websiteClicks: 0,
            websiteClicksChange: "+0%",
            searchImpressions: 0
          },
          score: 0,
          reviews: [],
          tasks: [],
          appliedFixes: {}
        });

        // 2. Register user account
        const newUser = {
          id: newUserId,
          name: fullName.trim(),
          email: signupEmail.trim().toLowerCase(),
          password: signupPassword,
          role: "OWNER",
          businessId: newBizId,
          businessName: bizName.trim(),
          city: bizCity.trim(),
          createdAt: new Date().toISOString()
        };
        storageService.registerUser(newUser);

        // 3. Log session & launch workspace
        storageService.saveSession(newUser);
        setIsLoading(false);
        onLoginSuccess(newUser, `Account created successfully! Welcome to SM NextGen Growth OS, ${newUser.name}.`);
      } catch (err) {
        setIsLoading(false);
        setErrorMsg(err.message || "Failed to create account. Please try again.");
      }
    }, 600);
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
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Multi-Tenant Storage</span>
          </div>
          <button
            onClick={handleMasterAdminLogin}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            title="1-Click Login for Sanjay Malviya with full Admin powers"
          >
            <Key className="w-3.5 h-3.5" />
            <span>Master Admin Login</span>
          </button>
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

              {/* Master Admin Direct Shortcut */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleMasterAdminLogin}
                  className="text-[11px] text-[#0097B2] hover:underline font-bold flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  <Key className="w-3 h-3" />
                  <span>Log in as Master Admin (Sanjay Malviya)</span>
                </button>
              </div>
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
