import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protected Growth OS API routes (excluding public auth and session check endpoints)
  const isPublicAuthRoute = 
    pathname.startsWith("/api/growth-os/auth/") ||
    pathname === "/api/auth/google" ||
    pathname === "/api/auth/google/callback" ||
    pathname === "/api/google-business/verify";

  const isGrowthOsApi = pathname.startsWith("/api/growth-os/");

  if (isGrowthOsApi && !isPublicAuthRoute) {
    // Check session token from cookie or Authorization header
    const token = request.cookies.get("sm_growth_os_token")?.value ||
      request.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: Active session required to access Growth OS resources." },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/growth-os/:path*",
    "/growth-os/admin/:path*",
    "/growth-os/dashboard/:path*"
  ]
};
