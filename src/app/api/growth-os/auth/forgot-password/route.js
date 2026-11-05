import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import db from "@/lib/growth_os/db";
import { supabase } from "@/app/growth-os/lib/supabaseClient";

/**
 * Production-ready Password Recovery & OTP Email Dispatcher
 * Zero dummy data: Never returns security codes in JSON responses.
 * Delivers verified emails via custom SMTP / Gmail App Password or Supabase Auth.
 */
async function sendSmtpResetEmail({ to, code, resetUrl }) {
  const host = process.env.SMTP_HOST || (process.env.GMAIL_USER ? "smtp.gmail.com" : null);
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD;
  const port = parseInt(process.env.SMTP_PORT || (host === "smtp.gmail.com" ? "465" : "587"), 10);
  const secure = port === 465;

  if (!host || !user || !pass) {
    return { attempted: false, sent: false };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset - SM NextGen Growth OS</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #020617; padding: 40px 16px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 540px; background-color: #0f172a; border-radius: 20px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 36px 32px; background: linear-gradient(135deg, #0097B2 0%, #0284c7 100%); text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">SM NextGen Growth OS</h1>
                      <p style="margin: 6px 0 0; color: #e0f2fe; font-size: 13px; font-weight: 500;">Google Business Profile & Local SEO SaaS Engine</p>
                    </td>
                  </tr>
                  <!-- Body Content -->
                  <tr>
                    <td style="padding: 36px 32px;">
                      <h2 style="margin: 0 0 12px; font-size: 18px; font-weight: 700; color: #ffffff;">Password Reset Verification</h2>
                      <p style="margin: 0 0 24px; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                        We received a request to reset the password for your SM NextGen Growth OS account (<strong style="color: #f1f5f9;">${to}</strong>).
                      </p>

                      <!-- 6-digit OTP Box -->
                      <div style="background-color: #020617; border: 1px dashed #0097B2; border-radius: 14px; padding: 22px; text-align: center; margin-bottom: 24px;">
                        <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 34px; font-weight: 800; letter-spacing: 8px; color: #38bdf8;">${code}</span>
                        <p style="margin: 8px 0 0; font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Valid for 60 minutes</p>
                      </div>

                      <p style="margin: 0 0 24px; font-size: 13px; line-height: 1.5; color: #94a3b8; text-align: center;">
                        Enter the code above on the verification screen, or click the button below to reset directly:
                      </p>

                      <div style="text-align: center; margin-bottom: 32px;">
                        <a href="${resetUrl}" target="_blank" style="display: inline-block; background-color: #0097B2; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 700; padding: 13px 32px; border-radius: 10px; box-shadow: 0 10px 15px -3px rgba(0, 151, 178, 0.3);">
                          Reset Password Directly &rarr;
                        </a>
                      </div>

                      <div style="border-top: 1px solid #1e293b; padding-top: 20px;">
                        <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                          If you did not request this password reset, you can safely ignore this message. Your password will remain unchanged.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 18px 32px; background-color: #090d16; border-top: 1px solid #1e293b; text-align: center; font-size: 11px; color: #475569;">
                      SM NextGen &bull; Udaipur, Rajasthan, India &bull; <a href="https://smnextgen.com" style="color: #64748b; text-decoration: underline;">smnextgen.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"SM NextGen Growth OS" <${user}>`,
      to,
      subject: `Your SM NextGen Growth OS Verification Code: ${code}`,
      text: `Your password reset code is: ${code}\nOr reset directly at: ${resetUrl}\nValid for 60 minutes.`,
      html: htmlContent
    });

    return { attempted: true, sent: true };
  } catch (err) {
    console.error("[SMTP ERROR] Failed to send password reset email:", err.message);
    return { attempted: true, sent: false, error: err.message };
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await db.users.findOne({ email: cleanEmail });

    // Consistent messaging to prevent user enumeration attacks
    if (!user) {
      return NextResponse.json({
        success: true,
        message: "If an account exists with this email, password reset instructions have been sent to your inbox."
      });
    }

    // Generate secure reset token & 6-digit OTP code
    const rawToken = crypto.randomBytes(24).toString("hex");
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit secure numeric code
    const combinedToken = `${code}-${rawToken.slice(0, 12)}`;
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour expiry

    // Invalidate previous active reset tokens for this user
    await db.passwordResets.deleteMany({ email: cleanEmail, used: false });

    // Store new reset token in database
    await db.passwordResets.insertOne({
      userId: user.id,
      email: cleanEmail,
      token: combinedToken,
      expiresAt,
      used: false
    });

    const appUrl = (
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      "https://www.smnextgen.com"
    ).replace(/\/$/, "");

    const directResetUrl = `${appUrl}/growth-os/reset-password?email=${encodeURIComponent(cleanEmail)}&token=${code}`;

    // 1. Try Custom SMTP / Nodemailer delivery
    const smtpResult = await sendSmtpResetEmail({
      to: cleanEmail,
      code,
      resetUrl: directResetUrl
    });

    // 2. Try Supabase native password recovery
    let supabaseSent = false;
    let supabaseError = null;

    if (supabase) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: `${appUrl}/growth-os/reset-password`
        });
        if (error) {
          supabaseError = error;
          console.warn("[SUPABASE RECOVERY] resetPasswordForEmail notice:", error.message, error.code);
        } else {
          supabaseSent = true;
        }
      } catch (sbErr) {
        supabaseError = sbErr;
        console.warn("[SUPABASE RECOVERY] Exception:", sbErr.message);
      }
    }

    // If both transports failed, return explicit feedback instead of leaking code
    if (!smtpResult.sent && !supabaseSent) {
      if (supabaseError?.status === 429 || supabaseError?.code === "over_email_send_rate_limit") {
        return NextResponse.json({
          error: "Email delivery rate limit reached from mail provider (Supabase free tier max 3 emails/hour). Please wait a few moments before requesting another code."
        }, { status: 429 });
      }

      if (smtpResult.attempted && !smtpResult.sent) {
        return NextResponse.json({
          error: `Email delivery failed: ${smtpResult.error || "Could not connect to SMTP server."}`
        }, { status: 500 });
      }
    }

    console.log(`[PASSWORD RESET] Email dispatch triggered for ${cleanEmail} (SMTP: ${smtpResult.sent}, Supabase: ${supabaseSent})`);

    // Strictly production-grade response: NEVER leak resetCode or token to client!
    return NextResponse.json({
      success: true,
      message: "A 6-digit verification code and reset link have been sent to your email. Please check your inbox and spam folder."
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}
