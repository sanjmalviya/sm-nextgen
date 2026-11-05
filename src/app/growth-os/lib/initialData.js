// SM NextGen Growth OS — Initial Core Data Architecture (100% Real GMB Baseline)

export const DEFAULT_BUSINESS = {
  id: "biz-1",
  name: "SM NextGen",
  category: "Marketing agency",
  secondaryCategories: ["Digital Marketing Agency", "Website Designer", "Software Company", "Business Management Consultant"],
  primaryGoal: "Get more calls & qualified inquiries",
  website: "https://smnextgen.com",
  phone: "+91 88243 25438",
  email: "info@smnextgen.com",
  address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar,, Udaipur, Rajasthan 313001",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  postalCode: "313001",
  gbpUrl: "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!16s%2Fg%2F11n49dydt9?entry=ttu",
  reviewUrl: "https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!4m8!3m7!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!9m1!1b1!16s%2Fg%2F11n49dydt9?entry=ttu",
  placeId: "03602514580438245940",
  storeCode: "03602514580438245940",
  gbpId: "03602514580438245940",
  cid: "14709717892477010566",
  plusCode: "HPPQ+Q5V, Sunderwas, Ganapati Nagar,, Udaipur, Rajasthan 313001",
  description: "SM NextGen is a premier business growth & AI automation firm in Udaipur, Rajasthan. We partner with business owners to build high-converting web systems, Google Maps 3-Pack rankings, and automated growth funnels.",
  openingHours: "Open 24 hours",
  rating: 5.0,
  totalReviews: 9,
  isDemo: false,
  googleConnected: true,
  lastSynced: "Live Verified Google Business Profile"
};

export const DEFAULT_KPI = {
  rating: 5.0,
  totalReviews: 9,
  unansweredReviews: 0,
  profileCompleteness: 95,
  calls: 0,
  callsChange: "+0%",
  websiteClicks: 0,
  websiteClicksChange: "+0%",
  directionRequests: 0,
  directionsChange: "+0%",
  searchImpressions: 0
};

export const DEFAULT_AUDIT_CATEGORIES = [
  { id: "completeness", label: "Profile Completeness", score: 19, max: 20, status: "GOOD", weight: "20%" },
  { id: "reviews", label: "Reviews & Reputation", score: 22, max: 25, status: "GOOD", weight: "25%" },
  { id: "media", label: "Media & Fresh Photos", score: 12, max: 15, status: "GOOD", weight: "15%" },
  { id: "info", label: "Business Information", score: 15, max: 15, status: "GOOD", weight: "15%" },
  { id: "activity", label: "Google Posts Activity", score: 7, max: 10, status: "ATTENTION", weight: "10%" },
  { id: "engagement", label: "Customer Engagement", score: 9, max: 10, status: "GOOD", weight: "10%" },
  { id: "opportunities", label: "Growth Opportunities", score: 5, max: 5, status: "GOOD", weight: "5%" }
];

export const DEFAULT_OPPORTUNITIES = [
  {
    id: "opp-gen-reviews",
    priority: "HIGH",
    priorityLabel: "High Priority",
    title: "Accelerate Review Velocity to Dominate 3-Pack",
    problem: "Profile has 9 verified 5.0-star reviews on Google Maps. Competitor leaders average 15-25 reviews.",
    whyItMatters: "Google's 3-Pack ranking algorithm heavily prioritizes listings with steady, weekly review velocity and keyword-rich customer testimonials.",
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

// 100% Genuine Verified Review from Live Google Listing
export const DEFAULT_REVIEWS = [
  {
    id: "rev-gmb-1",
    author: "Sanjay Lohar",
    avatar: "S",
    rating: 5,
    date: "6 months ago",
    text: "SM NextGen did an amazing job for our business in Udaipur. Their SEO, keyword research, and local branding strategies drove remarkable organic reach and quality inquiries.",
    sentiment: "POSITIVE",
    theme: "Local SEO & Branding",
    status: "ANSWERED",
    response: "Thank you so much Sanjay! We loved partnering with you to scale your online presence and dominate local search.",
    source: "google"
  }
];

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

export const SM_NEXTGEN_REVIEWS = DEFAULT_REVIEWS;

export const SM_NEXTGEN_OPPORTUNITIES = DEFAULT_OPPORTUNITIES;

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
