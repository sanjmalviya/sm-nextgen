import ToolsClient from './ToolsClient';

export const metadata = {
  title: 'Free Business Growth Tools & Marketing Calculators | SM NextGen',
  description:
    'Use free business growth calculators, ROAS and CAC tools, break-even ROAS calculator, UTM builder and website checklists from SM NextGen.',
  keywords: [
    'Business Growth Tools',
    'Marketing Calculators',
    'ROAS Calculator',
    'CAC Calculator',
    'Break-Even ROAS',
    'UTM Link Builder',
    'Website Growth Checklist',
    'Local SEO Readiness Checker',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/tools',
  },
  openGraph: {
    title: 'Free Business Growth Tools & Marketing Calculators | SM NextGen',
    description:
      'Use free business growth calculators, ROAS and CAC tools, break-even ROAS calculator, UTM builder and website checklists from SM NextGen.',
    url: 'https://www.smnextgen.com/tools',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
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
