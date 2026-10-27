import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";

export async function GET(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }

    const { user, workspace } = context;
    const members = await db.workspaceMembers.find({ userId: user.id });
    const workspaceIds = members.map(m => m.workspaceId);
    
    const allWorkspaces = await Promise.all(
      workspaceIds.map(id => db.workspaces.findOne({ id }))
    );

    const businesses = await db.businesses.find({ workspaceId: workspace.id });

    return NextResponse.json({
      success: true,
      activeWorkspace: workspace,
      workspaces: allWorkspaces.filter(Boolean),
      businesses
    });
  } catch (err) {
    console.error("GET Workspaces Error:", err);
    return NextResponse.json({ error: "Failed to fetch workspaces." }, { status: 500 });
  }
}
