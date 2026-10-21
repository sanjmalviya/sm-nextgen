"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  ChevronDown, Moon, Sun, Menu, X, ArrowRight, Zap, Sparkles,
  Phone, MessageSquare
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isMobileCapabilitiesOpen, setIsMobileCapabilitiesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pathname = usePathname();

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsCapabilitiesOpen(false);
    setIsMobileCapabilitiesOpen(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  // 6 Strategic Capability Pillars
  const capabilityPillars = [
    {
      name: "Growth Strategy",
      desc: "Market positioning, ICP definition & commercial models",
      href: "/services/brand-strategy-positioning",
      icon: <Compass className="w-4 h-4 text-[#0097B2]" />
    },
    {
      name: "Marketing & Demand",
      desc: "Local 3-Pack SEO, performance media & customer acquisition",
      href: "/services/search-engine-optimization-seo",
      icon: <TrendingUp className="w-4 h-4 text-[#0097B2]" />
    },
    {
      name: "Conversion & Digital Experience",
      desc: "Sub-second Next.js web platforms, CRO funnels & app dev",
      href: "/services/website-development",
      icon: <Laptop className="w-4 h-4 text-[#0097B2]" />
    },
    {
      name: "AI & Business Automation",
      desc: "WhatsApp CRM workflows, 24/7 lead bots & automated intake",
      href: "/services/ai-business-automation-systems",
      icon: <Bot className="w-4 h-4 text-[#0097B2]" />
    },
    {
      name: "Data & Intelligence",
      desc: "CAC/LTV unit economics, attribution & telemetry",
      href: "/services/ai-data-analytics-business-intelligence",
      icon: <BarChart3 className="w-4 h-4 text-[#0097B2]" />
    },
    {
      name: "Business Operations Support",
      desc: "Registration, compliance governance & strategic advisory",
      href: "/services/business-compliance-management",
      icon: <Scale className="w-4 h-4 text-[#0097B2]" />
    }
  ];

  return (
    <>
      {/* Backdrop overlay for desktop dropdown */}
      {isCapabilitiesOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-xs transition-opacity" 
          onClick={closeAllMenus}
          aria-hidden="true"
        />
      )}

      <header className="fixed w-full z-[100] top-0 bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo & Brand Lockup */}
            <Link 
              href="/" 
              onClick={closeAllMenus} 
              className="flex items-center gap-3 group shrink-0 select-none py-1"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#0097B2]/10 border border-[#0097B2]/30 shadow-xs">
                <img 
                  src="/images/logo.png" 
                  alt="SM NextGen Logo" 
                  className="w-full h-full object-cover" 
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-extrabold text-xl text-[#0B2545] dark:text-white tracking-tight leading-tight group-hover:text-[#0097B2] transition-colors">
                  SM NextGen
                </span>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] dark:text-cyan-400 uppercase tracking-wider leading-none mt-0.5">
                  Business Growth Partner
                </span>
              </div>
            </Link>

            {/* Disciplined Desktop Navigation (7 Core Elements) */}
            <nav className="hidden lg:flex items-center space-x-7 shrink-0">
              
              {/* Capabilities Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                  onMouseEnter={() => setIsCapabilitiesOpen(true)}
                  className={`text-sm font-semibold flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    isCapabilitiesOpen || pathname.startsWith("/services")
                      ? "text-[#0097B2] dark:text-cyan-400"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#0097B2] dark:hover:text-cyan-400"
                  }`}
                  aria-expanded={isCapabilitiesOpen}
                >
                  <span>Capabilities</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCapabilitiesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  onMouseLeave={() => setIsCapabilitiesOpen(false)}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[680px] bg-white dark:bg-[#071A30] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-200 z-[100] ${
                    isCapabilitiesOpen 
                      ? "opacity-100 visible translate-y-0" 
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/5">
                      <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                        6 Strategic Growth Pillars
                      </span>
                      <span className="text-xs text-slate-400">
                        Integrated Execution
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {capabilityPillars.map((pillar) => (
                        <Link
                          key={pillar.name}
                          href={pillar.href}
                          onClick={closeAllMenus}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/5 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 dark:bg-[#0097B2]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0097B2] group-hover:text-white transition-colors">
                            {pillar.icon}
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] dark:group-hover:text-cyan-400 transition-colors">
                              {pillar.name}
                            </span>
                            <span className="block text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                              {pillar.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Resources Bottom Bar */}
                  <div className="bg-slate-50 dark:bg-black/20 px-6 py-3.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-5 font-semibold text-slate-600 dark:text-slate-300">
                      <Link href="/services" onClick={closeAllMenus} className="hover:text-[#0097B2] transition-colors">
                        All Services →
                      </Link>
                      <Link href="/industries" onClick={closeAllMenus} className="hover:text-[#0097B2] transition-colors">
                        Industry Blueprints
                      </Link>
                      <Link href="/case-studies" onClick={closeAllMenus} className="hover:text-[#0097B2] transition-colors">
                        Case Studies
                      </Link>
                      <Link href="/tools" onClick={closeAllMenus} className="hover:text-[#0097B2] transition-colors">
                        Growth Tools
                      </Link>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      sm-nextgen.com
                    </span>
                  </div>
                </div>
              </div>

              {/* How We Grow */}
              <Link
                href="/how-we-work"
                onClick={closeAllMenus}
                className={`text-sm font-semibold transition-colors ${
                  pathname === "/how-we-work"
                    ? "text-[#0097B2] dark:text-cyan-400"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#0097B2] dark:hover:text-cyan-400"
                }`}
              >
                How We Grow
              </Link>

              {/* Growth OS (Product Link with Live Ping) */}
              <Link
                href="/growth-os"
                onClick={closeAllMenus}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0097B2]/10 hover:bg-[#0097B2]/20 border border-[#0097B2]/25 text-[#0097B2] dark:text-cyan-300 text-xs font-bold transition-all shadow-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Growth OS</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">v1.0</span>
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={closeAllMenus}
                className={`text-sm font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-[#0097B2] dark:text-cyan-400"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#0097B2] dark:hover:text-cyan-400"
                }`}
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className={`text-sm font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-[#0097B2] dark:text-cyan-400"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#0097B2] dark:hover:text-cyan-400"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Minimalist Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-[#0097B2]" />
                )}
              </button>

              {/* Primary High-Intent CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer shrink-0"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10 text-[#0B2545] dark:text-white cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-0 top-20 bg-white dark:bg-[#0B2545] z-50 flex flex-col px-6 py-6 h-[calc(100vh-80px)] overflow-y-auto transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Growth OS Mobile Feature Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0097B2]/15 text-[#0097B2] text-[10px] font-mono font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SaaS Application
              </span>
              <span className="text-[10px] text-slate-400 font-mono">v1.0 Live</span>
            </div>
            <h4 className="font-heading font-extrabold text-sm text-[#0B2545] dark:text-white mb-1 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              SM NextGen Growth OS
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Google Business Profile AI Growth Engine • 3-Pack Telemetry & Review Autopilot
            </p>
            <Link
              href="/growth-os"
              onClick={closeAllMenus}
              className="w-full py-2.5 rounded-xl bg-[#0097B2] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Growth OS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Primary Mobile Navigation List */}
          <div className="space-y-1 border-b border-slate-100 dark:border-white/10 pb-4 mb-4">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              Home
            </Link>

            {/* Mobile Capabilities Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setIsMobileCapabilitiesOpen(!isMobileCapabilitiesOpen)}
                className="w-full flex items-center justify-between py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading cursor-pointer"
              >
                <span>Growth Capabilities</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileCapabilitiesOpen ? "rotate-180 text-[#0097B2]" : ""}`} />
              </button>

              {isMobileCapabilitiesOpen && (
                <div className="pl-3 pr-1 py-2 space-y-2 mb-2">
                  {capabilityPillars.map((pillar) => (
                    <Link
                      key={pillar.name}
                      href={pillar.href}
                      onClick={closeAllMenus}
                      className="flex items-center gap-2.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0097B2]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" />
                      <span>{pillar.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={closeAllMenus}
                    className="block py-1.5 text-xs font-bold text-[#0097B2] hover:underline"
                  >
                    View All Services Overview →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/how-we-work"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              How We Grow
            </Link>

            <Link
              href="/industries"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              Industry Blueprints
            </Link>

            <Link
              href="/case-studies"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              Case Studies
            </Link>

            <Link
              href="/tools"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              Growth Tools
            </Link>

            <Link
              href="/about"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              About & Founder
            </Link>

            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="block py-3 text-base font-bold text-[#0B2545] dark:text-white font-heading hover:text-[#0097B2]"
            >
              Contact
            </Link>
          </div>

          {/* Direct CTA Buttons */}
          <div className="space-y-3 pt-2 pb-8">
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="w-full py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-center font-bold text-xs uppercase tracking-wider block shadow-sm"
            >
              Start a Conversation
            </Link>
            
            <a
              href="https://wa.me/917073538077?text=Hi%20SM%20NextGen%20Leadership%2C%20I%20would%20like%20to%20discuss%20a%20strategic%20growth%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-white dark:bg-[#071A30] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-center font-bold text-xs flex items-center justify-center gap-2 hover:border-[#0097B2]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>Direct WhatsApp Line</span>
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
