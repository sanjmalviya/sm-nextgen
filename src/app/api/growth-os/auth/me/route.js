import { NextResponse } from "next/server";
import { getWorkspaceContext } from "@/lib/growth_os/auth";
import db from "@/lib/growth_os/db";

export async function GET(req) {
  try {
    const context = await getWorkspaceContext(req);

    if (context.error) {
      return NextResponse.json({ user: null, isAuthenticated: false, authenticated: false }, { status: 200 });
    }

    const { user, workspace, business, isProfileComplete } = context;

    // Get all businesses in workspace
    const businesses = await db.businesses.find({ workspaceId: workspace.id });

    return NextResponse.json({
      isAuthenticated: true,
      authenticated: true,
      user,
      workspace,
      businesses,
      activeBusiness: business,
      hasCompletedProfile: Boolean(isProfileComplete)
    });
  } catch (err) {
    console.error("Auth Me Error:", err);
    return NextResponse.json({ user: null, isAuthenticated: false }, { status: 200 });
  }
}
