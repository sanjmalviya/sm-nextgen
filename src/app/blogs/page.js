import { client } from "../../lib/sanity";
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Growth Lab | Business, Marketing, Technology & AI Insights — SM NextGen",
  description:
    "Practical insights on business growth, marketing strategy, sales, SEO, AI automation, technology and smarter business systems.",
  keywords: [
    "Growth Lab",
    "Business Growth",
    "Marketing Strategy",
    "Sales & Revenue",
    "SEO & Search",
    "AI & Automation",
    "Technology & Systems",
    "SM NextGen Blog",
  ],
  metadataBase: new URL("https://www.smnextgen.com"),
  alternates: {
    canonical: "https://www.smnextgen.com/blogs",
  },
  openGraph: {
    title: "Growth Lab | Business, Marketing, Technology & AI Insights — SM NextGen",
    description:
      "Practical insights on business growth, marketing strategy, sales, SEO, AI automation, technology and smarter business systems.",
    url: "https://www.smnextgen.com/blogs",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Growth Lab",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogsPage() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id, title, "slug": slug.current, category, 
    "imageUrl": image.asset->url, authorName, 
    "authorImageUrl": authorImage.asset->url, _createdAt, content
  }`;
  let blogs = [];
  try {
    blogs = await client.fetch(query);
  } catch (err) {
    console.warn("Sanity fetch skipped during static generation:", err.message);
  }
  return <BlogsClient initialBlogs={blogs || []} />;
}
