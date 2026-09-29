import PricingClient from './PricingClient';

export const metadata = {
  title: 'Growth Engagements | SM NextGen — Business Growth Partner',
  description:
    'Explore SM NextGen growth engagement models. From executive growth audits and project sprints to full-stack growth partnerships designed for enterprise scale.',
  keywords:
    'SM NextGen growth engagements, business growth partner pricing, growth audit, growth sprint, executive growth advisory, AI automation architecture',
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/pricing',
  },
  openGraph: {
    title: 'Growth Engagements | SM NextGen — Business Growth Partner',
    description:
      'High-conviction growth engagement models designed to compound enterprise value through strategy, technology, AI and marketing.',
    url: 'https://smnextgen.com/pricing',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen Growth Engagements',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}