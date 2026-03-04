"use client";
import { useState, useEffect } from "react";

export default function Blogs() {
  // States for Blogs Data and Filtering
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // States for Quick Lead Form
  const [leadName, setLeadName] = useState("");
  const [leadService, setLeadService] = useState("Growth Strategy");

  // Fetch Blogs from Sanity CMS on Page Load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const PROJECT_ID = "y31b2jo0";
        const DATASET = "production";
        const QUERY = encodeURIComponent('*[_type == "post"]{title, "slug": slug.current, "category": categories[0]->title, body, "imageUrl": mainImage.asset->url} | order(_createdAt desc)');
        const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

        const response = await fetch(URL);
        const { result } = await response.json();
        
        if (result) {
          setAllBlogs(result);
          setFilteredBlogs(result);
        }
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Automatically filter blogs when search query or category changes
  useEffect(() => {
    const filtered = allBlogs.filter(blog => {
      // 1. Check Category Match
      let catMatch = true;
      if (activeCategory !== 'all') {
        const blogCat = (blog.category || '').toLowerCase();
        if (activeCategory === 'marketing' && !blogCat.includes('marketing')) catMatch = false;
        if (activeCategory === 'automation' && !(blogCat.includes('automation') || blogCat.includes('tech'))) catMatch = false;
        if (activeCategory === 'finance' && !(blogCat.includes('finance') || blogCat.includes('legal'))) catMatch = false;
      }

      // 2. Check Search Match
      let searchMatch = true;
      if (searchQuery) {
        const term = searchQuery.toLowerCase();
        const titleMatch = (blog.title || '').toLowerCase().includes(term);
        const catTitleMatch = (blog.category || '').toLowerCase().includes(term);
        searchMatch = titleMatch || catTitleMatch;
      }

      return catMatch && searchMatch;
    });

    setFilteredBlogs(filtered);
  }, [searchQuery, activeCategory, allBlogs]);

  // Helper Function: Sanity Block Content ko Plain Text mein badalne ke liye
  const extractPlainText = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return "Read the full case study and strategy inside...";
    const text = blocks
      .filter(block => block._type === 'block')
      .map(block => block.children ? block.children.map(child => child.text).join('') : '')
      .join(' ');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  // Helper Function: Category ke hisaab se badge ka color
  const getCategoryColor = (category) => {
    const catName = (category || "").toLowerCase();
    if(catName.includes("marketing")) return "bg-blue-600";
    if(catName.includes("automation") || catName.includes("tech")) return "bg-green-500";
    if(catName.includes("finance") || catName.includes("legal")) return "bg-orange-500";
    return "bg-brand"; // Default
  };

  // Handle WhatsApp Lead Form Submit
  const handleQuickLead = (e) => {
    e.preventDefault();
    const phone = "918824325438"; // Sanjay's Number
    const message = `Hi, I was reading your insights. Name: ${leadName} | Interested in: ${leadService}. Please call me back.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="bg-[#F8FAFC] dark:bg-navy font-body text-gray-800 dark:text-gray-200">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-16 px-4 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-brand font-bold text-xs uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full border border-brand/20 mb-4 inline-block">The Growth Lab 🧪</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Insights that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Revenue.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Engineering-grade strategies for Marketing, Automation, and Finance. Written for ambitious founders in India.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'all' ? 'bg-brand text-white border-brand' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-surface text-gray-500 hover:border-brand'}`}>All</button>
            <button onClick={() => setActiveCategory('marketing')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'marketing' ? 'bg-brand text-white border-brand' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-surface text-gray-500 hover:border-brand'}`}>Marketing</button>
            <button onClick={() => setActiveCategory('automation')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'automation' ? 'bg-brand text-white border-brand' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-surface text-gray-500 hover:border-brand'}`}>AI Automation</button>
            <button onClick={() => setActiveCategory('finance')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'finance' ? 'bg-brand text-white border-brand' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-surface text-gray-500 hover:border-brand'}`}>Finance & Legal</button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* LEFT COLUMN: Search & Blogs */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Search Bar */}
              <div className="bg-white dark:bg-surface p-2 rounded-xl shadow border border-gray-100 dark:border-white/5 flex items-center mb-6">
                <i className="fas fa-search text-gray-400 ml-3"></i>
                <input 
                  type="text" 
                  placeholder="Search insights, strategies, or guides..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 p-2 text-sm text-navy dark:text-white outline-none"
                />
              </div>

              {/* Blogs Container */}
              <div className="space-y-10">
                {isLoading ? (
                  <div className="flex justify-center py-10">
                    <i className="fas fa-spinner fa-spin text-4xl text-brand"></i>
                  </div>
                ) : filteredBlogs.length === 0 ? (
                  <div className="bg-white dark:bg-surface p-10 rounded-2xl text-center border border-gray-100 dark:border-white/5">
                    <i className="fas fa-search text-4xl text-gray-300 dark:text-gray-600 mb-4"></i>
                    <h3 className="text-xl font-bold text-navy dark:text-white">No Blogs Found</h3>
                    <p className="text-gray-500 mt-2">Try a different search term or category.</p>
                  </div>
                ) : (
                  filteredBlogs.map((post, index) => (
                    <article key={index} className="bg-white dark:bg-surface rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-2xl transition group relative">
                      <a href={`/blogs/${post.slug}`} className="absolute inset-0 z-10"></a>
                      <div className="h-64 overflow-hidden relative">
                        <img src={post.imageUrl || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80'} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={post.title} />
                        <div className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded z-20`}>
                          {post.category || "Growth"}
                        </div>
                      </div>
                      <div className="p-8">
                        <h2 className="text-2xl font-bold text-navy dark:text-white mb-4 group-hover:text-brand transition">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                          {extractPlainText(post.body)}
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 text-sm">
                          <span className="text-gray-400 font-bold">Read Article</span>
                          <span className="text-brand font-bold underline">Read Guide <i className="fas fa-arrow-right ml-1"></i></span>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar Form & Trending */}
            <div className="lg:col-span-1 space-y-8 relative">
              <div className="sticky top-24">
                
                {/* Quick Callback Form */}
                <div className="bg-brand p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Get a Quick Callback 📞</h3>
                  <p className="text-sm text-white/80 mb-6">Want to grow? Drop your details and we'll WhatsApp you.</p>
                  
                  <form onSubmit={handleQuickLead}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      required 
                      className="w-full px-4 py-3 rounded-lg text-navy mb-3 focus:outline-none focus:ring-2 focus:ring-accent outline-none"
                    />
                    
                    <select 
                      value={leadService}
                      onChange={(e) => setLeadService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg text-navy mb-3 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer outline-none"
                    >
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Marketing">Digital Marketing</option>
                      <option value="Automation">AI Automation</option>
                      <option value="Legal/Finance">Legal/Finance</option>
                    </select>

                    <button type="submit" className="w-full bg-navy hover:bg-black text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                      Request Call <i className="fab fa-whatsapp"></i>
                    </button>
                  </form>
                </div>

                {/* Trending Services */}
                <div className="bg-white dark:bg-surface p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 mt-8">
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-2">Trending Services</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="/service-whatsapp-automation" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition"><i className="fab fa-whatsapp"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-navy dark:text-white group-hover:text-brand">WhatsApp Bots</span>
                          <span className="text-xs text-gray-500">Automate Sales</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/service-ads" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition"><i className="fab fa-meta"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-navy dark:text-white group-hover:text-brand">Meta Ads</span>
                          <span className="text-xs text-gray-500">High ROAS</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/service-startup-registration" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition"><i className="fas fa-file-contract"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-navy dark:text-white group-hover:text-brand">Startup Reg.</span>
                          <span className="text-xs text-gray-500">Pvt Ltd / LLP</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}