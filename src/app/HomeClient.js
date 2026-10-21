"use client";
import React from "react";
import HeroEditorial from "./components/home_editorial/HeroEditorial";
import BusinessChallenges from "./components/home_editorial/BusinessChallenges";
import GrowthSystemDark from "./components/home_editorial/GrowthSystemDark";
import ServicesEditorial from "./components/home_editorial/ServicesEditorial";
import HowWeWorkProcess from "./components/home_editorial/HowWeWorkProcess";
import CaseStudiesProof from "./components/home_editorial/CaseStudiesProof";
import HomeGrowthTools from "./components/home_editorial/HomeGrowthTools";
import GrowthOSShowcase from "./components/home_editorial/GrowthOSShowcase";
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
      
      {/* SECTION 1 — HERO: POSITIONING, VALUE PROP, 7-STEP FLOW & TELEMETRY MOCKUP */}
      <HeroEditorial
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 2 — THE BUSINESS PROBLEM: 4-5 CORE DISCONNECTS OF TRADITIONAL MARKETING */}
      <BusinessChallenges
        onExploreSystem={scrollToSystem}
      />

      {/* SECTION 3 — THE SM NEXTGEN GROWTH SYSTEM (DISTINCTIVE DARK SECTION) */}
      <div id="growth-system">
        <GrowthSystemDark
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* SECTION 4 — CAPABILITIES: 8 CONNECTED GROWTH LEVERS */}
      <ServicesEditorial />

      {/* SECTION 5 — HOW WE GROW: 6-STAGE VISUAL METHODOLOGY (DISCOVER -> SCALE) */}
      <HowWeWorkProcess
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 6 — EVIDENCE AND CASE STUDIES: AUTHENTIC BLUEPRINTS & LIFTS */}
      <CaseStudiesProof
        onExploreCase={scrollToConsultation}
      />

      {/* SECTION 7 — GROWTH TOOLS: INTERACTIVE CALCULATORS & GROWTH AUDITS */}
      <HomeGrowthTools
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 8 — GROWTH OS: SOFTWARE ECOSYSTEM SPOTLIGHT (GBP LIVE V1.0) */}
      <GrowthOSShowcase />

      {/* SECTION 9 — WHY SM NEXTGEN: LEADERSHIP, FOUNDER MANIFESTO & 4-HR SLA */}
      <AboutLeadership
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 10 — FINAL CTA: "LET'S FIND YOUR NEXT GROWTH OPPORTUNITY" */}
      <FinalConsultationCTA />

    </main>
  );
}