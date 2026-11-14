import { ContactFormClient } from "./ContactClient";

export const metadata = {
  title: "Contact SM NextGen | Start Your Business Growth Journey",
  description:
    "Connect with SM NextGen for business growth strategy, digital marketing, branding, website development, AI automation and technology solutions.",
  keywords: [
    "Contact SM NextGen",
    "Business Growth Strategy",
    "Digital Marketing",
    "Branding",
    "Website Development",
    "AI Automation",
    "Technology Solutions",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: 'https://www.smnextgen.com/contact',
  },
  openGraph: {
    title: "Contact SM NextGen | Start Your Business Growth Journey",
    description:
      "Connect with SM NextGen for business growth strategy, digital marketing, branding, website development, AI automation and technology solutions.",
    url: "https://www.smnextgen.com/contact",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Contact SM NextGen",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactFormClient />;
}
