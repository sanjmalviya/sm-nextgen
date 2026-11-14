"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Unplug, Clock, EyeOff, Layers, ArrowRight, Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessChallenges({ onExploreSystem }) {
  const imageFrameRef = useRef(null);
  const frictionListRef = useRef(null);

  const frictionPoints = [
    {
      icon: <Unplug className="w-5 h-5 text-[#0097B2]" />,
      num: "01",
      title: "Disconnected Marketing",
      desc: "Your marketing channels generate activity, but they aren't working towards one clear business objective."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0097B2]" />,
      num: "02",
      title: "Leads Without Follow-ups",
      desc: "Potential customers show interest, but slow responses and disconnected processes create missed opportunities."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#0097B2]" />,
      num: "03",
      title: "Websites That Don't Convert",
      desc: "Visitors arrive, but confusing experiences and weak conversion journeys prevent them from taking action."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0097B2]" />,
      num: "04",
      title: "Unclear Performance",
      desc: "You invest in marketing but lack a clear understanding of which activities contribute to genuine business results."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0097B2]" />,
      num: "05",
      title: "Manual Operations",
      desc: "Repetitive tasks consume time that could be spent on customers, strategy and business development."
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. 3D Z-Axis reveal on Decline-to-Growth Illustration
    if (imageFrameRef.current) {
      gsap.fromTo(
        imageFrameRef.current,
        {
          rotateX: 8,
          scale: 0.94,
          opacity: 0.8,
          transformPerspective: 1000,
        },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageFrameRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // 2. Cascade reveal on friction cards
    if (frictionListRef.current) {
      const cards = frictionListRef.current.children;
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: frictionListRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-subheading font-bold text-[#0097B2] uppercase tracking-wider">
            THE PROBLEM ISN'T ALWAYS YOUR MARKETING.
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight leading-[1.15]">
              Growth Gets Harder When Every Part{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-cyan-500">
                Works Separately.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
              More traffic doesn't automatically mean more customers. More leads don't guarantee more sales. And more tools don't necessarily create better systems.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Growth requires more than individual activities. It requires the right parts working together.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white mr-1">Disconnected Activities:</strong>
                  <span>Siloed tools, manual follow-ups, and unmeasured spend.</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white mr-1">SM NextGen Connected System:</strong>
                  <span>Strategy, marketing, tech, conversion, and revenue working in unison.</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onExploreSystem}
              className="inline-flex items-center gap-2 text-xs font-subheading font-bold text-[#0097B2] dark:text-cyan-400 hover:underline uppercase tracking-wider pt-1 cursor-pointer"
            >
              <span>Explore Connected System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            style={{ perspective: "1000px" }}
            className="lg:col-span-5"
          >
            <div
              ref={imageFrameRef}
              style={{ transformStyle: "preserve-3d" }}
              className="max-w-md mx-auto rounded-3xl bg-[#E6EEF2]/60 dark:bg-[#0B2545] border border-slate-200/90 dark:border-white/10 p-4 sm:p-5 shadow-lg will-change-transform"
            >
              <div className="rounded-2xl overflow-hidden bg-white shadow-xs">
                <Image
                  src="/images/From Decline to Digital Growth.png"
                  alt="Isometric illustration showing transformation from disconnected business decline to a structured digital growth ecosystem"
                  width={1122}
                  height={1402}
                  quality={85}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="w-full h-auto block"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-subheading font-semibold text-[#0B2545] dark:text-white">
                  Disconnected → Connected Growth
                </span>
                <span className="font-mono text-[11px] font-bold text-[#0097B2]">System Shift</span>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={frictionListRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8"
        >
          {frictionPoints.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-[#0097B2]/40 transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  {item.num}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#0B2545] dark:text-white font-subheading">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center max-w-2xl mx-auto pt-4 border-t border-slate-100 dark:border-white/5 space-y-1">
          <p className="text-sm font-semibold text-[#0B2545] dark:text-white font-heading">
            Your business doesn't need another disconnected service provider.
          </p>
          <p className="text-xs sm:text-sm text-[#0097B2] font-medium">
            It needs a system where every important activity works towards growth.
          </p>
        </div>
      </div>
    </section>
  );
}
