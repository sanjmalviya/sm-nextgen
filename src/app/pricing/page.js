"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function Pricing() {
  const cursorRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  
  // Sanity State
  const [sanityPricing, setSanityPricing] = useState({
    entry: [],
    core: [],
    growth: [],
    finance: []
  });

  const toggleFaq = (i) => {
    setActiveFaq(activeFaq === i ? null : i);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const leadMsg = `*New Free Growth Audit Request* 📈\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Business Type:* ${formData.businessType}\n*Monthly Budget:* ${formData.budget}\n\nPlease review my details and schedule the audit.`;
    setTimeout(() => {
      window.open(getWhatsAppLink(leadMsg), "_blank");
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", businessType: "", budget: "" });
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Mouse Glow Logic (Optimized with requestAnimationFrame)
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // Sanity Fetch Logic
    const PROJECT_ID = "y31b2jo0";
    const DATASET = "production";
    const QUERY = encodeURIComponent('*[_type == "pricing"]{title, category, badge, badgeIcon, "imageUrl": cardImage.asset->url, price, billingCycle, description, features, buttonText, buttonLink, isPopular}');
    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
      .then(res => res.json())
      .then(({ result }) => {
        if (!result || result.length === 0) return;

        let fetchedData = { entry: [], core: [], growth: [], finance: [] };
        
        result.forEach(pkg => {
          if (fetchedData[pkg.category]) {
            fetchedData[pkg.category].push(pkg);
          }
        });

        setSanityPricing(fetchedData);
      })
      .catch(err => console.error("Sanity Fetch Error:", err));

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Helper function to render dynamic sanity cards matching the new premium UI
  const renderDynamicCards = (packages) => {
    return packages.map((pkg, index) => {
      let themeColor = 'text-[#0097B2]'; 
      let borderColor = 'border-[#0097B2]/20';
      let btnClass = 'bg-white text-[#0097B2] border border-[#0097B2] hover:bg-[#0097B2] hover:text-white';
      let featureIconColor = 'text-[#0097B2]';
      let cardBg = 'bg-white dark:bg-[#11325B]';
      let textColor = 'text-[#0B2545] dark:text-white';
      
      if(pkg.category === 'finance') { 
        themeColor = 'text-green-500'; 
        borderColor = 'border-green-500/20'; 
        btnClass = 'bg-white text-green-600 border border-green-500 hover:bg-green-600 hover:text-white'; 
        featureIconColor = 'text-green-500'; 
      }
      if(pkg.category === 'growth' || pkg.isPopular) { 
        cardBg = 'bg-[#0B2545] border-2 border-[#0097B2]'; 
        textColor = 'text-white';
        btnClass = 'bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545]'; 
      }

      let cardClass = `relative rounded-[2rem] p-8 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl isolate border ${borderColor} ${cardBg}`;
      let titleClass = `text-2xl font-bold mb-2 ${textColor}`;

      return (
        <div key={index} className={cardClass}>
          {pkg.isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#0097B2] text-white text-[10px] font-bold px-6 py-1.5 rounded-b-xl shadow-md uppercase tracking-widest z-20 whitespace-nowrap">
              ⭐ Most Recommended
            </div>
          )}
          {pkg.badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 w-max ${pkg.isPopular ? 'bg-white/10 text-white mt-4' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300'}`}>
              <i className={pkg.badgeIcon || 'fas fa-star'}></i> {pkg.badge}
            </span>
          )}
          
          <div className="flex-grow">
            <h3 className={titleClass}>{pkg.title}</h3>
            <p className={`text-sm mb-6 ${pkg.isPopular ? 'text-[#E6EEF2]/80' : 'text-gray-600 dark:text-[#E6EEF2]/70'}`}>{pkg.description}</p>
            
            <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
              <span className={`text-4xl font-black ${pkg.isPopular ? 'text-white' : themeColor}`}>₹{pkg.price}</span>
              <span className={`text-sm font-medium ${pkg.isPopular ? 'text-[#E6EEF2]/60' : 'text-gray-500'}`}>{pkg.billingCycle}</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {pkg.features && pkg.features.map((f, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm font-medium ${pkg.isPopular ? 'text-[#E6EEF2]' : 'text-gray-700 dark:text-[#E6EEF2]/90'}`}>
                  <i className={`fas fa-check mt-1 shadow-sm ${featureIconColor}`}></i> <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto">
            <a href={pkg.buttonLink} className={`block w-full py-4 text-center rounded-xl transition-all shadow-md font-bold ${btnClass}`}>
              {pkg.buttonText}
            </a>
          </div>
        </div>
      );
    });
  };

  const faqsData = [
    { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, Net Banking, and direct NEFT/RTGS bank transfers. For international clients, we process payments via Stripe or Wire Transfer." },
    { q: "Can I upgrade my plan later?", a: "Absolutely. As your business grows, your needs will change. You can upgrade your plan at any time, and we will pro-rate the billing for that month." },
    { q: "Do plans include ad spend?", a: "No. The pricing reflects our agency retainer for strategy, management, content creation, and automation. The actual Ad Spend is paid directly by you to Google, Meta, or LinkedIn." },
    { q: "Is there a minimum contract period?", a: "Our Starter and Core marketing plans operate on a month-to-month basis with no lock-in. For advanced Growth and Custom Enterprise setups involving heavy automation architecture, we recommend a 3-month initial commitment to see true compounding ROI." }
  ];

  return (
    <>
      <Head>
        <title>Pricing & Plans | SM NextGen</title>
        <meta name="description" content="Transparent pricing for modern growth. Choose marketing, AI automation, and financial compliance packages tailored to your business stage." />
      </Head>

      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300 font-body text-[#0B2545] dark:text-[#E6EEF2] overflow-x-hidden selection:bg-[#0097B2] selection:text-white relative">
        
        {/* --- GLOBAL CURSOR GLOW --- */}
        <div 
          ref={cursorRef} 
          className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/20 dark:bg-[#0097B2]/15 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten"
          style={{ willChange: 'transform' }}
        ></div>

        {/* 1️⃣ HERO SECTION (Pricing Intro) */}
        <section className="relative pt-40 pb-20 bg-[#0B2545] text-center px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0097B2] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
              Transparent Pricing.<br />
              <span className="text-[#0097B2]">Scale Without Surprises.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E6EEF2]/80 mb-10 leading-relaxed font-body max-w-2xl font-light">
              Choose the growth system that fits your stage — from starter marketing support to advanced AI automation and corporate financial operations.
            </p>
            
            <button onClick={() => scrollToSection('growth')} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-colors text-sm uppercase tracking-widest mb-8 backdrop-blur-sm flex items-center gap-2">
              Compare Plans <i className="fas fa-arrow-down"></i>
            </button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-[#E6EEF2]/70">
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> No hidden agency fees</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/30"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> Transparent monthly retainers</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/30"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> Flexible upgrade options</span>
            </div>
          </div>
        </section>

        {/* 2️⃣ CATEGORY NAVIGATION (SaaS Tab UX) */}
        <section className="py-12 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 relative z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button onClick={() => scrollToSection('starter')} className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 rounded-2xl hover:border-[#0097B2] hover:shadow-md transition-all group">
                <i className="fas fa-seedling text-2xl text-gray-400 group-hover:text-[#0097B2] mb-3 transition-colors"></i>
                <span className="font-bold text-[#0B2545] dark:text-white mb-1">Starter</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider hidden sm:block">For Early Stage</span>
              </button>
              
              <button onClick={() => scrollToSection('core')} className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 rounded-2xl hover:border-[#0097B2] hover:shadow-md transition-all group">
                <i className="fas fa-layer-group text-2xl text-gray-400 group-hover:text-[#0097B2] mb-3 transition-colors"></i>
                <span className="font-bold text-[#0B2545] dark:text-white mb-1">Core</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider hidden sm:block">Consistent Systems</span>
              </button>
              
              <button onClick={() => scrollToSection('growth')} className="flex flex-col items-center justify-center p-6 bg-[#0B2545] dark:bg-[#11325B] border-2 border-[#0097B2] rounded-2xl hover:shadow-lg hover:shadow-[#0097B2]/20 transition-all transform hover:-translate-y-1">
                <i className="fas fa-rocket text-2xl text-[#0097B2] mb-3"></i>
                <span className="font-bold text-white mb-1">Growth</span>
                <span className="text-[10px] text-[#E6EEF2]/70 uppercase tracking-wider hidden sm:block">Aggressive Scale</span>
              </button>
              
              <button onClick={() => scrollToSection('finance')} className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 rounded-2xl hover:border-green-500 hover:shadow-md transition-all group">
                <i className="fas fa-balance-scale text-2xl text-gray-400 group-hover:text-green-500 mb-3 transition-colors"></i>
                <span className="font-bold text-[#0B2545] dark:text-white mb-1">Finance & Auto</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider hidden sm:block">Operations Support</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3️⃣ ENTRY / STARTER PACKAGES */}
        <section id="starter" className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Starter Packages</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 max-w-2xl mx-auto">Best for new businesses looking to establish a professional online presence and build initial traction.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* STATIC STARTER */}
              <div className="relative bg-white dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 flex flex-col group">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-bold mb-4 w-max">
                  <i className="fas fa-seedling"></i> Low Commitment
                </span>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Digital Starter</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Gets your brand active immediately.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                  <span className="text-4xl font-black text-[#0097B2]">₹4,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> Social Media (1 Platform)</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> 8 Curated Posts / Month</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> Basic Profile Optimization</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I want to subscribe to the Digital Starter plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl border border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors shadow-sm">
                  Get Started
                </a>
              </div>

              <div className="relative bg-white dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 flex flex-col group">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-bold mb-4 w-max">
                  <i className="fas fa-palette"></i> Professional Identity
                </span>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Brand Presence</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Builds trust with consistent visuals.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                  <span className="text-4xl font-black text-[#0097B2]">₹6,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> 12 High-Quality Posts</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> 2 Short Form Videos (Reels)</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> Monthly Performance Report</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I want to subscribe to the Brand Presence plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl bg-[#0097B2]/10 text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors shadow-sm">
                  Build Brand
                </a>
              </div>

              {/* DYNAMIC SANITY RENDER */}
              {renderDynamicCards(sanityPricing.entry)}
            </div>
          </div>
        </section>

        {/* 4️⃣ CORE BUSINESS PACKAGES */}
        <section id="core" className="py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Core Systems</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Stable, recurring growth architectures for operating businesses.</p>
            </div>

            {/* Value Highlight Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm font-bold text-gray-500 dark:text-gray-400">
              <span className="bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full"><i className="fas fa-check text-[#0097B2] mr-2"></i> Multi-platform Marketing</span>
              <span className="bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full"><i className="fas fa-check text-[#0097B2] mr-2"></i> Content & SEO</span>
              <span className="bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full"><i className="fas fa-check text-[#0097B2] mr-2"></i> Strategy Support</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative bg-[#F8FAFC] dark:bg-[#11325B] rounded-[2rem] p-10 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 flex flex-col group">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/5 text-[#0B2545] dark:text-white text-xs font-bold mb-4 w-max shadow-sm">
                  <i className="fas fa-building text-[#0097B2]"></i> Foundation
                </span>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Business Starter</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Multi-platform presence + SEO basics.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <span className="text-4xl font-black text-[#0B2545] dark:text-white">₹12,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> <strong>2 Platforms Managed</strong></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> 16 Posts + 4 Video Reels</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> Foundational On-Page SEO</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> Monthly Review Reporting</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I want to subscribe to the Business Starter plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  Setup Foundation
                </a>
              </div>

              <div className="relative bg-[#F8FAFC] dark:bg-[#11325B] rounded-[2rem] p-10 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:shadow-xl transition-all duration-300 flex flex-col group">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/5 text-[#0B2545] dark:text-white text-xs font-bold mb-4 w-max shadow-sm">
                  <i className="fas fa-chart-bar text-[#0097B2]"></i> High ROI
                </span>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Marketing Growth</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Combines Organic Content + Paid Visibility.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <span className="text-4xl font-black text-[#0B2545] dark:text-white">₹19,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> 18 Posts + 6 Video Reels</li>
                  <li className="flex items-start gap-3 text-sm font-bold text-[#0B2545] dark:text-white"><i className="fas fa-bullhorn text-[#0097B2] mt-1 shadow-sm"></i> Meta & Google Ads Mgmt</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> Ad Creative Development</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> Advanced Audience Targeting</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I want to subscribe to the Marketing Growth plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] text-white font-bold transition-all shadow-md">
                  Scale Operations
                </a>
              </div>

              {renderDynamicCards(sanityPricing.core)}
            </div>
          </div>
        </section>

        {/* 5️⃣ GROWTH PACKAGES (MAIN CONVERSION AREA) */}
        <section id="growth" className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Growth Automation</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Aggressive full-funnel scaling strategies backed by AI integration.</p>
            </div>

            {/* Comparison Highlights */}
            <div className="hidden lg:flex justify-center items-center gap-8 mb-12 bg-white dark:bg-[#11325B] py-4 px-8 rounded-full shadow-sm max-w-3xl mx-auto border border-gray-100 dark:border-white/10 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]">
              <span><i className="fas fa-layer-group text-gray-400 mr-2"></i> Multi-Platform</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span><i className="fas fa-bullseye text-[#0097B2] mr-2"></i> Advanced Ads</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span><i className="fas fa-robot text-purple-500 mr-2"></i> AI Auto Support</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              
              {/* Growth Lite */}
              <div className="bg-white dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] transition-all flex flex-col h-full lg:h-[95%]">
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-1">Growth Lite</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/60 mb-6">High volume content.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                  <span className="text-3xl font-black text-[#0B2545] dark:text-white">₹24,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-gray-400 mt-1"></i> 20 Posts + 8 Reels</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-gray-400 mt-1"></i> Meta Ads Management</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-gray-400 mt-1"></i> Monthly SEO Updates</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I'm interested in the Growth Lite plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Select Lite</a>
              </div>

              {/* Growth Core (Hero Pricing Card) */}
              <div className="bg-[#0B2545] dark:bg-[#071A30] rounded-[2.5rem] p-10 shadow-2xl border-2 border-[#0097B2] transform hover:-translate-y-2 transition-all flex flex-col relative isolate z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#0097B2] text-white text-[10px] font-bold px-6 py-2 rounded-b-xl shadow-lg uppercase tracking-widest whitespace-nowrap z-20">
                  ⭐ Most Recommended
                </div>
                <div className="absolute inset-0 bg-[#0097B2]/5 rounded-[2.5rem] z-0"></div>
                
                <div className="relative z-10 mt-4">
                  <h3 className="text-2xl font-black text-white mb-2">Growth Core</h3>
                  <p className="text-sm text-[#E6EEF2]/70 mb-6">Complete funnel & AI pipeline.</p>
                  <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10">
                    <span className="text-5xl font-black text-white">₹34,999</span>
                    <span className="text-sm font-medium text-[#E6EEF2]/50">/mo</span>
                  </div>
                  <ul className="space-y-5 mb-10 flex-grow">
                    <li className="flex items-start gap-3 text-sm font-medium text-[#E6EEF2]"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> <strong>3 Social Platforms Managed</strong></li>
                    <li className="flex items-start gap-3 text-sm font-medium text-[#E6EEF2]"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> 24 Posts + 10 High-End Reels</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-white"><i className="fas fa-bullseye text-[#0097B2] mt-1 shadow-sm"></i> Omnichannel (Meta + Google) Ads</li>
                    <li className="flex items-start gap-3 text-sm font-medium text-[#E6EEF2]"><i className="fas fa-robot text-purple-400 mt-1 shadow-sm"></i> <strong>Email / WhatsApp Auto-Nurture</strong></li>
                    <li className="flex items-start gap-3 text-sm font-medium text-[#E6EEF2]"><i className="fas fa-check text-[#0097B2] mt-1 shadow-sm"></i> Bi-Weekly Consulting Call</li>
                  </ul>
                  <a href={getWhatsAppLink("Hi SM NextGen, I want to deploy the Growth Core system.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-extrabold transition-all shadow-[0_5px_20px_rgba(0,151,178,0.4)]">
                    Deploy Growth Core
                  </a>
                </div>
              </div>

              {/* Growth Scale */}
              <div className="bg-white dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-[#0097B2] transition-all flex flex-col h-full lg:h-[95%]">
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-1">Growth Scale</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/60 mb-6">Aggressive digital dominance.</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
                  <span className="text-3xl font-black text-[#0B2545] dark:text-white">₹49,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-[#0097B2] mt-1"></i> 28 Posts + 12 Reels</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-filter text-[#0097B2] mt-1"></i> <strong>Landing Page / Funnel Design</strong></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-cogs text-[#0097B2] mt-1"></i> Advanced Lead Gen System</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I'm interested in the Growth Scale plan.")} target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Select Scale</a>
              </div>

              {renderDynamicCards(sanityPricing.growth)}
            </div>
          </div>
        </section>

        {/* 6️⃣ FINANCE & AUTOMATION PACKAGES */}
        <section id="finance" className="py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Finance & Automation Add-ons</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Support your growth with robust financial systems and intelligent AI operational tools.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-green-500 transition-all flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Finance Core</h3>
                  <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-lg"><i className="fas fa-file-invoice-dollar"></i></div>
                </div>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <span className="text-3xl font-black text-green-600">₹3,999</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-green-500 mt-1"></i> Accounting & Bookkeeping</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-green-500 mt-1"></i> GST Registration & Filing</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-green-500 mt-1"></i> Basic MIS Reporting</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I need Finance Core setup.")} target="_blank" rel="noreferrer" className="block w-full py-3 text-center rounded-xl border border-green-500 text-green-600 font-bold hover:bg-green-600 hover:text-white transition-colors">Add Finance</a>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#11325B] rounded-[2rem] p-8 shadow-sm border border-gray-200 dark:border-white/10 hover:border-purple-500 transition-all flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Auto Start <span className="text-[10px] bg-purple-500/10 text-purple-600 px-2 py-1 rounded ml-2 uppercase tracking-wide">One-Time</span></h3>
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center text-lg"><i className="fas fa-robot"></i></div>
                </div>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <span className="text-3xl font-black text-purple-600">₹14,999</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-purple-500 mt-1"></i> CRM Setup & Migration</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-purple-500 mt-1"></i> Email & WhatsApp Auto Drip</li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90"><i className="fas fa-check text-purple-500 mt-1"></i> Business Process Zapier Auto</li>
                </ul>
                <a href={getWhatsAppLink("Hi SM NextGen, I want to integrate Auto Start.")} target="_blank" rel="noreferrer" className="block w-full py-3 text-center rounded-xl border border-purple-500 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-colors">Add Automation</a>
              </div>
              
              {renderDynamicCards(sanityPricing.finance)}
            </div>
          </div>
        </section>

        {/* 7️⃣ VALUE COMPARISON STRIP */}
        <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-center text-[#0B2545] dark:text-white mb-10">Why Our Pricing Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 text-center">
                <i className="fas fa-file-contract text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Transparent Retainers</h4>
              </div>
              <div className="bg-white dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 text-center">
                <i className="fas fa-eye-slash text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">No Hidden Agency Fees</h4>
              </div>
              <div className="bg-white dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 text-center">
                <i className="fas fa-expand-arrows-alt text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Flexible Scaling Plans</h4>
              </div>
              <div className="bg-white dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 text-center">
                <i className="fas fa-user-shield text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Dedicated Growth Support</h4>
              </div>
            </div>
          </div>
        </section>

        {/* 8️⃣ TESTIMONIALS SECTION */}
        <section className="py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">What Founders Say</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Realistic results from actual growing businesses.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col">
                <div className="flex text-yellow-400 mb-4 text-xs"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-8 flex-grow">&quot;SM NextGen helped us structure our marketing and automation systems without overcomplicating things. The transparent pricing was a huge relief.&quot;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-sm">A</div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Aman D.</h4>
                    <p className="text-xs text-[#0097B2]">Founder, E-commerce</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col">
                <div className="flex text-yellow-400 mb-4 text-xs"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-8 flex-grow">&quot;We upgraded from Starter to Growth in 3 months. The lead generation pipelines they built literally run our entire B2B sales floor now.&quot;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">R</div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Rohan K.</h4>
                    <p className="text-xs text-[#0097B2]">Director, SaaS Startup</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col">
                <div className="flex text-yellow-400 mb-4 text-xs"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-8 flex-grow">&quot;Having marketing, AI setup, and GST accounting in one package eliminated the headache of managing three different agencies.&quot;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">N</div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Neha P.</h4>
                    <p className="text-xs text-[#0097B2]">CEO, Professional Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9️⃣ FAQ SECTION */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "What payment methods do you accept?", a: "We accept UPI, Credit/Debit cards, Net Banking, and direct NEFT/RTGS transfers. For international businesses, we accept payments via Stripe and Wire Transfer." },
                { q: "Can I upgrade my plan later?", a: "Yes. Our systems are built to scale. You can seamlessly upgrade from Starter to Growth as your operations expand, and we will pro-rate your billing." },
                { q: "Do plans include ad spend?", a: "No. The pricing reflects our agency retainer for strategy, management, and automation. Ad Spend is paid directly by you to the advertising platforms (Google/Meta)." },
                { q: "Is there a minimum contract period?", a: "Starter and Core plans are month-to-month. For advanced Growth and Custom architectures, we suggest a 3-month initial commitment to let compounding systems yield true ROI." }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                  >
                    {faq.q}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </button>
                  <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1️⃣0️⃣ FINAL CTA */}
        <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">Not Sure Which Plan Fits Your Business?</h2>
            <p className="text-xl text-[#E6EEF2] mb-12 font-body max-w-2xl mx-auto font-light leading-relaxed">Book a quick strategy call and we will recommend the absolute best growth system for your current stage and budget.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Book Strategy Call <i className="fas fa-arrow-up transform rotate-45"></i>
              </a>
              <a href={getWhatsAppLink("Hi SM NextGen, I need help deciding on a plan.")} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FLOATING WHATSAPP BUTTON */}
        <div className="fixed bottom-6 right-6 z-[100]">
          <a href={getWhatsAppLink("Hi SM NextGen, I have a question about your pricing plans.")} target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform relative group z-[100]">
            <i className="fab fa-whatsapp"></i>
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-[#0B2545] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">Chat With Our Team</span>
          </a>
        </div>

      </main>
    </>
  );
}