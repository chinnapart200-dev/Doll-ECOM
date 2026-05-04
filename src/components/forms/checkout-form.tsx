"use client";

import { useState, useTransition } from "react";

export function CheckoutForm() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        startTransition(async () => {
          const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(form.entries())),
          });
          const data = (await response.json()) as { message?: string };
          setMessage(data.message || "Order submitted");
        });
      }}
    >
      <Field label="Full name" name="fullName" />
      <Field label="Email" name="email" type="email" />
      <Field label="Phone" name="phone" />
      <Field label="City" name="city" />
      <div className="md:col-span-2">
        <Field label="Address" name="address" />
      </div>
      <div className="md:col-span-2">
        <Field label="Country" name="country" defaultValue="Thailand" />
      </div>
      <div className="md:col-span-2">
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-[color:var(--text)]">Order note</span>
          <textarea
            name="note"
            rows={4}
            placeholder="Any delivery instructions?"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-lime)]"
          />
        </label>
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-black px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-black/85 disabled:opacity-60"
        >
          {pending ? "Placing Order..." : "Place Order"}
        </button>
      </div>
      {message ? <p className="md:col-span-2 text-sm text-[color:var(--muted)]">{message}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-[color:var(--text)]">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[color:var(--accent-lime)]"
      />
    </label>
  );
}
