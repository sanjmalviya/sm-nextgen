import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Business Growth Capabilities | Marketing, Technology & AI — SM NextGen",
  description:
    "Explore connected business growth capabilities across strategy, marketing, digital experience, AI automation, data intelligence and business operations.",
  keywords: [
    "Business Growth Capabilities",
    "Growth Strategy & Positioning",
    "Marketing & Demand Generation",
    "Conversion & Digital Experience",
    "AI & Business Automation",
    "Data & Intelligence",
    "Business Operations & Compliance",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/services',
  },
  openGraph: {
    title: "Business Growth Capabilities | Marketing, Technology & AI — SM NextGen",
    description:
      "Explore connected business growth capabilities across strategy, marketing, digital experience, AI automation, data intelligence and business operations.",
    url: "https://www.smnextgen.com/services",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Growth Capabilities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
