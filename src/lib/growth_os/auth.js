// Server-Side Authentication & Session Management for SM NextGen Growth OS
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import db from "./db";

const COOKIE_NAME = "sm_growth_os_token";

export function getJwtSecret() {
  const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    throw new Error("FATAL SECURITY ERROR: JWT_SECRET is not configured in environment. Insecure token operations are prohibited.");
  }
  return secret;
}

export async function hashPassword(plainPassword) {
  return await bcrypt.hash(plainPassword, 10);
}

export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export function generateToken(payload) {
  const secret = getJwtSecret();
  return jwt.sign(payload, secret, { expiresIn: "30d" });
}

export function verifyToken(token) {
  try {
    const secret = getJwtSecret();
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}

// Server-side session verification from request cookies or Authorization header
export async function getAuthenticatedUser(req) {
  let token = null;

  // 1. Check direct Cookie header (works in node HTTP, fetch, and NextRequest)
  if (req && req.headers) {
    let cookieHeader = null;
    if (typeof req.headers.get === "function") {
      cookieHeader = req.headers.get("cookie");
    } else if (req.headers.cookie) {
      cookieHeader = req.headers.cookie;
    }
    if (cookieHeader) {
      const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
      if (match) token = match[1];
    }
  }

  // 2. Check req.cookies if available
  if (!token && req && req.cookies && typeof req.cookies.get === "function") {
    token = req.cookies.get(COOKIE_NAME)?.value;
  }

  // 3. Check Next.js cookies() helper
  if (!token) {
    try {
      const cookieStore = await cookies();
      const cookie = cookieStore.get(COOKIE_NAME);
      if (cookie?.value) token = cookie.value;
    } catch (e) {}
  }

  // 4. Fallback to Authorization header
  if (!token && req && req.headers) {
    let authHeader = null;
    if (typeof req.headers.get === "function") {
      authHeader = req.headers.get("authorization");
    } else if (req.headers.authorization) {
      authHeader = req.headers.authorization;
    }
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    }
  }

  if (!token) return null;

  const decoded = verifyToken(token);
  if (!decoded || !decoded.userId) return null;

  const user = await db.users.findOne({ id: decoded.userId });
  if (!user) return null;

  // Don't leak password hash to callers
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}

// Middleware helper to check authenticated user + workspace + business completion status
export async function getWorkspaceContext(req) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return { error: "Unauthorized: Please sign in.", status: 401 };
  }

  // Find user's workspaces
  const members = await db.workspaceMembers.find({ userId: user.id });
  let workspaceId = null;

  // Check query or header for workspaceId
  if (req) {
    const url = new URL(req.url);
    workspaceId = url.searchParams.get("workspaceId");
  }

  if (!workspaceId && members.length > 0) {
    workspaceId = members[0].workspaceId;
  }

  if (!workspaceId) {
    // Auto-provision initial workspace if missing
    const newWs = await db.workspaces.insertOne({
      name: `${user.name}'s Growth Workspace`,
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

  // Check user belongs to this workspace
  const membership = await db.workspaceMembers.findOne({
    workspaceId: workspaceId,
    userId: user.id
  });

  if (!membership && user.role !== "ADMIN") {
    return { error: "Forbidden: You do not have access to this workspace.", status: 403 };
  }

  const workspace = await db.workspaces.findOne({ id: workspaceId });

  // Get active business in this workspace
  let business = null;
  if (req) {
    const url = new URL(req.url);
    const businessId = url.searchParams.get("businessId");
    if (businessId) {
      business = await db.businesses.findOne({ id: businessId, workspaceId });
    }
  }

  if (!business) {
    business = await db.businesses.findOne({ workspaceId });
  }

  const isProfileComplete = business && business.isCompleted;

  return {
    user,
    workspace,
    membership,
    business,
    isProfileComplete,
    status: 200
  };
}

export function setSessionCookie(response, token) {
  const isProduction = process.env.NODE_ENV === "production";
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
  return response;
}

export function clearSessionCookie(response) {
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });
  return response;
}
