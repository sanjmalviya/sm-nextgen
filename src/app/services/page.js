"use client";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const cursorRef = useRef(null);
  
  // Sanity se data hold karne ke liye React State
  const [sanityServices, setSanityServices] = useState({
    Marketing: [],
    Automation: [],
    Finance: []
  });

  useEffect(() => {
    // 1. Mouse Glow Animation
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // 2. Sanity Data Fetching (React Way)
    const PROJECT_ID = "y31b2jo0";
    const DATASET = "production";
    const QUERY = encodeURIComponent('*[_type == "service"]{title, "slug": slug.current, category, cardBadge, cardIcon, cardShortDesc, cardPrice, "imageUrl": cardBgImage.asset->url}');
    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
      .then(res => res.json())
      .then(({ result }) => {
        if (!result || result.length === 0) return;

        let fetchedData = { Marketing: [], Automation: [], Finance: [] };
        
        result.forEach(service => {
          if (service.category === 'Marketing') fetchedData.Marketing.push(service);
          else if (service.category === 'Automation') fetchedData.Automation.push(service);
          else if (service.category === 'Finance') fetchedData.Finance.push(service);
        });

        setSanityServices(fetchedData); // State update kardi
      })
      .catch(err => console.error("Sanity Fetch Error:", err));

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy transition-colors duration-300 font-body text-gray-800 dark:text-gray-200 overflow-x-hidden selection:bg-brand selection:text-white">
      <div ref={cursorRef} id="cursor-glow" className="hidden md:block"></div>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/50 text-yellow-400 font-bold text-xs tracking-widest uppercase mb-6 animate-bounce">
            🔥 Services Starting @ ₹250
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Complete Business Growth Solutions.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">One Partner. No Headaches.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Your all-in-one growth engine. We seamlessly integrate <strong>Data-Driven Marketing</strong>, <strong>AI Automation</strong>, and <strong>Financial Compliance</strong> to build predictable revenue systems for Indian Founders.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a href="#marketing" className="cat-card cat-marketing rounded-2xl p-6 text-left group">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition"><i className="fas fa-bullhorn"></i></div>
              <h3 className="text-white font-bold text-lg mb-1">Marketing</h3>
              <p className="text-xs text-gray-400">Brand, Ads & SEO</p>
            </a>
            <a href="#growth" className="cat-card cat-growth rounded-2xl p-6 text-left group">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition"><i className="fas fa-robot"></i></div>
              <h3 className="text-white font-bold text-lg mb-1">Automation</h3>
              <p className="text-xs text-gray-400">AI, CRM & Leads</p>
            </a>
            <a href="#finance" className="cat-card cat-finance rounded-2xl p-6 text-left group">
              <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition"><i className="fas fa-calculator"></i></div>
              <h3 className="text-white font-bold text-lg mb-1">Finance</h3>
              <p className="text-xs text-gray-400">Legal & Accounting</p>
            </a>
          </div>
        </div>
      </section>

      {/* MARKETING SECTION */}
      <section id="marketing" className="py-20 bg-white dark:bg-navy border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-2xl"><i className="fas fa-bullhorn"></i></div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Branding & Marketing</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Build Authority & Acquire Customers.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 1. Static Cards */}
            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Brand Strategy" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-pink-600">SAVE 10%</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-pink-400"><i className="fas fa-chess"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Brand Strategy</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Positioning & Business Roadmap.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹11,000 - ₹25,000</span>
                </div>
                <a href="/service-brand-strategy" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop" alt="Logo Design" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-pink-600">BEST SELLER</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-pink-400"><i className="fas fa-pen-nib"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Logo Design</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Professional Custom Logo.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹250 - ₹1,500</span>
                </div>
                <a href="/service-logo-design" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop" alt="Visual Identity" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-pink-600">FULL KIT</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-pink-400"><i className="fas fa-palette"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Visual Identity</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Complete Brand Kit.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹6,500 - ₹15,000</span>
                </div>
                <a href="/service-visual-identity" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" alt="Social Media Marketing" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-blue-600">MONTHLY</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-blue-400"><i className="fas fa-share-alt"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Social Media Mgmt</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Organic Growth & Mgmt.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹7,000 - ₹25,000</span>
                </div>
                <a href="/service-social-media" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="Content Creation" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-blue-600">CREATIVE</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-blue-400"><i className="fas fa-video"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Content Creation</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Posts/Reels/Ad Creatives.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹350 - ₹1,500</span>
                </div>
                <a href="/service-content-creation" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" alt="Meta Ads" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-green-700">ROI FOCUS</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-blue-400"><i className="fab fa-meta"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Meta Ads Mgmt</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">FB/Insta Paid Campaigns.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹5,500 - ₹20,000</span>
                </div>
                <a href="/service-ads" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Google Ads" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-blue-600">PPC</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-blue-400"><i className="fab fa-google"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Google Ads Mgmt</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Search & YouTube Ads.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹5,500 - ₹20,000</span>
                </div>
                <a href="/service-ads" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop" alt="SEO Services" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-green-700">RANK #1</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-green-400"><i className="fas fa-search-plus"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">SEO & Content</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Monthly Ranking Service.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹7,000 - ₹25,000</span>
                </div>
                <a href="/service-seo" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="PPC Percent" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-green-700">LOW FEE</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-green-400"><i className="fas fa-percentage"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">PPC/Ads Mgmt %</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Performance Based Fee.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">7% - 22% <span className="text-xs text-gray-400 font-normal">of spend</span></span>
                </div>
                <a href="/service-ads" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" alt="Influencer Marketing" />
              <div className="card-overlay"></div>
              <span className="discount-badge text-pink-600">VIRAL</span>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="floating-icon text-pink-400"><i className="fas fa-star"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Influencer Marketing</h3>
                <p className="text-xs text-gray-300 mb-3 opacity-90">Campaign Management.</p>
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                  <span className="text-xl font-bold text-white">₹4,500 - ₹15,000</span>
                </div>
                <a href="/service-influencer-marketing" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
              </div>
            </div>

            {/* 2. Dynamic Cards (Sanity) */}
            {sanityServices.Marketing.map((service, index) => (
              <div key={index} className="service-card group">
                <img src={service.imageUrl || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80'} alt={service.title} />
                <div className="card-overlay"></div>
                {service.cardBadge && <span className="discount-badge text-brand">{service.cardBadge}</span>}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="floating-icon text-brand"><i className={service.cardIcon || "fas fa-star"}></i></div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-300 mb-3 opacity-90">{service.cardShortDesc}</p>
                  <div className="mb-4">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                    <span className="text-xl font-bold text-white">{service.cardPrice || 'Custom Pricing'}</span>
                  </div>
                  <a href={`/services/${service.slug}`} className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* AUTOMATION & GROWTH SECTION */}
      <section id="growth" className="py-20 bg-light dark:bg-[#081b33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-2xl"><i className="fas fa-robot"></i></div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Growth & Automation</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Scale without chaos.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 1. Static Cards */}
             <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" alt="Lead Generation" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">GUARANTEED</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fas fa-magnet"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Lead Gen Systems</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Automated Pipelines.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹11,000 - ₹30,000</span>
                    </div>
                    <a href="/service-lead-generation" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Funnels" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">SYSTEMS</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fas fa-filter"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Marketing Funnels</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Funnel Design & Setup.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹9,000 - ₹25,000</span>
                    </div>
                    <a href="/service-marketing-funnels" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2074&auto=format&fit=crop" alt="CRM Setup" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">HUBSPOT</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fas fa-tasks"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">CRM Setup</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Business Automation.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹13,500 - ₹35,000</span>
                    </div>
                    <a href="/service-crm-setup" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop" alt="WhatsApp Automation" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">HOT</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fab fa-whatsapp"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Email/WA Automation</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Auto-Marketing Setup.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹7,000 - ₹20,000</span>
                    </div>
                    <a href="/service-whatsapp-automation" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Enablement" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">FUTURE</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fas fa-brain"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">AI Enablement</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Tools & Prompt Eng.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹7,000 - ₹20,000</span>
                    </div>
                    <a href="/service-ai-enablement" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Growth Consulting" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-purple-700">STRATEGY</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-purple-400"><i className="fas fa-chart-line"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Growth Consulting</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Startup Strategy.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹2,500 - ₹10,000</span>
                    </div>
                    <a href="/service-growth-consulting" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            {/* 2. Dynamic Automation Cards */}
            {sanityServices.Automation.map((service, index) => (
              <div key={index} className="service-card group">
                <img src={service.imageUrl || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80'} alt={service.title} />
                <div className="card-overlay"></div>
                {service.cardBadge && <span className="discount-badge text-brand">{service.cardBadge}</span>}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="floating-icon text-brand"><i className={service.cardIcon || "fas fa-star"}></i></div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-300 mb-3 opacity-90">{service.cardShortDesc}</p>
                  <div className="mb-4">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                    <span className="text-xl font-bold text-white">{service.cardPrice || 'Custom Pricing'}</span>
                  </div>
                  <a href={`/services/${service.slug}`} className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCE & LEGAL SECTION */}
      <section id="finance" className="py-20 bg-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-2xl"><i className="fas fa-file-invoice-dollar"></i></div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Finance & Legal</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Compliance & Accounting.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 1. Static Cards */}
            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" alt="Financial Planning" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">SAVE 10%</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-coins"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Financial Planning</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Budgeting & Strategy.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹7,000 - ₹20,000</span>
                    </div>
                    <a href="/service-financial-planning" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Accounting" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">ESSENTIAL</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-book"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Accounting</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Bookkeeping Service.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹7,000 - ₹20,000</span>
                    </div>
                    <a href="/service-accounting" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop" alt="GST Filing" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-orange-700">MUST HAVE</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-file-contract"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">GST Filing</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Reg. & Compliance.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹450 - ₹1,500</span>
                    </div>
                    <a href="/service-gst-legal" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=2070&auto=format&fit=crop" alt="Income Tax" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">SEASONAL</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-rupee-sign"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Income Tax</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">ITR Filing & Advisory.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹1,200 - ₹3,000</span>
                    </div>
                    <a href="/service-income-tax" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" alt="Payroll Management" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">HR</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-users"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Payroll Mgmt</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Salaries & PF Slips.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹280 - ₹700</span>
                    </div>
                    <a href="/service-payroll" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1580048915913-54c30580796f?q=80&w=2070&auto=format&fit=crop" alt="Invoice Systems" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">AUTOMATED</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-receipt"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Invoice Systems</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Billing Setup.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹7,000 - ₹20,000</span>
                    </div>
                    <a href="/service-billing-systems" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="MIS Reporting" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-green-700">ANALYTICS</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-chart-pie"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">MIS Reporting</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Financial Reports.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹9,000 - ₹25,000</span>
                    </div>
                    <a href="/service-mis-reporting" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            <div className="service-card group">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Startup Compliance" />
                <div className="card-overlay"></div>
                <span className="discount-badge text-orange-700">STARTUP INDIA</span>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="floating-icon text-green-400"><i className="fas fa-building"></i></div>
                    <h3 className="text-lg font-bold text-white mb-1">Startup Compliance</h3>
                    <p className="text-xs text-gray-300 mb-3 opacity-90">Registration Support.</p>
                    <div className="mb-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                        <span className="text-2xl font-bold text-white">₹2,500 - ₹7,000</span>
                    </div>
                    <a href="/service-startup-registration" className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
            </div>

            {/* 2. Dynamic Finance Cards */}
            {sanityServices.Finance.map((service, index) => (
              <div key={index} className="service-card group">
                <img src={service.imageUrl || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&q=80'} alt={service.title} />
                <div className="card-overlay"></div>
                {service.cardBadge && <span className="discount-badge text-brand">{service.cardBadge}</span>}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="floating-icon text-brand"><i className={service.cardIcon || "fas fa-star"}></i></div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-300 mb-3 opacity-90">{service.cardShortDesc}</p>
                  <div className="mb-4">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">Starts @</span>
                    <span className="text-xl font-bold text-white">{service.cardPrice || 'Custom Pricing'}</span>
                  </div>
                  <a href={`/services/${service.slug}`} className="block w-full py-3 bg-brand hover:bg-brandDark text-white text-center text-xs font-bold rounded-xl transition shadow-lg">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}