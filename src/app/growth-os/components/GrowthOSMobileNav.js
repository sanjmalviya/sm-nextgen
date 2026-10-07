"use client";

import React from "react";
import {
  Home,
  Activity,
  MessageSquare,
  Sliders,
  Settings,
  Bot
} from "lucide-react";

export default function GrowthOSMobileNav({ activeTab, setActiveTab, unansweredCount }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "audit", label: "Audit", icon: Activity },
    { id: "reviews", label: "Reviews", icon: MessageSquare, badge: unansweredCount > 0 ? unansweredCount : null },
    { id: "tasks", label: "Tasks", icon: Sliders },
    { id: "assistant", label: "AI", icon: Bot }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-1.5 flex items-center justify-around font-sans">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={"flex flex-col items-center justify-center p-1.5 rounded-xl transition cursor-pointer relative " + (isActive ? "text-[#0097B2]" : "text-slate-400 hover:text-white")}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {item.badge && (
                <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[9px] font-bold px-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
