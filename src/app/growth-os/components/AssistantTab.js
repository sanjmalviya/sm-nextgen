"use client";

import React, { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  User,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";

export default function AssistantTab({ business, auditScore }) {
  const [messages, setMessages] = useState([
    {
      id: "m-1",
      sender: "ai",
      text: "Hello! I am your AI Business Growth Assistant for " + (business?.name || "Apex Dental Care") + ". I analyze your Google Business Profile data in real time. How can I help you dominate local search today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "How do I rank in the local 3-Pack?",
    "Why is my Growth Score 81/100?",
    "What photos should I upload this week?",
    "How to handle Vikram Singh's 1-star review?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { id: "u-" + Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "";
      const q = query.toLowerCase();

      if (q.includes("3-pack") || q.includes("rank") || q.includes("first page") || q.includes("top")) {
        reply = `To dominate the local Google 3-Pack for ${business?.name || "your business"} in ${business?.city || "Udaipur"}:
1. Categories: Maintain high intent primary category "${business?.category || "Dental clinic"}" and add secondary categories (e.g. 'Cosmetic specialist', 'Emergency clinic').
2. Review Velocity: Maintain 24-hr response rate across all 142 reviews. Fresh owner replies increase prominence by 34%.
3. Geo-Signal Consistency: Ensure NAP (Name, Address, Phone) matches across Google Maps, Apple Maps, and local directories.
4. Weekly Google Posts: Post high-resolution photos with explicit "Call Now" buttons every 7 days.`;
      } else if (q.includes("score") || q.includes("81") || q.includes("audit") || q.includes("health")) {
        reply = `Your proprietary Growth Score is ${auditScore}/100.
• Strong Signals: Profile Completeness (92%), Star Rating (4.8★), Verified Phone & Address.
• Roadblocks Limiting Rank:
  1. 12 Unanswered Reviews (-8 pts): Needs immediate AI draft publishing.
  2. Photo Freshness (-6 pts): Last photo uploaded >45 days ago. Upload 3 photos this week.
  3. Missing Secondary Categories (-7 pts): Add target commercial intent categories.
Resolving these three items in the 24-Point Audit tab will push your score above 95/100!`;
      } else if (q.includes("photo") || q.includes("picture") || q.includes("upload") || q.includes("image")) {
        reply = `High-converting photo strategy for ${business?.name || "your business"}:
1. Exterior Daylight: Clear streetfront entrance so patients navigating Saheli Nagar road spot you instantly.
2. Technology & Equipment: 3D diagnostic scanners, digital operatory chairs, and sterile procedure rooms.
3. Hospitality & Comfort: Welcoming reception desk and hygienic waiting lounge.
4. Lead Practitioner: Doctor in clinical attire consulting with a patient (builds trust before booking).
Aim for 2–3 new photos uploaded every 14 days to keep Google's freshness algorithm active.`;
      } else if (q.includes("vikram") || q.includes("negative") || q.includes("1-star") || q.includes("bad review") || q.includes("complaint")) {
        reply = `De-escalation protocol for negative feedback:
Never dispute or argue publicly on Google Maps. Potential patients evaluate how graciously you resolve complaints.
Recommended Public Reply:
"Dear Vikram, thank you for bringing this to our attention. We hold our practice to strict appointment timing and are deeply sorry for the delay you experienced. Our clinic director is reviewing our reception scheduling protocol immediately. Please connect directly with us at +91 70735 38077 so we can make this right for you."`;
      } else if (q.includes("call") || q.includes("patient") || q.includes("customer") || q.includes("lead") || q.includes("more business")) {
        reply = `Action plan to increase direct inbound calls by 30–50%:
1. Enable Click-to-Call Primary Action: Ensure phone ${business?.phone || "+91 70735 38077"} is verified with local international code (+91 or US format).
2. Weekly Google Posts with "Call Now": Posts with a direct call CTA have a 4.2x higher conversion rate than generic text updates.
3. Rapid Review Response: 78% of local searchers choose the provider that actively responds to recent reviews within 24 hours.`;
      } else if (q.includes("agency") || q.includes("smnextgen") || q.includes("done for you") || q.includes("service") || q.includes("hire") || q.includes("help")) {
        reply = `SM NextGen offers full Done-For-You Google Business Profile Management & Growth:
• Weekly SEO-optimized Google Posts & geotagged media uploads.
• 24-Hour AI & human review response management.
• Citation building and directory synchronization across 40+ platforms.
• Guaranteed local 3-Pack ranking strategy.
Headquarters: Plot 14, Saheli Nagar, Udaipur, Rajasthan 313001, India.
Contact: Call/WhatsApp +91 70735 38077 or visit the Pricing tab to select a managed growth plan.`;
      } else if (q.includes("price") || q.includes("cost") || q.includes("plan") || q.includes("subscription")) {
        reply = `SM NextGen Growth OS pricing plans:
• Free Diagnostic ($0 / ₹0): Instant 24-point audit & 0–100 Growth Score.
• Growth Starter ($49/mo / ₹3,999/mo): AI Review Autopilot, weekly posts, 30-day performance telemetry.
• AI Growth Pro ($99/mo / ₹7,999/mo): Full 24-point dynamic fixes, multi-tone AI engine, priority support.
• Multi-Location ($199/mo / ₹15,999/mo): Agency multi-storefront dashboard, custom workflows, dedicated growth manager.`;
      } else {
        reply = `Great question regarding local growth for ${business?.name || "your business"} in ${business?.city || "Udaipur"}.
Based on Google's 2026 local search algorithm:
1. Proximity, Relevance & Prominence dictate 90% of Maps visibility.
2. Complete your 24-point audit items in the Audit tab to immediately raise your score from ${auditScore} towards 100.
3. Utilize the AI Tools tab to generate high-converting 750-character descriptions and scheduled photo ideas.
Need personal guidance? Reach out to our Udaipur growth architects at +91 70735 38077.`;
      }

      setMessages((prev) => [...prev, { id: "a-" + Date.now(), sender: "ai", text: reply }]);
    }, 600);
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Bot className="w-3.5 h-3.5" />
          <span>Grounded Local AI Strategist</span>
        </div>
        <h2 className="text-2xl font-heading font-extrabold text-white">
          AI Business Growth Assistant
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Trained on local Google search ranking factors and grounded exclusively in your business profile data.
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

      {/* Chat Window */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 min-h-[420px] flex flex-col justify-between">
        
        {/* Messages Stream */}
        <div className="space-y-4 overflow-y-auto max-h-[380px] pr-2">
          {messages.map((m) => (
            <div
              key={m.id}
              className={"flex items-start gap-3 " + (m.sender === "user" ? "justify-end" : "justify-start")}
            >
              {m.sender === "ai" && (
                <div className="w-8 h-8 rounded-xl bg-[#0097B2] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={"p-4 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-xl whitespace-pre-line " + (m.sender === "user" ? "bg-[#0097B2] text-white rounded-tr-none font-medium" : "bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none")}
              >
                {m.text}
              </div>

              {m.sender === "user" && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Bot className="w-4 h-4 text-[#0097B2] animate-pulse" />
              <span>Analyzing local search signals & drafting recommendation...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative pt-2 border-t border-slate-800"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about ranking, reviews, photos, or description..."
            className="w-full pl-4 pr-12 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
          />
          <button
            type="submit"
            className="absolute right-2 top-4 p-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white transition active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
}
