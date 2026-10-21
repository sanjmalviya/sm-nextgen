import Link from "next/link";
import { ShieldCheck, Trash2, KeyRound, Mail, ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "User Data Deletion Policy | SM NextGen & Growth OS",
  description: "Instructions and procedures for requesting user account data deletion and disconnecting Google Business Profile integrations from SM NextGen Growth OS.",
  alternates: {
    canonical: "https://smnextgen.com/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <main className="relative w-full z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] font-body transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb / Back */}
        <div>
          <Link href="/legal" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0097B2] hover:underline mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Legal & Compliance Hub</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Trash2 className="w-3.5 h-3.5" />
            <span>GDPR & Google User Data Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
            User Data Deletion Policy
          </h1>
          <p className="text-sm sm:text-base text-[#0B2545]/70 dark:text-[#E6EEF2]/70 mt-3 max-w-2xl">
            At SM NextGen, we respect your data sovereignty. Learn how to disconnect authorized Google Business Profile accounts, purge cached telemetry, or permanently delete your account.
          </p>
        </div>

        {/* Core Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#0B2545] dark:text-white">Method 1: Self-Service Disconnection</h3>
            <p className="text-xs sm:text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 leading-relaxed">
              You can instantly revoke Growth OS access to your Google Business Profile without waiting for support:
            </p>
            <ol className="text-xs sm:text-sm space-y-2 list-decimal list-inside text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
              <li>Log in to your workspace at <Link href="/growth-os" className="text-[#0097B2] font-semibold underline">smnextgen.com/growth-os</Link>.</li>
              <li>Go to <strong>Settings & Workspace &gt; Connected Integrations</strong>.</li>
              <li>Click <strong>Disconnect Google Business Profile</strong>.</li>
              <li>All active OAuth session tokens and locally cached telemetry are immediately expunged from memory.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#0B2545] dark:text-white">Method 2: Permanent Account Purge</h3>
            <p className="text-xs sm:text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75 leading-relaxed">
              To request complete deletion of your user account, workspace history, and audit records:
            </p>
            <ol className="text-xs sm:text-sm space-y-2 list-decimal list-inside text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
              <li>Email our data privacy officer at <a href="mailto:info@smnextgen.com" className="text-[#0097B2] font-semibold underline">info@smnextgen.com</a>.</li>
              <li>Use subject line: <code>Data Deletion Request — [Your Business Name]</code>.</li>
              <li>Include your registered email address and workspace ID.</li>
              <li>Our engineering team verifies ownership and purges all database records within <strong>7 business days</strong>.</li>
            </ol>
          </div>
        </div>

        {/* Google Third-Party Revocation Notice */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0B2545] border border-[#0B2545]/10 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#0B2545] dark:text-white">
              Revoking Access Directly from Google Account Security
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0B2545]/80 dark:text-[#E6EEF2]/80 leading-relaxed">
            You can also revoke Growth OS permissions at any time directly through Google’s official security console:
          </p>
          <ol className="text-xs sm:text-sm space-y-2.5 list-decimal list-inside text-[#0B2545]/80 dark:text-[#E6EEF2]/80">
            <li>Visit your Google Account Security Dashboard at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-[#0097B2] font-semibold underline">myaccount.google.com/permissions</a>.</li>
            <li>Locate <strong>SM NextGen Growth OS</strong> under <em>Third-party apps with account access</em>.</li>
            <li>Click <strong>Remove Access</strong>. Google will immediately invalidate all active access tokens.</li>
          </ol>
        </div>

        {/* Data Retention Details */}
        <div className="p-8 rounded-3xl bg-[#F1F5F9] dark:bg-[#030D1A] border border-[#0B2545]/10 dark:border-white/10 space-y-4 text-xs sm:text-sm text-[#0B2545]/75 dark:text-[#E6EEF2]/75">
          <h3 className="font-heading font-bold text-base text-[#0B2545] dark:text-white">What Happens When Data is Purged</h3>
          <p>
            When an account is deleted:
          </p>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Your user authentication record is permanently erased.</li>
            <li>Stored workspace records, 24-point audit history, and customized AI review drafts are destroyed.</li>
            <li>All cached Google Business Profile NAP information and coordinates are unlinked.</li>
            <li>Any active Web3Forms consultation inquiries are archived strictly for statutory accounting/invoicing obligations if a commercial engagement existed.</li>
          </ul>
          <p className="pt-2 text-xs text-gray-500 dark:text-gray-400">
            Official Compliance Contact: <strong>SM NextGen Data Governance Team</strong> | Email: <a href="mailto:info@smnextgen.com" className="text-[#0097B2] font-semibold">info@smnextgen.com</a> | Udaipur, Rajasthan, India.
          </p>
        </div>

      </div>
    </main>
  );
}
