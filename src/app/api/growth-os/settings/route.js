import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";

export async function GET(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }
    const { business } = context;
    if (!business) {
      return NextResponse.json({ error: "No business found.", requiresOnboarding: true }, { status: 404 });
    }

    let settings = await db.settings.findOne({ businessId: business.id });
    if (!settings) {
      settings = await db.settings.insertOne({
        businessId: business.id,
        aiTone: "Professional & Warm",
        primaryGoal: business.primaryGoal || "Get more calls",
        currency: "USD",
        notificationEmail: context.user.email
      });
    }

    return NextResponse.json({ success: true, settings, business });
  } catch (err) {
    console.error("GET Settings Error:", err);
    return NextResponse.json({ error: "Failed to fetch settings." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }
    const { business } = context;
    if (!business) {
      return NextResponse.json({ error: "No business found.", requiresOnboarding: true }, { status: 404 });
    }

    const body = await req.json();
    const { bizName, bizPhone, bizAddress, bizWebsite, bizGoal, aiTone, currency } = body;

    // 1. Update business record
    if (bizName || bizPhone || bizAddress || bizWebsite || bizGoal) {
      await db.businesses.updateOne(
        { id: business.id },
        {
          ...(bizName && { name: bizName.trim() }),
          ...(bizPhone && { phone: bizPhone.trim() }),
          ...(bizAddress && { address: bizAddress.trim() }),
          ...(bizWebsite && { website: bizWebsite.trim() }),
          ...(bizGoal && { primaryGoal: bizGoal.trim() })
        }
      );
    }

    // 2. Update settings record
    let settings = await db.settings.findOne({ businessId: business.id });
    if (settings) {
      settings = await db.settings.updateOne(
        { businessId: business.id },
        {
          ...(aiTone && { aiTone }),
          ...(bizGoal && { primaryGoal: bizGoal }),
          ...(currency && { currency })
        }
      );
    } else {
      settings = await db.settings.insertOne({
        businessId: business.id,
        aiTone: aiTone || "Professional & Warm",
        primaryGoal: bizGoal || business.primaryGoal,
        currency: currency || "USD"
      });
    }

    const updatedBiz = await db.businesses.findOne({ id: business.id });

    return NextResponse.json({
      success: true,
      message: "Settings and business profile saved permanently to database!",
      settings,
      business: updatedBiz
    });
  } catch (err) {
    console.error("POST Settings Error:", err);
    return NextResponse.json({ error: "Failed to update settings." }, { status: 500 });
  }
}
