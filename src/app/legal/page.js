// file: app/legal/page.js
import LegalClient from './LegalClient';

export const metadata = {
  title: 'Legal & Compliance | SM NextGen',
  description: 'Read our Privacy Policy, Terms of Service, and Refund Policy. Transparency and compliance are core values at SM NextGen.',
  metadataBase: new URL('https://smnextgen.com'),
  openGraph: {
    title: 'Legal & Compliance | SM NextGen',
    description: 'Privacy Policy, Terms of Service, and Refund Policy.',
    url: 'https://smnextgen.com/legal', // Apna exact URL yahan daalna agar folder name alag ho
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-home.png', // Agar legal ke liye alag image nahi hai toh home ki laga lo, warna '/images/og-legal.png' kar do
        width: 1200,
        height: 630,
        alt: 'SM NextGen Legal Policies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LegalPage() {
  return <LegalClient />;
}