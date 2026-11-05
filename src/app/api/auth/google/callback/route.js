import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getAuthenticatedUser, generateToken, setSessionCookie } from "@/lib/growth_os/auth";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const host = req.headers.get("host") || "smnextgen.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseRedirect = protocol + "://" + host + "/growth-os";

  if (error || !code) {
    return NextResponse.redirect(
      baseRedirect + "?google_error=" + encodeURIComponent(error || "Google authorization was cancelled.")
    );
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
      console.error("Google Token Exchange Failed:", tokenData);
      return NextResponse.redirect(
        baseRedirect + "?google_error=" + encodeURIComponent(tokenData.error_description || tokenData.error || "Failed to exchange token with Google.")
      );
    }

    // Fetch user profile from Google
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: "Bearer " + tokenData.access_token }
    });
    const userData = await userRes.json();
    const googleEmail = userData.email;

    // Check if user is currently signed in via cookie
    let user = await getAuthenticatedUser(req);

    // If not authenticated via cookie, link or create user by Google email
    if (!user && googleEmail) {
      user = await db.users.findOne({ email: googleEmail });
      if (!user) {
        // Create new user account for this Google email
        user = await db.users.insertOne({
          name: userData.name || googleEmail.split("@")[0],
          email: googleEmail,
          passwordHash: "oauth_google_account",
          role: "USER"
        });
      }
    }

    let response = NextResponse.redirect(
      baseRedirect + "?google_connected=true&google_email=" + encodeURIComponent(googleEmail || "")
    );

    // If user is resolved, set session cookie so they remain logged in
    if (user) {
      const sessionToken = generateToken({ userId: user.id, role: user.role });
      setSessionCookie(response, sessionToken);

      // Locate or create workspace for user
      let members = await db.workspaceMembers.find({ userId: user.id });
      let workspaceId = null;

      if (members.length > 0) {
        workspaceId = members[0].workspaceId;
      } else {
        const newWs = await db.workspaces.insertOne({
          name: `${user.name || googleEmail}'s Growth Workspace`,
          ownerId: user.id,
          plan: "STARTER"
        });
        await db.workspaceMembers.insertOne({
          workspaceId: newWs.id,
          userId: user.id,
          role: "OWNER"
        });
        workspaceId = newWs.id;
      }

      // Find or link active business
      let business = await db.businesses.findOne({ workspaceId });
      if (!business) {
        // Check if there is an existing SM NextGen business we can link
        const existingSm = await db.businesses.findOne({ name: "SM NextGen" });
        if (existingSm) {
          business = existingSm;
        }
      }

      if (business) {
        await db.businesses.updateOne(
          { id: business.id },
          {
            googleConnected: true,
            googleAccount: googleEmail,
            lastSyncedAt: new Date().toISOString()
          }
        );
      }

      // Upsert integration record
      const existingIntegration = await db.integrations.findOne({
        workspaceId,
        provider: "google_business"
      });

      if (existingIntegration) {
        await db.integrations.updateOne(
          { id: existingIntegration.id },
          {
            businessId: business ? business.id : null,
            status: "CONNECTED",
            accountEmail: googleEmail,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token || existingIntegration.refreshToken,
            lastSyncedAt: new Date().toISOString()
          }
        );
      } else {
        await db.integrations.insertOne({
          workspaceId,
          businessId: business ? business.id : null,
          provider: "google_business",
          status: "CONNECTED",
          accountEmail: googleEmail,
          scopes: ["business.manage", "openid", "email"],
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token || null,
          lastSyncedAt: new Date().toISOString()
        });
      }
    }

    return response;
  } catch (err) {
    console.error("Google OAuth Callback Error:", err);
    return NextResponse.redirect(baseRedirect + "?google_error=" + encodeURIComponent(err.message));
  }
}
