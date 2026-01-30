import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      // Fallback: Log the message and return success
      console.log("[Portfolio] Contact form submission:", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: "Message received! I'll get back to you soon.",
        },
        { status: 200 },
      );
    }

    try {
      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <noreply@yourdomain.com>",
        to: ["sitira2022@outlook.com"],
        subject: `Portfolio Contact from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="background: white; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 12px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
        replyTo: email,
      });

      if (error) {
        console.error("[Portfolio] Resend API error:", error);
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 },
        );
      }

      console.log("[Portfolio] Email sent successfully:", data);
      return NextResponse.json(
        {
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        },
        { status: 200 },
      );
    } catch (emailError) {
      console.error("[Portfolio] Email sending error:", emailError);

      // Log the message as fallback
      console.log("[Portfolio] Contact form submission (email failed):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: "Message received! I'll get back to you soon.",
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("[Portfolio] Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 },
    );
  }
}
