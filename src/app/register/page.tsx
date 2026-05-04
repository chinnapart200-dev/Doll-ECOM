import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/forms/register-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new Ecommerce Doll account.",
};

export default function RegisterPage() {
  return (
    <main className="texture min-h-screen overflow-x-hidden">
      <SiteHeader />
      <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-8 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.8rem] border border-black/10 bg-[linear-gradient(180deg,#fff,#f6f6f6)] p-6 shadow-[var(--shadow)]">
          <SectionHeading title="Create Account" />
          <p className="text-base leading-7 text-[color:var(--muted)]">
            Register to save favorites, speed up checkout, and view order history.
          </p>
          <Link href="/login" className="mt-6 inline-block text-sm font-bold text-black underline underline-offset-4">
            Already have an account? Sign in.
          </Link>
        </div>
        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
          <RegisterForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
