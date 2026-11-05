import { NextResponse } from "next/server";
import db from "@/lib/growth_os/db";
import { getPool } from "@/lib/growth_os/postgresDb";
import { hashPassword, generateToken, setSessionCookie } from "@/lib/growth_os/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const existing = await db.users.findOne({ email: cleanEmail });

    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists. Please sign in." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const user = await db.users.insertOne({
      name: name.trim(),
      email: cleanEmail,
      passwordHash,
      role: "USER"
    });

    // Synchronize into Supabase auth.users to support native password recovery & OAuth
    const pool = getPool();
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO auth.users (
            id, instance_id, email, encrypted_password, email_confirmed_at,
            created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
            is_super_admin, role, aud
          ) VALUES (
            gen_random_uuid(), '00000000-0000-0000-0000-000000000000', $1, $2, NOW(),
            NOW(), NOW(), '{"provider":"email","providers":["email"]}', $3,
            false, 'authenticated', 'authenticated'
          ) ON CONFLICT (email) DO UPDATE SET encrypted_password = EXCLUDED.encrypted_password, updated_at = NOW()`,
          [cleanEmail, passwordHash, JSON.stringify({ name: name.trim() })]
        );
      } catch (authErr) {
        console.warn("[REGISTER AUTH SYNC] Notice syncing to auth.users:", authErr.message);
      }
    }

    // Auto-create initial workspace for user
    const workspace = await db.workspaces.insertOne({
      name: `${user.name}'s Growth Workspace`,
      ownerId: user.id,
      plan: "STARTER"
    });

    await db.workspaceMembers.insertOne({
      workspaceId: workspace.id,
      userId: user.id,
      role: "OWNER"
    });

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
      workspaceId: workspace.id,
      hasCompletedProfile: false
    };

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      workspace,
      hasCompletedProfile: false,
      message: "Account created successfully. Please complete your business profile setup."
    }, { status: 201 });

    return setSessionCookie(response, token);
  } catch (err) {
    console.error("Register Error:", err);
    return NextResponse.json(
      {
        error: "An unexpected error occurred during account registration.",
        details: err.message
      },
      { status: 500 }
    );
  }
}
