// AI Service for SM NextGen Growth OS using official @google/genai SDK
import { GoogleGenAI } from "@google/genai";

export function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";
}

export function getAiClient() {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;
  try {
    return new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
    return null;
  }
}

export function isGeminiConfigured() {
  return Boolean(getGeminiApiKey());
}

// Model standard: High-throughput, ultra-fast Gemini 3.5 model with failover
const PRIMARY_MODEL = "gemini-3.5-flash-lite";
const FALLBACK_MODEL = "gemini-3.8-flash";

async function generateContentWithGemini(client, prompt) {
  try {
    const res = await client.models.generateContent({
      model: PRIMARY_MODEL,
      contents: prompt
    });
    if (res && res.text) return { text: res.text, model: PRIMARY_MODEL };
  } catch (err) {
    console.warn(`Primary model (${PRIMARY_MODEL}) failed: ${err.message}. Trying ${FALLBACK_MODEL}...`);
    try {
      const res = await client.models.generateContent({
        model: FALLBACK_MODEL,
        contents: prompt
      });
      if (res && res.text) return { text: res.text, model: FALLBACK_MODEL };
    } catch (e2) {
      console.warn(`Fallback model (${FALLBACK_MODEL}) also failed: ${e2.message}`);
    }
  }
  return null;
}

// 1. Review Reply Generator
export async function generateAiReviewReply({ review, business, tone = "professional" }) {
  const bizName = business?.name || "our business";
  const bizCategory = business?.category || "Local Business";
  const bizCity = business?.city || "our city";
  const author = review?.author || "Valued Customer";
  const rating = review?.rating || 5;
  const reviewText = review?.text || "Great experience!";

  const client = getAiClient();
  if (client) {
    try {
      const prompt = "You are an expert customer relations manager for " + JSON.stringify(bizName) + ", a " + bizCategory + " located in " + bizCity + ".\n" +
        "Write a personalized, brand-aligned public response to this Google Review.\n\n" +
        "Review Details:\n" +
        "- Customer Name: " + author + "\n" +
        "- Star Rating: " + rating + "/5 stars\n" +
        "- Review Content: " + JSON.stringify(reviewText) + "\n" +
        "- Desired Response Tone: " + tone + "\n\n" +
        "Guidelines:\n" +
        "1. Greet customer by name.\n" +
        "2. Directly acknowledge specific details mentioned.\n" +
        "3. If positive (4-5 stars): Express gratitude, highlight dedication to quality, welcome them back.\n" +
        "4. If critical (1-3 stars): Apologize empathetically, emphasize service standards, invite them to call " + (business?.phone || "our desk") + ".\n" +
        "5. Do NOT invent fake promotions, false policies, or unoffered services.\n" +
        "6. Output under 80 words without subject lines or placeholders.";

      const response = await generateContentWithGemini(client, prompt);

      if (response && response.text) {
        return {
          reply: response.text.trim(),
          source: "gemini-ai",
          model: response.model,
          isLiveAi: true
        };
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to deterministic template:", err.message);
    }
  }

  // High-Quality Deterministic Grounded Fallback
  let reply = "";
  if (rating >= 4) {
    if (tone === "friendly") {
      reply = "Hi " + author + "! Thank you so much for the wonderful review. The entire team at " + bizName + " in " + bizCity + " is thrilled to hear about your great experience. We look forward to seeing you again soon!";
    } else if (tone === "premium") {
      reply = "Dear " + author + ", thank you for taking the time to share your feedback. At " + bizName + ", we hold our customer experience to the highest standard. It was our pleasure serving you, and we appreciate your support.";
    } else {
      reply = "Dear " + author + ", thank you for choosing " + bizName + ". We truly appreciate your positive feedback and are delighted that you had a great experience with our team. We look forward to serving you again in " + bizCity + ".";
    }
  } else if (rating === 3) {
    reply = "Dear " + author + ", thank you for your honest feedback regarding " + bizName + ". We are always working to elevate our standards. Please contact our leadership desk directly at " + (business?.phone || "our office") + " so we can understand how to make your next experience a 5-star one.";
  } else {
    reply = "Dear " + author + ", we sincerely apologize that your experience with " + bizName + " did not meet your expectations. Customer satisfaction is our highest priority. Please reach out to us directly at " + (business?.phone || business?.email || "our contact desk") + " so we can personally listen to your concerns and make things right.";
  }

  return {
    reply,
    source: "deterministic-grounded",
    isLiveAi: false,
    notice: "Generated with grounded business engine. To enable custom generative reasoning, add GEMINI_API_KEY to your environment."
  };
}

// 2. Google Promotional Post Generator
export async function generateAiPost({ business, topic, offerType = "Standard Update", ctaType = "Call Now" }) {
  const bizName = business?.name || "Our Business";
  const bizCategory = business?.category || "Local Business";
  const bizCity = business?.city || "our city";
  const services = (business?.services || []).join(", ") || "our professional services";

  const client = getAiClient();
  if (client) {
    try {
      const prompt = "You are a senior local marketing copywriter for " + JSON.stringify(bizName) + ", a " + bizCategory + " located in " + bizCity + ".\n" +
        "Write an engaging, high-converting Google Business Profile Post.\n\n" +
        "Context:\n" +
        "- Business: " + bizName + " (" + bizCategory + ")\n" +
        "- Services: " + services + "\n" +
        "- Post Topic / Theme: " + (topic || "Seasonal Service Highlight") + "\n" +
        "- Offer Type: " + offerType + "\n" +
        "- Target Call-To-Action: " + ctaType + "\n\n" +
        "Requirements:\n" +
        "1. Catchy headline (with 1-2 relevant emojis).\n" +
        "2. Compelling 2-3 paragraph body copy emphasizing client benefits and local availability in " + bizCity + ".\n" +
        "3. Clear call-to-action inviting the reader to " + ctaType.toLowerCase() + " at " + (business?.phone || "our local office") + ".\n" +
        "4. 3-4 hyper-local hashtags.\n" +
        "5. Output ONLY valid JSON with keys: title, content, suggestedCta.";

      const response = await generateContentWithGemini(client, prompt);

      if (response && response.text) {
        try {
          const cleanJson = response.text.replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "").trim();
          const parsed = JSON.parse(cleanJson);
          return { ...parsed, isLiveAi: true, source: "gemini-ai", model: response.model };
        } catch (e) {
          return {
            title: "Special Update from " + bizName,
            content: response.text.trim(),
            suggestedCta: ctaType,
            isLiveAi: true,
            source: "gemini-ai",
            model: response.model
          };
        }
      }
    } catch (err) {
      console.warn("Gemini post generation error:", err.message);
    }
  }

  // Deterministic Grounded Post
  return {
    title: "⭐ Experience Excellence with " + bizName + " in " + bizCity,
    content: "Looking for dependable " + bizCategory.toLowerCase() + " in " + bizCity + "? At " + bizName + ", we pride ourselves on exceptional quality, prompt service, and measurable results. \n\nSpecializing in " + services + ", our team is dedicated to serving the local " + bizCity + " community. Contact us today to learn more or schedule your visit!\n\n📍 Located at: " + (business?.address || bizCity) + "\n📞 Direct Line: " + (business?.phone || "Contact Us"),
    suggestedCta: ctaType,
    isLiveAi: false,
    source: "deterministic-grounded"
  };
}

