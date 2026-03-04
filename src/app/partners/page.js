"use client";
import { useEffect, useRef } from "react";

export default function Partners() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Mouse Spotlight Effect Logic
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
        cursorRef.current.style.setProperty('--x', e.clientX + 'px');
        cursorRef.current.style.setProperty('--y', e.clientY + 'px');
      }
    };
    
    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200 relative">
      
      {/* Mouse Glow Spotlight */}
      <div ref={cursorRef} id="cursor-glow-spotlight" className="hidden md:block"></div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand font-bold text-xs uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full border border-brand/20 mb-4 inline-block">Collaborate & Grow</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy dark:text-white mb-6">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">NextGen Ecosystem</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We are building India's first Full-Stack Growth Network. Whether you are a creator or a connector, there is a place for you here.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP OPTIONS */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
          {/* FOR TALENT */}
          <div className="bg-white dark:bg-[#162032] p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 relative group hover:-translate-y-2 transition duration-500 animate-fade-in-up">
            <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700 group-hover:bg-brand transition-colors duration-300"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-50 dark:bg-navy rounded-2xl flex items-center justify-center text-brand text-3xl shadow-inner">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-navy dark:text-white">For Talent</h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Freelancers & Agencies</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stop chasing low-paying clients. Join our vetted talent pool and work on high-ticket enterprise projects. We handle sales; you handle delivery.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-500 border border-gray-200 dark:border-white/10">Video Editors</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-500 border border-gray-200 dark:border-white/10">Copywriters</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-500 border border-gray-200 dark:border-white/10">Ads Managers</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-500 border border-gray-200 dark:border-white/10">Web Devs</span>
            </div>
            
            <ul className="space-y-4 mb-10 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center"><i className="fas fa-check-circle text-brand mr-3"></i> Consistent Project Flow</li>
              <li className="flex items-center"><i className="fas fa-check-circle text-brand mr-3"></i> No Client Management Headache</li>
              <li className="flex items-center"><i className="fas fa-check-circle text-brand mr-3"></i> On-Time Payments</li>
            </ul>
            
            <a href="/contact" className="block w-full text-center py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition shadow-lg">
              Apply as Talent
            </a>
          </div>

          {/* FOR PARTNERS (AFFILIATES) */}
          <div className="bg-navy p-10 rounded-3xl shadow-2xl border border-brand/30 relative overflow-hidden group hover:-translate-y-2 transition duration-500 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/20 rounded-full blur-3xl group-hover:bg-brand/30 transition duration-500"></div>
            <div className="absolute top-6 right-6 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">EARN UP TO 20%</div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-3xl backdrop-blur-sm">
                <i className="fas fa-handshake"></i>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-white">For Partners</h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Affiliates & Connectors</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
              Monetize your network. Refer clients to SM NextGen for Web Dev, Marketing, or Automation services and earn recurring commissions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-brand">15%</div>
                <div className="text-[10px] text-gray-400">Direct Commission</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-green-400">Lifetime</div>
                <div className="text-[10px] text-gray-400">Recurring Model</div>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10 text-sm text-gray-300 relative z-10">
              <li className="flex items-center"><i className="fas fa-check text-brand mr-3"></i> White-label Marketing Material</li>
              <li className="flex items-center"><i className="fas fa-check text-brand mr-3"></i> Dedicated Account Manager</li>
              <li className="flex items-center"><i className="fas fa-check text-brand mr-3"></i> Transparent Dashboard</li>
            </ul>
            
            <a href="/contact" className="block w-full text-center py-4 bg-brand text-white font-bold rounded-xl hover:bg-white hover:text-navy transition shadow-lg shadow-brand/20 relative z-10">
              Join Affiliate Program
            </a>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-[#0B1120] border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-navy dark:text-white mb-12">Why the Best Choose SM NextGen?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-bold text-navy dark:text-white mb-2">Community First</h3>
              <p className="text-sm text-gray-500">Access to a private community of 50+ founders and creators.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="font-bold text-navy dark:text-white mb-2">Premium Tools</h3>
              <p className="text-sm text-gray-500">Get free access to our internal AI tools and premium software stack.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="font-bold text-navy dark:text-white mb-2">Learning & Growth</h3>
              <p className="text-sm text-gray-500">Weekly workshops on AI, Sales, and Scaling strategies.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}