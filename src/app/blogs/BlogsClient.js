"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import HeroSkyBackdrop from "../components/HeroSkyBackdrop";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Bot,
  Laptop,
  Compass,
  DollarSign,
  Sparkles,
  BookOpen,
} from "lucide-react";

const FALLBACK_BLOGS = [
  {
    _id: "fb-1",
    title: "Why Marketing Activity Does Not Always Translate into Business Growth",
    slug: "why-marketing-activity-does-not-always-translate-into-business-growth",
    category: "Business Growth",
    excerpt: "More traffic doesn't automatically mean more customers. Learn why disconnected marketing campaigns fail to move the revenue needle.",
    createdAt: "2025-01-15",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/brand-strategy-positioning.png",
  },
  {
    _id: "fb-2",
    title: "How to Identify the Biggest Bottleneck in Your Sales Funnel",
    slug: "how-to-identify-the-biggest-bottleneck-in-your-sales-funnel",
    category: "Sales & Revenue",
    excerpt: "Understand where prospective buyers drop off and how to engineer higher conversion velocity across your customer journey.",
    createdAt: "2025-01-20",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/sales-funnel-conversion.png",
  },
  {
    _id: "fb-3",
    title: "CAC vs LTV: What Business Owners Should Understand",
    slug: "cac-vs-ltv-what-business-owners-should-understand",
    category: "Marketing Strategy",
    excerpt: "Why scaling ad spend without knowing your customer acquisition economics leads to cash-flow traps, and how to model sustainable unit economics.",
    createdAt: "2025-02-01",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/financial-consulting-advisory.png",
  },
  {
    _id: "fb-4",
    title: "What a Business Website Needs Beyond Good Design",
    slug: "what-a-business-website-needs-beyond-good-design",
    category: "Technology & Systems",
    excerpt: "A website is not an online brochure—it is an interactive conversion system. Discover the essential technical architecture for high-converting platforms.",
    createdAt: "2025-02-10",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/website-development.png",
  },
  {
    _id: "fb-5",
    title: "Local SEO Foundations for Service Businesses",
    slug: "local-seo-foundations-for-service-businesses",
    category: "SEO & Search",
    excerpt: "How to optimize your Google Business Profile, directories and localized citations to capture high-intent local customer searches.",
    createdAt: "2025-02-18",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/search-engine-optimization-seo.png",
  },
  {
    _id: "fb-6",
    title: "Where AI Automation Can Actually Help a Small Business",
    slug: "where-ai-automation-can-actually-help-a-small-business",
    category: "AI & Automation",
    excerpt: "Cut through the AI hype: practical, repeatable workflows like WhatsApp lead routing and CRM sync that save real team hours.",
    createdAt: "2025-02-25",
    authorName: "SM NextGen Growth Team",
    imageUrl: "/images/services/ai-business-automation-systems.png",
  },
];

const CATEGORIES = [
  "All Articles",
  "Business Growth",
  "Marketing Strategy",
  "Sales & Revenue",
  "SEO & Search",
  "AI & Automation",
  "Technology & Systems",
  "Founder Lessons",
];

export default function BlogsClient({ initialBlogs = [] }) {
  const allBlogs = initialBlogs.length > 0 ? initialBlogs : FALLBACK_BLOGS;
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      let catMatch = true;
      if (activeCategory !== "All Articles") {
        catMatch = (blog.category || "").toLowerCase() === activeCategory.toLowerCase();
      }

      let searchMatch = true;
      if (searchQuery) {
        const term = searchQuery.toLowerCase();
        const titleMatch = (blog.title || "").toLowerCase().includes(term);
        const catMatch2 = (blog.category || "").toLowerCase().includes(term);
        searchMatch = titleMatch || catMatch2;
      }

      return catMatch && searchMatch;
    });
  }, [searchQuery, activeCategory, allBlogs]);

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      {/* 1. HERO SECTION WITH AIRY SKY BACKDROP (CENTER ALIGNED) */}
      <HeroSkyBackdrop className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Frosted Positioning Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 text-xs font-semibold text-[#0B2545] dark:text-white shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="text-[#0097B2] font-subheading font-bold uppercase tracking-wider text-[11px]">
              GROWTH LAB
            </span>
            <span className="text-slate-300 dark:text-white/25 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 text-[11px] hidden sm:inline">
              Research · Tactical Playbooks · Case Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-6">
            Ideas for Building{" "}
            <span className="text-[#0097B2]">
              Smarter Businesses.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Practical perspectives on the decisions, systems and strategies that shape sustainable business growth.
          </p>

          {/* Centered Search Bar */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search perspectives &amp; topics (e.g. CAC, Funnels, Systems, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/95 dark:bg-[#071A30]/90 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 text-sm text-[#0B2545] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0097B2] shadow-lg transition"
            />
          </div>

          {/* Premium Knowledge Streams Grid Showcase */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 dark:bg-[#071A30]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                  Knowledge Architecture
                </span>
                <p className="text-sm font-heading font-bold text-[#0B2545] dark:text-white">
                  Core Research Topics &amp; Frameworks
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0097B2] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40">
                Editorial Series
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-left">
              {[
                { t: "Marketing Activity vs Revenue Growth", c: "Business Growth" },
                { t: "Identifying Funnel Bottlenecks & Leaks", c: "Sales & Revenue" },
                { t: "CAC vs LTV: Real Business Economics", c: "Marketing Strategy" },
                { t: "Essential Architecture for High-Converting Web", c: "Technology & Systems" },
                { t: "Local SEO Foundations for Service Brands", c: "SEO & Search" },
                { t: "Practical AI & Automation Without Hype", c: "AI & Automation" },
              ].map((art, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-100 dark:border-white/5 hover:border-[#0097B2] transition group cursor-pointer"
                >
                  <span className="text-[10px] font-mono font-bold text-[#0097B2] block mb-1">
                    {art.c}
                  </span>
                  <p className="text-xs font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition leading-tight">
                    {art.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroSkyBackdrop>

      {/* 2. CATEGORY NAVIGATION */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#071A30]/50 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isCurrent = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  isCurrent
                    ? "bg-[#0097B2] text-white shadow-sm"
                    : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 dark:bg-[#071A30] rounded-3xl border border-slate-200 dark:border-white/10 max-w-lg mx-auto">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                No Articles Found
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Try searching for another keyword or view all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Articles");
                }}
                className="text-xs font-bold text-[#0097B2] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <article
                  key={post._id}
                  className="rounded-3xl bg-slate-50 dark:bg-[#071A30] border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#0097B2]/50 transition group"
                >
                  <div>
                    {post.imageUrl && (
                      <div className="aspect-video w-full bg-slate-900 overflow-hidden relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#0097B2] uppercase tracking-wider">
                          {post.category || "Business Growth"}
                        </span>
                      </div>
                      <Link href={`/blogs/${post.slug}`}>
                        <h2 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt || (typeof post.content === "string" ? post.content.substring(0, 120) : "Read practical growth analysis and implementation guidance.")}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between mt-4">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {post.authorName || "SM NextGen Growth Team"}
                    </span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-xs font-bold text-[#0097B2] flex items-center gap-1 group-hover:translate-x-1 transition"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. CONTEXTUAL SERVICES CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-[#030D1A] dark:to-[#071A30] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Ready to Build Better Growth Systems?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Turn insights into execution. Explore how SM NextGen connects strategy, marketing, technology and automation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Start a Growth Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 dark:border-white/15 hover:border-[#0097B2] transition"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
