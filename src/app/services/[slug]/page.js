// file: src/app/services/[slug]/page.js
import Link from "next/link";
import LeadForm from "./LeadForm";

// 🚀 ISR Magic for Zero Loading Time
export const revalidate = 60;

// Default Static Data as fallback since Supabase is removed
const getFallbackService = (slug) => {
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: title,
    category: "Premium Service",
    short_description: `Enterprise-grade ${title} solutions to scale your business using data and AI.`,
    full_description: `<p>Our engineering team is currently updating the detailed architecture for this service.</p><ul><li>Data-driven insights</li><li>Rapid Execution</li><li>Predictable ROI</li></ul>`,
    image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  };
};

// 🌟 WORLD CLASS SEO MAGIC
export async function generateMetadata({ params }) {
  // Await params in newer Next.js versions
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = getFallbackService(slug);
  
  return {
    title: `${service.title} | AI-Powered Agency | SM NextGen`,
    description: service.short_description,
    keywords: `${service.title}, marketing agency, SM NextGen, AI growth, business automation`,
  };
}

export default async function ServiceDetail({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Use local fallback instead of Supabase
  const service = getFallbackService(slug);

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200 selection:bg-brand selection:text-white">
      
      {/* Rich Text Editor Styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .dynamic-content ul { padding-left: 0; }
        .dynamic-content li { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; font-size: 1rem; color: #4b5563; }
        .dark .dynamic-content li { color: #d1d5db; }
        .dynamic-content li::before { content: '✓'; color: #0097B2; font-weight: 900; font-size: 1.1rem; margin-top: 1px; }
        .dynamic-content h2 { font-size: 1.8rem; font-weight: 800; color: #0B1120; margin-bottom: 1.2rem; margin-top: 2.5rem; letter-spacing: -0.02em; }
        .dark .dynamic-content h2 { color: #ffffff; }
        .dynamic-content p { margin-bottom: 1.2rem; line-height: 1.8; font-size: 1.05rem; }
      `}} />

      {/* 1. HERO SECTION (ULTRA PREMIUM) */}
      <section className="relative pt-40 pb-32 bg-navy overflow-hidden">
        {/* Dynamic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={service.image_url} 
               alt={service.title} 
               className="w-full h-full object-cover opacity-20 filter grayscale blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0097B2]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/30 text-[#0097B2] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse"></span>
            {service.category} • Enterprise Grade
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 leading-tight tracking-tight max-w-4xl capitalize">
            {service.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
            {service.short_description}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm font-bold text-white">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
              <i className="fas fa-microchip text-[#0097B2] text-lg"></i> AI-Powered Insights
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
              <i className="fas fa-chart-line text-green-400 text-lg"></i> Predictable ROI
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & STICKY FORM */}
      <section className="py-24 bg-white dark:bg-navy relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
              
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-16">
              
              <div className="prose-lg max-w-none">
                <h2 className="text-3xl font-heading font-extrabold text-navy dark:text-white mb-8 border-b-2 border-[#0097B2] inline-block pb-2">
                  System Overview & Deliverables
                </h2>
                <div className="dynamic-content" dangerouslySetInnerHTML={{ __html: service.full_description }} />
              </div>

              {/* The "SM NextGen" Edge */}
              <div className="bg-[#F8FAFC] dark:bg-[#162032] p-10 rounded-3xl border border-gray-100 dark:border-white/5">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">The SM NextGen Advantage</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="w-12 h-12 bg-[#0097B2]/10 text-[#0097B2] rounded-xl flex items-center justify-center text-xl mb-4"><i className="fas fa-database"></i></div>
                    <h4 className="font-bold text-navy dark:text-white mb-2">Data Over Guesswork</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We eliminate emotional marketing. Every decision is backed by hard data and AI trend analysis.</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center text-xl mb-4"><i className="fas fa-tachometer-alt"></i></div>
                    <h4 className="font-bold text-navy dark:text-white mb-2">Rapid Execution</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Our agile team deploys systems in days, not months. Speed to market is your ultimate weapon.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side (Sticky Lead Form) */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <LeadForm serviceTitle={service.title} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR EXECUTION PROCESS */}
      <section className="py-24 bg-[#F1F5F9] dark:bg-[#0B1120] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy dark:text-white mb-6">Our Engineering <span className="text-[#0097B2]">Process</span></h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">How we take your business from current state to market dominance.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-6xl font-black text-gray-100 dark:text-white/5 absolute top-4 right-4 -z-10">01</div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Deep Audit</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Analyzing your current bottlenecks, tech stack, and competitor gaps.</p>
            </div>
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-6xl font-black text-gray-100 dark:text-white/5 absolute top-4 right-4 -z-10">02</div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">AI Strategy</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Building a custom blueprint utilizing modern tools to outpace the market.</p>
            </div>
            <div className="bg-white dark:bg-[#162032] p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-6xl font-black text-gray-100 dark:text-white/5 absolute top-4 right-4 -z-10">03</div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Deployment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Flawless execution of campaigns, code, and automation systems.</p>
            </div>
            <div className="bg-[#0097B2] text-white p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform shadow-xl shadow-[#0097B2]/20">
              <div className="text-6xl font-black text-white/10 absolute top-4 right-4 -z-10">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Scale & Optimize</h3>
              <p className="text-sm text-white/80">Continuous monitoring and scaling the systems that generate maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MASSIVE CTA & INTERLINKING */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[#0097B2]/20 backdrop-blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-[#0097B2]/30 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">Ready to build your empire?</h2>
          <p className="text-xl text-white/80 mb-12 font-light">Stop wasting time on outdated tactics. Partner with SM NextGen and let's engineer your growth.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-white text-navy font-extrabold rounded-2xl shadow-2xl hover:scale-105 transition-transform text-lg flex items-center gap-3">
              Contact Our Team <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="https://wa.me/917073538077" target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-colors text-lg flex items-center gap-3">
              <i className="fab fa-whatsapp text-xl"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}