"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import {
  DEFAULT_BUSINESS,
  DEFAULT_KPI,
  DEFAULT_AUDIT_CATEGORIES,
  DEFAULT_OPPORTUNITIES,
  DEFAULT_REVIEWS,
  DEFAULT_TASKS
} from "./lib/initialData";
import { storageService } from "./lib/supabaseClient";

import PublicLanding from "./components/PublicLanding";
import AuthPortal from "./components/AuthPortal";
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

export default function GrowthOSClient() {
  const [isClientReady, setIsClientReady] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  // Core Platform State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currency, setCurrency] = useState("USD");
  const [toast, setToast] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Business & Telemetry Data
  const [business, setBusiness] = useState(DEFAULT_BUSINESS);
  const [kpi, setKpi] = useState(DEFAULT_KPI);
  const [auditScore, setAuditScore] = useState(81);
  const [appliedFixes, setAppliedFixes] = useState({});
  const [auditCategories, setAuditCategories] = useState(DEFAULT_AUDIT_CATEGORIES);
  const [opportunities, setOpportunities] = useState(DEFAULT_OPPORTUNITIES);
  const [reviews, setReviews] = useState(DEFAULT_REVIEWS);
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  // Check saved session on mount
  useEffect(() => {
    setIsClientReady(true);
    const session = storageService.getSession();
    if (session) {
      setCurrentUser(session);
    }
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Auth Handlers
  const handleLoginSuccess = (user, msg) => {
    setCurrentUser(user);
    setIsAuthOpen(false);
    showToast(msg || "Signed in successfully!");
  };

  const handleInstantDemoLogin = () => {
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
    setCurrentUser(demoUser);
    showToast("1-Click Demo activated! Unlocked full Growth OS workspace.");
  };

  const handleSignOut = () => {
    storageService.clearSession();
    setCurrentUser(null);
    setActiveTab("dashboard");
    showToast("Signed out safely.");
  };

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
    setAppliedFixes(prev => ({ ...prev, [fixId]: true }));
    setAuditScore(prev => Math.min(100, prev + points));
    showToast("Optimized '" + label + "'! +" + points + " Growth Score added.");
  };

  // Optimization Fix Handlers
  const handleApplyOptimization = (optId, points, title) => {
    if (appliedFixes[optId]) return;
    setAppliedFixes(prev => ({ ...prev, [optId]: true }));
    setAuditScore(prev => Math.min(100, prev + points));
    showToast("Optimization applied: " + title + " (+" + points + " pts)");
  };

  // Reviews AI Handlers
  const handlePublishReply = (reviewId, replyText) => {
    setReviews(prev => prev.map(r => {
      if (r.id === reviewId) {
        return {
          ...r,
          status: "ANSWERED",
          response: replyText
        };
      }
      return r;
    }));
    setAuditScore(prev => Math.min(100, prev + 2));
    showToast("Response approved & published live to Google Maps!");
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

  // Reset Demo Data
  const handleResetDemo = () => {
    setBusiness(DEFAULT_BUSINESS);
    setKpi(DEFAULT_KPI);
    setAuditScore(81);
    setAppliedFixes({});
    setOpportunities(DEFAULT_OPPORTUNITIES);
    setReviews(DEFAULT_REVIEWS);
    setTasks(DEFAULT_TASKS);
    showToast("Demo data reset to initial benchmark state.");
  };

  const unansweredReviewsCount = reviews.filter(r => r.status === "UNANSWERED").length;

  // Toast Notification Component
  const ToastNotification = toast && (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0097B2] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4">
      <Sparkles className="w-4 h-4 fill-white" />
      <span>{toast}</span>
    </div>
  );

  // 1. Unauthenticated View: Public Landing + Auth Modal
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white">
        {ToastNotification}

        <PublicLanding
          onOpenAuth={(mode) => {
            setAuthMode(mode || "login");
            setIsAuthOpen(true);
          }}
          onLaunchDemo={handleInstantDemoLogin}
        />

        <AuthPortal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          initialMode={authMode}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    );
  }

  // 2. Authenticated View: Unlocked Growth OS SaaS Workspace
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0097B2] selection:text-white pb-24 md:pb-12">
      {ToastNotification}

      {/* Top Application Navbar */}
      <GrowthOSNavbar
        currentUser={currentUser}
        business={business}
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === "dashboard" && (
          <DashboardTab
            business={business}
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
            onApplyFix={handleApplyOptimization}
            appliedFixes={appliedFixes}
          />
        )}

        {activeTab === "reviews" && (
          <ReviewsTab
            reviews={reviews}
            onPublishReply={handlePublishReply}
            business={business}
          />
        )}

        {activeTab === "performance" && (
          <PerformanceTab
            business={business}
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
            business={business}
            auditScore={auditScore}
          />
        )}

        {activeTab === "tools" && (
          <ToolsTab
            business={business}
          />
        )}

        {activeTab === "settings" && (
          <SettingsTab
            business={business}
            currentUser={currentUser}
            onSignOut={handleSignOut}
            currency={currency}
            setCurrency={setCurrency}
            onResetDemo={handleResetDemo}
          />
        )}

        {activeTab === "admin" && (
          <AdminTab
            business={business}
          />
        )}
      </main>

      {/* Mobile Sticky Bottom Navigation */}
      <GrowthOSMobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unansweredCount={unansweredReviewsCount}
      />
    </div>
  );
}
