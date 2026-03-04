"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  // Dark Mode Toggle Logic
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  // Check saved theme on page load
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const navLinks = [
    { name: "System", href: "/how-we-work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Work", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesMobileOpen(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 top-0 bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <img src="/images/logo.png" alt="SM NextGen" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-[#0B2545] dark:text-white leading-tight tracking-wide group-hover:text-[#0097B2] transition-colors">
                SM NextGen
              </span>
              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest leading-none">
                Business Growth Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Home</Link>

            {/* Services Dropdown (Desktop) */}
            <div className="group h-20 flex items-center">
              <Link href="/services" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300 flex items-center gap-1 focus:outline-none py-6">
                Services <i className="fas fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
              </Link>
              
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 pt-2 z-40">
                <div className="bg-white dark:bg-[#0B2545] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden p-8 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 bg-white dark:bg-[#0B2545] rotate-45 border-l border-t border-gray-100 dark:border-gray-700"></div>
                  
                  <div className="grid grid-cols-3 gap-8 border-b border-gray-100 dark:border-gray-700 pb-6 mb-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0097B2] mb-2">
                        <i className="fas fa-bullhorn bg-blue-50 dark:bg-white/5 p-2 rounded-lg"></i>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Marketing</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Brand Strategy</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Social Media Mgmt</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Performance Ads</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">SEO Ranking</Link></li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0097B2] mb-2">
                        <i className="fas fa-rocket bg-blue-50 dark:bg-white/5 p-2 rounded-lg"></i>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Growth & AI Automation</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Lead Gen System</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Marketing Funnels</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">WhatsApp Chatbots</Link></li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0097B2] mb-2">
                        <i className="fas fa-calculator bg-blue-50 dark:bg-white/5 p-2 rounded-lg"></i>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Finance & Legal</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Startup Registration</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">GST & Legal</Link></li>
                        <li><Link href="/services" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Accounting</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-white/5 -m-8 p-4 mt-0 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 italic pl-4">Need help choosing? Use our free AI Tool.</p>
                    <Link href="/services" className="text-sm font-bold text-[#0097B2] hover:underline flex items-center gap-2 pr-4">
                      View All Services <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Menus */}
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3 z-50">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
              <i className="fas fa-moon text-[#0B2545] dark:text-yellow-400"></i>
            </button>
            <Link href="/contact" className="hidden md:flex bg-[#0097B2] hover:bg-[#0B2545] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all font-heading">Book Call</Link>
            
            {/* Mobile Menu Hamburger */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#0B2545] dark:text-white text-2xl focus:outline-none p-2">
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0B2545] z-40 flex flex-col pt-24 px-6 space-y-2 h-screen overflow-y-auto transition-all duration-300 font-heading ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        
        {/* 1. HOME FIRST */}
        <Link href="/" onClick={closeAllMenus} className="mobile-link text-xl font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4 block">
          Home
        </Link>

        {/* 2. SERVICES (Direct Link + Toggle Arrow) */}
        <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex justify-between items-center w-full">
             <Link href="/services" onClick={closeAllMenus} className="text-xl font-medium text-gray-600 dark:text-gray-300">
               Services
             </Link>
             <button 
               onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)} 
               className="p-2 text-[#0097B2]"
             >
               <i className={`fas fa-chevron-down transition-transform ${isServicesMobileOpen ? 'rotate-180' : ''}`}></i>
             </button>
          </div>
          
          {/* Sub-menu Content (Categories Only) */}
          <div className={`${isServicesMobileOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out px-4 space-y-4`}>
             <Link href="/services" onClick={closeAllMenus} className="block group">
                <p className="text-[#0097B2] text-xs font-bold uppercase tracking-widest">Marketing & Ads</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">SEO, Social Media & Performance</p>
             </Link>
             <Link href="/services" onClick={closeAllMenus} className="block group">
                <p className="text-[#0097B2] text-xs font-bold uppercase tracking-widest">AI & Automation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Chatbots, CRM & Smart Workflows</p>
             </Link>
             <Link href="/services" onClick={closeAllMenus} className="block group">
                <p className="text-[#0097B2] text-xs font-bold uppercase tracking-widest">Finance & Legal</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">GST, Accounting & Compliance</p>
             </Link>
          </div>
        </div>

        {/* 3. REST OF THE LINKS */}
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={closeAllMenus} 
            className="mobile-link text-xl font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 pb-4 block"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile CTA Button */}
        <Link 
          href="/contact" 
          onClick={closeAllMenus} 
          className="mt-6 w-full bg-[#0097B2] text-white py-4 rounded-xl text-center font-bold text-lg shadow-xl"
        >
          Book Strategy Call
        </Link>
      </div>
    </header>
  );
}