"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  Target, Search, Hash, PenTool, Magnet, Filter, Mail, 
  ShoppingCart, Layers, AppWindow, Smartphone, Workflow, 
  Palette, Wrench, Settings, Crosshair, UserPlus, MessageSquare, 
  Phone, Sparkles, PieChart, Cpu, FileSignature, Receipt, 
  Landmark, Calculator, Users, ClipboardCheck, Copyright, 
  LineChart, ChevronDown, Moon, Sun, Menu, X, ArrowRight 
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(null);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pathname = usePathname();

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    setIsDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsServicesMobileOpen(false);
    setActiveDesktopCategory(null);
    setActiveMobileCategory(null);
  };

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  const navLinks = [
    { name: "How We Grow", href: "/how-we-work" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Growth Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ];

  // 6 STRATEGIC GROWTH CAPABILITY CATEGORIES
  const capabilitiesMenu = [
    {
      category: "Growth Strategy",
      icon: <Compass strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Brand Strategy & Positioning", desc: "Category Leadership", href: "/services/brand-strategy-positioning", icon: <Target strokeWidth={1.5} /> },
        { name: "Market & Gap Diagnosis", desc: "Competitor Vulnerability", href: "/services/brand-strategy-positioning", icon: <Search strokeWidth={1.5} /> },
        { name: "Full-Funnel Strategy", desc: "Unit Economics Planning", href: "/services/sales-funnel-conversion", icon: <Filter strokeWidth={1.5} /> },
        { name: "Growth Audits", desc: "Bottleneck Elimination", href: "/services/financial-consulting-advisory", icon: <LineChart strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Marketing & Demand",
      icon: <TrendingUp strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Search & SEO Optimization", desc: "Organic Visibility & GEO", href: "/services/search-engine-optimization-seo", icon: <Search strokeWidth={1.5} /> },
        { name: "Performance Media (Ads)", desc: "Meta, Google & LinkedIn", href: "/services/performance-advertising", icon: <TrendingUp strokeWidth={1.5} /> },
        { name: "Lead Generation Systems", desc: "Predictable B2B Inflow", href: "/services/lead-generation-systems", icon: <Magnet strokeWidth={1.5} /> },
        { name: "Content & Authority", desc: "Thought Leadership", href: "/services/content-marketing", icon: <PenTool strokeWidth={1.5} /> },
        { name: "Email Lifecycle Flows", desc: "LTV Retention Drip", href: "/services/email-marketing-automation", icon: <Mail strokeWidth={1.5} /> },
        { name: "Social Media Engines", desc: "Audience Attention", href: "/services/social-media-marketing", icon: <Hash strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Conversion & Digital Experience",
      icon: <Laptop strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Web Platform Development", desc: "Next.js Sub-Second Speed", href: "/services/website-development", icon: <Laptop strokeWidth={1.5} /> },
        { name: "High-Velocity Funnels", desc: "1-Click CRO Checkout", href: "/services/funnel-landing-page-development", icon: <Layers strokeWidth={1.5} /> },
        { name: "Modern E-Commerce", desc: "Shopify & Headless", href: "/services/e-commerce-development", icon: <ShoppingCart strokeWidth={1.5} /> },
        { name: "Custom Web Applications", desc: "SaaS & Client Portals", href: "/services/web-app-development", icon: <AppWindow strokeWidth={1.5} /> },
        { name: "Mobile Applications", desc: "iOS & Android Growth", href: "/services/mobile-app-development", icon: <Smartphone strokeWidth={1.5} /> },
        { name: "UI/UX Product Design", desc: "Frictionless Journeys", href: "/services/ui-ux-product-design", icon: <Palette strokeWidth={1.5} /> }
      ]
    },
    {
      category: "AI & Business Automation",
      icon: <Bot strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Autonomous AI Workflows", desc: "Remove Operational Drag", href: "/services/ai-business-automation-systems", icon: <Settings strokeWidth={1.5} /> },
        { name: "WhatsApp Automation", desc: "Instant CRM Routing", href: "/services/whatsapp-automation-systems", icon: <Phone strokeWidth={1.5} /> },
        { name: "AI Support & Booking Bots", desc: "24/7 Deal Qualification", href: "/services/ai-chatbots-conversational-ai", icon: <MessageSquare strokeWidth={1.5} /> },
        { name: "Marketing AI Systems", desc: "Autonomous Outreach", href: "/services/ai-marketing-automation", icon: <Crosshair strokeWidth={1.5} /> },
        { name: "Custom AI Tools", desc: "Proprietary APIs", href: "/services/custom-ai-tools-integrations", icon: <Cpu strokeWidth={1.5} /> },
        { name: "API & Data Integrations", desc: "Multi-Platform Sync", href: "/services/automation-integration", icon: <Workflow strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Data & Intelligence",
      icon: <BarChart3 strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Unified BI Dashboards", desc: "Financial Telemetry", href: "/services/ai-data-analytics-business-intelligence", icon: <PieChart strokeWidth={1.5} /> },
        { name: "Multi-Touch Attribution", desc: "Closed-Loop Bank Tracking", href: "/services/ai-data-analytics-business-intelligence", icon: <LineChart strokeWidth={1.5} /> },
        { name: "Predictive CAC/LTV Models", desc: "Unit Economics Clarity", href: "/services/financial-consulting-advisory", icon: <Calculator strokeWidth={1.5} /> },
        { name: "Conversion Rate Optimization", desc: "Continuous A/B Sprints", href: "/services/sales-funnel-conversion", icon: <Filter strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Business Operations Support",
      icon: <Scale strokeWidth={1.5} className="w-5 h-5 text-[#0B2545]/70 dark:text-gray-400" />,
      items: [
        { name: "Startup Registration", desc: "Entity Formation", href: "/services/business-registration-services", icon: <FileSignature strokeWidth={1.5} /> },
        { name: "GST & Tax Planning", desc: "Filing & Advisory", href: "/services/gst-services", icon: <Receipt strokeWidth={1.5} /> },
        { name: "Bookkeeping & Accounts", desc: "Financial Integrity", href: "/services/accounting-bookkeeping", icon: <Calculator strokeWidth={1.5} /> },
        { name: "Trademark & IP", desc: "Brand Asset Protection", href: "/services/trademark-intellectual-property", icon: <Copyright strokeWidth={1.5} /> }
      ]
    }
  ];

  const handleDesktopCategoryClick = (categoryName) => {
    setActiveDesktopCategory(activeDesktopCategory === categoryName ? null : categoryName);
  };

  const handleMobileCategoryClick = (categoryName) => {
    setActiveMobileCategory(activeMobileCategory === categoryName ? null : categoryName);
  };

  return (
    <>
      {isDesktopServicesOpen && (
        <div className="fixed inset-0 z-[90]" onClick={closeAllMenus}></div>
      )}

      <header className="fixed w-full z-[100] transition-all duration-300 top-0 bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3 group z-50">
              <img src="/images/logo.png" alt="SM NextGen" className="h-11 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-[#0B2545] dark:text-white leading-tight tracking-tight group-hover:text-[#0097B2] transition-colors">
                  SM NextGen
                </span>
                <span className="text-[10px] font-bold text-[#0097B2] uppercase tracking-widest leading-none">
                  Business Growth Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Capabilities Mega Menu Trigger */}
              <div className="relative h-20 flex items-center">
                <button 
                  onClick={() => {
                    setIsDesktopServicesOpen(!isDesktopServicesOpen);
                    setActiveDesktopCategory(null);
                  }} 
                  className={`nav-link text-sm font-semibold transition flex items-center gap-1.5 focus:outline-none py-6 cursor-pointer ${
                    isDesktopServicesOpen ? 'text-[#0097B2]' : 'text-[#0B2545]/85 dark:text-gray-200 hover:text-[#0097B2]'
                  }`}
                >
                  <span>Capabilities</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180 text-[#0097B2]' : ''}`} />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className={`absolute top-[78px] left-1/2 transform -translate-x-1/2 w-[820px] transition-all duration-300 z-40 ${
                  isDesktopServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-3 pointer-events-none'
                }`}>
                  <div className="bg-white dark:bg-[#071A30] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden relative">
                    <div className="p-6 space-y-2.5 max-h-[75vh] overflow-y-auto">
                      <div className="flex items-center justify-between px-2 mb-3">
                        <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-widest">
                          Strategic Growth Capabilities
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-body">
                          6 Integrated Pillars
                        </span>
                      </div>
                      
                      {capabilitiesMenu.map((col, index) => (
                        <div key={index} className="border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden bg-gray-50/60 dark:bg-white/[0.02]">
                          
                          <button 
                            onClick={() => handleDesktopCategoryClick(col.category)}
                            className={`w-full flex items-center justify-between p-3.5 transition-colors cursor-pointer ${
                              activeDesktopCategory === col.category ? 'bg-white dark:bg-white/10' : 'hover:bg-white dark:hover:bg-white/5'
                            }`}
                          >
                            <span className="flex items-center gap-3 text-sm font-bold text-[#0B2545] dark:text-white font-heading">
                              {col.icon} {col.category}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                              activeDesktopCategory === col.category ? 'rotate-180 text-[#0097B2]' : ''
                            }`} />
                          </button>

                          <div className={`transition-all duration-300 ease-in-out ${
                            activeDesktopCategory === col.category ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100 dark:border-white/5' : 'max-h-0 opacity-0 overflow-hidden'
                          }`}>
                            <div className="grid grid-cols-2 gap-3">
                              {col.items.map((item, i) => (
                                <Link 
                                  onClick={closeAllMenus} 
                                  key={i} 
                                  href={item.href} 
                                  className="group/item flex items-center gap-3 p-2.5 rounded-lg hover:bg-white dark:hover:bg-[#0B2545] transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-white/10"
                                >
                                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2] group-hover/item:bg-[#0097B2] group-hover/item:text-white transition-colors [&>svg]:w-4 [&>svg]:h-4">
                                    {item.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="block text-xs font-bold text-[#0B2545] dark:text-white group-hover/item:text-[#0097B2] transition-colors leading-tight">
                                      {item.name}
                                    </span>
                                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 leading-none">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-black/20 p-4 px-6 flex justify-between items-center border-t border-gray-100 dark:border-white/5">
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0097B2]" /> 
                        Looking for an integrated growth engine?
                      </p>
                      <Link 
                        href="/services" 
                        onClick={closeAllMenus} 
                        className="text-xs font-bold text-[#0097B2] hover:text-[#0B2545] dark:hover:text-white transition flex items-center gap-1.5 bg-white dark:bg-[#0B2545] px-3.5 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm"
                      >
                        <span>View All Capabilities</span> 
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="nav-link text-sm font-semibold text-[#0B2545]/85 hover:text-[#0097B2] transition dark:text-gray-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3 z-50">
              
              {/* Minimalist Theme Toggle Icon Button */}
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle interface theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#0B2545] dark:text-[#E6EEF2] border border-[#0B2545]/10 dark:border-white/10 transition-colors cursor-pointer shadow-sm"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                ) : (
                  <Moon className="w-4 h-4 text-[#0097B2] shrink-0" />
                )}
              </button>

              <Link 
                href="/contact" 
                className="hidden sm:inline-flex bg-[#0097B2] hover:bg-[#007a91] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0097B2]/20 hover:scale-[1.02] active:scale-[0.98] transition-all items-center gap-2 cursor-pointer"
              >
                <span>Start Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                aria-label="Toggle menu"
                className="lg:hidden text-[#0B2545] dark:text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/10 cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-white dark:bg-[#0B2545] z-40 flex flex-col pt-24 px-6 h-screen overflow-y-auto transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}>
          
          {/* Mobile Theme Toggle Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545] dark:text-white">
              Interface Theme
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-xs font-bold text-[#0B2545] dark:text-white shadow-sm cursor-pointer"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#0097B2]" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          <Link href="/" onClick={closeAllMenus} className="text-lg font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-white/10 py-3.5 block font-heading">
            Home
          </Link>

          {/* Capabilities Mobile Accordion */}
          <div className="border-b border-gray-100 dark:border-white/10 py-3.5">
            <button 
              className="flex justify-between items-center w-full focus:outline-none cursor-pointer"
              onClick={() => {
                setIsServicesMobileOpen(!isServicesMobileOpen);
                setActiveMobileCategory(null);
              }}
            >
              <span className="text-lg font-bold text-[#0B2545] dark:text-white font-heading">Growth Capabilities</span>
              <div className={`w-7 h-7 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[#0097B2] transition-transform duration-300 ${
                isServicesMobileOpen ? 'rotate-180 bg-[#0097B2] text-white' : ''
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div className={`transition-all duration-300 overflow-hidden ${
              isServicesMobileOpen ? 'max-h-[900px] opacity-100 mt-3 space-y-2' : 'max-h-0 opacity-0'
            }`}>
              {capabilitiesMenu.map((col, idx) => (
                <div key={idx} className="border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
                  <button 
                    onClick={() => handleMobileCategoryClick(col.category)}
                    className="w-full flex items-center justify-between p-3 text-xs font-bold text-[#0B2545] dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      {col.icon} {col.category}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMobileCategory === col.category ? 'rotate-180 text-[#0097B2]' : ''
                    }`} />
                  </button>

                  <div className={`transition-all duration-200 overflow-hidden ${
                    activeMobileCategory === col.category ? 'max-h-[400px] opacity-100 p-2.5 border-t border-gray-100 dark:border-white/10 space-y-1' : 'max-h-0 opacity-0'
                  }`}>
                    {col.items.map((item, i) => (
                      <Link 
                        key={i} 
                        href={item.href} 
                        onClick={closeAllMenus}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-[#0B2545] dark:text-gray-300 hover:text-[#0097B2]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={closeAllMenus} 
              className="text-lg font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-white/10 py-3.5 block font-heading"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 pb-12 space-y-3">
            <Link 
              href="/contact" 
              onClick={closeAllMenus} 
              className="w-full py-3.5 rounded-xl bg-[#0097B2] text-white text-center font-bold text-sm block shadow-md"
            >
              Start a Growth Conversation →
            </Link>
            <Link 
              href="/tools" 
              onClick={closeAllMenus} 
              className="w-full py-3 rounded-xl bg-gray-100 dark:bg-white/10 text-[#0B2545] dark:text-white text-center font-semibold text-xs block"
            >
              Get Your Growth Score
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}