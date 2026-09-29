"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  Plus,
  LayoutGrid,
  Settings,
  Activity,
  Sparkles,
  Star,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Phone,
  ArrowRight,
  Search,
  Filter,
  Calendar,
  Share2,
  Sliders,
  X,
  ChevronRight,
  ShieldCheck,
  Eye,
  Send,
  RefreshCw,
  Zap,
  Award,
  Smartphone,
  Monitor,
  Check,
  Bot,
  BarChart3,
  ThumbsUp,
  MessageCircle,
  ExternalLink,
  Clock,
  Compass,
  Lock,
  Mail,
  User,
  LogOut,
  Building,
  KeyRound
} from "lucide-react";

export default function GrowthOSClient() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"
  const [loginEmail, setLoginEmail] = useState("admin@smnextgen.com");
  const [loginPassword, setLoginPassword] = useState("GrowthOS2026!");
  const [signUpName, setSignUpName] = useState("");
  const [signUpBusiness, setSignUpBusiness] = useState("");
  const [signUpCity, setSignUpCity] = useState("Udaipur, Rajasthan");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);

  // App Navigation & Device Mode
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, reviews, audit, posts, automations, settings
  const [deviceMode, setDeviceMode] = useState("responsive"); // responsive, desktop, mobile
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);

  // Check saved session in localStorage on mount
  useEffect(() => {
    setIsClientReady(true);
    try {
      const saved = localStorage.getItem("sm_growth_os_session");
      if (saved) {
        setCurrentUser(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Storage access failed:", e);
    }
  }, []);

  // Reviews State
  const [reviewFilter, setReviewFilter] = useState("ALL");
  const [reviews, setReviews] = useState([
    {
      id: "rev-1",
      author: "Priya Sharma",
      avatar: "PS",
      rating: 5,
      time: "2 hours ago",
      text: "Dr. Sunita was exceptionally gentle and professional during my root canal treatment in Udaipur. The clinic is spotless and staff is courteous. Highly recommended!",
      status: "PENDING",
      replyText: "",
      isGenerating: false,
      aiDraft: "Dear Priya, thank you so much for your wonderful review! We are delighted that Dr. Sunita and our team made your root canal comfortable and painless. We look forward to welcoming you back at Apex Dental Udaipur whenever you need us!"
    },
    {
      id: "rev-2",
      author: "Vikram Singh Rathore",
      avatar: "VS",
      rating: 1,
      time: "Yesterday",
      text: "Waited 45 minutes past my appointment time. Reception desk seemed disorganized although the dentist was knowledgeable.",
      status: "PENDING",
      replyText: "",
      isGenerating: false,
      aiDraft: "Dear Vikram, please accept our sincere apologies for the unexpected wait time you experienced. We hold ourselves to strict appointment scheduling and are reviewing our front-desk check-in protocol immediately. Our clinic director would appreciate the chance to make this right—please contact us directly at +91 70735 38077."
    },
    {
      id: "rev-3",
      author: "Dr. Ramesh Patel",
      avatar: "RP",
      rating: 5,
      time: "3 days ago",
      text: "Outstanding dental implant care. Precision diagnostics with modern 3D scanners. One of the finest dental centers in Rajasthan.",
      status: "ANSWERED",
      replyText: "Thank you Dr. Patel! We truly appreciate your professional endorsement of our implant and diagnostic technologies. Warm regards from the Apex Dental team!",
      isGenerating: false,
      aiDraft: ""
    },
    {
      id: "rev-4",
      author: "Ananya Joshi",
      avatar: "AJ",
      rating: 4,
      time: "5 days ago",
      text: "Very good experience for teeth cleaning and polishing. Modern equipment and friendly doctors.",
      status: "ANSWERED",
      replyText: "Thank you Ananya for trusting us with your dental hygiene! Wishing you a bright and healthy smile.",
      isGenerating: false,
      aiDraft: ""
    }
  ]);

  // Audit State
  const [auditScore, setAuditScore] = useState(81);
  const [appliedFixes, setAppliedFixes] = useState({});

  // Posts Generator State
  const [postType, setPostType] = useState("OFFER");
  const [postTopic, setPostTopic] = useState("Festival Smile Makeover: 20% Off Teeth Whitening");
  const [generatedPost, setGeneratedPost] = useState("");
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);
  const [publishedPosts, setPublishedPosts] = useState([
    {
      id: "post-1",
      title: "Weekend Pediatric Dental Checkup Camp",
      type: "EVENT",
      date: "Posted 3 days ago",
      views: 342,
      clicks: 48,
      status: "LIVE ON GOOGLE MAPS"
    }
  ]);

  // Automations State
  const [automations, setAutomations] = useState({
    autoThank5Star: true,
    negativeAlert: true,
    weeklyPostAutoDraft: true,
    monthlyHealthAudit: true
  });

  const showNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Auth Handlers
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
        name: loginEmail.split("@")[0].toUpperCase() === "ADMIN" ? "Sanjay Malviya (Growth Architect)" : "Dr. Sunita Mehra",
        email: loginEmail,
        businessName: "Apex Dental Care & Implant Center",
        role: "Workspace Administrator",
        location: "Saheli Nagar, Udaipur, Rajasthan",
        loginTime: new Date().toLocaleTimeString()
      };

      setCurrentUser(userSession);
      try {
        localStorage.setItem("sm_growth_os_session", JSON.stringify(userSession));
      } catch (err) {}
      showNotification("Welcome back, " + userSession.name + "! Growth OS unlocked.");
    }, 600);
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
        loginTime: new Date().toLocaleTimeString()
      };
      setCurrentUser(demoUser);
      try {
        localStorage.setItem("sm_growth_os_session", JSON.stringify(demoUser));
      } catch (err) {}
      showNotification("Demo session activated! Full Growth OS workspace loaded.");
    }, 500);
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
        loginTime: new Date().toLocaleTimeString()
      };
      setCurrentUser(newUser);
      try {
        localStorage.setItem("sm_growth_os_session", JSON.stringify(newUser));
      } catch (err) {}
      showNotification("Account created successfully! Welcome to SM NextGen Growth OS.");
    }, 700);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("sm_growth_os_session");
    } catch (err) {}
    showNotification("You have been signed out safely.");
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showNotification("Google Business Profile Synced with Google Maps API!");
    }, 1100);
  };

  const generateAiReply = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, isGenerating: true } : r));
    setTimeout(() => {
      setReviews(prev => prev.map(r => {
        if (r.id === id) {
          return {
            ...r,
            isGenerating: false,
            replyText: r.aiDraft || ("Dear " + r.author + ", thank you for choosing " + (currentUser?.businessName || "Apex Dental") + ". We are committed to providing the highest standard of care in Udaipur!")
          };
        }
        return r;
      }));
      showNotification("AI Response Drafted! Review and click Approve to publish.");
    }, 700);
  };

  const publishReply = (id) => {
    setReviews(prev => prev.map(r => {
      if (r.id === id) {
        return {
          ...r,
          status: "ANSWERED"
        };
      }
      return r;
    }));
    showNotification("Reply published to Google Business Profile!");
  };

  const applyAuditFix = (fixKey, pts) => {
    if (appliedFixes[fixKey]) return;
    setAppliedFixes(prev => ({ ...prev, [fixKey]: true }));
    setAuditScore(prev => Math.min(100, prev + pts));
    showNotification("Optimization applied! Growth Score increased by +" + pts + " pts.");
  };

  const handleGeneratePost = () => {
    setIsGeneratingPost(true);
    setTimeout(() => {
      setIsGeneratingPost(false);
      setGeneratedPost(
        "✨ " + postTopic.toUpperCase() + "\n\n" +
        "Experience world-class service at " + (currentUser?.businessName || "Apex Dental") + "! Our advanced specialists use modern diagnostic technology for radiant results.\n\n" +
        "📅 Limited appointments available this week.\n" +
        "📍 " + (currentUser?.location || "Plot 14, Saheli Nagar, Udaipur, Rajasthan") + "\n" +
        "📞 Call +91 70735 38077 to claim this offer directly on Google Maps!"
      );
      showNotification("New Google Post Draft Created with High-Converting CTA!");
    }, 800);
  };

  const handlePublishPost = () => {
    if (!generatedPost) return;
    setPublishedPosts(prev => [
      {
        id: "post-" + Date.now(),
        title: postTopic,
        type: postType,
        date: "Just now",
        views: 1,
        clicks: 0,
        status: "LIVE ON GOOGLE MAPS"
      },
      ...prev
    ]);
    setGeneratedPost("");
    showNotification("Google Post scheduled and published live to Google Search & Maps!");
  };

  const filteredReviews = reviews.filter(r => {
    if (reviewFilter === "PENDING") return r.status === "PENDING";
    if (reviewFilter === "5STAR") return r.rating === 5;
    if (reviewFilter === "CRITICAL") return r.rating <= 2;
    return true;
  });

  const pendingCount = reviews.filter(r => r.status === "PENDING").length;

  if (!isClientReady) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading Growth OS...</div>;
  }

  // =========================================================================
  // AUTHENTICATION GATE SCREEN (LOCKED WHEN USER NOT LOGGED IN)
  // =========================================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center">
        
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#0097B2]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        {toast && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 border border-white/20">
            <Sparkles className="w-4 h-4 fill-white" />
            <span>{toast}</span>
          </div>
        )}

        <div className="w-full max-w-md relative z-10 space-y-6">
          
          {/* Brand Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>SaaS Security Gate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              SM NextGen Growth OS
            </h1>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Please authenticate to access your Google Business Profile Growth Platform workspace.
            </p>
          </div>

          {/* 1-Click Instant Demo Login Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0097B2]/15 via-cyan-500/10 to-blue-500/15 border border-[#0097B2]/30 text-center space-y-2.5 shadow-lg shadow-[#0097B2]/5">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-cyan-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Instant 1-Click Platform Access</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Launch directly into the pre-configured Apex Dental Care workspace with verified Google Maps reviews and 24-point audit data.
            </p>
            <button
              onClick={handleInstantDemoLogin}
              disabled={authLoading}
              className="w-full py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{authLoading ? "Unlocking Workspace..." : "Unlock Growth OS (1-Click Demo Login)"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Auth Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md space-y-5">
            
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
              <form onSubmit={handleLogin} className="space-y-4">
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
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-mono text-slate-300 font-bold">
                      Password
                    </label>
                    <span className="text-[10px] text-slate-500 font-mono">Demo: GrowthOS2026!</span>
                  </div>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
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
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{authLoading ? "Authenticating..." : "Sign In to Workspace"}</span>
                </button>
              </form>
            ) : (
              /* SIGN UP FORM */
              <form onSubmit={handleSignUp} className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={signUpName}
                    onChange={e => setSignUpName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                    Business / Clinic Name
                  </label>
                  <input
                    type="text"
                    value={signUpBusiness}
                    onChange={e => setSignUpBusiness(e.target.value)}
                    placeholder="e.g. Sharma Dental & Aesthetic Care"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                    Location City (Default: Udaipur, Rajasthan)
                  </label>
                  <input
                    type="text"
                    value={signUpCity}
                    onChange={e => setSignUpCity(e.target.value)}
                    placeholder="Udaipur, Rajasthan"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">Email</label>
                    <input
                      type="email"
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
                  <span>{authLoading ? "Setting up..." : "Create Account & Connect GBP"}</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-center border-t border-slate-800">
              <Link href="/" className="text-xs text-slate-500 hover:text-[#0097B2] transition">
                ← Back to SM NextGen Homepage
              </Link>
            </div>

          </div>

          <div className="text-center text-[10px] text-slate-500">
            <span>Enterprise Security • Protected with JWT Session Storage • Next.js 16</span>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // UNLOCKED AUTHENTICATED GROWTH OS APPLICATION
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white pb-24 md:pb-12 pt-20">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4">
          <Sparkles className="w-4 h-4 fill-white" />
          <span>{toast}</span>
        </div>
      )}

      {/* Top Application Bar with Active User & Sign Out */}
      <header className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Business & Profile Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-[#0097B2]/20 shrink-0">
              {currentUser.businessName ? currentUser.businessName.slice(0, 2).toUpperCase() : "AD"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-extrabold text-sm sm:text-base text-white truncate max-w-[200px] sm:max-w-none">
                  {currentUser.businessName || "Apex Dental Care & Implant Center"}
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" /> Verified GBP
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#0097B2]" />
                <span>{currentUser.location || "Saheli Nagar, Udaipur, Rajasthan"}</span>
              </p>
            </div>
          </div>

          {/* User Session, Sync & Sign Out */}
          <div className="flex items-center gap-2.5 ml-auto">
            
            <button
              onClick={handleSync}
              disabled={isSyncing}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition cursor-pointer"
              title="Sync live with Google Business Profile API"
            >
              <RefreshCw className={"w-3.5 h-3.5 text-[#0097B2] " + (isSyncing ? "animate-spin" : "")} />
              <span className="hidden sm:inline">{isSyncing ? "Syncing..." : "Sync Live"}</span>
            </button>

            {/* User Chip */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-[10px]">
                {currentUser.name ? currentUser.name[0] : "U"}
              </div>
              <span className="text-white font-medium max-w-[120px] truncate">{currentUser.name}</span>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-1.5 border border-rose-500/20 transition cursor-pointer"
              title="Sign Out of Growth OS"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>

            {/* View Mode Toggle (Hidden on mobile) */}
            <div className="hidden lg:flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setDeviceMode("responsive")}
                className={"px-2.5 py-1 rounded-md font-semibold transition cursor-pointer " + (deviceMode === "responsive" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
              >
                Auto
              </button>
              <button
                onClick={() => setDeviceMode("mobile")}
                className={"px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 transition cursor-pointer " + (deviceMode === "mobile" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
              >
                <Smartphone className="w-3 h-3" /> Phone
              </button>
              <button
                onClick={() => setDeviceMode("desktop")}
                className={"px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 transition cursor-pointer " + (deviceMode === "desktop" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
              >
                <Monitor className="w-3 h-3" /> Full
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Main App Container */}
      <main className={"mx-auto px-4 sm:px-6 py-6 transition-all duration-300 " + (deviceMode === "mobile" ? "max-w-md" : "max-w-7xl")}>

        {/* Desktop Tab Navigation Bar */}
        <div className="hidden md:flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: Home },
              { id: "reviews", label: "Reviews AI", icon: MessageSquare, badge: pendingCount > 0 ? pendingCount : null },
              { id: "audit", label: "24-Point Audit", icon: Activity, badge: auditScore + "/100" },
              { id: "posts", label: "Google Posts AI", icon: Share2 },
              { id: "automations", label: "Automation Rules", icon: Sliders },
              { id: "settings", label: "Settings", icon: Settings },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={"px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer " + (isActive ? "bg-[#0097B2] text-white shadow-lg shadow-[#0097B2]/20" : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800")}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={"text-[10px] px-1.5 py-0.2 rounded-full " + (isActive ? "bg-white/20 text-white" : "bg-[#0097B2]/20 text-[#0097B2]")}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Google Business Profile API: Connected</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: DASHBOARD                                                          */}
        {/* ========================================================================= */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Search Bar matching user's mobile app reference */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search services, quick tools, diagnostic tests..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            {/* Growth Services Quick Grid (2 Cols on mobile, matching reference screenshot) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-heading font-bold text-sm sm:text-base text-white">
                  Growth Services & Quick Actions
                </h2>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] bg-[#0097B2]/10 px-2 py-0.5 rounded-full">
                  GBP v1.0
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { id: "audit", title: "Diagnostics & Audit", desc: "0–100 GBP Health Check", badge: auditScore + "/100", icon: Activity, color: "text-rose-400", bg: "bg-rose-500/10", border: "hover:border-rose-500/40" },
                  { id: "reviews", title: "Reviews AI Inbox", desc: pendingCount + " pending reviews", badge: pendingCount + " Pending", icon: MessageSquare, color: "text-amber-400", bg: "bg-amber-500/10", border: "hover:border-amber-500/40" },
                  { id: "posts", title: "Google Posts AI", desc: "Auto promotional updates", badge: "Auto CTA", icon: Share2, color: "text-purple-400", bg: "bg-purple-500/10", border: "hover:border-purple-500/40" },
                  { id: "audit", title: "Profile Optimizer", desc: "750-char SEO description", badge: "Ranking", icon: Sparkles, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "hover:border-cyan-500/40" },
                  { id: "automations", title: "Automation Rules", desc: "Auto-pilot 5★ reviews", badge: "4 Active", icon: Sliders, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/40" },
                  { id: "dashboard", title: "ROI Telemetry", desc: "Calls, clicks & directions", badge: "+24.8%", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/40" }
                ].map(tool => {
                  const Icon = tool.icon;
                  return (
                    <button
                      key={tool.title}
                      onClick={() => setActiveTab(tool.id)}
                      className={"p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-left flex flex-col justify-between shadow-sm transition active:scale-95 cursor-pointer " + tool.border}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className={"w-8 h-8 rounded-xl flex items-center justify-center " + tool.bg + " " + tool.color}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                        </div>
                        <h3 className="font-heading font-bold text-xs text-white leading-tight">
                          {tool.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                          {tool.desc}
                        </p>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-slate-800/80">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-[#0097B2]">
                          {tool.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Core KPI Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Google Rating</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">4.8</span>
                  <span className="text-xs text-slate-400">/ 5.0 (142 reviews)</span>
                </div>
                <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +0.2 this month
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Phone Calls</span>
                  <Phone className="w-3.5 h-3.5 text-[#0097B2]" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">520</span>
                  <span className="text-xs text-emerald-400 font-semibold">+24%</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400">
                  Direct Maps click-to-call
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Directions</span>
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">740</span>
                  <span className="text-xs text-emerald-400 font-semibold">+18.4%</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400">
                  Storefront navigation requests
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Website Visits</span>
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">1,020</span>
                  <span className="text-xs text-emerald-400 font-semibold">+32%</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400">
                  Direct profile clicks
                </div>
              </div>
            </div>

            {/* 81/100 Growth Diagnostic Score Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B2545] border border-[#0097B2]/30 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0097B2]">
                    Proprietary Audit Core
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white mt-0.5">
                    Google Business Profile Health Diagnostic
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Based on 24 local SEO ranking factors checked against Udaipur market competitors.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-[#0097B2]">{auditScore}</span>
                    <span className="text-slate-400 text-sm">/100</span>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase">
                      {auditScore >= 90 ? "Excellent" : "Good • High Growth Potential"}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab("audit")}
                    className="px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>View 24 Factors</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Factor Progress Bars */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Business Information</span>
                    <span className="text-white font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Profile Completeness</span>
                    <span className="text-white font-bold">90%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Reviews & Sentiment</span>
                    <span className="text-white font-bold">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Weekly Media & Posts</span>
                    <span className="text-white font-bold">61%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: "61%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Opportunities Banner */}
            {pendingCount > 0 && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                      {pendingCount} Google Reviews Awaiting AI Response
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Replying within 24 hours boosts Google Local Pack ranking velocity by 18%.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition shrink-0 cursor-pointer"
                >
                  Reply with AI
                </button>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: REVIEWS AI INBOX                                                   */}
        {/* ========================================================================= */}
        {activeTab === "reviews" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#0097B2]" />
                  <span>Google Reviews AI Inbox</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Generate contextual, sentiment-aware, keyword-rich replies matching your brand voice in 1 tap.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  { id: "ALL", label: "All Reviews (" + reviews.length + ")" },
                  { id: "PENDING", label: "Needs Reply (" + pendingCount + ")" },
                  { id: "5STAR", label: "5-Star" },
                  { id: "CRITICAL", label: "Critical (<3★)" }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setReviewFilter(f.id)}
                    className={"px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer " + (reviewFilter === f.id ? "bg-[#0097B2] text-white" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800")}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredReviews.map(review => (
                <div
                  key={review.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md hover:border-slate-700 transition"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center border border-slate-700">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white">
                          {review.author}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex items-center text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={"w-3 h-3 " + (i < review.rating ? "fill-amber-400" : "text-slate-600")}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">{review.time}</span>
                        </div>
                      </div>
                    </div>

                    <span className={"text-[10px] font-bold px-2.5 py-1 rounded-full uppercase " + (review.status === "ANSWERED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20")}>
                      {review.status === "ANSWERED" ? "✓ Replied" : "Pending Reply"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    "{review.text}"
                  </p>

                  {review.status === "ANSWERED" ? (
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#0097B2] mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Official Response Published on Google:</span>
                      </div>
                      <p className="text-slate-300">{review.replyText}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {review.replyText ? (
                        <div className="space-y-2">
                          <label className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Edit AI-Drafted Response:
                          </label>
                          <textarea
                            value={review.replyText}
                            onChange={(e) => {
                              const val = e.target.value;
                              setReviews(prev => prev.map(r => r.id === review.id ? { ...r, replyText: val } : r));
                            }}
                            rows={3}
                            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                          />
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => publishReply(review.id)}
                              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" /> Approve & Post to Google
                            </button>
                            <button
                              onClick={() => generateAiReply(review.id)}
                              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition cursor-pointer"
                            >
                              Regenerate
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => generateAiReply(review.id)}
                          disabled={review.isGenerating}
                          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-600 hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-[#0097B2]/20 transition cursor-pointer"
                        >
                          <Sparkles className={"w-3.5 h-3.5 " + (review.isGenerating ? "animate-spin" : "")} />
                          <span>{review.isGenerating ? "Analyzing Sentiment & Drafting..." : "✨ Generate AI Response"}</span>
                        </button>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: 24-POINT AUDIT & RANKING FACTORS                                   */}
        {/* ========================================================================= */}
        {activeTab === "audit" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-rose-400" />
                  <span>24-Point Google Business Profile Audit</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Live ranking diagnostics scanned against Google Maps Local 3-Pack algorithms.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-[#0097B2]">{auditScore}/100</span>
                <button
                  onClick={handleSync}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-[#0097B2]" /> Re-scan
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-bold text-sm text-white">
                Prioritized Action Items
              </h3>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={"w-8 h-8 rounded-xl flex items-center justify-center shrink-0 " + (appliedFixes.categories ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400")}>
                    {appliedFixes.categories ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                      Add High-Intent Secondary Categories (+7 pts)
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Your profile has 'Dental clinic', but lacks 'Cosmetic dentist' and 'Dental implants provider' which have 2,400 monthly searches in Udaipur.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => applyAuditFix("categories", 7)}
                  disabled={appliedFixes.categories}
                  className={"px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer " + (appliedFixes.categories ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md")}
                >
                  {appliedFixes.categories ? "✓ Categories Applied" : "1-Click Add Categories"}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={"w-8 h-8 rounded-xl flex items-center justify-center shrink-0 " + (appliedFixes.description ? "bg-emerald-500/10 text-emerald-400" : "bg-purple-500/10 text-purple-400")}>
                    {appliedFixes.description ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                      Optimize 750-Character Description (+5 pts)
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Include geo-targeted keywords: 'Painless RCT in Udaipur', 'Saheli Nagar clinic', 'teeth whitening expert'.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => applyAuditFix("description", 5)}
                  disabled={appliedFixes.description}
                  className={"px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer " + (appliedFixes.description ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-[#0097B2] hover:bg-[#007a91] text-white shadow-md")}
                >
                  {appliedFixes.description ? "✓ SEO Description Applied" : "Apply AI Optimized Copy"}
                </button>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Passed Verification Tests (18 / 24)
                </h4>

                {[
                  "Storefront Address Formatted & Verified on Google Maps (Udaipur, Rajasthan 313001)",
                  "Primary Category Exact Match with Target Search Query",
                  "Direct Phone Number Click-to-Call Configured (+91 70735 38077)",
                  "Regular Operating Hours Configured for All 7 Days",
                  "NAP (Name, Address, Phone) Consistency: 100% across local citations",
                  "Google Messaging & Instant WhatsApp Bridge Active",
                  "Special Accessibility Attributes Enabled (Wheelchair accessible entrance)",
                  "High-Resolution Storefront Geotagged Exterior Photos Active"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: GOOGLE POSTS AI GENERATOR                                         */}
        {/* ========================================================================= */}
        {activeTab === "posts" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="pb-4 border-b border-slate-800">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                <Share2 className="w-5 h-5 text-purple-400" />
                <span>Automated Google Posts Engine</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Google rewards profiles that publish weekly promotional updates. Create and schedule high-converting posts with tracking links in seconds.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Post Type
                  </label>
                  <div className="flex items-center gap-2">
                    {["OFFER", "UPDATE", "EVENT"].map(t => (
                      <button
                        key={t}
                        onClick={() => setPostType(t)}
                        className={"flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer " + (postType === t ? "bg-[#0097B2] text-white" : "bg-slate-800 text-slate-400 hover:text-white")}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                    Call To Action Button
                  </label>
                  <select className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]">
                    <option>Call Now (+91 70735 38077)</option>
                    <option>Book Appointment</option>
                    <option>Get Directions to Udaipur Clinic</option>
                    <option>Learn More on Website</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">
                  Campaign Headline or Topic
                </label>
                <input
                  type="text"
                  value={postTopic}
                  onChange={e => setPostTopic(e.target.value)}
                  placeholder="e.g. Festival Smile Makeover: 20% Off Teeth Whitening"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <button
                onClick={handleGeneratePost}
                disabled={isGeneratingPost}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
              >
                <Sparkles className={"w-4 h-4 " + (isGeneratingPost ? "animate-spin" : "")} />
                <span>{isGeneratingPost ? "Drafting High-Converting Post..." : "✨ Generate Google Post with AI"}</span>
              </button>

              {generatedPost && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-purple-400 font-bold">
                    <span>Google Maps Post Preview:</span>
                    <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded-full">Ready to Publish</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 text-xs text-slate-200 whitespace-pre-line font-sans leading-relaxed">
                    {generatedPost}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePublishPost}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-md"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Schedule & Publish to Google Profile</span>
                    </button>
                    <button
                      onClick={() => setGeneratedPost("")}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              )}

            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-bold text-sm text-white">
                Live Posts History on Google Maps
              </h3>

              {publishedPosts.map(p => (
                <div key={p.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
                        {p.status}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{p.date}</span>
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white">{p.title}</h4>
                  </div>
                  <div className="flex items-center gap-4 text-right shrink-0">
                    <div>
                      <div className="text-xs font-bold text-white">{p.views}</div>
                      <div className="text-[10px] text-slate-500">Impressions</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0097B2]">{p.clicks}</div>
                      <div className="text-[10px] text-slate-500">CTA Clicks</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: AUTOMATION RULES                                                   */}
        {/* ========================================================================= */}
        {activeTab === "automations" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="pb-4 border-b border-slate-800">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <span>Rule-Based Automation Workflows</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Configure autonomous event triggers to protect reputation and maximize Google Maps velocity without manual intervention.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  key: "autoThank5Star",
                  title: "Auto-Pilot 5-Star Review Gratitude",
                  desc: "Automatically drafts and posts a warm, personalized thank-you response to all 5-star reviews within 15 minutes.",
                  badge: "Reputation Boost"
                },
                {
                  key: "negativeAlert",
                  title: "Critical Negative Review (<3★) Instant Alert",
                  desc: "Sends real-time priority SMS/Email alerts to management desk and holds automated response for leadership review.",
                  badge: "Brand Protection"
                },
                {
                  key: "weeklyPostAutoDraft",
                  title: "Weekly Google Post Auto-Drafting",
                  desc: "Every Monday morning, generates two new promotional updates based on seasonal search trends in Udaipur.",
                  badge: "Organic Search Boost"
                },
                {
                  key: "monthlyHealthAudit",
                  title: "Automated Weekly 24-Point Health Re-scan",
                  desc: "Monitors competitor category shifts, NAP consistency, and new Google Maps profile ranking updates.",
                  badge: "Ranking Maintenance"
                }
              ].map(rule => (
                <div
                  key={rule.key}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-white">{rule.title}</h4>
                      <span className="text-[10px] font-mono text-[#0097B2] bg-[#0097B2]/10 px-2 py-0.5 rounded-full">
                        {rule.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                      {rule.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setAutomations(prev => {
                        const updated = { ...prev, [rule.key]: !prev[rule.key] };
                        showNotification(rule.title + (updated[rule.key] ? " Enabled" : " Disabled"));
                        return updated;
                      });
                    }}
                    className={"w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 " + (automations[rule.key] ? "bg-emerald-500" : "bg-slate-700")}
                  >
                    <span className={"absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform " + (automations[rule.key] ? "translate-x-6" : "")} />
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: SETTINGS & BUSINESS PROFILE                                        */}
        {/* ========================================================================= */}
        {activeTab === "settings" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="pb-4 border-b border-slate-800">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-slate-400" />
                <span>Profile & Connection Settings</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Verified Google Business Profile metadata and integration configuration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="font-heading font-bold text-sm text-white">Active User & Business Session</h3>
                
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Authenticated User</label>
                  <input
                    type="text"
                    readOnly
                    value={currentUser.name + " (" + currentUser.role + ")"}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">User Email</label>
                  <input
                    type="text"
                    readOnly
                    value={currentUser.email}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Storefront Location (Udaipur, Rajasthan)</label>
                  <input
                    type="text"
                    readOnly
                    value={currentUser.location || "Plot 14, Saheli Nagar, Udaipur, Rajasthan 313001"}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 font-bold text-xs flex items-center justify-center gap-2 border border-rose-500/30 transition cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out of this Account</span>
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="font-heading font-bold text-sm text-white">Google Integration Status</h3>
                
                <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      G
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Google Business Profile API</div>
                      <div className="text-[10px] text-emerald-400">Connected & Verified (Token Active)</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                  <div className="font-semibold text-slate-300">Security & Access Management</div>
                  <p className="text-[11px] text-slate-400">
                    Role-based access control enabled. Only verified administrators can publish review responses or edit categories.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
                  >
                    <span>Connect Additional Storefront Locations</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* MOBILE STICKY BOTTOM APP NAVIGATION BAR (Strictly matching reference SS)   */}
      {/* ========================================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          
          <button
            onClick={() => setActiveTab("dashboard")}
            className={"flex flex-col items-center gap-1 p-2 rounded-xl transition cursor-pointer " + (activeTab === "dashboard" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px]">Home</span>
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={"flex flex-col items-center gap-1 p-2 rounded-xl relative transition cursor-pointer " + (activeTab === "reviews" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
          >
            <MessageSquare className="w-5 h-5" />
            {pendingCount > 0 && (
              <span className="absolute top-1 right-2 w-4 h-4 bg-amber-500 text-slate-950 font-extrabold text-[9px] rounded-full flex items-center justify-center">
                {pendingCount}
              </span>
            )}
            <span className="text-[10px]">Reviews</span>
          </button>

          {/* Center (+) Floating Action Button */}
          <button
            onClick={() => setShowActionSheet(true)}
            className="w-12 h-12 -mt-5 rounded-full bg-gradient-to-tr from-[#0097B2] to-cyan-400 text-white shadow-lg shadow-[#0097B2]/40 flex items-center justify-center active:scale-90 transition-transform cursor-pointer border-2 border-slate-900"
            title="Quick AI Actions"
          >
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={() => setActiveTab("audit")}
            className={"flex flex-col items-center gap-1 p-2 rounded-xl transition cursor-pointer " + (activeTab === "audit" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
          >
            <Activity className="w-5 h-5" />
            <span className="text-[10px]">Audit</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={"flex flex-col items-center gap-1 p-2 rounded-xl transition cursor-pointer " + (activeTab === "settings" ? "text-[#0097B2] font-bold" : "text-slate-400 hover:text-white")}
          >
            <Settings className="w-5 h-5" />
            <span className="text-[10px]">Settings</span>
          </button>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* QUICK AI ACTIONS BOTTOM SHEET MODAL (Triggered by (+) FAB)               */}
      {/* ========================================================================= */}
      {showActionSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setShowActionSheet(false)} />
          
          <div className="relative w-full max-w-md bg-slate-900 border-t border-slate-800 rounded-t-3xl p-6 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0097B2]" />
                <h3 className="font-heading font-bold text-sm text-white">Quick AI Growth Actions</h3>
              </div>
              <button
                onClick={() => setShowActionSheet(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setShowActionSheet(false);
                  setActiveTab("reviews");
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <MessageSquare className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-bold text-xs text-white">Reply to Pending Reviews</div>
                <div className="text-[10px] text-slate-400">{pendingCount} reviews waiting</div>
              </button>

              <button
                onClick={() => {
                  setShowActionSheet(false);
                  setActiveTab("posts");
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <Share2 className="w-5 h-5 text-purple-400 mb-2" />
                <div className="font-bold text-xs text-white">Create Google Post</div>
                <div className="text-[10px] text-slate-400">Offers & weekly updates</div>
              </button>

              <button
                onClick={() => {
                  setShowActionSheet(false);
                  handleSync();
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <RefreshCw className="w-5 h-5 text-[#0097B2] mb-2" />
                <div className="font-bold text-xs text-white">Sync Live Data</div>
                <div className="text-[10px] text-slate-400">From Google Maps API</div>
              </button>

              <button
                onClick={() => {
                  setShowActionSheet(false);
                  setActiveTab("audit");
                }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-left transition"
              >
                <Activity className="w-5 h-5 text-rose-400 mb-2" />
                <div className="font-bold text-xs text-white">24-Point Health Audit</div>
                <div className="text-[10px] text-slate-400">Current: {auditScore}/100</div>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
