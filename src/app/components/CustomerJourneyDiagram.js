"use client";

import React from "react";
import styles from "./CustomerJourneyDiagram.module.css";

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "AWARENESS",
    desc: "Potential customers discover your business through search, social media, content and advertising.",
    metric: "Reach & visibility",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="3" />
        <path d="m30 30 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 21h14M21 14v14" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
    renderMetricIcon: () => (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 10s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "INTEREST",
    desc: "Customers explore your brand, website, products and services to learn what you offer.",
    metric: "Engagement",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="7" y="8" width="34" height="28" rx="3" stroke="currentColor" strokeWidth="2.8" />
        <path d="M7 15h34M13 28l7-7 5 5 5-4 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 41h14" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    ),
    renderMetricIcon: () => (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="m3 10 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "CONSIDERATION",
    desc: "Customers compare options, evaluate value and build confidence in your business.",
    metric: "Trust & confidence",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 5 43 14 24 23 5 14 24 5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="m9 22 15 8 15-8M9 30l15 8 15-8" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M24 14v7" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    renderMetricIcon: () => (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="m10 2 7 3v5c0 4-3 6.5-7 8-4-1.5-7-4-7-8V5l7-3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m6.5 10 2.3 2.3 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "CONVERSION",
    desc: "Customers take action by purchasing, booking or submitting an enquiry.",
    metric: "Sales & leads",
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M5 8h5l4 23h22l5-16H12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="38" r="3" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="34" cy="38" r="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="m21 20 4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    renderMetricIcon: () => (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 16V9h4v7M9 16V5h4v11M15 16V2h3v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "RETENTION & ADVOCACY",
    desc: "Customers return, recommend your business and become long-term brand advocates.",
    metric: "Loyalty & referrals",
    isFinal: true,
    renderIcon: (className) => (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="18" cy="15" r="7" stroke="currentColor" strokeWidth="2.8" />
        <circle cx="34" cy="18" r="5" stroke="currentColor" strokeWidth="2.8" />
        <path d="M5 38c0-7 5-12 13-12s13 5 13 12M29 29c6-2 13 2 14 8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="m25 8 2 3 3 .5-2.5 2.2.7 3.2-3.2-1.6-2.8 1.6.5-3.2-2.5-2.2 3.3-.5L25 8Z" fill="currentColor" />
      </svg>
    ),
    renderMetricIcon: () => (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="m10 1.5 2.5 5.1 5.6.8-4 3.9 1 5.5-5.1-2.7-5.1 2.7 1-5.5-4-3.9 5.6-.8L10 1.5Z" />
      </svg>
    ),
  },
];

export default function CustomerJourneyDiagram() {
  return (
    <section
      id="customer-journey"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#071A30] text-[#0B2545] dark:text-[#E6EEF2] border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200 font-body"
      aria-labelledby="journey-title"
    >
      <div className={`max-w-7xl mx-auto ${styles.journeyWrapper}`}>
        <p className={`${styles.eyebrow} font-subheading`}>SM NEXTGEN · CUSTOMER JOURNEY</p>
        <h2 id="journey-title" className={`${styles.title} font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight`}>
          From first discovery to <span className={styles.titleAccent}>lasting loyalty.</span>
        </h2>
        <p className={`${styles.subtitle} font-body text-base sm:text-lg font-light`}>
          A connected customer experience that turns attention into action—and customers into advocates.
        </p>
        <div className={styles.accentLine} aria-hidden="true" />

        <div className={styles.journeyGrid}>
          <svg className={styles.connector} viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true">
            <path className={styles.connectorPath} d="M0 12H1200" />
          </svg>

          {JOURNEY_STEPS.map((item) => (
            <article
              key={item.step}
              className={`${styles.card} ${item.isFinal ? styles.cardFinal : ""}`}
            >
              <span className={`${styles.step} font-subheading`}>{item.step}</span>
              <div className={styles.iconWrap}>{item.renderIcon(styles.icon)}</div>
              <h3 className={`${styles.cardTitle} font-subheading`}>{item.title}</h3>
              <p className={`${styles.cardDesc} font-body`}>{item.desc}</p>
              <span className={`${styles.metric} font-body`}>
                {item.renderMetricIcon()}
                {item.metric}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
