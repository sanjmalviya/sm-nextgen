import { Suspense } from "react";
import ResetPasswordClient from "./ResetPasswordClient";

export const metadata = {
  title: "Reset Password | SM NextGen Growth OS",
  description: "Reset your SM NextGen Growth OS account password securely.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center text-slate-400 font-sans text-xs">
        Loading security checkpoint...
      </div>
    }>
      <ResetPasswordClient />
    </Suspense>
  );
}
