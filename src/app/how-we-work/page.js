import HowWeWorkClient from './HowWeWorkClient';

export const metadata = {
  title: 'How We Grow | SM NextGen Business Growth Framework',
  description:
    'Discover the SM NextGen six-stage growth framework: Discover, Diagnose, Strategize, Build, Optimize and Scale.',
  keywords: [
    'Business Growth Strategy',
    'Business Growth Framework',
    'Business Growth Process',
    'Growth Strategy Consulting',
    'Business Growth Methodology',
    'Business Growth Solutions',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/how-we-work',
  },
  openGraph: {
    title: 'How We Grow | SM NextGen Business Growth Framework',
    description:
      'Discover the SM NextGen six-stage growth framework: Discover, Diagnose, Strategize, Build, Optimize and Scale.',
    url: 'https://www.smnextgen.com/how-we-work',
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
