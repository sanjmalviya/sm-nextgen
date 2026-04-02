import HomeClient from './HomeClient';

export const metadata = {
  title: 'SM NextGen | Business Growth Solutions',
  description: 'SM NextGen helps businesses scale through data-driven marketing, robust technical infrastructure, intelligent automation systems, and reliable legal & financial support.',
  metadataBase: new URL('https://smnextgen.com'), 
  openGraph: {
    title: 'SM NextGen | Business Growth Solutions',
    description: 'Let\'s grow your business the smart way',
    url: 'https://smnextgen.com',
    siteName: 'SM NextGen',
    images: [
      {
        url: '/images/og-home.png', 
        width: 1200,
        height: 630,
        alt: 'SM NextGen Growth Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}