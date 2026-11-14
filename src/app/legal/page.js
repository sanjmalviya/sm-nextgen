import LegalClient from './LegalClient';

export const metadata = {
  title: 'Legal Information & Policies | SM NextGen',
  description:
    'Find the policies that explain how SM NextGen websites, services and digital products are used.',
  keywords: [
    'Legal Information',
    'SM NextGen Policies',
    'Privacy Policy',
    'Terms and Conditions',
    'Refund Policy',
    'Cookie Policy',
    'Data Deletion',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/legal',
  },
  openGraph: {
    title: 'Legal Information & Policies | SM NextGen',
    description:
      'Find the policies that explain how SM NextGen websites, services and digital products are used.',
    url: 'https://www.smnextgen.com/legal',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
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
