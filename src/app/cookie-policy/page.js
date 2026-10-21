import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | SM NextGen",
  description: "Learn how SM NextGen uses essential and analytics cookies to optimize web performance and user experience.",
  alternates: {
    canonical: "https://smnextgen.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="relative w-full z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <Link href="/legal" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0097B2] hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Legal Hub</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-3">
            <Cookie className="w-3.5 h-3.5" />
            <span>Browser Preferences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: 21 October 2026
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B2545] p-8 sm:p-12 rounded-3xl border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device that enable websites to remember your preferences (such as light/dark mode selection) and provide essential operational security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">2. Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Essential Cookies:</strong> Session tokens to maintain authenticated state within Growth OS.</li>
              <li><strong>Preference Cookies:</strong> Storing light/dark theme choices and selected currency (USD / INR).</li>
              <li><strong>Analytics Telemetry:</strong> Privacy-conscious interaction data via Metricool to measure web traffic without harvesting personal identities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">3. Managing Cookies</h2>
            <p>
              You can control or disable cookies via your browser settings. Disabling essential cookies may impact your ability to remain logged into the Growth OS application.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
