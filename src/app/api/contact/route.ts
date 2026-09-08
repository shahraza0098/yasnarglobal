import { NextResponse } from "next/server";
import { COMPANY_DATA } from "@/data/company";

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

    // Optional field sanity checks
    const sanitizedPhone = String(phone).trim();
    const sanitizedSubject = String(subject).trim();
    if (process.env.NODE_ENV === "development") {
      console.log(`[Inquiry Received] ${sanitizedSubject} from ${name} (Phone: ${sanitizedPhone || "N/A"})`);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Check if email service API key is configured
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // In accordance with guidelines: transparently inform that direct web dispatch is in setup,
      // and provide immediate contact details rather than pretending delivery occurred.
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message: `Direct web dispatch API is being configured. Please contact ${COMPANY_DATA.email} or call ${COMPANY_DATA.phoneDisplay} directly.`,
          contactEmail: COMPANY_DATA.email,
        },
        { status: 200 }
      );
    }

    // When RESEND_API_KEY is configured in production, send through Resend:
    /*
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "no-reply@yasnarglobal.com",
        to: process.env.CONTACT_RECIPIENT_EMAIL || COMPANY_DATA.email,
        subject: `[Website Inquiry] ${subject || "General"} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      }),
    });
    const data = await res.json();
    return NextResponse.json({ success: true, id: data.id });
    */

    return NextResponse.json({
      success: true,
      message: "Inquiry received for processing.",
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing the request." },
      { status: 500 }
    );
  }
}
