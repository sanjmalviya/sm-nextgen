"use client";
import React from "react";
import { CheckCircle2, ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import Card3DTilt from "../3d/Card3DTilt";

export default function CleanWhyUs({ onStartConversation }) {
  const highlights = [
    { title: "Engineering-Grade Systems", desc: "No low-code shortcuts. We engineer high-performance platforms using Next.js, Node.js, and cloud infrastructure." },
    { title: "Outcome-Driven Partnership", desc: "We align directly with business revenue, customer acquisition cost, and deal conversion yield." },
    { title: "Full-Stack Integration", desc: "From brand positioning and paid acquisition funnels to custom AI booking agents and financial analytics." },
    { title: "24/7 Global Delivery", desc: "Serving Indian and international enterprises across US, UK, UAE, and APAC with continuous velocity." }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#081b33] text-[#0B2545] dark:text-[#E6EEF2] transition-colors duration-300 border-t border-[#0B2545]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Visual Card with Highlights */}
          <div className="lg:col-span-6">
            <Card3DTilt className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#0097B2]/10 flex items-center justify-center text-[#0097B2]">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] font-semibold">
                  PROPRIETARY GROWTH ARCHITECTURE
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mb-6">
                Why Traditional Vendors Fail vs. How We Scale
              </h3>

              <div className="space-y-5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0097B2] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold font-heading text-[#0B2545] dark:text-white mb-0.5">
                        {h.title}
                      </div>
                      <div className="text-xs text-[#0B2545]/70 dark:text-[#E6EEF2]/70 font-body leading-relaxed">
                        {h.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Quly.in Style Value Proposition */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Why Choose SM NextGen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#0B2545] dark:text-white leading-[1.2] mb-6">
              We Provide Prominent IT, Growth & Software Solutions for Your Expansion.
            </h2>

            <p className="text-sm sm:text-base text-[#0B2545]/75 dark:text-[#E6EEF2]/80 font-body leading-relaxed mb-6" style={{ textAlign: "justify" }}>
              SM NextGen is a premier technology and business growth company. With an experienced team of software architects, acquisition strategists, and automation engineers, we build high-availability digital platforms that strengthen business infrastructure and provide a lasting competitive advantage.
            </p>

            <p className="text-sm sm:text-base text-[#0B2545]/75 dark:text-[#E6EEF2]/80 font-body leading-relaxed mb-8" style={{ textAlign: "justify" }}>
              Our engineering team specializes in modern tech stacks—including Next.js, React, Node.js, Python, conversational AI agents, and server-side attribution systems. We replace disjointed freelance tasks with a cohesive, scalable growth engine that compounds revenue.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onStartConversation}
                className="px-7 py-3.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-semibold text-sm tracking-wide flex items-center gap-2.5 transition-all shadow-md shadow-[#0097B2]/20 cursor-pointer"
              >
                <span>Partner with SM NextGen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
