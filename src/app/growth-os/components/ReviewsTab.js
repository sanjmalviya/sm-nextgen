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
  Bot
} from "lucide-react";

export default function ReviewsTab({
  reviews,
  onGenerateAiReply,
  onPublishReply,
  business
}) {
  const [filter, setFilter] = useState("ALL"); // ALL, UNANSWERED, 5STAR, CRITICAL, NEUTRAL
  const [search, setSearch] = useState("");
  const [selectedTone, setSelectedTone] = useState("professional"); // professional, friendly, warm, apologetic, premium
  const [editingReply, setEditingReply] = useState({});

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

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
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
            <div className="text-xs text-emerald-400 font-bold">4.8 Avg Rating</div>
            <div className="text-xs text-slate-400">142 Total Reviews</div>
          </div>
        </div>
      </div>

      {/* Sentiment & Keyword Themes Telemetry */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Sentiment Overview */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Customer Sentiment Breakdown
          </h4>
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 bg-emerald-500 h-2.5 rounded-full" title="84% Positive" style={{ width: "84%" }}></div>
            <div className="w-8 bg-amber-500 h-2.5 rounded-full" title="11% Neutral" style={{ width: "11%" }}></div>
            <div className="w-4 bg-rose-500 h-2.5 rounded-full" title="5% Negative" style={{ width: "5%" }}></div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 pt-1">
            <span className="text-emerald-400 font-bold">84% Positive (119)</span>
            <span className="text-amber-400 font-bold">11% Neutral (15)</span>
            <span className="text-rose-400 font-bold">5% Critical (8)</span>
          </div>
        </div>

        {/* Top Keywords / Themes */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Top Customer Themes Detected
          </h4>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              Gentle Treatment (64)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
              Staff Courtesy (52)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
              Painless Root Canal (38)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20">
              Wait Time (6)
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All Reviews" },
            { id: "UNANSWERED", label: "Unanswered (" + unansweredCount + ")" },
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

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
          />
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-3xl border border-slate-800">
            No reviews match this filter.
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

                  <span className={"text-[10px] font-mono font-bold px-2.5 py-1 rounded-full " + (isUnanswered ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30")}>
                    {isUnanswered ? "Needs Response" : "Answered"}
                  </span>
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

                      {/* Tone Selector */}
                      <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[10px]">
                        {tones.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setSelectedTone(t.id);
                              if (r.aiDrafts && r.aiDrafts[t.id]) {
                                setEditingReply(prev => ({ ...prev, [r.id]: r.aiDrafts[t.id] }));
                              }
                            }}
                            className={"px-2 py-0.5 rounded font-bold transition cursor-pointer " + (selectedTone === t.id ? "bg-[#0097B2] text-white" : "text-slate-400 hover:text-white")}
                          >
                            {t.label}
                          </button>
                        ))}
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

    </div>
  );
}
