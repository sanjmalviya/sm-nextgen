import { ReferralClient } from "./ReferralClient";

export const metadata = {
  title: "Referral Partner Program | SM NextGen",
  description:
    "If you advise, support or work with business owners, introduce relevant opportunities to SM NextGen through a transparent referral process.",
  keywords: [
    "Referral Partner Program",
    "Business Referral",
    "SM NextGen Partners",
    "Business Advisors",
    "Growth Introductions",
  ],
  metadataBase: new URL('https://www.smnextgen.com'),
  alternates: {
    canonical: "https://www.smnextgen.com/partners/referral",
  },
  openGraph: {
    title: "Referral Partner Program | SM NextGen",
    description:
      "If you advise, support or work with business owners, introduce relevant opportunities to SM NextGen through a transparent referral process.",
    url: "https://www.smnextgen.com/partners/referral",
    siteName: "SM NextGen",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "SM NextGen Referral Partner Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ReferralPage() {
  return <ReferralClient />;
}
