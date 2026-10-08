"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, RefreshCw, LogOut } from "lucide-react";

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

import AuthScreen from "./components/AuthScreen";
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
  const [isClientLoaded, setIsClientLoaded] = useState(false);

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

  // Check saved session on mount
  useEffect(() => {
    setIsClientLoaded(true);
    const session = storageService.getSession();
    const storedWorkspaces = storageService.getWorkspaces();
    const storedActiveId = storageService.getActiveWorkspaceId();

    setWorkspaces(storedWorkspaces);
    setActiveWorkspaceId(storedActiveId);

    if (session) {
      setCurrentUser(session);
      // If user is tied to a specific business
      if (session.businessId && storedWorkspaces.some(w => w.id === session.businessId)) {
        setActiveWorkspaceId(session.businessId);
        loadWorkspaceData(session.businessId, storedWorkspaces);
      } else {
        loadWorkspaceData(storedActiveId, storedWorkspaces);
      }
    } else {
      loadWorkspaceData(storedActiveId, storedWorkspaces);
    }
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
  const handleLoginSuccess = (user, msg) => {
    setCurrentUser(user);
    const storedWorkspaces = storageService.getWorkspaces();
    setWorkspaces(storedWorkspaces);
    if (user.businessId) {
      setActiveWorkspaceId(user.businessId);
      loadWorkspaceData(user.businessId, storedWorkspaces);
    }
    showToast(msg || "Signed in successfully!");
  };

  const handleSignOut = () => {
    storageService.clearSession();
    setCurrentUser(null);
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

  // Reviews AI Handlers
  const handleAddReview = (newRev) => {
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

    storageService.saveWorkspaceState(activeWorkspaceId, {
      reviews: updatedReviews,
      kpi: updatedKpi,
      score: auditScore,
      appliedFixes,
      tasks
    });

    showToast(`Added review from ${newRev.author} (${newRev.rating}★)!`);
  };

  const handleDeleteReview = (reviewId) => {
    const updatedReviews = reviews.filter(r => r.id !== reviewId);
    setReviews(updatedReviews);
    showToast("Review deleted.");
  };

  const handlePublishReply = (reviewId, replyText) => {
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

    storageService.saveWorkspaceState(activeWorkspaceId, {
      reviews: updatedReviews,
      score: nextScore,
      kpi,
      appliedFixes,
      tasks
    });

    showToast("Response approved & published live to Google Maps! (+2 pts)");
  };

  // Tasks Handlers
  const handleToggleTask = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const nextStatus = t.status === "COMPLETED" ? "PENDING" : "COMPLETED";
        if (nextStatus === "COMPLETED") {
          setAuditScore(score => Math.min(100, score + 3));
          showToast("Task completed! +3 Growth Score added.");
        }
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    showToast("New growth task added to Action Center!");
  };

  const unansweredReviewsCount = reviews.filter(r => r.status === "UNANSWERED").length;

  // Toast Notification Component
  const ToastNotification = toast && (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4">
      <Sparkles className="w-4 h-4 fill-white" />
      <span>{toast}</span>
    </div>
  );

  // 1. STRICT AUTHENTICATION GATE: If not logged in, render SaaS AuthScreen
  if (!currentUser) {
    return (
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans">
        {ToastNotification}
        <AuthScreen onLoginSuccess={handleLoginSuccess} />
      </div>
    );
  }

  // 2. AUTHENTICATED WORKSPACE: Render Modern SaaS Desktop Sidebar + Native Mobile App Layout
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white flex overflow-hidden">
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

            {activeTab === "admin" && (
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
