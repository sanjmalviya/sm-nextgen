"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Building, Key } from "lucide-react";

import {
  DEFAULT_BUSINESS,
  DEFAULT_KPI,
  DEFAULT_AUDIT_CATEGORIES,
  DEFAULT_OPPORTUNITIES,
  DEFAULT_REVIEWS,
  DEFAULT_TASKS
} from "./lib/initialData";
import { storageService, SEED_WORKSPACES } from "./lib/supabaseClient";

import AuthScreen from "./components/AuthScreen";
import GrowthOSNavbar from "./components/GrowthOSNavbar";
import GrowthOSMobileNav from "./components/GrowthOSMobileNav";
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

  // Active Workspace Data State
  const [kpi, setKpi] = useState(DEFAULT_KPI);
  const [auditScore, setAuditScore] = useState(81);
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
      }
    }
  }, []);

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
    
    // Check if custom state exists for this workspace
    const savedState = storageService.getWorkspaceState(newId);
    if (savedState) {
      if (savedState.kpi) setKpi(savedState.kpi);
      if (savedState.score) setAuditScore(savedState.score);
      if (savedState.reviews) setReviews(savedState.reviews);
      if (savedState.tasks) setTasks(savedState.tasks);
      if (savedState.appliedFixes) setAppliedFixes(savedState.appliedFixes);
    } else {
      // Benchmark defaults
      const targetBiz = workspaces.find(w => w.id === newId);
      if (targetBiz) {
        setAuditScore(targetBiz.score || 80);
        setKpi(prev => ({
          ...prev,
          rating: targetBiz.rating || 4.8,
          totalReviews: targetBiz.totalReviews || 142
        }));
      }
    }

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

  // Live Sync Simulation
  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showToast("Google Business Profile Synced with Google Maps API!");
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
    
    // Persist state
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

    // Recalculate average rating
    const newAvg = (updatedReviews.reduce((acc, r) => acc + (r.rating || 5), 0) / updatedReviews.length).toFixed(1);
    const updatedKpi = {
      ...kpi,
      rating: parseFloat(newAvg),
      totalReviews: updatedReviews.length,
      unansweredReviews: updatedReviews.filter(r => r.status === "UNANSWERED").length
    };
    setKpi(updatedKpi);

    // Save state
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

    // Save state
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
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4">
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

  // 2. AUTHENTICATED WORKSPACE: Render Unlocked Standalone Growth OS Software
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white pb-24 md:pb-12 flex flex-col">
      {ToastNotification}

      {/* Top Application Navbar with Interactive Workspace Switcher */}
      <GrowthOSNavbar
        currentUser={currentUser}
        business={currentBusiness}
        workspaces={workspaces}
        activeWorkspaceId={activeWorkspaceId}
        onSwitchWorkspace={handleSwitchWorkspace}
        onOpenAddBusiness={() => setActiveTab("admin")}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSignOut={handleSignOut}
        onSync={handleSync}
        isSyncing={isSyncing}
        currency={currency}
        setCurrency={setCurrency}
        unansweredCount={unansweredReviewsCount}
        auditScore={auditScore}
      />

      {/* Main Workspace Tabs Container */}
      <TabErrorBoundary>
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex-1">
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
            />
          )}

          {activeTab === "audit" && (
            <AuditTab
              auditScore={auditScore}
              appliedFixes={appliedFixes}
              onApplyAuditFix={handleApplyAuditFix}
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
      />
    </div>
  );
}
