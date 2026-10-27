import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";
import { generateAiReviewReply } from "@/lib/growth_os/aiService";

export async function GET(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }
    if (!context.isProfileComplete) {
      return NextResponse.json({ error: "Onboarding incomplete.", requiresOnboarding: true }, { status: 403 });
    }

    const { business } = context;
    const reviews = await db.reviews.find({ businessId: business.id });

    return NextResponse.json({ success: true, reviews });
  } catch (err) {
    console.error("GET Reviews Error:", err);
    return NextResponse.json({ error: "Failed to fetch reviews." }, { status: 500 });
  }
}

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
    const { author, rating, text, theme } = body;

    if (!author || !text) {
      return NextResponse.json({ error: "Author name and review text are required." }, { status: 400 });
    }

    const starCount = parseInt(rating) || 5;
    const sentiment = starCount >= 4 ? "POSITIVE" : (starCount === 3 ? "NEUTRAL" : "NEGATIVE");

    const profDraft = await generateAiReviewReply({ review: { author, rating: starCount, text }, business, tone: "professional" });
    const friendlyDraft = await generateAiReviewReply({ review: { author, rating: starCount, text }, business, tone: "friendly" });
    const apologeticDraft = await generateAiReviewReply({ review: { author, rating: starCount, text }, business, tone: "apologetic" });

    const newReview = await db.reviews.insertOne({
      businessId: business.id,
      author: author.trim(),
      avatar: author.charAt(0).toUpperCase(),
      rating: starCount,
      date: "Just now",
      text: text.trim(),
      sentiment,
      theme: theme || "Customer Service",
      status: "UNANSWERED",
      response: null,
      responsePublishedAt: null,
      source: "manual",
      aiDrafts: {
        professional: profDraft.reply,
        friendly: friendlyDraft.reply,
        apologetic: apologeticDraft.reply
      }
    });

    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (err) {
    console.error("POST Reviews Error:", err);
    return NextResponse.json({ error: "Failed to create review." }, { status: 500 });
  }
}

export async function PUT(req) {
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
    const { id, responseText, response: directResponse, isPublishedToGoogle } = body;
    const finalReplyText = (responseText || directResponse || "").trim();

    if (!id || !finalReplyText) {
      return NextResponse.json({ error: "Review ID and response text are required." }, { status: 400 });
    }

    const existing = await db.reviews.findOne({ id, businessId: business.id });
    if (!existing) {
      return NextResponse.json({ error: "Review not found." }, { status: 404 });
    }

    let publishStatusNote = "Saved to Growth OS record (Local Approval)";
    if (isPublishedToGoogle) {
      if (business.googleConnected && business.googleAccount) {
        publishStatusNote = "Awaiting official Google API approval for direct sync";
      } else {
        publishStatusNote = "Google Profile disconnected. Reply approved locally.";
      }
    }

    const updated = await db.reviews.updateOne(
      { id },
      {
        status: "ANSWERED",
        response: finalReplyText,
        responsePublishedAt: new Date().toISOString()
      }
    );

    return NextResponse.json({
      success: true,
      review: updated,
      statusNote: publishStatusNote,
      message: "Reply saved and marked as answered!"
    });
  } catch (err) {
    console.error("PUT Reviews Error:", err);
    return NextResponse.json({ error: "Failed to update review reply." }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }
    const { business } = context;
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Review ID is required." }, { status: 400 });
    }

    await db.reviews.deleteOne({ id, businessId: business.id });
    return NextResponse.json({ success: true, message: "Review deleted." });
  } catch (err) {
    console.error("DELETE Reviews Error:", err);
    return NextResponse.json({ error: "Failed to delete review." }, { status: 500 });
  }
}
