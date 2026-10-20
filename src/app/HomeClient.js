"use client";
import React from "react";
import HeroEditorial from "./components/home_editorial/HeroEditorial";
import BusinessChallenges from "./components/home_editorial/BusinessChallenges";
import GrowthSystemDark from "./components/home_editorial/GrowthSystemDark";
import ServicesEditorial from "./components/home_editorial/ServicesEditorial";
import GrowthOSShowcase from "./components/home_editorial/GrowthOSShowcase";
import CaseStudiesProof from "./components/home_editorial/CaseStudiesProof";
import HowWeWorkProcess from "./components/home_editorial/HowWeWorkProcess";
import AboutLeadership from "./components/home_editorial/AboutLeadership";
import FinalConsultationCTA from "./components/home_editorial/FinalConsultationCTA";

export default function HomeClient() {
  const scrollToConsultation = () => {
    const el = document.getElementById("consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  const scrollToSystem = () => {
    const el = document.getElementById("growth-system");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-300">
      
      {/* 01: HERO SECTION — EDITORIAL POSITIONING & INTERACTIVE GROWTH OS DASHBOARD */}
      <HeroEditorial
        onStartConversation={scrollToConsultation}
      />

      {/* 02: BUSINESS CHALLENGES — THE 5 CORE DISCONNECTS OF TRADITIONAL MARKETING */}
      <BusinessChallenges
        onExploreSystem={scrollToSystem}
      />

      {/* 03: THE SM NEXTGEN GROWTH SYSTEM (DISTINCTIVE DARK SECTION) */}
      <div id="growth-system">
        <GrowthSystemDark
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* 04: SERVICES GRID — 8 REFINED STRATEGIC GROWTH DISCIPLINES */}
      <ServicesEditorial />

      {/* 05: GROWTH OS SPOTLIGHT — EMERGING SAAS SOFTWARE ECOSYSTEM */}
      <GrowthOSShowcase />

      {/* 06: CASE STUDIES & VERIFIABLE BLUEPRINTS */}
      <CaseStudiesProof
        onExploreCase={scrollToConsultation}
      />

      {/* 07: HOW WE WORK — 6-STAGE VISUAL METHODOLOGY */}
      <HowWeWorkProcess
        onStartConversation={scrollToConsultation}
      />

      {/* 08: ABOUT & LEADERSHIP — FOUNDER DIRECT ENGAGEMENT & PRINCIPLES */}
      <AboutLeadership
        onStartConversation={scrollToConsultation}
      />

      {/* 09: FINAL CONSULTATION INTAKE & DIRECT WHATSAPP */}
      <FinalConsultationCTA />

    </main>
  );
}