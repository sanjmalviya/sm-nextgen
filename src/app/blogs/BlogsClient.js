// file: app/blogs/BlogsClient.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Supabase import kiya

export default function BlogsClient() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const [leadName, setLeadName] = useState("");
  const [leadService, setLeadService] = useState("Growth Strategy");

  // Fetch Blogs from SUPABASE on Page Load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Supabase se 'blogs' table ka data la rahe hain
        const { data, error } = await supabase
          .from('blogs')
          .select('title, slug, category, content, image_url, created_at')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        if (data) {
          setAllBlogs(data);
          setFilteredBlogs(data);
        }
      } catch (error) {
        console.error("Supabase Fetch Error:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter Logic
  useEffect(() => {
    const filtered = allBlogs.filter(blog => {
      let catMatch = true;
      if (activeCategory !== 'all') {
        const blogCat = (blog.category || '').toLowerCase();
        if (activeCategory === 'marketing' && !blogCat.includes('marketing')) catMatch = false;
        if (activeCategory === 'automation' && !(blogCat.includes('automation') || blogCat.includes('tech'))) catMatch = false;
        if (activeCategory === 'finance' && !(blogCat.includes('finance') || blogCat.includes('legal'))) catMatch = false;
      }

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

  // Supabase string content se plain text extract karne ka helper
  const extractPlainText = (htmlContent) => {
    if (!htmlContent) return "Read the full case study and strategy inside...";
    // HTML tags hatane ke liye simple regex
    const plainText = htmlContent.replace(/<[^>]+>/g, '');
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  };

  const getCategoryColor = (category) => {
    const catName = (category || "").toLowerCase();
    if(catName.includes("marketing")) return "bg-blue-600";
    if(catName.includes("automation") || catName.includes("tech")) return "bg-green-500";
    if(catName.includes("finance") || catName.includes("legal")) return "bg-orange-500";
    return "bg-[#0097B2]";
  };

  const handleQuickLead = (e) => {
    e.preventDefault();
    const phone = "917073538077";
    const message = `Hi, I was reading your insights. Name: ${leadName} | Interested in: ${leadService}. Please call me back.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-16 px-4 bg-[#0B2545] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-[#0097B2] font-bold text-xs uppercase tracking-widest bg-[#0097B2]/10 px-3 py-1 rounded-full border border-[#0097B2]/20 mb-4 inline-block">The Growth Lab 🧪</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Insights that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-400">Revenue.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Engineering-grade strategies for Marketing, Automation, and Finance. Written for ambitious founders in India.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'all' ? 'bg-[#0097B2] text-white border-[#0097B2]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#11325B] text-gray-500 hover:border-[#0097B2]'}`}>All</button>
            <button onClick={() => setActiveCategory('marketing')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'marketing' ? 'bg-[#0097B2] text-white border-[#0097B2]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#11325B] text-gray-500 hover:border-[#0097B2]'}`}>Marketing</button>
            <button onClick={() => setActiveCategory('automation')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'automation' ? 'bg-[#0097B2] text-white border-[#0097B2]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#11325B] text-gray-500 hover:border-[#0097B2]'}`}>AI Automation</button>
            <button onClick={() => setActiveCategory('finance')} className={`px-5 py-2 rounded-full font-bold shadow-sm transition border ${activeCategory === 'finance' ? 'bg-[#0097B2] text-white border-[#0097B2]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#11325B] text-gray-500 hover:border-[#0097B2]'}`}>Finance & Legal</button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* LEFT COLUMN: Search & Blogs */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-[#162032] p-2 rounded-xl shadow border border-gray-100 dark:border-white/5 flex items-center mb-6">
                <i className="fas fa-search text-gray-400 ml-3"></i>
                <input 
                  type="text" 
                  placeholder="Search insights, strategies, or guides..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 p-2 text-sm text-[#0B2545] dark:text-white outline-none"
                />
              </div>

              <div className="space-y-10">
                {isLoading ? (
                  <div className="flex justify-center py-10">
                    <i className="fas fa-spinner fa-spin text-4xl text-[#0097B2]"></i>
                  </div>
                ) : filteredBlogs.length === 0 ? (
                  <div className="bg-white dark:bg-[#162032] p-10 rounded-2xl text-center border border-gray-100 dark:border-white/5">
                    <i className="fas fa-search text-4xl text-gray-300 dark:text-gray-600 mb-4"></i>
                    <h3 className="text-xl font-bold text-[#0B2545] dark:text-white">No Blogs Found</h3>
                    <p className="text-gray-500 mt-2">Try a different search term or category.</p>
                  </div>
                ) : (
                  filteredBlogs.map((post, index) => (
                    <article key={index} className="bg-white dark:bg-[#162032] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-2xl transition group relative">
                      <Link href={`/blogs/${post.slug}`} className="absolute inset-0 z-10"></Link>
                      <div className="h-64 overflow-hidden relative">
                        <img src={post.image_url || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80'} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={post.title} />
                        <div className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded z-20`}>
                          {post.category || "Growth"}
                        </div>
                      </div>
                      <div className="p-8">
                        <h2 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-4 group-hover:text-[#0097B2] transition">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 dark:text-[#E6EEF2]/70 mb-6 leading-relaxed">
                          {extractPlainText(post.content)}
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6 text-sm">
                          <span className="text-gray-400 font-bold">Read Article</span>
                          <span className="text-[#0097B2] font-bold underline">Read Guide <i className="fas fa-arrow-right ml-1"></i></span>
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
                
                <div className="bg-[#0097B2] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
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
                      className="w-full px-4 py-3 rounded-lg text-[#0B2545] mb-3 focus:outline-none focus:ring-2 focus:ring-[#0B2545] outline-none"
                    />
                    
                    <select 
                      value={leadService}
                      onChange={(e) => setLeadService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg text-[#0B2545] mb-3 focus:outline-none focus:ring-2 focus:ring-[#0B2545] cursor-pointer outline-none"
                    >
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Marketing">Digital Marketing</option>
                      <option value="Automation">AI Automation</option>
                      <option value="Legal/Finance">Legal/Finance</option>
                    </select>

                    <button type="submit" className="w-full bg-[#0B2545] hover:bg-black text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                      Request Call <i className="fab fa-whatsapp"></i>
                    </button>
                  </form>
                </div>

                <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 mt-8">
                  <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-2">Trending Services</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/services/whatsapp-automation" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition"><i className="fab fa-whatsapp"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">WhatsApp Bots</span>
                          <span className="text-xs text-gray-500">Automate Sales</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/performance-advertising" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition"><i className="fab fa-meta"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">Meta Ads</span>
                          <span className="text-xs text-gray-500">High ROAS</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/business-registration-services" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition"><i className="fas fa-file-contract"></i></div>
                        <div>
                          <span className="block text-sm font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">Startup Reg.</span>
                          <span className="text-xs text-gray-500">Pvt Ltd / LLP</span>
                        </div>
                      </Link>
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