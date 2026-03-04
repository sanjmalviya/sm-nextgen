"use client";
import { useState, useEffect } from "react";

export default function CaseStudies() {
  // Category Filter ke liye State
  const [filter, setFilter] = useState("all");
  
  // Sanity se aane wale dynamic cards ke liye State
  const [dynamicStudies, setDynamicStudies] = useState([]);

  useEffect(() => {
    // Sanity Fetch Logic
    const PROJECT_ID = "y31b2jo0";
    const DATASET = "production";
    const QUERY = encodeURIComponent('*[_type == "caseStudy"]{clientName, businessType, category, "imageUrl": mainImage.asset->url, cardTag, cardTagColor, resultBadge, resultBadgeColor, iconClass, problemText, solutionText, metric1Value, metric1Label, metric2Value, metric2Label, metric3Value, metric3Label, buttonText}');
    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
      .then(res => res.json())
      .then(({ result }) => {
        if (result && result.length > 0) {
          setDynamicStudies(result);
        }
      })
      .catch(err => console.error("Sanity Fetch Error:", err));
  }, []);

  return (
    <main className="bg-[#F8FAFC] dark:bg-gray-900 transition-colors duration-300 font-body text-gray-800 dark:text-gray-200">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/20 border border-brand text-brand font-bold text-xs uppercase tracking-widest mb-4">Proven Track Record</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Real Business. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Real Results.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            We don't promise magic. We promise progress. Explore how we are helping local businesses generate consistent leads and sales every month.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 border-t border-white/10 pt-8">
            <div><div className="text-3xl font-bold text-white">₹85L+</div><div className="text-xs text-gray-500 uppercase">Revenue Facilitated</div></div>
            <div><div className="text-3xl font-bold text-white">1,200+</div><div className="text-xs text-gray-500 uppercase">Qualified Leads</div></div>
            <div><div className="text-3xl font-bold text-white">4.2x</div><div className="text-xs text-gray-500 uppercase">Avg. ROAS</div></div>
            <div><div className="text-3xl font-bold text-white">12+</div><div className="text-xs text-gray-500 uppercase">Happy Clients</div></div>
          </div>
        </div>
      </section>

      {/* FILTER & GRID SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'all' ? 'bg-brand text-white shadow-lg scale-105 border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-100 dark:border-gray-700'}`}>
              All Industries
            </button>
            <button 
              onClick={() => setFilter('ads')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'ads' ? 'bg-brand text-white shadow-lg scale-105 border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-100 dark:border-gray-700'}`}>
              E-Commerce
            </button>
            <button 
              onClick={() => setFilter('lead')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'lead' ? 'bg-brand text-white shadow-lg scale-105 border-brand' : 'bg-white dark:bg-navy text-gray-500 border-gray-100 dark:border-gray-700'}`}>
              Service & Local
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CARD 1: Mewar Homes (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Real Estate" />
                  <div className="absolute top-4 left-4 bg-navy text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Real Estate</div>
                  <div className="absolute bottom-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">2 Plots Sold</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">Mewar Homes</h3>
                      <p className="text-xs text-gray-400">Local Property Dealer</p>
                    </div>
                    <i className="fas fa-building text-2xl text-gray-300"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> Shared leads from portals were low quality and expensive.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> Direct Facebook Ads targeting local investors + WhatsApp follow-up.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                    <div className="text-center"><div className="text-lg font-bold text-brand">₹32L</div><div className="text-[10px] text-gray-400 uppercase">Sales Value</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-navy dark:text-white">85</div><div className="text-[10px] text-gray-400 uppercase">Site Visits</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-brand">₹150</div><div className="text-[10px] text-gray-400 uppercase">Cost/Lead</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">View Strategy</a>
                </div>
              </div>
            )}

            {/* CARD 2: PureRoots Ayurveda (Ads) */}
            {(filter === 'all' || filter === 'ads') && (
              <div className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="E-Commerce" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">E-Commerce</div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">4x ROAS</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">PureRoots Ayurveda</h3>
                      <p className="text-xs text-gray-400">Herbal Hair Oil</p>
                    </div>
                    <i className="fas fa-shopping-bag text-2xl text-purple-200"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> Spending ₹10k on ads but getting only 2-3 sales.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> Switched to Video Ads (UGC) and fixed website checkout flow.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                    <div className="text-center"><div className="text-lg font-bold text-brand">4x</div><div className="text-[10px] text-gray-400 uppercase">ROAS</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-navy dark:text-white">₹2.1L</div><div className="text-[10px] text-gray-400 uppercase">Monthly Rev</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-brand">₹180</div><div className="text-[10px] text-gray-400 uppercase">Cost/Sale</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">Scale Your Store</a>
                </div>
              </div>
            )}

            {/* CARD 3: Excel Coaching (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Education" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Education</div>
                  <div className="absolute bottom-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">25 Admissions</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">Excel Coaching</h3>
                      <p className="text-xs text-gray-400">Competitive Exams</p>
                    </div>
                    <i className="fas fa-graduation-cap text-2xl text-orange-200"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> Newspaper ads were expensive with no tracking.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> Targeted Instagram ads for students in 10km radius.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                    <div className="text-center"><div className="text-lg font-bold text-brand">₹45</div><div className="text-[10px] text-gray-400 uppercase">Cost/Lead</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-navy dark:text-white">180</div><div className="text-[10px] text-gray-400 uppercase">Inquiries</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-brand">25</div><div className="text-[10px] text-gray-400 uppercase">Joined</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">Get More Students</a>
                </div>
              </div>
            )}

            {/* CARD 4: Dr. Mehta's Clinic (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Healthcare" />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Healthcare</div>
                  <div className="absolute bottom-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Local SEO</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">Dr. Mehta's Clinic</h3>
                      <p className="text-xs text-gray-400">Dental Care</p>
                    </div>
                    <i className="fas fa-tooth text-2xl text-teal-200"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> New clinic. Patients couldn't find them on Google Maps.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> GMB Optimization & Review Management System.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                    <div className="text-center"><div className="text-lg font-bold text-brand">Top 3</div><div className="text-[10px] text-gray-400 uppercase">Map Rank</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-navy dark:text-white">35+</div><div className="text-[10px] text-gray-400 uppercase">New Patients</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-brand">45</div><div className="text-[10px] text-gray-400 uppercase">Calls/Mo</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">Rank Your Clinic</a>
                </div>
              </div>
            )}

            {/* CARD 5: Tandoori Nights (Ads) */}
            {(filter === 'all' || filter === 'ads') && (
              <div className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="F&B" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">F&B</div>
                  <div className="absolute bottom-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Weekend Full</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">Tandoori Nights</h3>
                      <p className="text-xs text-gray-400">Local Restaurant</p>
                    </div>
                    <i className="fas fa-utensils text-2xl text-red-200"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> Low weekday footfall. High competition on Zomato.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> Local Instagram Ads for dinner offers (Buy 1 Get 1).</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                    <div className="text-center"><div className="text-lg font-bold text-brand">5k+</div><div className="text-[10px] text-gray-400 uppercase">Reach</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-navy dark:text-white">200+</div><div className="text-[10px] text-gray-400 uppercase">Walk-ins</div></div>
                    <div className="text-center border-l border-gray-100 dark:border-gray-700"><div className="text-lg font-bold text-brand">3.5x</div><div className="text-[10px] text-gray-400 uppercase">ROI</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">Grow Restaurant</a>
                </div>
              </div>
            )}

            {/* DYNAMIC SANITY CARDS */}
            {dynamicStudies.map((study, index) => {
              const catFilter = study.category || 'all';
              // Check if current filter matches this card
              if (filter !== 'all' && filter !== catFilter) return null;
              
              return (
                <div key={index} className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group border border-gray-100 dark:border-gray-800 animate-fade-in-up">
                    <div className="h-56 overflow-hidden relative">
                        <img src={study.imageUrl || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt={study.clientName} />
                        <div className={`absolute top-4 left-4 ${study.cardTagColor || 'bg-navy'} text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider`}>{study.cardTag || 'Business'}</div>
                        <div className={`absolute bottom-4 right-4 ${study.resultBadgeColor || 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>{study.resultBadge || 'Success'}</div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-navy dark:text-white">{study.clientName}</h3>
                                <p className="text-xs text-gray-400">{study.businessType}</p>
                            </div>
                            <i className={`${study.iconClass || 'fas fa-chart-line'} text-2xl text-gray-300 dark:text-gray-600`}></i>
                        </div>
                        <div className="space-y-3 mb-6">
                            <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-red-500">Problem:</strong> {study.problemText || ''}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-green-500">Solution:</strong> {study.solutionText || ''}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
                            <div className="text-center">
                                <div className="text-lg font-bold text-brand">{study.metric1Value || '-'}</div>
                                <div className="text-[10px] text-gray-400 uppercase">{study.metric1Label || 'Metric'}</div>
                            </div>
                            <div className="text-center border-l border-gray-100 dark:border-gray-700">
                                <div className="text-lg font-bold text-navy dark:text-white">{study.metric2Value || '-'}</div>
                                <div className="text-[10px] text-gray-400 uppercase">{study.metric2Label || 'Metric'}</div>
                            </div>
                            <div className="text-center border-l border-gray-100 dark:border-gray-700">
                                <div className="text-lg font-bold text-brand">{study.metric3Value || '-'}</div>
                                <div className="text-[10px] text-gray-400 uppercase">{study.metric3Label || 'Metric'}</div>
                            </div>
                        </div>
                        <a href="/contact" className="block w-full py-2 bg-gray-50 dark:bg-white/5 text-center text-sm font-bold text-navy dark:text-white rounded hover:bg-brand hover:text-white transition">{study.buttonText || 'View Strategy'}</a>
                    </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Want results like these?</h2>
          <p className="text-white/90 text-lg mb-10">We don't just "try". We execute proven systems. Book your free strategy audit and let's find your goldmine.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-brand font-bold rounded-full shadow-2xl hover:bg-navy hover:text-white transition transform hover:-translate-y-1">Book Free Audit</a>
            <a href="https://wa.me/918824325438?text=Hi%20Sanjay,%20I%20saw%20your%20case%20studies.%20I%20want%20similar%20growth." target="_blank" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}