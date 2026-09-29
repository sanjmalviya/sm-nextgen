// file: src/app/blogs/[slug]/page.js
import { client } from "../../../lib/sanity";
import { PortableText } from "next-sanity";
import Link from "next/link";
import BlogLeadForm from "../../components/BlogLeadForm";

export const revalidate = 60; // Auto-update cache every 60 seconds

const getBlockText = (block) => {
  if (!block || !block.children) return '';
  return block.children.map(c => c.text).join('');
};
const slugify = (text) => text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') || '';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title, subtitle, seo, "imageUrl": image.asset->url
  }`;
  const blog = await client.fetch(query, { slug: resolvedParams.slug });
  if (!blog) return { title: 'Not Found' };

  return {
    title: blog.seo?.metaTitle || `${blog.title} | SM NextGen Insights`,
    description: blog.seo?.metaDescription || blog.subtitle || 'Read the latest growth insights from SM NextGen.',
    keywords: blog.seo?.focusKeyword || 'Digital Marketing, AI Automation, Growth Strategy',
    openGraph: {
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.subtitle,
      images: [{ url: blog.imageUrl }],
    }
  };
}

// 🔥 AUTO-DYNAMIC SERVICES LOGIC
const getDynamicServices = (cat) => {
  const category = (cat || "").toLowerCase();
  if (category.includes('marketing') || category.includes('seo')) {
    return [
      { title: "SEO Mastery", desc: "Dominate Google Rankings", link: "/services/search-engine-optimization-seo" },
      { title: "Performance Ads", desc: "High ROI Campaigns", link: "/services/performance-advertising" }
    ];
  }
  if (category.includes('tech') || category.includes('web')) {
    return [
      { title: "Web Development", desc: "High-Converting Sites", link: "/services/website-development" },
      { title: "App Development", desc: "iOS & Android", link: "/services/mobile-app-development" }
    ];
  }
  if (category.includes('automation') || category.includes('ai')) {
    return [
      { title: "WhatsApp Bots", desc: "24/7 Sales Automation", link: "/services/whatsapp-automation-systems" },
      { title: "AI Workflows", desc: "Streamline Operations", link: "/services/ai-business-automation-systems" }
    ];
  }
  return [
    { title: "Startup Registration", desc: "Pvt Ltd & LLP Setup", link: "/services/business-registration-services" },
    { title: "GST & Compliance", desc: "Complete Tax Management", link: "/services/gst-services" }
  ];
};

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `*[_type == "blog" && slug.current == $slug][0] {
    ...,
    tableOfContents,
    faqs,
    seo,
    "imageUrl": image.asset->url,
    "authorImageUrl": authorImage.asset->url,
    relatedBlogs[]->{ _id, title, "slug": slug.current, "imageUrl": image.asset->url, category },
    content[]{ ..., _type == "image" => { ..., "imageUrl": asset->url } }
  }`;

  const blog = await client.fetch(query, { slug });

  if (!blog) return <div className="min-h-screen pt-40 text-center"><h1 className="text-3xl font-bold">Blog not found</h1></div>;

  const manualToc = blog.tableOfContents || [];
  const faqs = blog.faqs || [];

  // Agar user ne manually service nahi daali, toh category ke hisaab se auto-generate karo
  const displayServices = blog.relatedServices?.length > 0 ? blog.relatedServices : getDynamicServices(blog.category);

  // 🔥 PREMIUM TYPOGRAPHY & YOUTUBE EMBED
  const customComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.imageUrl) return null;
        return (
          <div className="my-10 rounded-[1rem] overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5">
            <img src={value.imageUrl} alt={value.alt || 'Blog Inline Image'} className="w-full h-auto object-contain max-h-[500px]" />
          </div>
        );
      },
      // YouTube Video Component
      youtube: ({ value }) => {
        if (!value || !value.url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = value.url.match(regExp);
        const id = (match && match[2].length === 11) ? match[2] : null;
        if (!id) return null;
        return (
          <div className="my-10 w-full aspect-video rounded-[1rem] overflow-hidden shadow-md border border-gray-200 dark:border-white/10">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} title="YouTube Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        );
      }
    },
    block: {
      h1: ({children}) => <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] dark:text-white mt-12 mb-6 leading-tight">{children}</h1>,
      h2: ({value, children}) => <h2 id={slugify(getBlockText(value))} className="scroll-mt-32 text-2xl md:text-[28px] font-bold text-[#0B2545] dark:text-white mt-12 mb-5 leading-snug">{children}</h2>,
      h3: ({value, children}) => <h3 id={slugify(getBlockText(value))} className="scroll-mt-32 text-xl md:text-[22px] font-semibold text-[#0B2545] dark:text-white mt-8 mb-4">{children}</h3>,
      // Premium Spacing & Font Settings
      normal: ({children}) => <p className="text-[18px] text-gray-700 dark:text-gray-300 mb-6 leading-[1.85] tracking-wide">{children}</p>,
      blockquote: ({children}) => <div className="relative my-8 pl-6 border-l-4 border-[#0097B2]"><p className="text-[20px] italic font-medium text-gray-800 dark:text-[#E6EEF2] leading-relaxed">{children}</p></div>,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc pl-6 my-6 space-y-2 text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] marker:text-[#0097B2]">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 my-6 space-y-2 text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] font-medium marker:text-[#0097B2]">{children}</ol>,
    },
    marks: {
      strong: ({children}) => <strong className="font-bold text-[#0B2545] dark:text-white">{children}</strong>,
      link: ({children, value}) => <a href={value.href} className="text-[#0097B2] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.seo?.metaTitle || blog.title,
    "image": [blog.imageUrl],
    "datePublished": blog._createdAt,
    "author": [{ "@type": "Person", "name": blog.authorName || "Sanjay Lohar" }]
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-[#F4F7F6] dark:bg-[#0B2545] pb-20 font-sans">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        /* Hide default accordion arrow for custom styling */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />
      
      <div className="fixed top-0 left-0 h-1 bg-[#0097B2] z-[100] w-full origin-left scale-x-0 animate-[scroll-progress_auto_linear_forwards]" style={{ animationTimeline: 'scroll()' }}></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 pt-32">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-bold uppercase tracking-wider text-[#0097B2]">
            <span className="bg-[#0097B2]/10 px-4 py-1.5 rounded-full">{blog.category || "Growth"}</span>
            <span className="flex items-center gap-2">
              <i className="far fa-calendar-alt"></i>{" "}
              {blog._createdAt || blog.publishedAt
                ? new Date(blog._createdAt || blog.publishedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
                : "Recently Published"}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B2545] dark:text-white leading-[1.2] mb-6 tracking-tight">{blog.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{blog.subtitle}</p>
        </div>

        {/* Hero Image */}
        {blog.imageUrl && (
          <div className="w-full max-w-5xl mx-auto h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl relative mb-16 border border-gray-200 dark:border-white/10">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 bg-white/90 dark:bg-[#0B2545]/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/20">
              <img src={blog.authorImageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(blog.authorName || 'Sanjay Lohar')}&background=0097B2&color=fff&bold=true`} className="w-10 h-10 rounded-full border border-gray-200" alt="Author" />
              <div>
                <p className="font-bold text-sm text-[#0B2545] dark:text-white leading-tight">{blog.authorName || "Sanjay Lohar"}</p>
                <p className="text-[11px] text-gray-500 font-medium">{blog.authorRole || "Founder, SM NextGen"}</p>
              </div>
            </div>
          </div>
        )}

        {/* WIDER 12-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 relative items-start">
          
          {/* Main Content (Wider Reading Area) */}
          <div className="lg:col-span-8 flex flex-col order-2 lg:order-1">
            
            {/* MOBILE TOC (Appears ABOVE content on mobile only) */}
            {manualToc.length > 0 && (
              <div className="block lg:hidden bg-white dark:bg-[#162032] p-6 rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-white/5 mb-10">
                <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-list-ul text-[#0097B2]"></i> In this article
                </h3>
                <div className="space-y-2">
                  {manualToc.map((item, i) => (
                    <a key={i} href={`#${slugify(item.headingText)}`} className="block text-[15px] font-medium text-gray-600 dark:text-gray-300 hover:text-[#0097B2] transition">
                      • {item.headingText}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Clean White Reading Canvas */}
            <div className="bg-white dark:bg-[#162032] p-6 sm:p-10 md:p-14 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 mb-12">
              <PortableText value={blog.content} components={customComponents} />
            </div>

            {/* 🔥 NEW FAQ ACCORDION STYLE */}
            {faqs.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] dark:text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-white dark:bg-[#162032] border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm transition-all open:shadow-md cursor-pointer overflow-hidden">
                      <summary className="flex items-center justify-between p-6 font-bold text-[#0B2545] dark:text-white text-[17px] outline-none">
                        <span className="flex items-start gap-3">
                          <span className="text-[#0097B2]">{i + 1}.</span> {faq.question}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-open:rotate-180 transition-transform">
                          <i className="fas fa-chevron-down text-sm"></i>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-1 text-gray-600 dark:text-gray-300 ml-6 leading-relaxed text-[16px]">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 w-full relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-8">
              
              {/* DESKTOP TOC */}
              {manualToc.length > 0 && (
                <div className="hidden lg:block bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0097B2] to-cyan-400"></div>
                  <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]"><i className="fas fa-list-ul"></i></div>
                    In this article
                  </h3>
                  <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {manualToc.map((item, i) => (
                      <a key={i} href={`#${slugify(item.headingText)}`} className="block py-2 px-3 rounded-lg transition-all text-[15px] font-medium border-l-2 border-transparent text-gray-600 dark:text-gray-300 hover:border-[#0097B2] hover:text-[#0097B2] hover:bg-gray-50 dark:hover:bg-white/5">
                        {item.headingText}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Minimal Recommended Services */}
              <div className="bg-white dark:bg-[#162032] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5">
                <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-6">How We Can Help</h3>
                <ul className="space-y-2">
                  {displayServices.map((service, i) => (
                    <li key={i}>
                      <Link href={service.link || "#"} className="flex items-start gap-4 group p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition">
                        <div className="w-2 h-2 rounded-full bg-[#0097B2] mt-2 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <span className="block text-[15px] font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition leading-tight mb-1">{service.title}</span>
                          <span className="text-xs text-gray-500 font-medium">{service.desc}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lead Form */}
              <BlogLeadForm
                heading={blog.leadFormHeading}
                subtext={blog.leadFormText}
                blogTitle={blog.title}
              />

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}