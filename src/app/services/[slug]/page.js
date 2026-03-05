"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug;
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // Fetching from your existing MongoDB API
    fetch('/api/services')
      .then(res => res.json())
      .then(result => {
        const servicesArray = result.data || result || result.services; 
        if (servicesArray && Array.isArray(servicesArray)) {
          // Find the specific service matching the URL slug
          const foundService = servicesArray.find(s => s.slug === slug);
          setService(foundService);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch service details:", err);
        setLoading(false);
      });
  }, [slug]);

  // LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-navy flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          <p className="text-navy dark:text-white font-bold animate-pulse">Loading amazing things...</p>
        </div>
      </div>
    );
  }

  // NOT FOUND STATE (Agar galat URL dal diya)
  if (!service) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-navy px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Service Not Found</h2>
        <p className="text-gray-500 mb-8">The service you are looking for does not exist or has been removed.</p>
        <Link href="/services" className="px-8 py-3 bg-brand text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
          View All Services
        </Link>
      </div>
    );
  }

  // MAIN DYNAMIC TEMPLATE
  return (
    <main className="bg-[#F8FAFC] dark:bg-navy transition-colors duration-300 font-body pb-20">
      
      {/* 1. DYNAMIC HERO SECTION */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-navy flex items-center min-h-[60vh]">
        {/* Dynamic Background Image from Admin Panel */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.imageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              {service.category || 'Premium Service'} {service.heroBadge ? `• ${service.heroBadge}` : ''}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl">
            {service.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light mb-10">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="px-8 py-4 bg-brand hover:bg-white hover:text-brand text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(0,151,178,0.4)] transform hover:-translate-y-1">
              Discuss Project <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATIC CONTENT SECTION (Makes it look professional even with limited DB fields) */}
      <section className="py-20 bg-white dark:bg-[#162032] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">Why choose SM NextGen for {service.title}?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We don't just execute tasks; we engineer growth. Our approach to <strong>{service.title}</strong> is deeply rooted in data science, advanced automation, and ROI-driven strategies tailored specifically for the Indian market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-navy dark:text-gray-300 font-medium">
                  <i className="fas fa-check-circle text-brand text-xl"></i> Dedicated Account Manager
                </li>
                <li className="flex items-center gap-3 text-navy dark:text-gray-300 font-medium">
                  <i className="fas fa-check-circle text-brand text-xl"></i> Transparent Performance Reporting
                </li>
                <li className="flex items-center gap-3 text-navy dark:text-gray-300 font-medium">
                  <i className="fas fa-check-circle text-brand text-xl"></i> Scalable & Future-Proof Strategies
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Strategy" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS STEPS */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
              <div className="w-14 h-14 bg-brand/10 text-brand flex items-center justify-center rounded-xl text-2xl mx-auto mb-6 font-bold">1</div>
              <h3 className="font-bold text-navy dark:text-white text-xl mb-3">Audit & Strategy</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Deep dive into your current metrics and building a customized roadmap.</p>
            </div>
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 relative transform md:-translate-y-4">
              <div className="w-14 h-14 bg-brand text-white flex items-center justify-center rounded-xl text-2xl mx-auto mb-6 font-bold shadow-lg">2</div>
              <h3 className="font-bold text-navy dark:text-white text-xl mb-3">Execution</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Deploying campaigns, automation, or financial systems with precision.</p>
            </div>
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
              <div className="w-14 h-14 bg-brand/10 text-brand flex items-center justify-center rounded-xl text-2xl mx-auto mb-6 font-bold">3</div>
              <h3 className="font-bold text-navy dark:text-white text-xl mb-3">Scale & Optimize</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Continuous monitoring, A/B testing, and scaling what works best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to scale with {service.title}?</h2>
          <p className="mb-10 text-white/90 text-lg">Let's discuss how this service can specifically impact your bottom line.</p>
          <a href="/contact" className="px-10 py-4 bg-white text-brand font-bold rounded-full shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-1 inline-block">
            Book Free Strategy Call
          </a>
        </div>
      </section>

    </main>
  );
}