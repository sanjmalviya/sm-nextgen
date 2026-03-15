"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function HowWeWork() {
  const cursorRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (i) => {
    setActiveFaq(activeFaq === i ? null : i);
  };

  useEffect(() => {
    // Spotlight Mouse Glow Logic (Hardware Accelerated)
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.opacity = '1';
          cursorRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
        });
      }
    };
    
    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  const faqs = [
    { q: "How long before results appear?", a: "It depends on the growth channel. Direct response Performance Advertising (Google/Meta) generates inbound leads within 2-4 weeks. However, foundational systems like SEO, Organic Content Marketing, and AI Automation setup typically take 3-6 months to build a compounding, scalable business moat." },
    { q: "Do you provide transparent reports?", a: "Yes. Transparency is a core pillar of the SM NextGen Growth OS™. You will receive access to a live Looker Studio or BI dashboard where you can track exact ad spends, Cost Per Acquisition (CAC), Return on Ad Spend (ROAS), and overall marketing performance in real-time." },
    { q: "Can I start with a small project?", a: "Absolutely. We don't believe in forcing long-term contracts before proving our value. You can begin with a standalone 'Discovery Audit' or a specific module like SEO or AI Lead Generation. As you see ROI, we can scale up to the full Growth OS™." },
    { q: "Do you work with international clients?", a: "Yes. While our headquarters are in India, we architect digital marketing campaigns, cross-border financial advisory, and custom AI software for B2B SaaS, E-commerce, and enterprise clients across the US, UK, Middle East, and APAC regions." },
    { q: "Will I have a dedicated account manager?", a: "Yes. Every client on our Growth and Custom Enterprise plans is assigned a dedicated Growth Strategist. They act as your Fractional CMO/CFO, ensuring that all marketing, automation, and legal deliverables are executed flawlessly." }
  ];

  return (
    <>
      <Head>
        <title>How We Work | The SM NextGen Growth OS™</title>
        <meta name="description" content="Discover the SM NextGen 4-step Growth OS™. We diagnose, strategize, build, and scale modern businesses using data-driven marketing, AI automation, and financial systems." />
      </Head>

      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] relative overflow-x-hidden pb-10 transition-colors duration-300">
        
        {/* --- DYNAMIC CURSOR SPOTLIGHT GLOW --- */}
        <div 
          ref={cursorRef} 
          className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/20 dark:bg-[#0097B2]/15 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten opacity-0 transition-opacity duration-300"
          style={{ willChange: 'transform' }}
        ></div>

        {/* 1️⃣ HERO SECTION (Refined & Clarified) */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#0B2545] text-center z-10 border-b border-white/5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-[#0097B2]/20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#E6EEF2]/80 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-ping"></span> The Blueprint
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
              The SM NextGen<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-purple-400">Growth OS™</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E6EEF2]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              A structured system to diagnose, build, and scale modern businesses globally using data-driven marketing, intelligent AI automation, and robust financial architectures.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-[#E6EEF2]/70 mb-12">
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> Data-Driven Strategy</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> Transparent Reporting</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check text-[#0097B2]"></i> Scalable Growth Systems</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <a href={getWhatsAppLink("Hi SM NextGen, I'm interested in the Free Growth Audit.")} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.4)] transition-all duration-300 hover:-translate-y-1 text-lg">
                Start With a Free Audit
              </a>
              <Link href="/services" className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-xl border border-white/20 transition-colors text-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* 2️⃣ FRAMEWORK OVERVIEW STRIP */}
        <section className="py-12 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 relative z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">Our 4-Step Growth Framework</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <i className="fas fa-search text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">1. Audit</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Identify gaps & opportunities.</p>
              </div>
              <div>
                <i className="fas fa-chess-knight text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">2. Strategy</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Define the growth roadmap.</p>
              </div>
              <div>
                <i className="fas fa-code-branch text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">3. Build</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Launch marketing & systems.</p>
              </div>
              <div>
                <i className="fas fa-rocket text-2xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white mb-1">4. Scale</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/60">Optimize profitable campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ TIMELINE SECTION (Upgraded Glassmorphism) */}
        <section className="relative py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              
            {/* Center Gradient Timeline Line (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0097B2] via-purple-500 to-[#0097B2] opacity-30 rounded-full z-0"></div>

            {/* STEP 1: Audit */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32 relative items-center group">
              <div className="md:text-right relative pl-12 md:pl-0 md:pr-12 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-6xl md:text-8xl font-black text-gray-200 dark:text-white/5 absolute -top-10 md:-top-16 md:right-4 left-12 md:left-auto -z-10 select-none transition-colors duration-500 group-hover:text-[#0097B2]/10">01</h3>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4 mt-2">Audit & Diagnosis</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base mb-6 leading-relaxed">
                  Before we build, we diagnose. We perform a rigorous, data-driven audit of your current digital footprint, unit economics, and sales leakage points. We identify exactly why you aren't growing at your full potential.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Competitor Spy</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">SWOT Analysis</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Financial Audit</span>
                </div>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0 z-20">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-[#0B2545] border-4 border-[#0097B2] shadow-[0_0_20px_rgba(0,151,178,0.4)] flex items-center justify-center text-[#0097B2] text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              
              <div className="pl-12 md:pl-12 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[#0097B2]/50 transition-all duration-300 relative overflow-hidden isolate">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#0097B2]"></div>
                  <h4 className="font-bold text-[10px] mb-4 uppercase tracking-widest text-[#0097B2] border-b border-gray-100 dark:border-white/10 pb-2">Client Deliverables</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90">
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>7-Point Audit Report:</strong> A comprehensive PDF identifying market gaps.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Revenue Leakage:</strong> Pinpointing exactly where you are losing money.</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 2: Strategy */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32 relative items-center group">
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0 z-20">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-[#0B2545] border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center text-purple-500 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chess-knight"></i>
                </div>
              </div>

              <div className="relative pl-12 md:pl-12 md:col-start-2 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-6xl md:text-8xl font-black text-gray-200 dark:text-white/5 absolute -top-10 md:-top-16 md:left-4 left-12 -z-10 select-none transition-colors duration-500 group-hover:text-purple-500/10">02</h3>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4 mt-2">Strategy Mapping</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base mb-6 leading-relaxed">
                  We don't do "random acts of marketing." We architect a scalable blueprint. We define your Ideal Customer Persona (ICP), craft the irresistible Offer, and design the precise AI automation funnel architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">User Personas</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Offer Creation</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Channel Selection</span>
                </div>
              </div>

              <div className="pl-12 md:pl-0 md:pr-12 md:col-start-1 md:row-start-1 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden isolate">
                  <div className="absolute top-0 right-0 w-1 h-full bg-purple-500 hidden md:block"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 md:hidden"></div>
                  <h4 className="font-bold text-[10px] mb-4 uppercase tracking-widest text-purple-500 border-b border-gray-100 dark:border-white/10 pb-2">Client Deliverables</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90">
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Growth Roadmap:</strong> A strict 90-Day Execution Plan.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Funnel Wireframes:</strong> Visual sketch of the buyer's journey.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Budget Allocation:</strong> Mathematical ad spend division.</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 3: Build */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32 relative items-center group">
              <div className="md:text-right relative pl-12 md:pl-0 md:pr-12 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-6xl md:text-8xl font-black text-gray-200 dark:text-white/5 absolute -top-10 md:-top-16 md:right-4 left-12 md:left-auto -z-10 select-none transition-colors duration-500 group-hover:text-green-500/10">03</h3>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4 mt-2">Build & Launch</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base mb-6 leading-relaxed">
                  The Engine Room. This is where we get our hands dirty. Our copywriters script the performance ads, designers create premium brand visuals, and our engineers connect the AI and CRM pipelines to handle scale.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Ad Creatives</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">HubSpot / Zapier</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Webflow / Next.js</span>
                </div>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0 z-20">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-[#0B2545] border-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center text-green-500 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-code-branch"></i>
                </div>
              </div>
              
              <div className="pl-12 md:pl-12 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-green-500/50 transition-all duration-300 relative overflow-hidden isolate">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <h4 className="font-bold text-[10px] mb-4 uppercase tracking-widest text-green-500 border-b border-gray-100 dark:border-white/10 pb-2">Client Deliverables</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-[#E6EEF2]/90">
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Campaign Launch:</strong> Ads, SEO, and Social go live.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i> <div><strong>Automation Live:</strong> CRM, Chatbots & Lead Flows Active.</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 4: Scale */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative items-center group">
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0 z-20">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0097B2] border-4 border-white dark:border-[#0B2545] shadow-[0_0_20px_rgba(0,151,178,0.6)] flex items-center justify-center text-white text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>

              <div className="relative pl-12 md:pl-12 md:col-start-2 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-6xl md:text-8xl font-black text-gray-200 dark:text-white/5 absolute -top-10 md:-top-16 md:left-4 left-12 -z-10 select-none transition-colors duration-500 group-hover:text-[#0097B2]/10">04</h3>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4 mt-2">Scale & Optimize</h2>
                <p className="text-gray-600 dark:text-[#E6EEF2]/80 text-sm md:text-base mb-6 leading-relaxed">
                  We don't "Set it and Forget it." We monitor campaigns daily. We ruthlessly kill losing ads, aggressively double down on winners, and utilize BigQuery analytics to push your revenue mathematically.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">A/B Testing</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Predictive Analytics</span>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">Looker Studio</span>
                </div>
              </div>

              <div className="pl-12 md:pl-0 md:pr-12 md:col-start-1 md:row-start-1 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-[#0B2545] dark:bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-[#0097B2]/30 shadow-2xl hover:shadow-[0_15px_40px_rgba(0,151,178,0.3)] hover:border-[#0097B2] transition-all duration-300 relative overflow-hidden isolate text-white">
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#0097B2] hidden md:block"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#0097B2] md:hidden"></div>
                  <h4 className="font-bold text-[10px] mb-4 uppercase tracking-widest text-[#0097B2] border-b border-white/10 pb-2">Client Deliverables</h4>
                  <ul className="space-y-4 text-sm font-medium text-[#E6EEF2]/90">
                    <li className="flex items-start"><i className="fas fa-check-circle text-[#0097B2] mr-3 mt-0.5 shrink-0"></i> <div><strong>Live Dashboards:</strong> Transparent, real-time data access.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-[#0097B2] mr-3 mt-0.5 shrink-0"></i> <div><strong>A/B Testing Loops:</strong> Constant algorithmic improvement.</div></li>
                    <li className="flex items-start"><i className="fas fa-check-circle text-[#0097B2] mr-3 mt-0.5 shrink-0"></i> <div><strong>Scaling ROI:</strong> Budget increases strictly tied to profit.</div></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4️⃣ VISUAL SYSTEM DIAGRAM (NEW) */}
        <section className="py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-16">How Our Growth System Works</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <div className="w-full md:w-auto bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 p-6 rounded-2xl flex-1 max-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-magnet text-3xl text-pink-500 mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-lg">Traffic Sources</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase mt-1">SEO, Meta & Google Ads</p>
              </div>
              <i className="fas fa-arrow-right text-xl text-gray-300 dark:text-white/20 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-gray-300 dark:text-white/20 md:hidden"></i>
              
              <div className="w-full md:w-auto bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 p-6 rounded-2xl flex-1 max-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-filter text-3xl text-blue-500 mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-lg">Funnels</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase mt-1">Landing Pages & Content</p>
              </div>
              <i className="fas fa-arrow-right text-xl text-gray-300 dark:text-white/20 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-gray-300 dark:text-white/20 md:hidden"></i>

              <div className="w-full md:w-auto bg-[#0B2545] dark:bg-[#11325B] border-2 border-[#0097B2] p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,151,178,0.2)] flex-1 max-w-[200px] scale-105">
                <i className="fas fa-cogs text-3xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-white text-lg">CRM Automation</h4>
                <p className="text-[10px] text-[#0097B2] uppercase mt-1">Chatbots & Lead Routing</p>
              </div>
              <i className="fas fa-arrow-right text-xl text-gray-300 dark:text-white/20 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-gray-300 dark:text-white/20 md:hidden"></i>

              <div className="w-full md:w-auto bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/10 p-6 rounded-2xl flex-1 max-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-chart-pie text-3xl text-green-500 mb-3"></i>
                <h4 className="font-bold text-[#0B2545] dark:text-white text-lg">Sales & Reporting</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase mt-1">Looker Studio & Analytics</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div className="p-6">
                <h4 className="text-[#0B2545] dark:text-white font-bold text-base mb-2 border-l-2 border-[#0097B2] pl-3">Acquisition</h4>
                <p className="text-gray-600 dark:text-[#E6EEF2]/70 text-sm">Marketing strategies generate highly qualified inbound traffic and leads.</p>
              </div>
              <div className="p-6">
                <h4 className="text-[#0B2545] dark:text-white font-bold text-base mb-2 border-l-2 border-[#0097B2] pl-3">Nurture</h4>
                <p className="text-gray-600 dark:text-[#E6EEF2]/70 text-sm">AI systems and intelligent workflows engage prospects automatically 24/7.</p>
              </div>
              <div className="p-6">
                <h4 className="text-[#0B2545] dark:text-white font-bold text-base mb-2 border-l-2 border-[#0097B2] pl-3">Operations</h4>
                <p className="text-gray-600 dark:text-[#E6EEF2]/70 text-sm">Finance and compliance systems ensure the resulting growth is legally stable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ TRADITIONAL AGENCY VS SM NEXTGEN (Improved Comparison) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-[#0B2545] dark:text-white mb-16">Why Choose the Growth OS™?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Traditional Agency Card */}
              <div className="bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-sm border border-red-100 dark:border-red-900/30 opacity-90 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-8 flex items-center gap-3"><i className="fas fa-times-circle text-red-400 text-2xl"></i> Traditional Agency</h3>
                <ul className="space-y-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
                  <li className="flex gap-4 items-start"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> <span>Random marketing posts focusing only on vanity metrics (Likes/Views).</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> <span>Disconnected services (The Ads guy doesn't talk to the Web Developer).</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> <span>Manual, delayed PDF reporting sent only once a month.</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> <span>Generates "Leads" but provides no automated "Sales System" to close them.</span></li>
                </ul>
              </div>

              {/* SM NextGen Card */}
              <div className="bg-[#0B2545] dark:bg-[#11325B] p-8 md:p-10 rounded-[2rem] shadow-2xl border-2 border-[#0097B2] relative transform md:-translate-y-4 z-10 text-white">
                <div className="absolute -top-4 right-8 bg-[#0097B2] text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase">The Smart Way</div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2] text-3xl shadow-sm"></i> SM NextGen System</h3>
                <ul className="space-y-6 text-sm text-[#E6EEF2]/90 font-medium">
                  <li className="flex gap-4 items-start"><i className="fas fa-check text-[#0097B2] mt-1 shrink-0 text-lg"></i> <span><strong>Revenue-focused campaigns</strong> engineered strictly for ROI and low CAC.</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-check text-[#0097B2] mt-1 shrink-0 text-lg"></i> <span><strong>Unified Growth Systems</strong> where Marketing, AI, and Finance align.</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-check text-[#0097B2] mt-1 shrink-0 text-lg"></i> <span><strong>Live Dashboards</strong> giving you real-time access to BigQuery analytics.</span></li>
                  <li className="flex gap-4 items-start"><i className="fas fa-check text-[#0097B2] mt-1 shrink-0 text-lg"></i> <span><strong>Automation-First approach</strong> using LLMs and Chatbots to scale effortlessly.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ PROCESS TRANSPARENCY SECTION (NEW) */}
        <section className="py-24 bg-white dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">What You Can Expect Working With Us</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Absolute transparency. No black boxes. Here is how we communicate.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-[#F8FAFC] dark:bg-[#11325B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                <i className="fas fa-video text-3xl text-[#0097B2] mb-4"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white text-lg mb-2">Initial Strategy Call</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">A 45-minute deep dive into your business model with our senior growth strategists.</p>
              </div>
              <div className="p-8 bg-[#F8FAFC] dark:bg-[#11325B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                <i className="fas fa-file-pdf text-3xl text-pink-500 mb-4"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white text-lg mb-2">Audit Report Delivery</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Within 48 hours, you receive a comprehensive PDF outlining exact market gaps.</p>
              </div>
              <div className="p-8 bg-[#F8FAFC] dark:bg-[#11325B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                <i className="fas fa-cogs text-3xl text-purple-500 mb-4"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white text-lg mb-2">Campaign Setup</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Our engineers and marketers build the ad funnels and automation infrastructure.</p>
              </div>
              <div className="p-8 bg-[#F8FAFC] dark:bg-[#11325B] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                <i className="fas fa-chart-line text-3xl text-green-500 mb-4"></i>
                <h3 className="font-bold text-[#0B2545] dark:text-white text-lg mb-2">Weekly Performance</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Access to live dashboards and a dedicated weekly update from your account manager.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ FAQ SECTION (Refined Design) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300 border-t border-gray-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">Process FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-[#162032] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                  >
                    {faq.q}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-[#F8FAFC] dark:bg-[#0B1120] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
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

        {/* 8️⃣ FINAL CTA SECTION */}
        <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">Ready to install this growth system in your business?</h2>
            <p className="text-xl text-[#E6EEF2] mb-12 font-body max-w-2xl mx-auto font-light leading-relaxed">Book a strategy call with our senior consultants and receive a personalized growth roadmap tailored to your exact industry.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Book Strategy Call <i className="fas fa-arrow-up transform rotate-45"></i>
              </Link>
              <Link href="/services" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-10">
              <a href={getWhatsAppLink("Hi SM NextGen, I want to learn more about the Growth OS.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-[#0097B2] font-bold hover:text-white transition-colors relative z-20">
                <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp (7073538077)
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}