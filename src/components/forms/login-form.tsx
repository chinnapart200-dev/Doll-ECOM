"use client";

import { useState, useTransition } from "react";

export function LoginForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        startTransition(async () => {
          const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: String(form.get("email") || ""),
              password: String(form.get("password") || ""),
            }),
          });
          const data = (await response.json()) as { message?: string };
          setStatus(data.message || "Signed in");
        });
      }}
    >
      <Field label="Email" name="email" type="email" placeholder="you@example.com" />
      <Field label="Password" name="password" type="password" placeholder="Your password" />
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-black px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Signing In..." : "Sign In"}
      </button>
      {status ? <p className="text-sm text-[color:var(--muted)]">{status}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-[color:var(--text)]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[color:var(--accent-lime)]"
      />
    </label>
  );
}
