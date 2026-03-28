"use client";
import { useState } from "react";
import Link from "next/link";

// --- WHATSAPP SETUP ---
const WHATSAPP_NUMBER = "917073538077"; 

export default function AIContentCreationPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", business: "", contentVolume: "" });
  const [submitted, setSubmitted] = useState(false);

  // 🚀 ADVANCED FORM SUBMIT (EMAIL + WHATSAPP)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const leadData = {
      service: "AI Content Creation Systems",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business: formData.business,
      contentVolume: formData.contentVolume,
    };

    // 1. Send data to backend (Email)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (error) {
      console.error("API error, proceeding to WhatsApp", error);
    }

    // 2. Redirect to WhatsApp with details
    const leadMsg = `*New AI Content Engine Request* 🎥✍️\n\n*Service:* ${leadData.service}\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Business:* ${leadData.business}\n*Monthly Content Need:* ${leadData.contentVolume}\n\nPlease review my details and schedule an AI production strategy call.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(leadMsg)}`, '_blank');
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", business: "", contentVolume: "" });
    }, 1500);
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "Will the AI sound robotic or like ChatGPT?", a: "No. We don't just use standard ChatGPT prompts. We fine-tune Custom LLMs on your past high-performing content, your brand guidelines, and specific formatting rules. The resulting output is mathematically aligned with your exact brand voice, avoiding generic 'AI phrases'." },
    { q: "Can you generate actual videos with AI?", a: "Yes! We build workflows combining text-to-speech (ElevenLabs), AI avatars (HeyGen/Synthesia), and automated video editing pipelines. You can write a blog post, and the system can automatically convert it into a fully narrated, captioned YouTube Short or Reel." },
    { q: "Does Google penalize AI-generated SEO content?", a: "Google penalizes 'spam' and unhelpful content, regardless of who wrote it. Google officially stated they do not penalize AI content as long as it demonstrates E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). We build systems that inject real data and expert insights into the AI output." },
    { q: "What is Programmatic SEO?", a: "Programmatic SEO is using automation to generate hundreds or thousands of high-quality landing pages for long-tail keywords (e.g., 'Best Marketing Agency in [City]'). Our AI pipelines can generate these localized pages at scale, driving massive organic traffic instantly." },
    { q: "How much time does this actually save my team?", a: "A typical marketing team spends 20+ hours a week researching, drafting, and editing. An AI Content Engine reduces a 4-hour blog-to-video workflow down to 5 minutes of human review. It enables you to scale production 10x without hiring a single new freelancer." }
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] min-h-screen selection:bg-[#0097B2] selection:text-white relative transition-colors duration-300">
      
      {/* 1️⃣ HERO SECTION (Always Dark #0B2545 for Premium Impact) */}
      <section className="relative pt-40 pb-20 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/95 to-[#0B2545]/60 z-10"></div>
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
               alt="AI Generative Content and Video Production" 
               className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0097B2]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <i className="fas fa-brain"></i> Generative AI Factory
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Scale Content 10x. <br /> <span className="text-[#0097B2]">Zero Extra Headcount.</span>
              </h1>
              <p className="text-lg text-[#E6EEF2] mb-8 leading-relaxed font-body max-w-xl">
                Stop struggling with creative burnout. We build autonomous AI content engines that generate hyper-accurate blogs, social media posts, and short-form videos in your exact brand voice.
              </p>
              <ul className="space-y-3 mb-10 text-[#E6EEF2] font-medium text-sm md:text-base">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> AI Avatar & Auto-Video Production (Reels/Shorts)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Programmatic SEO & Auto-Blogging Pipelines</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0097B2]"></i> Strict Brand Voice Fine-Tuning Models</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#leadForm" className="w-full sm:w-auto px-8 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 text-center">
                  Build Your Content Engine
                </a>
                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border border-[#E6EEF2]/30 transition-colors text-center">
                  View AI Plans
                </Link>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div className="hidden lg:block relative isolate transform-gpu">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-[#071A30]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="AI Content Generation Dashboard" className="w-full h-[450px] object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <p className="text-xs text-[#0097B2] font-bold uppercase mb-1">Live Pipeline</p>
                    <p className="font-bold text-lg leading-tight">Automated Video & Text Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ TRUST BAR */}
      <section className="py-6 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-bold text-[#0B2545] dark:text-[#E6EEF2]">
            <div className="flex items-center gap-2"><i className="fas fa-video text-[#0097B2] text-xl"></i> Instant Text-to-Video</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-fingerprint text-[#0097B2] text-xl"></i> 100% Brand Authenticity</div>
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2"><i className="fas fa-chart-line text-[#0097B2] text-xl"></i> Exponential Output Velocity</div>
          </div>
        </div>
      </section>

      {/* 3️⃣ QUICK OVERVIEW */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Volume Wins In The Modern Internet</h2>
          <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80 leading-relaxed font-body">
            To dominate social media and search engines today, posting once a week is no longer enough. You need extreme volume across multiple platforms. By integrating <strong>LLMs, AI Image Generators, and AI Video Editors</strong> into a unified automated pipeline, we allow your brand to produce agency-level content output at a fraction of the cost and time.
          </p>
        </div>
      </section>

      {/* 🟢 2-COLUMN SECTION (Problems, Solutions + Sticky Form) */}
      <section className="py-12 bg-white dark:bg-[#071A30] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start relative">
            
            {/* ⬅️ LEFT COLUMN: Problems & Solutions */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-16">

              {/* 4️⃣ PROBLEMS WE SOLVE */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Are you facing these production bottlenecks?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">High Agency & Freelancer Costs</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Paying human writers and video editors for daily content drains your marketing budget rapidly, leaving nothing for ad spend.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Inconsistent Output</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">Your team has great ideas, but executing them takes too long. You post 3 times a week, when algorithms demand 3 times a day.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Robotic AI Content</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">You tried using ChatGPT yourself, but the output sounds generic, uses words like "delve" and "transformative", and lacks your brand's soul.</p>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-[#0097B2] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center text-lg mb-4"><i className="fas fa-times"></i></div>
                    <h3 className="font-bold text-[#0B2545] dark:text-white mb-2">Language Barriers</h3>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">You want to target international markets or different regions, but translating videos and blogs manually is too expensive and slow.</p>
                  </div>
                </div>
              </div>

              {/* 5️⃣ OUR SOLUTION */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-8 border-l-4 border-[#0097B2] pl-4">Our Generative Architecture</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Brand Voice Fine-Tuning</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We don't use generic prompts. We train custom AI models using your past successful blogs and tone guidelines so it writes exactly like your best copywriter.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">API Chaining & Multi-Modal Pipelines</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We connect OpenAI (for text) to Midjourney (for images) to HeyGen (for video). A single blog post idea is instantly converted into 5 different media formats automatically.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="text-4xl font-black text-[#0097B2]/20 dark:text-[#0097B2]/40">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Programmatic SEO Deployment</h3>
                      <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80">We ingest data from spreadsheets to automatically generate thousands of highly-accurate, localized SEO landing pages that rank instantly on Google.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 bg-[#0097B2] text-white p-6 rounded-2xl shadow-lg border border-[#0097B2]">
                    <div className="text-4xl font-black text-white/20">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Automated Scheduling & Publishing</h3>
                      <p className="text-sm text-[#E6EEF2]">The AI doesn't just create the content; it schedules it directly into your CMS (WordPress/Webflow) and social media schedulers, requiring zero human data entry.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ➡️ RIGHT COLUMN: STICKY LEAD FORM (Dark Theme Box for Contrast) */}
            <div className="lg:col-span-5 xl:col-span-4 relative h-full">
              <div className="sticky top-28 space-y-6 pb-12">
                
                {/* Main Form Card */}
                <div id="leadForm" className="bg-[#0B2545] text-white p-8 rounded-[2rem] shadow-2xl border-t-[6px] border-[#0097B2] relative overflow-hidden isolate transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097B2]/10 rounded-bl-full -z-10"></div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Build Your Content Engine</h3>
                  <p className="text-sm text-[#E6EEF2]/80 mb-6">Tell us what you want to generate, and we'll automate the pipeline.</p>
                  
                  {!submitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="work@company.com" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Company Website</label>
                        <input type="text" name="business" value={formData.business} onChange={handleFormChange} required placeholder="www.yourdomain.com" 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="+91" 
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white placeholder-white/40 transition" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#E6EEF2]/60 uppercase tracking-widest mb-1">Content Goal</label>
                          <select name="contentVolume" value={formData.contentVolume} onChange={handleFormChange} required 
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0097B2] text-white transition cursor-pointer [&>option]:text-[#0B2545]">
                            <option value="" disabled>Focus Area</option>
                            <option value="SEO Blogs">SEO Blogs</option>
                            <option value="Short Videos">Short Videos</option>
                            <option value="Social Posts">Social Posts</option>
                            <option value="Omnichannel">Everything</option>
                          </select>
                        </div>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2 uppercase tracking-wider text-sm">
                        Request Strategy Call
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-[#0097B2]/20 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-check text-3xl text-[#0097B2]"></i></div>
                      <h4 className="text-lg font-bold text-white mb-2">Request Sent!</h4>
                      <p className="text-xs text-[#E6EEF2]">Redirecting to SM NextGen WhatsApp...</p>
                    </div>
                  )}

                  {/* Floating WhatsApp Button inside Form */}
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20scale%20my%20content%20with%20AI.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl shadow-md transition-all">
                      <i className="fab fa-whatsapp text-xl"></i> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white dark:bg-[#030e1c] border border-gray-200 dark:border-white/5 p-6 rounded-[2rem] shadow-sm flex items-center gap-4 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#0097B2]/10 rounded-full flex items-center justify-center text-[#0097B2] shrink-0"><i className="fas fa-shield-alt"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] dark:text-white text-sm">Plagiarism Free</h4>
                    <p className="text-xs text-gray-500 dark:text-[#E6EEF2]/70">100% original, Copyscape-passed content.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 FULL WIDTH SECTIONS BELOW */}

      {/* 6️⃣ WHAT YOU GET (Massive Exhaustive 12-Point Section) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">The Complete Production System</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From automated video editing to programmatic SEO, we deploy AI pipelines that completely replace traditional content agencies.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Custom GPT Brand Voices", desc: "Fine-tuning OpenAI models specifically on your brand guidelines so every output sounds human and authentic.", icon: "fas fa-fingerprint" },
              { title: "Podcast to Viral Reels", desc: "AI pipelines that take a 1-hour YouTube video and automatically extract, edit, and caption the top 10 viral clips.", icon: "fas fa-film" },
              { title: "Programmatic SEO Architecture", desc: "Generating hundreds of hyper-localized, data-backed landing pages to dominate long-tail search queries.", icon: "fas fa-sitemap" },
              { title: "AI Avatar Video Generation", desc: "Using HeyGen/Synthesia to create professional talking-head videos from text scripts, without a camera or studio.", icon: "fas fa-user-circle" },
              { title: "Hyper-Realistic Voiceovers", desc: "Deploying ElevenLabs APIs to generate studio-quality, emotionally intelligent voiceovers for your ads and videos.", icon: "fas fa-microphone-alt" },
              { title: "Automated Social Scheduling", desc: "Pipelines that draft LinkedIn/Twitter threads and push them directly to Buffer/Hootsuite APIs automatically.", icon: "fas fa-calendar-check" },
              { title: "Bulk Image & Graphic Gen", desc: "Integrating Midjourney/DALL-E workflows to generate hundreds of custom, copyright-free blog and ad images.", icon: "fas fa-image" },
              { title: "Multi-Language Translation", desc: "Instantly translating and lip-syncing your videos and blogs into 40+ languages to capture global markets.", icon: "fas fa-globe" },
              { title: "News & Trend Jacking Bots", desc: "AI scrapers that monitor industry news and automatically draft relevant, opinionated LinkedIn posts for founders.", icon: "fas fa-bolt" },
              { title: "E-Com Product Descriptions", desc: "Automated systems that ingest a spreadsheet of product specs and write 1,000 unique SEO product descriptions.", icon: "fas fa-shopping-bag" },
              { title: "Automated Newsletter Creation", desc: "AI that summarizes your weekly content and industry news into a high-value email newsletter format.", icon: "fas fa-envelope-open-text" },
              { title: "Content Pruning & Refresh", desc: "Bots that monitor your old SEO blogs and automatically update them with new statistics and current year tags.", icon: "fas fa-sync-alt" }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#11325B] p-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-colors shadow-sm group flex flex-col isolate transform-gpu">
                <div className="w-12 h-12 bg-[#0097B2]/10 text-[#0097B2] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-[#0097B2] group-hover:text-white transition-colors"><i className={feature.icon}></i></div>
                <h3 className="font-bold text-[#0B2545] dark:text-white mb-2 text-md leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14️⃣ MINI CTA SECTION */}
      <section className="py-12 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#0B2545] dark:bg-[#030e1c] p-10 md:p-12 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden isolate text-white border dark:border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/30 rounded-full blur-3xl z-0"></div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Stop waiting weeks for content.</h3>
              <p className="text-[#E6EEF2] text-lg mb-8 relative z-10 max-w-2xl mx-auto">Get a free consultation to see how our custom AI engines can produce a month's worth of content in less than 24 hours.</p>
              <a href="#leadForm" className="inline-block px-10 py-4 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl hover:scale-105 transition-all relative z-10 shadow-lg text-lg">
                Request Pipeline Audit
              </a>
            </div>
         </div>
      </section>

      {/* 7️⃣ PACKAGES / PRICING TIERS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">AI Production Packages</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">From basic SEO auto-blogging to full autonomous video generation. Compare details on our Pricing page.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Text Engine</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">Best for scaling SEO blogs, product descriptions, and LinkedIn posts.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom Brand Voice Tuning</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Bulk SEO Blog Generation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Automated Social Captions</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> CMS Auto-Publishing</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Compare Tiers</Link>
            </div>
            
            {/* Pro - Highlighted */}
            <div className="bg-[#0B2545] p-8 rounded-3xl border-2 border-[#0097B2] shadow-2xl flex flex-col transform md:-translate-y-4 relative isolate text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0097B2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Video Factory</h3>
              <p className="text-sm text-[#E6EEF2]/80 mb-6">Best for brands needing aggressive Reels, TikToks, and YouTube Shorts.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm font-medium text-[#E6EEF2]">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Podcast-to-Shorts Automation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> HeyGen AI Avatar Creation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Studio Quality Voiceovers</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Auto-Captions & B-Roll logic</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center rounded-xl bg-[#0097B2] text-white hover:bg-white hover:text-[#0B2545] font-bold transition-colors shadow-lg">Compare Tiers</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Omni Programmatic</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70 mb-6">For massive e-commerce and directories needing scale.</p>
              <ul className="space-y-3 flex-grow mb-8 text-sm text-[#0B2545] dark:text-gray-300">
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Programmatic SEO Pipelines</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> 10,000+ Pages/Month Velocity</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Multi-Language Translation</li>
                <li><i className="fas fa-check text-[#0097B2] mr-2"></i> Custom API Integrations</li>
              </ul>
              <a href="#leadForm" className="block w-full py-3 text-center rounded-xl border-2 border-[#0097B2] text-[#0097B2] font-bold hover:bg-[#0097B2] hover:text-white transition-colors">Request Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ RESULTS / GENUINE MINI CASE STUDIES */}
      <section className="py-24 bg-white dark:bg-[#0B2545] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Grounded Business Impact</h2>
            <p className="text-lg text-gray-600 dark:text-[#E6EEF2]/80">How scaling content through AI APIs drastically lowers Cost Per Lead and increases market share.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">B2B SaaS</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Programmatic SEO Growth</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Needed to rank for 500+ "Software A vs Alternative B" keywords, but writing them manually would take a year.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Built a Make.com + GPT-4 pipeline that ingested competitor data and auto-published 500 comparison pages in 2 weeks.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Organic traffic spiked by 400%, capturing high-intent users actively looking to switch software.</p>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">D2C Brand</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Crushing Creative Fatigue</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> Meta Ads were burning out quickly. The team couldn't afford the $10k/month agency fees for continuous video ad production.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Deployed HeyGen AI Avatars combined with script generation to produce 30 unique video ads every single week.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Slashed video production costs by 85% and lowered Ad CPA due to constant creative refreshing.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#030e1c] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/5 relative flex flex-col hover:-translate-y-1 transition-transform">
              <span className="absolute top-4 right-4 bg-[#0097B2]/10 text-[#0097B2] text-xs font-bold px-3 py-1 rounded-md">Media Company</span>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-4 mt-4">Global Content Expansion</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-3"><strong className="text-[#0B2545] dark:text-white">Challenge:</strong> A successful English YouTube channel wanted to enter Spanish and French markets but lacked dubbing budgets.</p>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80 mb-6 flex-grow"><strong className="text-[#0B2545] dark:text-white">Solution:</strong> Implemented an automated ElevenLabs pipeline that transcribed, translated, and accurately lip-synced videos into 5 languages.</p>
              <div className="p-4 bg-[#0097B2]/5 rounded-xl border border-[#0097B2]/20">
                <p className="text-sm font-bold text-[#0097B2]">Result: Opened 5 new monetization channels instantly, doubling total network viewership in 3 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PROCESS */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030e1c] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-4">Our Engine Build Timeline</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">01</div>
              <i className="fas fa-fingerprint text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Voice Calibration</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Training the AI on your brand guidelines, past blogs, and exact tone of voice.</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">02</div>
              <i className="fas fa-project-diagram text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">API Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Connecting Make.com, OpenAI, HeyGen, and your CMS (Webflow/WP).</p>
            </div>
            <div className="bg-white dark:bg-[#0B2545] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative shadow-sm">
              <div className="text-5xl font-black text-[#0B2545]/5 dark:text-white/5 absolute top-4 left-4">03</div>
              <i className="fas fa-vials text-3xl text-[#0097B2] mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold text-[#0B2545] dark:text-white mb-2">Quality QA Testing</h3>
              <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/70">Generating initial batches for human review to eliminate hallucinations.</p>
            </div>
            <div className="bg-[#0097B2] p-8 rounded-3xl shadow-xl shadow-[#0097B2]/20 relative transform md:-translate-y-4 text-white">
              <div className="text-5xl font-black text-white/20 absolute top-4 left-4">04</div>
              <i className="fas fa-rocket text-3xl text-white mb-4 relative z-10"></i>
              <h3 className="text-xl font-bold mb-2">Autonomous Scale</h3>
              <p className="text-sm text-white/90">Going live and publishing hundreds of high-quality assets automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B2545] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['B2B SaaS', 'Media Companies', 'News Portals', 'Performance Agencies', 'D2C E-commerce', 'Real Estate', 'Education', 'Affiliate Marketers'].map((ind, i) => (
              <span key={i} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold text-[#E6EEF2] shadow-sm text-sm hover:bg-[#0097B2] hover:border-[#0097B2] transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ RELATED SERVICES */}
      <section className="py-20 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[#0B2545] dark:text-white mb-10 text-center">Deploy Your Content</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/social-media-marketing" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-hashtag"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Social Media Growth</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Distribute AI videos natively.</p>
              </div>
            </Link>
            <Link href="/services/search-engine-optimization-seo" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-search-plus"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">SEO Growth</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Rank programmatic pages.</p>
              </div>
            </Link>
            <Link href="/services/ai-business-automation-systems" className="bg-[#F8FAFC] dark:bg-[#11325B] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-[#0097B2] dark:hover:border-[#0097B2] transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center text-xl shrink-0"><i className="fas fa-cogs"></i></div>
              <div>
                <h4 className="font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition-colors">Business Automation</h4>
                <p className="text-xs text-gray-600 dark:text-[#E6EEF2]/70 mt-1">Sync content workflows to CRM.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 12️⃣ FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B2545] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2545] dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#11325B] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-[#0097B2]/50 transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-[#0B2545] dark:text-white flex justify-between items-center focus:outline-none text-lg"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-[#0097B2] text-white rotate-180 shadow-md' : 'bg-[#F8FAFC] dark:bg-[#0B2545] text-[#0097B2] border border-gray-200 dark:border-white/10'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>
                <div className={`px-8 pb-8 text-gray-600 dark:text-[#E6EEF2]/80 text-base leading-relaxed ${activeFaq === index ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15️⃣ FINAL MASSIVE CTA (Always Dark Navy) */}
      <section className="relative py-32 bg-[#0B2545] overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Scale Your Content 10x.</h2>
          <p className="text-xl text-[#E6EEF2] mb-10 font-body">Stop waiting weeks for expensive freelancers. Let's build an AI production factory that never sleeps.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#leadForm" className="px-10 py-5 bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3">
              Build Content Engine <i className="fas fa-arrow-up"></i>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SM%20NextGen%2C%20I%20want%20to%20scale%20content%20with%20AI.`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#E6EEF2]/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}