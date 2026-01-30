import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: "API is working!",
      timestamp: new Date().toISOString(),
      env: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV,
      },
    },
    { status: 200 },
  );
}

export async function POST() {
  return NextResponse.json(
    { message: "POST method is working!" },
    { status: 200 },
  );
}
