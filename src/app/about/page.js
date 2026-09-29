import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | SM NextGen — Business Growth Partner',
  description:
    'We build more than an agency. SM NextGen is a business growth partner integrating strategy, modern technology, AI automation, and closed-loop revenue attribution.',
  keywords:
    'About SM NextGen, Business Growth Partner, Strategic Growth Company, Technology-Enabled Growth, Enterprise Growth Architecture',
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/about',
  },
  openGraph: {
    title: 'About Us | SM NextGen — Business Growth Partner',
    description:
      'We replace disconnected agency retainers with a unified compounding business growth engine.',
    url: 'https://smnextgen.com/about',
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