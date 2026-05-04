import { NextResponse } from "next/server";
import { getCategories } from "@/lib/shop-data";

export async function GET() {
  const categories = await getCategories();

  return NextResponse.json({
    data: categories,
    total: categories.length,
  });
}
