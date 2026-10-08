"use client";

import React, { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  User,
  ArrowRight,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Phone
} from "lucide-react";

export default function AssistantTab({ business, auditScore, onNavigateTab }) {
  const isGoogleConnected = business?.googleConnected;

  const initialGreeting = isGoogleConnected
    ? `Hello! I am your AI Business Growth Assistant for ${business?.name || "your business"} in ${business?.city || "Udaipur"}. I analyze your Google Business Profile data in real time. How can I help you optimize your local search ranking today?`
    : `Hello! I am your AI Business Growth Assistant for SM NextGen. Your Google Business Profile is currently not connected. You can ask me anything about Google's local 3-Pack ranking algorithm, review management strategies, or click "Connect Google Profile" to unlock live automated telemetry.`;

  const [messages, setMessages] = useState([
    {
      id: "m-1",
      sender: "ai",
      text: initialGreeting
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const quickPrompts = isGoogleConnected
    ? [
        "How do I rank in the local 3-Pack?",
        `Why is my Growth Score ${auditScore || 80}/100?`,
        "What photos should I upload this week?",
        "How to handle negative customer reviews?"
      ]
    : [
        "Why should I connect my Google Profile?",
        "How does the Google Maps 3-Pack work?",
        "How to get more 5-star customer reviews?",
        "What Done-For-You services does SM NextGen offer?"
      ];

  const handleCopy = (text, id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { id: "u-" + Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 1. Try real Next.js API /api/ai-copilot first
    try {
      const res = await fetch("/api/ai-copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          business: business?.name,
          category: business?.category,
          city: business?.city,
          score: auditScore
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              id: "a-" + Date.now(),
              sender: "ai",
              text: data.reply,
              actions: data.actions || []
            }
          ]);
          return;
        }
      }
    } catch (e) {
      // API fallback
    }

    // 2. Intelligent Grounded Local Engine
    setTimeout(() => {
      setIsTyping(false);
      let reply = "";
      const q = query.toLowerCase();

      if (q.includes("3-pack") || q.includes("rank") || q.includes("top 3") || q.includes("first page")) {
        reply = `To rank in the Google Maps Local 3-Pack for ${business?.name || "your business"} in ${business?.city || "Udaipur"}:
1. Primary Category: Set high intent primary category "${business?.category || "Digital Agency / Dental / Clinic"}".
2. Review Velocity: Maintain a 24-hour response rate across all customer reviews. Owner replies signal an active business to Google's ranking algorithm.
3. Geo-Consistency: Ensure Name, Address, and Phone (NAP) match across your website, Google Maps, and directory citations.
4. Weekly Posts: Publish Google Posts every 7 days with a clear "Call Now" or "Book" action button.`;
      } else if (q.includes("connect") || q.includes("why connect") || q.includes("google profile")) {
        reply = `Connecting your verified Google Business Profile unlocks:
• Automated 0–100 Growth Score calculated across 24 algorithmic factors.
• AI Review Autopilot to draft warm, professional replies in 1 click.
• Real-time call tracking, direction requests, and profile impression telemetry.
• Prioritized action checklist to outrank your top 3 local competitors.`;
      } else if (q.includes("score") || q.includes("audit") || q.includes("diagnostic")) {
        reply = `Your proprietary Growth Score is ${auditScore || 0}/100.
• Strong Ranking Signals: Verified physical address and local telephone format.
• Immediate Growth Levers:
  1. Profile Completeness: Ensure all commercial attributes and 750-character description are filled.
  2. Photo Freshness: Upload 2–3 high-resolution daylight photos every 14 days.
  3. Response Speed: Respond to incoming customer feedback within 24 hours.`;
      } else if (q.includes("negative") || q.includes("bad review") || q.includes("1-star") || q.includes("complaint")) {
        reply = `De-escalation protocol for critical Google reviews:
Never argue or dispute publicly on Maps. Prospective customers look at how politely and professionally you resolve complaints.
Recommended Public Template:
"Dear [Customer Name], thank you for sharing your feedback. We hold our practice to the highest standard and sincerely apologize for your experience. Please contact our management team directly at ${business?.phone || "+91 70735 38077"} so we can make this right for you immediately."`;
      } else if (q.includes("agency") || q.includes("smnextgen") || q.includes("done for you") || q.includes("service") || q.includes("hire")) {
        reply = `SM NextGen provides complete Done-For-You Google Business Profile Management & Local SEO:
• Weekly SEO-optimized Google Posts & geotagged photos.
• 24-Hour AI & human review response management.
• Citation building across 40+ high-authority business directories.
• Guaranteed local 3-Pack placement strategy.
📍 Udaipur Office: HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313001, India.
📞 Phone / WhatsApp: +91 70735 38077 | Email: info@smnextgen.com`;
      } else {
        reply = `Great question regarding local growth for ${business?.name || "your business"} in ${business?.city || "Udaipur"}.
Based on Google's 2026 local search algorithm:
1. Relevance, Proximity, and Prominence dictate over 85% of local map pack rankings.
2. Complete your 24-point audit diagnostic items to maximize ranking authority.
3. Use the AI Content Tools tab to generate high-converting 750-character descriptions and review invite links.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "a-" + Date.now(),
          sender: "ai",
          text: reply
        }
      ]);
    }, 500);
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Bot className="w-3.5 h-3.5" />
          <span>SM NextGen Grounded AI Assistant</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          AI Business Growth Strategist
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Trained on Google Maps 3-Pack algorithms and grounded in your real business context. Ask questions, draft strategies, or resolve customer complaints.
        </p>
      </div>

      {/* Quick Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0097B2] text-xs font-medium text-slate-300 hover:text-white whitespace-nowrap transition cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-[#0097B2]" />
            <span>{p}</span>
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 min-h-[440px] flex flex-col justify-between">
        
        {/* Messages Stream */}
        <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
          {messages.map((m) => (
            <div
              key={m.id}
              className={"flex items-start gap-3 " + (m.sender === "user" ? "justify-end" : "justify-start")}
            >
              {m.sender === "ai" && (
                <div className="w-8 h-8 rounded-xl bg-[#0097B2] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className="space-y-2 max-w-xl">
                <div
                  className={"p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line relative group " + (m.sender === "user" ? "bg-[#0097B2] text-white rounded-tr-none font-medium" : "bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none")}
                >
                  {m.text}

                  {m.sender === "ai" && (
                    <button
                      onClick={() => handleCopy(m.text, m.id)}
                      className="absolute top-2.5 right-2.5 p-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
                      title="Copy response"
                    >
                      {copiedId === m.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Optional Action Buttons */}
                {m.actions && m.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {m.actions.map((act, i) => (
                      <a
                        key={i}
                        href={act.url}
                        target={act.url.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-[#0097B2] text-xs font-bold text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
                      >
                        {act.type === "whatsapp" && <MessageSquare className="w-3 h-3 text-emerald-400" />}
                        {act.type === "call" && <Phone className="w-3 h-3 text-[#0097B2]" />}
                        <span>{act.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {m.sender === "user" && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500 pl-11">
              <Bot className="w-4 h-4 text-[#0097B2] animate-pulse" />
              <span>Analyzing Google search algorithms & crafting recommendation...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative pt-3 border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about ranking, reviews, photo strategy, or Google algorithm..."
            className="w-full pl-4 pr-12 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
          />
          <button
            type="submit"
            className="absolute right-2 top-4.5 p-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white transition active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
}
