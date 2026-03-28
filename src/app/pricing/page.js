// app/pricing/page.js
import PricingClient from './PricingClient';

export const metadata = {
  title: 'Pricing & Packages | SM NextGen - Flexible Growth Plans',
  description: 'Transparent pricing for your business growth. Explore our customized individual services priced 10% below industry average, or choose a scalable growth package.',
  keywords: 'SM NextGen pricing, marketing agency packages, SEO pricing India, web development cost, flexible agency pricing, scalable growth plans',
  openGraph: {
    title: 'Pricing & Packages | SM NextGen',
    description: 'Scale without surprises. View our transparent pricing for marketing, tech, AI automation, and finance services.',
    url: 'https://www.smnextgen.com/pricing', // Replace with your actual URL
    siteName: 'SM NextGen',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}