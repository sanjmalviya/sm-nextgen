"use client";
import { useState } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 

export default function SeoServicePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const leadData = {
      service: "Advanced SEO & GEO Systems",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business: formData.business,
      budget: formData.budget,
    };

    // 1. Send data to backend (Email)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (error) {
      console.error("API error, proceeding to WhatsApp", error);
    }

    // 2. Redirect to WhatsApp with details
    const leadMsg = `*New SEO Audit Request* 📈\n\n*Service:* ${leadData.service}\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Website:* ${leadData.business}\n*Budget:* ${leadData.budget}\n\nPlease review my website and schedule an organic growth strategy call.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(leadMsg)}`, '_blank');
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", business: "", budget: "" });
    }, 1500);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "What does your SEO service cover? Is it just basics or advanced?", a: "We cover everything end-to-end. For beginners and local businesses, we handle fundamental Keyword Research, On-Page SEO (Meta Tags, H1s), and Google My Business. For scaling brands and enterprises, we execute Advanced Technical Audits, Off-Page Link Building, Programmatic SEO, and Generative Engine Optimization (GEO)." },
    { q: "How long does it realistically take to see organic growth?", a: "SEO is a compounding asset. While basic technical fixes and local citations can show improvements within weeks, significant ranking movement for high-competition commercial keywords typically takes 3 to 6 months of consistent on-page content and off-page authority building." },
    { q: "What is Off-Page SEO and why do I need it?", a: "Off-Page SEO involves activities done outside your website to boost your ranking—primarily building high-quality backlinks, Digital PR, and guest posting. Google uses these links as 'votes of confidence'. Without strong Off-Page SEO, it is nearly impossible to rank for highly competitive industry keywords." },
    { q: "What does 'E-E-A-T' mean and why is it crucial?", a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses this framework to evaluate content quality. We structure your website, author bios, and external PR to heavily signal high E-E-A-T, protecting you from core algorithm penalties." },
    { q: "Is SEO a better investment than Paid Ads (PPC)?", a: "They work best together. Ads give you instant traffic that stops the exact second your budget runs out. SEO takes time to build, but once established, it acts as a digital moat, bringing in high-intent leads 24/7 without paying for every single click." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#030e1c] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION (Always Dark #0B2545 for Premium Impact) */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop" 
               alt="SEO Analytics Dashboard" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-search-plus"></i> Core Growth System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Search Engine Optimization That <span className="text-[#0097B2]">Drives Revenue.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                From Local SEO basics to Advanced Off-Page Link Building and AI Search Optimization (GEO). We deploy comprehensive architecture to capture high-intent buyers organically.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Basics: Local Maps, On-Page & Keyword Mapping</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Off-Page: High-DA Link Building & Digital PR</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Advanced: Technical, Core Web Vitals & GEO</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-[#007b92] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Get Free Website Audit
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Organic Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#0B2545]">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="SEO Dashboard Analytics" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Live Dashboard</p>
                    <p className="font-bold text-lg leading-tight">Organic Traffic & Ranking Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ TRUST BAR */}
      <section className="py-6 bg-white dark:bg-[#0B2545] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]">
            <div className="flex items-center gap-2"><i className="fas fa-shield-alt text-[#0097B2] text-xl"></i> Algorithm Update Resilient</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-crosshairs text-[#0097B2] text-xl"></i> High-Intent Commercial Traffic</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-chart-bar text-[#0097B2] text-xl"></i> Transparent Live Reporting</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Building Your Digital Moat</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            The search landscape has evolved. Modern organic growth requires a mix of <strong>Fundamental On-Page SEO, Aggressive Off-Page Link Building, Technical Perfection, and Advanced Generative Engine Optimization (GEO)</strong> to ensure Google and AI models trust your brand as the ultimate source of truth. We build sustainable architectures for organizations of all sizes.
          </p>
        </div>
      </section>

      {/* 🟢 2-COLUMN SECTION (Problems, Solutions + Sticky Form) */}
      <section className="py-12 bg-white dark:bg-[#0B2545] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start relative">
            
            {/* ⬅️ LEFT COLUMN: Problems & Solutions */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-16">

              {/* 4️⃣ PROBLEMS WE SOLVE */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Are you facing these digital bottlenecks?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Invisible to Buyers</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Your potential customers are searching for your exact services, but competitors are showing up first and stealing the revenue.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">The Ad Budget Trap</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">You are entirely dependent on Paid Ads. The second you pause your ad spend, your lead generation completely stops.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Low Domain Authority</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Your site lacks strong Off-Page backlinks, making it impossible to outrank established industry leaders.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Technical Penalties</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Your website loads slowly, has messy code, or mobile rendering issues causing Google's algorithm to ignore your site.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our End-to-End Methodology</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Basics & Technical Foundation</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We start with the fundamentals. Fixing crawl errors, optimizing Core Web Vitals, basic On-Page Meta tags, and securing your local presence through Google My Business.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Intent-Based Architecture</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We map out commercial keywords and create robust content silos. We build pillar pages and conversion-optimized landing pages that answer direct search queries.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Off-Page & Link Building</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We execute highly targeted Digital PR, Guest Posting, and white-hat manual outreach to secure authoritative backlinks, drastically boosting your Domain Authority (DA).</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Advanced AI Search (GEO)</h3>
                      <p className="text-sm text-white/90">We optimize your content to be cited by Generative AI, adding clear statistics, expert E-E-A-T signals, and complex schemas that AI Language Models prefer.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ➡️ RIGHT COLUMN: STICKY LEAD FORM (Adapts to Light/Dark perfectly) */}
            <div className="lg:col-span-5 xl:col-span-4 relative h-full">
              <div className="sticky top-28 space-y-6 pb-12">
                
                {/* Main Form Card */}
                <div id="leadForm" className="bg-white dark:bg-[#030e1c] p-8 rounded-[2rem] shadow-2xl border-t-[6px] border-[#0097B2] relative overflow-hidden isolate transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097B2]/10 rounded-bl-full -z-10"></div>
                  <h3 className="text-2xl font-heading font-bold text-[#0B2545] dark:text-white mb-2">Get Free Website Audit</h3>
                  <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/80 mb-6">Let our experts analyze your website's organic & AI ranking potential.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-[#0B2545] dark:text-white placeholder-gray-400 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-[#0B2545] dark:text-white placeholder-gray-400 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Website URL</label>
                        <input type="text" name="business" value={formData.business} onChange={handleFormChange} required placeholder="www.yourdomain.com" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-[#0B2545] dark:text-white placeholder-gray-400 transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-[#0B2545] dark:text-white placeholder-gray-400 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                            className="w-full bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-[#0B2545] dark:text-white transition cursor-pointer">
                            <option value="" disabled>Select</option>
                            <option value="Under 30k">Under 30k</option>
                            <option value="30k-1L">30k - 1L</option>
                            <option value="1L+">1L+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request SEO Audit
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                      <h4 className="text-lg font-bold text-[#0B2545] dark:text-white mb-2">Request Sent!</h4>
                      <p className="text-xs text-gray-500 dark:text-[#E6EEF2]">Redirecting to SM NextGen WhatsApp...</p>
                    </div>
                  )}

                  {/* Floating WhatsApp Button inside Form */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20improve%20my%20organic%20search%20rankings.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-lock"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">100% Secure Audit</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">Your site data is kept strictly confidential.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 FULL WIDTH SECTIONS BELOW */}

      {/* 6️⃣ WHAT YOU GET (Massive Exhaustive 12-Point Section: Basics to Advanced) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Complete Organic Arsenal</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From essential local setups to advanced enterprise algorithms, our holistic approach covers every ranking factor that Google and AI demand.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Fundamental On-Page SEO", desc: "Optimization of H1s, Meta descriptions, URLs, and image alt texts for strong baseline search visibility.", icon: "fas fa-file-alt" },
              { title: "Local SEO & Citations", desc: "Dominating the Google Map Pack and local directory citations. Essential for physical businesses & clinics.", icon: "fas fa-map-marker-alt" },
              { title: "Deep Technical Fixes", desc: "Resolving JS rendering issues, fixing 404s, maximizing crawl budget, and ensuring perfect Core Web Vitals.", icon: "fas fa-cogs" },
              { title: "Commercial Keyword Mapping", desc: "Targeting bottom-of-funnel, high-intent commercial keywords that drive actual sales, not just vanity traffic.", icon: "fas fa-key" },
              { title: "Off-Page Link Building", desc: "Securing high Domain Authority (DA) contextual backlinks via Guest Posting and manual outreach.", icon: "fas fa-link" },
              { title: "Digital PR & Brand Signals", desc: "Getting your brand mentioned in top-tier publications to build massive offline authority and trust.", icon: "fas fa-bullhorn" },
              { title: "Generative Engine Opt. (GEO)", desc: "Structuring data, quotes, and FAQs specifically to be cited by ChatGPT, Gemini, and Google AI Overviews.", icon: "fas fa-robot" },
              { title: "Content Silos & Architecture", desc: "Building structured pillar models and robust internal linking hubs to distribute page authority.", icon: "fas fa-layer-group" },
              { title: "E-E-A-T Content Production", desc: "Publishing authoritative long-form articles and author profiles designed for Google's stringent Trust guidelines.", icon: "fas fa-brain" },
              { title: "Toxic Link Disavowal", desc: "Constantly monitoring your backlink profile health and removing spammy links that cause algorithmic penalties.", icon: "fas fa-shield-virus" },
              { title: "Advanced Schema Markup", desc: "Implementing nested JSON-LD (FAQ, Product, LocalBusiness, Organization) to trigger rich search snippets.", icon: "fas fa-code" },
              { title: "Live BI Dashboards", desc: "Custom Looker Studio and BigQuery analytics tracking your organic ROI and keyword movements in real-time.", icon: "fas fa-chart-bar" }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#0B2545] p-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors shadow-sm group flex flex-col isolate transform-gpu">
                <div className="w-12 h-12 bg-[#0097B2]/10 text-[#0097B2] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#0097B2] group-hover:text-white transition-colors"><i className={feature.icon}></i></div>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2 text-md leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14️⃣ MINI CTA SECTION */}
      <section className="py-12 bg-white dark:bg-[#0B2545] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#0B2545] dark:bg-[#030e1c] p-10 md:p-12 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden isolate text-white border dark:border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/30 rounded-full blur-3xl z-0"></div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Stop paying for every single click.</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Get a professional, deep-dive SEO audit of your current website to see exactly why you aren't ranking on Page 1 or inside AI Overviews.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Request Free Audit
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">SEO Growth Packages</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From basic local dominance to advanced international off-page rankings. Compare full details on our Pricing page.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#0B2545] p-8 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Local / Basics</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Best for physical stores, clinics & local setups.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> GMB Optimization</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Local Citations & Directories</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> On-Page Meta Tags Fixes</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Keyword Mapping</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Compare Tiers</Link>
            </div>
            
            {/* Pro - Highlighted (Always Dark Theme) */}
            <div className="bg-[#0B2545] dark:bg-[#0097B2]/10 p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">National Growth</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">Best for E-commerce and digital scaling brands.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Advanced Technical Architecture</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Monthly E-E-A-T Content</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Off-Page High-DA Link Building</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Live Looker Studio Dashboard</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Compare Tiers</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-[#0B2545] p-8 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Enterprise AI</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For large SaaS and high-traffic global portals.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Generative Engine Opt. (GEO)</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Programmatic SEO</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> International Hreflang Targeting</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Digital PR Outreach</li>
              </ul>
              <a href="#leadForm" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ RESULTS / GENUINE MINI CASE STUDIES */}
      <section className="py-24 bg-white dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Grounded Business Impact</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How consistent organic methodology translates directly to sustainable revenue.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">B2B SaaS</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Transitioning from Paid to Organic</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Burning excessive budget on Google Ads just to maintain baseline leads, causing high CAC.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Executed a content architecture mapping high-intent 'alternative to' commercial keywords with off-page backlinks.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Organic signups overtook paid signups in month 7.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">E-commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Surviving Algorithms</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A massive product catalog lost 40% of its traffic during a Core Update due to thin pages.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Restructured site hierarchy, implemented Advanced Product Schema, and enriched content.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Recovered all lost traffic and increased organic checkouts.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Local Business</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Dominating Local AI Search</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Invisible on the Google Map Pack when local clients searched for specific services.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Aggressive GMB optimization, geo-targeted pages, and local directory citation building.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Secured top spots in the 'Local Pack' driving highly qualified calls.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Search Dominance Timeline</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-200 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-stethoscope text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Technical Audit</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Fixing foundations: indexing, schema, and speed errors.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-200 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-key text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Keyword Strategy</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Mapping high-intent, commercial bottom-funnel queries.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-200 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-file-code text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">On-Page Scaling</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Optimizing E-E-A-T content architecture for search intent.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-link text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">Off-Page Authority</h3>
              <p className="text-sm text-white/90">Executing Digital PR and building high-DA backlinks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE (Always Dark Navy) */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['B2B SaaS', 'Ecommerce Brands', 'Healthcare', 'Education', 'Real Estate', 'Local Services', 'Finance', 'Travel'].map((ind, i) => (
              <span key={i} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold text-[#E6EEF2] shadow-sm text-sm hover:bg-[#0097B2] hover:border-[#0097B2] transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ RELATED SERVICES */}
      <section className="py-20 bg-white dark:bg-[#0B2545] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Accelerate Your Traffic</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/content-marketing" className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-pen-nib"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Content Marketing</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">SEO Blogs & Copywriting.</p>
              </div>
            </Link>
            <Link href="/services/performance-advertising" className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fab fa-google"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Google Ads</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Instant Search Traffic.</p>
              </div>
            </Link>
            <Link href="/services/sales-funnel-conversion-optimization" className="bg-[#F8FAFC] dark:bg-[#030e1c] p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-filter"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Conversion Optimization</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Turn organic traffic into sales.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 12️⃣ FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#0B2545] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-[#0097B2] text-white rotate-180 shadow-md' : 'bg-[#F8FAFC] dark:bg-[#030e1c] text-[#0097B2] border border-gray-200 dark:border-white/10'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>
                <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15️⃣ FINAL MASSIVE CTA (Always Dark Navy) */}
      <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Dominate the Search Results</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Stop letting your competitors steal your revenue. Let's build your organic digital moat today.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Get Free SEO Audit <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20rank%20my%20website%20on%20Google.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}