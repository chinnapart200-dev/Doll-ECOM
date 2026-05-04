import Link from "next/link";
import { ArrowIcon, WishIcon } from "./store-icons";
import { formatMoney } from "@/lib/money";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-black/10 bg-[color:var(--surface)] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(17,17,17,0.12)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#f9f9f9] to-[#ffffff]">
          <div className="absolute inset-x-5 bottom-0 top-4 rounded-[1.5rem] border border-white/70 bg-white/35 backdrop-blur-[2px]" />
          <div className="absolute left-1/2 top-8 h-20 w-14 -translate-x-1/2 rounded-[48%_48%_40%_40%] bg-[#101010]" />
          <div className="absolute left-1/2 top-24 h-40 w-28 -translate-x-1/2 rounded-[45%_45%_38%_38%] bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.65),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.2))]" />
          <div className="absolute inset-x-0 bottom-10 flex justify-center gap-2">
            {product.colorPalette.map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {product.badge ? (
            <span className="absolute left-3 top-3 rounded-sm bg-[color:var(--accent-lime)] px-2 py-1 text-[0.65rem] font-extrabold text-black">
              {product.badge}
            </span>
          ) : null}
          <button
            type="button"
            aria-label={`Save ${product.name}`}
            className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-black shadow-lg transition hover:bg-white"
          >
            <WishIcon />
          </button>
          <div className="absolute inset-x-4 bottom-4 flex justify-between">
            <span className="rounded-full bg-black/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
              {product.id.slice(-3).toUpperCase()}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-md bg-black text-white transition group-hover:bg-black/85">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[0.95rem] font-semibold leading-6 text-[color:var(--text)]">
            {product.name}
          </h3>
          <span className="text-[0.72rem] font-black uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {product.category}
          </span>
        </div>
        <p className="text-sm leading-6 text-[color:var(--muted)]">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-[1.02rem] font-extrabold text-[color:var(--text)]">
            {formatMoney(product.price)}
          </span>
          {product.oldPrice ? (
            <span className="text-sm text-[color:var(--muted)] line-through">
              {formatMoney(product.oldPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
