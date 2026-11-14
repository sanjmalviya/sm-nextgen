"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Zap, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (wordmarkRef.current) {
        gsap.fromTo(
          wordmarkRef.current,
          { yPercent: 25, opacity: 0.6, scale: 0.98 },
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wordmarkRef.current,
              start: "top 98%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#071A30] text-white pt-16 pb-6 border-t border-white/10 mt-auto font-body relative overflow-hidden">
      {/* Subtle Atmospheric Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0097B2]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Brand Details & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 pb-14 border-b border-white/10">
          {/* Left Column (5 Cols): Brand & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Logo Lockup */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#0097B2]/10 border border-[#0097B2]/30">
                  <Image 
                    src="/images/logo.png" 
                    alt="SM NextGen" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover" 
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
                We connect strategy, marketing, technology and intelligent systems to help businesses build stronger brands, attract the right customers and achieve sustainable growth.
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
                    Udaipur, Rajasthan, India
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

        {/* Navigation Columns matching Master Brief */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/how-we-work" className="hover:text-white transition-colors">How We Grow</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Growth Tools</Link></li>
              <li>
                <Link href="/growth-os" className="text-cyan-300 font-bold hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Growth OS</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Growth Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link href="/services/brand-strategy-positioning" className="hover:text-white transition-colors">Growth Strategy</Link></li>
              <li><Link href="/services/search-engine-optimization-seo" className="hover:text-white transition-colors">Marketing &amp; Demand</Link></li>
              <li><Link href="/services/website-development" className="hover:text-white transition-colors">Brand &amp; Digital Experience</Link></li>
              <li><Link href="/services/sales-funnel-conversion" className="hover:text-white transition-colors">Conversion &amp; Revenue</Link></li>
              <li><Link href="/services/ai-business-automation-systems" className="hover:text-white transition-colors">AI &amp; Automation</Link></li>
              <li><Link href="/services/ai-data-analytics-business-intelligence" className="hover:text-white transition-colors">Data &amp; Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link href="/contact" className="hover:text-white transition-colors">Start a Growth Conversation</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://www.linkedin.com/company/109211431" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/smnextgen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@smnextgen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://wa.me/917073538077" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#0097B2] uppercase text-xs tracking-wider font-mono">
              Location &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium mb-4">
              <li className="text-slate-400">SM NextGen</li>
              <li className="text-slate-400">Udaipur, Rajasthan, India</li>
              <li><a href="mailto:info@smnextgen.com" className="text-[#0097B2] hover:underline">info@smnextgen.com</a></li>
              <li><a href="tel:+917073538077" className="text-white hover:text-[#0097B2]">+91 70735 38077</a></li>
            </ul>

            <div className="space-y-1.5 pt-2 border-t border-white/10 text-[11px] text-slate-400">
              <div><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></div>
              <div><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></div>
              <div><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></div>
            </div>
          </div>
        </div>

        {/* Oversized Official SVG Footer Wordmark (Approved Brand Asset) with Curtain Reveal */}
        <div className="w-full overflow-hidden flex justify-center items-end mt-12 mb-6 pointer-events-none select-none">
          <img 
            ref={wordmarkRef}
            src="/images/sm-nextgen-footer-wordmark.svg" 
            alt="SM NEXTGEN" 
            className="w-full max-w-[1600px] h-auto block opacity-90 transition-opacity hover:opacity-100 will-change-transform" 
          />
        </div>

        {/* Footer Brand Signature */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-mono gap-3">
          <div>
            <p className="font-bold text-white text-xs">
              SM NEXTGEN — YOUR COMPLETE BUSINESS GROWTH PARTNER.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Strategy. Marketing. Technology. AI. Automation. Growth.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p>© SM NextGen. All Rights Reserved.</p>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Systems Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
