"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QuantitySelector } from "@/components/quantity-selector";
import { formatMoney } from "@/lib/money";
import type { Product } from "@/lib/catalog";

type CartEntry = {
  product: Product;
  quantity: number;
};

export function CartView({ initialItems }: { initialItems: CartEntry[] }) {
  const [items, setItems] = useState(initialItems);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal >= 199 || subtotal === 0 ? 0 : 15;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }, [items]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.product.id} className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[var(--shadow)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-black text-black">{item.product.name}</h3>
                <p className="text-sm text-[color:var(--muted)]">{item.product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(next) =>
                    setItems((current) =>
                      current.map((entry) =>
                        entry.product.id === item.product.id ? { ...entry, quantity: next } : entry,
                      ),
                    )
                  }
                />
                <span className="min-w-24 text-right text-lg font-black text-black">
                  {formatMoney(item.product.price * item.quantity)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
        <h3 className="text-sm font-black uppercase tracking-[0.18em] text-black">Order Summary</h3>
        <div className="mt-5 space-y-3 text-sm">
          <Row label="Subtotal" value={formatMoney(totals.subtotal)} />
          <Row label="Shipping" value={formatMoney(totals.shipping)} />
          <Row label="Tax" value={formatMoney(totals.tax)} />
          <Row label="Total" value={formatMoney(totals.total)} strong />
        </div>
        <Link
          href="/checkout"
          className="mt-6 block rounded-full bg-black px-5 py-3 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white"
        >
          Checkout
        </Link>
      </aside>
    </div>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-3 last:border-0">
      <span className={strong ? "font-black text-black" : "text-[color:var(--muted)]"}>{label}</span>
      <span className={strong ? "text-lg font-black text-black" : "font-semibold text-black"}>{value}</span>
    </div>
  );
}
