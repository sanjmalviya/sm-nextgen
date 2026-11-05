import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { hashPassword, generateToken, setSessionCookie } from "@/lib/growth_os/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, token, newPassword } = body;

    if (!email || !token || !newPassword) {
      return NextResponse.json(
        { error: "Email, reset token/code, and new password are required." },
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
    const cleanToken = token.trim();

    // Find valid token matching cleanToken or matching prefix code
    const resetRecords = await db.passwordResets.find({ email: cleanEmail, used: false });
    const matching = resetRecords.find(r => 
      r.token === cleanToken || 
      r.token.startsWith(cleanToken + "-") ||
      cleanToken.includes(r.token)
    );

    if (!matching) {
      return NextResponse.json(
        { error: "Invalid or expired password reset code. Please request a new code." },
        { status: 400 }
      );
    }

    // Check expiry
    const expiresAt = new Date(matching.expiresAt).getTime();
    if (Date.now() > expiresAt) {
      return NextResponse.json(
        { error: "This password reset code has expired. Please request a new one." },
        { status: 400 }
      );
    }

    // Find target user
    const user = await db.users.findOne({ email: cleanEmail });
    if (!user) {
      return NextResponse.json({ error: "User account not found." }, { status: 404 });
    }

    // Hash new password and update
    const newHash = await hashPassword(newPassword);
    await db.users.updateOne(
      { id: user.id },
      { passwordHash: newHash }
    );

    // Mark reset record as used
    await db.passwordResets.updateOne(
      { id: matching.id },
      { used: true }
    );

    // Auto-login user with fresh session token
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
      { error: "An unexpected error occurred while resetting your password." },
      { status: 500 }
    );
  }
}
