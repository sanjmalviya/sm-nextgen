"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Image,
  FileText,
  Wrench,
  Bot
} from "lucide-react";

export default function ToolsTab({ business }) {
  const [activeTool, setActiveTool] = useState("description"); // description, photos

  // Description Generator State
  const [bizName, setBizName] = useState(business?.name || "Apex Dental Care & Implant Center");
  const [city, setCity] = useState(business?.city || "Udaipur, Rajasthan");
  const [services, setServices] = useState("Dental implants, painless root canal, cosmetic smile makeovers, teeth whitening");
  const [generatedDesc, setGeneratedDesc] = useState(
    "Apex Dental Care & Implant Center is Udaipur's premier multi-specialty dental clinic located near Saheliyon Ki Bari, Saheli Nagar. Led by experienced dental surgeons, we specialize in modern dental implants, painless root canal therapy, digital smile design, and pediatric dental care. Equipped with advanced 3D low-radiation diagnostic scanners and European sterilization systems, we ensure a comfortable, painless patient experience. Serving Udaipur, Sukher, and nearby Rajasthan regions. Call +91 70735 38077 to book your smile consultation today."
  );
  const [copied, setCopied] = useState(false);

  // Photo Ideas Checklist State
  const [checkedPhotos, setCheckedPhotos] = useState({});

  const photoIdeas = [
    { id: "p-1", category: "Storefront & Exterior", title: "Daylight Street Entrance & Signboard", why: "Ensures first-time patients instantly spot clinic from Saheli Nagar main road." },
    { id: "p-2", category: "High-Tech Operatory", title: "3D Digital Imaging & Dental Chair Suite", why: "Demonstrates clinical precision and hygienic medical standards." },
    { id: "p-3", category: "Team & Specialists", title: "Lead Dentist in Consultation with Patient", why: "Builds human trust and doctor-patient rapport before booking." },
    { id: "p-4", category: "Patient Hospitality", title: "Spotless Reception & Waiting Lounge", why: "Alleviates dental anxiety and establishes premium clinic care." },
    { id: "p-5", category: "Sterilization Protocols", title: "Class-B Autoclave & Sealed Instrument Trays", why: "Addresses #1 patient fear regarding hygiene and infection control." }
  ];

  const handleGenerate = () => {
    setGeneratedDesc(
      bizName + " is " + city + "'s trusted center for advanced dental excellence. Specializing in " + services + ", our team combines gentle, patient-first care with modern 3D diagnostic technology. Conveniently situated in " + city + ", we prioritize hygiene, punctuality, and lasting smiles. Call +91 70735 38077 to reserve your appointment."
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDesc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 font-sans animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          <span>Growth AI Content Tools</span>
        </div>
        <h2 className="text-2xl font-heading font-extrabold text-white">
          Profile Content & Photo Generators
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Craft high-converting Google Business Profile descriptions and plan high-impact photo uploads that Google's algorithm rewards.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs w-fit">
        <button
          onClick={() => setActiveTool("description")}
          className={"px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition cursor-pointer " + (activeTool === "description" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>750-Char Business Description</span>
        </button>
        <button
          onClick={() => setActiveTool("photos")}
          className={"px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition cursor-pointer " + (activeTool === "photos" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
        >
          <Image className="w-3.5 h-3.5" />
          <span>Photo Content Ideas</span>
        </button>
      </div>

      {/* Tool 1: Description Generator */}
      {activeTool === "description" && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-300 font-bold block mb-1">Business Name</label>
              <input
                type="text"
                value={bizName}
                onChange={(e) => setBizName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300 font-bold block mb-1">City / Region</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Target Services (Keywords)</label>
            <input
              type="text"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleGenerate}
              className="px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Regenerate Description</span>
            </button>

            <span className="text-xs font-mono text-slate-400">
              {generatedDesc.length} / 750 Characters
            </span>
          </div>

          {/* Result Text Area */}
          <div className="space-y-2">
            <textarea
              rows={5}
              value={generatedDesc}
              onChange={(e) => setGeneratedDesc(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />

            <div className="flex justify-end">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Description"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: Photo Ideas */}
      {activeTool === "photos" && (
        <div className="space-y-3">
          {photoIdeas.map((photo) => {
            const isDone = checkedPhotos[photo.id];
            return (
              <div
                key={photo.id}
                className={"p-4 sm:p-5 rounded-2xl border transition flex items-center justify-between gap-4 " + (isDone ? "bg-slate-900/50 border-slate-800 opacity-75" : "bg-slate-900 border-slate-800 hover:border-slate-700")}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => setCheckedPhotos(prev => ({ ...prev, [photo.id]: !prev[photo.id] }))}
                    className={"w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center transition cursor-pointer " + (isDone ? "bg-emerald-500 border-emerald-500 text-slate-950" : "border-slate-700 hover:border-[#0097B2]")}
                  >
                    {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#0097B2]/15 text-[#0097B2]">
                      {photo.category}
                    </span>
                    <h4 className={"font-heading font-extrabold text-sm " + (isDone ? "text-slate-400 line-through" : "text-white")}>
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      <strong>Why upload: </strong>{photo.why}
                    </p>
                  </div>
                </div>

                <span className={"text-xs font-bold px-3 py-1 rounded-xl shrink-0 " + (isDone ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-800 text-slate-400")}>
                  {isDone ? "Uploaded" : "Pending Upload"}
                </span>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
