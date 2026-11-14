"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Compass, TrendingUp, Laptop, Bot, BarChart3, Scale, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    num: "01",
    title: "Growth Strategy",
    desc: "Build a clear direction before investing in execution.",
    deliverables: [
      "Business Growth Strategy",
      "Market & Competitor Research",
      "Brand Positioning",
      "Customer & Offer Strategy",
      "Growth Audits & Roadmaps"
    ],
    ctaText: "Explore Growth Strategy",
    icon: Compass,
    image: "/images/Teal Brand Studio Moodboard.png",
    alt: "Brand studio moodboard representing strategy and creative positioning",
    href: "/services/brand-strategy-positioning",
  },
  {
    num: "02",
    title: "Marketing & Demand Generation",
    desc: "Attract the right audience and create consistent demand.",
    deliverables: [
      "Search Engine Optimization",
      "Performance Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Lead Generation",
      "Email & WhatsApp Marketing"
    ],
    ctaText: "Explore Marketing",
    icon: TrendingUp,
    image: "/images/AI-Powered Answer Discovery Workspace.png",
    alt: "AI-powered answer discovery and search workspace",
    href: "/services/search-engine-optimization-seo",
  },
  {
    num: "03",
    title: "Brand & Digital Experience",
    desc: "Create experiences that communicate value and build trust.",
    deliverables: [
      "Brand Identity & Branding",
      "Website Design & Development",
      "Landing Pages & Funnels",
      "E-commerce Development",
      "UI/UX Design",
      "Conversion Optimization"
    ],
    ctaText: "Explore Digital Experience",
    icon: Laptop,
    image: "/images/Responsive Architecture Website Workspace.png",
    alt: "Responsive web architecture and modern design workspace",
    href: "/services/website-development",
  },
  {
    num: "04",
    title: "Conversion & Revenue",
    desc: "Improve the journey from initial interest to paying customer.",
    deliverables: [
      "Conversion Rate Optimization",
      "Lead Management",
      "Sales Funnel Optimization",
      "Customer Journey Improvement",
      "Follow-up Systems",
      "Retention Strategies"
    ],
    ctaText: "Explore Conversion Systems",
    icon: BarChart3,
    image: "/images/Automated Messaging Workflow Dashboard.png",
    alt: "Automated messaging workflow dashboard representing intelligent customer routing",
    href: "/services/sales-funnel-conversion",
  },
  {
    num: "05",
    title: "AI & Automation",
    desc: "Make business processes smarter and more efficient.",
    deliverables: [
      "AI Business Workflows",
      "WhatsApp Automation",
      "AI Chatbots",
      "Lead Routing & Qualification",
      "CRM Automation",
      "Workflow Integrations"
    ],
    ctaText: "Explore AI & Automation",
    icon: Bot,
    image: "/images/Teal Analytics Workspace Dashboard.png",
    alt: "Teal analytics workspace dashboard showcasing attribution graphs",
    href: "/services/ai-business-automation-systems",
  },
  {
    num: "06",
    title: "Data & Business Intelligence",
    desc: "Turn business information into better decisions.",
    deliverables: [
      "Marketing Analytics",
      "Performance Dashboards",
      "ROI & ROAS Tracking",
      "Customer Acquisition Analysis",
      "Attribution & Reporting",
      "Business Intelligence"
    ],
    ctaText: "Explore Business Intelligence",
    icon: Scale,
    image: "/images/Modern Operations Dashboard Workspace.png",
    alt: "Modern operations dashboard workspace showcasing workflow governance",
    href: "/services/ai-data-analytics-business-intelligence",
  },
];

export default function ServicesEditorial() {
  const hubBannerRef = useRef(null);
  const cardsGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Central Hub Banner Scale & Tilt Entrance
    if (hubBannerRef.current) {
      gsap.fromTo(
        hubBannerRef.current,
        {
          scale: 0.93,
          rotateX: 8,
          opacity: 0.85,
          transformPerspective: 1200,
        },
        {
          scale: 1,
          rotateX: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: hubBannerRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // 2. 6 Capability Cards: 3D Depth reveals with alternating rotateY
    if (cardsGridRef.current) {
      const cards = Array.from(cardsGridRef.current.children);
      cards.forEach((card, idx) => {
        const isOdd = idx % 2 === 1;
        gsap.fromTo(
          card,
          {
            y: 40,
            rotateY: isOdd ? 6 : -6,
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
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block mb-2">
            ONE PARTNER. CONNECTED CAPABILITIES.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-tight mb-4">
            The Right Capabilities. <br />
            <span className="text-[#0097B2]">
              Built Around Your Business.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed mb-2">
            We bring together the strategic, creative and technical capabilities required to solve business challenges and support your next stage of growth.
          </p>
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white text-xs font-bold uppercase tracking-wider transition shadow-xs"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Growth Philosophy Visual Hub Feature with 3D Scroll Reveal */}
        <div style={{ perspective: "1200px" }} className="w-full">
          <div
            ref={hubBannerRef}
            style={{ transformStyle: "preserve-3d" }}
            className="mb-12 rounded-2xl bg-white dark:bg-[#0B2545]/50 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-xs grid lg:grid-cols-12 gap-8 items-center will-change-transform"
          >
            <div className="lg:col-span-5">
              <div className="max-w-xs sm:max-w-sm mx-auto rounded-xl bg-slate-50 dark:bg-black/20 p-2.5 border border-slate-100 dark:border-white/5">
                <Image
                  src="/images/Isometric Teal Growth Strategy Hub.png"
                  alt="Isometric hub illustrating how business strategy, marketing, software engineering, AI automation, and data analytics converge around measurable growth"
                  width={1122}
                  height={1402}
                  quality={85}
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="w-full h-auto block rounded-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[#0097B2] uppercase tracking-wider block">
                The Architecture of Measurable Growth
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B2545] dark:text-white leading-tight">
                One Unified Growth Engine Instead of 6 Disconnected Vendors.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                When brand strategy feeds web engineering, web platforms feed high-intent demand, and AI automates inquiry response, acquisition costs fall and conversion velocity compounds.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Single Point of Strategic Accountability</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Zero Handoff Friction Between Teams</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Unified Attribution &amp; Revenue Metrics</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0" />
                  <span>Continuous Optimization Cycles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Systematic Capability Cards with 3D Depth Reveals */}
        <div
          ref={cardsGridRef}
          style={{ perspective: "1000px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-colors p-6 flex flex-col justify-between shadow-xs will-change-transform"
              >
                <div>
                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0097B2] dark:text-cyan-400">
                      PILLAR {cap.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#0B2545] dark:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Image Preview in Systematic Frame */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-black/30 border border-slate-100 dark:border-white/5">
                    <Image
                      src={cap.image}
                      alt={cap.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-2 leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
                    {cap.desc}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="space-y-1.5 mb-5">
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={cap.href}
                  className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-subheading font-bold text-[#0097B2] hover:underline"
                >
                  <span>{cap.ctaText || "Explore Capability"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Capability: Business Operations Support */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#0B2545]/40 border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
              Additional Capability
            </span>
            <h4 className="text-base font-bold font-heading text-[#0B2545] dark:text-white">
              Business Operations Support
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-light mt-0.5 max-w-2xl leading-relaxed">
              Where relevant, we also support business setup, GST, accounting and compliance requirements through appropriate professional services and partners.
            </p>
          </div>
          <Link
            href="/services/business-compliance-management"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-[#0B2545] dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition"
          >
            <span>Explore Operations</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0097B2]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
