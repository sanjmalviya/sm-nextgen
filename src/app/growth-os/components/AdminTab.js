"use client";

import React, { useState } from "react";
import {
  Shield,
  Building,
  Users,
  Activity,
  CheckCircle2,
  Database,
  Plus,
  Trash2,
  Edit3,
  RefreshCw,
  Star,
  Phone,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sliders,
  Save,
  X,
  Check,
  TrendingUp
} from "lucide-react";
import { storageService } from "../lib/supabaseClient";

export default function AdminTab({
  workspaces,
  activeWorkspaceId,
  onSwitchWorkspace,
  onAddWorkspace,
  onUpdateWorkspace,
  onDeleteWorkspace,
  currentUser,
  currentBusiness,
  kpi,
  onUpdateKpi,
  auditScore,
  onUpdateScore,
  onAddReview,
  showToast
}) {
  const [activeSubTab, setActiveSubTab] = useState("workspaces"); // "workspaces" | "kpis" | "reviews" | "users"
  
  // Modal State: Add Business
  const [isAddBizModalOpen, setIsAddBizModalOpen] = useState(false);
  const [newBizName, setNewBizName] = useState("");
  const [newBizCity, setNewBizCity] = useState("Udaipur, Rajasthan");
  const [newBizCategory, setNewBizCategory] = useState("Dental clinic");
  const [newBizPhone, setNewBizPhone] = useState("+91 70735 38077");
  const [newBizRating, setNewBizRating] = useState("4.8");
  const [newBizScore, setNewBizScore] = useState("80");

  // Modal State: Edit Current Business
  const [isEditBizModalOpen, setIsEditBizModalOpen] = useState(false);
  const [editName, setEditName] = useState(currentBusiness?.name || "");
  const [editCity, setEditCity] = useState(currentBusiness?.city || "");
  const [editAddress, setEditAddress] = useState(currentBusiness?.address || "");
  const [editPhone, setEditPhone] = useState(currentBusiness?.phone || "");
  const [editWebsite, setEditWebsite] = useState(currentBusiness?.website || "");
  const [editCategory, setEditCategory] = useState(currentBusiness?.category || "");

  // Modal State: Add Custom Review
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewTheme, setReviewTheme] = useState("Customer Service");

  // KPI Overrider State
  const [overrideScore, setOverrideScore] = useState(auditScore);
  const [overrideRating, setOverrideRating] = useState(kpi.rating);
  const [overrideReviews, setOverrideReviews] = useState(kpi.totalReviews);
  const [overrideCalls, setOverrideCalls] = useState(kpi.calls);
  const [overrideDirections, setOverrideDirections] = useState(kpi.directionRequests);
  const [overrideClicks, setOverrideClicks] = useState(kpi.websiteClicks);

  const registeredUsers = storageService.getUsers();

  // Handle Add Business
  const handleCreateBusiness = (e) => {
    e.preventDefault();
    if (!newBizName.trim()) return;

    const newBiz = {
      id: `biz-${Date.now()}`,
      name: newBizName.trim(),
      category: newBizCategory,
      secondaryCategories: [`${newBizCategory} Specialist`, "Emergency Service"],
      primaryGoal: "Get more calls",
      website: `https://${newBizName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
      phone: newBizPhone.trim(),
      email: "info@smnextgen.com",
      address: `Commercial complex, ${newBizCity.split(",")[0]}`,
      city: newBizCity.trim(),
      state: "Rajasthan",
      country: "India",
      postalCode: "313001",
      rating: parseFloat(newBizRating) || 4.8,
      totalReviews: 45,
      score: parseInt(newBizScore) || 80,
      plan: "AI Growth Pro",
      status: "Active",
      isDemo: false,
      googleConnected: true,
      lastSynced: "Just now",
      description: `${newBizName} is a premier ${newBizCategory} in ${newBizCity} providing trusted local services.`
    };

    onAddWorkspace(newBiz);
    setIsAddBizModalOpen(false);
    setNewBizName("");
    if (showToast) showToast(`Created workspace for "${newBiz.name}"! Switched automatically.`);
  };

  // Handle Save Edit Business
  const handleSaveEditBusiness = (e) => {
    e.preventDefault();
    onUpdateWorkspace(currentBusiness.id, {
      name: editName,
      city: editCity,
      address: editAddress,
      phone: editPhone,
      website: editWebsite,
      category: editCategory
    });
    setIsEditBizModalOpen(false);
    if (showToast) showToast("Business profile updated across entire app!");
  };

  // Handle Add Review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewText.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: reviewAuthor.trim(),
      avatar: reviewAuthor.charAt(0).toUpperCase(),
      rating: parseInt(reviewRating),
      date: "Just now",
      sentiment: reviewRating >= 4 ? "POSITIVE" : reviewRating === 3 ? "NEUTRAL" : "NEGATIVE",
      theme: reviewTheme,
      text: reviewText.trim(),
      status: "UNANSWERED",
      response: null,
      aiDrafts: {
        professional: `Dear ${reviewAuthor}, thank you for choosing ${currentBusiness?.name || "us"}. We greatly appreciate your feedback and look forward to serving you again.`,
        friendly: `Hi ${reviewAuthor}! Thanks a lot for the wonderful review. The entire team is delighted to hear about your experience!`,
        apologetic: `Dear ${reviewAuthor}, we sincerely apologize for any inconvenience caused. Please contact us directly at ${currentBusiness?.phone || "+91 70735 38077"} so we can resolve this immediately.`
      }
    };

    onAddReview(newRev);
    setIsAddReviewModalOpen(false);
    setReviewAuthor("");
    setReviewText("");
    if (showToast) showToast(`New ${newRev.rating}★ review from ${newRev.author} added live!`);
  };

  // Handle Save KPI Overrides
  const handleSaveKpiOverrides = (e) => {
    e.preventDefault();
    onUpdateScore(overrideScore);
    onUpdateKpi({
      rating: parseFloat(overrideRating),
      totalReviews: parseInt(overrideReviews),
      calls: parseInt(overrideCalls),
      directionRequests: parseInt(overrideDirections),
      websiteClicks: parseInt(overrideClicks)
    });
    if (showToast) showToast("Live platform telemetry metrics updated!");
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Master Admin Command Center</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Full Platform Control & Multi-Business Management
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1">
            Logged in as <strong className="text-white">{currentUser?.name || "Admin"}</strong> ({currentUser?.email}). You have full administrative authority to add businesses, inject reviews, override KPIs, and manage accounts.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsAddBizModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add New Business</span>
          </button>
        </div>
      </div>

      {/* Subtab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-800 scrollbar-none text-xs font-bold">
        {[
          { id: "workspaces", label: `Client Workspaces (${workspaces.length})`, icon: Building },
          { id: "kpis", label: "Live KPI Overrider", icon: Sliders },
          { id: "reviews", label: "Reviews Injector", icon: MessageSquare },
          { id: "users", label: `User Accounts (${registeredUsers.length})`, icon: Users }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={"px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap " + (isActive ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/20" : "bg-slate-900 text-slate-400 hover:text-white")}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. WORKSPACES TAB */}
      {activeSubTab === "workspaces" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-base text-white">All Client Workspaces</h3>
              <p className="text-xs text-slate-400">Switch between workspaces to manage their profile, audit, and reviews in real time.</p>
            </div>
            <button
              onClick={() => {
                setEditName(currentBusiness?.name || "");
                setEditCity(currentBusiness?.city || "");
                setEditAddress(currentBusiness?.address || "");
                setEditPhone(currentBusiness?.phone || "");
                setEditWebsite(currentBusiness?.website || "");
                setEditCategory(currentBusiness?.category || "");
                setIsEditBizModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#0097B2]" />
              <span>Edit Active Business</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workspaces.map((biz) => {
              const isActive = biz.id === activeWorkspaceId;
              return (
                <div
                  key={biz.id}
                  className={"p-5 rounded-2xl border transition flex flex-col justify-between space-y-4 " + (isActive ? "bg-slate-900 border-[#0097B2] ring-2 ring-[#0097B2]/30" : "bg-slate-900/60 border-slate-800 hover:border-slate-700")}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-white text-xs">
                        {biz.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full bg-[#0097B2]/20 text-[#0097B2] text-[10px] font-bold border border-[#0097B2]/30">
                            Active
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                          {biz.rating}★
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading font-extrabold text-sm text-white line-clamp-1">{biz.name}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0097B2]" />
                      <span>{biz.city} • {biz.category}</span>
                    </p>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/80">
                      <span className="text-slate-400">Score: <strong className="text-white">{biz.score}/100</strong></span>
                      <span className="text-slate-400">Reviews: <strong className="text-white">{biz.totalReviews}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                    <button
                      onClick={() => onSwitchWorkspace(biz.id)}
                      disabled={isActive}
                      className={"flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer " + (isActive ? "bg-[#0097B2] text-white opacity-80 cursor-default" : "bg-slate-800 hover:bg-[#0097B2] text-slate-300 hover:text-white")}
                    >
                      {isActive ? "Currently Active" : "Switch Workspace"}
                    </button>

                    {workspaces.length > 1 && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete workspace "${biz.name}"?`)) {
                            onDeleteWorkspace(biz.id);
                          }
                        }}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition cursor-pointer"
                        title="Delete Workspace"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. LIVE KPI OVERRIDER TAB */}
      {activeSubTab === "kpis" && (
        <form onSubmit={handleSaveKpiOverrides} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div>
            <h3 className="font-heading font-extrabold text-base text-white">Live Metric Modifier (Current Workspace)</h3>
            <p className="text-xs text-slate-400">Modify any ranking factor or customer interaction metric in real time. Changes reflect immediately on dashboard charts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Growth Score (0–100)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={overrideScore}
                onChange={(e) => setOverrideScore(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Average Star Rating (1.0–5.0)</label>
              <input
                type="number"
                step="0.1"
                min="1.0"
                max="5.0"
                value={overrideRating}
                onChange={(e) => setOverrideRating(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Total Verified Reviews</label>
              <input
                type="number"
                value={overrideReviews}
                onChange={(e) => setOverrideReviews(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Monthly Inbound Calls</label>
              <input
                type="number"
                value={overrideCalls}
                onChange={(e) => setOverrideCalls(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Direction Requests</label>
              <input
                type="number"
                value={overrideDirections}
                onChange={(e) => setOverrideDirections(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Website Clicks</label>
              <input
                type="number"
                value={overrideClicks}
                onChange={(e) => setOverrideClicks(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Apply & Save Telemetry Overrides</span>
            </button>
          </div>
        </form>
      )}

      {/* 3. REVIEWS INJECTOR TAB */}
      {activeSubTab === "reviews" && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-base text-white">Live Review Injector</h3>
              <p className="text-xs text-slate-400">Add a real review to test the AI review reply generator, sentiment analysis, and approval workflow.</p>
            </div>
            <button
              onClick={() => setIsAddReviewModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add Customer Review</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
            <p>You can add reviews directly to <strong className="text-white">{currentBusiness?.name}</strong>. Once added, head to the <strong className="text-[#0097B2]">Reviews AI</strong> tab to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Test multi-tone AI drafts (Professional, Friendly, Apologetic, Premium).</li>
              <li>Perform human review and live edits.</li>
              <li>Click <strong>"Approve & Publish to Google"</strong> to mark the review answered and award +2 pts to the Growth Score!</li>
            </ul>
          </div>
        </div>
      )}

      {/* 4. USER ACCOUNTS TAB */}
      {activeSubTab === "users" && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="font-heading font-extrabold text-base text-white">Registered User Accounts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Business</th>
                  <th className="pb-3">City</th>
                  <th className="pb-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {registeredUsers.map((u) => (
                  <tr key={u.id}>
                    <td className="py-3 font-bold text-white">{u.name}</td>
                    <td className="py-3 font-mono">{u.email}</td>
                    <td className="py-3">{u.businessName || "Apex Dental"}</td>
                    <td className="py-3">{u.city || "Udaipur"}</td>
                    <td className="py-3">
                      <span className={"px-2 py-0.5 rounded text-[10px] font-bold " + (u.role === "ADMIN" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-emerald-500/20 text-emerald-400")}>
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: ADD BUSINESS */}
      {isAddBizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 text-slate-100 font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-heading font-extrabold text-base text-white">Create New Business Workspace</h3>
              <button onClick={() => setIsAddBizModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBusiness} className="space-y-3">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  value={newBizName}
                  onChange={(e) => setNewBizName(e.target.value)}
                  placeholder="e.g. Udaipur Spine & Joint Clinic"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Category</label>
                  <input
                    type="text"
                    value={newBizCategory}
                    onChange={(e) => setNewBizCategory(e.target.value)}
                    placeholder="Dental clinic"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">City / Region</label>
                  <input
                    type="text"
                    value={newBizCity}
                    onChange={(e) => setNewBizCity(e.target.value)}
                    placeholder="Udaipur, Rajasthan"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Phone</label>
                  <input
                    type="tel"
                    value={newBizPhone}
                    onChange={(e) => setNewBizPhone(e.target.value)}
                    placeholder="+91 70735 38077"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Initial Score</label>
                  <input
                    type="number"
                    value={newBizScore}
                    onChange={(e) => setNewBizScore(e.target.value)}
                    placeholder="80"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddBizModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold"
                >
                  Create & Switch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT ACTIVE BUSINESS */}
      {isEditBizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 text-slate-100 font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-heading font-extrabold text-base text-white">Edit Business Details</h3>
              <button onClick={() => setIsEditBizModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditBusiness} className="space-y-3">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Business Name</label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Category</label>
                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">City / Region</label>
                  <input
                    type="text"
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Address</label>
                <input
                  type="text"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Phone</label>
                  <input
                    type="tel"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Website URL</label>
                  <input
                    type="url"
                    value={editWebsite}
                    onChange={(e) => setEditWebsite(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditBizModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD CUSTOM REVIEW */}
      {isAddReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 text-slate-100 font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-heading font-extrabold text-base text-white">Add Review to {currentBusiness?.name}</h3>
              <button onClick={() => setIsAddReviewModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-3">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Customer / Reviewer Name *</label>
                <input
                  type="text"
                  required
                  value={reviewAuthor}
                  onChange={(e) => setReviewAuthor(e.target.value)}
                  placeholder="e.g. Ramesh Joshi"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Star Rating</label>
                  <select
                    value={reviewRating}
                    onChange={(e) => setReviewRating(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  >
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Good)</option>
                    <option value="3">3 Stars (Neutral)</option>
                    <option value="2">2 Stars (Poor)</option>
                    <option value="1">1 Star (Critical)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Theme / Topic</label>
                  <input
                    type="text"
                    value={reviewTheme}
                    onChange={(e) => setReviewTheme(e.target.value)}
                    placeholder="Treatment Quality"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Review Text *</label>
                <textarea
                  rows={3}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write the customer's review feedback..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddReviewModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold"
                >
                  Publish to Inbox
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
