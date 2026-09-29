import { ContactFormClient } from "./ContactClient";

export const metadata = {
  title: "Start a Growth Conversation | SM NextGen — Business Growth Partner",
  description:
    "Schedule an executive consultation with an SM NextGen principal. We audit your revenue bottlenecks and engineer custom compounding growth architectures.",
  keywords:
    "Contact SM NextGen, Business Growth Partner Consultation, Growth Audit, Enterprise Scaling Advisory, AI Automation Architecture",
  metadataBase: new URL('https://smnextgen.com'),
  alternates: {
    canonical: 'https://smnextgen.com/contact',
  },
  openGraph: {
    title: "Start a Growth Conversation | SM NextGen — Business Growth Partner",
    description:
      "Direct principal engagement. 4-hour SLA guarantee. Mutual NDA protection. Schedule your diagnostic session today.",
    url: "https://smnextgen.com/contact",
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