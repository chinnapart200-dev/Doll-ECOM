import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { createUser } from "@/lib/shop-data";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string; password?: string };

  const passwordHash = createHash("sha256").update(body.password ?? "").digest("hex");
  const user = await createUser({
    name: body.name ?? "New customer",
    email: body.email ?? "guest@example.com",
    passwordHash,
  });

  return NextResponse.json({
    message: "Account created",
    user,
  });
}
