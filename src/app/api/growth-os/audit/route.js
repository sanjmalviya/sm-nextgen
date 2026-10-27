import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getWorkspaceContext } from "@/lib/growth_os/auth";
import { runProfileAudit } from "@/lib/growth_os/auditEngine";

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
    const pastAudits = await db.audits.find({ businessId: business.id });

    let latest = pastAudits.length > 0 ? pastAudits[pastAudits.length - 1] : null;

    if (!latest) {
      // Run first deterministic audit
      const result = await runProfileAudit(business);
      latest = result.auditRecord;
    }

    return NextResponse.json({
      success: true,
      audit: latest,
      latestAudit: latest,
      auditHistory: pastAudits.slice(-5)
    });
  } catch (err) {
    console.error("GET Audit Error:", err);
    return NextResponse.json({ error: "Failed to fetch audit data." }, { status: 500 });
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
    const result = await runProfileAudit(business);

    return NextResponse.json({
      success: true,
      message: `Audit completed! Current Growth OS Score: ${result.score}/100`,
      score: result.score,
      factors: result.factors,
      opportunities: result.opportunities,
      auditRecord: result.auditRecord
    });
  } catch (err) {
    console.error("POST Audit Error:", err);
    return NextResponse.json({ error: "Failed to run profile audit." }, { status: 500 });
  }
}
