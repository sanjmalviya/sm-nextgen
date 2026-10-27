import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { verifyPassword, generateToken, setSessionCookie } from "@/lib/growth_os/auth";

// Basic in-memory rate limiter for login attempts (15-min window, 5 attempts max)
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(key) {
  const now = Date.now();
  const record = loginAttempts.get(key);
  if (!record) return { allowed: true };
  if (now - record.firstAttempt > LOCKOUT_WINDOW_MS) {
    loginAttempts.delete(key);
    return { allowed: true };
  }
  if (record.count >= MAX_ATTEMPTS) {
    const remainingSecs = Math.ceil((LOCKOUT_WINDOW_MS - (now - record.firstAttempt)) / 1000);
    return { allowed: false, remainingSecs };
  }
  return { allowed: true };
}

function recordFailedAttempt(key) {
  const now = Date.now();
  const record = loginAttempts.get(key) || { count: 0, firstAttempt: now };
  record.count += 1;
  loginAttempts.set(key, record);
}

function clearRateLimit(key) {
  loginAttempts.delete(key);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const clientIp = req.headers.get("x-forwarded-for") || "local";
    const rateLimitKey = `${clientIp}:${cleanEmail}`;

    const rateCheck = checkRateLimit(rateLimitKey);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: `Too many failed login attempts. Please try again in ${rateCheck.remainingSecs} seconds.` },
        { status: 429 }
      );
    }

    const user = await db.users.findOne({ email: cleanEmail });

    if (!user) {
      recordFailedAttempt(rateLimitKey);
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      recordFailedAttempt(rateLimitKey);
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Clear failed attempts on success
    clearRateLimit(rateLimitKey);

    // Get user's primary workspace and active business
    const members = await db.workspaceMembers.find({ userId: user.id });
    let workspaceId = members[0]?.workspaceId;
    let workspace = workspaceId ? await db.workspaces.findOne({ id: workspaceId }) : null;

    if (!workspace) {
      workspace = await db.workspaces.insertOne({
        name: `${user.name}'s Growth Workspace`,
        ownerId: user.id,
        plan: user.role === "ADMIN" ? "ENTERPRISE" : "STARTER"
      });
      await db.workspaceMembers.insertOne({
        workspaceId: workspace.id,
        userId: user.id,
        role: "OWNER"
      });
      workspaceId = workspace.id;
    }

    const business = await db.businesses.findOne({ workspaceId });
    const hasCompletedProfile = Boolean(business && business.isCompleted);

    const token = generateToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    });

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      workspaceId,
      hasCompletedProfile
    };

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      workspace,
      business,
      hasCompletedProfile,
      message: `Welcome back, ${user.name}!`
    });

    return setSessionCookie(response, token);
  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred during login." },
      { status: 500 }
    );
  }
}
