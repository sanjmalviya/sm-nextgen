"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Laptop, ShoppingBag, Stethoscope, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CASE_STUDIES = [
  {
    id: "b2b-saas",
    sector: "B2B & SaaS",
    clientModel: "Enterprise Logistics Platform",
    title: "Predictable Inbound Pipeline & Lower CAC",
    icon: Laptop,
    metrics: [
      { label: "Pipeline Velocity", value: "+48%" },
      { label: "CAC Reduction", value: "-26%" },
      { label: "Lead Response", value: "< 4 Mins" }
    ],
    challenge: "Manual screening delayed follow-ups and dropped high-intent demo requests.",
    approach: "Identified qualification bottlenecks and implemented structured lead scoring with immediate pipeline routing.",
    work: "Interactive ROI funnel, automated WhatsApp & CRM qualification workflows, and B2B intent search campaigns.",
    outcome: "Shortened sales cycles by 48% and lifted qualified demo completions with a 26% reduction in customer acquisition cost.",
    image: "/images/From Friction to Conversion.png",
    alt: "Diagram illustrating conversion transformation from friction to smooth pipeline flow",
  },
  {
    id: "d2c-commerce",
    sector: "D2C & E-commerce",
    clientModel: "Lifestyle & Skincare Brand",
    title: "Profitable Ad Scaling & Fast Checkout",
    icon: ShoppingBag,
    metrics: [
      { label: "Checkout Conv.", value: "+38%" },
      { label: "Repeat Orders", value: "+26%" },
      { label: "Blended ROAS", value: "3.4x" }
    ],
    challenge: "Slow mobile pages and fragmented retargeting drove high cart abandonment and unsustainable acquisition costs.",
    approach: "Redesigned customer journey around sub-second mobile speed, one-click checkout, and automated retention loops.",
    work: "High-speed Next.js storefront, 1-click checkout funnels, Meta performance ads, and WhatsApp repeat purchase triggers.",
    outcome: "Achieved a +38% checkout conversion lift and turned one-time buyers into repeat customers at 3.4x blended ROAS.",
    image: "/images/From Outdated to Conversion-Ready.png",
    alt: "Diagram illustrating transition from outdated web store to high conversion platform",
  },
  {
    id: "healthcare",
    sector: "Healthcare & Clinics",
    clientModel: "Multi-Location Clinic Group",
    title: "Google 3-Pack Visibility & Auto Booking",
    icon: Stethoscope,
    metrics: [
      { label: "Consultations", value: "2.6x" },
      { label: "No-Shows", value: "-65%" },
      { label: "Maps Rank", value: "Top 3" }
    ],
    challenge: "Low local search visibility and manual phone booking led to missed patient inquiries and high appointment no-shows.",
    approach: "Optimized Google Business Profiles across locations with friction-free digital appointment scheduling and automated reminders.",
    work: "Local SEO & Google 3-Pack optimization, online appointment journeys, and automated WhatsApp reminder loops.",
    outcome: "Generated 2.6x consultation growth, reduced patient no-shows by 65%, and established Top 3 local visibility across all branches.",
    image: "/images/From Stagnant Growth to Sustainable Success.png",
    alt: "Diagram illustrating transition from stagnant local growth to sustainable multi-location scaling",
  }
];

export default function CaseStudiesProof({ onExploreCase }) {
  const cardsGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (cardsGridRef.current) {
      const cards = Array.from(cardsGridRef.current.children);
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            y: 40,
            rotateX: 10,
            scale: 0.95,
            opacity: 0,
            transformPerspective: 1200,
          },
          {
            y: 0,
            rotateX: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            delay: idx * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
              SELECTED WORK &amp; CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-3">
              Real Business Challenges. <br />
              <span className="text-[#0097B2]">
                Thoughtful Strategies. Measurable Outcomes.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Every business has a different growth story. We focus on understanding the challenge, finding the opportunity and implementing the right solution.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-subheading font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Systematic 3-Column Case Studies Grid with 3D Rise */}
        <div
          ref={cardsGridRef}
          style={{ perspective: "1200px" }}
          className="grid lg:grid-cols-3 gap-6 mb-12"
        >
          {CASE_STUDIES.map((study) => {
            const Icon = study.icon;
            return (
              <article
                key={study.id}
                style={{ transformStyle: "preserve-3d" }}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-colors flex flex-col justify-between shadow-xs will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] dark:text-cyan-400">
                      {study.sector}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/10 border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#0B2545] dark:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Before & After Transformation Visual Preview */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-50 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                    <Image
                      src={study.image}
                      alt={study.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1.5 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    Industry / Business Type: {study.clientModel}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 mb-4 text-center">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="block text-sm sm:text-base font-extrabold text-[#0B2545] dark:text-white font-heading">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Solution Narrative Structured Format */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-4">
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Challenge: </strong>
                      {study.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Approach: </strong>
                      {study.approach}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Work: </strong>
                      {study.work}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-medium">The Outcome: </strong>
                      {study.outcome}
                    </div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0097B2] dark:text-cyan-400 hover:underline pt-3 border-t border-slate-100 dark:border-white/5"
                >
                  <span>Explore the Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-2xl mx-auto py-6 px-4 rounded-2xl bg-white dark:bg-[#0B2545]/30 border border-slate-200/80 dark:border-white/10">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-1">
            We believe good work should be understood through the problem solved and the impact created — not just the services delivered.
          </p>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
            Verified client projects and documented performance results.
          </span>
        </div>

        {/* Human Storytelling Section: Real Businesses & Daily Execution */}
        <div className="mt-12 pt-12 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-subheading font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
              Real Businesses · Real Ambition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-tight">
              Built for Teams Who Want Clarity Over Chaos.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
              <div className="rounded-xl overflow-hidden aspect-[3/2] bg-slate-100">
                <Image
                  src="/images/Indian Entrepreneurs in Action.png"
                  alt="Indian business leaders across D2C, healthcare, manufacturing, technology, and hospitality enterprises"
                  width={1536}
                  height={1024}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 px-1">
                <h4 className="text-base font-bold font-subheading text-[#0B2545] dark:text-white mb-1">
                  Tailored for Ambitious SMBs Across Industries
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Systems designed for how D2C brands, clinics, B2B SaaS, manufacturing, and hospitality teams grow.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs">
              <div className="rounded-xl overflow-hidden aspect-[3/2] bg-slate-100">
                <Image
                  src="/images/Focused Work in a Modern Office.png"
                  alt="Focused strategic execution at a modern workspace with laptop and growth plan"
                  width={1536}
                  height={1024}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-4 px-1">
                <h4 className="text-base font-bold font-subheading text-[#0B2545] dark:text-white mb-1">
                  Structured Execution, Less Noise
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Replace fragmented vendors with one clear roadmap, automated lead flow, and visible weekly progress.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
