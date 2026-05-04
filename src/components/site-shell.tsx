import Link from "next/link";
import { ArrowIcon, CartIcon, MenuIcon, SearchIcon, UserIcon, WishIcon } from "./store-icons";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/products" },
  { label: "CART", href: "/cart" },
  { label: "CHECKOUT", href: "/checkout" },
  { label: "LOGIN", href: "/login" },
];

export function SiteHeader() {
  return (
    <div className="border-b border-black/10 bg-[rgba(246,245,242,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:bg-white"
          >
            <MenuIcon />
          </button>
          <button
            type="button"
            aria-label="Search"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:bg-white"
          >
            <SearchIcon />
          </button>
        </div>

        <Link href="/" className="font-display text-[1.8rem] leading-none tracking-[0.02em] text-black md:text-[2.5rem]">
          WOODMART<span className="text-[color:var(--accent-pink)]">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-black">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-black/60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Account"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:bg-white"
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:bg-white"
          >
            <WishIcon />
          </button>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-black shadow-sm transition hover:bg-white"
          >
            <CartIcon />
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--accent-lime)] text-[0.7rem] font-black text-black">
              2
            </span>
            <span className="hidden text-[0.8rem] font-bold md:inline">$245.00</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="footer" className="mt-10 border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-14 md:px-6">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-4">
            <Link href="/" className="font-display text-[2.4rem] leading-none">
              WOODMART<span className="text-[color:var(--accent-pink)]">.</span>
            </Link>
            <p className="max-w-md text-sm leading-7 text-white/72">
              A modern fashion ecommerce experience built with Next.js and MySQL-ready architecture.
            </p>
          </div>

          <FooterLinks title="SHOP" links={["Products", "Women", "Men", "Kids", "Accessories"]} />
          <FooterLinks title="INFORMATION" links={["About Us", "Contact Us", "FAQ", "Shipping", "Privacy Policy"]} />
          <FooterLinks title="CUSTOMER SERVICE" links={["My Account", "Order Tracking", "Support", "Payment Methods", "Terms"]} />

          <div className="space-y-4">
            <h3 className="text-[0.78rem] font-black uppercase tracking-[0.22em] text-white">
              Newsletter
            </h3>
            <p className="text-sm leading-7 text-white/72">
              Get updates on new products and upcoming sales.
            </p>
            <form className="flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[color:var(--accent-lime)]"
              />
              <button
                type="submit"
                className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--accent-lime)] text-black transition hover:scale-105"
                aria-label="Subscribe"
              >
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
          © 2026 Ecommerce Doll. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[0.78rem] font-black uppercase tracking-[0.22em] text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-white/72">
        {links.map((link) => (
          <li key={link}>
            <Link href="/" className="transition hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
