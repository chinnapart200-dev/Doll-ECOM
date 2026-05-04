import { NextResponse } from "next/server";
import { createOrder } from "@/lib/shop-data";

export async function GET() {
  return NextResponse.json({
    message: "Use checkout to create an order. Order listing will be added in the next phase.",
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const order = await createOrder(body);

  return NextResponse.json({
    message: "Order created",
    orderId: order.orderId,
    totals: order.cart,
  });
}
