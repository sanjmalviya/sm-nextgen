"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white pt-20 pb-10 border-t border-white/10 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND SECTION */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-2xl text-white">SM NextGen</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              India’s first Growth Partner for MSMEs and Startups. Your dedicated team for Marketing, Automation, and Finance.
            </p>
            
            <div className="flex space-x-4 items-center">
              <a href="mailto:info@smnextgen.com" className="hover:text-[#0097B2] transition" title="Email Us">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://www.instagram.com/smnextgen/" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-instagram text-xl"></i></a>
              <a href="https://www.linkedin.com/company/109211431" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://wa.me/918824325438" target="_blank" className="hover:text-[#0097B2] transition"><i className="fab fa-whatsapp text-xl"></i></a>
            </div>
          </div>

          {/* 2. SMART SERVICES (Categories Only) */}
          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/services" className="hover:text-white transition">Marketing & Branding</Link></li>
              <li><Link href="/services" className="hover:text-white transition">AI & Business Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Legal & Finance Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition italic text-[#0097B2]/70">View All Services &rarr;</Link></li>
            </ul>
          </div>

          {/* 3. QUICK LINKS */}
          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition">About Founder</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing Plans</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Our Work</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Resources / Blogs</Link></li>
            </ul>
          </div>

          {/* 4. SUPPORT & LEGAL */}
          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] font-heading uppercase text-xs tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/partners" className="hover:text-white transition">Partner Program</Link></li>
              <li className="pt-2 text-xs text-gray-500 font-bold uppercase tracking-widest">Legal</li>
              <li><Link href="/legal" className="hover:text-white transition text-xs opacity-70">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-white transition text-xs opacity-70">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 SM NextGen. Built for Growth.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span>All Systems Operational</span>
          </div>
        </div>
      </div>
      
      {/* FLOATING BUTTONS (Keep Existing) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="https://wa.me/918824325438" target="_blank" 
           className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-white dark:border-navy">
            <i className="fab fa-whatsapp text-3xl"></i>
            <span className="absolute right-16 bg-white text-navy px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition shadow-lg whitespace-nowrap pointer-events-none">WhatsApp Us</span>
        </a>

        <a href="tel:+918824325438" 
           className="w-14 h-14 bg-[#0097B2] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-white dark:border-navy">
            <i className="fas fa-phone-alt text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}