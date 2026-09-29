import { NextResponse } from "next/server";

// Comprehensive SM NextGen & Growth Knowledge Base
const KNOWLEDGE = {
  growthOS: {
    name: "SM NextGen Growth OS",
    version: "v1.0 (Google Business Profile Growth Platform)",
    tier: "Production",
    url: "/growth-os",
    features: [
      "GBP Health Diagnostics & Audit (81/100 benchmark, scans 24 ranking factors)",
      "AI Review Autopilot & Sentiment Analysis (Positive, Neutral, Negative, 1-click tailored replies)",
      "Profile & Category Optimization (Primary/secondary categories, 750-char SEO description)",
      "Automated Local Google Posts Engine (Weekly promotional updates with CTA links)",
      "Smart Rule-Based Automation (Auto-thank 5-star reviews, negative review alerts)",
      "Revenue, Calls & ROAS Attribution (Call tracking, direction requests, pipeline ROI)"
    ]
  },
  company: {
    name: "SM NextGen",
    tagline: "Your Complete Business Growth Partner",
    focus: "Strategy + Technology + Performance Marketing + AI Automations",
    address: "HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313001, India",
    city: "Udaipur, Rajasthan",
    phone: "+91 7073538077",
    email: "info@smnextgen.com",
    whatsapp: "https://wa.me/917073538077",
    pillars: [
      "Growth Strategy & Brand Positioning",
      "Search & Local SEO / GEO Optimization",
      "High-Performance Media & Customer Acquisition",
      "Sub-second Web Platforms & Conversion Funnels",
      "AI Business & WhatsApp Automations",
      "Revenue Intelligence & Financial Dashboards"
    ]
  }
};

