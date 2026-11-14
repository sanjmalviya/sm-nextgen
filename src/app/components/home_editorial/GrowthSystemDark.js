"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Compass, Laptop, Target, Bot, BarChart3, 
  ArrowRight, CheckCircle2, ChevronRight, 
  RefreshCw, Cpu
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SYSTEM_NODES = [
  {
    id: "strategy",
    num: "01",
    title: "Strategy & Positioning",
    category: "FOUNDATION",
    icon: Compass,
    tagline: "Understand Your Market & Build a Stronger Position",
    desc: "Understand your market, define your ideal customers and build a stronger position before investing in scale.",
    deliverables: [
      "Market & Competitor Research",
      "Brand Positioning & Moat",
      "Ideal Customer Profile (ICP)",
      "Offer & Pricing Architecture"
    ],
    metric: "Foundation",
    metricValue: "Market Led"
  },
  {
    id: "brand-demand",
    num: "02",
    title: "Brand & Demand",
    category: "ACQUISITION",
    icon: Target,
    tagline: "Visibility, Trust & The Right Audience",
    desc: "Create visibility, establish trust and attract the right audience through coordinated marketing campaigns.",
    deliverables: [
      "Performance Meta & Google Ads",
      "SEO & Local Google 3-Pack",
      "Authority Content & Creative",
      "Lead Generation Channels"
    ],
    metric: "Demand",
    metricValue: "Consistent Reach"
  },
  {
    id: "digital-experience",
    num: "03",
    title: "Digital Experience",
    category: "EXPERIENCE",
    icon: Laptop,
    tagline: "Turn Visitor Interest Into Action",
    desc: "Build websites, platforms and customer journeys that turn interest into action with sub-second performance.",
    deliverables: [
      "Next.js High-Speed Web Platforms",
      "Frictionless Customer Journeys",
      "Mobile-First Responsive UI",
      "Conversion Landing Pages"
    ],
    metric: "Experience",
    metricValue: "Sub-Second"
  },
  {
    id: "conversion-revenue",
    num: "04",
    title: "Conversion & Revenue",
    category: "REVENUE",
    icon: BarChart3,
    tagline: "Improve Lead Quality & Close Rates",
    desc: "Improve lead quality, conversion rates, customer acquisition and sales opportunities across the funnel.",
    deliverables: [
      "Conversion Rate Optimization (CRO)",
      "Sales Funnel Development",
      "Lead Qualification & Routing",
      "CRM Implementation & Retention"
    ],
    metric: "Conversion",
    metricValue: "Higher Yield"
  },
  {
    id: "ai-automation",
    num: "05",
    title: "AI & Automation",
    category: "OPERATIONS",
    icon: Bot,
    tagline: "Smarter, Faster & Connected Workflows",
    desc: "Reduce repetitive work and connect your marketing, customer communication and business workflows.",
    deliverables: [
      "AI-Powered Workflows",
      "WhatsApp Cloud Automation",
      "Lead Routing & Instant Follow-ups",
      "API & Platform Integrations"
    ],
    metric: "Efficiency",
    metricValue: "Autonomous"
  },
  {
    id: "data-intelligence",
    num: "06",
    title: "Data & Intelligence",
    category: "INTELLIGENCE",
    icon: Cpu,
    tagline: "Clarity Behind Every Growth Decision",
    desc: "Understand performance, identify opportunities and make better growth decisions with verified attribution.",
    deliverables: [
      "Executive Performance Dashboards",
      "Closed-Loop Attribution",
      "CAC & LTV Analysis",
      "ROI & ROAS Tracking"
    ],
    metric: "Intelligence",
    metricValue: "Full Clarity"
  }
];

