// file: CaseStudiesClient.js
"use client";
import { useState, useEffect } from "react";

export default function CaseStudiesClient() {
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
  
  // NOTE: Mouse Glow logic removed from here as it is now in layout.js

  return (
    // <main> class updated to inherit background colors from layout.js
    <main className="relative w-full z-10 overflow-x-hidden transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 bg-[#0B2545] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0097B2]/20 border border-[#0097B2] text-[#0097B2] font-bold text-xs uppercase tracking-widest mb-4">Our Methodology</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Real Business. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">Realistic Results.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            We don't promise overnight magic. We focus on building stable, data-driven systems that generate consistent quality leads and predictable growth for your business.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 border-t border-white/10 pt-8">
            <div><div className="text-xl md:text-3xl font-bold text-white">Targeted</div><div className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">Quality Leads</div></div>
            <div><div className="text-xl md:text-3xl font-bold text-white">Optimized</div><div className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">Ad Campaigns</div></div>
            <div><div className="text-xl md:text-3xl font-bold text-white">100%</div><div className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">Transparent Tracking</div></div>
            <div><div className="text-xl md:text-3xl font-bold text-white">Dedicated</div><div className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">Growth Focus</div></div>
          </div>
        </div>
      </section>

      {/* FILTER & GRID SECTION */}
      <section className="py-20 px-4 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'all' ? 'bg-[#0097B2] text-white shadow-lg scale-105 border-[#0097B2]' : 'bg-[#F8FAFC] dark:bg-[#162032] text-gray-500 border-gray-200 dark:border-white/10'}`}>
              All Industries
            </button>
            <button 
              onClick={() => setFilter('ads')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'ads' ? 'bg-[#0097B2] text-white shadow-lg scale-105 border-[#0097B2]' : 'bg-[#F8FAFC] dark:bg-[#162032] text-gray-500 border-gray-200 dark:border-white/10'}`}>
              E-Commerce
            </button>
            <button 
              onClick={() => setFilter('lead')} 
              className={`px-6 py-2 rounded-full font-bold border transition transform hover:scale-105 ${filter === 'lead' ? 'bg-[#0097B2] text-white shadow-lg scale-105 border-[#0097B2]' : 'bg-[#F8FAFC] dark:bg-[#162032] text-gray-500 border-gray-200 dark:border-white/10'}`}>
              Service & Local
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CARD 1: Mewar Homes (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Real Estate" />
                  <div className="absolute top-4 left-4 bg-[#0B2545] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Real Estate</div>
                  <div className="absolute bottom-4 right-4 bg-[#0097B2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Quality Leads</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Mewar Homes</h3>
                      <p className="text-xs text-gray-500">Local Property Dealer</p>
                    </div>
                    <i className="fas fa-building text-2xl text-gray-300 dark:text-gray-600"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> Shared leads from portals were low quality and expensive.</p>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> Direct Facebook Ads targeting local investors + WhatsApp follow-up.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                    <div className="text-center"><div className="text-sm md:text-base font-bold text-[#0097B2]">Targeted</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Local Reach</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">15+</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Site Visits</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0097B2]">Optimized</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Cost/Lead</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">View Strategy</a>
                </div>
              </div>
            )}

            {/* CARD 2: PureRoots Ayurveda (Ads) */}
            {(filter === 'all' || filter === 'ads') && (
              <div className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="E-Commerce" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">E-Commerce</div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Improved ROAS</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">PureRoots Ayurveda</h3>
                      <p className="text-xs text-gray-500">Herbal Hair Oil</p>
                    </div>
                    <i className="fas fa-shopping-bag text-2xl text-gray-300 dark:text-gray-600"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> Ad spend wasn't converting into steady sales.</p>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> Switched to Video Ads (UGC) and fixed website checkout flow.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                    <div className="text-center"><div className="text-sm md:text-base font-bold text-[#0097B2]">2.5x</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">ROAS</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">Consistent</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Sales Flow</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0097B2]">Reduced</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Cost/Sale</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">Scale Your Store</a>
                </div>
              </div>
            )}

            {/* CARD 3: Excel Coaching (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Education" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Education</div>
                  <div className="absolute bottom-4 right-4 bg-[#0097B2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Increased Admissions</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Excel Coaching</h3>
                      <p className="text-xs text-gray-500">Competitive Exams</p>
                    </div>
                    <i className="fas fa-graduation-cap text-2xl text-gray-300 dark:text-gray-600"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> Traditional offline ads were expensive with no tracking.</p>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> Targeted Instagram ads for students in 10km radius.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                    <div className="text-center"><div className="text-sm md:text-base font-bold text-[#0097B2]">Lowered</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Cost/Lead</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">40+</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Inquiries</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0097B2]">Quality</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Conversions</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">Get More Students</a>
                </div>
              </div>
            )}

            {/* CARD 4: Dr. Mehta's Clinic (Lead) */}
            {(filter === 'all' || filter === 'lead') && (
              <div className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Healthcare" />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Healthcare</div>
                  <div className="absolute bottom-4 right-4 bg-[#0097B2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Local SEO</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Dr. Mehta's Clinic</h3>
                      <p className="text-xs text-gray-500">Dental Care</p>
                    </div>
                    <i className="fas fa-tooth text-2xl text-gray-300 dark:text-gray-600"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> New clinic struggling to appear on local map searches.</p>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> GMB Optimization & automated review generation.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                    <div className="text-center"><div className="text-sm md:text-base font-bold text-[#0097B2]">Page 1</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Map Rank</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">Steady</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">New Patients</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0097B2]">Increased</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Calls/Mo</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">Rank Your Clinic</a>
                </div>
              </div>
            )}

            {/* CARD 5: Tandoori Nights (Ads) */}
            {(filter === 'all' || filter === 'ads') && (
              <div className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt="F&B" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">F&B</div>
                  <div className="absolute bottom-4 right-4 bg-[#0097B2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Increased Footfall</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">Tandoori Nights</h3>
                      <p className="text-xs text-gray-500">Local Restaurant</p>
                    </div>
                    <i className="fas fa-utensils text-2xl text-gray-300 dark:text-gray-600"></i>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> Low weekday footfall and high portal competition.</p>
                    <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> Local Instagram Ads for special dinner offers.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                    <div className="text-center"><div className="text-sm md:text-base font-bold text-[#0097B2]">Local</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Reach</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">Boosted</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">Walk-ins</div></div>
                    <div className="text-center border-l border-gray-200 dark:border-white/10"><div className="text-sm md:text-base font-bold text-[#0097B2]">Profitable</div><div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">ROI</div></div>
                  </div>
                  <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">Grow Restaurant</a>
                </div>
              </div>
            )}

            {/* DYNAMIC SANITY CARDS */}
            {dynamicStudies.map((study, index) => {
              const catFilter = study.category || 'all';
              if (filter !== 'all' && filter !== catFilter) return null;
              
              return (
                <div key={index} className="bg-[#F8FAFC] dark:bg-[#162032] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group border border-gray-200 dark:border-white/5 animate-fade-in-up">
                    <div className="h-56 overflow-hidden relative">
                        <img src={study.imageUrl || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" alt={study.clientName} />
                        <div className={`absolute top-4 left-4 ${study.cardTagColor || 'bg-[#0B2545]'} text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider`}>{study.cardTag || 'Business'}</div>
                        <div className={`absolute bottom-4 right-4 ${study.resultBadgeColor || 'bg-[#0097B2]'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>{study.resultBadge || 'Success'}</div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">{study.clientName}</h3>
                                <p className="text-xs text-gray-500">{study.businessType}</p>
                            </div>
                            <i className={`${study.iconClass || 'fas fa-chart-line'} text-2xl text-gray-300 dark:text-gray-600`}></i>
                        </div>
                        <div className="space-y-3 mb-6">
                            <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-red-500">Problem:</strong> {study.problemText || ''}</p>
                            <p className="text-sm text-gray-600 dark:text-[#E6EEF2]/80"><strong className="text-green-500">Solution:</strong> {study.solutionText || ''}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-white/10 pt-4 mb-4">
                            <div className="text-center">
                                <div className="text-sm md:text-base font-bold text-[#0097B2]">{study.metric1Value || '-'}</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">{study.metric1Label || 'Metric'}</div>
                            </div>
                            <div className="text-center border-l border-gray-200 dark:border-white/10">
                                <div className="text-sm md:text-base font-bold text-[#0B2545] dark:text-white">{study.metric2Value || '-'}</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">{study.metric2Label || 'Metric'}</div>
                            </div>
                            <div className="text-center border-l border-gray-200 dark:border-white/10">
                                <div className="text-sm md:text-base font-bold text-[#0097B2]">{study.metric3Value || '-'}</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase mt-1">{study.metric3Label || 'Metric'}</div>
                            </div>
                        </div>
                        <a href="/contact" className="block w-full py-3 bg-white dark:bg-[#071A30] border border-gray-200 dark:border-white/10 text-center text-sm font-bold text-[#0B2545] dark:text-white rounded-xl hover:bg-[#0097B2] hover:text-white hover:border-[#0097B2] transition">{study.buttonText || 'View Strategy'}</a>
                    </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#0097B2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B2545]/10 rounded-full blur-[80px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">Build Your Growth Engine</h2>
          <p className="text-white/90 text-lg mb-10 font-light max-w-2xl mx-auto">Stop guessing with your marketing. Let's implement proven systems to generate quality leads.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-[#0B2545] font-extrabold rounded-xl shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
              Book Free Audit <i className="fas fa-arrow-right"></i>
            </a>
            <a href="https://wa.me/917073538077?text=Hi%20SM%NextGen,%20I%20saw%20your%20case%20studies.%20I%20want%20to%20discuss%20growth." target="_blank" rel="noreferrer" className="px-8 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}