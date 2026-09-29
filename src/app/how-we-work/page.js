import HowWeWorkClient from './HowWeWorkClient';

export const metadata = {
  title: 'How We Grow | SM NextGen — Business Growth Partner',
  description:
    'From business problems to growth opportunities. Explore SM NextGen’s 6-stage compounding growth methodology combining strategy, marketing, technology, and AI automation.',
  keywords:
    'how we grow, business growth methodology, growth architecture, 6-stage growth framework, SM NextGen, compounding business growth',
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/how-we-work',
  },
  openGraph: {
    title: 'How We Grow | SM NextGen — Business Growth Partner',
    description:
      'A structured 6-stage methodology to diagnose bottlenecks, build high-converting systems, and scale modern businesses globally.',
    url: 'https://smnextgen.com/how-we-work',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen — How We Grow',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}