import { NextResponse } from "next/server";
import { getWorkspaceContext } from "@/lib/growth_os/auth";
import {
  generateAiReviewReply,
  generateAiPost,
  generateCopilotAnswer,
  generateAiDescription
} from "@/lib/growth_os/aiService";

export async function POST(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }
    if (!context.isProfileComplete) {
      return NextResponse.json({ error: "Onboarding incomplete.", requiresOnboarding: true }, { status: 403 });
    }

    const { business } = context;
    const body = await req.json();
    const { action, ...params } = body;

    if (action === "review_reply" || action === "reply_review") {
      const result = await generateAiReviewReply({
        review: params.review,
        business,
        tone: params.tone || "professional"
      });
      return NextResponse.json({
        success: true,
        reply: result.reply,
        result: result.reply,
        ...result
      });
    }

    if (action === "create_post" || action === "generate_post") {
      const result = await generateAiPost({
        business,
        topic: params.topic,
        offerType: params.offerType,
        ctaType: params.ctaType || params.cta
      });
      return NextResponse.json({
        success: true,
        result: result.content,
        reply: result.content,
        content: result.content,
        title: result.title,
        ...result
      });
    }

    if (action === "generate_description") {
      const result = await generateAiDescription({
        business,
        keywords: params.keywords
      });
      return NextResponse.json({
        success: true,
        result: result.description,
        reply: result.description,
        ...result
      });
    }

    if (action === "copilot_chat") {
      const result = await generateCopilotAnswer({
        query: params.message || params.query,
        business,
        auditScore: params.auditScore !== undefined ? params.auditScore : params.score,
        history: params.history
      });
      return NextResponse.json({
        success: true,
        reply: result.reply,
        result: result.reply,
        ...result
      });
    }

    return NextResponse.json({ error: "Unknown AI action." }, { status: 400 });
  } catch (err) {
    console.error("AI Route Error:", err);
    return NextResponse.json({ error: "Failed to process AI request." }, { status: 500 });
  }
}
