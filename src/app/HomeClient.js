// file: app/HomeClient.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// --- PREMIUM SLIDER IMAGES (All 32 Services Images) ---
const HERO_IMAGES = [
  // MARKETING
  "/images/services/brand-strategy-positioning.png",
  "/images/services/search-engine-optimization-seo.png",
  "/images/services/performance-advertising.png",
  "/images/services/social-media-marketing.png",
  "/images/services/content-marketing.png",
  "/images/services/lead-generation-systems.png",
  "/images/services/sales-funnel-conversion.png",
  "/images/services/email-marketing-automation.png",
  // TECH DEVELOPMENT
  "/images/services/website-development.png",
  "/images/services/e-commerce-development.png",
  "/images/services/funnel-landing-page-development.png",
  "/images/services/web-app-development.png",
  "/images/services/mobile-app-development.png",
  "/images/services/automation-integration.png",
  "/images/services/ui-ux-product-design.png",
  "/images/services/website-maintenance-support.png",
  // AI AUTOMATION
  "/images/services/ai-business-automation-systems.png",
  "/images/services/ai-marketing-automation.png",
  "/images/services/ai-lead-generation-systems.png",
  "/images/services/ai-chatbots-conversational-ai.png",
  "/images/services/whatsapp-automation-systems.png",
  "/images/services/ai-content-creation-systems.png",
  "/images/services/ai-data-analytics-business-intelligence.png",
  "/images/services/custom-ai-tools-integrations.png",
  // LEGAL & FINANCE
  "/images/services/business-registration-services.png",
  "/images/services/gst-services.png",
  "/images/services/income-tax-services.png",
  "/images/services/accounting-bookkeeping.png",
  "/images/services/payroll-employee-compliance.png",
  "/images/services/business-compliance-management.png",
  "/images/services/trademark-intellectual-property.png",
  "/images/services/financial-consulting-advisory.png"
];

