"use client";
import { useState, useEffect, useRef } from "react";

export default function Pricing() {
  const cursorRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Sanity State
  const [sanityPricing, setSanityPricing] = useState({
    entry: [],
    core: [],
    growth: [],
    finance: []
  });

  const toggleFaq = (i) => {
    setActiveFaq(activeFaq === i ? null : i);
  };

  useEffect(() => {
    // Mouse Glow Logic
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);

    // Sanity Fetch Logic
    const PROJECT_ID = "y31b2jo0";
    const DATASET = "production";
    const QUERY = encodeURIComponent('*[_type == "pricing"]{title, category, badge, badgeIcon, "imageUrl": cardImage.asset->url, price, billingCycle, description, features, buttonText, buttonLink, isPopular}');
    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
      .then(res => res.json())
      .then(({ result }) => {
        if (!result || result.length === 0) return;

        let fetchedData = { entry: [], core: [], growth: [], finance: [] };
        
        result.forEach(pkg => {
          if (fetchedData[pkg.category]) {
            fetchedData[pkg.category].push(pkg);
          }
        });

        setSanityPricing(fetchedData);
      })
      .catch(err => console.error("Sanity Fetch Error:", err));

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  // Helper function to render dynamic sanity cards
  const renderDynamicCards = (packages) => {
    return packages.map((pkg, index) => {
      let themeColor = 'text-brand'; 
      let borderColor = 'border-brand';
      let btnClass = 'bg-brand text-white';
      let featureIconColor = 'text-brand';
      
      if(pkg.category === 'entry') { themeColor = 'text-brand'; borderColor = 'border-brand'; btnClass = 'border border-brand text-brand hover:bg-brand hover:text-white'; featureIconColor = 'text-brand'; }
      if(pkg.category === 'finance') { themeColor = 'text-orange-500'; borderColor = 'border-orange-500'; btnClass = 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'; featureIconColor = 'text-orange-500'; }
      if(pkg.category === 'core') { themeColor = 'text-brand'; borderColor = 'border-brand'; btnClass = 'border border-brand text-brand hover:bg-brand hover:text-white'; featureIconColor = 'text-brand'; }
      if(pkg.category === 'growth') { themeColor = 'text-gray-500'; borderColor = 'border-gray-500'; btnClass = 'border border-gray-500 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5'; featureIconColor = 'text-brand'; }

      let cardClass = pkg.isPopular ? `pricing-card popular-card bg-navy dark:bg-[#1a2333] text-white ${borderColor}` : 'pricing-card';
      let titleClass = pkg.isPopular ? `text-xl font-bold text-brand mb-1` : 'text-xl font-bold text-navy dark:text-white mb-2';
      let priceColorClass = pkg.isPopular ? 'text-white' : themeColor;
      if(pkg.isPopular) btnClass = `bg-brand hover:bg-brandDark text-white font-bold`;

      return (
        <div key={index} className={cardClass}>
          {pkg.isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-6 py-1.5 rounded-b-xl shadow-lg uppercase tracking-widest z-20 border-x border-b border-white/20 whitespace-nowrap w-max">
              ⭐ Most Recommended
            </div>
          )}
          {pkg.badge && (
            <span className="trust-badge" style={pkg.isPopular ? { top: '30px' } : {}}>
              <i className={pkg.badgeIcon || 'fas fa-star'}></i> {pkg.badge}
            </span>
          )}
          
          <img src={pkg.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'} className={`card-banner ${pkg.isPopular ? 'mt-4' : 'rounded-t-[20px]'}`} alt={pkg.title} />
          
          <div className="p-8 pt-4 flex-grow">
              <h3 className={titleClass}>{pkg.title}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl font-bold ${priceColorClass}`}>₹{pkg.price}</span>
                  <span className="text-sm text-gray-500">{pkg.billingCycle}</span>
              </div>
              <p className="text-xs text-gray-500 mb-6 italic">{pkg.description}</p>
              
              <ul className={`feature-list ${pkg.isPopular ? 'text-gray-200' : ''}`}>
                {pkg.features && pkg.features.map((f, i) => (
                  <li key={i}><i className={`fas fa-check-circle ${featureIconColor}`}></i> {f}</li>
                ))}
              </ul>
          </div>
          <div className="p-8 pt-0 mt-auto">
              <a href={pkg.buttonLink} className={`block w-full py-3 ${btnClass} text-center rounded-xl transition text-sm shadow-lg font-bold`}>
                  {pkg.buttonText}
              </a>
          </div>
        </div>
      );
    });
  };

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy transition-colors duration-300 font-body text-gray-800 dark:text-gray-200 overflow-x-hidden selection:bg-brand selection:text-white">
      <div ref={cursorRef} id="cursor-glow" className="hidden md:block"></div>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/50 text-yellow-400 text-accent font-bold text-xs tracking-widest uppercase mb-6 animate-bounce">
            🔥 2025 Growth Packages Live
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Transparent Pricing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Scale Without Surprises.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Bundled for value. Built for results. Whether you are a solo founder or a funded startup, we have a growth engine for you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <a href="#entry" className="cat-card cat-green rounded-xl p-4 group">
              <div className="text-green-400 text-2xl mb-2 group-hover:scale-110 transition"><i className="fas fa-seedling"></i></div>
              <h3 className="text-white font-bold text-sm">Starter</h3>
              <p className="text-[10px] text-gray-400">For New Biz</p>
            </a>
            <a href="#core" className="cat-card cat-yellow rounded-xl p-4 group">
              <div className="text-yellow-400 text-2xl mb-2 group-hover:scale-110 transition"><i className="fas fa-layer-group"></i></div>
              <h3 className="text-white font-bold text-sm">Core</h3>
              <p className="text-[10px] text-gray-400">Consistency</p>
            </a>
            <a href="#growth" className="cat-card cat-blue rounded-xl p-4 group bg-white/10 border-brand">
              <div className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition"><i className="fas fa-chart-line"></i></div>
              <h3 className="text-white font-bold text-sm">Growth</h3>
              <p className="text-[10px] text-gray-400">High ROI</p>
            </a>
            <a href="#finance" className="cat-card cat-orange rounded-xl p-4 group">
              <div className="text-orange-400 text-2xl mb-2 group-hover:scale-110 transition"><i className="fas fa-file-invoice-dollar"></i></div>
              <h3 className="text-white font-bold text-sm">Finance</h3>
              <p className="text-[10px] text-gray-400">Compliance</p>
            </a>
          </div>
        </div>
      </section>

      {/* ENTRY PACKAGES */}
      <section id="entry" className="py-20 bg-white dark:bg-navy border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-500 font-bold tracking-widest text-xs uppercase mb-2 block">Low Risk, High Conversion</span>
            <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Entry / Starter Packages</h2>
            <p className="text-gray-500 text-sm">Best for Trial & Trust Building.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* STATIC CARDS */}
            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-user-check"></i> 50+ Small Biz Joined</span>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Digital Starter" />
              <div className="p-8 pt-4 flex-grow">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Digital Starter Pack</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-brand">₹4,999</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-6 italic">Gets your brand active immediately.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> Social Media (1 Platform)</li>
                  <li><i className="fas fa-check-circle text-brand"></i> 8 Curated Posts / Month</li>
                  <li><i className="fas fa-check-circle text-brand"></i> 1 Reel (Basic Edit)</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Basic Profile Optimization</li>
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="/contact?plan=Digital_Starter_Pack" className="block w-full py-3 border border-brand text-brand font-bold text-center rounded-xl hover:bg-brand hover:text-white transition">Choose Plan</a>
              </div>
            </div>

            <div className="pricing-card relative overflow-visible">
              <span className="trust-badge"><i className="fas fa-fire"></i> Popular for Solopreneurs</span>
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20">UNDER ₹7k</div>
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" className="card-banner rounded-t-[20px]" alt="Brand Presence" />
              <div className="p-8 pt-4 flex-grow">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Brand Presence Pack</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-brand">₹6,999</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-6 italic">Professional consistency.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> 12 High-Quality Posts</li>
                  <li><i className="fas fa-check-circle text-brand"></i> 2 Reels / Short Videos</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Monthly Performance Report</li>
                  <li><i className="fas fa-check-circle text-brand"></i> 1 Growth Consulting Session</li>
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="/contact?plan=Brand_Presence_Pack" className="block w-full py-3 bg-green-500/10 text-green-600 font-bold text-center rounded-xl hover:bg-green-500 hover:text-white transition">Choose Plan</a>
              </div>
            </div>
            
            {/* DYNAMIC CARDS FROM SANITY */}
            {renderDynamicCards(sanityPricing.entry)}
          </div>
        </div>
      </section>

      {/* CORE PACKAGES */}
      <section id="core" className="py-20 bg-light dark:bg-[#081b33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-2 block">Stable MRR + Scalable</span>
            <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Core Business Packages</h2>
            <p className="text-gray-500 text-sm">Establish a strong foundation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* STATIC CARDS */}
            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-users"></i> 20+ Active Clients</span>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Business Starter" />
              <div className="p-8 pt-4 flex-grow">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Business Starter</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-brand">₹12,999</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-6 italic">Multi-platform presence + SEO basics.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> <strong>2 Platforms</strong> Managed</li>
                  <li><i className="fas fa-check-circle text-brand"></i> 16 Posts + 4 Reels</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Basic SEO & Content Marketing</li>
                  <li><i className="fas fa-check-circle text-brand"></i> On-Page Fixes</li>
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="/contact?plan=Business_Starter_Pack" className="block w-full py-3 border border-brand text-brand font-bold text-center rounded-xl hover:bg-brand hover:text-white transition">Get Started</a>
              </div>
            </div>

            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-chart-line"></i> High ROI</span>
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Marketing Growth" />
              <div className="p-8 pt-4 flex-grow">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Marketing Growth</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-brand">₹19,999</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-6 italic">Combines Organic + Paid Visibility.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> 18 Posts + 6 Reels</li>
                  <li><i className="fas fa-bullhorn text-red-500"></i> <strong>Meta Ads Management</strong></li>
                  <li><i className="fas fa-check-circle text-brand"></i> Ad Creative Support</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Audience Optimization</li>
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a href="/contact?plan=Marketing_Growth_Pack" className="block w-full py-3 bg-brand text-white font-bold text-center rounded-xl hover:bg-navy transition shadow-lg">Scale Now</a>
              </div>
            </div>
            
            {/* DYNAMIC CARDS */}
            {renderDynamicCards(sanityPricing.core)}
          </div>
        </div>
      </section>

      {/* GROWTH PACKAGES */}
      <section id="growth" className="py-20 bg-white dark:bg-navy border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">Long Term Brand Fit</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white">Growth Packages 🚀</h2>
            <p className="text-gray-500 text-sm">Full-funnel strategies for serious scaling.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* STATIC CARDS */}
            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-bolt"></i> Fastest Growing</span>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" className="card-banner" alt="Growth Lite" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Growth Lite</h3>
                <div className="text-2xl font-bold text-brand mb-2">₹24,999 <span className="text-xs text-gray-500">/mo</span></div>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> 20 Posts + 8 Reels</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Meta Ads Mgmt</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Monthly SEO</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Monthly Strategy Call</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Growth_Lite" className="block w-full py-2 border border-gray-500 text-gray-500 font-bold text-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition text-sm">Select</a>
              </div>
            </div>

            <div className="pricing-card popular-card bg-navy dark:bg-[#1a2333] text-white border-brand">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-6 py-1.5 rounded-b-xl shadow-lg uppercase tracking-widest z-20 border-x border-b border-white/20 whitespace-nowrap w-max">
                ⭐ Most Recommended
              </div>
              <span className="trust-badge" style={{ top: '30px' }}><i className="fas fa-star"></i> Best Value</span>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="card-banner mt-4" alt="Growth Core" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-xl font-bold text-brand mb-1">Growth Core ⭐</h3>
                <div className="text-3xl font-bold text-white mb-4">₹34,999 <span className="text-xs text-gray-400">/mo</span></div>
                <p className="text-xs text-gray-300 mb-4">Best ROI-focused growth plan.</p>
                <ul className="feature-list text-gray-200">
                  <li><i className="fas fa-check-circle text-brand"></i> <strong>3 Platforms</strong></li>
                  <li><i className="fas fa-check-circle text-brand"></i> 24 Posts + 10 Reels</li>
                  <li><i className="fas fa-bullhorn text-brand"></i> <strong>Meta + Google Ads</strong></li>
                  <li><i className="fas fa-robot text-brand"></i> Email/WA Auto</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Growth_Core" className="block w-full py-3 bg-brand hover:bg-brandDark text-white font-bold text-center rounded-xl transition shadow-lg shadow-brand/20">Get Started 🚀</a>
              </div>
            </div>

            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-layer-group"></i> For High Volume</span>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" className="card-banner" alt="Growth Scale" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Growth Scale</h3>
                <div className="text-2xl font-bold text-brand mb-2">₹49,999 <span className="text-xs text-gray-500">/mo</span></div>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> 28 Posts + 12 Reels</li>
                  <li><i className="fas fa-check-circle text-brand"></i> Adv Ads + SEO</li>
                  <li><i className="fas fa-filter text-brand"></i> <strong>Funnel Design</strong></li>
                  <li><i className="fas fa-magnet text-brand"></i> Lead Gen System</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Growth_Scale" className="block w-full py-2 border border-gray-500 text-gray-500 font-bold text-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition text-sm">Select</a>
              </div>
            </div>

            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-hourglass-half"></i> 3 Slots Left</span>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Growth Partner" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Growth Partner</h3>
                <div className="text-2xl font-bold text-brand mb-2">₹69,999 <span className="text-xs text-gray-500">/mo</span></div>
                <p className="text-xs text-brand font-bold mb-2">"We handle growth, you focus on business."</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle text-brand"></i> Full SMM (30+)</li>
                  <li><i className="fas fa-check-circle text-brand"></i> CRM Setup</li>
                  <li><i className="fas fa-check-circle text-brand"></i> End-to-End Control</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Growth_Partner" className="block w-full py-2 bg-navy text-white font-bold text-center rounded-lg hover:bg-brand transition text-sm">Partner Up</a>
              </div>
            </div>

            {/* DYNAMIC CARDS */}
            {renderDynamicCards(sanityPricing.growth)}
          </div>
        </div>
      </section>

      {/* FINANCE & AUTOMATION PACKAGES */}
      <section id="finance" className="py-20 bg-light dark:bg-[#081b33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2 block">Specialized Solutions</span>
            <h2 className="text-3xl font-heading font-bold text-navy dark:text-white">Finance & Automation</h2>
            <p className="text-gray-500 text-sm">Add-on power ups for your business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* STATIC CARDS */}
            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-hand-holding-usd"></i> Startup Friendly</span>
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Finance Basic" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Finance Basic</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">₹3,999 <span className="text-xs text-gray-500">/mo</span></div>
                <ul className="feature-list mt-4">
                  <li><i className="fas fa-book text-green-600"></i> Accounting & Bookkeeping</li>
                  <li><i className="fas fa-file-contract text-green-600"></i> GST Reg & Compliance</li>
                  <li><i className="fas fa-chart-bar text-green-600"></i> Basic MIS Reporting</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Finance_Basic" className="block w-full py-2 border border-green-600 text-green-600 font-bold text-center rounded-lg hover:bg-green-600 hover:text-white transition text-sm">Subscribe</a>
              </div>
            </div>

            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-shield-alt"></i> Complete Peace of Mind</span>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop" className="card-banner" alt="Finance Pro" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Finance Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">₹7,999 <span className="text-xs text-gray-500">/mo</span></div>
                <ul className="feature-list mt-4">
                  <li><i className="fas fa-check-circle text-green-600"></i> Everything in Basic</li>
                  <li><i className="fas fa-users text-green-600"></i> <strong>Payroll Management</strong></li>
                  <li><i className="fas fa-chart-pie text-green-600"></i> Fin Planning (Quarterly)</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Finance_Pro" className="block w-full py-2 border border-green-600 text-green-600 font-bold text-center rounded-lg hover:bg-green-600 hover:text-white transition text-sm">Go Pro</a>
              </div>
            </div>
            
            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-clock"></i> Save 20hrs/week</span>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="Automation Start" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">Automation Start <span className="text-xs text-orange-500 border border-orange-500 px-2 py-0.5 rounded-full ml-2">One-Time</span></h3>
                <div className="text-2xl font-bold text-orange-500 mb-2">₹14,999</div>
                <ul className="feature-list mt-4">
                  <li><i className="fas fa-tasks text-orange-500"></i> CRM Setup</li>
                  <li><i className="fas fa-magic text-orange-500"></i> Email & WhatsApp Auto</li>
                  <li><i className="fas fa-rocket text-orange-500"></i> Business Process Auto</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=Automation_Start" className="block w-full py-2 border border-orange-500 text-orange-500 font-bold text-center rounded-lg hover:bg-orange-500 hover:text-white transition text-sm">Automate</a>
              </div>
            </div>

            <div className="pricing-card">
              <span className="trust-badge"><i className="fas fa-robot"></i> Future Ready</span>
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" className="card-banner" alt="AI Enablement" />
              <div className="p-6 pt-4 flex-grow">
                <h3 className="text-lg font-bold text-navy dark:text-white">AI Enablement <span className="text-xs text-orange-500 border border-orange-500 px-2 py-0.5 rounded-full ml-2">One-Time</span></h3>
                <div className="text-2xl font-bold text-orange-500 mb-2">₹19,999</div>
                <ul className="feature-list mt-4">
                  <li><i className="fas fa-brain text-orange-500"></i> AI Tools Setup</li>
                  <li><i className="fas fa-chalkboard-teacher text-orange-500"></i> Prompt Eng. Training</li>
                  <li><i className="fas fa-cogs text-orange-500"></i> Workflow Optimization</li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact?plan=AI_Enablement" className="block w-full py-2 border border-orange-500 text-orange-500 font-bold text-center rounded-lg hover:bg-orange-500 hover:text-white transition text-sm">Enable AI</a>
              </div>
            </div>

            {/* DYNAMIC CARDS */}
            {renderDynamicCards(sanityPricing.finance)}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white dark:bg-navy border-t border-gray-100 dark:border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-navy dark:text-white mb-4">Pricing FAQs</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10 text-sm">Common questions about payments & plans.</p>
          
          <div className="space-y-3">
            <div className="bg-light dark:bg-[#162032] rounded-xl overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(1)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white">
                <span>Are there any hidden fees?</span>
                <i className={`fas ${activeFaq === 1 ? 'fa-minus text-brand' : 'fa-plus text-gray-400'}`}></i>
              </button>
              {activeFaq === 1 && (
                <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 pt-4">
                  No. The price you see is what you pay. However, third-party costs like Ad Spend (Google/Meta), Domain/Hosting, and Software Subscriptions (Zoho/Shopify) are paid directly by you.
                </div>
              )}
            </div>

            <div className="bg-light dark:bg-[#162032] rounded-xl overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(2)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white">
                <span>Can I cancel anytime?</span>
                <i className={`fas ${activeFaq === 2 ? 'fa-minus text-brand' : 'fa-plus text-gray-400'}`}></i>
              </button>
              {activeFaq === 2 && (
                <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 pt-4">
                  Yes, our monthly retainers work on a month-to-month basis. We require a 7-day notice before the next billing cycle if you wish to pause or cancel.
                </div>
              )}
            </div>

            <div className="bg-light dark:bg-[#162032] rounded-xl overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(3)} className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-navy dark:text-white">
                <span>Is Ad Budget included in the package?</span>
                <i className={`fas ${activeFaq === 3 ? 'fa-minus text-brand' : 'fa-plus text-gray-400'}`}></i>
              </button>
              {activeFaq === 3 && (
                <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 pt-4">
                  No, the ad budget is separate. You pay Google or Meta directly. Our fee covers strategy, creative design, campaign setup, and optimization.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}