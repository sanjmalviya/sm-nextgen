"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --- URL SLUG GENERATOR ---
const generateSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// --- 1. CORE DATA SETS (32 Services Total) ---
const OVERVIEW_CATEGORIES = [
  {
    title: "Marketing",
    sectionId: "marketing",
    icon: "fas fa-bullhorn",
    colorStyles: {
      iconBg: "bg-pink-100 dark:bg-pink-500/20 text-pink-500",
      checkText: "text-pink-500",
      btnClass: "bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-[#0B2545] dark:text-white hover:bg-[#0097B2] hover:border-[#0097B2] hover:text-white dark:hover:bg-[#0097B2] dark:hover:text-white shadow-sm"
    },
    desc: "Data-driven strategies to acquire customers and dominate attention.",
    services: [
      "Brand Strategy & Positioning", "Search Engine Optimization (SEO)", 
      "Performance Advertising", "Social Media Marketing", 
      "Content Marketing", "Lead Generation Systems", 
      "Sales Funnel & Conversion", "Email & Marketing Automation"
    ]
  },
  {
    title: "Tech Development",
    sectionId: "tech",
    icon: "fas fa-code",
    colorStyles: {
      iconBg: "bg-blue-100 dark:bg-blue-500/20 text-blue-500",
      checkText: "text-blue-500",
      btnClass: "bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-[#0B2545] dark:text-white hover:bg-[#0097B2] hover:border-[#0097B2] hover:text-white dark:hover:bg-[#0097B2] dark:hover:text-white shadow-sm"
    },
    desc: "Robust, high-performance websites, apps, and digital infrastructure.",
    services: [
      "Website Development", "E-Commerce Development", 
      "Funnel & Landing Pages", "Web App Development", 
      "Mobile App Development", "Automation & Integrations", 
      "UI/UX & Product Design", "Website Maintenance & Support"
    ]
  },
  {
    title: "AI Automation",
    sectionId: "ai",
    icon: "fas fa-robot",
    colorStyles: {
      iconBg: "bg-purple-100 dark:bg-purple-500/20 text-purple-500",
      checkText: "text-purple-500",
      btnClass: "bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-[#0B2545] dark:text-white hover:bg-[#0097B2] hover:border-[#0097B2] hover:text-white dark:hover:bg-[#0097B2] dark:hover:text-white shadow-sm"
    },
    desc: "Intelligent systems to scale operations without scaling headcount.",
    services: [
      "AI Business Automation", "AI Marketing Automation", 
      "AI Lead Generation", "AI Chatbots & Conversational AI", 
      "WhatsApp Automation", "AI Content Creation Systems", 
      "AI Data Analytics & BI", "Custom AI Tools & Integrations"
    ]
  },
  {
    title: "Legal & Finance",
    sectionId: "legal",
    icon: "fas fa-balance-scale",
    colorStyles: {
      iconBg: "bg-green-100 dark:bg-green-500/20 text-green-500",
      checkText: "text-green-500",
      btnClass: "bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-[#0B2545] dark:text-white hover:bg-[#0097B2] hover:border-[#0097B2] hover:text-white dark:hover:bg-[#0097B2] dark:hover:text-white shadow-sm"
    },
    desc: "Bulletproof compliance and financial architecture for your business.",
    services: [
      "Business Registration", "GST Services & Filing", 
      "Income Tax Services", "Accounting & Bookkeeping", 
      "Payroll & Compliance", "Business Compliance Mgt.", 
      "Trademark & IP Protection", "Financial Consulting & Advisory"
    ]
  }
];

