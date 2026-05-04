import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string };

  return NextResponse.json({
    message: "Account created",
    user: {
      name: body.name ?? "New customer",
      email: body.email ?? "guest@example.com",
    },
  });
}
