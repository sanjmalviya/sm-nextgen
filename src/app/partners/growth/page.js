import { GrowthClient } from "./GrowthClient";

// --- NEXT.JS APP ROUTER METADATA (Perfect for SEO) ---
export const metadata = {
  title: "Become a Growth Partner | SM NextGen",
  description: "The ultimate collaboration for Agency Owners and Fractional CMOs. Bring clients, lead the strategy, execute alongside our team, and maximize your revenue share.",
  keywords: "Growth Partner, Fractional CMO, Agency Partnership, B2B Sales, High Ticket Services, SM NextGen Partner, Co-execution",
  openGraph: {
    title: "Become a Growth Partner | SM NextGen",
    description: "Bring clients, lead the strategy, execute alongside our team, and maximize your revenue share. Built for agency owners and strategists.",
    url: "https://smnextgen.com/partners/growth",
    siteName: "SM NextGen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop", 
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  }
};

export default function GrowthPage() {
  return <GrowthClient />;
}