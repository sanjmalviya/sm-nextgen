"use client";
import { useState } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 

export default function EmailMarketingAutomationPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", listSize: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const leadData = {
      service: "Email & Marketing Automation",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business: formData.business,
      listSize: formData.listSize,
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
    const leadMsg = `*New Retention Strategy Request* 📧\n\n*Service:* ${leadData.service}\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Website:* ${leadData.business}\n*Email List Size:* ${leadData.listSize}\n\nPlease review my details and schedule an automation audit call.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(leadMsg)}`, '_blank');
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", business: "", listSize: "" });
    }, 1500);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "Is email marketing still effective in 2024?", a: "Email marketing consistently delivers the highest ROI of any marketing channel (averaging $36 for every $1 spent). Unlike social media where algorithms control your reach, you actually own your email list. It is the most direct, reliable way to generate recurring revenue." },
    { q: "Which automation platforms do you work with?", a: "We are platform-agnostic but highly specialized in industry leaders. For E-commerce, we heavily utilize Klaviyo and Omnisend. For B2B and SaaS, we build complex CRM architectures in HubSpot, ActiveCampaign, and GoHighLevel." },
    { q: "What is the difference between an 'Email Campaign' and an 'Email Flow'?", a: "A campaign is a one-time broadcast (like a monthly newsletter or a holiday sale). An 'Email Flow' (or automation) is a sequence triggered by a specific user behavior—like abandoning a cart, signing up for a lead magnet, or making a first purchase. Flows run on autopilot 24/7." },
    { q: "How do you prevent emails from going to the Promotions or Spam folder?", a: "We conduct a rigorous technical deliverability audit before sending. We authenticate your domain (SPF, DKIM, DMARC), clean your existing list to remove bounced/inactive emails, and avoid spam-triggering words to ensure primary inbox placement." },
    { q: "I don't have a big email list yet. Can you still help?", a: "Yes! If you have low traffic or a small list, our primary focus will be designing high-converting 'Lead Magnets' (pop-ups, e-books, discounts) and integrating them with your website to aggressively capture emails and grow your list from scratch." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION (Always Dark #0B2545 for Premium Impact) */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop" 
               alt="Email Marketing Automation Dashboard" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-envelope-open-text"></i> Core Retention System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Stop Renting Traffic. <br /> <span className="text-[#0097B2]">Own Your Audience.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                Turn cold leads into loyal buyers and one-time customers into lifelong advocates. We build advanced behavioral email and SMS automations that generate predictable revenue on autopilot.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Recover Abandoned Carts & Lost Sales</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Advanced Behavioral Triggers & Segmentation</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Maximize Customer Lifetime Value (LTV)</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Get Free Retention Audit
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Automation Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Marketing Automation Analytics" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Live CRM</p>
                    <p className="font-bold text-lg leading-tight">Automated Revenue Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ TRUST BAR */}
      <section className="py-6 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]">
            <div className="flex items-center gap-2"><i className="fas fa-inbox text-[#0097B2] text-xl"></i> 99% Primary Inbox Deliverability</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-project-diagram text-[#0097B2] text-xl"></i> Omnichannel (Email + SMS)</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-hand-holding-usd text-[#0097B2] text-xl"></i> 20-30% Revenue Boost from Flows</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">You Are Leaving Money on the Table</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            Acquiring a new customer costs 5X more than retaining an existing one. If you are only relying on Performance Ads or SEO to drive first-time sales, your profit margins will eventually collapse. We build <strong>intelligent marketing automation infrastructures</strong> that nurture your leads, recover lost checkouts, and stimulate repeat purchases without spending an extra dime on ad traffic.
          </p>
        </div>
      </section>

      {/* 🟢 2-COLUMN SECTION (Problems, Solutions + Sticky Form) */}
      <section className="py-12 bg-white dark:bg-[#071A30] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start relative">
            
            {/* ⬅️ LEFT COLUMN: Problems & Solutions */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-16">

              {/* 4️⃣ PROBLEMS WE SOLVE */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Are you facing these retention bottlenecks?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Massive Cart Abandonment</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Over 70% of users add your products to their cart and leave. You have no automated system to bring them back to complete the purchase.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">The "One-and-Done" Buyer</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Customers buy from you once and never return. Your Customer Lifetime Value (LTV) is too low to sustain expensive ad campaigns.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Emails Landing in Spam</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">When you do send a newsletter or promotional blast, your open rates are abysmal because your domain reputation is damaged.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Manual Sales Follow-ups</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your B2B sales team is wasting hours manually typing follow-up emails instead of having an automated nurturing sequence warm up the leads.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Retention Methodology</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Infrastructure & List Cleaning</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We authenticate your sending domains (DMARC/DKIM) and rigorously clean your existing database to ensure your emails actually hit the primary inbox.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Behavioral Flow Architecture</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We map out the customer journey and build automated triggers (Welcome Series, Cart Recovery, Post-Purchase Nurture) based on specific user actions.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Hyper-Segmentation</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We stop 'batch and blast' sending. We segment your audience (VIPs, window shoppers, churn risks) to send highly personalized, relevant offers.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Direct-Response Copy & Design</h3>
                      <p className="text-sm text-[#E6EEF2]">Our specialists design beautiful HTML templates and write persuasive, conversion-focused copy that drives insanely high click-through rates.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ➡️ RIGHT COLUMN: STICKY LEAD FORM */}
            <div className="lg:col-span-5 xl:col-span-4 relative h-full">
              <div className="sticky top-28 space-y-6 pb-12">
                
                {/* Main Form Card */}
                <div id="leadForm" className="bg-[#0B2545] text-white p-8 rounded-[2rem] shadow-2xl border-t-[6px] border-[#0097B2] relative overflow-hidden isolate transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097B2]/10 rounded-bl-full -z-10"></div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Get Free Retention Audit</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Discover exactly how much revenue is hiding in your email list.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Website URL</label>
                        <input type="text" name="business" value={formData.business} onChange={handleFormChange} required placeholder="www.yourdomain.com" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email List Size</label>
                          <select name="listSize" value={formData.listSize} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Select Size</option>
                            <option value="Under 5k">Under 5,000</option>
                            <option value="5k-25k">5k - 25k</option>
                            <option value="25k+">25k+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Automation Audit
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                      <h4 className="text-lg font-bold text-white mb-2">Request Sent!</h4>
                      <p className="text-xs text-[#E6EEF2]">Redirecting to SM NextGen WhatsApp...</p>
                    </div>
                  )}

                  {/* Floating WhatsApp Button inside Form */}
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20scale%20my%20email%20marketing.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-lock"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">100% Data Security</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">Your customer lists are kept strictly confidential.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 FULL WIDTH SECTIONS BELOW */}

      {/* 6️⃣ WHAT YOU GET (Massive Exhaustive 12-Point Section) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Complete Retention System</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From initial platform setup to advanced cross-channel logic, we deploy everything required to maximize your LTV.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Platform Migration & Setup", desc: "Seamless onboarding and integration with Klaviyo, HubSpot, ActiveCampaign, or GoHighLevel.", icon: "fas fa-server" },
              { title: "Deliverability Audit", desc: "Setting up dedicated sending domains, warming up IPs, and preventing spam folder placement.", icon: "fas fa-shield-alt" },
              { title: "High-Converting Pop-ups", desc: "Designing optimized exit-intent and delayed pop-ups to aggressively capture visitor emails.", icon: "fas fa-window-restore" },
              { title: "The Welcome Series", desc: "A psychological sequence introducing your brand, building trust, and converting first-time subscribers.", icon: "fas fa-handshake" },
              { title: "Cart & Browse Abandonment", desc: "Automated behavioral flows that trigger when a user leaves without buying, saving lost revenue.", icon: "fas fa-shopping-cart" },
              { title: "Post-Purchase Nurture", desc: "Thank you flows, review request sequences, and educational content that prevents buyer's remorse.", icon: "fas fa-box-open" },
              { title: "VIP & Win-Back Flows", desc: "Identifying your top spenders for exclusive offers, and re-engaging customers who are slipping away.", icon: "fas fa-crown" },
              { title: "Omnichannel SMS Integration", desc: "Combining text message marketing with email flows for maximum open rates and immediate urgency.", icon: "fas fa-sms" },
              { title: "A/B Split Testing", desc: "Continuous mathematical testing of subject lines, send times, and creatives to maximize open rates.", icon: "fas fa-vials" },
              { title: "Custom HTML Templates", desc: "Visually stunning, mobile-responsive email designs that perfectly match your brand's aesthetic.", icon: "fas fa-paint-brush" },
              { title: "Dynamic Product Blocks", desc: "Personalized emails showing users the exact products they viewed or items frequently bought together.", icon: "fas fa-cubes" },
              { title: "Advanced Segmentation", desc: "Cleaning lists to exclude unengaged users, boosting your sender reputation and overall engagement.", icon: "fas fa-users-cog" }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#11325B] p-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors shadow-sm group flex flex-col isolate transform-gpu">
                <div className="w-12 h-12 bg-[#0097B2]/10 text-[#0097B2] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#0097B2] group-hover:text-white transition-colors"><i className={feature.icon}></i></div>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2 text-md leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14️⃣ MINI CTA SECTION */}
      <section className="py-12 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#0B2545] dark:bg-[#030e1c] p-10 md:p-12 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden isolate text-white border dark:border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/30 rounded-full blur-3xl z-0"></div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Stop ignoring your existing customers.</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Get a professional audit of your current email marketing setup to see exactly how much automated revenue you are missing out on.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Request Free CRM Audit
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Automation Packages</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From basic flow setups to advanced monthly campaign management. Compare details on our Pricing page.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Flows Setup</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Best for new brands needing their core automations built.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Account & Deliverability Setup</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Welcome Series Flow</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Abandoned Cart Flow</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom Pop-up Form</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Compare Tiers</Link>
            </div>
            
            {/* Pro - Highlighted (Always Dark Theme) */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Growth Retention</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">Best for E-commerce wanting full monthly management.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 6 Advanced Core Flows</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 4 Custom Campaigns/Month</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> SMS Marketing Integration</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Monthly A/B Split Testing</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Compare Tiers</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Enterprise CRM</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For SaaS and B2B needing complex HubSpot/ActiveCampaign logic.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Complex B2B Nurture Trees</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Lead Scoring Implementation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 8+ Email Campaigns/Month</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> API & Data Syncing</li>
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
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How strategic retention automation directly injects predictable revenue.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">D2C E-Commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Plugging the Leaky Bucket</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> High traffic from Meta Ads, but a 75% cart abandonment rate was destroying profitability.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Implemented an aggressive 3-step Abandoned Cart flow in Klaviyo with dynamic urgency triggers.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Recovered 18% of abandoned carts, adding ₹4.2L in automated monthly revenue.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">B2B SaaS</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Converting Free Trials</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Getting hundreds of free trial signups, but a dismal 2% conversion rate to paid tiers.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Deployed a 14-day value-driven onboarding sequence via ActiveCampaign highlighting core features.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Free-to-paid conversion rate jumped to 6.5%, tripling Monthly Recurring Revenue (MRR).</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Info-Product</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">The VIP Win-Back</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A massive list of 50k past buyers who hadn't engaged or purchased in over 6 months.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Cleaned the list, segmented out VIPs, and launched a highly personalized 'Win-Back' campaign with an exclusive offer.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Re-engaged 12,000 inactive buyers, driving a massive spike of revenue in a single weekend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Automation Timeline</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-shield-alt text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Technical Setup</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Authenticating domains, integrating platforms, and cleaning lists.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-sitemap text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Flow Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Mapping out customer journeys and defining behavioral triggers.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-paint-brush text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Design & Copy</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Crafting stunning HTML templates and direct-response text.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-paper-plane text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">Deploy & Optimize</h3>
              <p className="text-sm text-white/90">Going live and running continuous A/B split tests to lift ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['E-commerce / D2C', 'B2B SaaS', 'Info-Products', 'Coaching & Education', 'Agencies', 'Healthcare Clinics', 'Real Estate', 'Local Retail'].map((ind, i) => (
              <span key={i} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold text-[#E6EEF2] shadow-sm text-sm hover:bg-[#0097B2] hover:border-[#0097B2] transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ RELATED SERVICES */}
      <section className="py-20 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Feed Your Automations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/lead-generation-systems" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-magnet"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Lead Generation</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Get more emails on your list.</p>
              </div>
            </Link>
            <Link href="/services/sales-funnel-conversion-optimization" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-filter"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Sales Funnels & CRO</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Capture leads effectively.</p>
              </div>
            </Link>
            <Link href="/services/content-marketing" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-pen-nib"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Content Marketing</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Lead magnets & copywriting.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 12️⃣ FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-[#0097B2] text-white rotate-180 shadow-md' : 'bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10'}`}>
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Automate Your Revenue</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Stop ignoring your existing customers. Let's build an email and SMS infrastructure that prints money on autopilot.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Request Retention Audit <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20scale%20my%20email%20marketing.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}