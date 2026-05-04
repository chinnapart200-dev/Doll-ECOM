import { NextResponse } from "next/server";
import { calculateCartTotals } from "@/lib/mock-api";

export async function GET() {
  const totals = calculateCartTotals();
  return NextResponse.json({
    data: totals,
  });
}
