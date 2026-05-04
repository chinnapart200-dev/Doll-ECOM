import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionHeading } from "@/components/section-heading";
import { calculateCartTotals } from "@/lib/mock-api";
import { CartView } from "@/components/cart/cart-view";
import { products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review items in your shopping cart.",
};

export default function CartPage() {
  const totals = calculateCartTotals();
  const initialItems = totals.items.map((entry) => ({
    product: products.find((product) => product.id === entry!.product.id)!,
    quantity: entry!.quantity,
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
