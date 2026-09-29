import GrowthOSClient from "./GrowthOSClient";

export const metadata = {
  title: "SM NextGen Growth OS | Google Business Profile Growth Platform",
  description: "Accelerate your local Google Search and Maps customer inflow with SM NextGen Growth OS. Featuring AI review autopilot, profile diagnostics, and automated local posts.",
  alternates: {
    canonical: "https://smnextgen.com/growth-os",
  },
  openGraph: {
    title: "SM NextGen Growth OS | Google Business Profile Growth Platform",
    description: "Accelerate your local Google Search and Maps customer inflow with SM NextGen Growth OS.",
    url: "https://smnextgen.com/growth-os",
    siteName: "SM NextGen",
  },
};

export default function GrowthOSPage() {
  return <GrowthOSClient />;
}
