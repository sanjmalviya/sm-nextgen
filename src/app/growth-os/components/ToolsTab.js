"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Image,
  FileText,
  Wrench,
  Bot,
  Calendar,
  Send,
  Plus
} from "lucide-react";

export default function ToolsTab({ business }) {
  const [activeTool, setActiveTool] = useState("description"); // description, posts, photos

  // Description Generator State
  const [bizName, setBizName] = useState(business?.name || "SM NextGen");
  const [city, setCity] = useState(business?.city || "Udaipur, Rajasthan");
  const [services, setServices] = useState(
    business?.services?.length > 0 
      ? business.services.join(", ") 
      : "Digital Marketing, SEO, AI Automation Systems, Web & App Development"
  );
  const [generatedDesc, setGeneratedDesc] = useState(
    business?.description ||
    "SM NextGen is Udaipur's premier business growth & AI automation firm located in Ganapati Nagar. We engineer high-converting web systems, top Google 3-Pack rankings, performance advertising campaigns, and custom AI WhatsApp workflows. Dedicated to measurable ROI for ambitious local businesses and enterprises across Rajasthan. Contact +91 70735 38077 to scale your business growth today."
  );
  const [descCopied, setDescCopied] = useState(false);
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);

  // Google Post Generator State
  const [postTopic, setPostTopic] = useState("Special Promotion / Seasonal Offer");
  const [postDetails, setPostDetails] = useState("Flat 20% discount on business growth consultations this month.");
  const [postCta, setPostCta] = useState("CALL_NOW");
  const [generatedPost, setGeneratedPost] = useState("");
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);
  const [isSavingPost, setIsSavingPost] = useState(false);
  const [postSavedMsg, setPostSavedMsg] = useState("");
  const [postCopied, setPostCopied] = useState(false);

  // Photo Ideas Checklist State
  const [checkedPhotos, setCheckedPhotos] = useState({});

  const photoIdeas = [
    { 
      id: "p-1", 
      category: "Storefront & Exterior", 
      title: "Daylight Street Entrance & Business Signboard", 
      why: "Ensures first-time customers instantly recognize your commercial building and parking area from the main street." 
    },
    { 
      id: "p-2", 
      category: "Workspaces & Facilities", 
      title: "Modern Client Meeting Rooms & Workspace Suites", 
      why: "Demonstrates established commercial headquarters and operational excellence to corporate clients." 
    },
    { 
      id: "p-3", 
      category: "Team & Leadership", 
      title: "Team & Specialists in Consultation with Clients", 
      why: "Builds human trust and authentic rapport before potential clients call or visit." 
    },
    { 
      id: "p-4", 
      category: "Client Reception Area", 
      title: "Clean Reception & Welcome Desk", 
      why: "Welcomes visiting clients and establishes corporate professionalism on Google Maps." 
    },
    { 
      id: "p-5", 
      category: "Deliverables & Technology", 
      title: "Technology Infrastructure & Project Showcase", 
      why: "Highlights modern tools, high standards, and tangible client outcomes." 
    }
  ];

  // Generate 750-Char Description via API or Grounded Fallback
  const handleGenerateDesc = async () => {
    setIsGeneratingDesc(true);
    try {
      const res = await fetch("/api/growth-os/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_description",
          keywords: services
        })
      });
      const data = await res.json();
      if (res.ok && data.success && data.result) {
        setGeneratedDesc(data.result);
      } else {
        // Fallback
        setGeneratedDesc(
          `${bizName} is ${city}'s trusted provider for commercial excellence and growth. Specializing in ${services}, our team combines industry expertise with dedicated customer service. Situated conveniently in ${city}, we deliver measurable results and five-star satisfaction. Call ${business?.phone || "+91 70735 38077"} or visit our website to get started today.`
        );
      }
    } catch (e) {
      setGeneratedDesc(
        `${bizName} is ${city}'s premier destination for ${services}. Contact us at ${business?.phone || "+91 70735 38077"} to schedule your service or consultation.`
      );
    } finally {
      setIsGeneratingDesc(false);
    }
  };

  const handleCopyDesc = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(generatedDesc);
      setDescCopied(true);
      setTimeout(() => setDescCopied(false), 2000);
    }
  };

  // Generate Google Post via API
  const handleGeneratePost = async () => {
    setIsGeneratingPost(true);
    setPostSavedMsg("");
    try {
      const res = await fetch("/api/growth-os/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_post",
          topic: `${postTopic}: ${postDetails}`,
          cta: postCta
        })
      });
      const data = await res.json();
      if (res.ok && data.success && data.result) {
        setGeneratedPost(data.result);
      } else {
        setGeneratedPost(
          `📢 Exclusive Update from ${bizName} in ${city}!\n\n${postDetails}\n\nWe are committed to delivering the highest quality experience to all our clients. Tap below to connect with us directly!\n\n📞 Call: ${business?.phone || "+91 70735 38077"}`
        );
      }
    } catch (e) {
      setGeneratedPost(
        `Exciting news from ${bizName}! ${postDetails} Contact us today at ${business?.phone || "+91 70735 38077"}.`
      );
    } finally {
      setIsGeneratingPost(false);
    }
  };

  // Save Post to Database
  const handleSavePost = async () => {
    if (!generatedPost.trim()) return;
    setIsSavingPost(true);
    try {
      const res = await fetch("/api/growth-os/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: postTopic,
          content: generatedPost,
          ctaType: postCta,
          status: "DRAFT"
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPostSavedMsg("Post saved to queue successfully! Ready for scheduled publishing.");
        setTimeout(() => setPostSavedMsg(""), 3500);
      } else {
        setPostSavedMsg(data.error || "Failed to save post.");
      }
    } catch (e) {
      setPostSavedMsg("Error connecting to server.");
    } finally {
      setIsSavingPost(false);
    }
  };

  const handleCopyPost = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(generatedPost);
      setPostCopied(true);
      setTimeout(() => setPostCopied(false), 2000);
    }
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
          Profile Content & Marketing Generators
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Craft high-converting Google Business Profile descriptions, generate weekly Google Posts, and plan high-impact photo uploads that Google's algorithm rewards.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="flex flex-wrap items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs w-fit gap-1">
        <button
          onClick={() => setActiveTool("description")}
          className={"px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition cursor-pointer " + (activeTool === "description" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>750-Char Business Description</span>
        </button>

        <button
          onClick={() => setActiveTool("posts")}
          className={"px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition cursor-pointer " + (activeTool === "posts" ? "bg-[#0097B2] text-white shadow-sm" : "text-slate-400 hover:text-white")}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Google Post & Offer Generator</span>
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
              onClick={handleGenerateDesc}
              disabled={isGeneratingDesc}
              className="px-4 py-2 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer disabled:opacity-60"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isGeneratingDesc ? "animate-spin" : ""}`} />
              <span>{isGeneratingDesc ? "Generating with Gemini..." : "Generate with AI"}</span>
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
                onClick={handleCopyDesc}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                {descCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{descCopied ? "Copied to Clipboard!" : "Copy Description"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: Google Post Generator */}
      {activeTool === "posts" && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-heading font-extrabold text-white">Google Post & Offer Autopilot</h3>
              <p className="text-xs text-slate-400">Google Posts expire every 7 days. Fresh posts signal an active business to Google's Local 3-Pack ranking algorithm.</p>
            </div>
          </div>

          {postSavedMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              {postSavedMsg}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-300 font-bold block mb-1">Post Type / Topic</label>
              <select
                value={postTopic}
                onChange={(e) => setPostTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              >
                <option value="Special Promotion / Seasonal Offer">Special Promotion / Seasonal Offer</option>
                <option value="Flagship Service Spotlight">Flagship Service Spotlight</option>
                <option value="Customer Success Story / Review">Customer Success Story / Review</option>
                <option value="New Feature / Business Announcement">New Feature / Business Announcement</option>
                <option value="Holiday Operating Hours Notice">Holiday Operating Hours Notice</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-bold block mb-1">Call-To-Action (CTA Button)</label>
              <select
                value={postCta}
                onChange={(e) => setPostCta(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              >
                <option value="CALL_NOW">Call Now (Recommended for Phone Leads)</option>
                <option value="BOOK">Book / Schedule Appointment</option>
                <option value="LEARN_MORE">Learn More</option>
                <option value="ORDER_ONLINE">Order / Get Offer</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-bold block mb-1">Key Offer or Announcement Details</label>
            <input
              type="text"
              value={postDetails}
              onChange={(e) => setPostDetails(e.target.value)}
              placeholder="e.g. 15% discount for first 20 clients this week"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>

          <button
            onClick={handleGeneratePost}
            disabled={isGeneratingPost}
            className="px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold flex items-center gap-2 transition active:scale-95 cursor-pointer disabled:opacity-60"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isGeneratingPost ? "animate-spin" : ""}`} />
            <span>{isGeneratingPost ? "Generating Post Draft..." : "Generate Post with Gemini AI"}</span>
          </button>

          {generatedPost && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400">Google Business Post Preview</span>
                <span className="text-[11px] font-mono text-slate-500">CTA: {postCta}</span>
              </div>

              <textarea
                rows={5}
                value={generatedPost}
                onChange={(e) => setGeneratedPost(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
              />

              <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                <button
                  onClick={handleCopyPost}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  {postCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{postCopied ? "Copied!" : "Copy Text"}</span>
                </button>

                <button
                  onClick={handleSavePost}
                  disabled={isSavingPost}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#008299] hover:to-cyan-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSavingPost ? "Saving..." : "Save to Post Queue"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tool 3: Photo Ideas */}
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
