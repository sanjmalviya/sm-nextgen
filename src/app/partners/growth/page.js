import { GrowthClient } from "./GrowthClient";

export const metadata = {
  title: "Growth & Strategic Partnership Opportunities | SM NextGen",
  description:
    "Work together on business strategy, co-selling and complementary client opportunities where our capabilities align.",
  keywords: [
    "Growth Partner",
    "Strategic Partnership",
    "Agency Collaboration",
    "Co-selling",
    "SM NextGen Partners",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: "https://www.smnextgen.com/partners/growth",
  },
  openGraph: {
    title: "Growth & Strategic Partnership Opportunities | SM NextGen",
    description:
      "Work together on business strategy, co-selling and complementary client opportunities where our capabilities align.",
    url: "https://www.smnextgen.com/partners/growth",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Growth Partner Opportunities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GrowthPage() {
  return <GrowthClient />;
}