const SERVICES_DATA = {
  MARKETING: [
    { title: "Brand Strategy & Positioning", slug: "brand-strategy-and-positioning", desc: "Build a strong brand identity and unique market positioning.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-chess" },
    { title: "Search Engine Optimization (SEO)", desc: "Increase organic traffic through technical and on-page SEO.", img: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop", icon: "fas fa-search-plus" },
    { title: "Performance Advertising", desc: "Scale revenue with ROI-focused Meta, Google & YouTube Ads.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", icon: "fab fa-meta" },
    { title: "Social Media Marketing", desc: "Grow engaged audiences and build community presence.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", icon: "fas fa-hashtag" },
    { title: "Content Marketing", desc: "Attract audiences through blogs, videos, and strategic content.", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-pen-nib" }, 
    { title: "Lead Generation Systems", desc: "Automate B2B/B2C lead pipelines and cold outreach.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop", icon: "fas fa-magnet" },
    { title: "Sales Funnel & Conversion", desc: "Optimize landing pages to maximize conversion rates.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-filter" },
    { title: "Email & Marketing Automation", desc: "Retain customers through automated email drip campaigns.", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop", icon: "fas fa-envelope-open-text" }
  ],
  TECH_DEVELOPMENT: [
    { title: "Website Development", desc: "Business websites, landing pages, and SEO-ready UI/UX development.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", icon: "fas fa-globe" },
    { title: "E-Commerce Development", desc: "Shopify, WooCommerce, payment gateways, and custom stores.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop", icon: "fas fa-shopping-cart" },
    { title: "Funnel & Landing Page Development", desc: "High-converting funnels, lead capture, and A/B testing setups.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", icon: "fas fa-filter" },
    { title: "Web App Development", desc: "Custom web applications, SaaS platforms, and CRM dashboards.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-laptop-code" },
    { title: "Mobile App Development", desc: "Android, iOS, cross-platform apps, and Play/App Store deployment.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-mobile-alt" },
    { title: "Automation & Integration", desc: "API integrations, Zapier/Make setups, and workflow systems.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-project-diagram" },
    { title: "UI/UX & Product Design", desc: "User journey mapping, wireframing, and Figma prototype design.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", icon: "fas fa-paint-brush" },
    { title: "Website Maintenance & Support", desc: "Bug fixing, security monitoring, server support, and optimization.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-tools" }
  ],
  AI_AUTOMATION: [
    { title: "AI Business Automation Systems", desc: "Streamline operations with smart workflow automations.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-cogs" },
    { title: "AI Marketing Automation", desc: "Automate ad optimizations and marketing workflows.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-chart-network" },
    { title: "AI Lead Generation Systems", desc: "Deploy AI scrapers and automated qualification bots.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop", icon: "fas fa-satellite-dish" },
    { title: "AI Chatbots & Conversational AI", desc: "24/7 AI-powered website support and sales bots.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop", icon: "fas fa-robot" },
    { title: "WhatsApp Automation Systems", desc: "Automated WhatsApp marketing and customer support.", img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop", icon: "fab fa-whatsapp" },
    { title: "AI Content Creation Systems", desc: "Scale production with AI copywriting and video generation.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", icon: "fas fa-brain" },
    { title: "AI Data Analytics & Business Intelligence", desc: "Predictive dashboards providing real-time business insights.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-chart-pie" },
    { title: "Custom AI Tools & Integrations", desc: "Bespoke AI APIs and custom software development.", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-code" }
  ],
  LEGAL_FINANCE: [
    { title: "Business Registration Services", desc: "Company, LLP, and Startup India registration.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-building" },
    { title: "GST Services", desc: "Complete GST registration, filing, and compliance.", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop", icon: "fas fa-file-invoice" },
    { title: "Income Tax Services", desc: "Corporate tax filing, planning, and advisory.", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop", icon: "fas fa-file-invoice-dollar" },
    { title: "Accounting & Bookkeeping", desc: "Accurate financial records and statement preparation.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-book" },
    { title: "Payroll & Employee Compliance", desc: "Automated salary processing and HR compliance.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-users" },
    { title: "Business Compliance Management", desc: "ROC filings and ongoing legal documentation.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop", icon: "fas fa-balance-scale" },
    { title: "Trademark & Intellectual Property", desc: "Protect your brand with trademark and copyright filing.", img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-copyright" },
    { title: "Financial Consulting & Advisory", desc: "Strategic financial planning and business scaling advice.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", icon: "fas fa-chart-line" }
  ]
};

const FAQS = [
  { q: "What services does SM NextGen offer?", a: "We provide an end-to-end business growth ecosystem. This includes comprehensive Marketing, Tech Development (Web & Apps), AI Automation (Chatbots, Workflows), and Legal & Finance (Registration, Tax, Payroll)." },
  { q: "Do you provide App and Web development?", a: "Yes, our Tech Development team builds high-converting e-commerce stores, custom web applications, SaaS platforms, and mobile apps (iOS & Android)." },
  { q: "Can startups work with SM NextGen?", a: "Absolutely. We are built for modern startups and SMEs. We handle everything from your initial Company Registration and Branding to scaling your first Performance Ad campaigns." },
  { q: "How long does it take to see results?", a: "Results vary by service. Performance Ads and AI Chatbot deployments can yield ROI within weeks. Long-term strategies like SEO, App Development, and Content Marketing typically take 3 to 6 months to build an undeniable market moat." },
  { q: "Can I combine multiple services?", a: "Yes! Our most successful partners use our services synergistically. For example, using our Marketing to generate leads, our Tech & AI to automate the funnels, and our Finance team to handle the resulting revenue." }
];

export default function ServicesClient() {
  const [activeFaq, setActiveFaq] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // 🚀 REUSABLE PREMIUM CARD
  const PremiumCard = ({ item, themeColor }) => (
    <Link href={`/services/${generateSlug(item.title)}`} className="group flex flex-col bg-white dark:bg-[#162032] rounded-3xl shadow-lg border border-gray-100 dark:border-white/5 hover:border-[#0097B2] hover:shadow-[0_10px_30px_rgba(0,151,178,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden isolate transform-gpu relative z-10">
      <div className="relative h-56 w-full overflow-hidden shrink-0">
        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"></div>
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg group-hover:bg-${themeColor}-500 transition-colors z-10`}>
          <i className={item.icon}></i>
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-[#162032] flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2 group-hover:text-[#0097B2] transition-colors leading-snug">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">{item.desc}</p>
        </div>
        <div className={`inline-flex items-center text-sm font-bold text-${themeColor}-500 mt-auto`}>
          Explore Service <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </Link>
  );

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white overflow-x-hidden">
      <div ref={cursorRef} id="cursor-glow" className="hidden md:block"></div>

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-40 pb-28 bg-[#071A30] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
               alt="Business Analytics Dashboard" 
               className="w-full h-full object-cover opacity-10 filter grayscale blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A30] to-[#071A30]/80"></div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0097B2]/20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse"></span> Everything Your Business Needs To Grow
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
            Marketing • Tech • AI • <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">Legal & Finance</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            We help modern businesses grow faster using advanced marketing, technical infrastructure, AI automation and strategic financial systems. The complete ecosystem under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#overview" className="px-8 py-4 bg-[#0097B2] hover:bg-[#0097B2]/90 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1 text-lg w-full sm:w-auto">
              Explore Services
            </a>
            <a href={getWhatsAppLink("Hi SM NextGen Team, I am interested in exploring services for my business growth. Please connect. Niche: ")} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-colors text-lg w-full sm:w-auto flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl text-green-500"></i> Book Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* 2️⃣ CATEGORY OVERVIEW (4 PILLARS) - PREMIUM REDESIGN WITH UNIFORM SCROLL BUTTONS */}
      <section id="overview" className="py-24 bg-white dark:bg-[#0B1120] relative -mt-10 rounded-t-[3rem] z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Our Ecosystem</h2>
            <p className="text-gray-500 text-lg">Four pillars to build an unstoppable business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OVERVIEW_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-[#F8FAFC] dark:bg-[#162032] p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_40px_-10px_rgba(0,151,178,0.15)] transition-all duration-300 flex flex-col relative isolate hover:-translate-y-2 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md ${cat.colorStyles.iconBg} transform group-hover:scale-110 transition-transform duration-300`}>
                  <i className={cat.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-3">{cat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70 mb-8">{cat.desc}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {cat.services.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] md:text-sm text-[#0B2545] dark:text-[#E6EEF2] font-medium">
                      <i className={`fas fa-check mt-1 ${cat.colorStyles.checkText}`}></i> <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                  <li className="text-[12px] text-gray-400 italic pt-2 border-t border-gray-200 dark:border-white/10">+ {cat.services.length - 5} more specialized services</li>
                </ul>
                {/* 🚀 FIXED BUTTON: Clean, Uniform, No Overflow, Smooth Scroll to Section */}
                <button onClick={() => document.getElementById(cat.sectionId).scrollIntoView({behavior:'smooth'})} className={`w-full py-3.5 text-center font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${cat.colorStyles.btnClass}`}>
                  Explore Services <i className="fas fa-chevron-down text-xs"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ MARKETING SERVICES GRID */}
      <section id="marketing" className="py-24 bg-[#F8FAFC] dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-pink-500/30"><i className="fas fa-bullhorn"></i></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white">Marketing Services</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Dominate attention and acquire customers profitably.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.MARKETING.map((item, idx) => <PremiumCard key={idx} item={item} themeColor="pink" />)}
          </div>
        </div>
      </section>

      {/* 3.5️⃣ TECH DEVELOPMENT SERVICES GRID */}
      <section id="tech" className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30"><i className="fas fa-code"></i></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white">Tech Development Services</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Robust, high-performance websites, apps, and digital infrastructure.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.TECH_DEVELOPMENT.map((item, idx) => <PremiumCard key={idx} item={item} themeColor="blue" />)}
          </div>
        </div>
      </section>

      {/* 4️⃣ AI AUTOMATION SERVICES GRID */}
      <section id="ai" className="py-24 bg-[#F8FAFC] dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30"><i className="fas fa-robot"></i></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white">AI Automation Services</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Scale your operations without scaling your headcount.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.AI_AUTOMATION.map((item, idx) => <PremiumCard key={idx} item={item} themeColor="purple" />)}
          </div>
        </div>
      </section>

      {/* 5️⃣ LEGAL & FINANCE SERVICES GRID */}
      <section id="legal" className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-green-500/30"><i className="fas fa-balance-scale"></i></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B2545] dark:text-white">Legal & Finance Services</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Bulletproof compliance and financial architecture.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.LEGAL_FINANCE.map((item, idx) => <PremiumCard key={idx} item={item} themeColor="green" />)}
          </div>
        </div>
      </section>

      {/* 6️⃣ WHY CHOOSE SM NEXTGEN */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-16">Why Choose SM NextGen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white dark:bg-[#162032] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <i className="fas fa-brain text-5xl text-[#0097B2] mb-6"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">AI Powered Growth</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">We leverage the latest AI models to execute faster and smarter.</p>
            </div>
            <div className="p-8 bg-white dark:bg-[#162032] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <i className="fas fa-chart-pie text-5xl text-[#0097B2] mb-6"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Data Driven Strategy</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">No guesswork. Every campaign is backed by hard analytics.</p>
            </div>
            <div className="p-8 bg-white dark:bg-[#162032] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <i className="fas fa-cubes text-5xl text-[#0097B2] mb-6"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Complete Systems</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">From registration to scaling revenue, we handle the entire stack.</p>
            </div>
            <div className="p-8 bg-white dark:bg-[#162032] rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <i className="fas fa-globe text-5xl text-[#0097B2] mb-6"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Global Scalability</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Building infrastructures capable of scaling beyond borders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#0B2545] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4">Our Deployment Process</h2>
            <p className="text-[#E6EEF2]/70 text-lg max-w-2xl mx-auto">A clear, straightforward path to architecting and scaling your operations.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[#0097B2]/50 to-transparent z-0"></div>

            <div className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-[#0097B2] text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-[#0097B2]/30 border-4 border-[#0B2545]">1</div>
              <h3 className="text-xl font-bold mb-3 text-white">Client Acquisition</h3>
              <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">Referral and Growth partners leverage their networks to bring high-value clients into the SM NextGen ecosystem.</p>
            </div>

            <div className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-[#0097B2] text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-purple-500/30 border-4 border-[#0B2545]">2</div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategy & Delegation</h3>
              <p className="text-sm text-[#E6EEF2]/80 leading-relaxed">Our core team and Growth partners define the roadmap and divide the execution tasks across our vetted talent pool.</p>
            </div>

            <div className="relative z-10 bg-[#0097B2] border border-[#0097B2] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,151,178,0.2)] text-center transform md:-translate-y-4">
              <div className="w-20 h-20 rounded-full bg-white text-[#0B2545] flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-inner border-4 border-[#0097B2]">3</div>
              <h3 className="text-xl font-bold mb-3 text-white">Execution & Payouts</h3>
              <p className="text-sm text-white/90 leading-relaxed">Execution partners deliver top-tier work. Clients get results, and all partners receive their revenue share securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ GENUINE IMPACT (Replaced Fake Stats) */}
      <section className="py-24 bg-white dark:bg-[#0B1120] border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Genuine Impact</h2>
            <p className="text-gray-500 dark:text-[#E6EEF2]/70 text-lg">We measure success in sustainable growth, not just vanity metrics.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-10 rounded-[2rem] shadow-sm border-t-[6px] border-[#0097B2] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-[#0097B2] mb-4">3.2x</div>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Average ROI</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Consistent return on ad spend (ROAS) across e-commerce and performance campaigns.</p>
            </div>
            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-10 rounded-[2rem] shadow-sm border-t-[6px] border-[#0097B2] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-[#0097B2] mb-4">40%</div>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Lower CPL</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Achieved by implementing AI-driven qualification bots and conversion-optimized funnels.</p>
            </div>
            <div className="bg-[#F8FAFC] dark:bg-[#162032] p-10 rounded-[2rem] shadow-sm border-t-[6px] border-[#0097B2] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-[#0097B2] mb-4">98%</div>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Client Retention</h3>
              <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">We partner for the long term, focusing on sustainable business scaling over quick wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ INDUSTRIES WE SERVE */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-12">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Ecommerce', 'Startups', 'Real Estate', 'Local Businesses', 'Healthcare', 'Education', 'SaaS', 'Personal Brands'].map((ind, i) => (
              <span key={i} className="px-6 py-4 bg-white dark:bg-[#162032] border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-[#0B2545] dark:text-white hover:border-[#0097B2] hover:text-[#0097B2] dark:hover:text-[#0097B2] transition-colors cursor-default shadow-sm text-lg">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔟 FAQ SECTION */}
      <section className="py-24 bg-white dark:bg-[#0B1120] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-[#F8FAFC] dark:bg-[#162032] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-[#0097B2] text-white rotate-180 shadow-md' : 'bg-white dark:bg-[#071A30] text-[#0097B2] border border-gray-200 dark:border-white/10'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>
                <div className={`px-8 pb-6 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ FINAL MASSIVE CTA */}
      <section className="relative py-32 bg-[#0097B2] overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0B2545]/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">Ready To Scale Your Business?</h2>
          <p className="text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto">Let SM NextGen build your marketing, tech, automation, and financial systems for sustainable, long-term predictable growth.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={getWhatsAppLink("Hi SM NextGen Team, I am ready to scale my business using your integrated systems. Please schedule a strategy call. Niche: ")} target="_blank" rel="noreferrer" className="px-10 py-5 bg-white text-[#0B2545] font-extrabold rounded-2xl shadow-2xl hover:scale-105 transition-transform text-lg flex items-center justify-center gap-3">
               <i className="fas fa-arrow-right"></i> Book Strategy Call
            </a>
            <a href={getWhatsAppLink("Hi SM NextGen Team, I have some questions about your growth ecosystem. Please connect. ")} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-white/20 hover:border-white text-white font-extrabold rounded-2xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl text-white"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}