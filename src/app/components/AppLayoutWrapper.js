"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import GrowthOSFloatingLauncher from "./GrowthOSFloatingLauncher";

export default function AppLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAppRoute = pathname?.startsWith("/growth-os");

  if (isAppRoute) {
    // Isolated Standalone SaaS Application Shell (No marketing header/footer)
    return (
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col overflow-x-hidden">
        {children}
      </div>
    );
  }

  // Marketing Agency Website Layout
  return (
    <>
      <Header />
      {children}
      <Footer />
      <GrowthOSFloatingLauncher />
    </>
  );
}
