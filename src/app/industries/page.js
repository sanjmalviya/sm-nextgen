import IndustriesClient from "./IndustriesClient";

export const metadata = {
  title: "Industry-Specific Business Growth Solutions | SM NextGen",
  description:
    "Explore business growth approaches for D2C, B2B, healthcare, hospitality, home and living, professional services and manufacturing businesses.",
  keywords: [
    "Industry Growth Solutions",
    "D2C & E-commerce Growth",
    "B2B & Technology Growth",
    "Healthcare & Clinics Marketing",
    "Hospitality & Resorts Growth",
    "Home & Living Digital Solutions",
    "Professional Services Growth",
    "Manufacturing B2B Lead Generation",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: "https://www.smnextgen.com/industries",
  },
  openGraph: {
    title: "Industry-Specific Business Growth Solutions | SM NextGen",
    description:
      "Explore business growth approaches for D2C, B2B, healthcare, hospitality, home and living, professional services and manufacturing businesses.",
    url: "https://www.smnextgen.com/industries",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Industry Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
