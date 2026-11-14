"use client";

import React from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  ShieldCheck,
  FileText,
  RotateCcw,
  Cookie,
  Trash2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const POLICIES = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    desc: "How information is collected, used and protected when you interact with SM NextGen websites, services or digital products.",
    icon: ShieldCheck,
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
    desc: "The terms governing website access, service proposals, delivery responsibilities and intellectual property.",
    icon: FileText,
  },
  {
    title: "Refund & Cancellation Policy",
    href: "/refund-policy",
    desc: "Clear guidelines regarding service deposits, cancellation procedures, project milestones and billing terms.",
    icon: RotateCcw,
  },
  {
    title: "Cookie Policy",
    href: "/cookie-policy",
    desc: "How cookies and similar browser technologies are utilized to ensure secure operations and analytics.",
    icon: Cookie,
  },
  {
    title: "Data Deletion Requests",
    href: "/data-deletion",
    desc: "How to request review or deletion of personal data associated with an enquiry or service account.",
    icon: Trash2,
  },
];

export default function LegalClient() {
  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Frosted Positioning Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
              <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
                LEGAL &amp; COMPLIANCE HUB
              </span>
              <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
              <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
                Governance · Data Transparency
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
              Legal Information.{" "}
              <span className="text-[#0097B2]">
                Clear Expectations.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed mb-6">
              Find the policies that explain how SM NextGen websites, services and digital products are used.
            </p>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. POLICY CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLICIES.map((policy) => {
              const Icon = policy.icon;
              return (
                <Link
                  key={policy.href}
                  href={policy.href}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2] transition flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/10 dark:bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition mb-3">
                      {policy.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                      {policy.desc}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#0097B2] flex items-center gap-1 group-hover:translate-x-1 transition">
                    <span>Read Policy</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A30]/50 border border-slate-200/80 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-700 dark:text-slate-300">Office Location &amp; Legal Notices:</span> SM NextGen, HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313001, India. Official Communications: <a href="mailto:info@smnextgen.com" className="text-[#0097B2] hover:underline">info@smnextgen.com</a>.
          </div>
        </div>
      </section>
    </main>
  );
}