// Intelligent Business Reasoning Engine (100% Polished English)
function generateSmartReply(query, history = []) {
  const q = query.toLowerCase().trim();

  // 1. Location / Address / Contact Office
  if (q.includes("address") || q.includes("location") || q.includes("office") || q.includes("where") || q.includes("udaipur") || q.includes("headquarter") || q.includes("contact")) {
    return {
      reply: "**SM NextGen Headquarters & Growth Lab** is located in Udaipur, Rajasthan:\n\n" +
             "📍 **Address**: HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313001, India\n" +
             "📞 **Direct Phone**: +91 70735 38077\n" +
             "✉️ **Email**: info@smnextgen.com\n\n" +
             "We partner with ambitious enterprises and multi-location businesses locally in Udaipur and across India to engineer predictable growth systems.",
      actions: [
        { label: "💬 Connect on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20would%20like%20to%20connect%20with%20your%20Udaipur%20office", type: "whatsapp" },
        { label: "📞 Call +91 7073538077", url: "tel:+917073538077", type: "call" },
        { label: "🚀 Launch Growth OS (Live App)", url: "/growth-os", type: "app" }
      ],
      suggestions: ["What is Growth OS?", "How to rank in Google Maps Top 3?", "How do you help local businesses?"]
    };
  }

  // 2. Google Business Profile & Local Ranking / 3-Pack
  if (q.includes("gbp") || q.includes("google business") || q.includes("map") || q.includes("ranking") || q.includes("local seo") || q.includes("3 pack") || q.includes("top 3") || q.includes("google map")) {
    return {
      reply: "To dominate the **Top 3 Local 3-Pack on Google Maps**, our algorithm-aligned system focuses on 4 foundational pillars:\n\n" +
             "1. **Primary Category Precision**: Your primary category must match the highest-intent customer search query with 100% semantic accuracy.\n" +
             "2. **Review Velocity & Keyword Infusion**: Sustained incoming 5-star reviews with detailed responses referencing core services and location signals.\n" +
             "3. **Weekly Active Posts with Tracked CTAs**: Google actively promotes profiles that publish weekly promotional updates, offers, and high-res media.\n" +
             "4. **Complete Storefront & Attribute Audit**: 100% NAP consistency, geo-tagged coordinates, service menus, and special operational badges.\n\n" +
             "👉 With **SM NextGen Growth OS**, this entire playbook is automated! You can instantly run a 24-point diagnostic audit to identify ranking gaps.",
      actions: [
        { label: "🚀 Launch Growth OS (SM NextGen)", url: "/growth-os", type: "app" },
        { label: "💬 Discuss GBP Strategy on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20help%20me%20rank%20my%20Google%20Business%20Profile%20in%20the%20Top%203", type: "whatsapp" }
      ],
      suggestions: ["How does Review Autopilot work?", "Run GBP Health Diagnostics", "What is Growth OS?"]
    };
  }

  // 3. Growth OS Platform specific questions
  if (q.includes("growth os") || q.includes("os") || q.includes("software") || q.includes("tool") || q.includes("port 3005") || q.includes("app") || q.includes("platform")) {
    return {
      reply: "**SM NextGen Growth OS** is a full-stack Business Growth Operating System. Its flagship V1 module is the **Google Business Profile Growth Platform**:\n\n" +
             "• **Health Diagnostic Engine**: Scans 24 local ranking factors to generate an actionable 0–100 health score with prioritized step-by-step fixes.\n" +
             "• **AI Review Autopilot**: Generates brand-aligned, keyword-rich responses for positive, neutral, and critical reviews in 1 click.\n" +
             "• **Automated Local Posts**: Generates high-converting promotional updates and schedules them with direct tracking links.\n" +
             "• **Smart Automation Workflows**: Auto-thanks 5-star reviewers instantly and triggers high-priority alerts for reviews under 3 stars.\n" +
             "• **Revenue & Pipeline Tracking**: Connects phone calls, direction requests, and website visits to measurable business pipeline value.\n\n" +
             "The application is live right now on **SM NextGen**!",
      actions: [
        { label: "⚡ Launch Growth OS (Live App)", url: "/growth-os", type: "app" },
        { label: "📱 Open Mobile App Simulator", url: "/growth-os", type: "internal" }
      ],
      suggestions: ["How does Review Autopilot work?", "Can it manage multiple locations?", "How to book a demo?"]
    };
  }

  // 4. Reviews management & Negative reviews
  if (q.includes("review") || q.includes("rating") || q.includes("negative") || q.includes("bad review") || q.includes("fake review") || q.includes("reputation")) {
    return {
      reply: "Google Reviews are the #1 trust and conversion factor for local customer acquisition:\n\n" +
             "• **Handling Negative Reviews**: Never respond defensively. Growth OS AI generates calm, empathetic responses that acknowledge the issue, express care, and invite the reviewer to resolve it privately with leadership—protecting your public reputation.\n" +
             "• **Review Velocity System**: Trigger automated WhatsApp/SMS review links to genuine happy customers post-transaction to build unstoppable momentum.\n" +
             "• **Response Time Benchmark**: Replying within 24 hours directly boosts profile responsiveness scores within Google's local ranking algorithm.\n\n" +
             "Growth OS includes pre-configured automation rules for real-time negative review alerts and instant 5-star gratitude!",
      actions: [
        { label: "🚀 Open Review Inbox in Growth OS", url: "/growth-os/app/reviews", type: "app" },
        { label: "💬 Get Custom Review Strategy on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20need%20help%20managing%20my%20Google%20Reviews", type: "whatsapp" }
      ],
      suggestions: ["How to remove fake reviews?", "Auto-reply to 5-star reviews", "Launch Growth OS"]
    };
  }

  // 5. Getting more leads / Sales / Revenue / CAC
  if (q.includes("lead") || q.includes("sale") || q.includes("customer") || q.includes("revenue") || q.includes("grow") || q.includes("scale") || q.includes("acquisition") || q.includes("roi")) {
    return {
      reply: "To generate predictable, high-margin customer acquisition, SM NextGen executes a proven **3-Tier Growth Framework**:\n\n" +
             "1. **High-Intent Inbound (Google Maps + GEO Search)**: Capturing ready-to-buy customers searching for your high-value services locally.\n" +
             "2. **High-Velocity Performance Media (Meta + Google Ads)**: Directing targeted traffic to custom sub-second conversion funnels with an average +30% CRO lift.\n" +
             "3. **Instant AI & WhatsApp Automation**: Automatically qualifying incoming leads and booking discovery appointments within 60 seconds of inquiry.\n\n" +
             "This integrated system consistently reduces Customer Acquisition Cost (CAC) by up to 24% while accelerating qualified pipeline by 48%.",
      actions: [
        { label: "📈 Build Your Growth Engine", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20want%20to%20scale%20my%20revenue%20and%20leads", type: "whatsapp" },
        { label: "🚀 Try Growth OS App", url: "/growth-os", type: "app" }
      ],
      suggestions: ["What are the 6 Growth Pillars?", "Calculate my CAC & ROI", "Explore Services"]
    };
  }

  // 6. Industry specific (Clinic, Gym, Restaurant, Real Estate, Retail, Furniture, etc.)
  if (q.includes("doctor") || q.includes("clinic") || q.includes("dental") || q.includes("gym") || q.includes("fitness") || q.includes("restaurant") || q.includes("real estate") || q.includes("salon") || q.includes("retail") || q.includes("ecommerce") || q.includes("furniture") || q.includes("hospital") || q.includes("hotel")) {
    return {
      reply: "We have dedicated **Industry Revenue Playbooks** tailored for high-ticket local and service businesses:\n\n" +
             "• **Hyper-Local Discovery**: Target high-converting commercial intent keywords (e.g., 'top cosmetic dentist near me' or 'premium furniture showroom in Udaipur').\n" +
             "• **Conversion Proof Engine**: Automated collection of before/after case studies, video testimonials, and verified 5-star Google reviews.\n" +
             "• **Frictionless Booking & WhatsApp Checkout**: Turn profile viewers into scheduled consults and orders directly from Google Maps and high-speed landing pages.\n\n" +
             "Growth OS automatically benchmarks your business against top local competitors in your specific vertical!",
      actions: [
        { label: "🚀 Optimize Profile in Growth OS", url: "/growth-os", type: "app" },
        { label: "💬 Get Custom Industry Plan on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20need%20a%20tailored%20growth%20plan%20for%20my%20industry", type: "whatsapp" }
      ],
      suggestions: ["Run GBP Health Audit", "Talk to Growth Architect", "What is Growth OS?"]
    };
  }

  // 7. Pricing & Partnership Packages
  if (q.includes("price") || q.includes("cost") || q.includes("fee") || q.includes("package") || q.includes("plan") || q.includes("charges") || q.includes("pricing")) {
    return {
      reply: "At SM NextGen, we don't bill for vanity metrics—we deliver **Measurable Revenue ROI** through two engagement models:\n\n" +
             "1. **Growth OS Software Access**: Flexible self-serve and automated tiering for single-location businesses and multi-location franchises.\n" +
             "2. **Full Growth Partnership**: Complete end-to-end execution covering Strategy, AI Automations, High-Performance Ads, and Custom Web Infrastructure.\n\n" +
             "Connect with our leadership desk for a 15-minute scoping call to receive a transparent proposal tailored to your growth targets.",
      actions: [
        { label: "💬 Inquire on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20would%20like%20to%20know%20pricing%20and%20growth%20packages", type: "whatsapp" },
        { label: "📞 Call +91 7073538077", url: "tel:+917073538077", type: "call" }
      ],
      suggestions: ["What is Growth OS?", "Check Health Audit", "Explore Services"]
    };
  }

  // 8. General / Fallback Smart Response
  return {
    reply: "Hello! I'm your **SM NextGen AI Growth Copilot**. How can I help accelerate your business today?\n\n" +
           "• **Google Business Profile & Maps**: Elevate rankings, automate 5-star review replies, and run a 24-point audit.\n" +
           "• **SM NextGen Growth OS**: Explore our live platform running on SM NextGen with automated GBP tools.\n" +
           "• **Lead Generation & Media**: Engineer predictable customer pipelines with performance ads and sub-second funnels.\n\n" +
           "Feel free to ask questions like: *\"How do I rank in the Top 3 on Google Maps?\"*, *\"What is Growth OS?\"*, or *\"How do you handle negative reviews?\"*!",
    actions: [
      { label: "⚡ Launch Growth OS (Live App)", url: "/growth-os", type: "app" },
      { label: "💬 Chat with Founder on WhatsApp", url: "https://wa.me/917073538077?text=Hi%20SM%20NextGen,%20I%20need%20help%20growing%20my%20business", type: "whatsapp" }
    ],
    suggestions: ["How to rank in Google Maps Top 3?", "What is Growth OS?", "How to get more reviews?"]
  };
}

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const result = generateSmartReply(message, history || []);
    return NextResponse.json(result);
  } catch (error) {
    console.error("AI Copilot Error:", error);
    return NextResponse.json(
      {
        reply: "We are currently experiencing a brief connectivity issue. You can connect directly with our growth desk on WhatsApp or launch the Growth OS platform directly!",
        actions: [
          { label: "WhatsApp Us", url: "https://wa.me/917073538077", type: "whatsapp" },
          { label: "Launch Growth OS", url: "/growth-os", type: "app" }
        ],
        suggestions: ["What is Growth OS?", "How to rank in Google Maps Top 3?"]
      },
      { status: 500 }
    );
  }
}
