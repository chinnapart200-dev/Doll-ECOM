import { NextResponse } from "next/server";
import { calculateCartTotals } from "@/lib/mock-api";

export async function POST(request: Request) {
  const body = await request.json();
  const totals = calculateCartTotals();

  return NextResponse.json({
    message: "Order created",
    orderId: `ORD-${Date.now()}`,
    customer: body,
    totals,
  });
}
