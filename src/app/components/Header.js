"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="fixed w-full z-50 transition-all duration-300 top-0 bg-white/95 dark:bg-[#0B2545]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <a href="/" className="flex items-center gap-3 group z-50">
            {/* Logo image - Ensure logo.png is inside the 'public' folder */}
            <img src="/images/logo.png" alt="SM NextGen" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-[#0B2545] dark:text-white leading-tight tracking-wide group-hover:text-[#0097B2] transition-colors">
                SM NextGen
              </span>
              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest leading-none">
                Business Growth Solutions
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Home</a>

            {/* Services Dropdown */}
            <div className="group h-20 flex items-center">
              <a href="services" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300 flex items-center gap-1 focus:outline-none py-6">
                Services <i className="fas fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
              </a>
              
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
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Brand Strategy</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Social Media Mgmt</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Performance Ads</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">SEO Ranking</a></li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0097B2] mb-2">
                        <i className="fas fa-rocket bg-blue-50 dark:bg-white/5 p-2 rounded-lg"></i>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Growth & AI Automation</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Lead Gen System</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Marketing Funnels</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">WhatsApp Chatbots</a></li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#0097B2] mb-2">
                        <i className="fas fa-calculator bg-blue-50 dark:bg-white/5 p-2 rounded-lg"></i>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Finance & Legal</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Startup Registration</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">GST & Legal</a></li>
                        <li><a href="#" className="hover:text-[#0097B2] transition block hover:translate-x-1 duration-200">Accounting</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-white/5 -m-8 p-4 mt-0 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 italic pl-4">Need help choosing? Use our free AI Tool.</p>
                    <a href="services" className="text-sm font-bold text-[#0097B2] hover:underline flex items-center gap-2 pr-4">
                      View All Services <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* YAHAN HUMNE NAYE MENUS ADD KIYE HAIN */}
            <a href="/how-we-work" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">System</a>
            <a href="/pricing" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Pricing</a>
            <a href="/case-studies" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Work</a>
            <a href="/blogs" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Blogs</a>
            <a href="/tools" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Tools</a>
            <a href="/contact" className="nav-link text-sm font-bold text-gray-700 hover:text-[#0097B2] transition dark:text-gray-300">Contact</a>
          </nav>

          <div className="flex items-center gap-3 z-50">
            {/* Dark Mode Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
              <i className="fas fa-moon text-[#0B2545] dark:text-yellow-400"></i>
            </button>
            <a href="#" className="hidden md:flex bg-[#0097B2] hover:bg-[#0B2545] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all font-heading">Book Call</a>
            
            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#0B2545] dark:text-white text-2xl focus:outline-none p-2">
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0B2545] z-40 flex-col pt-24 px-6 space-y-4 h-screen overflow-y-auto transition-transform duration-300 font-heading ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link text-xl font-bold text-[#0B2545] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2 block">Home</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link text-xl font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 pb-2 block">Services</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link text-xl font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 pb-2 block">Pricing</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link text-xl font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 pb-2 block">Contact</a>
      </div>
    </header>
  );
}