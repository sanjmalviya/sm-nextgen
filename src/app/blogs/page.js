// file: src/app/blogs/page.js
import BlogsClient from './BlogsClient';
import { client } from "../../lib/sanity";

export const metadata = {
  title: 'Growth Lab Insights & Strategies | SM NextGen',
  description: 'Engineering-grade strategies for Marketing, AI Automation, and Finance. Read our latest insights.',
  metadataBase: new URL('https://smnextgen.com'),
  openGraph: {
    title: 'Growth Lab Insights | SM NextGen',
    description: 'Marketing, AI, and Finance strategies for scaling businesses.',
    url: 'https://smnextgen.com/blogs',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen Growth Lab',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default async function BlogsPage() {
  // Sanity se saare blogs mangwane ki query
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  // Data fetch karna
  const sanityBlogs = await client.fetch(query);

  // Aapke existing client component mein data pass karna
  return <BlogsClient initialBlogs={sanityBlogs} />;
}