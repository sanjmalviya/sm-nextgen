"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function AutomationIntegrationPage() {
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
          subject: "🔌 New Lead: Automation & Integration",
          from_name: "SM NextGen Services",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          "Tools to Connect": formData.business,
          "Project Budget": formData.budget,
        })
      });

      const result = await response.json();

      if (result.success) {
        // 2. Redirect to WhatsApp with details
        const leadMsg = `*New Automation & API Request* 🔌⚙️\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Tools to Connect:* ${formData.business}\n*Project Budget:* ${formData.budget}\n\nPlease review my details and schedule an integration scoping call.`;
        
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
    { q: "What is the difference between Zapier/Make and Custom API Integrations?", a: "Zapier and Make.com are 'no-code' platforms that connect popular apps quickly, perfect for standard workflows. However, for highly complex data, heavy server loads, or connecting proprietary legacy software, we build Custom APIs using Node.js or Python to create a dedicated 'middleware' bridge." },
    { q: "Can you integrate our website with our CRM?", a: "Yes. We regularly connect WordPress, Webflow, React, or Shopify websites directly to CRMs like HubSpot, Salesforce, Zoho, and ActiveCampaign to ensure leads and customer data flow instantly without manual entry." },
    { q: "Will automations slow down my website?", a: "No, in fact, they often speed it up. By shifting heavy processing (like sending emails or pushing data to a CRM) to background webhooks and server-side functions, your website's front-end remains lightning fast." },
    { q: "What happens if a third-party API changes or breaks?", a: "APIs update frequently. Our maintenance SLAs include error monitoring and webhook tracking. If an endpoint fails (e.g., Facebook changes their Conversions API), we get alerted and update the logic immediately." },
    { q: "Are these data transfers secure and compliant?", a: "Absolutely. We utilize secure OAuth authentication, encrypted API keys, and HTTPS protocols to ensure your customer data is transferred safely, maintaining full compliance with GDPR and local data privacy laws." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION (Always Dark #0B2545 for Premium Impact) */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
               alt="API Integrations and Code Automation" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-plug"></i> Seamless Connectivity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Stop Manual Data Entry. <br /> <span className="text-[#0097B2]">Automate Everything.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                We build intelligent bridges between your disconnected software. From Zapier workflows to custom API middleware, we ensure your sales, marketing, and operations systems talk to each other in real-time.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Custom API Integrations & Webhooks</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Zapier / Make.com Enterprise Workflows</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Seamless CRM & ERP Synchronization</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Map My Workflows
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View Integration Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Automation Dashboard Map" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Operational Impact</p>
                      <p className="font-bold text-lg leading-tight">40+ Hrs/Week Saved on Admin</p>
                    </div>
                    <div className="w-12 h-12 bg-[#0097B2]/20 rounded-full flex items-center justify-center text-[#0097B2]">
                      <i className="fas fa-clock"></i>
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
            <div className="flex items-center gap-2"><i className="fas fa-bolt text-[#0097B2] text-xl"></i> Zapier Certified</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-project-diagram text-[#0097B2] text-xl"></i> Make.com Experts</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-code-branch text-[#0097B2] text-xl"></i> Custom Node/Python APIs</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The True Cost of Data Silos</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            When your website, CRM, invoicing software, and marketing platforms don't communicate natively, your team pays the price in <strong>manual data entry</strong>. Not only does this waste hundreds of hours of payroll, but human error leads to missed follow-ups and lost revenue. We fix this by wiring your tools together so data flows automatically.
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
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Are these bottlenecks stunting your growth?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-copy"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Copy-Paste Nightmares</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your team downloads CSVs from Facebook Ads, formats them in Excel, and manually uploads them into your CRM every single morning.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-hourglass-end"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Delayed Lead Response</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">A hot lead fills out a form, but your sales team doesn't get notified for hours. By the time they call, the lead has bought from a competitor.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-exclamation-triangle"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Human Error in Billing</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Manually moving purchase data from your e-commerce platform to your accounting software results in mismatched invoices and tax headaches.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-cubes"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Fragmented Systems</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">You use 8 different SaaS tools, but none of them share data natively, creating massive operational blind spots for leadership.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">How We Connect Your Business</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Real-Time Webhook Triggers</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We set up instantaneous listeners. The exact millisecond a payment clears or a form is submitted, the data is caught and pushed forward.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Zapier & Make Architecture</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We design multi-step conditional logic (If/Then routing). Lead from Facebook? Route to Sales. Support ticket? Route to Slack and Jira.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Custom API Middleware</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">When no-code tools fail, our developers write custom server scripts to bridge the gap between proprietary platforms and public apps.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Data Parsing & Formatting</h3>
                      <p className="text-sm text-[#E6EEF2]">We ensure data isn't just moved, but cleaned. Names are capitalized, phone numbers formatted, and duplicates merged automatically.</p>
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Workflow Scoping Call</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Tell us which tools aren't talking, and we'll architect the bridge.</p>
                  
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
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Which tools need connecting?</label>
                        <input type="text" name="business" value={formData.business} onChange={handleFormChange} required placeholder="e.g. Shopify to Salesforce" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Project Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Select</option>
                            <option value="Under 25k">Under ₹25k</option>
                            <option value="25k-75k">₹25k - ₹75k</option>
                            <option value="75k+">₹75k+</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Scoping Call
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
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20automate%20my%20workflows.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-shield-check"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Secure Data Transfer</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">OAuth & GDPR compliant pipelines.</p>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Automation Arsenal</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From native no-code tools to complex custom server endpoints, we build the plumbing your business needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Zapier Ecosystems", desc: "Setting up multi-step Zaps with conditional formatting and delays to automate daily marketing and admin tasks.", icon: "fas fa-bolt" },
              { title: "Make.com (Integromat)", desc: "Building highly complex, visual branching logic and data loops for enterprise-grade automation.", icon: "fas fa-project-diagram" },
              { title: "CRM Syncing", desc: "Bi-directional syncing between Salesforce, HubSpot, or GoHighLevel and your frontend website.", icon: "fas fa-users-cog" },
              { title: "Custom Webhooks", desc: "Writing custom listeners that catch POST/GET requests the second an event happens on any platform.", icon: "fas fa-satellite-dish" },
              { title: "E-Commerce Accounting Sync", desc: "Automatically pushing Shopify/WooCommerce orders into QuickBooks or Xero for flawless tax filing.", icon: "fas fa-file-invoice-dollar" },
              { title: "Automated Lead Routing", desc: "Round-robin distribution systems that assign incoming leads to sales reps based on zip code or availability.", icon: "fas fa-route" },
              { title: "Slack/Discord Alerts", desc: "Triggering instant team notifications when a high-ticket payment clears or a server error occurs.", icon: "fab fa-slack" },
              { title: "Google Sheets as a Database", desc: "Turning spreadsheets into powerful live dashboards using Apps Script and API integrations.", icon: "fas fa-table" },
              { title: "Payment Gateway Bridging", desc: "Connecting Stripe, Razorpay, or PayPal to automatically grant membership access upon payment.", icon: "fas fa-credit-card" },
              { title: "Third-Party API Wrappers", desc: "Creating custom middleware in Node.js to connect tools that don't have native integrations.", icon: "fas fa-code" },
              { title: "Data Parsing & Formatting", desc: "Automated scripts that clean up messy data, format phone numbers, and capitalize names before saving.", icon: "fas fa-broom" },
              { title: "Error Handling & Alerts", desc: "Building fall-back logic so if an API fails, your team is alerted instantly and data is queued, not lost.", icon: "fas fa-exclamation-triangle" }
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
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Still relying on copy-paste?</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Discover how many hours of payroll you can save every week by letting APIs handle your data transfer.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Map Your Workflows
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Integration Scopes</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From simple 2-app zaps to enterprise custom middleware.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Basic Workflows</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Perfect for connecting ads directly to a simple CRM or email tool.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Zapier / Make Setup</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Up to 5 'Zaps' or Scenarios</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Form to CRM Sync</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Simple Email Auto-Responders</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</Link>
            </div>
            
            {/* Growth - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Advanced Routing</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">For teams needing conditional logic and data formatting.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Conditional If/Then Branching</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Data Parsing & Cleanup</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom Webhook Receivers</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> E-Com to Accounting Sync</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Request Quote</Link>
            </div>

            {/* Custom/Ecom */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Custom Middleware</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For proprietary software that doesn't have native Zapier integrations.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom Node.js/Python Servers</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Direct Database Syncing</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> High-Volume Data Queues</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> OAuth & SLA Monitoring</li>
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
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Grounded Business Impact</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How seamless integration translates directly to operational efficiency and speed.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">B2B Sales Team</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Zero Lead Leakage</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Leads from Facebook Lead Ads were manually downloaded twice a day, leading to a 12-hour response delay.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Built a Make.com scenario that catches the lead, formats the phone number, pushes it to Salesforce, and alerts the sales rep on Slack instantly.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Response time dropped from 12 hours to under 3 minutes. Close rates doubled.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">E-Commerce</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Automating Invoicing</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A Shopify store's accountant spent 20 hours a week manually entering 500+ weekly orders into QuickBooks.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Deployed a webhook integration that instantly pushes order data, creates the customer in QuickBooks, and generates the paid invoice.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Completely eliminated 80 hours of manual bookkeeping per month with 100% tax compliance accuracy.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Marketing Agency</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Automated Client Onboarding</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Onboarding a new client required creating a Google Drive folder, setting up a Slack channel, and sending 3 intro emails manually.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Created a single Typeform onboarding link. When submitted, Zapier automatically spins up the Drive folders, creates the Slack channel, and sends the welcome sequence.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Perfect, error-free onboarding experience delivered instantly, saving account managers 2 hours per client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Integration Mapping Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-search text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Systems Audit</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Identifying every software tool your team currently uses and finding the manual data gaps.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-project-diagram text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Logic Mapping</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Creating visual flowchart diagrams defining exactly "If X happens, do Y and Z".</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-code text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Build & Bridge</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Setting up the Zapier workflows, webhooks, or coding the custom API middleware.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-vial text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">Test & Live</h3>
              <p className="text-sm text-white/90">Running rigorous dummy data through the system to ensure zero errors before pushing live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">We Automate Workflows For</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['E-commerce Operations', 'B2B Sales Teams', 'Real Estate Brokerages', 'Digital Agencies', 'SaaS Onboarding', 'Accounting Firms', 'Healthcare Clinics'].map((ind, i) => (
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
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Expand Your Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/web-app-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-laptop-code"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Web App Dev</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">SaaS & Custom Dashboards.</p>
              </div>
            </Link>
            <Link href="/services/funnel-landing-page-development" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-filter"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Sales Funnels</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Capture leads effectively.</p>
              </div>
            </Link>
            <Link href="/services/ai-business-automation-systems" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-robot"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">AI Automation</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Intelligent AI workflows.</p>
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
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Ready to Connect Your Business?</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Stop paying your team to do the work a simple API integration can do in milliseconds. Let's automate your scaling process.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Request Integration Call <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20discuss%20API%20integrations.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}