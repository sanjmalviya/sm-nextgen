"use client";
import { useState, useEffect, useRef } from "react";

export default function HowWeWork() {
  const cursorRef = useRef(null);
  
  // FAQs ke liye State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (i) => {
    setActiveFaq(activeFaq === i ? null : i);
  };

  useEffect(() => {
    // Spotlight Mouse Glow Logic
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
        cursorRef.current.style.setProperty('--x', e.clientX + 'px');
        cursorRef.current.style.setProperty('--y', e.clientY + 'px');
      }
    };
    
    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200 relative overflow-x-hidden pb-10">
      
      {/* Dynamic Cursor Spotlight */}
      <div ref={cursorRef} id="cursor-glow-spotlight"></div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-brand/20 rounded-full blur-[150px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span> The Blueprint
          </div>
          <h1 className="text-3xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            The SM NextGen<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Growth OS™</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Most agencies guess. We engineer. Our proprietary 4-step framework combines Data, Strategy, and Automation to build scalable business systems.
          </p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 relative timeline-line">
            
          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-24 mb-16 md:mb-24 relative items-center group">
            <div className="md:text-right relative pl-16 md:pl-0" data-aos="fade-right">
              <h3 className="text-5xl md:text-8xl font-bold text-gray-100 dark:text-white/5 absolute -top-8 md:-top-16 md:right-0 right-auto left-16 md:left-auto -z-10 select-none transition group-hover:text-brand/10">01</h3>
              <h2 className="text-xl md:text-3xl font-bold text-navy dark:text-white mb-3 mt-2">Audit & Diagnosis 🔍</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Before we build, we diagnose. We perform a deep-dive audit of your current digital footprint and sales leakage points. We identify exactly why you aren't growing.
              </p>
              <div className="flex flex-wrap md:justify-end gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Competitor Spy</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">SWOT Analysis</span>
              </div>
            </div>
            
            <div className="absolute left-[4px] md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-navy border-4 border-brand shadow-lg z-10 flex items-center justify-center text-brand text-lg md:text-xl">
                <i className="fas fa-search"></i>
              </div>
            </div>
            
            <div className="pl-16 md:pl-0" data-aos="fade-left">
              <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-brand shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                <h4 className="font-bold text-xs mb-4 uppercase tracking-wider text-brand border-b border-gray-200 dark:border-white/10 pb-2">Client Deliverables</h4>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>7-Point Audit Report:</strong> A PDF identifying gaps.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Revenue Leakage:</strong> Where are you losing money?</div></li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-24 mb-16 md:mb-24 relative items-center group">
            <div className="absolute left-[4px] md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-navy border-4 border-brand shadow-lg z-10 flex items-center justify-center text-brand text-lg md:text-xl">
                <i className="fas fa-chess"></i>
              </div>
            </div>

            <div className="relative pl-16 md:pl-0 md:col-start-2" data-aos="fade-left">
              <h3 className="text-5xl md:text-8xl font-bold text-gray-100 dark:text-white/5 absolute -top-8 md:-top-16 md:left-0 left-16 -z-10 select-none transition group-hover:text-brand/10">02</h3>
              <h2 className="text-xl md:text-3xl font-bold text-navy dark:text-white mb-3 mt-2">Strategy Mapping 🗺️</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                We don't do "random acts of marketing." We build a strategic blueprint tailored to your industry. We define your Ideal Customer Persona (ICP), craft the Offer, and design the funnel architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">User Personas</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Offer Creation</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Channel Selection</span>
              </div>
            </div>

            <div className="pl-16 md:pl-0 md:pr-0 md:col-start-1 md:row-start-1" data-aos="fade-right">
              <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 md:border-l-0 md:border-r-4 border-brand shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                <h4 className="font-bold text-xs mb-4 uppercase tracking-wider text-brand border-b border-gray-200 dark:border-white/10 pb-2">Client Deliverables</h4>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Growth Roadmap:</strong> 90-Day Execution Plan.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Funnel Wireframes:</strong> Visual sketch of journey.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Budget Allocation:</strong> Exact ad spend plan.</div></li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-24 mb-16 md:mb-24 relative items-center group">
            <div className="md:text-right relative pl-16 md:pl-0" data-aos="fade-right">
              <h3 className="text-5xl md:text-8xl font-bold text-gray-100 dark:text-white/5 absolute -top-8 md:-top-16 md:right-0 right-auto left-16 md:left-auto -z-10 select-none transition group-hover:text-brand/10">03</h3>
              <h2 className="text-xl md:text-3xl font-bold text-navy dark:text-white mb-3 mt-2">Build & Launch 🛠️</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                The Engine Room. This is where we get our hands dirty. Our copywriters script the ads, designers create visuals, and our automation experts connect the CRM pipelines.
              </p>
              <div className="flex flex-wrap md:justify-end gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Ad Creatives</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">HubSpot/Zapier</span>
              </div>
            </div>
            
            <div className="absolute left-[4px] md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-navy border-4 border-brand shadow-lg z-10 flex items-center justify-center text-brand text-lg md:text-xl">
                <i className="fas fa-hammer"></i>
              </div>
            </div>
            
            <div className="pl-16 md:pl-0" data-aos="fade-left">
              <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-brand shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                <h4 className="font-bold text-xs mb-4 uppercase tracking-wider text-brand border-b border-gray-200 dark:border-white/10 pb-2">Client Deliverables</h4>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Campaign Launch:</strong> Ads go live.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Automation:</strong> CRM & Lead Flows Active.</div></li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-24 relative items-center group">
            <div className="absolute left-[4px] md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-auto h-full flex flex-col justify-start md:justify-center pt-2 md:pt-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent border-4 border-white dark:border-navy shadow-lg z-10 flex items-center justify-center text-navy font-bold text-lg md:text-xl">
                <i className="fas fa-chart-line"></i>
              </div>
            </div>
            
            <div className="relative pl-16 md:pl-0 md:col-start-2" data-aos="fade-left">
              <h3 className="text-5xl md:text-8xl font-bold text-gray-100 dark:text-white/5 absolute -top-8 md:-top-16 md:left-0 left-16 -z-10 select-none transition group-hover:text-brand/10">04</h3>
              <h2 className="text-xl md:text-3xl font-bold text-navy dark:text-white mb-3 mt-2">Scale & Optimize 📈</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                We don't "Set it and Forget it." We monitor campaigns daily. We kill losing ads, double down on winners, and optimize your backend operations to handle the new growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">A/B Testing</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Optimization</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded text-[10px] md:text-xs font-bold text-blue-700 dark:text-gray-300">Analytics</span>
              </div>
            </div>

            <div className="pl-16 md:pl-0 md:pr-0 md:col-start-1 md:row-start-1" data-aos="fade-right">
              <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 md:border-l-0 md:border-r-4 border-brand shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                <h4 className="font-bold text-xs mb-4 uppercase tracking-wider text-brand border-b border-gray-200 dark:border-white/10 pb-2">Client Deliverables</h4>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Weekly Reports:</strong> Transparent data.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>A/B Testing:</strong> Constant improvement.</div></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1 shrink-0"></i> <div><strong>Scaling:</strong> Budget increase based on ROI.</div></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#081b33]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-navy dark:text-white mb-16">Why Choose Growth OS™?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30 opacity-80 hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-6 flex items-center gap-2"><i className="fas fa-times-circle text-red-400"></i> Traditional Agency</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-3"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> Focuses only on vanity metrics (Likes/Views).</li>
                <li className="flex gap-3"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> Disconnected services (Ads guy doesn't talk to Dev).</li>
                <li className="flex gap-3"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> Manual reporting once a month.</li>
                <li className="flex gap-3"><i className="fas fa-times text-red-400 mt-1 shrink-0"></i> Leaves you with "Leads" but no "Sales System".</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-2xl border-2 border-brand relative transform md:-translate-y-4 z-10 bg-gradient-to-b from-white to-blue-50 dark:from-[#162032] dark:to-[#0f1523]">
              <div className="absolute -top-3 right-6 bg-accent text-navy text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg tracking-wider border border-yellow-400">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-6 flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> SM NextGen Approach</h3>
              <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                <li className="flex gap-3"><i className="fas fa-check text-brand mt-1 shrink-0"></i> Focuses on <strong>Revenue & ROI</strong>.</li>
                <li className="flex gap-3"><i className="fas fa-check text-brand mt-1 shrink-0"></i> Full-Stack (Marketing + Automation + Legal).</li>
                <li className="flex gap-3"><i className="fas fa-check text-brand mt-1 shrink-0"></i> Live Dashboards & Real-time Data.</li>
                <li className="flex gap-3"><i className="fas fa-check text-brand mt-1 shrink-0"></i> Builds a complete <strong>Sales Ecosystem</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white dark:bg-[#0B1120]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-navy dark:text-white mb-10">Common Questions</h2>
          <div className="space-y-4">
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button onClick={() => toggleFaq(1)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 transition">
                <span>How long does the audit take?</span>
                <i className={`fas ${activeFaq === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeFaq === 1 && (
                <div className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-navy">
                  Our initial 7-Point Business Audit takes 24-48 hours. We analyze your digital presence and competitors to give you a roadmap.
                </div>
              )}
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button onClick={() => toggleFaq(2)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 transition">
                <span>Do I need a big budget to start?</span>
                <i className={`fas ${activeFaq === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeFaq === 2 && (
                <div className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-navy">
                  No. Our framework is scalable. We have "Quick Start" packages for small businesses and "Accelerate" plans for established brands.
                </div>
              )}
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button onClick={() => toggleFaq(3)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 transition">
                <span>What industries do you work with?</span>
                <i className={`fas ${activeFaq === 3 ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeFaq === 3 && (
                <div className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-navy">
                  We specialize in Real Estate, E-Commerce (D2C), Healthcare (Clinics), and B2B Services in India.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to install this system?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Stop guessing. Start growing with a predictable roadmap designed for Indian Businesses.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-white text-brand font-bold rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
              Book a Strategy Call
            </a>
            <a href="/services" className="px-8 py-4 border border-white text-white font-bold rounded-xl hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}