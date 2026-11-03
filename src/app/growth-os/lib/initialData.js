// SM NextGen Growth OS — Initial Core Data Architecture (100% Real GMB Baseline)

export const DEFAULT_BUSINESS = {
  id: "biz-1",
  name: "SM NextGen",
  hindiName: "एसएम नेक्स्टजेन",
  category: "Marketing agency",
  secondaryCategories: ["Digital Marketing Agency", "Website Designer", "Software Company", "Business Management Consultant"],
  primaryGoal: "Get more calls & qualified inquiries",
  website: "https://smnextgen.com",
  phone: "+91 88243 25438",
  email: "info@smnextgen.com",
  address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  postalCode: "313003",
  gbpUrl: "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!16s%2Fg%2F11n49dydt9?entry=ttu",
  reviewUrl: "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!4m8!3m7!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!9m1!1b1!16s%2Fg%2F11n49dydt9?entry=ttu",
  placeId: "0x4452fc3201be4139:0xcc236a7cdf4cc286",
  cid: "14709717892477010566",
  plusCode: "HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313003",
  description: "SM NextGen is a premier business growth & AI automation firm in Udaipur, Rajasthan. We partner with business owners to build high-converting web systems, Google Maps 3-Pack rankings, and automated growth funnels.",
  openingHours: "Open 24 hours",
  rating: 5.0,
  totalReviews: 0,
  isDemo: false,
  googleConnected: true,
  lastSynced: "Live Verified Google Maps"
};

export const DEFAULT_KPI = {
  rating: 5.0,
  totalReviews: 0,
  unansweredReviews: 0,
  profileCompleteness: 90,
  calls: 0,
  callsChange: "+0%",
  websiteClicks: 0,
  websiteClicksChange: "+0%",
  directionRequests: 0,
  directionsChange: "+0%",
  searchImpressions: 0
};

export const DEFAULT_AUDIT_CATEGORIES = [
  { id: "completeness", label: "Profile Completeness", score: 18, max: 20, status: "GOOD", weight: "20%" },
  { id: "reviews", label: "Reviews & Reputation", score: 15, max: 25, status: "ATTENTION", weight: "25%" },
  { id: "media", label: "Media & Fresh Photos", score: 10, max: 15, status: "GOOD", weight: "15%" },
  { id: "info", label: "Business Information", score: 15, max: 15, status: "GOOD", weight: "15%" },
  { id: "activity", label: "Google Posts Activity", score: 4, max: 10, status: "ATTENTION", weight: "10%" },
  { id: "engagement", label: "Customer Engagement", score: 8, max: 10, status: "GOOD", weight: "10%" },
  { id: "opportunities", label: "Growth Opportunities", score: 5, max: 5, status: "GOOD", weight: "5%" }
];

export const DEFAULT_OPPORTUNITIES = [
  {
    id: "opp-gen-reviews",
    priority: "HIGH",
    priorityLabel: "High Priority",
    title: "Collect Your First Written Google Reviews",
    problem: "Profile has a 5.0 star baseline rating with 0 written customer reviews on Google Maps.",
    whyItMatters: "Google's 3-Pack ranking algorithm heavily prioritizes listings with steady, verified review velocity and keyword-rich customer testimonials.",
    recommendedAction: "Use the Reviews Tab to copy your direct Google Maps review link or generate a branded QR code for happy clients.",
    estimatedImpact: "High (+15 pts)",
    points: 15,
    actionTab: "reviews",
    actionLabel: "Open Review Generator"
  },
  {
    id: "opp-publish-post",
    priority: "MEDIUM",
    priorityLabel: "Medium Priority",
    title: "Publish Weekly Google Business Post",
    problem: "No promotional Google post published in the past 7 days.",
    whyItMatters: "Google Business posts expire every 7 days. Active weekly posts increase click-through rates by up to 22%.",
    recommendedAction: "Use AI Post Creator in Tools tab to draft and publish an engaging promotional update.",
    estimatedImpact: "Medium (+8 pts)",
    points: 8,
    actionTab: "tools",
    actionLabel: "Create Google Post"
  }
];

export const DEFAULT_REVIEWS = [];

export const DEFAULT_TASKS = [
  {
    id: "task-1",
    title: "Share Google Maps review link with recent clients",
    category: "Reputation",
    priority: "HIGH",
    status: "PENDING",
    due: "This Week",
    impact: "+15 Growth Score"
  },
  {
    id: "task-2",
    title: "Publish introductory Google Business Post with 'Call Now' CTA",
    category: "Engagement",
    priority: "MEDIUM",
    status: "PENDING",
    due: "Immediate",
    impact: "+8 Growth Score"
  },
  {
    id: "task-3",
    title: "Upload 3 high-resolution photos of Ganapati Nagar office & team",
    category: "Media",
    priority: "LOW",
    status: "PENDING",
    due: "Next 14 Days",
    impact: "+5 Growth Score"
  }
];

