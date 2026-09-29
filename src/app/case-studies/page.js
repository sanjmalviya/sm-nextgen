import CaseStudiesClient from './CaseStudiesClient'; 

export const metadata = {
  title: 'Case Studies & Commercial Outcomes | SM NextGen — Business Growth Partner',
  description:
    'Explore verified commercial case studies from SM NextGen. Discover how we engineer qualified enterprise pipelines, lower CAC, and accelerate revenue across B2B SaaS, D2C Commerce, and Healthcare.',
  keywords:
    'SM NextGen case studies, business growth results, B2B SaaS growth, D2C commerce scaling, healthcare patient acquisition, CAC reduction case studies',
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Results | SM NextGen — Business Growth Partner',
    description:
      'Real businesses. Real problems. Quantifiable growth systems. Discover how we scale enterprise market leaders.',
    url: 'https://smnextgen.com/case-studies',
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