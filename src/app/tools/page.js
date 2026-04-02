// file: app/tools/page.js
import ToolsClient from './ToolsClient';

export const metadata = {
  title: 'Growth Tools & Calculators | SM NextGen',
  description: 'Free marketing and engineering tools to forecast ROI, calculate CAC, and generate UTM links for your digital campaigns.',
  metadataBase: new URL('https://smnextgen.com'),
  openGraph: {
    title: 'Growth Tools & Calculators | SM NextGen',
    description: 'Calculate ROI, CAC, and build UTM links easily.',
    url: 'https://smnextgen.com/tools',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-home.png', // Agar tools ke liye alag image hai toh '/images/og-tools.png' daal dena
        width: 1200,
        height: 630,
        alt: 'SM NextGen Growth Tools',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}