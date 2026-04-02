import { ContactFormClient } from "./ContactClient";

// --- NEXT.JS APP ROUTER METADATA (Perfect for SEO) ---
export const metadata = {
  title: "Contact SM NextGen | Get Your Free Growth Audit",
  description: "Ready to scale your business? Contact SM NextGen in Udaipur for expert Digital Marketing, AI Automation, and Legal/Financial compliance services.",
  keywords: "Contact SM NextGen, Digital Marketing Udaipur, AI Automation Agency, Business Growth Audit, SM NextGen Contact",
  metadataBase: new URL('https://smnextgen.com'),
  openGraph: {
    title: "Contact SM NextGen | Get Your Free Growth Audit",
    description: "Partner with SM NextGen to handle your Marketing, Branding, AI Automation, and Finance Services while you focus on scaling your product.",
    url: "https://smnextgen.com/contact",
    siteName: "SM NextGen",
    images: [
      {
        url: "/images/og-contact.png", // Using your strategy image
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  }
};

// We separate the client logic into a component because metadata can only be exported from Server Components
export default function ContactPage() {
  return <ContactFormClient />;
}