import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Strategic Growth Capabilities | SM NextGen — Business Growth Partner",
  description:
    "Explore SM NextGen's full-stack growth capabilities: Growth Strategy, Marketing & Demand, Conversion & Digital Experience, AI & Automation, Data Intelligence, and Operations Support.",
  keywords:
    "Growth Capabilities, Growth Strategy, Marketing & Demand, Conversion Rate Optimization, AI Business Automation, Enterprise Next.js Development, Revenue Intelligence, SM NextGen",
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/services',
  },
  openGraph: {
    title: "Strategic Growth Capabilities | SM NextGen — Business Growth Partner",
    description:
      "Full-stack capabilities engineered to accelerate qualified pipeline, lower CAC, and compound enterprise revenue.",
    url: "https://smnextgen.com/services",
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