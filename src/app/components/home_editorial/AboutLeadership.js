"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, MessageSquare, ArrowRight, Users, Clock, Lock, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutLeadership({ onStartConversation }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 2-column photo cards with subtle 3D perspective
      gsap.fromTo(
        ".about-photo-card",
        { y: 40, opacity: 0, rotateX: 6, transformPerspective: 1000 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-photo-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 4 Commercial Guarantees cascade
      gsap.fromTo(
        ".guarantee-card",
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".guarantees-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    const msg = "Hi SM NextGen Team, I would like to explore a strategic growth partnership for my business.";
    window.open(`https://wa.me/917073538077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const PARTNERSHIP_PILLARS = [
    {
      num: "01",
      title: "Business-First Thinking",
      desc: "We begin with your business goals, not a predefined service package.",
      icon: Clock,
    },
    {
      num: "02",
      title: "Connected Execution",
      desc: "Marketing, digital experience, technology and automation work towards shared objectives.",
      icon: Users,
    },
    {
      num: "03",
      title: "Clear Communication",
      desc: "Understand what is being done, why it matters and what comes next.",
      icon: BarChart3,
    },
    {
      num: "04",
      title: "Continuous Improvement",
      desc: "Review performance, identify opportunities and refine the approach as your business evolves.",
      icon: Lock,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/10 border border-[#0097B2]/20 text-[#0097B2] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MORE THAN A SERVICE PROVIDER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight mb-4 leading-tight">
            A Partner That Understands the{" "}
            <span className="text-[#0097B2]">
              Bigger Picture.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-2">
            Your marketing, technology and business operations shouldn't work against each other.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            We work with businesses to understand their priorities, identify growth opportunities and bring the right capabilities together.
          </p>
        </div>

        {/* Partnership & Team Trust Visual Gallery - Systematic 2-Column Grid */}
        <div className="about-photo-grid grid md:grid-cols-2 gap-6 mb-12" style={{ perspective: "1000px" }}>
          <div className="about-photo-card rounded-2xl bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs will-change-transform">
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-black/40">
              <Image
                src="/images/Analytics Meeting in a Modern Office.png"
                alt="Strategic growth advisor reviewing live business performance analytics with a client in a modern glass office"
                width={1672}
                height={941}
                quality={85}
                sizes="(max-width: 768px) 100vw, 580px"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-4 px-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
                Collaborative Advisory
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                Strategic Reviews Tied to Business Priorities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Regular reviews connecting activities directly to commercial goals, customer acquisition, and margin growth.
              </p>
            </div>
          </div>

          <div className="about-photo-card rounded-2xl bg-[#F8FAFC] dark:bg-[#0B2545]/50 border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-xs will-change-transform">
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-black/40">
              <Image
                src="/images/Collaborative Strategy Meeting with Analytics.png"
                alt="Collaborative strategy meeting with in-house developers, growth marketers, and analytics team"
                width={1672}
                height={941}
                quality={85}
                sizes="(max-width: 768px) 100vw, 580px"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-4 px-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0097B2] block mb-1">
                Connected Execution
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2545] dark:text-white mb-1">
                Cross-Disciplinary Teams Working Towards One Goal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Strategy, marketing, tech, and automation teams collaborating under one roof with shared accountability.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Partnership Principles */}
        <div className="guarantees-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PARTNERSHIP_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="guarantee-card p-5 rounded-xl bg-white dark:bg-[#0B2545]/30 border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-colors space-y-2 will-change-transform"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#0097B2]/10 text-[#0097B2] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {item.num}
                  </span>
                </div>
                <h4 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement & Quick Contact Action Bar */}
        <div className="rounded-xl bg-[#0B2545] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              Commercial Partnership
            </span>
            <p className="text-sm sm:text-base font-heading font-bold text-white">
              We're here to help you build a stronger business — not simply add another vendor to manage.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-subheading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>

            {onStartConversation && (
              <button
                type="button"
                onClick={onStartConversation}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-subheading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Start a Growth Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
