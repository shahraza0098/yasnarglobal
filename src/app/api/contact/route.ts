import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY_DATA } from "@/data/company";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone = "", subject = "General Inquiry", message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message: `Email service is not configured. Please contact ${COMPANY_DATA.email} or call ${COMPANY_DATA.phoneDisplay} directly.`,
          contactEmail: COMPANY_DATA.email,
        },
        { status: 503 }
      );
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "admin@yasnarglobal.com";
    const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || COMPANY_DATA.email;

    // Send email via Resend SDK
    const { data, error } = await resend.emails.send({
      from: `YASNARGLOBAL Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `[Website Inquiry] ${subject} — from ${name}`,
      replyTo: email,
      text: [
        `New inquiry received via yasnarglobal.com contact form`,
        ``,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0b1528, #1e3a5f); padding: 28px 32px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">
              New Website Inquiry
            </h1>
            <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">
              Received via yasnarglobal.com contact form
            </p>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 90px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #165dfc; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
              <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f1f5f9; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #94a3b8; font-size: 11px; text-align: center;">
              This email was sent automatically from the YASNARGLOBAL website contact form. Reply directly to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
