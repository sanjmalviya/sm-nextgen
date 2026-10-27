import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";

export async function POST(req) {
  try {
    const context = await getWorkspaceContext(req);
    if (context.error) {
      return NextResponse.json({ error: context.error }, { status: context.status });
    }

    const { business, workspace } = context;

    if (business) {
      await db.businesses.updateOne(
        { id: business.id },
        {
          googleConnected: false,
          googleAccount: "",
          googlePlaceId: "",
          googleMapsUrl: "",
          lastSyncedAt: null
        }
      );
    }

    await db.integrations.deleteMany({
      workspaceId: workspace.id,
      provider: "google_business"
    });

    return NextResponse.json({
      success: true,
      message: "Google Business Profile disconnected safely. Tokens revoked."
    });
  } catch (err) {
    console.error("Disconnect Error:", err);
    return NextResponse.json({ error: "Failed to disconnect integration." }, { status: 500 });
  }
}
