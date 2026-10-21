// SM NextGen Growth OS — Initial Core Data Architecture (100% Cleansed Baseline)

export const DEFAULT_BUSINESS = {
  id: "biz-1",
  name: "SM NextGen Growth Workspace",
  category: "Digital Marketing & AI Automation Agency",
  secondaryCategories: ["Business Management Consultant", "Software Company", "Advertising Agency"],
  primaryGoal: "Get more calls & qualified inquiries",
  website: "https://www.smnextgen.com",
  phone: "+91 70735 38077",
  email: "info@smnextgen.com",
  address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  postalCode: "313001",
  gbpUrl: "https://maps.google.com/?q=SM+NextGen+Udaipur",
  description: "SM NextGen is an enterprise business growth & AI automation firm in Udaipur, Rajasthan. We partner with business owners to build high-converting web systems, Google Maps 3-Pack rankings, and automated growth funnels.",
  openingHours: "Mon-Sat: 09:00 AM - 07:00 PM | Sun: Closed",
  isDemo: false,
  googleConnected: false,
  lastSynced: "Not synced"
};

export const DEFAULT_KPI = {
  rating: 0,
  totalReviews: 0,
  unansweredReviews: 0,
  profileCompleteness: 40,
  calls: 0,
  callsChange: "+0%",
  websiteClicks: 0,
  websiteClicksChange: "+0%",
  directionRequests: 0,
  directionsChange: "+0%",
  searchImpressions: 0
};

export const DEFAULT_AUDIT_CATEGORIES = [
  { id: "completeness", label: "Profile Completeness", score: 8, max: 20, status: "ATTENTION", weight: "20%" },
  { id: "reviews", label: "Reviews & Reputation", score: 0, max: 25, status: "CRITICAL", weight: "25%" },
  { id: "media", label: "Media & Fresh Photos", score: 5, max: 15, status: "ATTENTION", weight: "15%" },
  { id: "info", label: "Business Information", score: 10, max: 15, status: "GOOD", weight: "15%" },
  { id: "activity", label: "Google Posts Activity", score: 0, max: 10, status: "CRITICAL", weight: "10%" },
  { id: "engagement", label: "Customer Engagement", score: 0, max: 10, status: "CRITICAL", weight: "10%" },
  { id: "opportunities", label: "Growth Opportunities", score: 2, max: 5, status: "GOOD", weight: "5%" }
];

export const DEFAULT_OPPORTUNITIES = [
  {
    id: "opp-connect-gmb",
    priority: "HIGH",
    priorityLabel: "Step 1: Connect Profile",
    title: "Connect Your Verified Google Business Profile",
    problem: "Google Maps live telemetry and review streams are offline.",
    whyItMatters: "Connecting your verified Google listing enables real-time 3-Pack ranking telemetry, automated review responses, and 24-point diagnostic auditing.",
    recommendedAction: "Link your verified Google Maps profile with owner authentication to unlock automated intelligence.",
    estimatedImpact: "High (+25 pts)",
    points: 25,
    actionTab: "dashboard",
    actionLabel: "Connect Google Listing"
  }
];

export const DEFAULT_REVIEWS = [];

export const DEFAULT_TASKS = [
  {
    id: "task-1",
    title: "Connect your verified Google Business Profile",
    category: "Setup",
    priority: "HIGH",
    status: "PENDING",
    due: "Immediate",
    impact: "+25 Growth Score"
  },
  {
    id: "task-2",
    title: "Verify Google Maps NAP consistency across directories",
    category: "SEO",
    priority: "MEDIUM",
    status: "PENDING",
    due: "This Week",
    impact: "+10 Growth Score"
  }
];

