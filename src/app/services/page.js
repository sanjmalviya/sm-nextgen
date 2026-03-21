import ServicesClient from "./ServicesClient";

// --- NEXT.JS APP ROUTER METADATA (Premium SEO) ---
export const metadata = {
  title: "Premium Growth Services | SM NextGen - Marketing, Tech & AI",
  description: "Explore SM NextGen's complete business growth ecosystem. We offer high-end Marketing & Sales, Website & App Development, AI Automation, and Legal & Finance services.",
  keywords: "Digital Marketing Agency, Web Development Services, Mobile App Development, AI Automation solutions, SEO Services, Performance Ads, Business Registration, Virtual CFO, SM NextGen Services",
  openGraph: {
    title: "Complete Business Growth Ecosystem | SM NextGen",
    description: "Scale your business with our end-to-end solutions: Marketing, Tech Development, AI Automation, and Legal & Finance.",
    url: "https://smnextgen.com/services",
    siteName: "SM NextGen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Premium Dashboard Image
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