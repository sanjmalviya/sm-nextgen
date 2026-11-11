"use client";

import React from "react";
import HeroEditorial from "./components/home_editorial/HeroEditorial";
import BusinessChallenges from "./components/home_editorial/BusinessChallenges";
import GrowthSystemDark from "./components/home_editorial/GrowthSystemDark";
import ServicesEditorial from "./components/home_editorial/ServicesEditorial";
import HowWeWorkProcess from "./components/home_editorial/HowWeWorkProcess";
import CustomerJourneyDiagram from "./components/CustomerJourneyDiagram";
import DashboardsShowcase from "./components/home_editorial/DashboardsShowcase";
import CaseStudiesProof from "./components/home_editorial/CaseStudiesProof";
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
    <main className="relative w-full z-10 overflow-x-hidden min-h-screen bg-white dark:bg-[#030D1A] font-body text-[#0B2545] dark:text-[#E6EEF2] selection:bg-[#0097B2] selection:text-white transition-colors duration-200">
      
      {/* SECTION 1 — HERO: POSITIONING, SKY BACKDROP & UNIFIED DASHBOARD PREVIEW */}
      <HeroEditorial
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 2 — THE BUSINESS PROBLEM & OPPORTUNITY */}
      <BusinessChallenges
        onExploreSystem={scrollToSystem}
      />

      {/* SECTION 3 — THE SM NEXTGEN GROWTH ECOSYSTEM & CONNECTED SYSTEM */}
      <div id="growth-system">
        <GrowthSystemDark
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* SECTION 4 — GROWTH PHILOSOPHY & STRATEGIC CAPABILITY PILLARS */}
      <ServicesEditorial />

      {/* SECTION 5 — BUSINESS GROWTH PROCESS: 6-STAGE ORBITAL METHOD */}
      <HowWeWorkProcess
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 6 — CUSTOMER JOURNEY: DISCOVERY TO LOYALTY PIPELINE */}
      <CustomerJourneyDiagram />

      {/* SECTION 7 — SUPPORTING REPORTING & ANALYTICS DASHBOARD PREVIEWS */}
      <DashboardsShowcase />

      {/* SECTION 8 — EVIDENCE, CASE BLUEPRINTS & HUMAN STORYTELLING */}
      <CaseStudiesProof
        onExploreCase={scrollToConsultation}
      />

      {/* SECTION 9 — GROWTH OS: SOFTWARE ECOSYSTEM SPOTLIGHT */}
      <GrowthOSShowcase />

      {/* SECTION 10 — DIRECT LEADERSHIP, STRATEGIC PARTNERSHIP & TEAM TRUST */}
      <AboutLeadership
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 11 — FINAL CTA: "LET'S FIND YOUR NEXT GROWTH OPPORTUNITY" */}
      <FinalConsultationCTA />

    </main>
  );
}
