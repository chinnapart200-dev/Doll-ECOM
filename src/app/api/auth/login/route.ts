import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { findUserByEmail } from "@/lib/shop-data";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };
  const user = await findUserByEmail(body.email ?? "");

  if (!user) {
    return NextResponse.json(
      {
        message: "Invalid email or password",
      },
      { status: 401 },
    );
  }

  const passwordHash = createHash("sha256").update(body.password ?? "").digest("hex");

  if (user.password_hash !== passwordHash) {
    return NextResponse.json(
      {
        message: "Invalid email or password",
      },
      { status: 401 },
    );
  }

  return NextResponse.json({
    message: "Login successful",
    user: {
      id: String(user.id),
      name: user.full_name,
      email: user.email,
      role: user.role,
    },
  });
}
