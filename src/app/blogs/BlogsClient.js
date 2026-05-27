// file: src/app/blogs/BlogsClient.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Phone, MessageSquare, Briefcase, Bot, Scale, Megaphone, Laptop } from "lucide-react";

export default function BlogsClient({ initialBlogs = [] }) {
  const [allBlogs, setAllBlogs] = useState(initialBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs);
  const [isLoading, setIsLoading] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const [leadName, setLeadName] = useState("");
  const [leadService, setLeadService] = useState("Growth Strategy");

  useEffect(() => {
    const filtered = allBlogs.filter(blog => {
      let catMatch = true;
      if (activeCategory !== 'all') {
        const blogCat = (blog.category || 'growth').toLowerCase();
        if (activeCategory === 'marketing' && !(blogCat.includes('marketing') || blogCat.includes('seo') || blogCat.includes('ads'))) catMatch = false;
        if (activeCategory === 'tech' && !(blogCat.includes('tech') || blogCat.includes('web') || blogCat.includes('app'))) catMatch = false;
        if (activeCategory === 'automation' && !(blogCat.includes('automation') || blogCat.includes('ai'))) catMatch = false;
        if (activeCategory === 'finance' && !(blogCat.includes('finance') || blogCat.includes('legal') || blogCat.includes('tax'))) catMatch = false;
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

  const extractPlainText = (content) => {
    if (!content) return "Read the full case study and strategy inside...";
    if (typeof content === 'string') {
      const plainText = content.replace(/<[^>]+>/g, '');
      return plainText.length > 120 ? plainText.substring(0, 120) + '...' : plainText;
    }
    if (Array.isArray(content)) {
      const plainText = content
        .filter(block => block._type === 'block' && block.children)
        .map(block => block.children.map(child => child.text).join(''))
        .join(' ');
      return plainText.length > 120 ? plainText.substring(0, 120) + '...' : plainText || "Read the full case study and strategy inside...";
    }
    return "Read the full case study and strategy inside...";
  };

  const getCategoryColor = (category) => {
    const catName = (category || "").toLowerCase();
    if(catName.includes("marketing") || catName.includes("seo")) return "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-500/20";
    if(catName.includes("tech") || catName.includes("web")) return "bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-500/20";
    if(catName.includes("automation") || catName.includes("ai")) return "bg-[#0097B2]/10 text-[#0097B2] border-[#0097B2]/20";
    if(catName.includes("finance") || catName.includes("legal")) return "bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-500/20";
    return "bg-gray-100 text-gray-600 border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10";
  };

  const handleQuickLead = (e) => {
    e.preventDefault();
    const phone = "917073538077";
    const message = `Hi, I was reading your insights. Name: ${leadName} | Interested in: ${leadService}. Please call me back.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen transition-colors duration-300 bg-[#F4F7F6] dark:bg-[#0B2545] font-sans">
      
      <section className="relative pt-40 pb-20 px-4 bg-white dark:bg-[#071A30] border-b border-gray-200 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0097B2]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#0097B2] font-bold text-xs uppercase tracking-widest bg-[#0097B2]/10 px-4 py-1.5 rounded-full border border-[#0097B2]/20 mb-6 inline-flex items-center gap-2">
            <Bot className="w-4 h-4" /> The Growth Lab
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6 tracking-tight">
            Insights that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-blue-600">Revenue.</span>
          </h1>
          {/* 🔥 FIXED: New Hero Description text */}
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Actionable insights on marketing, automation, technology, and business growth for ambitious Indian founders.
          </p>

          <div className="mt-10 max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-[#0097B2] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search insights, strategies, or guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#162032] border border-gray-200 dark:border-white/10 rounded-full py-4 pl-12 pr-4 text-[15px] text-[#0B2545] dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2]/50 focus:border-[#0097B2] transition-all"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button onClick={() => setActiveCategory('all')} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'all' ? 'bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20' : 'bg-white dark:bg-[#162032] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:text-[#0097B2]'}`}>All Insights</button>
            <button onClick={() => setActiveCategory('marketing')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'marketing' ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20' : 'bg-white dark:bg-[#162032] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-blue-600 hover:text-blue-600'}`}><Megaphone className="w-4 h-4"/> Marketing</button>
            <button onClick={() => setActiveCategory('tech')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'tech' ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20' : 'bg-white dark:bg-[#162032] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-purple-600 hover:text-purple-600'}`}><Laptop className="w-4 h-4"/> Tech Dev</button>
            <button onClick={() => setActiveCategory('automation')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'automation' ? 'bg-[#0097B2] text-white border-[#0097B2] shadow-md shadow-[#0097B2]/20' : 'bg-white dark:bg-[#162032] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0097B2] hover:text-[#0097B2]'}`}><Bot className="w-4 h-4"/> AI Automation</button>
            <button onClick={() => setActiveCategory('finance')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'finance' ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/20' : 'bg-white dark:bg-[#162032] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-orange-600 hover:text-orange-600'}`}><Scale className="w-4 h-4"/> Finance & Legal</button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#0097B2] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bg-white dark:bg-[#162032] p-16 rounded-[2rem] text-center border border-gray-100 dark:border-white/5 max-w-2xl mx-auto">
              <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">No Insights Found</h3>
              <p className="text-gray-500">We couldn't find any articles matching your search or category filter. Try something else!</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('all');}} className="mt-6 text-[#0097B2] font-bold hover:underline">Clear all filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => {
                
                // 🔥 FIXED: Safe Date Check logic
                const validDate = post._createdAt || post.publishedAt 
                  ? new Date(post._createdAt || post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
                  : "Recently Published";

                // 🔥 FIXED: Premium UI Avatar fallback
                const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.authorName || 'Sanjay Lohar')}&background=0097B2&color=fff&bold=true`;
                const finalAuthorImage = post.authorImageUrl || post.authorImage?.asset?.url || fallbackAvatar;

                return (
                  <motion.article 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={post._id || index} 
                    className="bg-white dark:bg-[#162032] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-300 group flex flex-col"
                  >
                    <Link href={`/blogs/${post.slug}`} className="block relative h-56 overflow-hidden">
                      <img 
                        src={post.imageUrl || post.image_url || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80'} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                        alt={post.title} 
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${getCategoryColor(post.category)}`}>
                          {post.category || "Growth Strategy"}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs text-gray-400 font-medium mb-3">
                        {validDate}
                      </p>
                      <Link href={`/blogs/${post.slug}`}>
                        <h2 className="text-xl font-bold text-[#0B2545] dark:text-white mb-3 group-hover:text-[#0097B2] transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-[15px] text-gray-500 dark:text-[#E6EEF2]/70 mb-6 leading-relaxed line-clamp-3 flex-grow">
                        {extractPlainText(post.content)}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={finalAuthorImage} className="w-8 h-8 rounded-full object-cover border-2 border-gray-50 dark:border-white/10" alt="Author" />
                          <span className="text-xs font-bold text-[#0B2545] dark:text-white">{post.authorName || "Sanjay Lohar"}</span>
                        </div>
                        <Link href={`/blogs/${post.slug}`} className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0097B2] group-hover:bg-[#0097B2] group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-[#071A30] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="bg-gradient-to-br from-[#0B2545] to-[#11325B] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <h3 className="text-3xl font-extrabold mb-4 font-heading relative z-10">Get a Quick Callback <Phone className="inline w-6 h-6 text-[#0097B2]" /></h3>
              <p className="text-white/80 mb-8 relative z-10 text-[17px]">Ready to implement these strategies? Drop your details and our growth team will WhatsApp you within minutes.</p>
              
              <form onSubmit={handleQuickLead} className="relative z-10 space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  required 
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition"
                />
                
                <select 
                  value={leadService}
                  onChange={(e) => setLeadService(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition cursor-pointer appearance-none"
                >
                  <option value="Growth Strategy" className="text-gray-900">Growth Strategy</option>
                  <option value="Marketing" className="text-gray-900">Digital Marketing</option>
                  <option value="Tech Development" className="text-gray-900">Tech Development</option>
                  <option value="Automation" className="text-gray-900">AI Automation</option>
                  <option value="Legal/Finance" className="text-gray-900">Legal & Finance</option>
                </select>

                <button type="submit" className="w-full bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 shadow-lg">
                  Request Free Call <MessageSquare className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="p-4 lg:p-10">
              <h3 className="text-2xl font-bold text-[#0B2545] dark:text-white mb-2">Most Requested Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-[17px]">What ambitious founders are focusing on right now.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/services/search-engine-optimization-seo" className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-[#0097B2]/10 dark:hover:bg-[#0097B2]/20 border border-transparent hover:border-[#0097B2]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition"><Search className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">SEO Mastery</span>
                    <span className="text-xs text-gray-500">Organic Growth</span>
                  </div>
                </Link>
                
                <Link href="/services/performance-advertising" className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-[#0097B2]/10 dark:hover:bg-[#0097B2]/20 border border-transparent hover:border-[#0097B2]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center group-hover:scale-110 transition"><Megaphone className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">Meta Ads</span>
                    <span className="text-xs text-gray-500">High ROAS</span>
                  </div>
                </Link>

                <Link href="/services/whatsapp-automation-systems" className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-[#0097B2]/10 dark:hover:bg-[#0097B2]/20 border border-transparent hover:border-[#0097B2]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center group-hover:scale-110 transition"><Phone className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">WhatsApp Bots</span>
                    <span className="text-xs text-gray-500">24/7 Automation</span>
                  </div>
                </Link>

                <Link href="/services/business-registration-services" className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-[#0097B2]/10 dark:hover:bg-[#0097B2]/20 border border-transparent hover:border-[#0097B2]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition"><Briefcase className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2]">Startup Setup</span>
                    <span className="text-xs text-gray-500">Pvt Ltd / LLP</span>
                  </div>
                </Link>
              </div>

              <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-[#0097B2] font-bold hover:underline">
                Explore all 32 services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}