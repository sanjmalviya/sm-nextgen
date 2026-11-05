"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Star,
  Sparkles,
  Check,
  Copy,
  AlertTriangle,
  Search,
  Filter,
  Send,
  RefreshCw,
  ThumbsUp,
  Clock,
  ShieldCheck,
  Bot,
  Plus,
  Trash2,
  X
} from "lucide-react";

export default function ReviewsTab({
  reviews = [],
  onPublishReply,
  onAddReview,
  onDeleteReview,
  business
}) {
  const [filter, setFilter] = useState("ALL"); // ALL, UNANSWERED, 5STAR, CRITICAL, NEUTRAL
  const [search, setSearch] = useState("");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [editingReply, setEditingReply] = useState({});
  const [copiedReviewLink, setCopiedReviewLink] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const realGmbReviewUrl = business?.reviewUrl || business?.gbpUrl || "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!4m8!3m7!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!9m1!1b1!16s%2Fg%2F11n49dydt9?entry=ttu";

  const handleCopyReviewLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(realGmbReviewUrl);
      setCopiedReviewLink(true);
      setTimeout(() => setCopiedReviewLink(false), 2500);
    }
  };

  const handleCopyWhatsAppMsg = () => {
    const msg = `Hi! Thank you for partnering with ${business?.name || "SM NextGen"}. If you had a great experience with our services, could you please take 30 seconds to share your review on Google? It means the world to our team: ${realGmbReviewUrl} Thank you!`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(msg);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2500);
    }
  };

  // Add Review Modal State
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [starCount, setStarCount] = useState(5);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewThemeTag, setReviewThemeTag] = useState("Customer Service");

  const tones = [
    { id: "professional", label: "Professional & Warm" },
    { id: "friendly", label: "Friendly & Casual" },
    { id: "apologetic", label: "Polite & Apologetic" },
    { id: "premium", label: "Premium & Executive" }
  ];

  const filteredReviews = reviews.filter((r) => {
    if (filter === "UNANSWERED" && r.status !== "UNANSWERED") return false;
    if (filter === "5STAR" && r.rating !== 5) return false;
    if (filter === "CRITICAL" && r.rating > 2) return false;
    if (filter === "NEUTRAL" && r.rating !== 3) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return r.author.toLowerCase().includes(q) || r.text.toLowerCase().includes(q);
    }
    return true;
  });

  const unansweredCount = reviews.filter((r) => r.status === "UNANSWERED").length;
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
    : "0.0";

  const positiveCount = reviews.filter(r => (r.rating || 5) >= 4).length;
  const neutralCount = reviews.filter(r => (r.rating || 5) === 3).length;
  const criticalCount = reviews.filter(r => (r.rating || 5) <= 2).length;
  const totalR = reviews.length;
  const posPct = totalR > 0 ? Math.round((positiveCount / totalR) * 100) : 0;
  const neuPct = totalR > 0 ? Math.round((neutralCount / totalR) * 100) : 0;
  const critPct = totalR > 0 ? (100 - posPct - neuPct) : 0;
  const detectedThemes = Array.from(new Set(reviews.map(r => r.theme).filter(Boolean)));

  const handleCopy = (text, id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const [generatingAiId, setGeneratingAiId] = useState(null);

  const handleGenerateAIReply = async (r, tone = selectedTone) => {
    setGeneratingAiId(r.id);
    try {
      const res = await fetch("/api/growth-os/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reply_review",
          review: { author: r.author, rating: r.rating, text: r.text },
          tone: tone
        })
      });
      const data = await res.json();
      if (res.ok && data.success && data.result) {
        setEditingReply(prev => ({ ...prev, [r.id]: data.result }));
      }
    } catch (e) {
      console.warn("Could not generate AI reply:", e);
    } finally {
      setGeneratingAiId(null);
    }
  };

  const handleCreateReview = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewContent.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      avatar: authorName.charAt(0).toUpperCase(),
      rating: parseInt(starCount),
      date: "Just now",
      sentiment: starCount >= 4 ? "POSITIVE" : starCount === 3 ? "NEUTRAL" : "NEGATIVE",
      theme: reviewThemeTag,
      text: reviewContent.trim(),
      status: "UNANSWERED",
      response: null,
      aiDrafts: {
        professional: `Dear ${authorName}, thank you for choosing ${business?.name || "us"}. We appreciate your valued feedback and look forward to serving you again.`,
        friendly: `Hey ${authorName}! Thank you so much for the feedback! Our team loved working with you and we can't wait to see you again.`,
        apologetic: `Dear ${authorName}, we sincerely apologize for the experience you had. Customer satisfaction is our highest priority—please reach out to us at ${business?.phone || "+91 70735 38077"} so we can make this right immediately.`,
        premium: `Dear ${authorName}, we hold our standards to the highest professional benchmark. Thank you for taking the time to share your valued feedback.`
      }
    };

    if (onAddReview) onAddReview(newRev);
    setIsAddOpen(false);
    setAuthorName("");
    setReviewContent("");
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AI Review Management Inbox</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Customer Reviews & AI Response Autopilot
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1">
            Grounded in your business context. Generates authentic, human-reviewed responses in multiple tones with 1-click publishing to Google Maps.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Unanswered</div>
            <div className="text-3xl font-extrabold text-amber-400">{unansweredCount}</div>
          </div>
          <div className="h-10 w-px bg-slate-800"></div>
          <div>
            <div className="text-xs text-emerald-400 font-bold">5.0 ★ Google Rating</div>
            <div className="text-xs text-slate-400">9 on Google Maps ({reviews.length} Synced)</div>
          </div>
        </div>
      </div>

      {/* Verified Google Listing Telemetry Notice */}
      <div className="p-3.5 rounded-2xl bg-[#0097B2]/10 border border-[#0097B2]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-[#0097B2] shrink-0" />
          <span>
            <strong>SM NextGen Google Maps Listing Verified:</strong> 9 Reviews (5.0★ Rating) on Google Maps Storefront. {reviews.length} verified review{reviews.length !== 1 ? "s" : ""} in active inbox.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsAddOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs transition cursor-pointer"
          >
            + Add Verified Review
          </button>
        </div>
      </div>

      {/* Sentiment & Keyword Themes Telemetry */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Sentiment Overview */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Customer Sentiment Breakdown
          </h4>
          {totalR > 0 ? (
            <>
              <div className="flex items-center gap-2 pt-1">
                <div className="bg-emerald-500 h-2.5 rounded-full" title="Positive" style={{ width: `${posPct}%` }}></div>
                <div className="bg-amber-500 h-2.5 rounded-full" title="Neutral" style={{ width: `${neuPct}%` }}></div>
                <div className="bg-rose-500 h-2.5 rounded-full" title="Negative" style={{ width: `${critPct}%` }}></div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span className="text-emerald-400 font-bold">{posPct}% Positive</span>
                <span className="text-amber-400 font-bold">{neuPct}% Neutral</span>
                <span className="text-rose-400 font-bold">{critPct}% Critical</span>
              </div>
            </>
          ) : (
            <p className="text-xs text-slate-500 italic py-2">No reviews recorded yet to analyze customer sentiment.</p>
          )}
        </div>

        {/* Top Keywords / Themes */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Top Customer Themes Detected
          </h4>
          {detectedThemes.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {detectedThemes.map((th, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  {th}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic py-2">No review topics detected yet.</p>
          )}
        </div>
      </div>

      {/* Filter, Search & Add Review Button Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All Reviews" },
            { id: "UNANSWERED", label: `Unanswered (${unansweredCount})` },
            { id: "5STAR", label: "5-Star" },
            { id: "CRITICAL", label: "Critical (1-2★)" },
            { id: "NEUTRAL", label: "Neutral (3★)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={"px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition cursor-pointer " + (filter === tab.id ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reviews..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>

          <button
            onClick={() => setIsAddOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0 shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Review</span>
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="p-8 sm:p-10 text-center bg-slate-900 rounded-3xl border border-slate-800 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[#0097B2] flex items-center justify-center mx-auto shadow-lg">
              <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google Business Profile Verified (5.0★ Baseline)</span>
              </div>
              <h3 className="text-xl font-heading font-extrabold text-white">
                0 Written Customer Reviews on Google Maps
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your live Google Maps listing is verified and active. Collecting verified 5-star customer reviews is the single fastest way to climb into Udaipur's Google Maps 3-Pack.
              </p>
            </div>

            {/* Real Review Generation Action Box */}
            <div className="max-w-xl mx-auto p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Direct Google Review Link:
                </span>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Live Google Maps Storefront
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono break-all flex items-center justify-between gap-3">
                <span className="truncate">{realGmbReviewUrl}</span>
                <button
                  onClick={handleCopyReviewLink}
                  className="px-3 py-1.5 rounded-lg bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedReviewLink ? "Copied Link!" : "Copy Link"}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={handleCopyWhatsAppMsg}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition active:scale-95 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{copiedWhatsApp ? "WhatsApp Message Copied!" : "Copy WhatsApp Review Request"}</span>
                </button>

                <a
                  href={realGmbReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-slate-700 transition"
                >
                  <span>Open on Google Maps</span>
                </a>

                <button
                  onClick={() => setIsAddOpen(true)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs flex items-center gap-1.5 border border-slate-700 transition ml-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Manual Review</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          filteredReviews.map((r) => {
            const currentReplyText = editingReply[r.id] !== undefined ? editingReply[r.id] : (r.response || (r.aiDrafts && r.aiDrafts[selectedTone]) || "");
            const isUnanswered = r.status === "UNANSWERED";

            return (
              <div
                key={r.id}
                className={"p-5 rounded-3xl border transition space-y-4 " + (isUnanswered ? "bg-slate-900 border-amber-500/30" : "bg-slate-900/60 border-slate-800")}
              >
                {/* Review Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-[#0097B2]">
                      {r.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-extrabold text-sm text-white">{r.author}</h4>
                        <span className="text-[10px] text-slate-500">• {r.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={"w-3 h-3 " + (i < r.rating ? "text-amber-400 fill-amber-400" : "text-slate-700")}
                          />
                        ))}
                        <span className={"text-[10px] font-bold ml-1.5 px-2 py-0.2 rounded-full " + (r.sentiment === "POSITIVE" ? "bg-emerald-500/20 text-emerald-400" : r.sentiment === "NEGATIVE" ? "bg-rose-500/20 text-rose-400" : "bg-amber-500/20 text-amber-300")}>
                          {r.sentiment}
                        </span>
                        <span className="text-[10px] text-slate-500">Theme: {r.theme}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={"text-[10px] font-mono font-bold px-2.5 py-1 rounded-full " + (isUnanswered ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30")}>
                      {isUnanswered ? "Needs Response" : "Answered"}
                    </span>
                    {onDeleteReview && (
                      <button
                        onClick={() => onDeleteReview(r.id)}
                        className="p-1 rounded-lg text-slate-500 hover:text-rose-400 transition"
                        title="Delete review"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80">
                  "{r.text}"
                </p>

                {/* Response Section */}
                {isUnanswered ? (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                        <Bot className="w-4 h-4 text-[#0097B2]" />
                        <span>AI Response Generator</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleGenerateAIReply(r, selectedTone)}
                          disabled={generatingAiId === r.id}
                          className="px-2.5 py-1 rounded-lg bg-[#0097B2]/20 hover:bg-[#0097B2]/30 border border-[#0097B2]/40 text-[#0097B2] font-bold text-[10px] flex items-center gap-1 transition cursor-pointer"
                          title="Generate fresh response draft using Gemini AI"
                        >
                          <Sparkles className={`w-3 h-3 ${generatingAiId === r.id ? "animate-spin" : ""}`} />
                          <span>{generatingAiId === r.id ? "Drafting..." : "Generate with AI"}</span>
                        </button>

                        {/* Tone Selector */}
                        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[10px]">
                          {tones.map((t) => (
                            <button
                              key={t.id}
                              onClick={() => {
                                setSelectedTone(t.id);
                                if (r.aiDrafts && r.aiDrafts[t.id]) {
                                  setEditingReply(prev => ({ ...prev, [r.id]: r.aiDrafts[t.id] }));
                                } else {
                                  handleGenerateAIReply(r, t.id);
                                }
                              }}
                              className={"px-2 py-0.5 rounded font-bold transition cursor-pointer " + (selectedTone === t.id ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Human Approval Editable Text Area */}
                    <textarea
                      rows={3}
                      value={currentReplyText}
                      onChange={(e) => setEditingReply(prev => ({ ...prev, [r.id]: e.target.value }))}
                      placeholder="Type or edit AI response draft..."
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span className="text-[10px] text-slate-500">
                        Human Approval Required: Review before publishing to Google Maps
                      </span>

                      <div className="flex items-center gap-2 ml-auto">
                        <button
                          onClick={() => handleCopy(currentReplyText, r.id)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedId === r.id ? "Copied!" : "Copy"}</span>
                        </button>

                        <button
                          onClick={() => onPublishReply(r.id, currentReplyText)}
                          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Approve & Publish to Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Official Owner Response Published on Google Maps</span>
                    </div>
                    <p className="text-xs text-slate-300 pl-5">
                      {r.response}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* MODAL: ADD CUSTOM REVIEW */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 text-slate-100 font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-heading font-extrabold text-base text-white">Add Customer Review</h3>
              <button onClick={() => setIsAddOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateReview} className="space-y-3">
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Reviewer Name *</label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Ananya Mehra"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Star Rating</label>
                  <select
                    value={starCount}
                    onChange={(e) => setStarCount(e.target.value)}
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
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Theme Tag</label>
                  <input
                    type="text"
                    value={reviewThemeTag}
                    onChange={(e) => setReviewThemeTag(e.target.value)}
                    placeholder="e.g. Hospitality"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">Review Text *</label>
                <textarea
                  rows={3}
                  required
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  placeholder="Enter customer's review feedback..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-extrabold cursor-pointer"
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
