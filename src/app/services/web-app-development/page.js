"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function WebAppDevelopmentPage() {
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
          subject: "💻 New Lead: Web App / SaaS Development",
          from_name: "SM NextGen Services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "App Idea / Industry": formData.business,
          "Project Budget": formData.budget,
        })
      });

      const result = await response.json();

      if (result.success) {
        // 2. Redirect to WhatsApp with details
        const leadMsg = `*New Web App Development Request* 💻🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*App Idea/Industry:* ${formData.business}\n*Project Budget:* ${formData.budget}\n\nPlease review my details and schedule a technical scoping call.`;
        
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
    { q: "What tech stack do you use for Web Applications?", a: "We specialize in modern, highly scalable Javascript frameworks. Our preferred stack is React.js or Next.js for the frontend, and Node.js or Python for the backend. We use PostgreSQL or MongoDB for databases, ensuring enterprise-level speed and security." },
    { q: "Do I own the source code after development?", a: "100%. Once the project is completed and fully paid for, all Intellectual Property (IP) rights and source code repositories (GitHub/GitLab) are transferred completely to you or your company." },
    { q: "Can you build a Minimum Viable Product (MVP) for my startup?", a: "Yes. We have specialized MVP sprint packages designed specifically for funded startups and founders who need to get a working product to market quickly (usually within 6-10 weeks) to test with real users or pitch to investors." },
    { q: "Will my web app integrate with my existing software?", a: "Absolutely. We build API-first applications. Whether you need to integrate with Stripe for payments, Twilio for SMS, Salesforce for CRM, or any custom third-party API, we can connect it seamlessly." },
    { q: "How do you handle hosting and scalability?", a: "We deploy on scalable cloud infrastructure using AWS (Amazon Web Services), Google Cloud Platform (GCP), or Vercel. This ensures that whether you have 100 users today or 100,000 users tomorrow, your app won't crash." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
               alt="Web Application Code and Dashboard" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-laptop-code"></i> Custom Software Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Build Scalable <br /> <span className="text-[#0097B2]">Web Applications.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                We engineer powerful, secure, and scalable SaaS platforms, custom CRM systems, and bespoke internal tools that drive operational efficiency and create new revenue streams.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Custom SaaS & Portal Development</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Modern React.js / Next.js Architecture</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Enterprise-Grade Security & Cloud Hosting</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Discuss Your App Idea
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Development Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Web Application Dashboard UI" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">System Status</p>
                      <p className="font-bold text-lg leading-tight">99.99% Uptime SLA</p>
                    </div>
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2]">
                      <i className="fas fa-server"></i>
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
            <div className="flex items-center gap-2"><i className="fab fa-react text-[#0097B2] text-xl"></i> React & Next.js Experts</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fab fa-aws text-[#0097B2] text-xl"></i> Cloud Native Deployment</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-shield-alt text-[#0097B2] text-xl"></i> SOC2 / GDPR Compliant Ready</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Off-The-Shelf Software Doesn't Fit Every Business</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            Trying to force your unique business processes into generic SaaS tools leads to frustration, data silos, and lost productivity. We build <strong>custom web applications</strong> designed entirely around how your team actually works—whether you need a client-facing portal, an automated internal CRM, or are building the next big SaaS startup.
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
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">The hidden costs of bad software:</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-layer-group"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Subscription Fatigue</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Paying thousands of dollars monthly for 10 different SaaS tools just to run your basic business operations.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-database"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Isolated Data Silos</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your sales data is in one app, your inventory in another, and customer support in a third. Nothing talks to each other.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-server"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Scaling Bottlenecks</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">As your user base grows, your legacy WordPress or no-code app crashes under the load, ruining customer trust.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-user-injured"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Poor User Experience</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Clunky interfaces require weeks of employee training and cause high churn rates among paying customers.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Enterprise-Grade Architecture</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">API-First Microservices</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We decouple the frontend from the backend. This means your app can easily scale, integrate with third-party tools, and serve as the backend for future mobile apps.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Component-Based UI (React)</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We build reusable UI components. This ensures your dashboard looks perfectly consistent, loads instantly without page refreshes, and feels like a native desktop app.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Scalable Cloud Databases</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We architect robust relational (PostgreSQL) or NoSQL (MongoDB) databases designed to handle millions of queries securely without bottlenecking.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Bank-Level Security & Auth</h3>
                      <p className="text-sm text-[#E6EEF2]">We implement strict JWT authentication, OAuth (Google/Apple login), and Role-Based Access Control (RBAC) so users only see data they are authorized to see.</p>
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Technical Scoping Call</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Discuss your software requirements with our lead architects.</p>
                  
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
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Project Type</label>
                        <select name="business" value={formData.business} onChange={handleFormChange} required 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                          <option value="" disabled>Select</option>
                          <option value="New SaaS Platform">New SaaS Platform</option>
                          <option value="Internal Business Tool/CRM">Internal Business Tool / CRM</option>
                          <option value="Client/Vendor Portal">Client / Vendor Portal</option>
                          <option value="Other Custom App">Other Custom App</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">App Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Select</option>
                            <option value="1L-5L">₹1L - ₹5L</option>
                            <option value="5L-15L">₹5L - ₹15L</option>
                            <option value="15L+">₹15L+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Tech Call
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
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20discuss%20a%20custom%20web%20app%20idea.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-code-branch"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">100% Code Ownership</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">You own the IP and the GitHub repo.</p>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Development System</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From complex backend logic to pixel-perfect dashboards, here is what our engineering team delivers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Custom Frontend Interfaces", desc: "Interactive, SPA (Single Page Application) dashboards built with React.js for zero-lag user experiences.", icon: "fas fa-desktop" },
              { title: "Robust Backend APIs", desc: "RESTful or GraphQL APIs built in Node.js/Python to securely handle business logic and data routing.", icon: "fas fa-server" },
              { title: "Relational Databases", desc: "Complex data structures mapped in PostgreSQL to ensure data integrity and query speed.", icon: "fas fa-database" },
              { title: "Role-Based Access (RBAC)", desc: "Multi-tier user accounts (Admin, Manager, User) with strict permissions and view restrictions.", icon: "fas fa-users-cog" },
              { title: "Third-Party API Integrations", desc: "Connecting your app seamlessly with Twilio (SMS), SendGrid (Email), Slack, or any external service.", icon: "fas fa-plug" },
              { title: "Subscription & Billing", desc: "Stripe or Razorpay integrations for SaaS recurring billing, usage limits, and invoicing.", icon: "fas fa-file-invoice-dollar" },
              { title: "Real-Time WebSockets", desc: "Live data updating instantly without refreshing—perfect for chat apps, notifications, or stock trackers.", icon: "fas fa-broadcast-tower" },
              { title: "Data Visualization", desc: "Beautiful, interactive charts and graphs using Chart.js or D3 to make sense of complex metrics.", icon: "fas fa-chart-pie" },
              { title: "Cloud Hosting & CI/CD", desc: "Automated deployment pipelines to AWS or Vercel so updates go live seamlessly without downtime.", icon: "fas fa-cloud-upload-alt" },
              { title: "Automated QA Testing", desc: "Unit and integration testing (Jest/Cypress) to catch bugs before they ever reach your users.", icon: "fas fa-bug" },
              { title: "Export/Import Tools", desc: "Functionality allowing your team to easily download CSV/PDF reports or bulk upload data.", icon: "fas fa-file-export" },
              { title: "Scalability Planning", desc: "Codebase architecture designed to easily handle vertical scaling when your user base explodes.", icon: "fas fa-expand-arrows-alt" }
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
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Stop duct-taping software together.</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Build a single, centralized source of truth for your business operations or launch your next big SaaS product with confidence.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Talk to an Architect
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Development Scopes</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From rapid prototypes to massive enterprise systems.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Startup MVP</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Fast time-to-market to test ideas and secure funding.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Core Functionality Build</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> User Auth & Basic DB</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Clean UI/UX Foundation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 6-8 Weeks Delivery</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</Link>
            </div>
            
            {/* Growth - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Internal Business Tool</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">Custom CRMs and Dashboards to automate your team's workflow.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Advanced Role-Based Auth</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 3rd-Party API Integrations</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Automated PDF/CSV Reports</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> High-Security Cloud Setup</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Request Quote</Link>
            </div>

            {/* Custom/Ecom */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Full SaaS Platform</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Complex, multi-tenant software meant to be sold to the masses.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Multi-Tenant Architecture</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Stripe Subscription Billing</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Advanced Data Visualization</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Long-term Maintenance SLA</li>
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
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How custom web apps reduce overhead and create enterprise value.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Logistics</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Killing Data Silos</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A delivery company managed 50+ drivers using 3 different WhatsApp groups and Google Sheets, causing lost orders.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Built a custom web app for dispatchers and a lightweight mobile view for drivers to mark deliveries complete instantly.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Saved 40+ hours of admin work weekly and reduced missed deliveries to zero.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">SaaS Startup</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">From Idea to Funding</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A founder needed to prove a complex AI-booking concept to investors but had no technical team.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Engineered a robust MVP using Next.js and Firebase in 8 weeks, focusing heavily on a slick, investor-ready UI.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: The working prototype successfully secured ₹1.5Cr in seed funding within 2 months of launch.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Healthcare</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Secure Client Portals</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A clinic was sending sensitive test results via email, posing massive privacy risks and poor patient experience.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Developed a secure, encrypted patient portal where users could log in, view history, and book future appointments directly.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Increased patient retention by 22% and completely eliminated data privacy compliance issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Agile Engineering Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-project-diagram text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Scoping & Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Defining database schemas, API routes, and user flow documentation.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-vector-square text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Prototyping</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Building clickable Figma UI mockups so you can see the app before we code.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-terminal text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Agile Sprints</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Developing features in 2-week cycles with regular demo check-ins.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-rocket text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">QA & Deployment</h3>
              <p className="text-sm text-white/90">Stress testing, bug squashing, and pushing the final build to production servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">Software Solutions For</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Funded Startups', 'Logistics & Supply Chain', 'Healthcare Providers', 'Financial Institutions', 'B2B Enterprises', 'Education/EdTech', 'Real Estate', 'E-commerce Giants'].map((ind, i) => (
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
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Beyond the Web App</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/mobile-app-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-mobile-alt"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Mobile App Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Take your app to iOS & Android.</p>
              </div>
            </Link>
            <Link href="/services/automation-integration-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-plug"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">API Integrations</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Connect your tools via Zapier/APIs.</p>
              </div>
            </Link>
            <Link href="/services/ui-ux-design" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-paint-brush"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">UI/UX Design</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Figma prototyping & design systems.</p>
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Have a Vision? Let's Engineer It.</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Whether you are scaling an internal operation or building the next big SaaS product, our technical architects are ready to build it.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Request Technical Call <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20discuss%20a%20custom%20software%20build.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}