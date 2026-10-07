// SM NextGen Growth OS — Initial Core Data & Model Architecture

export const DEFAULT_BUSINESS = {
  id: "biz-1",
  name: "Apex Dental Care & Implant Center",
  category: "Dental clinic",
  secondaryCategories: ["Dentist", "Cosmetic dentist", "Dental implants provider"],
  primaryGoal: "Get more calls",
  website: "https://apexdentaludaipur.com",
  phone: "+91 70735 38077",
  email: "info@smnextgen.com",
  address: "Plot 14, Saheli Nagar, Near Saheliyon Ki Bari",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  postalCode: "313001",
  gbpUrl: "https://maps.google.com/?cid=108234827491",
  description: "Premier multi-specialty dental and implant center in Udaipur offering painless root canals, cosmetic smile makeovers, dental implants, and pediatric dentistry with modern 3D digital imaging.",
  openingHours: "Mon-Sat: 09:30 AM - 08:00 PM | Sun: Emergency Only",
  isDemo: true,
  googleConnected: true,
  lastSynced: "Today at 09:45 AM"
};

export const DEFAULT_KPI = {
  rating: 4.8,
  totalReviews: 142,
  unansweredReviews: 12,
  profileCompleteness: 91,
  calls: 520,
  callsChange: "+24%",
  websiteClicks: 1020,
  websiteClicksChange: "+32%",
  directionRequests: 740,
  directionsChange: "+18%"
};

export const DEFAULT_AUDIT_CATEGORIES = [
  { id: "completeness", label: "Profile Completeness", score: 18, max: 20, status: "GOOD", weight: "20%" },
  { id: "reviews", label: "Reviews & Reputation", score: 17, max: 25, status: "ATTENTION", weight: "25%" },
  { id: "media", label: "Media & Fresh Photos", score: 9, max: 15, status: "CRITICAL", weight: "15%" },
  { id: "info", label: "Business Information", score: 14, max: 15, status: "GOOD", weight: "15%" },
  { id: "activity", label: "Google Posts Activity", score: 6, max: 10, status: "ATTENTION", weight: "10%" },
  { id: "engagement", label: "Customer Engagement", score: 6, max: 10, status: "ATTENTION", weight: "10%" },
  { id: "opportunities", label: "Growth Opportunities", score: 4, max: 5, status: "GOOD", weight: "5%" }
];

export const DEFAULT_OPPORTUNITIES = [
  {
    id: "opp-1",
    priority: "HIGH",
    priorityLabel: "High Priority",
    title: "Respond to 12 Unanswered Google Reviews",
    problem: "12 customer reviews (including 1 critical review) have had no official owner response for more than 48 hours.",
    whyItMatters: "Google algorithm strictly weights review response rate and response velocity for local 3-Pack rankings. Replying boosts customer trust and click-to-call conversion by +18%.",
    recommendedAction: "Use the AI Review Responder to generate warm, professional replies and publish them to Google in 1 tap.",
    estimatedImpact: "High (+8 pts)",
    points: 8,
    actionTab: "reviews",
    actionLabel: "Fix in Reviews Inbox"
  },
  {
    id: "opp-2",
    priority: "MEDIUM",
    priorityLabel: "Medium Priority",
    title: "Add Secondary High-Intent Categories",
    problem: "Profile only has 'Dental clinic' as primary category, missing 'Cosmetic dentist' and 'Dental implants provider'.",
    whyItMatters: "Missing secondary categories forfeits up to 2,400 monthly high-intent search queries in your service area.",
    recommendedAction: "Add recommended secondary categories in profile settings.",
    estimatedImpact: "Medium (+7 pts)",
    points: 7,
    actionTab: "optimization",
    actionLabel: "Apply Categories"
  },
  {
    id: "opp-3",
    priority: "MEDIUM",
    priorityLabel: "Medium Priority",
    title: "Upload Fresh Interior & Team Photos",
    problem: "Last storefront photo was uploaded over 60 days ago. Google favors active visual freshness.",
    whyItMatters: "Businesses with more than 100 photos receive 520% more calls and 1065% more website visits according to Google Search telemetry.",
    recommendedAction: "Upload 5-10 recent high-resolution photos of clinic equipment, waiting lounge, and patient experience.",
    estimatedImpact: "Medium (+5 pts)",
    points: 5,
    actionTab: "tools",
    actionLabel: "View Photo Ideas"
  },
  {
    id: "opp-4",
    priority: "LOW",
    priorityLabel: "Low Priority",
    title: "Enrich 750-Character Description with Local Keywords",
    problem: "Business description has 340 characters and lacks specific geo-targeted service anchors.",
    whyItMatters: "A 750-character keyword-dense description helps Google NLP parse your relevance for voice search and map queries.",
    recommendedAction: "Generate an expanded AI business description using our built-in generator.",
    estimatedImpact: "Low (+4 pts)",
    points: 4,
    actionTab: "tools",
    actionLabel: "Generate Description"
  }
];

