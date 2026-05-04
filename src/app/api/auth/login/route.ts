import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };

  return NextResponse.json({
    message: "Login successful",
    user: {
      email: body.email ?? "guest@example.com",
    },
  });
}
