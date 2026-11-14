"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GrowthProcessDiagram from "../GrowthProcessDiagram";

export default function HowWeWorkProcess({ onStartConversation }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body">
      <div className="max-w-7xl mx-auto">
        <GrowthProcessDiagram />

        {/* Closing Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light italic leading-relaxed">
            No unnecessary complexity. No one-size-fits-all playbook. Just a clear approach built around your business.
          </p>
        </div>

        {/* Compact Footer Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/how-we-work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white font-subheading font-bold text-xs uppercase tracking-wider transition-colors border border-slate-200 dark:border-white/10"
          >
            <span>Explore Our Approach</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0097B2]" />
          </Link>

          {onStartConversation && (
            <button
              type="button"
              onClick={onStartConversation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
            >
              <span>Map Your Growth Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
