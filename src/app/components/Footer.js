// file: src/components/Footer.js
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071A30] text-white pt-20 pb-10 border-t border-white/5 mt-auto font-body relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: BRAND & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          
          {/* Left: Brand & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-heading font-extrabold text-3xl text-white tracking-tight">SM NextGen</span>
              </div>
              <p className="text-[#E6EEF2]/70 text-sm mb-8 leading-relaxed max-w-sm">
                India's first Growth Partner for MSMEs and Startups. Your dedicated team for Marketing, Custom Tech, AI Automation, and Legal Finance.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="space-y-4">
              <a href="tel:+917073538077" className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group w-max">
                <div className="w-10 h-10 rounded-full bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <i className="fas fa-phone-alt -scale-x-100"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Call Us</p>
                  <p className="text-sm font-bold text-white">+91 70735 38077</p>
                </div>
              </a>
              
              <a href="mailto:info@smnextgen.com" className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group w-max">
                <div className="w-10 h-10 rounded-full bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Email Support</p>
                  <p className="text-sm font-bold text-white">info@smnextgen.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Headquarters</p>
                  <p className="text-sm text-[#E6EEF2]/90 leading-relaxed font-medium">
                    HPPQ+Q5V, Sunderwas, Ganapati Nagar, <br />
                    Udaipur, Rajasthan 313001, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Map Embed */}
          <div className="lg:col-span-7 bg-[#0B2545] rounded-3xl p-2 border border-white/10 shadow-2xl relative overflow-hidden h-[300px] lg:h-auto">
            {/* Location Tag - Moved to Bottom Center to avoid overlapping Map Text */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0B2545]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Visit Our Office
            </div>
            {/* Embed Map (Using general query for the provided address) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.6717454320324!2d73.73794160000001!3d24.5869516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4452fc3201be4139%3A0xcc236a7cdf4cc286!2sSM%20NextGen!5e1!3m2!1sen!2sin!4v1775137416720!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "1.25rem", filter: "contrast(90%) opacity(90%)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* MIDDLE ROW: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] uppercase text-xs tracking-widest">Growth Services</h4>
            <ul className="space-y-3 text-sm text-[#E6EEF2]/70 font-medium">
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Marketing & Branding</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Tech & App Development</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">AI & Business Automation</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Legal & Finance Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-[#E6EEF2]/70 font-medium">
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About SM NextGen</Link></li>
              <li><Link href="/pricing" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pricing Plans</Link></li>
              <li><Link href="/case-studies" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Work & Results</Link></li>
              <li><Link href="/blogs" className="hover:text-white hover:translate-x-1 inline-block transition-all">Resources / Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm text-[#E6EEF2]/70 font-medium">
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
              <li><Link href="/partners" className="hover:text-white hover:translate-x-1 inline-block transition-all">Partner Program</Link></li>
              <li><Link href="/tools" className="hover:text-white hover:translate-x-1 inline-block transition-all">Free Growth Tools</Link></li>
              <li><a href="https://wa.me/917073538077" target="_blank" className="hover:text-green-400 hover:translate-x-1 inline-block transition-all"><i className="fab fa-whatsapp mr-1"></i> Chat on WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#0097B2] uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm text-[#E6EEF2]/70 font-medium">
              <li><Link href="/legal" className="hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-white hover:translate-x-1 inline-block transition-all">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-white hover:translate-x-1 inline-block transition-all">Refund Policy</Link></li>
            </ul>
            
            {/* Social Icons inside Legal Column to save space */}
            <div className="mt-8 flex space-x-4 items-center">
              <a href="https://www.instagram.com/smnextgen/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all"><i className="fab fa-instagram text-lg"></i></a>
              <a href="https://www.linkedin.com/company/109211431" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-linkedin text-lg"></i></a>
            </div>
          </div>

        </div>
        
        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold tracking-wide">
          <p>© {new Date().getFullYear()} SM NextGen. Built for Growth.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
             <span>All Systems Operational</span>
          </div>
        </div>
      </div>
      
      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[99]">
        <a href="https://wa.me/917073538077" target="_blank" 
           className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-[#0B2545]">
            <i className="fab fa-whatsapp text-3xl"></i>
            <span className="absolute right-16 bg-[#0B2545] text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg whitespace-nowrap pointer-events-none border border-white/10">WhatsApp Us</span>
        </a>

        <a href="tel:+917073538077" 
           className="w-14 h-14 bg-[#0097B2] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border-2 border-[#0B2545]">
            <i className="fas fa-phone-alt -scale-x-100 text-2xl"></i>
            <span className="absolute right-16 bg-[#0B2545] text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg whitespace-nowrap pointer-events-none border border-white/10">Call Us Directly</span>
        </a>
      </div>
    </footer>
  );
}