export default function GrowthSystemDark({ onStartConversation }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const activeNode = SYSTEM_NODES[activeNodeIndex];
  const ActiveIcon = activeNode.icon;

  const ecosystemFrameRef = useRef(null);
  const pipelineNodesRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. 3D Z-Axis reveal on Ecosystem Map
    if (ecosystemFrameRef.current) {
      gsap.fromTo(
        ecosystemFrameRef.current,
        {
          rotateX: 8,
          scale: 0.94,
          opacity: 0.85,
          transformPerspective: 1200,
        },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ecosystemFrameRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // 2. Cascade entrance for the 5 Pipeline stages
    if (pipelineNodesRef.current) {
      const nodes = pipelineNodesRef.current.children;
      gsap.fromTo(
        nodes,
        { x: -35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.09,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pipelineNodesRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030D1A] text-white border-y border-white/10 overflow-hidden font-body">
      
      {/* Background Gradients & Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0097B2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097B2]/15 border border-[#0097B2]/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE SM NEXTGEN APPROACH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-5 leading-tight">
            One Business. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] via-cyan-400 to-teal-300">
              Connected Growth Systems.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-3">
            We connect the essential parts of your business into one coordinated growth approach.
          </p>
          <p className="text-sm sm:text-base text-cyan-300 font-medium">
            SM NextGen connects the capabilities that move your business forward.
          </p>
        </div>

        {/* Visual Business Growth Ecosystem Showcase with 3D Z-Axis reveal */}
        <div style={{ perspective: "1200px" }} className="w-full">
          <div
            ref={ecosystemFrameRef}
            style={{ transformStyle: "preserve-3d" }}
            className="max-w-5xl mx-auto mb-14 rounded-2xl bg-white p-3 sm:p-5 border border-white/20 shadow-2xl will-change-transform"
          >
            <div className="rounded-xl overflow-hidden bg-white">
              <Image
                src="/images/SM NextGen Business Growth Ecosystem.png"
                alt="SM NextGen Business Growth Ecosystem connecting Business Strategy, Branding, Marketing, Sales, Customer Experience, Analytics, Automation, and Technology"
                width={1672}
                height={941}
                quality={85}
                sizes="(max-width: 1024px) 95vw, 980px"
                className="w-full h-auto block"
              />
            </div>
            <div className="pt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
              <span className="font-subheading font-bold text-[#0B2545]">
                8 Connected Growth Disciplines Operating Under One Partner
              </span>
              <span className="text-[11px] font-mono font-bold text-[#0097B2]">
                Strategy · Brand · Demand · Sales · Tech · AI · Analytics · Operations
              </span>
            </div>
          </div>
        </div>

        {/* 5-Node Interactive Connected Pipeline System */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column (5 Cols): The 5 Interconnected Pipeline Nodes */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>SYSTEM ARCHITECTURE NODES</span>
              <span className="text-[#0097B2]">Tap Node to Inspect</span>
            </div>

            <div ref={pipelineNodesRef} className="space-y-3">
              {SYSTEM_NODES.map((node, idx) => {
                const Icon = node.icon;
                const isActive = activeNodeIndex === idx;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeIndex(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-[#071A30] border-[#0097B2] shadow-xl shadow-[#0097B2]/15"
                        : "bg-[#0B2545]/40 border-white/5 hover:border-white/20 hover:bg-[#0B2545]/60"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive 
                          ? "bg-[#0097B2] text-white shadow-md shadow-[#0097B2]/30" 
                          : "bg-white/5 text-slate-400 border border-white/5"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[#0097B2]">
                            NODE {node.num}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            · {node.category}
                          </span>
                        </div>
                        <div className="text-sm font-bold font-heading text-white">
                          {node.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold hidden sm:inline">
                        {node.metricValue}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isActive ? "rotate-90 text-[#0097B2]" : "text-slate-600"
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 Cols): Deep Architectural Node Inspector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-3xl bg-[#071A30] border border-slate-700/80 p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Subtle Top-Right Ambient Backlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0097B2]/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Node Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0097B2]/20 border border-[#0097B2]/40 text-[#0097B2] flex items-center justify-center shadow-inner">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                        ACTIVE NODE {activeNode.num} · {activeNode.category}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white">
                        {activeNode.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Output: {activeNode.metricValue}</span>
                  </div>
                </div>

                {/* Tagline & Description */}
                <div className="text-sm font-semibold text-cyan-300 font-heading mb-3">
                  {activeNode.tagline}
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-8">
                  {activeNode.desc}
                </p>

                {/* Deliverables Grid */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core System Specifications &amp; Deliverables
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeNode.deliverables.map((del, dIdx) => (
                      <div 
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0097B2] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Node Footer / Connection Indicator */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <RefreshCw className="w-3.5 h-3.5 text-[#0097B2] animate-spin" />
                  <span>Feeds into next node continuously</span>
                </div>

                <button
                  type="button"
                  onClick={onStartConversation}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0097B2] hover:bg-[#007a91] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Build This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Global Connection Flow Summary Bar */}
        <div className="p-6 rounded-2xl bg-[#071A30]/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono mb-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
            <span className="font-bold text-slate-300">VISUAL FLOW:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-slate-300 font-bold">
            <span className="text-white">STRATEGY</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">BRAND</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">DEMAND</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">LEADS</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">CONVERSION</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">SALES</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-white">REVENUE</span>
            <span className="text-[#0097B2]">→</span>
            <span className="text-cyan-400">SCALE</span>
          </div>

          <div className="text-emerald-400 font-bold">
            Connected Systems
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center pt-2">
          <p className="text-sm sm:text-base font-semibold text-slate-300 font-heading">
            One connected approach. Multiple growth opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}
