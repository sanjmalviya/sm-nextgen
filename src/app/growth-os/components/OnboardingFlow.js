"use client";

import React, { useState } from "react";
import { 
  Building, MapPin, Globe, Phone, Clock, Target, 
  ArrowRight, ArrowLeft, Check, Sparkles, AlertCircle,
  Briefcase, CheckCircle2, ShieldCheck, Layers
} from "lucide-react";

const BUSINESS_CATEGORIES = [
  "Digital Marketing & Tech Agency",
  "Retail Store & Boutique",
  "Restaurant, Cafe & Dining",
  "Healthcare Clinic & Diagnostic",
  "Salon, Spa & Wellness",
  "Real Estate & Property Consultant",
  "Chartered Accountant & Legal Advisory",
  "Education & Coaching Institute",
  "Hotel, Resort & Hospitality",
  "Automobile Dealership & Service",
  "Manufacturing & Industrial Exporter",
  "Home Services (Plumbing, Electrical, Interior)",
  "Other Local Service Business"
];

const GROWTH_GOALS = [
  "Get more inbound customer calls",
  "Dominate Google Maps 3-Pack in local city",
  "Increase website visits and quote requests",
  "Automate 5-star review collection and responses",
  "Drive more physical storefront foot traffic"
];

export default function OnboardingFlow({ currentUser, onComplete }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState(BUSINESS_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("Udaipur, Rajasthan");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("+91 70735 38077");
  const [description, setDescription] = useState("");
  const [servicesInput, setServicesInput] = useState("");
  const [openingHours, setOpeningHours] = useState("Mon-Sat: 09:00 AM - 07:00 PM | Sun: Closed");
  const [targetCustomers, setTargetCustomers] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState(GROWTH_GOALS[0]);

  // Validation
  const validateStep1 = () => {
    if (!name.trim() || name.trim().length < 2) {
      setErrorMsg("Please enter your official business name (minimum 2 characters).");
      return false;
    }
    const finalCat = category === "Other Local Service Business" ? customCategory : category;
    if (!finalCat.trim()) {
      setErrorMsg("Please select or specify your business category.");
      return false;
    }
    if (!country.trim()) {
      setErrorMsg("Country is required.");
      return false;
    }
    if (!city.trim()) {
      setErrorMsg("City or operating region is required.");
      return false;
    }
    if (!address.trim() || address.trim().length < 3) {
      setErrorMsg("Please provide your primary location, address, or service radius.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) return;
    }
    setErrorMsg("");
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const finalCat = category === "Other Local Service Business" && customCategory.trim() 
        ? customCategory.trim() 
        : category;

      const servicesArray = servicesInput
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

      const res = await fetch("/api/growth-os/business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          category: finalCat,
          country: country.trim(),
          city: city.trim(),
          address: address.trim(),
          website: website.trim(),
          phone: phone.trim(),
          description: description.trim(),
          services: servicesArray,
          openingHours: openingHours.trim(),
          targetCustomers: targetCustomers.trim(),
          primaryGoal: primaryGoal
        })
      });

      const data = await res.json();

      if (res.ok && data.success && data.business) {
        onComplete(data.business);
      } else {
        setErrorMsg(data.error || "Failed to save business profile. Please verify your details.");
      }
    } catch (err) {
      setErrorMsg("Network error: Could not save business profile. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#0097B2] selection:text-white">
      
      {/* Background radial accent */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0097B2]/10 blur-[130px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-2xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Onboarding Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step 2 of 2: Business Profile Setup</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Set Up Your Growth OS Business Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Growth OS requires an authentic business profile to ground your SEO audit, AI review replies, and local ranking recommendations.
          </p>
        </div>

        {/* Multi-Step Progress Tracker */}
        <div className="flex items-center justify-between max-w-md mx-auto px-4">
          {[
            { num: 1, label: "Core Identity" },
            { num: 2, label: "Channels" },
            { num: 3, label: "Goals & Services" }
          ].map((s, idx) => (
            <React.Fragment key={s.num}>
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                  step > s.num
                    ? "bg-emerald-500 text-slate-950"
                    : step === s.num
                    ? "bg-[#0097B2] text-white ring-4 ring-[#0097B2]/20 shadow-md shadow-[#0097B2]/40"
                    : "bg-slate-900 border border-slate-800 text-slate-500"
                }`}>
                  {step > s.num ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                </div>
                <span className={`text-[11px] font-medium ${step === s.num ? "text-[#0097B2]" : "text-slate-500"}`}>
                  {s.label}
                </span>
              </div>
              {idx < 2 && (
                <div className={`flex-1 h-0.5 mx-2 -mt-5 transition-colors ${step > s.num ? "bg-emerald-500" : "bg-slate-800"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Wizard Form Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm space-y-6">
          
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: CORE BUSINESS IDENTITY */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-heading font-extrabold text-base text-white">Core Business Details</h3>
                <p className="text-xs text-slate-400">Tell us what your business is called and where customers find you.</p>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Business Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Apex Digital Studio or Royal Heritage Hotel"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                  <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Primary Category / Industry *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                >
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {category === "Other Local Service Business" && (
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                    Specify Custom Category *
                  </label>
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="e.g. Solar Panel Installation or Architectural Firm"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. India or United States"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                    City / Operating Region *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Udaipur, Rajasthan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                    />
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Street Address or Service Radius *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. HPPQ+Q5V, Ganapati Nagar or All of Udaipur Metro"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>
            </div>
          )}

          {/* STEP 2: DIGITAL PRESENCE & CHANNELS */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-heading font-extrabold text-base text-white">Contact & Online Channels</h3>
                <p className="text-xs text-slate-400">Add contact touchpoints so your audit score can verify customer conversion channels.</p>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Business Website / Landing Page URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourbusiness.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                  <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Primary Customer Phone / WhatsApp Line
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 70735 38077"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Operating Hours Schedule
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={openingHours}
                    onChange={(e) => setOpeningHours(e.target.value)}
                    placeholder="Mon-Sat: 09:00 AM - 07:00 PM | Sun: Closed"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                  />
                  <Clock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-cyan-200">
                  <ShieldCheck className="w-4 h-4 text-[#0097B2]" />
                  <span>Google Business Profile Integration Note</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  You can connect your live Google Business Profile immediately after onboarding. Completing this profile provides the local business context needed for genuine AI review drafts.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: GOALS & OFFERINGS */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-heading font-extrabold text-base text-white">Services & Growth Objectives</h3>
                <p className="text-xs text-slate-400">These details guide the AI Copilot and Content Generator.</p>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Core Services or Products (Comma-separated)
                </label>
                <input
                  type="text"
                  value={servicesInput}
                  onChange={(e) => setServicesInput(e.target.value)}
                  placeholder="e.g. Search Engine Optimization, Web Development, Meta Ads, WhatsApp Automation"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Adding at least 3 services earns +8 points in your Profile Audit.</span>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Brief Business Overview / Bio (Optional)
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell customers what sets your business apart..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Primary Growth Goal *
                </label>
                <select
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
                >
                  {GROWTH_GOALS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Ready to Unlock Growth OS</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Upon completion, your profile will be securely saved to the database, and your 10 SaaS modules will unlock with a personalized health audit.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#0097B2]/20 transition cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#0097B2] to-cyan-500 hover:from-[#007a91] hover:to-cyan-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#0097B2]/30 transition cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Saving to Database...</span>
                ) : (
                  <>
                    <span>Complete Setup & Unlock Workspace</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