// 3. AI Growth Copilot Chat Assistant
export async function generateCopilotAnswer({ query, business, auditScore, history = [] }) {
  const bizName = business?.name || "your business";
  const bizCategory = business?.category || "Local Business";
  const bizCity = business?.city || "Udaipur";

  const client = getAiClient();
  if (client) {
    try {
      const prompt = "You are the official SM NextGen AI Growth Copilot, embedded inside Growth OS.\n" +
        "You are directly advising the owner of " + JSON.stringify(bizName) + ", a " + bizCategory + " in " + bizCity + ".\n\n" +
        "Current Business Telemetry & Context:\n" +
        "- Business: " + bizName + "\n" +
        "- Category: " + bizCategory + "\n" +
        "- Address: " + (business?.address || "Configured") + ", " + bizCity + "\n" +
        "- Website: " + (business?.website || "None") + "\n" +
        "- Google Maps Connected: " + (business?.googleConnected ? "Yes" : "No (Disconnected)") + "\n" +
        "- Current Growth OS Score: " + (auditScore || 0) + "/100\n" +
        "- Services Offered: " + ((business?.services || []).join(", ") || "General") + "\n\n" +
        "User Question: " + JSON.stringify(query) + "\n\n" +
        "Provide a sharp, practical, commercially savvy answer tailored to " + bizName + " and their local market. Suggest 2-3 specific action items in Growth OS.";

      const response = await generateContentWithGemini(client, prompt);

      if (response && response.text) {
        return {
          reply: response.text.trim(),
          isLiveAi: true,
          source: "gemini-ai",
          model: response.model
        };
      }
    } catch (err) {
      console.warn("Copilot Gemini call error:", err.message);
    }
  }

  // Smart Contextual Engine Fallback
  const q = (query || "").toLowerCase();
  let reply = "";

  if (q.includes("score") || q.includes("audit")) {
    reply = "Your current **Growth OS Score is " + (auditScore || 0) + "/100** for **" + bizName + "**.\n\nTo elevate your score:\n1. **Connect Google Business Profile**: This is the single largest factor (+25 pts) to unlock live review sync and maps rank telemetry.\n2. **Review Response Rate**: Ensure 100% of reviews are answered within 48 hours.\n3. **Services Catalog**: List at least 3 distinct services in your Business Profile.";
  } else if (q.includes("review") || q.includes("rating")) {
    reply = "For **" + bizName + "** in **" + bizCity + "**, customer reviews are your strongest conversion multiplier.\n\n• **Speed-to-Reply**: Replying to reviews within 24 hours directly boosts profile responsiveness in Google's ranking algorithm.\n• **AI Drafts**: Open your **Reviews Tab** to generate personalized responses in 1-click.\n• **Proactive Collection**: Share your Google review link with happy clients immediately following service delivery.";
  } else if (q.includes("google") || q.includes("rank") || q.includes("3-pack") || q.includes("map")) {
    reply = "To dominate the **Google Maps 3-Pack** in **" + bizCity + "**:\n\n1. **Primary Category**: Verify that \"" + bizCategory + "\" matches customer intent.\n2. **Local Address Consistency**: Ensure your NAP (Name, Address, Phone) matches on your website and local directories.\n3. **Weekly Google Posts**: Profiles publishing weekly updates get up to +22% more navigation requests.";
  } else {
    reply = "Hello! As your AI Growth Copilot for **" + bizName + "** in **" + bizCity + "**, I can help you improve your local search prominence, automate review management, and grow customer inflow.\n\nFeel free to ask me about:\n• *\"How do I raise my Growth Score from " + (auditScore || 0) + "/100?\"*\n• *\"What Google posts should I publish this week?\"*\n• *\"How to handle critical reviews professionally?\"*";
  }

  return {
    reply,
    isLiveAi: false,
    source: "contextual-engine",
    notice: "Operating on local contextual engine. Add GEMINI_API_KEY to .env for generative model reasoning."
  };
}

