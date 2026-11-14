import CaseStudiesClient from './CaseStudiesClient'; 

export const metadata = {
  title: 'Business Growth Case Studies & Client Projects | SM NextGen',
  description:
    'Explore SM NextGen client projects and illustrative case studies across hospitality, finance, events, D2C, e-commerce, healthcare and B2B.',
  keywords: [
    'Business Growth Case Studies',
    'Client Projects',
    'Growth Solutions',
    'SM NextGen Case Studies',
    'Digital Transformation Case Studies',
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/case-studies',
  },
  openGraph: {
    title: 'Business Growth Case Studies & Client Projects | SM NextGen',
    description:
      'Explore SM NextGen client projects and illustrative case studies across hospitality, finance, events, D2C, e-commerce, healthcare and B2B.',
    url: 'https://www.smnextgen.com/case-studies',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SM NextGen Case Studies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WorkPage() {
  return <CaseStudiesClient />;
}
