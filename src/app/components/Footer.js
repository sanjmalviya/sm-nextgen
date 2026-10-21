"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071A30] text-white pt-16 pb-10 border-t border-white/10 mt-auto font-body relative overflow-hidden">
      
      {/* Subtle Atmospheric Lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0097B2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Brand & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 pb-14 border-b border-white/10">
          
          {/* Left Column (5 Cols): Brand & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Logo Lockup */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#0097B2]/10 border border-[#0097B2]/30">
                  <img 
                    src="/images/logo.png" 
                    alt="SM NextGen" 
                    className="w-full h-full object-cover" 
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-tight">
                    SM NextGen
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider leading-none mt-0.5">
                    Business Growth Partner
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                Your Complete Business Growth Partner. Combining strategy, marketing, technology, AI automation, and closed-loop revenue attribution.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 text-xs">
              <a 
                href="tel:+917073538077" 
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group w-max"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Direct Phone</span>
                  <span className="font-bold text-white group-hover:text-[#0097B2] transition-colors">+91 70735 38077</span>
                </div>
              </a>

              <a 
                href="mailto:info@smnextgen.com" 
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group w-max"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Email Inquiries</span>
                  <span className="font-bold text-white group-hover:text-[#0097B2] transition-colors">info@smnextgen.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-2.5 rounded-xl max-w-sm">
                <div className="w-8 h-8 rounded-lg bg-[#0097B2]/20 text-[#0097B2] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Headquarters</span>
                  <span className="text-slate-300 leading-relaxed font-light text-xs">
                    HPPQ+Q5V, Sunderwas, Ganapati Nagar, <br />
                    Udaipur, Rajasthan 313001, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#0B2545] rounded-3xl p-2 border border-white/10 shadow-xl relative overflow-hidden h-[260px] lg:h-auto">
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#071A30]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold z-10 flex items-center gap-2 border border-white/10 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SM NextGen Headquarters</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.6717454320324!2d73.73794160000001!3d24.5869516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4452fc3201be4139%3A0xcc236a7cdf4cc286!2sSM%20NextGen!5e1!3m2!1sen!2sin!4v1775137416720!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "1.25rem", filter: "contrast(90%) opacity(90%)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Growth Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link href="/services/brand-strategy-positioning" className="hover:text-white transition-colors">Growth Strategy</Link></li>
              <li><Link href="/services/search-engine-optimization-seo" className="hover:text-white transition-colors">Marketing & Demand</Link></li>
              <li><Link href="/services/website-development" className="hover:text-white transition-colors">Conversion & Web Tech</Link></li>
              <li><Link href="/services/ai-business-automation-systems" className="hover:text-white transition-colors">AI & Automations</Link></li>
              <li><Link href="/services/ai-data-analytics-business-intelligence" className="hover:text-white transition-colors">Data & Attribution</Link></li>
              <li><Link href="/services/business-compliance-management" className="hover:text-white transition-colors">Operations Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Systems & Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/growth-os" className="text-cyan-300 font-bold hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Growth OS Platform</span>
                </Link>
              </li>
              <li><Link href="/how-we-work" className="hover:text-white transition-colors">How We Grow (Methodology)</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industry Blueprints</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Documented Results</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Growth Tools & Calculators</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About & Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Engagement Tiers</Link></li>
              <li>
                <a 
                  href="https://wa.me/917073538077" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: +91 70735 38077</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/data-deletion" className="hover:text-rose-400 transition-colors">User Data Deletion</Link></li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-5 flex items-center space-x-3">
              <a 
                href="https://www.instagram.com/smnextgen/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="SM NextGen on Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-colors"
              >
                <span className="text-xs font-bold font-mono">IG</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/109211431" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="SM NextGen on LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <span className="text-xs font-bold font-mono">IN</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} SM NextGen. All Rights Reserved. Built for Business Growth.</p>
          <div className="mt-3 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Live & Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
