import { NextResponse } from "next/server";
import { getCartTotals } from "@/lib/shop-data";

export async function GET() {
  const totals = await getCartTotals();
  return NextResponse.json({
    data: totals,
  });
}
