import IndustriesClient from "./IndustriesClient";

export const metadata = {
  title: "Industry Growth Blueprints | SM NextGen — Business Growth Partner",
  description: "Explore how SM NextGen tailors compounding growth systems across E-commerce, B2B SaaS, Healthcare, Education, Real Estate, Hospitality, Professional Services, and Local Businesses.",
  alternates: {
    canonical: "https://smnextgen.com/industries",
  },
  openGraph: {
    title: "Industry Growth Blueprints | SM NextGen",
    description: "Tailored growth systems, CAC optimization, and digital infrastructure across 9 priority sectors.",
    url: "https://smnextgen.com/industries",
    siteName: "SM NextGen",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
