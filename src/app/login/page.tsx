import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/forms/login-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Ecommerce Doll account.",
};

export default function LoginPage() {
  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />
      <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-8 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.8rem] border border-black/10 bg-[linear-gradient(180deg,#fff,#f6f6f6)] p-6 shadow-[var(--shadow)]">
          <SectionHeading title="Welcome Back" />
          <p className="text-base leading-7 text-[color:var(--muted)]">
            Sign in to continue shopping, track orders, and manage your profile.
          </p>
          <Link href="/register" className="mt-6 inline-block text-sm font-bold text-black underline underline-offset-4">
            Need an account? Register here.
          </Link>
        </div>
        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
          <LoginForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
