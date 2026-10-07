"use client";

import React from "react";
import {
  Shield,
  Building,
  Users,
  Activity,
  CheckCircle2,
  Database,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

export default function AdminTab({ business }) {
  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>SM NextGen Agency Operations</span>
        </div>
        <h2 className="text-2xl font-heading font-extrabold text-white">
          Admin Dashboard & Lead Pipeline
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Internal administrative telemetry, captured audit leads, connected client workspaces, and Supabase database status.
        </p>
      </div>

      {/* 3 Telemetry Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400">Total Client Profiles</span>
          <div className="text-2xl font-extrabold text-white">12 Locations</div>
          <span className="text-[10px] text-emerald-400 font-bold">Udaipur, Jaipur & US</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400">Audits Run This Month</span>
          <div className="text-2xl font-extrabold text-cyan-400">84 Audits</div>
          <span className="text-[10px] text-emerald-400 font-bold">+38% Lead Inflow</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400">Database Engine</span>
          <div className="text-2xl font-extrabold text-emerald-400">Supabase Connected</div>
          <span className="text-[10px] text-slate-400 font-mono">pdkzvbpitkexouadchva</span>
        </div>
      </div>

      {/* Active Workspaces Table */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="font-heading font-extrabold text-base text-white">
          Connected Client Workspaces
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="pb-3 font-semibold">Business Name</th>
                <th className="pb-3 font-semibold">Location</th>
                <th className="pb-3 font-semibold">Growth Score</th>
                <th className="pb-3 font-semibold">Reviews</th>
                <th className="pb-3 font-semibold">Plan</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 font-bold text-white">Apex Dental Care & Implant Center</td>
                <td className="py-3">Udaipur, RJ</td>
                <td className="py-3 text-[#0097B2] font-bold">81/100</td>
                <td className="py-3">142 (4.8★)</td>
                <td className="py-3">Growth Pro</td>
                <td className="py-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Active</span></td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">Lakeview Dental Studio</td>
                <td className="py-3">Udaipur, RJ</td>
                <td className="py-3 text-cyan-400 font-bold">78/100</td>
                <td className="py-3">98 (4.7★)</td>
                <td className="py-3">Growth Pro</td>
                <td className="py-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Active</span></td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">Sunrise Legal Associates</td>
                <td className="py-3">Jaipur, RJ</td>
                <td className="py-3 text-amber-400 font-bold">64/100</td>
                <td className="py-3">45 (4.5★)</td>
                <td className="py-3">Starter</td>
                <td className="py-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
