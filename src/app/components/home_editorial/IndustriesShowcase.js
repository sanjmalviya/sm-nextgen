"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Building2, ShoppingCart, Laptop, Stethoscope, 
  GraduationCap, Home, Hotel, ArrowRight, Factory
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES_DATA = [
  {
    id: "ecommerce",
    num: "01",
    sector: "D2C & E-commerce",
    title: "D2C & E-commerce",
    desc: "Acquisition, conversion, repeat purchases and profitable customer growth.",
    image: "/images/Modern Skincare Brand Workspace.png",
    alt: "Modern skincare cosmetics workstation and clean brand packaging",
    icon: ShoppingCart,
  },
  {
    id: "saas",
    num: "02",
    sector: "B2B & SaaS",
    title: "B2B & SaaS",
    desc: "Positioning, demand generation, qualified pipeline and sales enablement.",
    image: "/images/Focused Work in a Modern Office.png",
    alt: "B2B SaaS strategic workstation with laptop and growth analytics",
    icon: Laptop,
  },
  {
    id: "healthcare",
    num: "03",
    sector: "Healthcare & Clinics",
    title: "Healthcare & Clinics",
    desc: "Local visibility, patient enquiries, appointment journeys and reputation.",
    image: "/images/Modern Clinic Consultation.png",
    alt: "Doctor and patient consultation in a modern bright medical clinic",
    icon: Stethoscope,
  },
  {
    id: "hospitality",
    num: "04",
    sector: "Hospitality & Travel",
    title: "Hospitality & Travel",
    desc: "Digital discovery, direct enquiries, bookings and customer experience.",
    image: "/images/Warm Resort Welcome at Reception.png",
    alt: "Luxury resort reception desk welcoming guests with warm hospitality",
    icon: Hotel,
  },
  {
    id: "realestate",
    num: "05",
    sector: "Real Estate",
    title: "Real Estate",
    desc: "Project visibility, qualified property enquiries and lead follow-up.",
    image: "/images/Modern Home Design Consultation.png",
    alt: "Architects and clients reviewing blueprints and interior design samples",
    icon: Home,
  },
  {
    id: "education",
    num: "06",
    sector: "Education & Professional Services",
    title: "Education & Professional Services",
    desc: "Brand authority, enquiry generation and conversion-focused digital experiences.",
    image: "/images/Business Management Classroom Presentation.png",
    alt: "Modern business management classroom presentation and student collaboration",
    icon: GraduationCap,
  },
  {
    id: "manufacturing",
    num: "07",
    sector: "Manufacturing & Industrial Businesses",
    title: "Manufacturing & Industrial Businesses",
    desc: "B2B visibility, product discovery, enquiry systems and digital infrastructure.",
    image: "/images/Industrial Factory Floor Teamwork.png",
    alt: "Engineers and factory floor managers collaborating in a modern clean manufacturing plant",
    icon: Factory,
  },
];

export default function IndustriesShowcase() {
  const cardsGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (cardsGridRef.current) {
      const cards = Array.from(cardsGridRef.current.children);
      cards.forEach((card, idx) => {
        const isOdd = idx % 2 === 1;
        gsap.fromTo(
          card,
          {
            y: 40,
            rotateY: isOdd ? 5 : -5,
            opacity: 0,
            transformPerspective: 1000,
          },
          {
            y: 0,
            rotateY: 0,
            opacity: 1,
            duration: 0.7,
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
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030D1A] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
              GROWTH ISN'T ONE-SIZE-FITS-ALL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-3">
              Different Industries. <br />
              <span className="text-[#0097B2]">
                Different Growth Challenges.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              The way a customer discovers, evaluates and chooses a business varies across industries. Our approach adapts to the business model, buying behaviour and commercial priorities.
            </p>
          </div>

          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-subheading font-bold uppercase tracking-wider shrink-0 transition shadow-xs"
          >
            <span>Discuss Your Industry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 7 Systematic Industry Cards with 3D Depth Reveals */}
        <div
          ref={cardsGridRef}
          style={{ perspective: "1000px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.id}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-2xl bg-slate-50/80 dark:bg-[#071A30]/60 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-colors p-5 sm:p-6 flex flex-col justify-between shadow-xs will-change-transform"
              >
                <div>
                  {/* Header Bar */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] dark:text-cyan-300">
                      {ind.num} — {ind.sector}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-white/10 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-[#0B2545] dark:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Systematic Aspect Frame for Real Vertical Photography */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-black/40 border border-slate-200/60 dark:border-white/5">
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2 leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <a
                  href="#consultation"
                  className="pt-3 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-xs font-subheading font-bold text-[#0097B2] hover:underline"
                >
                  <span>Discuss Your Industry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