export default function HomeClient() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const cursorRef = useRef(null);

  // Form State for Inline Lead Capture
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  const words = ["the smart way.", "with AI Automation.", "with Data Science.", "with Robust Tech."];

  // --- MOUSE GLOW LOGIC (Size & Brightness Reduced) ---
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          // Changed offset from 250 to 150 because we reduced size to 300px
          cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // --- BACKGROUND SLIDER LOGIC ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Thoda fast kiya hai smooth feel ke liye
    return () => clearInterval(slideInterval);
  }, []);

  // --- TYPEWRITER LOGIC ---
  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypewriterText(
          currentWord.substring(0, typewriterText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, wordIndex]);

  // --- SUBMIT FORM (EMAIL + WHATSAPP) ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "New Lead from SM NextGen Home Page! 🚀",
          from_name: "SM NextGen Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "Business Type": formData.businessType,
          "Budget": formData.budget,
        })
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result);

      if (result.success) {
        const leadMsg = `*New Free Growth Audit Request* 📈\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Business Type:* ${formData.businessType}\n*Monthly Budget:* ${formData.budget}\n\nPlease review my details and schedule the audit.`;
        
        setTimeout(() => {
          window.open(getWhatsAppLink(leadMsg), "_blank");
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", businessType: "", budget: "" });
        }, 1000);
      } else {
        console.error("Web3Forms Error:", result);
        alert("Mail system error: " + result.message);
        setSubmitted(false);
      }

    } catch (error) {
      console.error("Error sending lead:", error);
      alert("Network error. Adblocker ya internet check karein.");
      setSubmitted(false);
    }
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "What services does SM NextGen offer?", a: "We provide an integrated growth ecosystem combining Data-Driven Digital Marketing, Custom Tech Development (Web & Apps), AI Automation, and reliable Legal & Financial compliance. We handle your scale from generating leads to managing your accounting." },
    { q: "How can AI automation help my business?", a: "AI systems reduce repetitive manual work. From 24/7 autonomous lead qualification chatbots to smart CRM workflows, AI allows your team to focus on high-level strategy and sales, significantly lowering operational costs." },
    { q: "Do you work with international clients?", a: "Yes. We support startups, e-commerce brands, and SaaS companies globally, providing digital marketing, tech infrastructure, and cross-border financial advisory." },
    { q: "How long before marketing results appear?", a: "Performance Ads generate inbound leads within weeks. However, foundational growth strategies like SEO, App deployments, and Brand Positioning build compounding organic equity over 3 to 6 months." }
  ];

  return (
    <>
      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white w-full overflow-x-hidden transition-colors duration-300 relative">
        
        {/* --- GLOBAL CURSOR GLOW (Size & Opacity Reduced) --- */}
        <div 
          ref={cursorRef} 
          className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] bg-[#0097B2]/15 dark:bg-[#0097B2]/10 rounded-full blur-[100px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten"
          style={{ willChange: 'transform' }}
        ></div>

        {/* --- INLINE CSS FOR ANIMATIONS & SLIDER --- */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}} />

        {/* 1️⃣ HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#071A30] text-center px-4 sm:px-6 lg:px-8 z-10 overflow-hidden border-b border-white/5">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,#11325B,transparent_70%)] opacity-80 z-0"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-sm">
                Let's Grow Your Business <br className="hidden md:block" />
                <span className="text-[#0097B2] text-3xl sm:text-4xl md:text-6xl lg:text-7xl min-h-[40px] md:min-h-[90px] block mt-1 md:mt-2">{typewriterText}<span className="animate-blink font-light opacity-50 text-white">|</span></span>
              </h1>
              
              <p className="text-base md:text-xl text-[#E6EEF2]/80 mb-8 md:mb-10 leading-relaxed font-body max-w-2xl mx-auto font-light">
                SM NextGen helps businesses scale through data-driven marketing, robust technical infrastructure, intelligent automation systems, and reliable legal &amp; financial support.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.4)] transition-all duration-300 hover:-translate-y-1 text-base md:text-lg relative z-20">
                Get Free Growth Audit
              </a>
              <a href={getWhatsAppLink("Hi SM NextGen, I'd like to book a Strategy Call.")} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all text-base md:text-lg relative z-20">
                Book Strategy Call
              </a>
            </div>

            {/* 1.5️⃣ MODERN 3D SLIDER */}
            <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center perspective-[1200px] opacity-0 animate-fade-in-up mt-4" style={{ animationDelay: '0.5s' }}>
              {HERO_IMAGES.map((img, index) => {
                
                // PERFECT CIRCULAR MATH FOR 32 IMAGES
                let offset = index - currentSlide;
                if (offset < -Math.floor(HERO_IMAGES.length / 2)) offset += HERO_IMAGES.length;
                if (offset > Math.floor(HERO_IMAGES.length / 2)) offset -= HERO_IMAGES.length;

                let zIndex = 50 - Math.abs(offset);
                let scale = offset === 0 ? 1 : 0.85;
                let translateX = offset * 40; // 40% shift left/right
                let rotateY = offset * -20; // 20deg rotation
                
                // Sirf current aur uske aas-paas wale (left/right) dikhenge
                let opacity = Math.abs(offset) > 1 ? 0 : (offset === 0 ? 1 : 0.6);

                return (
                  <div 
                    key={index} 
                    className="absolute w-[85%] md:w-[65%] h-full transition-all duration-700 ease-in-out"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex: zIndex,
                      opacity: opacity,
                      pointerEvents: Math.abs(offset) > 1 ? "none" : "auto", // Hidden items won't block clicks
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`SM NextGen Service ${index}`} 
                      className="w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" 
                    />
                    {offset === 0 && <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 to-transparent rounded-3xl"></div>}
                  </div>
                );
              })}
            </div>

            <div className="text-center text-[10px] md:text-sm font-medium text-[#E6EEF2]/60 uppercase tracking-widest mt-12 px-4 leading-relaxed bg-white/5 py-2 px-6 rounded-full border border-white/10 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <i className="fas fa-shield-alt text-[#0097B2] mr-1.5"></i> Trusted by startups, MSMEs, and growing businesses.
            </div>
          </div>
        </section>

        {/* 2️⃣ TRUST / VALUE STRIP */}
        <section className="py-6 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 md:gap-6 text-xs md:text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]/90">
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> ROI-focused strategies</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Custom Tech & Apps</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> AI automation systems</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Dedicated support</span>
            </div>
          </div>
        </section>

        {/* 3️⃣ CORE SERVICES SECTION */}
        <section id="services" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto relative z-10 opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Everything Your Business Needs to Grow</h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed">SM NextGen combines marketing, tech development, AI automation, and business compliance into one integrated growth system.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {/* Marketing Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f472b6] to-[#db2777] text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-pink-500/30"><i className="fas fa-chart-line"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">Digital Marketing</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">Drive targeted traffic, acquire customers profitably, and dominate your niche search rankings.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> SEO & Content</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> Performance Ads</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> Social Media</li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-pink-600 dark:text-pink-400 group-hover:text-pink-500 transition-colors mt-auto">
                    Explore Marketing <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* Tech Development Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#60a5fa] to-[#2563eb] text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/30"><i className="fas fa-laptop-code"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">Tech Development</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">Build robust, high-performance websites, scalable web applications, and digital infrastructure.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-blue-500"></i> Web Development</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-blue-500"></i> App Development</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-blue-500"></i> E-Commerce Stores</li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors mt-auto">
                    Explore Tech <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* AI Automation Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#9333ea] text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-purple-500/30"><i className="fas fa-robot"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">AI Automation</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">Reduce manual tasks and scale operations flawlessly with custom conversational AI and workflows.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> AI Chatbots</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> CRM Automation</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> WhatsApp Bots</li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors mt-auto">
                    Explore Automation <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* Legal & Finance Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-[#10B981]/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#34D399] to-[#059669] text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-[#059669]/30"><i className="fas fa-balance-scale"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">Legal &amp; Finance</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6 flex-grow">Build a bulletproof operational foundation, manage cash flows, and stay completely compliant.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-[#10B981]"></i> GST & Tax</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-[#10B981]"></i> Bookkeeping</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm font-medium flex items-center gap-3"><i className="fas fa-angle-right text-[#10B981]"></i> Registrations</li>
                  </ul>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-[#10B981] dark:text-[#34D399] group-hover:text-[#059669] transition-colors mt-auto">
                    Explore Compliance <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4️⃣ HOW SM NEXTGEN WORKS (PROCESS) */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Our Growth Process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#0097B2]/30 to-transparent -z-10"></div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-3xl relative shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 md:mb-6 shadow-lg shadow-[#0097B2]/30">1</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2 md:mb-3">Discovery</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Understanding your business models, unit economics, and primary growth goals.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-3xl relative shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 md:mb-6 shadow-lg shadow-[#0097B2]/30">2</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2 md:mb-3">Strategy</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Designing a tailored, data-backed marketing and automation roadmap.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-3xl relative shadow-sm transform md:-translate-y-2 border-[#0097B2]/30">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 md:mb-6 shadow-lg shadow-[#0097B2]/30">3</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2 md:mb-3">Implementation</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Launching targeted campaigns, automation workflows, and technical systems.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-3xl relative shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 md:mb-6 shadow-lg shadow-[#0097B2]/30">4</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2 md:mb-3">Optimization</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Scaling results continuously using real-time data and performance insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ GROWTH SYSTEM VISUAL (UPDATED WITH TECH) */}
        <section className="py-16 md:py-24 bg-[#0B2545] text-white relative overflow-hidden border-y border-white/5 z-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 md:mb-16">How Our Growth System Works</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-16">
              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-mouse-pointer text-2xl md:text-3xl text-pink-400 mb-2 md:mb-3"></i>
                <h4 className="font-bold text-base md:text-lg">Traffic</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>
              
              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-users text-2xl md:text-3xl text-blue-400 mb-2 md:mb-3"></i>
                <h4 className="font-bold text-base md:text-lg">Leads</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-[#0097B2] p-5 md:p-6 rounded-2xl shadow-[0_0_20px_rgba(0,151,178,0.4)] flex-1 max-w-[220px] scale-100 md:scale-105">
                <i className="fas fa-cogs text-2xl md:text-3xl text-[#0097B2] mb-2 md:mb-3"></i>
                <h4 className="font-bold text-base md:text-lg">Automation</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-hand-holding-usd text-2xl md:text-3xl text-green-400 mb-2 md:mb-3"></i>
                <h4 className="font-bold text-base md:text-lg">Sales</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-rocket text-2xl md:text-3xl text-purple-400 mb-2 md:mb-3"></i>
                <h4 className="font-bold text-base md:text-lg">Scale</h4>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left max-w-6xl mx-auto">
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-[#0097B2] font-bold text-base md:text-lg mb-2 md:mb-3"><i className="fas fa-bullhorn mr-2"></i> Marketing</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Marketing and SEO strategies generate highly qualified inbound leads.</p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-[#0097B2] font-bold text-base md:text-lg mb-2 md:mb-3"><i className="fas fa-laptop-code mr-2"></i> Tech</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Robust web and app development ensures flawless user experience and conversion.</p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-[#0097B2] font-bold text-base md:text-lg mb-2 md:mb-3"><i className="fas fa-robot mr-2"></i> Automation</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Automation and AI chatbots naturally nurture and qualify prospects 24/7.</p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-[#0097B2] font-bold text-base md:text-lg mb-2 md:mb-3"><i className="fas fa-balance-scale mr-2"></i> Finance</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Finance systems and compliance tracking ensure complete operational stability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ INDUSTRIES WE SUPPORT */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#071A30] text-center transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-10 md:mb-12">Industries We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Ecommerce", icon: "fas fa-shopping-cart" },
                { name: "Startups", icon: "fas fa-rocket" },
                { name: "Real Estate", icon: "fas fa-building" },
                { name: "Healthcare", icon: "fas fa-heartbeat" },
                { name: "Education", icon: "fas fa-graduation-cap" },
                { name: "Local Businesses", icon: "fas fa-store" },
                { name: "SaaS", icon: "fas fa-cloud" },
                { name: "Professional Services", icon: "fas fa-user-tie" }
              ].map((ind, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 md:p-8 bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 rounded-2xl hover:border-[#0097B2] dark:hover:border-[#0097B2] hover:shadow-md hover:-translate-y-1 transition-all group relative z-10">
                  <i className={`${ind.icon} text-2xl md:text-3xl text-gray-400 group-hover:text-[#0097B2] mb-3 md:mb-4 transition-colors`}></i>
                  <span className="font-bold text-[#0B2545] dark:text-white text-sm md:text-base">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7️⃣ TESTIMONIALS SECTION (Horizontal Auto-Scrolling) */}
        <section className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-y border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">What Founders Say About SM NextGen</h2>
          </div>
          
          {/* Infinite Marquee Container */}
          <div className="flex overflow-hidden group w-full">
            <div className="animate-marquee gap-6 md:gap-8 pr-6 md:pr-8">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-6 md:gap-8">
                  <div className="w-[300px] md:w-[400px] bg-white dark:bg-[#162032] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10 hover:border-[#0097B2]/50 hover:-translate-y-1">
                    <div className="flex text-yellow-400 mb-3 md:mb-4 text-xs md:text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-4 md:mb-6 flex-grow leading-relaxed">&quot;They streamlined our ad spend and built automated CRM workflows. We are seeing much better operational stability and consistent lead flow now.&quot;</p>
                    <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold">R</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-xs md:text-sm">Rahul S.</h4>
                        <p className="text-[10px] md:text-xs text-[#0097B2] font-bold">Founder – Ecommerce Brand</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[300px] md:w-[400px] bg-white dark:bg-[#162032] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10 hover:border-[#0097B2]/50 hover:-translate-y-1">
                    <div className="flex text-yellow-400 mb-3 md:mb-4 text-xs md:text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-4 md:mb-6 flex-grow leading-relaxed">&quot;Getting our GST compliance and Virtual CFO services from the same team that runs our marketing has been a huge relief. Everything is connected.&quot;</p>
                    <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold">A</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-xs md:text-sm">Aditi M.</h4>
                        <p className="text-[10px] md:text-xs text-[#0097B2] font-bold">Director – B2B SaaS</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[300px] md:w-[400px] bg-white dark:bg-[#162032] p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10 hover:border-[#0097B2]/50 hover:-translate-y-1">
                    <div className="flex text-yellow-400 mb-3 md:mb-4 text-xs md:text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-4 md:mb-6 flex-grow leading-relaxed">&quot;The AI chatbot they deployed on our site handles 60% of our basic support queries, saving our human team hours of repetitive work every day.&quot;</p>
                    <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">K</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-xs md:text-sm">Karan V.</h4>
                        <p className="text-[10px] md:text-xs text-[#0097B2] font-bold">CEO – Professional Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8️⃣ PRICING / PLANS */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Growth Plans</h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-[#E6EEF2]/80">Scalable solutions tailored to your exact business stage.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Starter */}
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col transition-all duration-300 relative z-10 hover:-translate-y-2 hover:shadow-xl hover:border-[#0097B2]/30">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Starter</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For small businesses.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2] font-medium">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Web & Marketing</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Content Creation Setup</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Initial SEO Foundation</li>
                </ul>
                <Link href="/pricing" className="block w-full py-3 md:py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Request Custom Plan</Link>
              </div>
              
              {/* Growth - Highlighted */}
              <div className="bg-[#0B2545] p-6 md:p-8 rounded-3xl border-2 border-[#0097B2] shadow-[0_15px_40px_rgba(0,151,178,0.25)] flex flex-col transform md:-translate-y-4 relative isolate text-white hover:-translate-y-6 transition-transform z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 md:px-5 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md">Most Popular</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Growth</h3>
                <p className="text-sm text-[#E6EEF2]/80 mb-6">For scaling companies.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Performance Ads & SEO</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom App/Web Dev</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> CRM & Automation Setup</li>
                </ul>
                <Link href="/pricing" className="block w-full py-3 md:py-4 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Request Custom Plan</Link>
              </div>

              {/* Custom */}
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col transition-all duration-300 relative z-10 hover:-translate-y-2 hover:shadow-xl hover:border-[#0097B2]/30">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Custom</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For advanced systems.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2] font-medium">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Enterprise Level Tech</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom AI Integrations</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Dedicated Manager & CFO</li>
                </ul>
                <a href="#leadForm" className="block w-full py-3 md:py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Request Custom Plan</a>
              </div>
            </div>
          </div>
        </section>

        {/* 9️⃣ LEAD CAPTURE SECTION */}
        <section id="leadForm" className="py-16 md:py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-t border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white dark:bg-[#162032] rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col lg:flex-row relative z-10 hover:shadow-2xl transition-shadow duration-500">
              
              <div className="lg:w-5/12 bg-[#0B2545] p-8 md:p-10 text-white flex flex-col justify-center relative isolate">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0097B2]/20 mix-blend-overlay z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">Get Your Free Growth Consultation</h2>
                  <p className="text-[#E6EEF2]/80 text-sm mb-6 md:mb-8 leading-relaxed">Let's analyze your current business operations and design a custom tech and marketing roadmap.</p>
                  <div className="space-y-4 text-sm font-medium">
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> 30-Minute Strategy Call</div>
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> Tech &amp; Marketing Audit</div>
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> No Obligations</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-7/12 p-8 md:p-10 relative z-10">
                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="John Doe" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91 7073538077" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                        className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Business Type</label>
                        <select name="businessType" value={formData.businessType} onChange={handleFormChange} required 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition cursor-pointer relative z-20">
                          <option value="" disabled>Select</option>
                          <option value="SaaS/Tech">SaaS / Tech</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Local Business">Local Business</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Monthly Growth Budget</label>
                        <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition cursor-pointer relative z-20">
                          <option value="" disabled>Select</option>
                          <option value="Under 50k">Under ₹50,000</option>
                          <option value="50k - 2L">₹50,000 - ₹2 Lakhs</option>
                          <option value="2L+">₹2 Lakhs+</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] text-white font-bold py-3 md:py-4 rounded-xl transition-all shadow-md mt-4 text-sm uppercase tracking-wider relative z-20 hover:-translate-y-1">
                      Request Free Audit
                    </button>

                    <div className="mt-4 text-center">
                      <a href={getWhatsAppLink("Hi SM NextGen, I'm reaching out from your website.")} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0097B2] hover:underline flex items-center justify-center gap-2 relative z-20">
                        <i className="fab fa-whatsapp"></i> Chat With Our Team
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-16 h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                    <h4 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Request Received!</h4>
                    <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Connecting you to our WhatsApp to finalize your audit timing...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣1️⃣ FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4 md:mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300 relative z-20">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-base md:text-lg relative z-20"
                  >
                    {faq.q}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-white dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </button>
                  <div className={`px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base leading-relaxed relative z-20 ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1️⃣2️⃣ FINAL CTA */}
        <section className="relative py-20 md:py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-6xl font-heading font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">Ready to Grow Your Business the Smart Way?</h2>
            <p className="text-lg md:text-xl text-[#E6EEF2] mb-8 md:mb-12 font-body max-w-2xl mx-auto font-light leading-relaxed">Talk to our team and discover how marketing, custom tech, and business systems can help your business scale.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a href="#leadForm" className="px-8 py-4 md:py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] hover:scale-105 transition-all duration-300 text-base md:text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Book Strategy Call <i className="fas fa-arrow-up transform rotate-45"></i>
              </a>
              <a href={getWhatsAppLink("Hi SM NextGen, I am ready to scale my business. Let's talk.")} target="_blank" rel="noreferrer" className="px-8 py-4 md:py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-base md:text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
