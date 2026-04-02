// file: app/about/AboutClient.js
"use client";

import React from 'react';
import Link from 'next/link';

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function AboutClient() {
  
  // NOTE: Cursor logic removed from here as it is now in layout.js

  return (
    // <main> class updated to remove hardcoded background colors, relying on layout.js
    <main className="relative w-full z-10 overflow-x-hidden">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-[#071A30] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
               alt="Team Strategy" 
               className="w-full h-full object-cover opacity-10 filter grayscale blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] to-[#071A30]/80"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0097B2]/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] animate-pulse"></span> Our Vision
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 leading-tight tracking-tight">
            We Build Growth Engines, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">Not Just Ads.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Modernizing Indian businesses by turning chaotic operations into predictable, scalable revenue streams.
          </p>
        </div>
      </section>

      {/* 2️⃣ WHO WE ARE */}
      <section className="py-16 bg-white dark:bg-[#0B1120] relative -mt-8 rounded-t-[2.5rem] z-20 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Who We Are</h2>
              <p className="text-base text-gray-500 dark:text-[#E6EEF2]/70 mb-4 leading-relaxed">
                SM NextGen is a premier growth and technology agency dedicated to ambitious Indian enterprises. We noticed a massive flaw in the traditional agency model: they focus on isolated tasks instead of the big picture.
              </p>
              <p className="text-base text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">
                We are architects of business growth. We combine world-class web development, precision-targeted advertising, and seamless AI/CRM integrations to create an ecosystem where your business thrives automatically.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#F8FAFC] dark:bg-[#162032] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400 text-4xl font-black mb-1">50+</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70 font-semibold uppercase tracking-wider">Brands Scaled</p>
              </div>
              <div className="bg-[#F8FAFC] dark:bg-[#162032] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center mt-6 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400 text-4xl font-black mb-1">3X</h4>
                <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70 font-semibold uppercase tracking-wider">Avg. ROI Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ OUR MISSION */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0097B2]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <i className="fas fa-quote-left text-4xl text-[#0097B2]/40 mb-4"></i>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-[#E6EEF2]/90 font-light italic leading-relaxed">
            "To bridge the gap between traditional Indian business values and modern technology, enabling founders to scale with predictability and without the daily operational chaos."
          </p>
        </div>
      </section>

      {/* 4️⃣ THE GROWTH OS */}
      <section className="py-16 bg-white dark:bg-[#0B1120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-3">The Growth OS</h2>
            <p className="text-gray-500 dark:text-[#E6EEF2]/70 text-base max-w-2xl mx-auto">
              We don't just run campaigns; we install a complete operating system for your customer acquisition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#0097B2]/30 to-transparent z-0"></div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,151,178,0.15)] transition-all duration-300 relative z-10 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mb-4 shadow-sm border border-[#0097B2]/20 mx-auto bg-white dark:bg-[#071A30]">1</div>
              <h3 className="text-lg font-bold text-center text-[#0B2545] dark:text-white mb-2">High-Converting Web</h3>
              <p className="text-[13px] text-center text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">We build digital storefronts optimized for speed, trust, and conversions—turning clicks into concrete leads.</p>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,151,178,0.15)] transition-all duration-300 relative z-10 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mb-4 shadow-sm border border-[#0097B2]/20 mx-auto bg-white dark:bg-[#071A30]">2</div>
              <h3 className="text-lg font-bold text-center text-[#0B2545] dark:text-white mb-2">Precision Traffic</h3>
              <p className="text-[13px] text-center text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Deploying data-driven Meta and Google ad campaigns to capture high-intent audiences with predictable acquisition costs.</p>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,151,178,0.15)] transition-all duration-300 relative z-10 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-2xl mb-4 shadow-sm border border-[#0097B2]/20 mx-auto bg-white dark:bg-[#071A30]">3</div>
              <h3 className="text-lg font-bold text-center text-[#0B2545] dark:text-white mb-2">CRM & Retention</h3>
              <p className="text-[13px] text-center text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Automating lead nurturing and backend sales pipelines so no opportunity slips through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ FOUNDER NOTE */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12 w-full max-w-sm mx-auto relative isolate">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0097B2] to-purple-500 rounded-3xl transform -rotate-3 opacity-20 blur-md"></div>
              <div className="absolute inset-0 bg-[#0097B2] rounded-3xl transform translate-x-3 translate-y-3 opacity-50 dark:opacity-20"></div>
              <img 
                src="/images/sanjay.png" 
                alt="Sanjay Lohar - Founder of SM NextGen" 
                className="relative rounded-3xl shadow-lg w-full object-cover border-4 border-white dark:border-[#162032] aspect-[4/5] z-10" 
              />
              <div className="absolute -bottom-5 -left-4 bg-white dark:bg-[#162032] py-2 px-4 rounded-xl shadow-md border border-gray-100 dark:border-white/10 z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] text-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-[#0B2545] dark:text-white font-bold text-[13px]">Strategic Partner</p>
                  <p className="text-[11px] text-gray-500">Not just an agency</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-7/12 mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">A Strategic Partnership.</h2>
              <div className="bg-white dark:bg-[#162032] p-6 rounded-2xl border-l-4 border-[#0097B2] shadow-sm mb-6">
                <p className="text-base text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed italic">
                  "Most agencies treat clients like numbers. We treat them like partners. We don't just optimize metrics; we optimize your entire backend system so you can handle scale without the backend breaking."
                </p>
              </div>
              <p className="text-base text-gray-500 dark:text-[#E6EEF2]/70 mb-8 leading-relaxed">
                The modern market demands more than just a good product. It demands a frictionless digital experience and aggressive, targeted visibility. That is exactly what we build for you at SM NextGen.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-gray-300 dark:bg-white/20"></div>
                <div>
                  <p className="font-heading font-bold text-[#0B2545] dark:text-white text-lg">Sanjay Lohar</p>
                  <p className="text-[#0097B2] font-semibold text-xs tracking-wide uppercase">Founder, SM NextGen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ CORE VALUES */}
      <section className="py-16 bg-white dark:bg-[#0B1120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-3">Our Core Values</h2>
          <p className="text-gray-500 dark:text-[#E6EEF2]/70 text-base mb-10">The principles that dictate every line of code we write and ad we launch.</p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-8 bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 text-left group">
              <i className="fas fa-eye text-3xl text-[#0097B2] mb-4 transform group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Transparency</h3>
              <p className="text-[13px] text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">No hidden fees. No vanity metrics. You see exactly where every rupee of your budget goes and the exact return it brings.</p>
            </div>
            <div className="p-8 bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 text-left group">
              <i className="fas fa-chart-line text-3xl text-[#0097B2] mb-4 transform group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Data-Driven</h3>
              <p className="text-[13px] text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">We don't rely on gut feelings. We make ruthless decisions based on CPA, ROAS, and Long-Term Value metrics.</p>
            </div>
            <div className="p-8 bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 text-left group">
              <i className="fas fa-bolt text-3xl text-[#0097B2] mb-4 transform group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Speed of Execution</h3>
              <p className="text-[13px] text-gray-500 dark:text-[#E6EEF2]/70 leading-relaxed">Business moves fast. We launch campaigns, iterate on websites, and solve bottlenecks in days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ WHY SM NEXTGEN */}
      <section className="py-16 bg-[#0B2545] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Why Choose SM NextGen?</h2>
              <p className="text-[#E6EEF2]/70 text-base mb-8 leading-relaxed">We replace the disjointed mess of hiring multiple freelancers or single-focus agencies with one unified growth team.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0097B2] flex items-center justify-center flex-shrink-0 shadow-sm text-sm">
                    <i className="fas fa-layer-group"></i>
                  </div>
                  <div>
                    <strong className="block text-white text-base mb-0.5">Full-Stack Ownership</strong>
                    <span className="text-[13px] text-[#E6EEF2]/70">We manage both the technology and the traffic flawlessly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0097B2] flex items-center justify-center flex-shrink-0 shadow-sm text-sm">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div>
                    <strong className="block text-white text-base mb-0.5">Revenue, Not Reach</strong>
                    <span className="text-[13px] text-[#E6EEF2]/70">We focus strictly on bottom-line business growth.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0097B2] flex items-center justify-center flex-shrink-0 shadow-sm text-sm">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <strong className="block text-white text-base mb-0.5">Built for Scale</strong>
                    <span className="text-[13px] text-[#E6EEF2]/70">Our infrastructure handles high volume without breaking.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Standard vs NextGen Comparison */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="bg-[#071A30]/80 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-[30px]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0097B2]/20 rounded-full blur-[30px]"></div>

                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-widest mb-3">
                    <i className="fas fa-times"></i> The Standard Agency
                  </div>
                  <p className="text-[#E6EEF2]/60 text-[13px] leading-relaxed pl-1">Runs ads to a slow website. Leaves you to handle lead management manually. Blames the algorithm when things break.</p>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 relative z-10"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-[11px] font-bold uppercase tracking-widest mb-3">
                    <i className="fas fa-check"></i> The SM NextGen Way
                  </div>
                  <p className="text-white text-[13px] leading-relaxed pl-1">Optimizes the site for speed, runs highly targeted ads, and automates your lead nurturing so you can focus purely on closing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ CTA SECTION */}
      <section className="relative py-20 bg-[#0097B2] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B2545]/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">Ready To Scale Your Business?</h2>
          <p className="text-lg text-white/90 mb-8 font-light max-w-xl mx-auto">Stop leaving money on the table. Let's build a predictable growth engine for your brand today.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={getWhatsAppLink("Hi SM NextGen Team, I've read about your growth ecosystem and I'm ready to scale my business. Please schedule a strategy call. Niche: ")} target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white text-[#0B2545] font-extrabold rounded-xl shadow-lg hover:-translate-y-1 transition-transform text-base flex items-center justify-center gap-2 w-full sm:w-auto">
               <i className="fas fa-arrow-right"></i> Book Strategy Call
            </a>
            <a href={getWhatsAppLink("Hi SM NextGen Team, I have some questions about how you can modernize my business. ")} target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-base flex items-center justify-center gap-2 w-full sm:w-auto">
              <i className="fab fa-whatsapp text-lg"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}