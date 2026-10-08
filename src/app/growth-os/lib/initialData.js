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
    recommendedAction: "Link your verified Google Maps share link or Place ID to unlock automated intelligence.",
    estimatedImpact: "High (+25 pts)",
    points: 25,
    actionTab: "dashboard",
    actionLabel: "Connect Google Listing"
  },
  {
    id: "opp-verify-nap",
    priority: "MEDIUM",
    priorityLabel: "High Priority",
    title: "Verify NAP (Name, Address, Phone) Consistency",
    problem: "Inconsistent business name or phone across local citations hurts local SEO.",
    whyItMatters: "Google algorithm requires 100% exact match across business directories to trust your physical location.",
    recommendedAction: "Audit your business details in Profile Settings.",
    estimatedImpact: "Medium (+10 pts)",
    points: 10,
    actionTab: "settings",
    actionLabel: "Verify Profile Details"
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
    title: "Upload 5 high-resolution storefront & team photos",
    category: "Media",
    priority: "MEDIUM",
    status: "PENDING",
    due: "This Week",
    impact: "+10 Growth Score"
  }
];
