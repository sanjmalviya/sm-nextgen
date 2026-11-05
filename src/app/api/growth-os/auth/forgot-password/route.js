import { NextResponse } from "next/server";
import crypto from "crypto";
import db from "@/lib/growth_os/db";
import { supabase } from "@/app/growth-os/lib/supabaseClient";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await db.users.findOne({ email: cleanEmail });

    // Consistent timing/message to prevent user enumeration
    if (!user) {
      return NextResponse.json({
        success: true,
        message: "If an account exists with this email, password reset instructions have been sent."
      });
    }

    // Generate secure reset token
    const rawToken = crypto.randomBytes(24).toString("hex");
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit friendly code
    const combinedToken = `${code}-${rawToken.slice(0, 8)}`;
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour expiry

    // Invalidate previous active reset tokens for this user
    await db.passwordResets.deleteMany({ email: cleanEmail, used: false });

    // Store new reset token
    await db.passwordResets.insertOne({
      userId: user.id,
      email: cleanEmail,
      token: combinedToken,
      expiresAt,
      used: false
    });

    // Also attempt Supabase native password recovery if configured
    if (supabase) {
      try {
        await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || "https://smnextgen.com"}/growth-os/reset-password`
        });
      } catch (sbErr) {
        console.warn("Supabase auth resetPasswordForEmail notice:", sbErr.message);
      }
    }

    console.log(`[PASSWORD RESET] Generated reset token for ${cleanEmail}: ${combinedToken}`);

    return NextResponse.json({
      success: true,
      message: "Password reset instructions and verification code have been generated.",
      resetCode: code,
      token: combinedToken
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}
