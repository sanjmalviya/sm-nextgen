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

      if (q.includes("3-pack") || q.includes("rank")) {
        reply = "To secure the top 3-Pack position in Udaipur for " + (business?.name || "Apex Dental") + ":\\n1. Add secondary categories 'Cosmetic dentist' and 'Dental implants provider' (covers 2,400 monthly queries).\\n2. Reduce unanswered review delay from 4.2 days to under 24 hours.\\n3. Publish a weekly promotional Google Post with an explicit 'Call Now' CTA.";
      } else if (q.includes("score") || q.includes("81")) {
        reply = "Your current Growth Score is " + auditScore + "/100. Strongest areas: Profile Completeness (95%) and Rating (4.8★). What's holding you back: 12 unanswered customer reviews (-8 pts), last photo uploaded >60 days ago (-6 pts), and missing secondary categories (-7 pts). Fixing these brings you to 98/100!";
      } else if (q.includes("photo") || q.includes("upload")) {
        reply = "Top 4 photo ideas for " + (business?.name || "Apex Dental") + " this week:\\n1. Operatory Tech: Close-up of modern 3D diagnostic scanners with clinic staff.\\n2. Patient Comfort: The welcoming waiting lounge with clean hospitality touches.\\n3. Clinical Team: Dr. Sunita Mehra and specialists in sterile scrubs.\\n4. Day-light Street View: Clear view of storefront on Saheli Nagar road so new patients spot you easily.";
      } else if (q.includes("vikram") || q.includes("1-star") || q.includes("negative")) {
        reply = "Recommended strategy for Vikram Singh's 1-star wait time complaint:\\nDo NOT dispute or argue publicly. Use this sincere de-escalation response:\\n'Dear Vikram, please accept our sincere apologies for the unexpected delay. We hold ourselves to strict appointment scheduling and are reviewing our front-desk check-in protocol immediately. Our clinic director would appreciate the chance to make this right—please contact us directly at +91 70735 38077.'";
      } else {
        reply = "Based on your profile data in " + (business?.city || "Udaipur") + ", your greatest immediate growth lever is review response velocity and weekly Google Posts. Would you like me to draft an SEO-optimized description or photo checklist for you?";
      }

      setMessages((prev) => [...prev, { id: "a-" + Date.now(), sender: "ai", text: reply }]);
    }, 800);
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
