import HomeClient from './HomeClient';

export const metadata = {
  title: 'SM NextGen | Business Growth Partner | Strategy, Marketing & Technology',
  description:
    'SM NextGen helps businesses build sustainable growth through strategy, marketing, technology, AI and automation — driving stronger demand, sales, revenue and long-term ROI.',
  metadataBase: new URL('https://smnextgen.com'),
  keywords: [
    'Business Growth Partner',
    'Business Growth Company',
    'Growth Strategy',
    'Technology-Enabled Growth',
    'Revenue Growth Systems',
    'AI Business Automation',
    'Marketing Automation',
    'Enterprise Web Development',
    'Customer Acquisition Systems',
    'SM NextGen'
  ],
  alternates: {
    canonical: 'https://smnextgen.com',
  },
  openGraph: {
    title: 'SM NextGen | Business Growth Partner | Strategy, Marketing & Technology',
    description:
      'SM NextGen helps businesses build sustainable growth through strategy, marketing, technology, AI and automation — driving stronger demand, sales, revenue and long-term ROI.',
    url: 'https://smnextgen.com',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen — Your Complete Business Growth Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM NextGen | Business Growth Partner',
    description:
      'SM NextGen helps businesses build sustainable growth through strategy, marketing, technology, AI and automation.',
    images: ['/icon.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://smnextgen.com/#organization',
      name: 'SM NextGen',
      url: 'https://smnextgen.com',
      logo: 'https://smnextgen.com/icon.png',
      description: 'Your Complete Business Growth Partner. Combining strategy, marketing, technology, AI and automation.',
      telephone: '+917073538077',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'HPPQ+Q5V, Sunderwas, Ganapati Nagar',
        addressLocality: 'Udaipur',
        addressRegion: 'Rajasthan',
        postalCode: '313001',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.linkedin.com/company/smnextgen',
        'https://twitter.com/smnextgen',
        'https://www.instagram.com/smnextgen',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://smnextgen.com/#service',
      name: 'SM NextGen Business Growth Solutions',
      url: 'https://smnextgen.com',
      provider: {
        '@id': 'https://smnextgen.com/#organization',
      },
      areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'SG', 'CA'],
      serviceType: [
        'Growth Strategy',
        'Performance Marketing & Demand Generation',
        'Conversion & Digital Experience',
        'AI & Business Automation',
        'Technology & Infrastructure',
        'Revenue Intelligence & Analytics',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://smnextgen.com/#website',
      url: 'https://smnextgen.com',
      name: 'SM NextGen',
      publisher: {
        '@id': 'https://smnextgen.com/#organization',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}