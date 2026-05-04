import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionHeading } from "@/components/section-heading";
import { getCartTotals } from "@/lib/shop-data";
import { CartView } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review items in your shopping cart.",
};

export default async function CartPage() {
  const totals = await getCartTotals();
  const initialItems = totals.items.map((entry) => ({
    product: entry.product,
    quantity: entry.quantity,
  }));

  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
        <SectionHeading title="Shopping Cart" action="Continue shopping" />
        <CartView initialItems={initialItems} />
      </section>

      <SiteFooter />
    </main>
  );
}
