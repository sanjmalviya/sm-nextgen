import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/growth_os/auth";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Signed out successfully."
  });
  return clearSessionCookie(response);
}
