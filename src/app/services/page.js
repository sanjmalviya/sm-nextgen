import ServicesClient from "./ServicesClient";

// --- NEXT.JS APP ROUTER METADATA (Premium SEO) ---
export const metadata = {
  title: "Premium Growth Services | SM NextGen - Marketing, Tech & AI",
  description: "Explore SM NextGen's complete business growth ecosystem. We offer Digital Marketing, Website & App Development, AI Automation, and Legal & Finance services.",
  keywords: "Digital Marketing Agency, Web Development Services, Mobile App Development, AI Automation solutions, SEO Services, Performance Ads, Business Registration, Virtual CFO, SM NextGen Services",
  metadataBase: new URL('https://smnextgen.com'), // Ye line WhatsApp preview ke liye bohot zaroori hai
  openGraph: {
    title: "Complete Business Growth Ecosystem | SM NextGen",
    description: "Scale your business with our end-to-end solutions: Marketing, Tech Development, AI Automation, and Legal & Finance.",
    url: "https://smnextgen.com/services",
    siteName: "SM NextGen",
    images: [
      {
        url: "/images/og-services.png", // Yahan aapki custom image laga di hai
        width: 1200,
        height: 630,
        alt: "SM NextGen Services",
      }
    ],
    locale: "en_IN",
    type: "website",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}