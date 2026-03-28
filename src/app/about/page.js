// page.js
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | SM NextGen - Growth OS for Indian Businesses',
  description: 'Learn how SM NextGen bridges the gap between traditional business values and modern technology. We build end-to-end growth systems including web, ads, and CRM.',
  keywords: 'SM NextGen about, growth agency India, scale business, business modernization, Sanjay Lohar, marketing agency',
  openGraph: {
    title: 'About Us | SM NextGen',
    description: 'We build growth engines, not just ads. Discover our Growth OS designed to modernize and scale Indian businesses.',
    url: 'https://www.smnextgen.com/about',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/sanjay.png', // Replace with your actual OG image if different
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}