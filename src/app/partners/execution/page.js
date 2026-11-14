import { ExecutionClient } from "./ExecutionClient";

export const metadata = {
  title: "Specialist Execution Partner Network | SM NextGen",
  description:
    "We collaborate with specialists when a project needs skills that complement the wider growth plan.",
  keywords: [
    "Execution Partner Network",
    "Specialist Freelancers",
    "Designers",
    "Developers",
    "Media Buyers",
    "SM NextGen Partners",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: "https://www.smnextgen.com/partners/execution",
  },
  openGraph: {
    title: "Specialist Execution Partner Network | SM NextGen",
    description:
      "We collaborate with specialists when a project needs skills that complement the wider growth plan.",
    url: "https://www.smnextgen.com/partners/execution",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Specialist Execution Partner Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ExecutionPage() {
  return <ExecutionClient />;
}