export const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    author: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    date: "2 hours ago",
    text: "Dr. Sunita was exceptionally gentle and professional during my root canal treatment in Udaipur. The clinic is spotless and staff is courteous. Highly recommended!",
    sentiment: "POSITIVE",
    theme: "Staff & Service",
    status: "UNANSWERED",
    response: "",
    aiDrafts: {
      professional: "Dear Priya, thank you for your kind review. Our clinical team takes great pride in delivering gentle, patient-first dental care. We appreciate your trust in Apex Dental.",
      friendly: "Hi Priya! Thank you so much for the wonderful feedback! Dr. Sunita and our entire team are so happy to hear your root canal was smooth and comfortable. Keep smiling!",
      warm: "Dear Priya, your warm words mean the world to us. Thank you for choosing Apex Dental Udaipur. We look forward to seeing you whenever you need us!",
      apologetic: "",
      premium: "Thank you Priya. Delivering precision clinical dentistry in a comforting environment is our foremost commitment. We appreciate your distinguished patronage."
    }
  },
  {
    id: "rev-2",
    author: "Vikram Singh Rathore",
    avatar: "VS",
    rating: 1,
    date: "Yesterday",
    text: "Waited 45 minutes past my appointment time. Reception desk seemed disorganized although the dentist was knowledgeable.",
    sentiment: "NEGATIVE",
    theme: "Wait Time",
    status: "UNANSWERED",
    response: "",
    aiDrafts: {
      professional: "Dear Vikram, thank you for bringing this to our attention. We sincerely apologize for the delay you experienced. We hold ourselves to strict appointment scheduling and are reviewing our front-desk check-in protocol immediately. Our clinic director would appreciate the chance to make this right—please contact us directly at +91 70735 38077.",
      friendly: "Hi Vikram, we are truly sorry for keeping you waiting! That is definitely not the standard we aim for. Please give our clinic manager a call at +91 70735 38077 so we can make this right for you on your next visit.",
      warm: "Dear Vikram, we are genuinely sorry for the frustrating wait you had yesterday. Your time is valuable, and we are working to ensure our schedule stays on track. Please reach out to us at +91 70735 38077 so we can assist you personally.",
      apologetic: "Dear Vikram, please accept our deepest apologies for the 45-minute delay during your appointment. We regret falling short of your expectations and would welcome the opportunity to discuss this with you directly at +91 70735 38077.",
      premium: "Dear Vikram, we deeply regret the shortfall in our punctuality yesterday. Prompt, seamless care is our hallmark, and we are addressing this with our front desk. We invite you to contact our direct executive line at +91 70735 38077."
    }
  },
  {
    id: "rev-3",
    author: "Dr. Ramesh Patel",
    avatar: "RP",
    rating: 5,
    date: "3 days ago",
    text: "Outstanding dental implant care. Precision diagnostics with modern 3D scanners. One of the finest dental centers in Rajasthan.",
    sentiment: "POSITIVE",
    theme: "Equipment & Technology",
    status: "ANSWERED",
    response: "Thank you Dr. Patel! We truly appreciate your professional endorsement of our implant and diagnostic technologies. Warm regards from the Apex Dental team!",
    aiDrafts: {}
  },
  {
    id: "rev-4",
    author: "Ananya Joshi",
    avatar: "AJ",
    rating: 4,
    date: "5 days ago",
    text: "Very good experience for teeth cleaning and polishing. Modern equipment and friendly doctors. Parking space was a bit tight.",
    sentiment: "POSITIVE",
    theme: "Service & Parking",
    status: "ANSWERED",
    response: "Thank you Ananya for trusting us with your dental hygiene! We are also arranging dedicated valet parking for our patients. Wishing you a bright and healthy smile.",
    aiDrafts: {}
  },
  {
    id: "rev-5",
    author: "Manish Kothari",
    avatar: "MK",
    rating: 3,
    date: "1 week ago",
    text: "Treatment was good but prices are on the higher side compared to other clinics in Udaipur.",
    sentiment: "NEUTRAL",
    theme: "Price & Value",
    status: "ANSWERED",
    response: "Dear Manish, thank you for your feedback. We invest in imported European sterilization systems and high-grade materials to ensure long-term durability and safety. We appreciate your visit!",
    aiDrafts: {}
  }
];