// 4. Google Business Profile Description Generator (Max 750 Chars)
export async function generateAiDescription({ business, keywords }) {
  const bizName = business?.name || "Our Business";
  const bizCategory = business?.category || "Local Business";
  const bizCity = business?.city || "our city";
  const services = (business?.services || []).join(", ") || keywords || "professional services";

  const client = getAiClient();
  if (client) {
    try {
      const prompt = "You are an SEO expert specializing in Google Business Profiles.\n" +
        "Write an authoritative, engaging 750-character business description for " + JSON.stringify(bizName) + ".\n\n" +
        "Business Profile:\n" +
        "- Category: " + bizCategory + "\n" +
        "- City: " + bizCity + "\n" +
        "- Core Services / Specialties: " + services + "\n" +
        "- Phone: " + (business?.phone || "Direct Contact") + "\n\n" +
        "Guidelines:\n" +
        "1. Hook the reader immediately with the business's core value proposition in " + bizCity + ".\n" +
        "2. Naturally weave in relevant local search keywords without keyword stuffing.\n" +
        "3. Highlight commitment to customer satisfaction and quality.\n" +
        "4. End with a clear call-to-action.\n" +
        "5. Keep the total length strictly between 550 and 740 characters (Google Business Profile limit is 750 characters).";

      const response = await generateContentWithGemini(client, prompt);

      if (response && response.text) {
        return {
          description: response.text.trim(),
          source: "gemini-ai",
          model: response.model,
          isLiveAi: true
        };
      }
    } catch (err) {
      console.warn("Gemini description generation error:", err.message);
    }
  }

  // Deterministic Grounded Description
  const desc = `${bizName} is ${bizCity}'s trusted provider for commercial excellence and ${bizCategory.toLowerCase()}. Specializing in ${services}, our team combines industry expertise with dedicated customer service. Situated conveniently in ${bizCity}, we deliver measurable results and five-star satisfaction. Call ${business?.phone || "+91 70735 38077"} or visit our website to get started today.`;
  return {
    description: desc,
    source: "deterministic-grounded",
    isLiveAi: false
  };
}
