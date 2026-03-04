"use client";
import { useEffect, useRef } from "react";
import Faq from "./components/Faq";
import Typewriter from "typewriter-effect";

// Updated Testimonials: No Images, Pure English, High SEO Keyword Density
const testimonials = [
  {
    name: "Rajesh Lohar",
    initials: "RL",
    role: "E-commerce Founder, Udaipur",
    text: "Working with SM NextGen has been a game-changer. As the best marketing agency in India for small businesses, their SEO expertise helped us dominate local search results. Our organic visibility has reached unprecedented levels thanks to their data-driven approach.",
    rating: 5,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Anjali Sharma",
    role: "Founder, Innovation Tech",
    initials: "AS",
    text: "If you are looking for the best marketing agency in India for high-ROAS Meta Ads and Google PPC, SM NextGen is the answer. Their performance marketing strategies delivered a 5.2x return on ad spend, helping us scale our startup effectively.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Vikram Singh",
    role: "Operations Director",
    initials: "VS",
    text: "They are undoubtedly the top choice for AI automation in India. By integrating complex n8n workflows and custom WhatsApp chatbots, they transformed our manual lead management into a fully automated growth engine. Their technical precision is unmatched.",
    rating: 5,
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Suresh Prajapat",
    role: "MSME Entrepreneur",
    initials: "SP",
    text: "Professional GST compliance and accounting services are hard to find. SM NextGen provided us with reliable Virtual CFO support that streamlined our entire financial operation. Their commitment to MSME growth is truly inspiring.",
    rating: 5,
    color: "from-orange-500 to-yellow-500"
  }
];

