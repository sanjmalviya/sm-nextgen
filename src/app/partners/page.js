import { PartnerClient } from "./PartnerClient";

export const metadata = {
  title: "Partner with SM NextGen | Business Growth Partner Ecosystem",
  description:
    "Explore referral, growth and execution partnership opportunities with SM NextGen.",
  keywords: [
    "Partner with SM NextGen",
    "Referral Partner Program",
    "Growth Partnership",
    "Execution Partner Network",
    "Business Growth Ecosystem",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: "https://www.smnextgen.com/partners",
  },
  openGraph: {
    title: "Partner with SM NextGen | Business Growth Partner Ecosystem",
    description:
      "Explore referral, growth and execution partnership opportunities with SM NextGen.",
    url: "https://www.smnextgen.com/partners",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Partner Ecosystem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PartnersPage() {
  return <PartnerClient />;
}
