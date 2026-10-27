import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";

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
    const posts = await db.posts.find({ businessId: business.id });

    return NextResponse.json({ success: true, posts });
  } catch (err) {
    console.error("GET Posts Error:", err);
    return NextResponse.json({ error: "Failed to fetch posts." }, { status: 500 });
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
    const { title, content, cta, ctaUrl, status, scheduledFor } = body;

    if (!content || content.trim().length < 10) {
      return NextResponse.json({ error: "Post content must be at least 10 characters." }, { status: 400 });
    }

    const newPost = await db.posts.insertOne({
      businessId: business.id,
      title: (title || "Promotional Post").trim(),
      content: content.trim(),
      cta: cta || "Call Now",
      ctaUrl: ctaUrl || business.website || "",
      status: status || "DRAFT",
      scheduledFor: scheduledFor || null,
      publishedAt: status === "PUBLISHED" ? new Date().toISOString() : null
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (err) {
    console.error("POST Posts Error:", err);
    return NextResponse.json({ error: "Failed to create post." }, { status: 500 });
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
      return NextResponse.json({ error: "Post ID is required." }, { status: 400 });
    }

    await db.posts.deleteOne({ id, businessId: business.id });
    return NextResponse.json({ success: true, message: "Post deleted." });
  } catch (err) {
    console.error("DELETE Posts Error:", err);
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}
