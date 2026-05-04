import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CheckoutForm } from "@/components/forms/checkout-form";
import { SectionHeading } from "@/components/section-heading";
import { calculateCartTotals } from "@/lib/mock-api";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order safely and quickly.",
};

export default function CheckoutPage() {
  const totals = calculateCartTotals();

  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
        <SectionHeading title="Checkout" action="Review order" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
            <CheckoutForm />
          </div>
          <aside className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-black">Payment Summary</h3>
            <div className="mt-5 space-y-3 text-sm">
              <Row label="Subtotal" value={formatMoney(totals.subtotal)} />
              <Row label="Shipping" value={formatMoney(totals.shipping)} />
              <Row label="Tax" value={formatMoney(totals.tax)} />
              <Row label="Total" value={formatMoney(totals.total)} strong />
            </div>
            <div className="mt-6 rounded-[1.4rem] bg-[linear-gradient(180deg,#fafafa,#efefef)] p-5 text-sm leading-7 text-[color:var(--muted)]">
              This MVP order flow is ready to connect to MySQL persistence and payment provider in the next step.
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
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
