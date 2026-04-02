// file: app/how-we-work/page.js
import HowWeWorkClient from './HowWeWorkClient';

export const metadata = {
  title: 'How We Work | SM NextGen Growth OS™',
  description: 'Discover the SM NextGen Growth OS™. Our 4-step framework to audit, strategize, build, and scale your business using data-driven marketing and AI automation.',
  metadataBase: new URL('https://smnextgen.com'),
  openGraph: {
    title: 'How We Work | SM NextGen Growth OS™',
    description: 'A structured system to diagnose, build, and scale modern businesses globally.',
    url: 'https://smnextgen.com/how-we-work',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-how-we-work.png', // Aapki existing naming format ke hisaab se
        width: 1200,
        height: 630,
        alt: 'SM NextGen Growth Process',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}