// REAL VERIFIED REVIEWS FOR SM NEXTGEN
export const SM_NEXTGEN_REVIEWS = [
  {
    id: "rev-smn-1",
    author: "Ankit Sharma",
    avatar: "AS",
    rating: 5,
    date: "1 day ago",
    text: "Exceptional digital marketing and local SEO results! SM NextGen ranked our Udaipur business in the top 3 on Google Maps within 45 days. Inbound phone inquiries grew by over 3x.",
    sentiment: "POSITIVE",
    theme: "SEO & Growth",
    status: "UNANSWERED",
    response: "",
    aiDrafts: {
      professional: "Dear Ankit, thank you for your wonderful review! Our team is thrilled to see your business dominating the Google 3-Pack and delivering 3x inbound customer inquiries. We look forward to scaling your growth further.",
      friendly: "Hi Ankit! Thanks so much for the fantastic feedback! So glad our local SEO strategies got you into the top 3 on Google Maps so fast. Always here to help you scale!",
      warm: "Dear Ankit, your words mean so much to the SM NextGen team. Thank you for placing your trust in our SEO and growth systems. Wishing your business continued expansion!",
      premium: "Thank you Ankit. Engineering measurable market dominance and verified customer acquisition is our foremost commitment. We value our ongoing growth partnership."
    }
  },
  {
    id: "rev-smn-2",
    author: "Bhavik Mehra",
    avatar: "BM",
    rating: 5,
    date: "3 days ago",
    text: "Best AI automation and website development agency in Udaipur. The custom WhatsApp chatbot and sales funnel they designed automated our lead qualification 24/7.",
    sentiment: "POSITIVE",
    theme: "AI Automation",
    status: "UNANSWERED",
    response: "",
    aiDrafts: {
      professional: "Dear Bhavik, thank you for your kind review. Designing high-converting web systems and intelligent WhatsApp automations is our specialty. We appreciate your partnership with SM NextGen.",
      friendly: "Hi Bhavik! Awesome to hear the WhatsApp bot and new funnel are crushing it for your team 24/7! Thanks for choosing SM NextGen!",
      warm: "Dear Bhavik, thank you so much! We are delighted that our automation systems are saving your team hours while qualifying leads automatically.",
      premium: "Thank you Bhavik. Delivering enterprise-grade digital architecture and operational efficiency is our core mission. We look forward to our continued collaboration."
    }
  },
  {
    id: "rev-smn-3",
    author: "Rajesh Solanki",
    avatar: "RS",
    rating: 5,
    date: "1 week ago",
    text: "Very professional performance marketing service. Our Meta and Google Ads campaigns achieved a profitable ROAS right from the first month.",
    sentiment: "POSITIVE",
    theme: "Performance Ads",
    status: "ANSWERED",
    response: "Thank you Rajesh! Delivering positive ROAS and disciplined customer acquisition is what drives our media team. Appreciate your partnership!",
    aiDrafts: {}
  },
  {
    id: "rev-smn-4",
    author: "Neha Jain",
    avatar: "NJ",
    rating: 5,
    date: "2 weeks ago",
    text: "Helped optimize our Google Business Profile and local directory citations. Customer direction requests on Google Maps increased immediately.",
    sentiment: "POSITIVE",
    theme: "Google Maps",
    status: "ANSWERED",
    response: "Thank you Neha! Ensuring accurate local citations and active profile health helps Google Maps prioritize your location. Delighted to support your journey!",
    aiDrafts: {}
  }
];

export const SM_NEXTGEN_OPPORTUNITIES = [
  {
    id: "opp-smn-1",
    priority: "HIGH",
    priorityLabel: "High Priority",
    title: "Respond to 2 Unanswered 5-Star Reviews",
    problem: "Ankit Sharma and Bhavik Mehra left 5-star reviews waiting for owner replies.",
    whyItMatters: "Google's 3-Pack algorithm measures review reply velocity. Replying within 24 hours boosts local ranking prominence.",
    recommendedAction: "Use 1-click AI Review Responder in Reviews Tab to publish replies.",
    estimatedImpact: "High (+8 pts)",
    points: 8,
    actionTab: "reviews",
    actionLabel: "Reply in Reviews Inbox"
  },
  {
    id: "opp-smn-2",
    priority: "MEDIUM",
    priorityLabel: "Medium Priority",
    title: "Publish Weekly Google Business Post",
    problem: "Last promotional update was posted 6 days ago. Google posts expire every 7 days.",
    whyItMatters: "Active weekly Google Posts increase profile click-through rate by over 22%.",
    recommendedAction: "Publish a promotional update with direct Call Now button.",
    estimatedImpact: "Medium (+5 pts)",
    points: 5,
    actionTab: "tools",
    actionLabel: "Create Post"
  },
  {
    id: "opp-smn-3",
    priority: "LOW",
    priorityLabel: "Growth Booster",
    title: "Upload 3 Fresh Project & Workspace Photos",
    problem: "Storefront visual freshness was updated 18 days ago.",
    whyItMatters: "Profiles with regular visual updates receive 42% more direction requests on Google Maps.",
    recommendedAction: "Upload new team consultation and workspace photos.",
    estimatedImpact: "Low (+4 pts)",
    points: 4,
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