export default function Home() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy transition-colors duration-300 font-body text-navy dark:text-light selection:bg-brand selection:text-white pb-20">
      
      <div ref={cursorRef} id="cursor-glow" className="hidden md:block"></div>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-36 pb-16 overflow-hidden bg-navy flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0097B2]/20 via-navy to-navy z-0"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-64 h-64 md:w-96 md:h-96 bg-brand rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-[10%] w-64 h-64 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6 animate-fade-in-up hover:border-brand transition duration-300 cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white tracking-widest uppercase">India's Personalized Growth Partner for MSMEs</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight">
            <span>Let's grow your business</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 text-glow inline-block">
              <Typewriter
                options={{
                  strings: ['the smart way.', 'with AI Automation.', 'with Data Science.'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            SM NextGen is your comprehensive growth partner, handling <strong>Digital Marketing</strong>, <strong>AI Automation</strong>, and <strong>Legal & Finance</strong> - so your business scales smoothly while you focus on sales and expansion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-white hover:text-brand text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(0,151,178,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Free 7-Point Audit <i className="fas fa-arrow-right"></i>
            </a>
            <a href="https://wa.me/918824325438" target="_blank" className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2 hover:border-brand">
              <i className="fas fa-calendar-check"></i> Book Strategy Call
            </a>
          </div>

          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy h-[250px] md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Growth and Success" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Realistic & Process-Focused) */}
      <section className="py-12 bg-brand text-white relative border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-white/20">
            <div className="p-2">
              <h3 className="text-xl md:text-3xl font-bold mb-1 uppercase tracking-wider">1-on-1</h3>
              <p className="text-xs md:text-sm opacity-90 font-medium tracking-wide">Client Focus</p>
            </div>
            <div className="p-2">
              <h3 className="text-xl md:text-3xl font-bold mb-1 uppercase tracking-wider">ROI Driven</h3>
              <p className="text-xs md:text-sm opacity-90 font-medium tracking-wide">Performance Marketing</p>
            </div>
            <div className="p-2">
              <h3 className="text-xl md:text-3xl font-bold mb-1 uppercase tracking-wider">On-Time</h3>
              <p className="text-xs md:text-sm opacity-90 font-medium tracking-wide">Project Delivery</p>
            </div>
            <div className="p-2">
              <h3 className="text-xl md:text-3xl font-bold mb-1 uppercase tracking-wider">Transparent</h3>
              <p className="text-xs md:text-sm opacity-90 font-medium tracking-wide">Reporting & Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-16 bg-white dark:bg-navy border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">One-Stop Solution</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Shop Growth Services 🛒</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to run and scale a modern business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" alt="Digital Marketing" />
              <div className="card-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg mb-3 backdrop-blur-md border border-white/10"><i className="fab fa-meta"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Digital Marketing</h3>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">Ads, SEO & Social Media Growth.</p>
                <a href="#" className="block w-full py-2 bg-white/10 hover:bg-brand text-white text-center text-xs font-bold rounded hover:opacity-100 backdrop-blur-sm transition border border-white/10">Explore &rarr;</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Automation" />
              <div className="card-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg mb-3 backdrop-blur-md border border-white/10"><i className="fas fa-robot"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">AI Automation</h3>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">Chatbots, CRM & Workflows.</p>
                <a href="#" className="block w-full py-2 bg-white/10 hover:bg-brand text-white text-center text-xs font-bold rounded hover:opacity-100 backdrop-blur-sm transition border border-white/10">Explore &rarr;</a>
              </div>
            </div>

            <div className="service-card group">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Legal & Finance" />
              <div className="card-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center text-lg mb-3 backdrop-blur-md border border-white/10"><i className="fas fa-file-invoice-dollar"></i></div>
                <h3 className="text-lg font-bold text-white mb-1">Legal & Finance</h3>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">GST, Accounting & Compliance.</p>
                <a href="#" className="block w-full py-2 bg-white/10 hover:bg-brand text-white text-center text-xs font-bold rounded hover:opacity-100 backdrop-blur-sm transition border border-white/10">Explore &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMING & TEAM SECTION */}
      <section className="py-16 bg-light dark:bg-[#0f192b] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy dark:text-white mb-8 text-center">Transforming Indian Businesses with <span className="text-brand">Growth & Automation</span></h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              <p>
                <strong>SM NextGen</strong> is more than just a digital agency. We are a comprehensive growth ecosystem designed for Indian MSMEs, Startups, and Enterprises. Unlike traditional agencies that work in silos, we integrate Marketing, Automation, and Finance to create a unified growth engine. <br /><br />
                Whether you need a Performance Marketing Agency to scale your e-commerce sales or a Virtual CFO to handle your GST and compliance, we have you covered.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-navy p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                  <h4 className="font-bold text-brand mb-1">Digital Marketing</h4>
                  <p className="text-xs text-gray-500">SEO, Meta Ads, Google PPC</p>
                </div>
                <div className="bg-white dark:bg-navy p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                  <h4 className="font-bold text-purple-500 mb-1">Business Automation</h4>
                  <p className="text-xs text-gray-500">CRM, WhatsApp Bots, AI Tools</p>
                </div>
                <div className="bg-white dark:bg-navy p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm col-span-2">
                  <h4 className="font-bold text-orange-500 mb-1">Legal & Finance</h4>
                  <p className="text-xs text-gray-500">GST Registration, Accounting, Compliance</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="SM NextGen Team" loading="lazy" className="rounded-2xl w-full h-80 object-cover shadow-2xl border-4 border-white dark:border-navy transform hover:scale-[1.02] transition duration-500 mb-6" />
              <div className="w-full">
                <p className="font-bold text-navy dark:text-white text-lg">Team SM NextGen</p>
                <p className="text-sm text-gray-500">50+ Experts Network</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition"><i className="fab fa-linkedin"></i> Connect</a>
                  <a href="#" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-navy dark:text-white rounded-lg text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition">Meet Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section className="py-16 bg-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">Monthly Retainers</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">Best Selling Growth Plans</h2>
            <p className="text-gray-600 dark:text-gray-400">Selected for high-impact results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-brand transition duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Business Starter</h3>
              <div className="text-3xl font-bold text-brand mb-2">₹12,999 <span className="text-sm text-gray-500">/mo</span></div>
              <p className="text-xs text-gray-500 mb-6">Perfect for establishing consistency.</p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8">
                <li><i className="fas fa-check text-brand mr-2"></i> <strong>2 Platforms</strong> Managed</li>
                <li><i className="fas fa-check text-brand mr-2"></i> 16 Posts + 4 Reels</li>
                <li><i className="fas fa-check text-brand mr-2"></i> Basic SEO Content</li>
              </ul>
              <a href="#" className="block w-full py-3 border border-brand text-brand font-bold text-center rounded-xl hover:bg-brand hover:text-white transition">Get Started</a>
            </div>

            <div className="bg-navy dark:bg-[#0f172a] p-8 rounded-2xl border-2 border-brand relative transform md:scale-105 z-10 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-4 py-1.5 rounded-b-xl shadow-lg uppercase tracking-widest z-20">⭐ Most Recommended</div>
              <h3 className="text-xl font-bold text-brand mb-2 mt-4">Growth Core ⭐</h3>
              <div className="text-3xl font-bold text-white mb-2">₹34,999 <span className="text-sm text-gray-400">/mo</span></div>
              <p className="text-xs text-gray-300 mb-6">Best ROI-focused plan.</p>
              <ul className="space-y-3 text-sm text-gray-200 mb-8">
                <li><i className="fas fa-check text-brand mr-2"></i> <strong>3 Platforms</strong> Managed</li>
                <li><i className="fas fa-bullhorn text-brand mr-2"></i> <strong>Meta + Google Ads</strong></li>
                <li><i className="fas fa-robot text-brand mr-2"></i> Email/WA Automation</li>
              </ul>
              <a href="#" className="block w-full py-3 bg-brand hover:bg-white hover:text-brand font-bold text-center rounded-xl transition">Start Growth 🚀</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION (No Images, Professional Initials & SEO Keywords) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
            Trusted by Visionary <span className="text-brand">Founders</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            High-ROAS marketing results and business automation success stories.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-brand/30 transition-all duration-500 transform hover:-translate-y-2 group/card">
                <div className="flex items-center gap-4 mb-6">
                  {/* Replaced Images with Modern Gradient Initial Avatars */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white dark:border-navy`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white text-lg">{t.name}</h4>
                    <p className="text-xs text-brand font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className={`fas fa-star text-xs ${index < t.rating ? 'text-[#FFD700]' : 'text-gray-300 dark:text-gray-600'}`}></i>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed whitespace-normal">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#F8FAFC] dark:from-navy to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#F8FAFC] dark:from-navy to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      <Faq />

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 bg-brand text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to dominate your market? 🚀</h2>
          <p className="mb-10 text-white/90 text-lg">Schedule a free 30-minute growth strategy call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-10 py-4 bg-white text-brand font-bold rounded-full shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-1">Book Free Audit</a>
            <a href="https://wa.me/918824325438" target="_blank" className="px-10 py-4 border-2 border-white font-bold rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}