import Link from "next/link";
import { ArrowLeft, RefreshCw, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | SM NextGen",
  description: "Read the official refund and cancellation policy for SM NextGen Growth Engagements and Growth OS SaaS subscriptions.",
  alternates: {
    canonical: "https://smnextgen.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="relative w-full z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <Link href="/legal" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0097B2] hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Legal Hub</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-bold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Billing Terms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: 21 October 2026
          </p>
        </div>

        <div className="bg-white dark:bg-[#0B2545] p-8 sm:p-12 rounded-3xl border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">1. Strategic Growth Engagements</h2>
            <p>
              Due to the bespoke nature of strategic consulting, engineering architecture, and digital campaigns, fees for completed diagnostic audits or active project sprints are non-refundable once work has commenced.
            </p>
            <p>
              Retained growth partnerships may be cancelled by either party with 30 days’ written notice as stipulated in your customized contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">2. Growth OS SaaS Subscriptions</h2>
            <p>
              When paid software subscriptions are active, you may cancel your recurring plan at any time through your workspace settings. Cancellation takes effect at the end of the current billing cycle, with zero further charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">3. Questions or Inquiries</h2>
            <p>
              For billing adjustments or questions regarding an invoice, contact our finance desk at <a href="mailto:info@smnextgen.com" className="text-[#0097B2] font-semibold underline">info@smnextgen.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
