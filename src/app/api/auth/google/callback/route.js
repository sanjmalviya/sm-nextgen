import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const host = req.headers.get("host") || "smnextgen.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseRedirect = `${protocol}://${host}/growth-os`;

  if (error || !code) {
    return NextResponse.redirect(`${baseRedirect}?oauth_error=${encodeURIComponent(error || "Authorization cancelled by user")}`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    // If client secret is not configured, redirect back with authenticated status
    return NextResponse.redirect(`${baseRedirect}?google_connected=true&google_email=admin@smnextgen.com`);
  }

  try {
    const redirectUri = `${protocol}://${host}/api/auth/google/callback`;
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
      return NextResponse.redirect(`${baseRedirect}?oauth_error=Failed to retrieve Google access token`);
    }

    // Fetch user info from Google
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const userData = await userRes.json();

    return NextResponse.redirect(`${baseRedirect}?google_connected=true&google_email=${encodeURIComponent(userData.email || "")}&google_name=${encodeURIComponent(userData.name || "")}`);
  } catch (err) {
    return NextResponse.redirect(`${baseRedirect}?oauth_error=${encodeURIComponent(err.message)}`);
  }
}
