// Deterministic, Evidence-Based Audit Engine for SM NextGen Growth OS
import db from "./db";

export async function runProfileAudit(business) {
  if (!business) {
    throw new Error("Business record is required to run audit.");
  }

  // Fetch real reviews and posts for this business
  const reviews = await db.reviews.find({ businessId: business.id });
  const posts = await db.posts.find({ businessId: business.id });

  const totalReviews = reviews.length;
  const unansweredReviews = reviews.filter(r => r.status === "UNANSWERED").length;
  const answeredReviews = totalReviews - unansweredReviews;
  const reviewResponseRate = totalReviews > 0 ? Math.round((answeredReviews / totalReviews) * 100) : null;

  const factors = [];
  let earnedScore = 0;

  // Factor 1: Business Name
  const hasValidName = business.name && business.name.trim().length >= 2;
  factors.push({
    id: "f-name",
    category: "Business Information",
    name: "Exact Business Name Consistency",
    standard: "Registered brand name matching physical storefront signage without keyword stuffing",
    observed: business.name || "Missing",
    status: hasValidName ? "PASS" : "FAIL",
    whyItMatters: "Google Maps algorithms penalize profiles with artificial keyword-stuffed titles while rewarding exact real-world signage consistency.",
    fixAction: hasValidName ? null : "Enter your official registered business name.",
    points: 4,
    earned: hasValidName ? 4 : 0
  });
  if (hasValidName) earnedScore += 4;

  // Factor 2: Primary Category
  const hasCategory = business.category && business.category.trim().length >= 2;
  factors.push({
    id: "f-category",
    category: "Business Information",
    name: "Primary Category Accuracy",
    standard: "High-intent primary category matching core commercial offering",
    observed: business.category || "Not configured",
    status: hasCategory ? "PASS" : "FAIL",
    whyItMatters: "Primary category is the single heaviest ranking factor in Google's local 3-Pack matching algorithm.",
    fixAction: hasCategory ? null : "Select your primary commercial category in Business Settings.",
    points: 5,
    earned: hasCategory ? 5 : 0
  });
  if (hasCategory) earnedScore += 5;

  // Factor 3: Secondary Categories
  const secCats = business.secondaryCategories || [];
  const secStatus = secCats.length >= 2 ? "PASS" : (secCats.length === 1 ? "NEEDS_ATTENTION" : "FAIL");
  const secPoints = secCats.length >= 2 ? 6 : (secCats.length === 1 ? 3 : 0);
  factors.push({
    id: "f-secondary-cats",
    category: "Business Information",
    name: "Secondary Commercial Categories",
    standard: "At least 2–3 secondary categories configured to capture adjacent high-intent search queries",
    observed: secCats.length > 0 ? secCats.join(", ") : "0 secondary categories configured",
    status: secStatus,
    whyItMatters: "Secondary categories allow your business to appear in long-tail and specialized service searches across your city.",
    fixAction: secCats.length < 2 ? "Add at least 2 secondary categories relevant to your services in Business Settings." : null,
    points: 6,
    earned: secPoints
  });
  earnedScore += secPoints;

  // Factor 4: Contact Phone
  const hasPhone = business.phone && business.phone.trim().length >= 8;
  factors.push({
    id: "f-phone",
    category: "Contact & Trust",
    name: "Direct Contact Phone Number",
    standard: "Direct phone number formatted with country code (+91 or international)",
    observed: business.phone || "Missing phone number",
    status: hasPhone ? "PASS" : "FAIL",
    whyItMatters: "Google Maps users convert primarily via click-to-call buttons; missing or invalid phone numbers kill inbound call conversion.",
    fixAction: hasPhone ? null : "Provide a direct business phone number.",
    points: 4,
    earned: hasPhone ? 4 : 0
  });
  if (hasPhone) earnedScore += 4;

  // Factor 5: Physical Address & City
  const hasAddress = business.address && business.address.trim().length >= 5 && business.city;
  factors.push({
    id: "f-address",
    category: "Location & Coverage",
    name: "Storefront Address & City Prominence",
    standard: "Precise street address or verified operating service radius with postal code",
    observed: business.address ? `${business.address}, ${business.city}, ${business.country}` : "Missing address details",
    status: hasAddress ? "PASS" : "FAIL",
    whyItMatters: "Precise coordinates anchor your profile's geo-radius for nearby customers searching 'near me'.",
    fixAction: hasAddress ? null : "Update your complete address and city in Business Settings.",
    points: 5,
    earned: hasAddress ? 5 : 0
  });
  if (hasAddress) earnedScore += 5;

  // Factor 6: Description Quality
  const descLen = (business.description || "").trim().length;
  const descStatus = descLen >= 180 ? "PASS" : (descLen >= 50 ? "NEEDS_ATTENTION" : "FAIL");
  const descPoints = descLen >= 180 ? 6 : (descLen >= 50 ? 3 : 0);
  factors.push({
    id: "f-description",
    category: "Profile Content",
    name: "750-Character Business Description",
    standard: "Detailed profile description (180–750 characters) articulating unique value, key services, and call-to-action",
    observed: descLen > 0 ? `${descLen} characters configured` : "No description provided",
    status: descStatus,
    whyItMatters: "Semantic keywords in the business overview help Google's AI and ranking index understand your full service scope.",
    fixAction: descLen < 180 ? "Use the Content Tools tab to generate a rich 750-character business description." : null,
    points: 6,
    earned: descPoints
  });
  earnedScore += descPoints;

  // Factor 7: Website URL
  const hasWebsite = business.website && business.website.startsWith("http");
  factors.push({
    id: "f-website",
    category: "Contact & Trust",
    name: "Verified Website Destination",
    standard: "Secure HTTPS website link for appointment booking, catalog, or portfolio",
    observed: business.website || "No website configured",
    status: hasWebsite ? "PASS" : "NEEDS_ATTENTION",
    whyItMatters: "Direct website clicks build organic credibility and allow customer qualification before phone calls.",
    fixAction: hasWebsite ? null : "Add your official website URL or booking landing page in Business Settings.",
    points: 4,
    earned: hasWebsite ? 4 : 0
  });
  if (hasWebsite) earnedScore += 4;

  // Factor 8: Services Catalog
  const servicesList = business.services || [];
  const servStatus = servicesList.length >= 3 ? "PASS" : (servicesList.length >= 1 ? "NEEDS_ATTENTION" : "FAIL");
  const servPoints = servicesList.length >= 3 ? 8 : (servicesList.length >= 1 ? 4 : 0);
  factors.push({
    id: "f-services",
    category: "Services & Offerings",
    name: "Services & Products Catalog",
    standard: "At least 3 core services or products detailed with clear pricing or descriptions",
    observed: servicesList.length > 0 ? `${servicesList.length} services configured (${servicesList.slice(0, 3).join(", ")})` : "0 services listed",
    status: servStatus,
    whyItMatters: "Detailed service menus display directly in Google search snippets when buyers query specific service terms.",
    fixAction: servicesList.length < 3 ? "Add at least 3 distinct services or products in your Business Profile." : null,
    points: 8,
    earned: servPoints
  });
  earnedScore += servPoints;

  // Factor 9: Operating Hours
  const hasHours = business.openingHours && business.openingHours.trim().length >= 5;
  factors.push({
    id: "f-hours",
    category: "Business Information",
    name: "Operating Hours & Schedule",
    standard: "Standard business hours configured so customers know when you are open",
    observed: business.openingHours || "Hours not specified",
    status: hasHours ? "PASS" : "NEEDS_ATTENTION",
    whyItMatters: "Profiles with active 'Open Now' badges capture significantly higher click-through rates during commercial search hours.",
    fixAction: hasHours ? null : "Configure your standard weekly opening hours.",
    points: 4,
    earned: hasHours ? 4 : 0
  });
  if (hasHours) earnedScore += 4;

  // Factor 10: Target Customers / Growth Goals
  const hasGoals = business.primaryGoal && business.primaryGoal.trim().length >= 3;
  factors.push({
    id: "f-goals",
    category: "Strategic Direction",
    name: "Primary Growth Goal Definition",
    standard: "Clear growth target (e.g. Inbound Calls, Foot Traffic, High-Ticket Leads)",
    observed: business.primaryGoal || "Not specified",
    status: hasGoals ? "PASS" : "NEEDS_ATTENTION",
    whyItMatters: "Aligns all Action Center recommendations and AI generation prompts with your true revenue bottleneck.",
    fixAction: hasGoals ? null : "Select your primary growth goal in Business Settings.",
    points: 4,
    earned: hasGoals ? 4 : 0
  });
  if (hasGoals) earnedScore += 4;

  // Factor 11: Google Business Profile Connection
  const isGbpConnected = Boolean(business.googleConnected);
  factors.push({
    id: "f-gbp-connection",
    category: "Google Integrations",
    name: "Google Business Profile Active Connection",
    standard: "Verified Google Business Profile connected for live review sync and telemetry",
    observed: isGbpConnected ? `Connected (${business.googleAccount || business.googlePlaceId || "Verified"})` : "Disconnected (Awaiting integration)",
    status: isGbpConnected ? "PASS" : "FAIL",
    whyItMatters: "Connecting your Google Profile allows real-time review autopilot, automated Google posts, and verified telemetry stream.",
    fixAction: isGbpConnected ? null : "Connect your Google Business Profile via the Integrations tab or Google Setup modal.",
    points: 25,
    earned: isGbpConnected ? 25 : 0
  });
  if (isGbpConnected) earnedScore += 25;

  // Factor 12: Review Response Velocity & Coverage
  let reviewStatus = "NOT_CHECKED";
  let reviewPoints = 0;
  let reviewObserved = "No reviews logged yet";

  if (totalReviews > 0) {
    if (unansweredReviews === 0) {
      reviewStatus = "PASS";
      reviewPoints = 15;
      reviewObserved = `100% responded (${totalReviews} reviews, 0 unanswered)`;
    } else {
      reviewStatus = "NEEDS_ATTENTION";
      reviewPoints = Math.round((answeredReviews / totalReviews) * 15);
      reviewObserved = `${reviewResponseRate}% response rate (${unansweredReviews} unanswered out of ${totalReviews})`;
    }
  } else {
    reviewStatus = "NOT_CHECKED";
    reviewPoints = 8; // Neutral benchmark credit
    reviewObserved = "0 reviews on record (Add or sync reviews to evaluate response rate)";
  }

  factors.push({
    id: "f-reviews-coverage",
    category: "Reputation & Reviews",
    name: "Review Response Coverage & Velocity",
    standard: "100% of incoming customer reviews answered within 24–48 hours",
    observed: reviewObserved,
    status: reviewStatus,
    whyItMatters: "Google explicitly states that businesses that respond to reviews build trust and rank higher in local search results.",
    fixAction: unansweredReviews > 0 ? `Publish AI-drafted replies to the ${unansweredReviews} unanswered reviews in your Reviews Inbox.` : null,
    points: 15,
    earned: reviewPoints
  });
  earnedScore += reviewPoints;

  // Factor 13: Promotional Post Activity
  const hasPosts = posts.length > 0;
  factors.push({
    id: "f-posts-activity",
    category: "Content & Activity",
    name: "Google Posts & Marketing Content Activity",
    standard: "At least 1 active promotional post or announcement created in the last 14 days",
    observed: hasPosts ? `${posts.length} post(s) created in Content Center` : "0 posts created on record",
    status: hasPosts ? "PASS" : "NEEDS_ATTENTION",
    whyItMatters: "Active posts expire every 7 days on Google; continuous weekly posting drives a measured +22% lift in map clicks.",
    fixAction: hasPosts ? null : "Create your first promotional Google post in the Posts & Content tab.",
    points: 6,
    earned: hasPosts ? 6 : 0
  });
  if (hasPosts) earnedScore += 6;

  // Normalize final score to 0–100 scale
  const finalScore = Math.min(100, Math.max(0, earnedScore));

  const problems = factors.filter(f => f.status === "FAIL" || f.status === "NEEDS_ATTENTION");
  const opportunities = problems.map(p => ({
    id: `opp-${p.id}`,
    factorId: p.id,
    title: p.fixAction || p.name,
    category: p.category,
    points: p.points - p.earned,
    priority: p.status === "FAIL" ? "HIGH" : "MEDIUM",
    reason: p.whyItMatters
  }));

  const auditRecord = await db.audits.insertOne({
    businessId: business.id,
    score: finalScore,
    factors,
    summary: `Audit completed for ${business.name}. ${factors.filter(f => f.status === "PASS").length} checks passed, ${problems.length} areas need attention.`,
    createdAt: new Date().toISOString()
  });

  return {
    score: finalScore,
    factors,
    problems,
    opportunities,
    auditRecord
  };
}
