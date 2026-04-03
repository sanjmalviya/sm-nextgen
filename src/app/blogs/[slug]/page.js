// file: app/blogs/[slug]/page.js
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Supabase Setup for Server Side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// SEO ke liye dynamic metadata generate karna
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, content, image_url')
    .eq('slug', slug)
    .single();

  if (!blog) return { title: 'Blog Not Found' };

  // Description ke liye pehle 150 characters nikalna
  const description = blog.content ? blog.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...' : 'Read our latest insights.';

  return {
    title: `${blog.title} | SM NextGen`,
    description: description,
    openGraph: {
      title: blog.title,
      description: description,
      images: [{ url: blog.image_url || '/images/og-home.png' }],
    },
  };
}

// Ye function actual page render karega
export default async function SingleBlogPage({ params }) {
  const { slug } = params;

  // Supabase se blog fetch karo
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#071A30] text-white">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <Link href="/blogs" className="text-[#0097B2] underline">Go back to all blogs</Link>
      </div>
    );
  }

  return (
    <main className="bg-[#F8FAFC] dark:bg-[#071A30] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="mb-10 text-center">
          <span className="inline-block bg-[#0097B2]/10 text-[#0097B2] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {blog.category || 'Growth Lab'}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0B2545] dark:text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm">
            Published on {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Featured Image */}
        {blog.image_url && (
          <div className="mb-12 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5">
            <img src={blog.image_url} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
          </div>
        )}

        {/* Blog Content */}
        {/* Use dangerouslySetInnerHTML if you are storing HTML in Supabase */}
        <div 
          className="prose dark:prose-invert prose-lg max-w-none text-[#0B2545] dark:text-[#E6EEF2]/90 prose-headings:text-[#0B2545] dark:prose-headings:text-white prose-a:text-[#0097B2]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#0B2545] dark:bg-[#11325B] p-8 rounded-2xl text-center text-white shadow-lg border border-[#0097B2]/20">
          <h3 className="text-2xl font-bold mb-4">Ready to implement this strategy?</h3>
          <p className="text-[#E6EEF2]/80 mb-6">Let SM NextGen help you scale your business using proven systems.</p>
          <Link href="/contact" className="inline-block bg-[#0097B2] hover:bg-white hover:text-[#0B2545] text-white font-bold py-3 px-8 rounded-xl transition-colors">
            Book a Strategy Call
          </Link>
        </div>

      </article>
    </main>
  );
}