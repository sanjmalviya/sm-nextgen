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
    id: "apna-loanwala",
    sector: "Financial Services · Loan Consultancy",
    clientModel: "Apna Loanwala",
    location: "Udaipur, Rajasthan",
    badge: "Client Work",
    isClientWork: true,
    title: "Making Loan Information Easier to Understand",
    icon: Laptop,
    challenge: "Loan services can be difficult for potential customers to understand. People often have questions about eligibility, documentation, loan types and rejection reasons before they are ready to enquire.",
    approach: "Build clearer, more approachable communication around loan-related services and common customer questions.",
    work: "Social media content planning, educational loan-related content, creative design and communication, vehicle & business loan campaigns, and enquiry-focused messaging.",
    outcome: "A more informative digital presence that helps potential customers understand available loan services and take the next step with greater clarity.",
    image: "/images/From Friction to Conversion.png",
    alt: "Diagram illustrating clearer communication for loan enquiry journey",
  },
  {
    id: "tbh-events",
    sector: "Event Management · Weddings · Corporate Events",
    clientModel: "TBH Events — The Black Horse Entertainment",
    location: "Udaipur, Rajasthan",
    badge: "Client Work",
    isClientWork: true,
    title: "Presenting Event Experiences Through Premium Visual Storytelling",
    icon: ShoppingBag,
    challenge: "An event management brand needs to communicate more than event decoration. Potential customers need to see its ability to manage the complete experience — from planning and hospitality to production and execution.",
    approach: "Build a premium visual content direction that showcases the range of services and creates a stronger brand impression.",
    work: "Social media content planning, premium event creatives and carousel content, cinematic showcase concepts, destination wedding communication, and corporate event storytelling.",
    outcome: "A clearer presentation of the brand's service capabilities, designed to attract attention from wedding, destination wedding and corporate event audiences.",
    image: "/images/From Outdated to Conversion-Ready.png",
    alt: "Diagram illustrating premium visual storytelling for event management",
  },
  {
    id: "ck-homestay",
    sector: "Hospitality · Homestay · Tourism",
    clientModel: "CK Homestay, Udaipur",
    location: "Udaipur, Rajasthan",
    badge: "Concept Case Study",
    isClientWork: false,
    title: "Turning a Homestay's Online Presence into a Booking Journey",
    icon: Stethoscope,
    challenge: "A beautiful homestay has comfortable rooms and a good guest experience, but depends heavily on third-party booking platforms. Local search visibility is limited and enquiries arrive through scattered channels.",
    approach: "Make it easier for travellers to discover the property, understand the experience and enquire directly.",
    work: "Hospitality-focused website, room galleries, local SEO targeting Udaipur travel searches, Google Business Profile optimization, and WhatsApp booking flow.",
    outcome: "A stronger direct discovery and enquiry journey, with less dependence on scattered communication channels.",
    image: "/images/From Stagnant Growth to Sustainable Success.png",
    alt: "Diagram illustrating transition to direct booking journeys",
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
              OUR WORK &amp; BUSINESS EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-3">
              Real Business Challenges. <br />
              <span className="text-[#0097B2]">
                Thoughtful Strategies. Measurable Outcomes.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Every business has different growth opportunities. We combine strategic thinking and practical execution to address the challenges that matter.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-subheading font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider shrink-0"
          >
            <span>Explore Our Work</span>
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
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        study.isClientWork
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                          : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10"
                      }`}
                    >
                      {study.badge}
                    </span>
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
                    {study.clientModel} · {study.location}
                  </p>

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
                      <strong className="text-slate-900 dark:text-white font-medium">Business Value: </strong>
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
