import { NextResponse } from "next/server";
import { getProducts } from "@/lib/shop-data";

export async function GET() {
  const products = await getProducts();

  return NextResponse.json({
    data: products,
    total: products.length,
  });
}
