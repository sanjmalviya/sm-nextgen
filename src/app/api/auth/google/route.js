import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const customClientId = searchParams.get("client_id");
  const clientId = customClientId || process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json({
      error: "Google Cloud Client ID is not configured.",
      setupInstructions: "To enable direct Google OAuth, create an OAuth 2.0 Web Client ID in Google Cloud Console (console.cloud.google.com) and add GOOGLE_CLIENT_ID to .env."
    }, { status: 400 });
  }

  const host = req.headers.get("host") || "smnextgen.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/auth/google/callback`;

  const scopes = [
    "openid",
    "email",
    "profile",
    "https://www.googleapis.com/auth/business.manage"
  ].join(" ");

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scopes)}&access_type=offline&prompt=consent`;

  return NextResponse.redirect(googleAuthUrl);
}
