import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { formatMoney } from "@/lib/money";
import { getProductBySlug, products } from "@/lib/catalog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#f7f7f7] to-white">
              <div className="absolute inset-x-8 bottom-0 top-6 rounded-[2rem] border border-white/80 bg-white/40" />
              <div className="absolute left-1/2 top-16 h-28 w-20 -translate-x-1/2 rounded-[48%_48%_40%_40%] bg-black" />
              <div className="absolute left-1/2 top-40 h-72 w-52 -translate-x-1/2 rounded-[45%_45%_38%_38%] bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.65),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.2))]" />
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
            <div>
              <SectionHeading title={product.name} />
              <p className="text-base leading-7 text-[color:var(--muted)]">
                {product.description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[2rem] font-black text-black">{formatMoney(product.price)}</span>
              {product.oldPrice ? (
                <span className="text-lg text-[color:var(--muted)] line-through">
                  {formatMoney(product.oldPrice)}
                </span>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.colorPalette.map((color) => (
                <span
                  key={color}
                  className="h-5 w-5 rounded-full border border-black/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cart"
                className="rounded-full bg-[color:var(--accent-lime)] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black"
              >
                Add to Cart
              </Link>
              <Link
                href="/checkout"
                className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black"
              >
                Buy Now
              </Link>
            </div>
            <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,#fafafa,#efefef)] p-5">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-black">Product Info</h3>
              <dl className="mt-4 grid gap-4 text-sm text-[color:var(--muted)]">
                <div className="flex items-center justify-between gap-4">
                  <dt>Category</dt>
                  <dd className="font-semibold text-black">{product.category}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>SKU</dt>
                  <dd className="font-semibold text-black">{product.id}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
        <SectionHeading title="Related Products" action="Back to products" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
