"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function WebsiteMaintenancePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      // 1. Send data to Web3Forms (Email)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "ec0688f4-c3f4-4282-938e-31f398af51d9",
          subject: "🛡️ New Lead: Maintenance & Tech Support",
          from_name: "SM NextGen Services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "Website URL": formData.business,
          "Monthly Budget": formData.budget,
        })
      });

      const result = await response.json();

      if (result.success) {
        // 2. Redirect to WhatsApp with details
        const leadMsg = `*New Tech Support / Maintenance Request* 🛡️🛠️\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Website URL:* ${formData.business}\n*Monthly Budget:* ${formData.budget}\n\nPlease review my details and schedule a technical audit call.`;
        
        setTimeout(() => {
          window.open(getWhatsAppLink(leadMsg), '_blank');
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", business: "", budget: "" });
        }, 1500);
      } else {
        alert("Mail system error: " + result.message);
        setSubmitted(false);
      }
    } catch (error) {
      console.error("API error, proceeding to WhatsApp", error);
      alert("Network error. Please try again.");
      setSubmitted(false);
    }
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "Why do I need a monthly maintenance plan?", a: "Websites are like software—they need constant updates. Plugins become outdated, security vulnerabilities emerge, and databases get bloated. A maintenance plan ensures your site stays fast, secure from hackers, and online 24/7 without you lifting a finger." },
    { q: "What happens if my website gets hacked or goes down?", a: "If you are on our maintenance SLA, our monitoring systems alert us the exact second your site drops. Our tech team jumps in immediately to restore your site using our daily cloud backups, usually fixing the issue before you or your customers even notice." },
    { q: "Do you maintain websites that you didn't build?", a: "Yes. Before taking over, we perform a deep technical audit of your current codebase, fix any existing security holes, optimize the speed, and then migrate it to our secure maintenance protocols." },
    { q: "Are content updates included in the support plans?", a: "Yes! Our premium support plans include dedicated developer hours every month. You can use these hours to swap out images, publish new blogs, add new products, or tweak the UI without needing to hire a full-time webmaster." },
    { q: "How often do you backup my website?", a: "We perform automated daily backups stored on secure, off-site cloud servers (like AWS). In case of a catastrophic server failure or malicious attack, we can roll back your entire site to how it looked yesterday with zero data loss." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
               alt="Website Maintenance and Tech Support" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-shield-alt"></i> Total Digital Protection
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Your Business Can't <br /> <span className="text-[#0097B2]">Afford Downtime.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                We protect, optimize, and manage your digital infrastructure so you can focus on growing your business. Stop worrying about hacks, slow load times, and broken plugins.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> 24/7 Uptime & Security Monitoring</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Daily Automated Cloud Backups</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Ongoing Speed & SEO Optimization</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Secure Your Website
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Support Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30] p-4">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Server Security and Analytics Dashboard" className="w-full h-[400px] object-cover rounded-2xl opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent rounded-3xl"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Server Status</p>
                      <p className="font-bold text-lg leading-tight">Systems Operational: 99.99%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                      <i className="fas fa-check-circle"></i>
                    </div>
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
            <div className="flex items-center gap-2"><i className="fas fa-cloud-upload-alt text-[#0097B2] text-xl"></i> Daily Cloud Backups</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-bug text-[#0097B2] text-xl"></i> Malware Protection</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-tachometer-alt text-[#0097B2] text-xl"></i> Peak Performance Tuning</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">A Broken Site = Lost Revenue</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            Imagine spending thousands on ads, only to have your site crash during checkout because of an outdated plugin. Without regular maintenance, websites accumulate "technical debt", leading to slow loading speeds, broken forms, and massive security vulnerabilities. We act as your <strong>dedicated technical webmasters</strong>, keeping everything flawless behind the scenes.
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
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">The high cost of ignoring maintenance:</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-skull-crossbones"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Hacks & Malware</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Outdated themes and plugins are the #1 entry point for hackers. A compromised site destroys your SEO ranking and customer trust instantly.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-hourglass-end"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Creeping Slowdowns</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Over time, bloated databases and unoptimized images drastically slow down your site, causing high bounce rates and lost ad spend.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-exclamation-triangle"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Silent Downtime</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your server crashes on a Sunday night, but you don't realize it until Monday morning. You just lost 12 hours of potential sales.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-database"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Catastrophic Data Loss</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">If you don't have automated, off-site cloud backups, a single server error can delete years of customer data and content permanently.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Proactive Support System</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Enterprise Web Application Firewall (WAF)</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We deploy strict firewalls that intercept malicious traffic, block brute-force login attempts, and shield your site before threats even reach your server.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Automated Uptime Monitors</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Our systems ping your site every 60 seconds. If it goes down, our dev team gets an instant alert on their phones to fix it immediately.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Safe Sandbox Updates</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Before updating core files or plugins, we test them in a private staging environment to ensure nothing breaks on your live website.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">On-Demand Developer Hours</h3>
                      <p className="text-sm text-[#E6EEF2]">Need a new banner added? A product price changed? Just email our support desk and our engineers will deploy the update within hours.</p>
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Request Tech Audit</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Let's audit your site for speed, security flaws, and maintenance needs.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Website URL</label>
                        <input type="url" name="business" value={formData.business} onChange={handleFormChange} required placeholder="https://www.yourdomain.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Monthly Support Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Select</option>
                            <option value="Under 15k">Under ₹15k</option>
                            <option value="15k-40k">₹15k - ₹40k</option>
                            <option value="40k+">₹40k+ (Enterprise)</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Analyze My Website
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
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20need%20tech%20support%2Fmaintenance%20for%20my%20website.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-stopwatch"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">SLA Backed</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">Guaranteed response times.</p>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Webmaster Arsenal</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Everything included in our premium tech support and maintenance SLAs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "24/7 Uptime Monitoring", desc: "Automated pings every 60 seconds. If your site drops, our dev team is alerted immediately.", icon: "fas fa-heartbeat" },
              { title: "Daily Cloud Backups", desc: "Off-site database and file backups to AWS to ensure you never lose a single byte of customer data.", icon: "fas fa-cloud-upload-alt" },
              { title: "Core & Plugin Updates", desc: "Safe, sandbox-tested updates for your CMS, plugins, and server tech stack to prevent breaks.", icon: "fas fa-sync" },
              { title: "Malware & Security Scans", desc: "Daily deep-level scans looking for malicious code injections, backdoors, and vulnerabilities.", icon: "fas fa-shield-virus" },
              { title: "Speed Optimization", desc: "Regular database cleanups, image compression, and cache clearing to keep load times under 2 seconds.", icon: "fas fa-tachometer-alt" },
              { title: "SSL Certificate Mgt.", desc: "Automated renewals and strict HTTPS enforcement to ensure customer data is encrypted.", icon: "fas fa-lock" },
              { title: "Broken Link Fixing", desc: "Crawling your site weekly to fix 404 errors that frustrate users and hurt your SEO rankings.", icon: "fas fa-link" },
              { title: "Priority Tech Support", desc: "A direct slack channel or ticketing system straight to our developers for rapid bug fixes.", icon: "fas fa-headset" },
              { title: "Spam Protection", desc: "Implementing invisible reCAPTCHA and advanced firewalls to block bot traffic and spam forms.", icon: "fas fa-ban" },
              { title: "Monthly Health Reports", desc: "Detailed PDF reports showing uptime, speed metrics, security blocks, and tasks completed.", icon: "fas fa-file-invoice" },
              { title: "Content Publishing", desc: "Just send us your text and images. Our team will format and publish blogs/pages beautifully.", icon: "fas fa-edit" },
              { title: "Emergency Recovery", desc: "If the worst happens, our disaster recovery protocol restores your site from backup within hours.", icon: "fas fa-medkit" }
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
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Is your website currently hacked or broken?</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Don't panic. Our emergency response team can clean malware, restore backups, and lock down your server immediately.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=URGENT:%20My%20website%20is%20down%2Fhacked.%20I%20need%20help.`} target="_blank" rel="noreferrer" className="inline-flex items-center px-10 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg gap-2">
                <i className="fas fa-ambulance"></i> Request Emergency Support
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Maintenance SLAs</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Predictable monthly support plans. Cancel anytime.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Essential Guard</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Perfect for small business brochure websites.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Weekly Cloud Backups</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Monthly Core/Plugin Updates</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Uptime Monitoring</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Monthly Health Report</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">View Pricing</Link>
            </div>
            
            {/* Growth - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Performance Pro</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">For active E-commerce stores and lead-gen funnels.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Daily Cloud Backups</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 24/7 Security & Uptime Monitor</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Continuous Speed Tuning</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 2 Hrs/mo Developer Time</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">View Pricing</Link>
            </div>

            {/* Custom/Ecom */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Enterprise SLA</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For high-traffic SaaS platforms and custom web apps.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Hourly Database Backups</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Advanced WAF & DDoS Shield</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Priority Slack Channel Support</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Dedicated Account Manager</li>
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
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How proactive tech support saves brands from disaster.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">E-Commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Surviving Black Friday</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A retail brand's shared hosting server crashed during their biggest sale of the year due to massive traffic spikes.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> We migrated them to a scalable cloud infrastructure and implemented a CDN and caching rules before the next sale.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Site handled 50,000+ concurrent users flawlessly, securing their highest revenue day ever.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-red-500/10 text-red-500 text-xs font-bold px-3 py-1 rounded-md">B2B Services</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Malware Recovery</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> An outdated WordPress site was hacked, redirecting their Google SEO traffic to malicious spam sites.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Deployed our emergency protocol: cleaned the infected database, closed the backdoor plugin, and installed a strict WAF.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Site restored in 4 hours. Regained their #1 Google ranking within 72 hours.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Digital Agency</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Fixing Core Web Vitals</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A marketing agency's own site was failing Google's speed tests, making them look bad to potential clients.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Conducted a deep performance audit, minified CSS/JS, converted heavy GIFs to WebP, and optimized the server response time.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Load time went from 4.8s to 0.9s. PageSpeed score hit 98/100 on Mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Onboarding Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-search text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Deep Site Audit</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">We run scanners to find outdated plugins, security gaps, and speed bottlenecks.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-shield-alt text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Secure & Lock Down</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">We install our firewalls, setup automated cloud backups, and force HTTPS everywhere.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-tachometer-alt text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Optimize</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">We clean up your database, optimize heavy images, and configure caching for speed.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-heartbeat text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">24/7 Monitoring</h3>
              <p className="text-sm text-white/90">You get access to a support desk, and our bots monitor your site's uptime around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11️⃣ RELATED SERVICES */}
      <section className="py-20 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Looking For A Complete Rebuild?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/website-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-globe"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Website Development</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Start fresh with modern code.</p>
              </div>
            </Link>
            <Link href="/services/e-commerce-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-shopping-cart"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">E-Commerce Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Upgrade to a faster Shopify store.</p>
              </div>
            </Link>
            <Link href="/services/web-app-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-laptop-code"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Web App Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Build a custom SaaS dashboard.</p>
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Stop Stressing Over Your Website.</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Hand over the keys to our technical experts. We will secure, optimize, and maintain your digital assets so you can get back to running your business.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Get a Free Tech Audit <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20need%20to%20discuss%20website%20maintenance%20and%20support.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}