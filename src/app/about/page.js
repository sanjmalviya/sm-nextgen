import AboutClient from './AboutClient';

export const metadata = {
  title: 'About SM NextGen | Your Complete Business Growth Partner',
  description:
    'Discover SM NextGen, a Business Growth Partner connecting strategy, marketing, technology, AI and automation to help businesses grow smarter.',
  keywords: [
    'Business Growth Partner',
    'Business Growth Company',
    'Business Growth Solutions',
    'Growth Strategy',
    'Marketing & Technology',
    'Business Automation',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/about',
  },
  openGraph: {
    title: 'About SM NextGen | Your Complete Business Growth Partner',
    description:
      'Discover SM NextGen, a Business Growth Partner connecting strategy, marketing, technology, AI and automation to help businesses grow smarter.',
    url: 'https://www.smnextgen.com/about',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'About SM NextGen',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}