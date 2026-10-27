import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";

export async function GET(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }

    const { workspace, business } = context;
    const allBusinesses = await db.businesses.find({ workspaceId: workspace.id });

    return NextResponse.json({
      success: true,
      activeBusiness: business,
      businesses: allBusinesses,
      isCompleted: Boolean(business && business.isCompleted)
    });
  } catch (err) {
    console.error("GET Business Error:", err);
    return NextResponse.json({ error: "Failed to fetch business profile." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }

    const { user, workspace } = context;
    const body = await req.json();

    const {
      name,
      category,
      secondaryCategories,
      country,
      city,
      address,
      website,
      phone,
      description,
      services,
      openingHours,
      targetCustomers,
      primaryGoal
    } = body;

    // Strict validation of mandatory fields
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Valid business name is required (minimum 2 characters)." }, { status: 400 });
    }
    if (!category || category.trim().length < 2) {
      return NextResponse.json({ error: "Primary business category or industry is required." }, { status: 400 });
    }
    if (!country || country.trim().length < 2) {
      return NextResponse.json({ error: "Country is required." }, { status: 400 });
    }
    if (!city || city.trim().length < 2) {
      return NextResponse.json({ error: "City or region is required." }, { status: 400 });
    }
    if (!address || address.trim().length < 2) {
      return NextResponse.json({ error: "Primary location, address, or service radius is required." }, { status: 400 });
    }

    const servicesList = Array.isArray(services) 
      ? services 
      : (typeof services === "string" ? services.split(",").map(s => s.trim()).filter(Boolean) : []);

    const secondaryCatList = Array.isArray(secondaryCategories)
      ? secondaryCategories
      : (typeof secondaryCategories === "string" ? secondaryCategories.split(",").map(c => c.trim()).filter(Boolean) : []);

    const newBusiness = await db.businesses.insertOne({
      workspaceId: workspace.id,
      createdBy: user.id,
      name: name.trim(),
      category: category.trim(),
      secondaryCategories: secondaryCatList,
      country: country.trim(),
      city: city.trim(),
      address: address.trim(),
      website: (website || "").trim(),
      phone: (phone || "").trim(),
      description: (description || "").trim(),
      services: servicesList,
      openingHours: (openingHours || "Mon-Sat: 09:00 AM - 07:00 PM").trim(),
      targetCustomers: (targetCustomers || "").trim(),
      primaryGoal: (primaryGoal || "Get more calls & inquiries").trim(),
      isCompleted: true,
      googleConnected: false,
      googlePlaceId: "",
      googleMapsUrl: "",
      googleAccount: "",
      lastSyncedAt: null
    });

    // Automatically create initial initial growth tasks for this business
    await db.tasks.insertOne({
      businessId: newBusiness.id,
      title: `Connect verified Google Business Profile for ${newBusiness.name}`,
      category: "Google Setup",
      priority: "HIGH",
      status: "PENDING",
      due: "Immediate",
      impact: "+25 Growth Score",
      notes: "Link your Google account or provide Place ID to stream real review telemetry."
    });

    await db.tasks.insertOne({
      businessId: newBusiness.id,
      title: `Verify NAP (Name, Address, Phone) consistency across local directories`,
      category: "Local SEO",
      priority: "MEDIUM",
      status: "PENDING",
      due: "Week 1",
      impact: "+10 Growth Score",
      notes: `Confirm ${newBusiness.address}, ${newBusiness.city} matches official government filings.`
    });

    // Auto-create initial settings
    await db.settings.insertOne({
      businessId: newBusiness.id,
      aiTone: "Professional & Warm",
      primaryGoal: newBusiness.primaryGoal,
      currency: country.toLowerCase().includes("india") ? "INR" : "USD",
      notificationEmail: user.email
    });

    return NextResponse.json({
      success: true,
      business: newBusiness,
      message: "Business profile created successfully! Growth OS tools unlocked."
    }, { status: 201 });

  } catch (err) {
    console.error("POST Business Error:", err);
    return NextResponse.json({ error: "An unexpected error occurred while saving business profile." }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }

    const { workspace } = context;
    const body = await req.json();
    const { id, ...updates } = body;

    const businessId = id || context.business?.id;
    if (!businessId) {
      return NextResponse.json({ error: "Business ID is required for updates." }, { status: 400 });
    }

    const existing = await db.businesses.findOne({ id: businessId, workspaceId: workspace.id });
    if (!existing) {
      return NextResponse.json({ error: "Business not found in this workspace." }, { status: 404 });
    }

    const updated = await db.businesses.updateOne({ id: businessId }, updates);

    return NextResponse.json({
      success: true,
      business: updated,
      message: "Business profile updated successfully."
    });
  } catch (err) {
    console.error("PUT Business Error:", err);
    return NextResponse.json({ error: "Failed to update business profile." }, { status: 500 });
  }
}
