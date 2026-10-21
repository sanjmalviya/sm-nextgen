import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | SM NextGen — Business Growth Partner",
  description: "Read the official terms and conditions governing SM NextGen Growth Services engagements and Growth OS software platform subscriptions.",
  alternates: {
    canonical: "https://smnextgen.com/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <main className="relative w-full z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div>
          <Link href="/legal" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0097B2] hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Legal Hub</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Client Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Effective Date: 21 October 2026 | SM NextGen Business Growth Solutions
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B2545] p-8 sm:p-12 rounded-3xl border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the SM NextGen corporate website (<Link href="/" className="text-[#0097B2] font-semibold underline">smnextgen.com</Link>), commissioning strategic Growth Services, or creating an account within Growth OS (<Link href="/growth-os" className="text-[#0097B2] font-semibold underline">smnextgen.com/growth-os</Link>), you agree to be legally bound by these Terms and our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
              2. Growth Services & Scope of Delivery
            </h2>
            <p>
              SM NextGen delivers custom growth architecture, marketing campaigns, software engineering, and AI automation systems as detailed in executed Statements of Work (SOW):
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>All intellectual property developed specifically for a client transfers upon receipt of full contractual milestone payments.</li>
              <li>Estimated timelines depend on mutual collaboration and timely provision of required access and assets.</li>
              <li>Performance outcomes depend on market variables, ad spend, and client sales velocity; while we engineer high-conviction systems, we do not make false guarantees of revenue.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
              3. Growth OS SaaS Software Usage
            </h2>
            <p>
              Users of Growth OS agree:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Only authorized owners or designated managers may connect and manage Google Business Profiles. Attempting to hijack competitor listings is strictly prohibited and blocked by our ownership verification gates.</li>
              <li>The <strong>SM NextGen Growth Score (0–100)</strong> is an independent diagnostic benchmark, not an official Google rating or guaranteed algorithmic ranking metric.</li>
              <li>AI-generated review responses require human review and approval prior to external publication.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in Udaipur, Rajasthan, India.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
