// file: page.js
import CaseStudiesClient from './CaseStudiesClient'; 

export const metadata = {
  title: 'Our Work & Results | SM NextGen',
  description: 'Explore our proven track record. See how SM NextGen helps businesses generate consistent leads, sales, and high ROI through data-driven systems.',
  keywords: 'SM NextGen case studies, marketing portfolio, business growth results, ROAS, lead generation success stories',
  metadataBase: new URL('https://smnextgen.com'), 
  openGraph: {
    title: 'Success Stories & Results | SM NextGen',
    description: 'Real Business. Real Results. See How We Scale Brands.',
    url: 'https://smnextgen.com/case-studies', // Apna actual page URL likhna yahan (e.g. /case-studies ya /work)
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-work.png', // Jo image aapne pehle dikhayi thi
        width: 1200,
        height: 630,
        alt: 'SM NextGen Work & Results',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WorkPage() {
  return <CaseStudiesClient />;
}