"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// 🔥 PREMIUM ICONS IMPORT (Lucide React)
import { 
  Megaphone, MonitorDot, Bot, Scale, Target, Search, TrendingUp, 
  Hash, PenTool, Magnet, Filter, Mail, Laptop, ShoppingCart, 
  Layers, AppWindow, Smartphone, Workflow, Palette, Wrench, 
  Settings, Crosshair, UserPlus, MessageSquare, Phone, 
  Sparkles, PieChart, Cpu, FileSignature, Receipt, Landmark, 
  Calculator, Users, ClipboardCheck, Copyright, LineChart,
  ChevronDown, Moon, Menu, X, ArrowRight
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(null);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const pathname = usePathname();

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  const navLinks = [
    { name: "System", href: "/how-we-work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Work", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔥 4-COLUMN EXACT MAPPED ENTERPRISE MEGA MENU (WITH LUCIDE ICONS)
  const servicesMenu = [
    {
      category: "Marketing",
      icon: <Megaphone strokeWidth={1.5} className="w-5 h-5 text-blue-500" />,
      items: [
        { name: "Brand Strategy", desc: "Identity & Positioning", href: "/services/brand-strategy-positioning", icon: <Target strokeWidth={1.5} /> },
        { name: "SEO Optimization", desc: "Organic Ranking", href: "/services/search-engine-optimization-seo", icon: <Search strokeWidth={1.5} /> },
        { name: "Performance Ads", desc: "Meta & Google Ads", href: "/services/performance-advertising", icon: <TrendingUp strokeWidth={1.5} /> },
        { name: "Social Media", desc: "Growth & Engagement", href: "/services/social-media-marketing", icon: <Hash strokeWidth={1.5} /> },
        { name: "Content Marketing", desc: "Blogs & Videos", href: "/services/content-marketing", icon: <PenTool strokeWidth={1.5} /> },
        { name: "Lead Gen Systems", desc: "B2B & B2C Pipelines", href: "/services/lead-generation-systems", icon: <Magnet strokeWidth={1.5} /> },
        { name: "Sales Funnels", desc: "Max Conversions", href: "/services/sales-funnel-conversion", icon: <Filter strokeWidth={1.5} /> },
        { name: "Email Automation", desc: "Drip Campaigns", href: "/services/email-marketing-automation", icon: <Mail strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Tech Development",
      icon: <MonitorDot strokeWidth={1.5} className="w-5 h-5 text-purple-500" />,
      items: [
        { name: "Website Dev", desc: "Business & Landing Pages", href: "/services/website-development", icon: <Laptop strokeWidth={1.5} /> },
        { name: "E-Commerce", desc: "Shopify & Custom", href: "/services/e-commerce-development", icon: <ShoppingCart strokeWidth={1.5} /> },
        { name: "Funnel Dev", desc: "High-Converting Pages", href: "/services/funnel-landing-page-development", icon: <Layers strokeWidth={1.5} /> },
        { name: "Web Apps", desc: "SaaS & Dashboards", href: "/services/web-app-development", icon: <AppWindow strokeWidth={1.5} /> },
        { name: "Mobile Apps", desc: "Android & iOS Apps", href: "/services/mobile-app-development", icon: <Smartphone strokeWidth={1.5} /> },
        { name: "API Integrations", desc: "Zapier & Webhooks", href: "/services/automation-integration", icon: <Workflow strokeWidth={1.5} /> },
        { name: "UI/UX Design", desc: "Prototyping & Figma", href: "/services/ui-ux-product-design", icon: <Palette strokeWidth={1.5} /> },
        { name: "Maintenance", desc: "Support & Security", href: "/services/website-maintenance-support", icon: <Wrench strokeWidth={1.5} /> }
      ]
    },
    {
      category: "AI Automation",
      icon: <Bot strokeWidth={1.5} className="w-5 h-5 text-[#0097B2]" />,
      items: [
        { name: "Business AI", desc: "Smart Workflows", href: "/services/ai-business-automation-systems", icon: <Settings strokeWidth={1.5} /> },
        { name: "Marketing AI", desc: "Automated Campaigns", href: "/services/ai-marketing-automation", icon: <Crosshair strokeWidth={1.5} /> },
        { name: "AI Lead Gen", desc: "Scrapers & Bots", href: "/services/ai-lead-generation-systems", icon: <UserPlus strokeWidth={1.5} /> },
        { name: "AI Chatbots", desc: "24/7 Support Bots", href: "/services/ai-chatbots-conversational-ai", icon: <MessageSquare strokeWidth={1.5} /> },
        { name: "WhatsApp Bots", desc: "WhatsApp Marketing", href: "/services/whatsapp-automation-systems", icon: <Phone strokeWidth={1.5} /> },
        { name: "AI Content", desc: "Copywriting & Video", href: "/services/ai-content-creation-systems", icon: <Sparkles strokeWidth={1.5} /> },
        { name: "AI Analytics", desc: "Predictive Dashboards", href: "/services/ai-data-analytics-business-intelligence", icon: <PieChart strokeWidth={1.5} /> },
        { name: "Custom AI Tools", desc: "Bespoke AI APIs", href: "/services/custom-ai-tools-integrations", icon: <Cpu strokeWidth={1.5} /> }
      ]
    },
    {
      category: "Finance & Legal",
      icon: <Scale strokeWidth={1.5} className="w-5 h-5 text-orange-500" />,
      items: [
        { name: "Startup Reg", desc: "Company Setup", href: "/services/business-registration-services", icon: <FileSignature strokeWidth={1.5} /> },
        { name: "GST Services", desc: "Filing & Compliance", href: "/services/gst-services", icon: <Receipt strokeWidth={1.5} /> },
        { name: "Income Tax", desc: "Tax Planning", href: "/services/income-tax-services", icon: <Landmark strokeWidth={1.5} /> },
        { name: "Accounting", desc: "Bookkeeping", href: "/services/accounting-bookkeeping", icon: <Calculator strokeWidth={1.5} /> },
        { name: "Payroll Services", desc: "HR Compliance", href: "/services/payroll-employee-compliance", icon: <Users strokeWidth={1.5} /> },
        { name: "Business Compliance", desc: "ROC Filings", href: "/services/business-compliance-management", icon: <ClipboardCheck strokeWidth={1.5} /> },
        { name: "Trademark & IP", desc: "Brand Protection", href: "/services/trademark-intellectual-property", icon: <Copyright strokeWidth={1.5} /> },
        { name: "Financial Advisory", desc: "Strategic Planning", href: "/services/financial-consulting-advisory", icon: <LineChart strokeWidth={1.5} /> }
      ]
    }
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsServicesMobileOpen(false);
    setActiveDesktopCategory(null);
    setActiveMobileCategory(null);
  };

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
            
            <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3 group z-50">
              <img src="/images/logo.png" alt="SM NextGen" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-[#0B2545] dark:text-white leading-tight tracking-wide group-hover:text-[#0097B2] transition-colors">
                  SM NextGen
                </span>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-none">
                  Business Growth Solutions
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Home</Link>

              {/* SERVICES CLICK DROPDOWN */}
              <div className="relative h-20 flex items-center">
                <button 
                  onClick={() => {
                    setIsDesktopServicesOpen(!isDesktopServicesOpen);
                    setActiveDesktopCategory(null);
                  }} 
                  className={`nav-link text-sm font-bold transition flex items-center gap-1.5 focus:outline-none py-6 ${isDesktopServicesOpen ? 'text-[#0097B2]' : 'text-gray-700 dark:text-gray-300 hover:text-[#0097B2]'}`}
                >
                  Services <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[750px] transition-all duration-300 z-40 ${isDesktopServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'}`}>
                  <div className="bg-white dark:bg-[#162032] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                    <div className="p-6 space-y-3">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Select a Category</p>
                      
                      {servicesMenu.map((col, index) => (
                        <div key={index} className="border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
                          
                          <button 
                            onClick={() => handleDesktopCategoryClick(col.category)}
                            className={`w-full flex items-center justify-between p-4 transition-colors ${activeDesktopCategory === col.category ? 'bg-gray-100 dark:bg-white/10' : 'hover:bg-gray-100 dark:hover:bg-white/5'}`}
                          >
                            <span className="flex items-center gap-3 text-[15px] font-bold text-[#0B2545] dark:text-white">
                              {col.icon} {col.category}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${activeDesktopCategory === col.category ? 'rotate-180 text-[#0097B2]' : ''}`} />
                          </button>

                          <div className={`transition-all duration-300 ease-in-out ${activeDesktopCategory === col.category ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100 dark:border-white/5' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div className="grid grid-cols-2 gap-3">
                              {col.items.map((item, i) => (
                                <Link onClick={closeAllMenus} key={i} href={item.href} className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-[#0B2545] transition-all duration-300 shadow-sm border border-transparent hover:border-gray-100 dark:hover:border-white/10">
                                  <div className="w-8 h-8 flex-shrink-0 rounded-md bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover/item:bg-[#0097B2] group-hover/item:text-white transition-colors [&>svg]:w-4 [&>svg]:h-4">
                                    {item.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="block text-[13px] font-bold text-[#0B2545] dark:text-white group-hover/item:text-[#0097B2] transition-colors leading-tight">{item.name}</span>
                                    <span className="block text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-none">{item.desc}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-black/20 p-4 px-8 flex justify-between items-center border-t border-gray-100 dark:border-white/5">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0097B2]" /> Need a custom strategy?
                      </p>
                      <Link href="/services" onClick={closeAllMenus} className="text-sm font-bold text-[#0097B2] hover:text-[#0B2545] dark:hover:text-white transition flex items-center gap-2 bg-white dark:bg-[#0B2545] px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10">
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 z-50">
              <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
                <Moon className="w-4 h-4 text-[#0B2545] dark:text-yellow-400" />
              </button>
              <Link href="/contact" className="hidden md:flex bg-[#0097B2] hover:bg-[#0B2545] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_4px_14px_0_rgba(0,151,178,0.39)] hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Book Call
              </Link>
              
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#0B2545] dark:text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 MOBILE ACCORDION DRAWER */}
        <div className={`fixed inset-0 bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 h-screen overflow-y-auto transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
          
          <Link href="/" onClick={closeAllMenus} className="text-xl font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-white/10 py-4 block">
            Home
          </Link>

          <div className="border-b border-gray-100 dark:border-white/10 py-4">
            <button 
              className="flex justify-between items-center w-full focus:outline-none"
              onClick={() => {
                setIsServicesMobileOpen(!isServicesMobileOpen);
                setActiveMobileCategory(null);
              }}
            >
               <span className="text-xl font-bold text-[#0B2545] dark:text-white">Services</span>
               <div className={`w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0097B2] transition-transform duration-300 ${isServicesMobileOpen ? 'rotate-180 bg-[#0097B2] text-white' : ''}`}>
                 <ChevronDown className="w-4 h-4" />
               </div>
            </button>
            
            <div className={`${isServicesMobileOpen ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
              <div className="space-y-4">
                {servicesMenu.map((col, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5">
                    
                    <button 
                      onClick={() => handleMobileCategoryClick(col.category)}
                      className="w-full flex items-center justify-between p-4 focus:outline-none"
                    >
                      <h4 className="flex items-center gap-3 text-[15px] font-bold text-[#0B2545] dark:text-white tracking-wide">
                        {col.icon} {col.category}
                      </h4>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${activeMobileCategory === col.category ? 'rotate-180 text-[#0097B2]' : ''}`} />
                    </button>

                    <div className={`transition-all duration-300 ease-in-out ${activeMobileCategory === col.category ? 'max-h-[800px] opacity-100 border-t border-gray-200 dark:border-white/10' : 'max-h-0 opacity-0'}`}>
                      <ul className="p-3 space-y-1">
                        {col.items.map((item, i) => (
                          <li key={i}>
                            <Link href={item.href} onClick={closeAllMenus} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#0B2545] transition-colors [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-gray-400">
                              {item.icon}
                              <span className="text-sm font-bold text-[#0B2545] dark:text-gray-200">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
              
              <Link href="/services" onClick={closeAllMenus} className="mt-6 w-full block text-center bg-gray-100 dark:bg-white/10 text-[#0B2545] dark:text-white py-3 rounded-xl text-sm font-bold">
                View All Services
              </Link>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={closeAllMenus} 
              className="text-xl font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-white/10 py-4 block"
            >
              {link.name}
            </Link>
          ))}

          <Link 
            href="/contact" 
            onClick={closeAllMenus} 
            className="mt-8 mb-12 w-full bg-[#0097B2] text-white py-4 rounded-2xl text-center font-bold text-lg shadow-[0_8px_30px_rgba(0,151,178,0.3)]"
          >
            Book Strategy Call
          </Link>
        </div>
      </header>
    </>
  );
}