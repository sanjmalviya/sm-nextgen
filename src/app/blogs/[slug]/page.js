// file: src/app/blogs/[slug]/page.js
import { client } from "../../../lib/sanity";
import { PortableText } from "next-sanity";
import Link from "next/link";

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

  const defaultServices = [
    { title: "WhatsApp Automation", desc: "Automate your sales 24/7", link: "/services/whatsapp-automation", icon: "fab fa-whatsapp" },
    { title: "Local SEO Mastery", desc: "Rank #1 on Google Maps", link: "/services/seo", icon: "fas fa-search-location" },
    { title: "Meta Ads Performance", desc: "High ROI Ad Campaigns", link: "/services/performance-advertising", icon: "fab fa-meta" }
  ];
  
  const displayServices = blog.relatedServices?.length > 0 ? blog.relatedServices : defaultServices;

  const customComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.imageUrl) return null;
        return (
          <div className="my-12 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5">
            <img src={value.imageUrl} alt={value.alt || 'Blog Inline Image'} className="w-full h-auto object-contain max-h-[600px] hover:scale-[1.02] transition-transform duration-500" />
          </div>
        );
      }
    },
    block: {
      h1: ({children}) => <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2545] dark:text-white mt-12 mb-6 leading-tight">{children}</h1>,
      h2: ({value, children}) => <h2 id={slugify(getBlockText(value))} className="scroll-mt-32 text-2xl md:text-3xl font-bold text-[#0B2545] dark:text-white mt-14 mb-6 flex items-center gap-3"><span className="w-1.5 h-6 bg-[#0097B2] rounded-full"></span>{children}</h2>,
      h3: ({value, children}) => <h3 id={slugify(getBlockText(value))} className="scroll-mt-32 text-xl md:text-2xl font-semibold text-[#0B2545] dark:text-white mt-8 mb-4">{children}</h3>,
      normal: ({children}) => <p className="text-[17px] text-gray-600 dark:text-gray-300 mb-6 leading-relaxed tracking-wide">{children}</p>,
      blockquote: ({children}) => <div className="relative my-10 px-8 py-6 bg-gradient-to-r from-[#0097B2]/10 to-transparent border-l-4 border-[#0097B2] rounded-r-2xl"><p className="text-xl italic font-medium text-[#0B2545] dark:text-[#E6EEF2]">{children}</p></div>,
    },
    list: {
      bullet: ({children}) => <ul className="list-none pl-0 my-8 space-y-4">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 text-[17px] text-gray-600 dark:text-gray-300 mb-8 space-y-3 font-medium marker:text-[#0097B2]">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="flex items-start gap-3 text-[17px] text-gray-600 dark:text-gray-300"><i className="fas fa-check-circle text-[#0097B2] mt-1.5 text-base min-w-[16px]"></i><span>{children}</span></li>,
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

      <style dangerouslySetInnerHTML={{__html: `html { scroll-behavior: smooth; }`}} />
      <div className="fixed top-0 left-0 h-1 bg-[#0097B2] z-[100] w-full origin-left scale-x-0 animate-[scroll-progress_auto_linear_forwards]" style={{ animationTimeline: 'scroll()' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-bold uppercase tracking-wider text-[#0097B2]">
            <span className="bg-[#0097B2]/10 px-4 py-1.5 rounded-full">{blog.category || "Growth"}</span>
            <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> {new Date(blog._createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            {blog.readTime && <span className="flex items-center gap-2"><i className="far fa-clock"></i> {blog.readTime} Min Read</span>}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2545] dark:text-white leading-tight mb-6 tracking-tight">{blog.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{blog.subtitle}</p>
        </div>

        {blog.imageUrl && (
          <div className="w-full max-w-5xl mx-auto h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl relative mb-16 border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent z-10"></div>
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover relative z-0" />
            <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4 text-white">
              <img src={blog.authorImageUrl || "https://ui-avatars.com/api/?name=Sanjay"} className="w-14 h-14 rounded-full border-2 border-white/50 shadow-lg object-cover" />
              <div>
                <p className="font-bold text-lg leading-tight">{blog.authorName || "Sanjay Lohar"}</p>
                <p className="text-sm opacity-80">{blog.authorRole || "Founder, SM NextGen"}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto relative">
          
          <div className="lg:col-span-8">
            {blog.whatYouWillLearn?.length > 0 && (
              <div className="bg-white dark:bg-[#162032] p-8 md:p-10 rounded-[2rem] border-t-4 border-[#0097B2] mb-12 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2545] dark:text-white mb-6 flex items-center gap-3">
                  <i className="fas fa-bolt text-yellow-500"></i> What You'll Learn:
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 font-medium">
                  {blog.whatYouWillLearn.map((point, i) => (
                    <li key={i} className="flex gap-3"><i className="fas fa-check text-[#0097B2] mt-1 text-lg"></i><span>{point}</span></li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white dark:bg-[#162032] p-8 md:p-14 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 mb-12">
              <PortableText value={blog.content} components={customComponents} />
            </div>

            {faqs.length > 0 && (
              <div className="bg-white dark:bg-[#162032] p-8 md:p-14 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] dark:text-white mb-8 border-b-2 border-[#0097B2] inline-block pb-2">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-100 dark:border-white/10 rounded-2xl p-6 bg-gray-50 dark:bg-white/5 hover:border-[#0097B2]/50 transition-colors">
                      <h3 className="text-[19px] font-bold text-[#0B2545] dark:text-white mb-3 flex items-start gap-3">
                        <i className="fas fa-question-circle text-[#0097B2] mt-1"></i> {faq.question}
                      </h3>
                      <p className="text-[16px] text-gray-600 dark:text-gray-300 ml-8 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 🔥 MAIN FIX: Removed 'hidden lg:block' and added proper spacing for mobile layout */}
          <div className="lg:col-span-4 w-full relative mt-8 lg:mt-0">
            {/* Added 'lg:sticky lg:top-28' so it doesn't try to stick on small screens where it's stacked */}
            <div className="lg:sticky lg:top-28 space-y-8">
              
              {manualToc.length > 0 && (
                <div className="bg-white dark:bg-[#162032] p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0097B2] to-cyan-400"></div>
                  <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]"><i className="fas fa-list-ul"></i></div>
                    Table of Contents
                  </h3>
                  <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {manualToc.map((item, i) => (
                      <a key={i} href={`#${slugify(item.headingText)}`} className="block py-2 px-3 rounded-lg transition-all text-[15px] font-medium border-l-2 border-transparent text-gray-700 dark:text-gray-300 hover:border-[#0097B2] hover:text-[#0097B2] hover:bg-gray-50 dark:hover:bg-white/5">
                        {item.headingText}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-[#0B2545] to-[#11325B] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0097B2]/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{blog.leadFormHeading || "Quick Consultation 📞"}</h3>
                <p className="text-sm text-gray-300 mb-6 relative z-10">{blog.leadFormText || "Drop your details below for a free digital growth strategy call."}</p>
                <form className="relative z-10 space-y-3">
                  <input type="text" placeholder="Your Name" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition" />
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0097B2] transition" />
                  <button className="w-full bg-[#0097B2] hover:bg-white text-white hover:text-[#0B2545] font-bold py-3.5 rounded-xl transition shadow-[0_0_15px_rgba(0,151,178,0.3)]">Get Expert Advice</button>
                </form>
              </div>

              <div className="bg-white dark:bg-[#162032] p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5">
                <h3 className="text-lg font-bold text-[#0B2545] dark:text-white mb-6">How We Can Help</h3>
                <ul className="space-y-4">
                  {displayServices.map((service, i) => (
                    <li key={i}>
                      <Link href={service.link || "#"} className="flex items-center gap-4 group p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition">
                        <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center group-hover:bg-[#0097B2] group-hover:text-white transition shadow-sm"><i className={`${service.icon || "fas fa-rocket"} text-lg`}></i></div>
                        <div>
                          <span className="block text-[15px] font-bold text-[#0B2545] dark:text-white group-hover:text-[#0097B2] transition">{service.title}</span>
                          <span className="text-xs text-gray-500 font-medium">{service.desc}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}