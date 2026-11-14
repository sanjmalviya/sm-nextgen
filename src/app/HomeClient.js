"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroEditorial from "./components/home_editorial/HeroEditorial";
import BusinessChallenges from "./components/home_editorial/BusinessChallenges";
import GrowthSystemDark from "./components/home_editorial/GrowthSystemDark";
import HowWeWorkProcess from "./components/home_editorial/HowWeWorkProcess";
import ServicesEditorial from "./components/home_editorial/ServicesEditorial";
import IndustriesShowcase from "./components/home_editorial/IndustriesShowcase";
import DashboardsShowcase from "./components/home_editorial/DashboardsShowcase";
import CaseStudiesProof from "./components/home_editorial/CaseStudiesProof";
import GrowthOSShowcase from "./components/home_editorial/GrowthOSShowcase";
import AboutLeadership from "./components/home_editorial/AboutLeadership";
import FinalConsultationCTA from "./components/home_editorial/FinalConsultationCTA";

gsap.registerPlugin(ScrollTrigger);

export default function HomeClient() {
  // Initialize Lenis Smooth Scrolling synchronized with GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.35,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

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
      
      {/* SECTION 01 — HERO */}
      <HeroEditorial
        onStartConversation={scrollToConsultation}
      />

      {/* SECTION 02 — THE GROWTH PROBLEM */}
      <BusinessChallenges
        onExploreSystem={scrollToSystem}
      />

      {/* SECTION 03 — THE CONNECTED GROWTH SYSTEM */}
      <div id="growth-system">
        <GrowthSystemDark
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* SECTION 04 — OUR CAPABILITIES */}
      <div id="capabilities">
        <ServicesEditorial />
      </div>

      {/* SECTION 05 — HOW WE GROW */}
      <div id="how-we-work">
        <HowWeWorkProcess
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* SECTION 06 — GROWTH IN ACTION */}
      <div id="case-studies">
        <CaseStudiesProof
          onExploreCase={scrollToConsultation}
        />
      </div>

      {/* SECTION 07 — INDUSTRIES WE SUPPORT */}
      <div id="industries">
        <IndustriesShowcase />
      </div>

      {/* SECTION 08 — BUSINESS INTELLIGENCE */}
      <div id="dashboards">
        <DashboardsShowcase />
      </div>

      {/* SECTION 09 — GROWTH OS */}
      <div id="growth-os">
        <GrowthOSShowcase />
      </div>

      {/* SECTION 10 — THE PARTNERSHIP */}
      <div id="about">
        <AboutLeadership
          onStartConversation={scrollToConsultation}
        />
      </div>

      {/* SECTION 11 — FINAL CTA */}
      <FinalConsultationCTA />

    </main>
  );
}