// ZERO FAKE REVIEWS — Real baseline is empty until real customers leave reviews on Google Maps
export const SM_NEXTGEN_REVIEWS = [];

export const SM_NEXTGEN_OPPORTUNITIES = [
  {
    id: "opp-smn-1",
    priority: "HIGH",
    priorityLabel: "High Priority",
    title: "Collect Verified Customer Reviews on Google Maps",
    problem: "Your Google Business Profile has 0 customer reviews. Competitors in Udaipur average 15-30 reviews.",
    whyItMatters: "Verified customer reviews are the #1 local ranking multiplier on Google Maps. Consistent review generation unlocks local 3-Pack dominance.",
    recommendedAction: "Share your direct Google review link with satisfied clients via WhatsApp or email.",
    estimatedImpact: "High (+15 pts)",
    points: 15,
    actionTab: "reviews",
    actionLabel: "Get Review Link"
  },
  {
    id: "opp-smn-2",
    priority: "MEDIUM",
    priorityLabel: "Medium Priority",
    title: "Publish Weekly Google Business Post",
    problem: "No active Google Business post live. Updates expire every 7 days.",
    whyItMatters: "Active weekly Google Posts signal fresh business activity to Google's ranking crawlers, boosting profile views by +22%.",
    recommendedAction: "Publish a promotional update with direct Call Now button.",
    estimatedImpact: "Medium (+8 pts)",
    points: 8,
    actionTab: "tools",
    actionLabel: "Create Post"
  },
  {
    id: "opp-smn-3",
    priority: "LOW",
    priorityLabel: "Growth Booster",
    title: "Upload Fresh Workspace & Team Photos",
    problem: "Google Maps profiles with fresh visual uploads receive 42% more navigation requests.",
    whyItMatters: "High quality team consultation and office photos enhance credibility for local clients visiting Sunderwas, Ganapati Nagar.",
    recommendedAction: "Upload 3 new photos of your workspace and client strategy sessions.",
    estimatedImpact: "Low (+5 pts)",
    points: 5,
    actionTab: "tools",
    actionLabel: "View Photo Ideas"
  }
];

export const DEFAULT_PLANS = [
  {
    id: "starter",
    name: "Starter Diagnostic",
    description: "Essential baseline audit & manual health tracking for local business owners.",
    priceUSD: "$0",
    priceINR: "₹0",
    period: "forever free",
    popular: false,
    features: [
      "Instant 24-Point Google Maps Audit",
      "Proprietary Growth Score Benchmark (0-100)",
      "Review velocity status check",
      "Manual checklist of action items",
      "1 Google Business Profile connection"
    ],
    cta: "Run Free Diagnostic"
  },
  {
    id: "growth",
    name: "Local Growth Autopilot",
    description: "Full AI automation, review generation, and 3-pack rank tracking for single-location businesses.",
    priceUSD: "$49",
    priceINR: "₹3,999",
    period: "month",
    popular: true,
    features: [
      "Real-time Google Maps 3-Pack Telemetry",
      "AI Review Responder (4 tones & auto-drafting)",
      "Automated Weekly Google Post Generator",
      "QR Code & Direct Review Generation Link",
      "Competitor Distance & Citation Tracker",
      "Weekly Performance Health Reports"
    ],
    cta: "Start 14-Day Free Trial"
  },
  {
    id: "pro",
    name: "Growth Pro & Multi-Keyword",
    description: "Aggressive local dominance with multi-grid geo-ranking tracking and automated posting.",
    priceUSD: "$129",
    priceINR: "₹9,999",
    period: "month",
    popular: false,
    features: [
      "Everything in Local Growth, plus:",
      "5x5 Geo-Grid Local Ranking Heatmaps",
      "Automated Schedule & Auto-Publish for Posts",
      "Customer Sentiment & Keyword Trend Analysis",
      "Negative Review Escalation & SMS Alerts",
      "Priority WhatsApp & Email Support"
    ],
    cta: "Upgrade to Growth Pro"
  },
  {
    id: "enterprise",
    name: "Multi-Location & Franchise",
    description: "Centralized command center for chains, franchises, and regional agency partners.",
    priceUSD: "$299",
    priceINR: "₹24,999",
    period: "month",
    popular: false,
    features: [
      "Everything in Growth Pro, plus:",
      "Up to 10 Business Locations Included",
      "Centralized Review Inbox & Mass Responses",
      "Franchise-Wide Benchmark Aggregation",
      "Custom White-Label Client Reports (PDF)",
      "Dedicated SM NextGen Growth Architect"
    ],
    cta: "Contact Enterprise Sales"
  }
];
