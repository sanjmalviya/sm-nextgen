import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getAuthenticatedUser } from "@/lib/growth_os/auth";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const host = req.headers.get("host") || "smnextgen.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseRedirect = protocol + "://" + host + "/growth-os";

  if (error || !code) {
    return NextResponse.redirect(baseRedirect + "?google_error=" + encodeURIComponent(error || "Google authorization was cancelled."));
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(baseRedirect + "?google_setup_needed=true");
  }

  try {
    const redirectUri = protocol + "://" + host + "/api/auth/google/callback";
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      })
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return NextResponse.redirect(baseRedirect + "?google_error=" + encodeURIComponent(tokenData.error_description || "Failed to exchange token with Google."));
    }

    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: "Bearer " + tokenData.access_token }
    });
    const userData = await userRes.json();

    const user = await getAuthenticatedUser(req);
    if (user) {
      const members = await db.workspaceMembers.find({ userId: user.id });
      if (members.length > 0) {
        const workspaceId = members[0].workspaceId;
        const business = await db.businesses.findOne({ workspaceId });
        if (business) {
          await db.businesses.updateOne(
            { id: business.id },
            {
              googleConnected: true,
              googleAccount: userData.email,
              lastSyncedAt: new Date().toISOString()
            }
          );
        }

        await db.integrations.insertOne({
          workspaceId,
          businessId: business ? business.id : null,
          provider: "google_business",
          status: "CONNECTED",
          accountEmail: userData.email,
          scopes: ["business.manage", "openid", "email"],
          lastSyncedAt: new Date().toISOString()
        });
      }
    }

    return NextResponse.redirect(baseRedirect + "?google_connected=true&google_email=" + encodeURIComponent(userData.email || ""));
  } catch (err) {
    console.error("Google OAuth Callback Error:", err);
    return NextResponse.redirect(baseRedirect + "?google_error=" + encodeURIComponent(err.message));
  }
}
