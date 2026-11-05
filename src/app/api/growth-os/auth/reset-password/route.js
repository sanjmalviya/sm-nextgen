import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getPool } from "@/lib/growth_os/postgresDb";
import { hashPassword, generateToken, setSessionCookie } from "@/lib/growth_os/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, token, newPassword, supabaseRecovered } = body;

    if (!email || (!token && !supabaseRecovered) || !newPassword) {
      return NextResponse.json(
        { error: "Email, verification token/code, and new password are required." },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "New password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Find target user in database
    const user = await db.users.findOne({ email: cleanEmail });
    if (!user) {
      return NextResponse.json({ error: "No account found matching this email address." }, { status: 404 });
    }

    let matching = null;
    if (!supabaseRecovered) {
      const cleanToken = token.trim();
      // Find valid token matching cleanToken or matching 6-digit prefix
      const resetRecords = await db.passwordResets.find({ email: cleanEmail, used: false });
      matching = resetRecords.find(r =>
        r.token === cleanToken ||
        r.token.startsWith(cleanToken + "-") ||
        cleanToken.includes(r.token)
      );

      if (!matching) {
        return NextResponse.json(
          { error: "Invalid or expired verification code. Please check your email or request a new code." },
          { status: 400 }
        );
      }

      // Check expiry
      const expiresAt = new Date(matching.expiresAt).getTime();
      if (Date.now() > expiresAt) {
        return NextResponse.json(
          { error: "This verification code has expired. Please request a new code." },
          { status: 400 }
        );
      }
    }

    // Hash new password using bcrypt
    const newHash = await hashPassword(newPassword);

    // Update password in public.users
    await db.users.updateOne(
      { id: user.id },
      { passwordHash: newHash }
    );

    // Synchronize new password to Supabase auth.users
    const pool = getPool();
    if (pool) {
      try {
        await pool.query(
          "UPDATE auth.users SET encrypted_password = $1, updated_at = NOW() WHERE email = $2",
          [newHash, cleanEmail]
        );
      } catch (authErr) {
        console.warn("[AUTH UPDATE SYNC] Could not sync password to auth.users:", authErr.message);
      }
    }

    // Invalidate reset records
    if (matching) {
      await db.passwordResets.updateOne(
        { id: matching.id },
        { used: true }
      );
    } else {
      await db.passwordResets.updateMany(
        { email: cleanEmail, used: false },
        { used: true }
      );
    }

    // Issue fresh session token
    const sessionToken = generateToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    });

    const members = await db.workspaceMembers.find({ userId: user.id });
    const workspaceId = members[0]?.workspaceId || null;
    const business = workspaceId ? await db.businesses.findOne({ workspaceId }) : null;

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      workspaceId,
      hasCompletedProfile: Boolean(business && business.isCompleted)
    };

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      message: "Password reset successfully! You are now logged in."
    });

    return setSessionCookie(response, sessionToken);
  } catch (err) {
    console.error("Reset Password Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while resetting password. Please try again." },
      { status: 500 }
    );
  }
}
