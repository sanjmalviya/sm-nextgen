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
      return NextResponse.json({ error: "Onboarding incomplete. Please complete business setup.", requiresOnboarding: true }, { status: 403 });
    }

    const { business } = context;
    const tasks = await db.tasks.find({ businessId: business.id });

    return NextResponse.json({ success: true, tasks });
  } catch (err) {
    console.error("GET Tasks Error:", err);
    return NextResponse.json({ error: "Failed to fetch tasks." }, { status: 500 });
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
    const { title, category, priority, due, impact, notes } = body;

    if (!title || title.trim().length < 3) {
      return NextResponse.json({ error: "Task title is required (minimum 3 characters)." }, { status: 400 });
    }

    const newTask = await db.tasks.insertOne({
      businessId: business.id,
      title: title.trim(),
      category: category || "Profile",
      priority: priority || "MEDIUM",
      status: "PENDING",
      due: due || "This Week",
      impact: impact || "+5 Growth Score",
      notes: notes || ""
    });

    return NextResponse.json({ success: true, task: newTask }, { status: 201 });
  } catch (err) {
    console.error("POST Tasks Error:", err);
    return NextResponse.json({ error: "Failed to create task." }, { status: 500 });
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
    const { id, status, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Task ID is required." }, { status: 400 });
    }

    const existing = await db.tasks.findOne({ id, businessId: business.id });
    if (!existing) {
      return NextResponse.json({ error: "Task not found." }, { status: 404 });
    }

    const updated = await db.tasks.updateOne(
      { id },
      {
        ...updates,
        status: status || existing.status,
        completedAt: status === "COMPLETED" ? new Date().toISOString() : null
      }
    );

    return NextResponse.json({ success: true, task: updated });
  } catch (err) {
    console.error("PUT Tasks Error:", err);
    return NextResponse.json({ error: "Failed to update task." }, { status: 500 });
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
      return NextResponse.json({ error: "Task ID is required." }, { status: 400 });
    }

    await db.tasks.deleteOne({ id, businessId: business.id });
    return NextResponse.json({ success: true, message: "Task deleted." });
  } catch (err) {
    console.error("DELETE Tasks Error:", err);
    return NextResponse.json({ error: "Failed to delete task." }, { status: 500 });
  }
}
