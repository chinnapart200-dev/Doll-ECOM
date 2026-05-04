import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { categories, products } from "@/lib/catalog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the full Ecommerce Doll product catalog.",
};

export default function ProductsPage() {
  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
        <SectionHeading title="Shop All Products" action="View cart" />
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-[var(--shadow)]">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black">
              Categories
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/products?category=${category.slug}`} className="hover:text-black">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
