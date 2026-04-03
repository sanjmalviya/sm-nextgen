import BlogsClient from './BlogsClient';

export const metadata = {
  title: 'Growth Lab Insights & Strategies | SM NextGen',
  description: 'Engineering-grade strategies for Marketing, AI Automation, and Finance. Read our latest insights written for ambitious founders in India.',
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

export default function BlogsPage() {
  return <BlogsClient />;
}