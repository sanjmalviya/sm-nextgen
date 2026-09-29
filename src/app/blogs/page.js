import { client } from "../../lib/sanity";
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Growth Lab Insights & Strategies | SM NextGen",
  description: "Engineering-grade strategies for Marketing, AI Automation, and Finance. Read our latest insights.",
  metadataBase: new URL("https://smnextgen.com"),
  openGraph: {
    title: "Growth Lab Insights | SM NextGen",
    description: "Marketing, AI, and Finance strategies for scaling businesses.",
    url: "https://smnextgen.com/blogs",
    siteName: "SM NextGen",
    images: [
      {
        url: "/images/og-home.png",
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
  const blogs = await client.fetch(query);
  return <BlogsClient initialBlogs={blogs || []} />;
}