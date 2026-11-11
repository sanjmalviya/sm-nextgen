"use client";

import React from "react";
import styles from "./GrowthProcessDiagram.module.css";

const PROCESS_STAGES = [
  {
    step: "01",
    title: "DISCOVER",
    desc: "Understand your business, market, audience and goals.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="3.2" />
        <path d="m30 30 10 10" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M16 21h10M21 16v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "DIAGNOSE",
    desc: "Identify bottlenecks, weaknesses and growth opportunities.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 39V25h7v14M21 39V15h7v24M34 39V7h7v32" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="35" cy="13" r="7" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
        <path d="m40 18 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "STRATEGIZE",
    desc: "Develop a clear, customised strategy for sustainable growth.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="23" cy="24" r="17" stroke="currentColor" strokeWidth="3" />
        <circle cx="23" cy="24" r="10" stroke="currentColor" strokeWidth="3" />
        <circle cx="23" cy="24" r="3" fill="currentColor" />
        <path d="m25 22 15-15m-8 1 8-1-1 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "BUILD",
    desc: "Implement the marketing, sales, technology and automation systems you need.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="m24 6 18 9-18 9-18-9 18-9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m7 24 17 9 17-9M7 33l17 9 17-9" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "OPTIMIZE",
    desc: "Measure performance, learn from the data and improve continuously.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 31a16 16 0 1 1 32 0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="m24 27 10-10" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="24" cy="27" r="3.5" fill="currentColor" />
        <path d="M12 37h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "SCALE",
    desc: "Expand what works and grow with stronger, connected systems.",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M7 39V27h8v12M20 39V18h8v21M33 39V8h8v31" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m8 19 11-7 8 2L40 4m-8 0h8v8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function GrowthProcessDiagram() {
  return (
    <div className={styles.processSection} aria-labelledby="process-title">
      <p className={`${styles.eyebrow} font-subheading`}>The SM NextGen Method</p>
      <h2 id="process-title" className={`${styles.title} font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight`}>
        From business challenge to <span className={styles.titleAccent}>measurable growth.</span>
      </h2>
      <p className={`${styles.intro} font-body text-base sm:text-lg font-light`}>
        A connected, six-stage approach that brings strategy, marketing, sales and technology together to build a stronger business.
      </p>
      <div className={styles.rule} aria-hidden="true" />

      <div className={styles.timeline}>
        <svg className={styles.track} viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            className={styles.trackBase}
            d="M0 24 C100 24 100 76 200 76 S300 24 400 24 S500 76 600 76 S700 24 800 24 S900 76 1000 76 S1100 24 1200 24"
          />
          <path
            className={styles.trackAccent}
            d="M0 24 C100 24 100 76 200 76 S300 24 400 24 S500 76 600 76 S700 24 800 24 S900 76 1000 76 S1100 24 1200 24"
          />
        </svg>

        {PROCESS_STAGES.map((stage, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={stage.step}
              className={`${styles.stage} ${isEven ? styles.stageEven : styles.stageOdd}`}
            >
              <div className={styles.orbit}>
                <span className={`${styles.number} font-subheading`}>{stage.step}</span>
                {stage.renderIcon(styles.icon)}
              </div>
              <h3 className={`${styles.stageTitle} font-subheading`}>{stage.title}</h3>
              <p className={`${styles.stageDesc} font-body`}>{stage.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
