"use client";
import React from "react";
import HeroGrowthPartner from "./components/growth_home/HeroGrowthPartner";
import GrowthStatsStrip from "./components/growth_home/GrowthStatsStrip";
import GrowthIsBigger from "./components/growth_home/GrowthIsBigger";
import SevenGrowthLevers from "./components/growth_home/SevenGrowthLevers";
import BusinessSystemFramework from "./components/growth_home/BusinessSystemFramework";
import VerifiableCaseStudies from "./components/growth_home/VerifiableCaseStudies";
import GrowthIndustries from "./components/growth_home/GrowthIndustries";
import ExecutiveGrowthIntake from "./components/growth_home/ExecutiveGrowthIntake";

export default function HomeClient() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartConversation = () => {
    scrollToSection("contact");
  };

  const handleExploreFramework = () => {
    scrollToSection("framework");
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#0B2545] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION — BUSINESS GROWTH PARTNER */}
      <HeroGrowthPartner
        onStartConversation={handleStartConversation}
      />

      {/* 02: TRUST & COMMERCIAL PERFORMANCE STRIP */}
      <GrowthStatsStrip />

      {/* 03: CATEGORY DEFINITION — GROWTH IS BIGGER THAN MARKETING */}
      <GrowthIsBigger
        onExploreFramework={handleExploreFramework}
      />

      {/* 04: THE 7 GROWTH LEVERS (CORE CAPABILITIES) */}
      <SevenGrowthLevers
        onSelectLever={handleStartConversation}
      />

      {/* 05: 5-STAGE METHODOLOGY — BUSINESS SYSTEM FRAMEWORK */}
      <BusinessSystemFramework
        onStartConversation={handleStartConversation}
      />

      {/* 06: VERIFIABLE CASE STUDIES */}
      <VerifiableCaseStudies
        onExploreMore={handleStartConversation}
      />

      {/* 07: SECTOR-SPECIFIC ARCHITECTURES (INDUSTRIES) */}
      <GrowthIndustries
        onSelectIndustry={handleStartConversation}
      />

      {/* 08: EXECUTIVE GROWTH INTAKE & DIRECT WHATSAPP ROUTING */}
      <ExecutiveGrowthIntake />

    </main>
  );
}