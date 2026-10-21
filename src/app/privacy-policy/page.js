import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, Eye, Database } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SM NextGen — Business Growth Partner",
  description: "Read the official privacy policy of SM NextGen. Learn how we handle client data, Growth OS telemetry, and Google Business Profile permissions with complete confidentiality.",
  alternates: {
    canonical: "https://smnextgen.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div>
          <Link href="/legal" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0097B2] hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Legal Hub</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparency & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: 21 October 2026 | Effective for SM NextGen Corporate & Growth OS Software
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B2545] p-8 sm:p-12 rounded-3xl border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#0097B2]" />
              1. Information We Collect
            </h2>
            <p>
              We collect information to provide business growth services and power the Growth OS platform:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Contact & Consultation Inquiries:</strong> Name, business email, phone number/WhatsApp, company website, estimated monthly revenue, and growth goals submitted via our intake forms.</li>
              <li><strong>Growth OS User Accounts:</strong> Email address, workspace names, business physical addresses, and role-based permissions.</li>
              <li><strong>Authorized Google Business Profile Data:</strong> When you connect your profile via OAuth or authorized GBP ID, we access public business details (name, category, address, phone, reviews, ratings) to execute audits and generate AI review responses.</li>
              <li><strong>Anonymous Website Telemetry:</strong> Anonymized interaction metrics collected via privacy-conscious pixels (Metricool) to improve platform usability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-[#0097B2]" />
              2. How We Use and Protect Your Data
            </h2>
            <p>
              We adhere strictly to non-disclosure and privacy principles:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>We NEVER sell customer data</strong> to any third-party brokers, advertisers, or competitors.</li>
              <li>Data provided to Growth OS is used strictly to power your business’s private workspace, calculate your proprietary Growth Score, and facilitate review management.</li>
              <li>All server communication utilizes industry-standard TLS 1.3 cryptographic encryption.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#0097B2]" />
              3. Google API Data & Scopes Policy
            </h2>
            <p>
              Growth OS’s use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-[#0097B2] font-semibold underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <p>
              You may disconnect Google account access at any time through our <Link href="/data-deletion" className="text-[#0097B2] font-semibold underline">Data Deletion & Disconnection Center</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
              4. Contact the Data Protection Officer
            </h2>
            <p>
              For privacy inquiries, audit requests, or data correction:
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#071A30] border border-[#0B2545]/10 dark:border-white/10 text-xs sm:text-sm font-mono">
              SM NextGen Headquarters & Growth Lab<br />
              Attn: Privacy & Data Governance<br />
              Email: info@smnextgen.com | Phone: +91 70735 38077<br />
              Address: HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313001, India
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