export const DEFAULT_TASKS = [
  {
    id: "task-1",
    title: "Respond to 12 unanswered reviews",
    category: "Reviews",
    priority: "HIGH",
    status: "PENDING",
    due: "Today",
    impact: "+8 Growth Score"
  },
  {
    id: "task-2",
    title: "Add 10 new high-resolution clinic photos",
    category: "Media",
    priority: "MEDIUM",
    status: "PENDING",
    due: "This Week",
    impact: "+5 Growth Score"
  },
  {
    id: "task-3",
    title: "Optimize 750-character business description",
    category: "Profile",
    priority: "MEDIUM",
    status: "PENDING",
    due: "Next Week",
    impact: "+4 Growth Score"
  },
  {
    id: "task-4",
    title: "Schedule weekly promotional Google post",
    category: "Activity",
    priority: "LOW",
    status: "COMPLETED",
    due: "Completed",
    impact: "+3 Growth Score"
  }
];

export const DEFAULT_PLANS = [
  {
    id: "free",
    name: "Free Growth Audit",
    priceUSD: "$0",
    priceINR: "₹0",
    period: "forever",
    description: "Ideal for initial business discovery and baseline scoring.",
    features: [
      "1 Google Business Profile connection",
      "Baseline 0–100 Growth Score",
      "Top 3 Critical Opportunities",
      "Limited Review Inbox view",
      "Community support"
    ],
    cta: "Current Plan",
    popular: false
  },
  {
    id: "growth",
    name: "Growth Plan",
    priceUSD: "$49",
    priceINR: "₹3,999",
    period: "per month",
    description: "Complete hands-on tools for small business owners and clinics.",
    features: [
      "Full 24-point automated audit engine",
      "Unlimited AI Review Responses",
      "Review sentiment & keyword analytics",
      "Weekly automated Google Posts AI",
      "Action Center task workflows",
      "AI Business Description Generator",
      "Priority email & chat support"
    ],
    cta: "Upgrade to Growth",
    popular: true
  },
  {
    id: "pro",
    name: "Pro Accelerator",
    priceUSD: "$99",
    priceINR: "₹7,999",
    period: "per month",
    description: "Advanced analytics and competitor intelligence for scaling brands.",
    features: [
      "Everything in Growth Plan",
      "Up to 3 business storefront locations",
      "Advanced 90-day time-series ROI charts",
      "Auto-thank 5-star automation rules",
      "Negative review emergency alerts",
      "Competitor rank tracking benchmarks",
      "Dedicated WhatsApp growth strategist"
    ],
    cta: "Upgrade to Pro",
    popular: false
  },
  {
    id: "agency",
    name: "Agency & Enterprise",
    priceUSD: "$199",
    priceINR: "₹15,999",
    period: "per month",
    description: "For agencies and multi-location franchises.",
    features: [
      "Up to 10 connected client locations",
      "Client reporting export (PDF / CSV)",
      "Multi-user role-based permissions",
      "White-label client portal architecture",
      "Dedicated account manager",
      "Custom SLA & onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];
