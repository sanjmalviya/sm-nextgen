"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Zap, Smartphone, ExternalLink, X, ArrowRight, ShieldCheck, 
  Sparkles, CheckCircle2, Send, Bot, User, 
  Phone, MessageSquare, Maximize2, Minimize2
} from "lucide-react";

export default function GrowthOSFloatingLauncher() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isOsModalOpen, setIsOsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hey! 👋 I'm your SM NextGen AI Growth Copilot.\n\nAsk me anything about scaling your business, ranking #1 on Google Maps, handling reviews, or our automated Growth OS platform!",
      quickReplies: [
        "What is Growth OS?",
        "How to rank in Google Maps Top 3?",
        "How to get more local leads?",
        "Chat with Founders on WhatsApp"
      ],
      actions: [
        { label: "⚡ Launch Growth OS (Live App)", url: "/growth-os", type: "app" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef(null);

  const appUrl = "/growth-os";

  useEffect(() => {
    if (isAiOpen && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isAiOpen, isLoading]);

  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai-copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: data.reply || "I am ready to help you grow your business!",
          actions: data.actions || [],
          quickReplies: data.suggestions || []
        }
      ]);
    } catch (err) {
      console.error("AI error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "I am actively monitoring your growth telemetry! You can launch the Growth OS platform directly or chat with our team on WhatsApp.",
          actions: [
            { label: "🚀 Launch Growth OS (Live Platform)", url: appUrl, type: "app" },
            { label: "💬 WhatsApp Us", url: "https://wa.me/917073538077", type: "whatsapp" }
          ]
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* RESPONSIVE FLOATING DOCK (MOBILE-FRIENDLY & CLEAN)           */}
      {/* ============================================================ */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 print:hidden font-sans">
        
        {/* Desktop-only Contact Quick Icons (Hidden on mobile to eliminate overlap) */}
        <div className="hidden sm:flex items-center gap-2 bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-md p-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-lg">
          <a
            href="https://wa.me/917073538077"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110 cursor-pointer"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-sm" />
          </a>

          <a
            href="tel:+917073538077"
            className="w-8 h-8 rounded-full bg-[#0097B2] hover:bg-[#007a91] text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110 cursor-pointer"
            title="Call Us Directly"
            aria-label="Call Us"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Floating Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0B2545]/95 dark:bg-[#071A30]/95 backdrop-blur-xl p-1.5 rounded-full border border-white/15 shadow-xl text-white">
          
          {/* Growth OS Launcher - Visible on desktop, compact on mobile */}
          <button
            onClick={() => setIsOsModalOpen(true)}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1 text-left transition-colors hover:text-cyan-300 cursor-pointer"
            title="SM NextGen Growth OS Platform"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-bold tracking-tight">Growth OS</span>
          </button>

          <span className="hidden sm:inline w-px h-4 bg-white/20" />

          {/* AI Copilot Button - Ultra clean & responsive */}
          <button
            onClick={() => setIsAiOpen(!isAiOpen)}
            className="flex items-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-full bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:brightness-110 text-white font-bold text-xs shadow-md shadow-[#0097B2]/30 transition-transform active:scale-95 cursor-pointer"
            title="Open AI Growth Copilot"
            aria-label="Open AI Growth Copilot"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
            <span>AI Copilot</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          </button>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. SUPER SMART AI GROWTH COPILOT MODAL                        */}
      {/* ============================================================ */}
      {isAiOpen && (
        <div className="fixed inset-x-3 bottom-3 sm:inset-auto sm:bottom-20 sm:right-6 z-50 w-auto sm:w-[420px] h-[82vh] sm:h-[560px] bg-white dark:bg-[#071A30] rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-3 duration-200 font-sans">
          
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0B2545] to-[#0D305A] text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0097B2]/20 border border-[#0097B2]/40 flex items-center justify-center text-cyan-300">
                <Sparkles className="w-4 h-4 fill-cyan-300" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-heading text-white flex items-center gap-1.5 leading-tight">
                  <span>AI Growth Copilot</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[10px] text-cyan-200/80 font-mono">
                  Smart Business & Growth OS Advisor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold text-cyan-200"
                title="Open Growth OS App"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setIsAiOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close AI chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Contact & App Bar inside Chat */}
          <div className="px-3.5 py-2 bg-slate-50 dark:bg-white/[0.03] border-b border-gray-100 dark:border-white/5 flex items-center justify-between text-[11px] shrink-0">
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20am%20chatting%20with%20your%20AI%20Copilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] font-semibold hover:underline"
              >
                <i className="fab fa-whatsapp" />
                <span>WhatsApp</span>
              </a>
              <span className="text-gray-300 dark:text-white/20">|</span>
              <a
                href="tel:+917073538077"
                className="inline-flex items-center gap-1 text-[#0097B2] font-semibold hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>Call Us</span>
              </a>
            </div>

            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0097B2] font-bold hover:underline flex items-center gap-1"
            >
              <span>Open Growth OS</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-xs text-[#0B2545] dark:text-[#E6EEF2]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={"flex flex-col " + (m.sender === "user" ? "items-end" : "items-start")}
              >
                <div
                  className={
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line " +
                    (m.sender === "user"
                      ? "bg-[#0097B2] text-white rounded-br-none shadow-sm"
                      : "bg-slate-100 dark:bg-white/10 text-[#0B2545] dark:text-[#E6EEF2] rounded-bl-none border border-gray-200 dark:border-white/5")
                  }
                >
                  {m.text}
                </div>

                {/* In-chat Action Buttons */}
                {m.actions && m.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 max-w-[92%]">
                    {m.actions.map((act, i) => (
                      <a
                        key={i}
                        href={act.url}
                        target={act.url.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#0097B2] to-[#0284c7] hover:brightness-110 text-white font-bold text-[11px] flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Quick Reply Suggestion Chips */}
                {m.quickReplies && m.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {m.quickReplies.map((r, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (r.includes("WhatsApp")) {
                            window.open("https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20am%20chatting%20with%20your%20AI%20Copilot", "_blank");
                          } else if (r.includes("Launch") || r.includes("3005")) {
                            window.open(appUrl, "_blank");
                          } else {
                            handleSend(r);
                          }
                        }}
                        className="px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-[#0097B2] dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 text-[10px] font-medium hover:bg-[#0097B2] hover:text-white transition-all cursor-pointer"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 p-2.5 bg-slate-100 dark:bg-white/10 rounded-2xl w-28 text-gray-500 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono">Thinking...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white dark:bg-[#071A30] border-t border-gray-100 dark:border-white/10 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about business, GBP, or Growth OS..."
              className="flex-1 bg-slate-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-[#0B2545] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0097B2]"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !inputValue.trim()}
              className="w-8 h-8 rounded-xl bg-[#0097B2] hover:bg-[#007a91] disabled:opacity-50 text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* ============================================================ */}
      {/* 2. GROWTH OS OVERVIEW MODAL                                   */}
      {/* ============================================================ */}
      {isOsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity">
          <div className="absolute inset-0" onClick={() => setIsOsModalOpen(false)} />

          <div className="relative w-full max-w-md bg-white dark:bg-[#071A30] rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden z-10 flex flex-col font-sans">
            
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0B2545] to-[#0097B2] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-amber-300">
                  <Zap className="w-4 h-4 fill-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white">
                    SM NextGen Growth OS
                  </h3>
                  <p className="text-[10px] text-cyan-100 font-mono">
                    Google Business Profile Growth Platform • Live Platform
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOsModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5 space-y-4 text-[#0B2545] dark:text-[#E6EEF2]">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-[#0097B2]">Module 01: GBP Platform</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px]">
                    Health Score: 81/100
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  Convert Google Search & Maps traffic into qualified customer inquiries with AI reviews autopilot, health diagnostics, and automated local posts.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOsModalOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-[#0097B2]/25 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live App (Live Platform)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/growth-os"
                  onClick={() => setIsOsModalOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-[#0B2545] dark:text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#0097B2]" />
                  <span>Open Interactive Mobile Simulator</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
