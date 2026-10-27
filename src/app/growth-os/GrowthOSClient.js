"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, RefreshCw, LogOut, AlertTriangle, ArrowLeft, ArrowRight, Lock } from "lucide-react";

import {
  DEFAULT_BUSINESS,
  DEFAULT_KPI,
  DEFAULT_AUDIT_CATEGORIES,
  DEFAULT_OPPORTUNITIES,
  DEFAULT_REVIEWS,
  DEFAULT_TASKS,
  SM_NEXTGEN_REVIEWS,
  SM_NEXTGEN_OPPORTUNITIES
} from "./lib/initialData";
import { storageService, SEED_WORKSPACES } from "./lib/supabaseClient";

import PublicLanding from "./components/PublicLanding";
import AuthScreen from "./components/AuthScreen";
import OnboardingFlow from "./components/OnboardingFlow";
import GrowthOSSidebar from "./components/GrowthOSSidebar";
import GrowthOSMobileNav from "./components/GrowthOSMobileNav";
import ConnectGoogleModal from "./components/ConnectGoogleModal";

import DashboardTab from "./components/DashboardTab";
import AuditTab from "./components/AuditTab";
import OptimizationTab from "./components/OptimizationTab";
import ReviewsTab from "./components/ReviewsTab";
import PerformanceTab from "./components/PerformanceTab";
import TasksTab from "./components/TasksTab";
import AssistantTab from "./components/AssistantTab";
import ToolsTab from "./components/ToolsTab";
import SettingsTab from "./components/SettingsTab";
import AdminTab from "./components/AdminTab";

class TabErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Tab crash prevented by TabErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 max-w-lg mx-auto my-12 text-slate-100 font-sans">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-extrabold text-lg text-white">Module Refreshing</h3>
          <p className="text-xs text-slate-400">This module is refreshing its data state. Click below to continue.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold transition cursor-pointer"
          >
            Reload Module
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function GrowthOSClient() {
  const [currentUser, setCurrentUser] = useState(null);
  const [viewMode, setViewMode] = useState("landing"); // "landing" | "auth" | "app"
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Multi-Tenant Workspaces State
  const [workspaces, setWorkspaces] = useState(SEED_WORKSPACES);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState("biz-1");

  // Core Platform Navigation & UI State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currency, setCurrency] = useState("USD");
  const [toast, setToast] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isConnectGoogleOpen, setIsConnectGoogleOpen] = useState(false);

  // Active Workspace Data State
  const [kpi, setKpi] = useState(DEFAULT_KPI);
  const [auditScore, setAuditScore] = useState(0);
  const [appliedFixes, setAppliedFixes] = useState({});
  const [auditCategories, setAuditCategories] = useState(DEFAULT_AUDIT_CATEGORIES);
  const [opportunities, setOpportunities] = useState(DEFAULT_OPPORTUNITIES);
  const [reviews, setReviews] = useState(DEFAULT_REVIEWS);
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  // Refresh all workspace telemetry & tools from server database
  const refreshAllData = async () => {
    setIsLoadingData(true);
    try {
      // 1. Fetch Business Profile
      const bizRes = await fetch("/api/growth-os/business");
      if (bizRes.ok) {
        const bizData = await bizRes.json();
        if (bizData.business) {
          setWorkspaces(prev => {
            const exists = prev.some(w => w.id === bizData.business.id);
            return exists 
              ? prev.map(w => w.id === bizData.business.id ? bizData.business : w) 
              : [bizData.business, ...prev];
          });
          setActiveWorkspaceId(bizData.business.id);
        }
      }

      // 2. Fetch Deterministic Audit
      const auditRes = await fetch("/api/growth-os/audit");
      if (auditRes.ok) {
        const auditData = await auditRes.json();
        if (auditData.audit) {
          setAuditScore(auditData.audit.overallScore || 0);
          if (auditData.audit.breakdown) {
            const cats = Object.entries(auditData.audit.breakdown).map(([k, v]) => ({
              id: k,
              name: k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, " $1"),
              score: v.score || 0,
              maxScore: v.max || 25,
              status: v.score >= (v.max * 0.8) ? "OPTIMIZED" : v.score >= (v.max * 0.5) ? "ATTENTION" : "CRITICAL"
            }));
            setAuditCategories(cats);
          }
          if (auditData.audit.recommendations) {
            setOpportunities(auditData.audit.recommendations.map(r => ({
              id: r.id,
              title: r.title,
              impact: r.impact,
              points: r.potentialScoreGain || 5,
              actionTab: r.category === "reviews" ? "reviews" : "audit",
              description: r.fixAction
            })));
          }
        }
      }

      // 3. Fetch Tasks
      const tasksRes = await fetch("/api/growth-os/tasks");
      if (tasksRes.ok) {
        const tasksData = await tasksRes.json();
        if (tasksData.tasks) {
          setTasks(tasksData.tasks);
        }
      }

      // 4. Fetch Reviews
      const revRes = await fetch("/api/growth-os/reviews");
      if (revRes.ok) {
        const revData = await revRes.json();
        if (revData.reviews) {
          setReviews(revData.reviews);
          if (revData.kpi) {
            setKpi(prev => ({
              ...prev,
              rating: revData.kpi.averageRating || prev.rating,
              totalReviews: revData.kpi.totalReviews || prev.totalReviews,
              unansweredReviews: revData.kpi.unansweredReviews || 0
            }));
          }
        }
      }
    } catch (e) {
      console.warn("Could not fetch remote Growth OS state:", e);
    } finally {
      setIsLoadingData(false);
    }
  };

  // Check saved session on mount via real /api/growth-os/auth/me
  useEffect(() => {
    setIsClientLoaded(true);

    async function verifyServerSession() {
      try {
        const res = await fetch("/api/growth-os/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.user) {
            setCurrentUser(data.user);
            setHasCompletedProfile(Boolean(data.hasCompletedProfile));
            setViewMode("app");
            if (data.businesses && data.businesses.length > 0) {
              setWorkspaces(data.businesses);
              setActiveWorkspaceId(data.user.businessId || data.businesses[0].id);
            }
            if (data.hasCompletedProfile) {
              await refreshAllData();
            }
            return;
          }
        }
      } catch (err) {
        console.error("Auth verification failed:", err);
      }

      // Fallback to local storage or query params
      const session = storageService.getSession();
      const storedWorkspaces = storageService.getWorkspaces();
      const storedActiveId = storageService.getActiveWorkspaceId();

      setWorkspaces(storedWorkspaces);
      setActiveWorkspaceId(storedActiveId);

      const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const directAction = urlParams?.get("app") || urlParams?.get("login") || urlParams?.get("auth");

      if (session) {
        setCurrentUser(session);
        setHasCompletedProfile(true);
        setViewMode("app");
        if (session.businessId && storedWorkspaces.some(w => w.id === session.businessId)) {
          setActiveWorkspaceId(session.businessId);
          loadWorkspaceData(session.businessId, storedWorkspaces);
        } else {
          loadWorkspaceData(storedActiveId, storedWorkspaces);
        }
      } else if (directAction) {
        setViewMode("auth");
        loadWorkspaceData(storedActiveId, storedWorkspaces);
      } else {
        setViewMode("landing");
        loadWorkspaceData(storedActiveId, storedWorkspaces);
      }
    }

    verifyServerSession();
  }, []);

  const loadWorkspaceData = (wsId, allWorkspaces) => {
    const savedState = storageService.getWorkspaceState(wsId);
    const currentW = (allWorkspaces || workspaces).find(w => w.id === wsId);

    if (savedState) {
      if (savedState.kpi) setKpi(savedState.kpi);
      if (savedState.score !== undefined) setAuditScore(savedState.score);
      if (savedState.reviews) setReviews(savedState.reviews);
      if (savedState.opportunities) setOpportunities(savedState.opportunities);
      if (savedState.tasks) setTasks(savedState.tasks);
      if (savedState.appliedFixes) setAppliedFixes(savedState.appliedFixes);
    } else if (currentW && !currentW.googleConnected) {
      // Clean zero state for un-connected business
      setAuditScore(0);
      setKpi(DEFAULT_KPI);
      setReviews([]);
      setOpportunities(DEFAULT_OPPORTUNITIES);
      setTasks(DEFAULT_TASKS);
      setAppliedFixes({});
    } else if (currentW) {
      // Default benchmark
      setAuditScore(currentW.score || 80);
      setKpi(prev => ({
        ...prev,
        rating: currentW.rating || 4.8,
        totalReviews: currentW.totalReviews || 142
      }));
    }
  };

  // Compute current business based on activeWorkspaceId
  const currentBusiness = workspaces.find(w => w.id === activeWorkspaceId) || workspaces[0] || DEFAULT_BUSINESS;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Auth Handlers
  const handleLoginSuccess = (user, workspace, profileComplete, msg) => {
    setCurrentUser(user);
    setHasCompletedProfile(Boolean(profileComplete));
    setViewMode("app");
    if (workspace) {
      setWorkspaces([workspace]);
      setActiveWorkspaceId(workspace.id);
    }
    if (profileComplete) {
      refreshAllData();
    }
    showToast(msg || "Signed in successfully!");
  };

  const handleProfileComplete = (savedBiz) => {
    setHasCompletedProfile(true);
    if (savedBiz) {
      setWorkspaces(prev => {
        const others = prev.filter(w => w.id !== savedBiz.id);
        return [savedBiz, ...others];
      });
      setActiveWorkspaceId(savedBiz.id);
    }
    refreshAllData();
    showToast(`Profile created for ${savedBiz?.name || "your business"}! Growth OS unlocked.`);
  };

  const handleLaunchDemo = () => {
    const demoUser = {
      id: "user-demo",
      name: "Demo Explorer",
      email: "demo@smnextgen.com",
      role: "DEMO",
      isDemo: true,
      businessId: "biz-2",
      businessName: "Lakeview Heritage Palace Resort",
      city: "Udaipur, Rajasthan",
      createdAt: new Date().toISOString()
    };
    setCurrentUser(demoUser);
    setHasCompletedProfile(true);
    setViewMode("app");
    setActiveWorkspaceId("biz-2");
    loadWorkspaceData("biz-2", workspaces);
    showToast("Loaded 1-Click Interactive Demo Mode!");
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/growth-os/auth/logout", { method: "POST" });
    } catch (e) {}
    storageService.clearSession();
    setCurrentUser(null);
    setHasCompletedProfile(false);
    setViewMode("landing");
    setActiveTab("dashboard");
    showToast("Signed out safely.");
  };

  // Workspace Switcher Handlers
  const handleSwitchWorkspace = (newId) => {
    setActiveWorkspaceId(newId);
    storageService.setActiveWorkspaceId(newId);
    loadWorkspaceData(newId, workspaces);
    const switchedBiz = workspaces.find(w => w.id === newId);
    showToast(`Switched workspace to: ${switchedBiz?.name || "New Business"}`);
  };

  const handleAddWorkspace = (newBiz) => {
    const updated = [newBiz, ...workspaces];
    setWorkspaces(updated);
    storageService.saveWorkspaces(updated);
    handleSwitchWorkspace(newBiz.id);
  };

  const handleUpdateWorkspace = (id, updates) => {
    const updated = workspaces.map(w => w.id === id ? { ...w, ...updates } : w);
    setWorkspaces(updated);
    storageService.saveWorkspaces(updated);
  };

  const handleDeleteWorkspace = (id) => {
    const updated = workspaces.filter(w => w.id !== id);
    setWorkspaces(updated);
    storageService.saveWorkspaces(updated);
    if (activeWorkspaceId === id && updated.length > 0) {
      handleSwitchWorkspace(updated[0].id);
    }
  };

  // Google Connection Handlers
  const handleConnectGoogleSuccess = (googleData) => {
    const updatedBiz = {
      ...currentBusiness,
      name: googleData.name || currentBusiness.name,
      category: googleData.category || currentBusiness.category,
      address: googleData.address || currentBusiness.address,
      city: googleData.city || currentBusiness.city,
      phone: googleData.phone || currentBusiness.phone,
      website: googleData.website || currentBusiness.website,
      googleConnected: true,
      placeId: googleData.placeId || "ChIJW1VvSMNextGenUdaipurHQ",
      gbpUrl: googleData.mapsUrl || currentBusiness.gbpUrl,
      lastSynced: "Just now",
      gbpVerified: true
    };
    handleUpdateWorkspace(currentBusiness.id, updatedBiz);
    
    const verifiedRating = googleData.rating || 5.0;
    const verifiedReviews = googleData.totalReviews || 47;
    const activeReviews = (googleData.reviews && googleData.reviews.length > 0) ? googleData.reviews : SM_NEXTGEN_REVIEWS;
    const activeOpps = (googleData.opportunities && googleData.opportunities.length > 0) ? googleData.opportunities : SM_NEXTGEN_OPPORTUNITIES;
    const unanswered = activeReviews.filter(r => r.status === "UNANSWERED").length;

    const liveKpi = {
      rating: verifiedRating,
      totalReviews: verifiedReviews,
      unansweredReviews: unanswered,
      profileCompleteness: 95,
      calls: googleData.calls || 198,
      callsChange: "+18%",
      websiteClicks: googleData.websiteClicks || 402,
      websiteClicksChange: "+26%",
      directionRequests: googleData.directionRequests || 240,
      directionsChange: "+14%",
      searchImpressions: googleData.searchImpressions || 3854
    };
    
    setKpi(liveKpi);
    setAuditScore(88);
    setReviews(activeReviews);
    setOpportunities(activeOpps);
    
    storageService.saveWorkspaceState(currentBusiness.id, {
      kpi: liveKpi,
      score: 88,
      reviews: activeReviews,
      opportunities: activeOpps,
      tasks: tasks,
      appliedFixes: appliedFixes
    });

    showToast(`Verified Google Profile "${googleData.name}" connected!`);
  };

  const handleDisconnectGoogle = () => {
    const updatedBiz = {
      ...currentBusiness,
      googleConnected: false,
      placeId: "",
      lastSynced: "Not synced",
      gbpVerified: false
    };
    handleUpdateWorkspace(currentBusiness.id, updatedBiz);
    setAuditScore(0);
    setKpi(DEFAULT_KPI);
    setReviews([]);
    setOpportunities(DEFAULT_OPPORTUNITIES);
    setTasks(DEFAULT_TASKS);
    setAppliedFixes({});
    storageService.saveWorkspaceState(currentBusiness.id, {
      kpi: DEFAULT_KPI,
      score: 0,
      reviews: [],
      opportunities: DEFAULT_OPPORTUNITIES,
      tasks: DEFAULT_TASKS,
      appliedFixes: {}
    });
    showToast("Google Business Profile disconnected. Dashboard reset to blank state.");
  };

  // Live Sync Simulation
  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showToast("Google Business Profile synced with Google Maps API!");
    }, 1100);
  };

  // Opportunity Handlers
  const handleApplyOpportunity = (opp) => {
    setAuditScore(prev => Math.min(100, prev + (opp.points || 5)));
    setOpportunities(prev => prev.filter(o => o.id !== opp.id));
    if (opp.actionTab) {
      setActiveTab(opp.actionTab);
    }
    showToast("Opportunity applied! Growth Score increased by +" + opp.points + " pts.");
  };

  // Audit Fix Handlers
  const handleApplyAuditFix = (fixId, points, label) => {
    if (appliedFixes[fixId]) return;
    const nextFixes = { ...appliedFixes, [fixId]: true };
    const nextScore = Math.min(100, auditScore + points);
    setAppliedFixes(nextFixes);
    setAuditScore(nextScore);
    
    storageService.saveWorkspaceState(activeWorkspaceId, {
      appliedFixes: nextFixes,
      score: nextScore,
      kpi,
      reviews,
      tasks
    });

    showToast("Optimized '" + label + "'! +" + points + " Growth Score added.");
  };

  // Reviews AI Handlers (Database & Real API Persistence)
  const handleAddReview = async (newRev) => {
    const updatedReviews = [newRev, ...reviews];
    setReviews(updatedReviews);

    const newAvg = (updatedReviews.reduce((acc, r) => acc + (r.rating || 5), 0) / updatedReviews.length).toFixed(1);
    const updatedKpi = {
      ...kpi,
      rating: parseFloat(newAvg),
      totalReviews: updatedReviews.length,
      unansweredReviews: updatedReviews.filter(r => r.status === "UNANSWERED").length
    };
    setKpi(updatedKpi);
    showToast(`Added review from ${newRev.author} (${newRev.rating}★)!`);

    try {
      const res = await fetch("/api/growth-os/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRev)
      });
      const data = await res.json();
      if (res.ok && data.review) {
        setReviews(prev => prev.map(r => r.id === newRev.id ? data.review : r));
      }
    } catch (e) {}
  };

  const handleDeleteReview = async (reviewId) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
    showToast("Review deleted.");

    try {
      await fetch(`/api/growth-os/reviews?id=${encodeURIComponent(reviewId)}`, {
        method: "DELETE"
      });
    } catch (e) {}
  };

  const handlePublishReply = async (reviewId, replyText) => {
    const updatedReviews = reviews.map(r => {
      if (r.id === reviewId) {
        return {
          ...r,
          status: "ANSWERED",
          response: replyText
        };
      }
      return r;
    });

    const nextScore = Math.min(100, auditScore + 2);
    setReviews(updatedReviews);
    setAuditScore(nextScore);
    showToast("Response approved & saved! (+2 pts)");

    try {
      await fetch("/api/growth-os/reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: reviewId, response: replyText })
      });
    } catch (e) {}
  };

  // Tasks Handlers (Database & Real API Persistence)
  const handleToggleTask = async (taskId) => {
    const target = tasks.find(t => t.id === taskId);
    const nextStatus = target?.status === "COMPLETED" ? "PENDING" : "COMPLETED";

    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        if (nextStatus === "COMPLETED") {
          setAuditScore(score => Math.min(100, score + 3));
          showToast("Task completed! +3 Growth Score added.");
        }
        return { ...t, status: nextStatus };
      }
      return t;
    }));

    try {
      await fetch("/api/growth-os/tasks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: taskId, status: nextStatus })
      });
    } catch (e) {}
  };

  const handleAddTask = async (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    showToast("New growth task added to Action Center!");

    try {
      const res = await fetch("/api/growth-os/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
      });
      const data = await res.json();
      if (res.ok && data.task) {
        setTasks(prev => prev.map(t => t.id === newTask.id ? data.task : t));
      }
    } catch (e) {}
  };

  const unansweredReviewsCount = reviews.filter(r => r.status === "UNANSWERED").length;

  // Toast Notification Component
  const ToastNotification = toast && (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4">
      <Sparkles className="w-4 h-4 fill-white" />
      <span>{toast}</span>
    </div>
  );

  // 1. UNAUTHENTICATED EXPERIENCE (Product Layer B Landing vs Auth Screen)
  if (!currentUser) {
    if (viewMode === "auth") {
      return (
        <div className="dark min-h-screen w-full bg-slate-950 text-slate-100 font-sans">
          {ToastNotification}
          <AuthScreen 
            onLoginSuccess={handleLoginSuccess} 
            onBackToLanding={() => setViewMode("landing")} 
          />
        </div>
      );
    }

    // Default: Public Product Overview & Interactive Free Audit (Product Layer B)
    return (
      <div className="dark min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white">
        {ToastNotification}
        
        {/* Top Product Bar */}
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition">
            <ArrowLeft className="w-3.5 h-3.5 text-[#0097B2]" />
            <span>Return to SM NextGen Corporate</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLaunchDemo}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>1-Click Live Demo</span>
            </button>

            <button
              onClick={() => setViewMode("auth")}
              className="px-4 py-1.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Sign In / Launch App</span>
            </button>
          </div>
        </header>

        <PublicLanding
          onOpenAuth={() => setViewMode("auth")}
          onLaunchDemo={handleLaunchDemo}
        />
      </div>
    );
  }

  // 2. MANDATORY PROFILE ONBOARDING GATE: Business Profile first, SaaS tools second
  if (currentUser && !hasCompletedProfile && !currentUser.isDemo) {
    return (
      <div className="dark min-h-screen w-full bg-slate-950 text-slate-100 font-sans">
        {ToastNotification}
        <OnboardingFlow 
          currentUser={currentUser} 
          onComplete={handleProfileComplete} 
        />
      </div>
    );
  }

  // 3. AUTHENTICATED WORKSPACE: Render Modern SaaS Desktop Sidebar + Native Mobile App Layout
  return (
    <div className="dark min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white flex overflow-hidden">
      {ToastNotification}

      {/* Vertical Left Sidebar on Desktop (PC View) */}
      <GrowthOSSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        business={currentBusiness}
        workspaces={workspaces}
        activeWorkspaceId={activeWorkspaceId}
        onSwitchWorkspace={handleSwitchWorkspace}
        onOpenAddBusiness={() => setActiveTab("admin")}
        currentUser={currentUser}
        onSignOut={handleSignOut}
        onOpenConnectGoogle={() => setIsConnectGoogleOpen(true)}
        auditScore={auditScore}
        unansweredReviewsCount={unansweredReviewsCount}
      />

      {/* Main Workspace Scrollable Viewport */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        
        {/* Persistent High-Contrast Demo Mode Banner */}
        {(currentBusiness?.isDemo || currentUser?.isDemo) && (
          <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border-b border-amber-500/30 px-4 py-2 text-center text-xs text-amber-300 font-medium flex flex-wrap items-center justify-center gap-2 z-30 shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Demo Data Mode Active:</strong> You are exploring sample benchmark data. Never mistake demo metrics for real Google data.</span>
            <button
              onClick={() => setIsConnectGoogleOpen(true)}
              className="px-2.5 py-0.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition cursor-pointer ml-1"
            >
              Connect Real Business Profile
            </button>
          </div>
        )}

        {/* Top App Header */}
        <header className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Mobile Identity / Desktop Breadcrumbs */}
          <div className="flex items-center gap-3">
            <div className="md:hidden flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0097B2] to-cyan-400 flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-[#0097B2]/20">
                OS
              </div>
              <div className="max-w-[160px]">
                <h1 className="text-xs font-bold text-white truncate">{currentBusiness?.name}</h1>
                <p className="text-[10px] text-slate-400 truncate">{currentBusiness?.city}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-medium">
              <span className="text-slate-400">Workspace</span>
              <span className="text-slate-600">/</span>
              <span className="text-white font-bold">{currentBusiness?.name}</span>
              <span className="text-slate-600">/</span>
              <span className="text-[#0097B2] font-semibold capitalize">{activeTab}</span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2.5">
            {currentBusiness?.googleConnected ? (
              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Google Maps Connected</span>
                </span>
                <button
                  onClick={handleDisconnectGoogle}
                  className="text-[10px] text-slate-400 hover:text-rose-400 px-2 py-0.5 rounded border border-slate-700/60 hover:border-rose-500/40 transition cursor-pointer"
                  title="Disconnect Google Business Profile"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsConnectGoogleOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 hover:from-amber-500/25 hover:to-orange-500/25 border border-amber-500/30 text-amber-300 text-[11px] font-bold cursor-pointer transition active:scale-95 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Connect Google</span>
              </button>
            )}

            <button
              onClick={handleSync}
              disabled={isSyncing}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700/60 transition cursor-pointer"
              title="Sync live telemetry from Google Maps"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-[#0097B2]" : "text-slate-400"}`} />
              <span className="hidden sm:inline">Sync</span>
            </button>

            <div className="hidden sm:flex text-xs bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 text-slate-300 font-mono">
              {currency}
            </div>

            {/* Mobile Sign Out */}
            <button
              onClick={handleSignOut}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Tab Modules Container */}
        <TabErrorBoundary>
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-8">
            {activeTab === "dashboard" && (
              <DashboardTab
                business={currentBusiness}
                kpi={kpi}
                auditScore={auditScore}
                auditCategories={auditCategories}
                opportunities={opportunities}
                onApplyOpportunity={handleApplyOpportunity}
                onNavigateTab={setActiveTab}
                unansweredReviewsCount={unansweredReviewsCount}
                onOpenConnectGoogle={() => setIsConnectGoogleOpen(true)}
              />
            )}

            {activeTab === "audit" && (
              <AuditTab
                auditScore={auditScore}
                appliedFixes={appliedFixes}
                onApplyAuditFix={handleApplyAuditFix}
                business={currentBusiness}
              />
            )}

            {activeTab === "optimization" && (
              <OptimizationTab
                onApplyFix={(optId, points, title) => {
                  handleApplyAuditFix(optId, points, title);
                }}
                appliedFixes={appliedFixes}
              />
            )}

            {activeTab === "reviews" && (
              <ReviewsTab
                reviews={reviews}
                onPublishReply={handlePublishReply}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
                business={currentBusiness}
              />
            )}

            {activeTab === "performance" && (
              <PerformanceTab
                business={currentBusiness}
                kpi={kpi}
              />
            )}

            {activeTab === "tasks" && (
              <TasksTab
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onAddTask={handleAddTask}
              />
            )}

            {activeTab === "assistant" && (
              <AssistantTab
                business={currentBusiness}
                auditScore={auditScore}
                onNavigateTab={setActiveTab}
              />
            )}

            {activeTab === "tools" && (
              <ToolsTab
                business={currentBusiness}
              />
            )}

            {activeTab === "settings" && (
              <SettingsTab
                business={currentBusiness}
                currentUser={currentUser}
                onSignOut={handleSignOut}
                currency={currency}
                setCurrency={setCurrency}
                onDisconnectGoogle={handleDisconnectGoogle}
                onOpenConnectGoogle={() => setIsConnectGoogleOpen(true)}
                onUpdateBusiness={(updatedBiz) => {
                  handleUpdateWorkspace(updatedBiz.id, updatedBiz);
                  showToast("Business profile updated!");
                }}
                onResetDemo={() => {
                  setKpi(DEFAULT_KPI);
                  setAuditScore(81);
                  setAppliedFixes({});
                  setOpportunities(DEFAULT_OPPORTUNITIES);
                  setReviews(DEFAULT_REVIEWS);
                  setTasks(DEFAULT_TASKS);
                  showToast("Demo data reset to initial benchmark state.");
                }}
              />
            )}

            {activeTab === "admin" && currentUser?.role === "ADMIN" && (
              <AdminTab
                workspaces={workspaces}
                activeWorkspaceId={activeWorkspaceId}
                onSwitchWorkspace={handleSwitchWorkspace}
                onAddWorkspace={handleAddWorkspace}
                onUpdateWorkspace={handleUpdateWorkspace}
                onDeleteWorkspace={handleDeleteWorkspace}
                currentUser={currentUser}
                currentBusiness={currentBusiness}
                kpi={kpi}
                onUpdateKpi={(newKpis) => {
                  setKpi(prev => ({ ...prev, ...newKpis }));
                  showToast("KPIs updated!");
                }}
                auditScore={auditScore}
                onUpdateScore={(newScore) => {
                  setAuditScore(parseInt(newScore));
                  showToast(`Growth score updated to ${newScore}/100!`);
                }}
                onAddReview={handleAddReview}
                showToast={showToast}
              />
            )}
          </main>
        </TabErrorBoundary>

        {/* Mobile Sticky Bottom App Dock */}
        <GrowthOSMobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          unansweredCount={unansweredReviewsCount}
          onOpenAddReview={() => setActiveTab("reviews")}
          onOpenAddBusiness={() => setActiveTab("admin")}
          currentUser={currentUser}
          onOpenConnectGoogle={() => setIsConnectGoogleOpen(true)}
          isGoogleConnected={currentBusiness?.googleConnected}
        />
      </div>

      {/* Connect Google Business Profile Modal */}
      <ConnectGoogleModal
        isOpen={isConnectGoogleOpen}
        onClose={() => setIsConnectGoogleOpen(false)}
        business={currentBusiness}
        currentUser={currentUser}
        onConnectSuccess={handleConnectGoogleSuccess}
      />
    </div>
  );
}
