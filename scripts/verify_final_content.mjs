function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

async function verify() {
  console.log("--- Verifying SM NextGen Final Homepage Content (With Entity Decoding) ---");
  const res = await fetch("http://localhost:3000/");
  if (!res.ok) {
    console.error(`HTTP Error: ${res.status}`);
    process.exit(1);
  }

  const rawHtml = await res.text();
  const html = decodeHtml(rawHtml);
  // Strip tags and normalize whitespace
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  const checks = [
    { name: "Brand Positioning Eyebrow", phrase: "YOUR COMPLETE BUSINESS GROWTH PARTNER" },
    { name: "Hero Headline", phrase: "Make Every Part of Your Business Work Towards Growth." },
    { name: "Hero Subhead", phrase: "SM NextGen brings strategy, marketing, technology and AI together to help businesses attract the right customers, convert more opportunities and build stronger growth systems." },
    { name: "Hero Point 1", phrase: "Business-First Strategy" },
    { name: "Hero Point 2", phrase: "Connected Marketing & Technology" },
    { name: "Hero Point 3", phrase: "Measurable Growth & Performance" },
    { name: "Section 02 Eyebrow", phrase: "THE REAL CHALLENGE" },
    { name: "Section 02 Headline", phrase: "Growth Gets Harder When Every Part Works Separately." },
    { name: "Section 02 Lead 1", phrase: "More ads cannot fix a weak conversion funnel. More leads cannot help if follow-ups are delayed. More tools cannot create efficiency when your systems don't communicate." },
    { name: "Section 02 Lead 2", phrase: "Growth requires more than individual activities. It requires the right parts working together." },
    { name: "Section 02 Card 1", phrase: "Disconnected Marketing" },
    { name: "Section 02 Card 2", phrase: "Lost Opportunities" },
    { name: "Section 02 Card 3", phrase: "Weak Conversion Systems" },
    { name: "Section 02 Card 4", phrase: "Operational Complexity" },
    { name: "Section 02 Closing", phrase: "The problem isn't always a lack of effort. Sometimes, the system behind the effort needs to work better." },
    { name: "Section 03 Eyebrow", phrase: "A BETTER WAY TO GROW" },
    { name: "Section 03 Headline", phrase: "One Business. Connected Growth Systems." },
    { name: "Section 03 Lead", phrase: "Your business doesn't grow through marketing alone. It grows when positioning, customer acquisition, digital experiences, sales processes and technology work together." },
    { name: "Section 03 Visual Flow", phrase: "STRATEGY → BRAND → DEMAND → LEADS → CONVERSION → SALES → REVENUE → SCALE" },
    { name: "Section 03 Closing", phrase: "One connected approach. Multiple growth opportunities." },
    { name: "Section 04 Eyebrow", phrase: "WHAT WE BRING TO THE TABLE" },
    { name: "Section 04 Headline", phrase: "The Right Capabilities. Built Around Your Business." },
    { name: "Section 04 Capability 01", phrase: "Growth Strategy" },
    { name: "Section 04 Capability 01 Desc", phrase: "Build a clearer direction before investing in growth." },
    { name: "Section 04 Capability 02", phrase: "Marketing & Demand Generation" },
    { name: "Section 04 Capability 02 Desc", phrase: "Reach the right people and create consistent opportunities." },
    { name: "Section 04 Capability 03", phrase: "Brand & Digital Experience" },
    { name: "Section 04 Capability 03 Desc", phrase: "Create digital experiences that build trust and drive action." },
    { name: "Section 04 Capability 04", phrase: "Conversion & Revenue" },
    { name: "Section 04 Capability 04 Desc", phrase: "Make more of your existing traffic, leads and opportunities." },
    { name: "Section 04 Capability 05", phrase: "AI & Automation" },
    { name: "Section 04 Capability 05 Desc", phrase: "Make business processes smarter, faster and more connected." },
    { name: "Section 04 Capability 06", phrase: "Data & Business Intelligence" },
    { name: "Section 04 Capability 06 Desc", phrase: "Turn business activity into meaningful decisions." },
    { name: "Section 04 Additional", phrase: "Where relevant, we also support business setup, GST, accounting and compliance requirements through appropriate professional services and partners." },
    { name: "Section 05 Eyebrow", phrase: "OUR APPROACH" },
    { name: "Section 05 Headline", phrase: "From Business Challenges to Measurable Progress." },
    { name: "Section 05 Subhead", phrase: "Every business has different customers, economics, challenges and growth opportunities. Our process starts by understanding those differences." },
    { name: "Section 05 Closing", phrase: "No unnecessary complexity. No one-size-fits-all playbook. Just a clear approach built around your business." },
    { name: "Section 05 CTA", phrase: "Explore Our Growth Framework" },
    { name: "Section 06 Eyebrow", phrase: "SELECTED WORK & CASE STUDIES" },
    { name: "Section 06 Headline", phrase: "Real Business Challenges. Thoughtful Strategies. Measurable Outcomes." },
    { name: "Section 06 Subhead", phrase: "Every business has a different growth story. We focus on understanding the challenge, finding the opportunity and implementing the right solution." },
    { name: "Section 06 Closing", phrase: "We believe good work should be understood through the problem solved and the impact created — not just the services delivered." },
    { name: "Section 07 Eyebrow", phrase: "GROWTH ISN'T ONE-SIZE-FITS-ALL" },
    { name: "Section 07 Headline", phrase: "Different Industries. Different Growth Challenges." },
    { name: "Section 07 Subhead", phrase: "The way a customer discovers, evaluates and chooses a business varies across industries. Our approach adapts to the business model, buying behaviour and commercial priorities." },
    { name: "Section 07 CTA", phrase: "Discuss Your Industry" },
    { name: "Section 08 Eyebrow", phrase: "CLARITY BEHIND EVERY DECISION" },
    { name: "Section 08 Headline", phrase: "Know What's Working. Understand What Needs to Improve." },
    { name: "Section 08 Lead", phrase: "Marketing performance should mean more than impressions, clicks and likes." },
    { name: "Section 08 Closing", phrase: "Better visibility leads to better decisions." },
    { name: "Section 09 Eyebrow", phrase: "POWERED BY SM NEXTGEN" },
    { name: "Section 09 Headline", phrase: "Meet Growth OS. A Smarter Way to Manage Local Business Growth." },
    { name: "Section 09 Lead", phrase: "Managing a local business online often means juggling business listings, customer reviews, profile updates and performance tracking across disconnected tools." },
    { name: "Section 09 Closing", phrase: "Built by SM NextGen. Designed to make local business growth easier to manage." },
    { name: "Section 10 Eyebrow", phrase: "MORE THAN A SERVICE PROVIDER" },
    { name: "Section 10 Headline", phrase: "A Partner That Understands the Bigger Picture." },
    { name: "Section 10 Lead", phrase: "Your marketing, technology and business operations shouldn't work against each other." },
    { name: "Section 10 Closing", phrase: "We're here to help you build a stronger business — not simply add another vendor to manage." },
    { name: "Section 11 Eyebrow", phrase: "YOUR NEXT GROWTH OPPORTUNITY STARTS HERE" },
    { name: "Section 11 Headline", phrase: "Let's Find What's Holding Your Business Back — and What Comes Next." },
    { name: "Section 11 Form Heading", phrase: "Tell Us About Your Business." },
    { name: "Section 11 Submit", phrase: "Request a Growth Conversation" },
    { name: "Section 11 Supporting", phrase: "A conversation about your business. No generic packages. No unnecessary sales pressure." },
    { name: "Section 12 Wordmark", phrase: "SM NEXTGEN" },
    { name: "Section 12 Tagline", phrase: "Your Complete Business Growth Partner." },
    { name: "Section 12 Description", phrase: "We bring strategy, marketing, technology and AI together to help businesses build stronger brands, smarter systems and sustainable growth." },
    { name: "Section 12 Signature", phrase: "SM NEXTGEN — Built for Business Growth." },
    { name: "Section 12 Copyright", phrase: "© 2026 SM NextGen. All rights reserved." }
  ];

  let failed = 0;
  for (const c of checks) {
    // Normalizing dashes and quotes for comparison
    const normPhrase = c.phrase.replace(/—/g, "-").replace(/'/g, "'");
    const normText = text.replace(/—/g, "-").replace(/'/g, "'");
    const passed = normText.includes(normPhrase);
    console.log(`[${passed ? "PASS" : "FAIL"}] ${c.name}`);
    if (!passed) {
      console.log(`   Expected phrase: "${c.phrase}"`);
      failed++;
    }
  }

  // Founder Privacy Check
  const hasSanjay = /sanjay/i.test(html);
  console.log(`[${!hasSanjay ? "PASS" : "FAIL"}] Founder privacy check (0 mentions of Sanjay)`);

  if (failed > 0 || hasSanjay) {
    console.error(`\nFAILED ${failed} check(s).`);
    process.exit(1);
  }

  console.log("\n=======================================================");
  console.log("   ALL CHECKS PASSED: 100% ACCURATE HOMEPAGE CONTENT");
  console.log("=======================================================");
}

verify();
