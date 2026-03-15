"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 
const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// --- PREMIUM SLIDER IMAGES (High-Res Unsplash) ---
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Dashboard/Tech
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Analytics & Growth
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop", // Strategy/Meeting
  "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964&auto=format&fit=crop", // AI / Code
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"  // Financial Charts
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const cursorRef = useRef(null);

  // Form State for Inline Lead Capture
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  const words = ["the smart way.", "with AI Automation.", "with Data Science."];

  // --- MOUSE GLOW LOGIC (Fixed & Optimized) ---
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        // Using requestAnimationFrame for ultra-smooth hardware-accelerated movement
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // --- BACKGROUND SLIDER LOGIC ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // --- TYPEWRITER LOGIC ---
  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypewriterText(
          currentWord.substring(0, typewriterText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, wordIndex]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const leadMsg = `*New Free Growth Audit Request* 📈\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Business Type:* ${formData.businessType}\n*Monthly Budget:* ${formData.budget}\n\nPlease review my details and schedule the audit.`;
    setTimeout(() => {
      window.open(getWhatsAppLink(leadMsg), "_blank");
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", businessType: "", budget: "" });
    }, 1500);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "What services does SM NextGen offer?", a: "We provide an integrated growth ecosystem combining Data-Driven Digital Marketing, Custom AI Automation, and reliable Legal & Financial compliance. We handle your scale from generating leads to managing your accounting." },
    { q: "How can AI automation help my business?", a: "AI systems reduce repetitive manual work. From 24/7 autonomous lead qualification chatbots to smart CRM workflows, AI allows your team to focus on high-level strategy and sales, significantly lowering operational costs." },
    { q: "Do you work with international clients?", a: "Yes. We support startups, e-commerce brands, and SaaS companies globally, providing digital marketing infrastructure and cross-border financial advisory." },
    { q: "How long before marketing results appear?", a: "Performance Ads generate inbound leads within weeks. However, foundational growth strategies like SEO, Content Marketing, and Brand Positioning build compounding organic equity over 3 to 6 months." }
  ];

  return (
    <>
      <Head>
        <title>SM NextGen | Grow Your Business with Marketing & AI Automation</title>
        <meta name="description" content="SM NextGen helps businesses scale through data-driven marketing, intelligent automation systems, and reliable legal & financial support." />
      </Head>

      <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white w-full overflow-x-hidden transition-colors duration-300 relative">
        
        {/* --- GLOBAL CURSOR GLOW (Fixed Z-Index & Position) --- */}
        <div 
          ref={cursorRef} 
          className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#0097B2]/30 dark:bg-[#0097B2]/20 rounded-full blur-[120px] z-[99] hidden lg:block mix-blend-screen dark:mix-blend-lighten"
          style={{ willChange: 'transform' }}
        ></div>

        {/* --- INLINE CSS FOR INFINITE MARQUEE --- */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* 1️⃣ HERO SECTION */}
        <section className="relative pt-40 pb-16 bg-[#0B2545] text-center px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
              Let&apos;s Grow Your Business <br className="hidden md:block" />
              <span className="text-[#0097B2] min-h-[90px] block mt-2">{typewriterText}<span className="animate-blink font-light opacity-50 text-white">|</span></span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E6EEF2]/80 mb-10 leading-relaxed font-body max-w-2xl font-light">
              SM NextGen helps businesses scale through data-driven marketing, intelligent automation systems, and reliable legal &amp; financial support - giving founders the tools and systems needed to grow efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-8">
              <a href="#leadForm" className="w-full sm:w-auto px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.4)] transition-all duration-300 hover:-translate-y-1 text-lg relative z-20">
                Get Free Growth Audit
              </a>
              <a href={getWhatsAppLink("Hi SM NextGen, I'd like to book a Strategy Call.")} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-xl border border-white/20 transition-colors text-lg relative z-20">
                Book Strategy Call
              </a>
            </div>

            {/* Trust Indicator Row */}
            <div className="text-center text-xs md:text-sm font-medium text-[#E6EEF2]/60 uppercase tracking-widest mt-4 px-4 leading-relaxed">
              <i className="fas fa-shield-alt text-[#0097B2] mr-1.5"></i> Trusted by startups, MSMEs, and growing businesses.
            </div>
          </div>
        </section>

        {/* 1.5️⃣ FULL-WIDTH IMAGE SLIDER SECTION */}
        <section className="relative w-full h-[40vh] md:h-[60vh] bg-[#071A30] overflow-hidden group border-b border-white/5">
          {HERO_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1500 ease-in-out transform origin-center ${index === currentSlide ? "opacity-60 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
            >
              <img src={img} alt={`SM NextGen Business Growth ${index}`} className="w-full h-full object-cover filter grayscale-[20%] contrast-110" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545] via-transparent to-[#F8FAFC] dark:to-[#0B2545] z-20 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/60 via-transparent to-[#0B2545]/60 z-20"></div>
        </section>

        {/* 2️⃣ TRUST / VALUE STRIP */}
        <section className="py-6 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]/90">
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> ROI-focused marketing strategies</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> AI automation systems for modern businesses</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Transparent reporting and communication</span>
              <span className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white/10"></span>
              <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0097B2]"></i> Dedicated growth support</span>
            </div>
          </div>
        </section>

        {/* 3️⃣ CORE SERVICES SECTION */}
        <section id="services" className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Everything Your Business Needs to Grow</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed">SM NextGen combines marketing, automation, and business compliance into one integrated growth system.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Digital Marketing */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center text-2xl mb-6 shadow-lg"><i className="fas fa-chart-line"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">Digital Marketing</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Drive targeted traffic, acquire customers profitably, and dominate your niche search rankings.</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> SEO</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> Performance Ads</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> Social Media Marketing</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-pink-500"></i> Lead Generation</li>
                  </ul>
                  <Link href="/services/" className="inline-flex items-center font-bold text-pink-600 dark:text-pink-400 group-hover:text-pink-500 transition-colors">
                    Explore Marketing Services <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* AI Automation */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-2xl mb-6 shadow-lg"><i className="fas fa-robot"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">AI Automation</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Reduce manual tasks and scale operations flawlessly with custom conversational AI and smart workflows.</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> AI Chatbots</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> CRM Automation</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> WhatsApp Automation</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-purple-500"></i> Workflow Automation</li>
                  </ul>
                  <Link href="/services/" className="inline-flex items-center font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors">
                    Explore AI Automation <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* Legal & Finance */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden isolate">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-2xl mb-6 shadow-lg"><i className="fas fa-balance-scale"></i></div>
                  <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4">Legal &amp; Finance</h3>
                  <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Build a bulletproof operational foundation, manage cash flows, and stay 100% legally compliant.</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-green-500"></i> GST Registration</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-green-500"></i> Accounting &amp; Bookkeeping</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-green-500"></i> Business Compliance</li>
                    <li className="text-gray-700 dark:text-[#E6EEF2]/90 font-medium flex items-center gap-3"><i className="fas fa-angle-right text-green-500"></i> Financial Advisory</li>
                  </ul>
                  <Link href="/services/" className="inline-flex items-center font-bold text-green-600 dark:text-green-400 group-hover:text-green-500 transition-colors">
                    Explore Legal Services <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ HOW SM NEXTGEN WORKS (PROCESS) */}
        <section className="py-24 bg-white dark:bg-[#071A30] border-y border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Our Growth Process</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#0097B2]/30 to-transparent -z-10"></div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-[#0097B2]/30">1</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Discovery</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Understanding your business models, unit economics, and primary growth goals.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-[#0097B2]/30">2</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Strategy</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Designing a tailored, data-backed marketing and automation roadmap.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm transform md:-translate-y-2 border-[#0097B2]/30">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-[#0097B2]/30">3</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Implementation</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Launching targeted campaigns, automation workflows, and financial systems.</p>
              </div>
              
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-[#0097B2]/30">4</div>
                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3">Optimization</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed">Scaling results continuously using real-time data and performance insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ GROWTH SYSTEM VISUAL */}
        <section className="py-24 bg-[#0B2545] text-white relative overflow-hidden border-y border-white/5 z-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-16">How Our Growth System Works</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16">
              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-mouse-pointer text-3xl text-pink-400 mb-3"></i>
                <h4 className="font-bold text-lg">Traffic</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>
              
              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-users text-3xl text-blue-400 mb-3"></i>
                <h4 className="font-bold text-lg">Leads</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-[#0097B2] p-6 rounded-2xl shadow-[0_0_20px_rgba(0,151,178,0.4)] flex-1 max-w-[220px] scale-105">
                <i className="fas fa-cogs text-3xl text-[#0097B2] mb-3"></i>
                <h4 className="font-bold text-lg">Automation</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-hand-holding-usd text-3xl text-green-400 mb-3"></i>
                <h4 className="font-bold text-lg">Sales</h4>
              </div>
              <i className="fas fa-arrow-right text-xl text-white/30 hidden md:block"></i>
              <i className="fas fa-arrow-down text-xl text-white/30 md:hidden"></i>

              <div className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex-1 max-w-[220px] transition-transform hover:scale-105">
                <i className="fas fa-rocket text-3xl text-purple-400 mb-3"></i>
                <h4 className="font-bold text-lg">Scale</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-[#0097B2] font-bold text-lg mb-3"><i className="fas fa-bullhorn mr-2"></i> Marketing</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Marketing and SEO strategies generate highly qualified inbound leads.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-[#0097B2] font-bold text-lg mb-3"><i className="fas fa-robot mr-2"></i> Automation</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Automation and AI chatbots naturally nurture and qualify prospects 24/7.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-[#0097B2] font-bold text-lg mb-3"><i className="fas fa-balance-scale mr-2"></i> Finance</h4>
                <p className="text-[#E6EEF2]/80 text-sm leading-relaxed">Finance systems and tracking ensure complete operational stability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ INDUSTRIES WE SUPPORT */}
        <section className="py-20 bg-white dark:bg-[#071A30] text-center transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-12">Industries We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Ecommerce", icon: "fas fa-shopping-cart" },
                { name: "Startups", icon: "fas fa-rocket" },
                { name: "Real Estate", icon: "fas fa-building" },
                { name: "Healthcare", icon: "fas fa-heartbeat" },
                { name: "Education", icon: "fas fa-graduation-cap" },
                { name: "Local Businesses", icon: "fas fa-store" },
                { name: "SaaS", icon: "fas fa-cloud" },
                { name: "Professional Services", icon: "fas fa-user-tie" }
              ].map((ind, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-8 bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-100 dark:border-white/5 rounded-2xl hover:border-[#0097B2] dark:hover:border-[#0097B2] hover:shadow-md transition-all group relative z-10">
                  <i className={`${ind.icon} text-3xl text-gray-400 group-hover:text-[#0097B2] mb-4 transition-colors`}></i>
                  <span className="font-bold text-[#0B2545] dark:text-white text-sm md:text-base">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7️⃣ TESTIMONIALS SECTION (Horizontal Auto-Scrolling) */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-y border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">What Founders Say About SM NextGen</h2>
          </div>
          
          {/* Infinite Marquee Container */}
          <div className="flex overflow-hidden group w-full">
            <div className="animate-marquee gap-8 pr-8">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-8">
                  <div className="w-[400px] bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10">
                    <div className="flex text-yellow-400 mb-4 text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-6 flex-grow leading-relaxed">&quot;They streamlined our ad spend and built automated CRM workflows. We are seeing much better operational stability and consistent lead flow now.&quot;</p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold">R</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Rahul S.</h4>
                        <p className="text-xs text-[#0097B2] font-bold">Founder – Ecommerce Brand</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[400px] bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10">
                    <div className="flex text-yellow-400 mb-4 text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-6 flex-grow leading-relaxed">&quot;Getting our GST compliance and Virtual CFO services from the same team that runs our marketing has been a huge relief. Everything is connected.&quot;</p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#0097B2] text-white flex items-center justify-center font-bold">A</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Aditi M.</h4>
                        <p className="text-xs text-[#0097B2] font-bold">Director – B2B SaaS</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[400px] bg-white dark:bg-[#162032] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-all relative z-10">
                    <div className="flex text-yellow-400 mb-4 text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p className="text-gray-700 dark:text-[#E6EEF2]/90 text-sm italic mb-6 flex-grow leading-relaxed">&quot;The AI chatbot they deployed on our site handles 60% of our basic support queries, saving our human team hours of repetitive work every day.&quot;</p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">K</div>
                      <div>
                        <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Karan V.</h4>
                        <p className="text-xs text-[#0097B2] font-bold">CEO – Professional Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8️⃣ PRICING / PLANS */}
        <section className="py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-4">Growth Plans</h2>
              <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">Scalable solutions tailored to your exact business stage.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col transition-colors duration-300 relative z-10 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Starter</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For small businesses.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2] font-medium">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Basic Marketing Support</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Content Creation Setup</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Initial SEO Foundation</li>
                </ul>
                <Link href="/pricing" className="block w-full py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Request Custom Plan</Link>
              </div>
              
              {/* Growth - Highlighted */}
              <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white hover:-translate-y-5 transition-transform z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-sm text-[#E6EEF2]/80 mb-6">For scaling companies.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Performance Ads Management</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> CRM & Automation Setup</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Analytics Reporting</li>
                </ul>
                <Link href="/pricing" className="block w-full py-4 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Request Custom Plan</Link>
              </div>

              {/* Custom */}
              <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col transition-colors duration-300 relative z-10 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Custom</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For advanced marketing and automation systems.</p>
                <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-[#E6EEF2] font-medium">
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Enterprise Level Systems</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom AI Integrations</li>
                  <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Dedicated Strategy Manager</li>
                </ul>
                <a href="#leadForm" className="block w-full py-4 text-center rounded-xl border border-gray-300 dark:border-white/20 text-[#0B2545] dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Request Custom Plan</a>
              </div>
            </div>
          </div>
        </section>

        {/* 9️⃣ LEAD CAPTURE SECTION (Inline Mid-Page) */}
        <section id="leadForm" className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] border-t border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white dark:bg-[#162032] rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col lg:flex-row relative z-10">
              
              <div className="lg:w-5/12 bg-[#0B2545] p-10 text-white flex flex-col justify-center relative isolate">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0097B2]/20 mix-blend-overlay z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-heading font-extrabold mb-4">Get Your Free Growth Consultation</h2>
                  <p className="text-[#E6EEF2]/80 text-sm mb-8 leading-relaxed">Let&apos;s analyze your current business operations and design a custom marketing and automation roadmap.</p>
                  <div className="space-y-4 text-sm font-medium">
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> 30-Minute Strategy Call</div>
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> Technical &amp; Marketing Audit</div>
                    <div className="flex items-center gap-3"><i className="fas fa-check text-[#0097B2]"></i> No Obligations</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-7/12 p-10 relative z-10">
                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="John Doe" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91 7073538077" 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                        className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition relative z-20" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Business Type</label>
                        <select name="businessType" value={formData.businessType} onChange={handleFormChange} required 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition cursor-pointer relative z-20">
                          <option value="" disabled>Select</option>
                          <option value="SaaS/Tech">SaaS / Tech</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Local Business">Local Business</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Monthly Marketing Budget</label>
                        <select name="budget" value={formData.budget} onChange={handleFormChange} required 
                          className="w-full bg-[#F8FAFC] dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] dark:text-white transition cursor-pointer relative z-20">
                          <option value="" disabled>Select</option>
                          <option value="Under 50k">Under ₹50,000</option>
                          <option value="50k - 2L">₹50,000 - ₹2 Lakhs</option>
                          <option value="2L+">₹2 Lakhs+</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-[#0097B2] hover:bg-[#0B2545] dark:hover:bg-white dark:hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4 text-sm uppercase tracking-wider relative z-20">
                      Request Free Audit
                    </button>

                    <div className="mt-4 text-center">
                      <a href={getWhatsAppLink("Hi SM NextGen, I'm reaching out from your website.")} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0097B2] hover:underline flex items-center justify-center gap-2 relative z-20">
                        <i className="fab fa-whatsapp"></i> Chat With Our Team
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-16 h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                    <h4 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Request Received!</h4>
                    <p className="text-sm text-gray-500 dark:text-[#E6EEF2]/70">Connecting you to our WhatsApp to finalize your audit timing...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣1️⃣ FAQ SECTION */}
        <section className="py-24 bg-white dark:bg-[#071A30] transition-colors duration-300 border-t border-gray-200 dark:border-white/5 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300 relative z-20">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg relative z-20"
                  >
                    {faq.q}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? "bg-[#0097B2] text-white rotate-180 shadow-md" : "bg-white dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10"}`}>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </button>
                  <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed relative z-20 ${activeFaq === index ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1️⃣2️⃣ FINAL CTA */}
        <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white z-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">Ready to Grow Your Business the Smart Way?</h2>
            <p className="text-xl text-[#E6EEF2] mb-12 font-body max-w-2xl mx-auto font-light leading-relaxed">Talk to our team and discover how marketing, automation and business systems can help your business scale.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-[0_0_30px_-5px_rgba(0,151,178,0.5)] hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                Book Strategy Call <i className="fas fa-arrow-up transform rotate-45"></i>
              </a>
              <a href={getWhatsAppLink("Hi SM NextGen, I am ready to scale my business. Let's talk.")} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3 w-full sm:w-auto relative z-20">
                <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}