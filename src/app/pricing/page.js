import PricingClient from './PricingClient';

export const metadata = {
  title: 'Business Growth Engagements & Pricing | SM NextGen',
  description:
    'Explore flexible SM NextGen engagement models, from focused growth audits and projects to ongoing growth partnerships and custom systems.',
  keywords: [
    'Business Growth Engagements',
    'Growth Audit',
    'Core Growth System',
    'Full-Stack Growth Partnership',
    'SM NextGen Pricing',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/pricing',
  },
  openGraph: {
    title: 'Business Growth Engagements & Pricing | SM NextGen',
    description:
      'Explore flexible SM NextGen engagement models, from focused growth audits and projects to ongoing growth partnerships and custom systems.',
    url: 'https://www.smnextgen.com/pricing',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen Pricing & Engagements',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
