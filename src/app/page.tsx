import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const metadata: Metadata = {
  title: "Home",
  description:
    "Fashion ecommerce homepage for Ecommerce Doll built for SEO, performance, and a premium shopping experience.",
};

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "SHOP", href: "#products" },
  { label: "BLOG", href: "#how-we-work" },
  { label: "PAGES", href: "#categories" },
  { label: "ELEMENTS", href: "#featured-products" },
  { label: "BUY", href: "#footer" },
];

const featuredCollections = [
  {
    title: "WOMAN COLLECTION",
    description: "Trendy outfits for every moment.",
    cta: "SHOP WOMAN",
    tone: "from-[#d9ff1f] via-[#d5ff54] to-[#b6ec0c]",
    glow: "shadow-[0_22px_60px_rgba(217,255,31,0.28)]",
  },
  {
    title: "MAN'S COLLECTION",
    description: "Effortless style for the modern man.",
    cta: "SHOP MAN",
    tone: "from-[#314cff] via-[#2344ff] to-[#1a2ccf]",
    glow: "shadow-[0_22px_60px_rgba(49,76,255,0.28)]",
  },
  {
    title: "KID'S COLLECTION",
    description: "Fun, comfy, and colorful for little trendsetters.",
    cta: "SHOP KIDS",
    tone: "from-[#ff48cc] via-[#ff77db] to-[#ff38b7]",
    glow: "shadow-[0_22px_60px_rgba(255,72,204,0.28)]",
  },
];

const latestProducts = [
  {
    name: "Embroidered Cotton Blouse",
    price: 99,
    badge: "NEW",
    palette: ["#b0df1d", "#2a2a2a", "#f1f1f1"],
    tone: "from-[#f1ffce] to-[#ffffff]",
  },
  {
    name: "Floral Print Shirt",
    price: 120,
    oldPrice: 140,
    badge: "-15%",
    palette: ["#ff7a00", "#d0d0d0", "#83cc4a"],
    tone: "from-[#fff4df] to-[#ffffff]",
  },
  {
    name: "Flower Long Kimono",
    price: 89,
    palette: ["#e73535", "#111111", "#dcdcdc"],
    tone: "from-[#fff0ef] to-[#ffffff]",
  },
  {
    name: "Classic Cotton Tank",
    price: 39,
    badge: "NEW",
    palette: ["#62a2ff", "#23326b", "#e0e0e0"],
    tone: "from-[#eef5ff] to-[#ffffff]",
  },
  {
    name: "Utility Oversized Jacket",
    price: 159,
    oldPrice: 199,
    badge: "-20%",
    palette: ["#79b41f", "#1f2b11", "#e5e5e5"],
    tone: "from-[#eef8d8] to-[#ffffff]",
  },
  {
    name: "Off-Shoulder Top",
    price: 79,
    palette: ["#ff4b3a", "#2f55ff", "#d8d8d8"],
    tone: "from-[#fff1ee] to-[#ffffff]",
  },
];

const topCategories = [
  { title: "FURNITURE", accent: "from-[#ff68ca] to-[#ff4dc2]", glyph: "🪑" },
  { title: "SHOES", accent: "from-[#2f53ff] to-[#1a36d8]", glyph: "👟" },
  { title: "CLOTHING", accent: "from-[#d9ff1f] to-[#c7f400]", glyph: "👕" },
  { title: "BAGS", accent: "from-[#ff57cd] to-[#ff25a8]", glyph: "👜" },
  { title: "ACCESSORIES", accent: "from-[#3357ff] to-[#203ad3]", glyph: "🕶️" },
];

const howItWorks = [
  {
    title: "CHOOSE PRODUCTS",
    description: "Browse hundreds of items from top categories.",
    icon: BoxIcon,
  },
  {
    title: "SECURE PAYMENT",
    description: "Safe and easy payment methods.",
    icon: CardIcon,
  },
  {
    title: "FAST DELIVERY",
    description: "We deliver your order quickly to your door.",
    icon: TruckIcon,
  },
];

const instagramGallery = [
  "from-[#b8ffef] to-[#4dbbe9]",
  "from-[#f7b2ff] to-[#ec56d7]",
  "from-[#ffd48f] to-[#f59e0b]",
  "from-[#a9b8ff] to-[#4567ff]",
  "from-[#ffae8b] to-[#ff6d38]",
  "from-[#efefef] to-[#b9b9b9]",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Ecommerce Doll",
      url: "https://ecommerce-doll.com",
    },
    {
      "@type": "WebSite",
      name: "Ecommerce Doll",
      url: "https://ecommerce-doll.com",
    },
  ],
};

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-[color:var(--accent-lime)] px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-black">
      {children}
    </span>
  );
}

function WishIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 20.5 4.65 13.2a4.5 4.5 0 0 1 0-6.36 4.5 4.5 0 0 1 6.36 0L12 7.82l1-0.98a4.5 4.5 0 0 1 6.36 6.36L12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M20 20a8 8 0 1 0-16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="3.1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M3 5h2l2 11h10l2-7H7.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.4" fill="currentColor" />
      <circle cx="18" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <path
        d="m4.5 8 7.5-4 7.5 4-7.5 4-7.5-4Zm0 0v8l7.5 4 7.5-4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 10h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <path
        d="M3.5 7.5h10v8h-10v-8Zm10 2h3.6l2.4 2.8v3.2h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="18" r="1.4" fill="currentColor" />
      <circle cx="17" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ProductCard({
  item,
  index,
}: {
  item: (typeof latestProducts)[number];
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.4rem] border border-black/10 bg-[color:var(--surface)] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(17,17,17,0.12)]">
      <div
        className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-b ${item.tone}`}
        aria-hidden="true"
      >
        <div className="absolute inset-x-5 bottom-0 top-4 rounded-[1.5rem] border border-white/70 bg-white/35 backdrop-blur-[2px]" />
        <div className="absolute left-1/2 top-8 h-20 w-14 -translate-x-1/2 rounded-[48%_48%_40%_40%] bg-[#101010] shadow-[0_24px_40px_rgba(17,17,17,0.24)]" />
        <div
          className="absolute left-1/2 top-24 h-40 w-28 -translate-x-1/2 rounded-[45%_45%_38%_38%] bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.65),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.2))]"
          style={{
            boxShadow: `0 24px 50px rgba(17,17,17,0.18), inset 0 0 0 1px rgba(17,17,17,0.04)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-10 flex justify-center gap-2">
          {item.palette.map((color) => (
            <span
              key={color}
              className="h-3 w-3 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        {item.badge ? (
          <span className="absolute left-3 top-3 rounded-sm bg-[color:var(--accent-lime)] px-2 py-1 text-[0.65rem] font-extrabold text-black">
            {item.badge}
          </span>
        ) : null}
        <button
          type="button"
          aria-label={`Save ${item.name}`}
          className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-black shadow-lg transition hover:bg-white"
        >
          <WishIcon />
        </button>
        <div className="absolute inset-x-4 bottom-4 flex justify-between">
          <span className="rounded-full bg-black/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label={`Add ${item.name} to cart`}
            className="grid h-8 w-8 place-items-center rounded-md bg-black text-white transition hover:bg-black/85"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-[0.95rem] font-semibold leading-6 text-[color:var(--text)]">
          {item.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[1.02rem] font-extrabold text-[color:var(--text)]">
            {currency.format(item.price)}
          </span>
          {item.oldPrice ? (
            <span className="text-sm text-[color:var(--muted)] line-through">
              {currency.format(item.oldPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function CategoryTile({
  title,
  accent,
  glyph,
}: {
  title: string;
  accent: string;
  glyph: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${accent} p-4 text-black shadow-[0_22px_50px_rgba(17,17,17,0.12)] transition duration-300 hover:-translate-y-1`}
    >
      <div className="relative flex min-h-[170px] flex-col justify-between rounded-[1.2rem] border border-white/40 bg-white/8 p-4 backdrop-blur-[2px]">
        <div className="flex items-start justify-between">
          <h3 className="max-w-[8rem] text-[1.45rem] font-black leading-[0.95] tracking-tight text-black">
            {title}
          </h3>
          <button
            type="button"
            aria-label={`Open ${title}`}
            className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:translate-x-0.5"
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="flex items-end justify-between gap-4">
          <span className="text-[3.6rem] leading-none">{glyph}</span>
          <span className="text-right text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-black/70">
            View collection
          </span>
        </div>
      </div>
    </article>
  );
}

function StepCard({
  step,
  description,
  icon: Icon,
  index,
}: {
  step: string;
  description: string;
  icon: typeof BoxIcon;
  index: number;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/10 bg-[color:var(--surface)] p-6 shadow-[0_20px_44px_rgba(17,17,17,0.08)]">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[color:var(--accent-lime)] text-black shadow-inner">
          <Icon />
        </div>
        <div className="space-y-2">
          <p className="text-[2.4rem] font-black leading-none text-[color:var(--accent-lime)]">
            {String(index).padStart(2, "0")}.
          </p>
          <h3 className="text-[1.08rem] font-extrabold uppercase tracking-[0.12em] text-[color:var(--text)]">
            {step}
          </h3>
          <p className="max-w-[18rem] text-sm leading-6 text-[color:var(--muted)]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="texture overflow-x-hidden">
        <div className="border-b border-black/10 bg-white/50">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-black/80 md:px-6">
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent-lime)]" />
              Free shipping on orders over $199
            </p>
            <div className="flex items-center gap-4 text-[0.66rem] md:gap-6">
              <Link href="#footer" className="hover:opacity-70">
                EN / USD
              </Link>
              <Link href="#footer" className="hover:opacity-70">
                HELP
              </Link>
              <Link href="#footer" className="hover:opacity-70">
                TRACK ORDER
              </Link>
            </div>
          </div>
        </div>

        <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(246,245,242,0.88)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-6">
            <div className="flex items-center gap-4">
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

            <Link href="#hero" className="font-display text-[1.8rem] leading-none tracking-[0.02em] text-black md:text-[2.5rem]">
              WOODMART<span className="text-[color:var(--accent-pink)]">.</span>
            </Link>

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-8 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-black">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="relative pb-2 transition hover:text-black/60 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[color:var(--accent-pink)]"
                    >
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
                className="relative grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:bg-white"
              >
                <WishIcon />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--accent-blue)] text-[0.65rem] font-black text-white">
                  1
                </span>
              </button>
              <button
                type="button"
                aria-label="Cart"
                className="relative flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-black shadow-sm transition hover:bg-white"
              >
                <CartIcon />
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--accent-lime)] text-[0.7rem] font-black text-black">
                  2
                </span>
                <span className="hidden text-[0.8rem] font-bold md:inline">$245.00</span>
              </button>
            </div>
          </div>
        </header>

        <section id="hero" className="mx-auto max-w-[1600px] px-4 pb-10 pt-8 md:px-6">
          <div className="grid gap-5 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--surface)] px-6 py-8 shadow-[var(--shadow)] md:px-10 md:py-12 lg:col-span-12">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 -translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,71,200,0.15),transparent_60%)] blur-3xl" />
                <div className="absolute right-8 top-16 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(47,83,255,0.12),transparent_70%)]" />
              </div>

              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-5">
                  <p className="mb-6 text-[0.8rem] font-bold uppercase tracking-[0.28em] text-black/55">
                    New season. New vibes.
                  </p>
                  <h1 className="font-display text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.82] tracking-[0.03em] text-black">
                    COLOR
                  </h1>
                  <p className="mt-4 max-w-xl text-[1.05rem] font-extrabold uppercase tracking-[0.08em] text-black md:text-[1.2rem]">
                    Bold looks that speak louder.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="#products"
                      className="inline-flex items-center gap-3 rounded-full border border-black bg-[color:var(--accent-lime)] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:translate-y-[-1px]"
                    >
                      Explore Collection
                      <ArrowIcon />
                    </Link>
                    <Link
                      href="#categories"
                      className="inline-flex items-center rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:bg-black hover:text-white"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

                <div className="relative lg:col-span-7">
                  <button
                    type="button"
                    aria-label="Previous hero slide"
                    className="absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-black text-white shadow-lg transition hover:scale-105"
                  >
                    <ArrowIcon className="h-5 w-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next hero slide"
                    className="absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-black text-white shadow-lg transition hover:scale-105"
                  >
                    <ArrowIcon className="h-5 w-5" />
                  </button>

                  <div className="grid gap-5 lg:grid-cols-12">
                    <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(248,248,248,0.65))] lg:col-span-8">
                      <div className="absolute left-8 top-8 h-48 w-52 rounded-[2rem] border-[14px] border-[color:var(--accent-pink)]/85" />
                      <div className="absolute right-6 top-10 h-40 w-24 rounded-full bg-black/90 blur-[2px]" />
                      <div className="absolute right-16 top-16 h-20 w-20 rounded-full bg-[color:var(--accent-blue)] blur-[2px]" />
                      <div className="absolute bottom-0 left-[40%] h-[23rem] w-[16rem] -translate-x-1/2 rounded-[52%_52%_40%_40%] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.9),transparent_30%),linear-gradient(180deg,#ff6fcf_0%,#6237ff_72%,#25154d_100%)] shadow-[0_28px_60px_rgba(17,17,17,0.22)]" />
                      <div className="absolute bottom-14 left-9 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-[0_18px_44px_rgba(17,17,17,0.1)]">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-black/50">
                          Style Notes
                        </p>
                        <p className="mt-1 max-w-[12rem] text-[0.88rem] font-semibold text-black">
                          Layered textures, statement color, and premium street energy.
                        </p>
                      </div>
                    </div>

                    <aside className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--surface)] p-6 shadow-[var(--shadow)] lg:col-span-4">
                      <p className="text-[0.72rem] font-black uppercase tracking-[0.22em] text-[color:var(--accent-pink)]">
                        New in
                      </p>
                      <h2 className="mt-4 font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.88] text-black">
                        SPRING / SUMMER
                      </h2>
                      <p className="mt-3 text-[1rem] font-semibold uppercase tracking-[0.08em] text-black/75">
                        Collection 2024
                      </p>
                      <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(180deg,#f9f9f9,#ececec)] p-4 shadow-inner">
                        <p className="text-sm font-medium leading-6 text-black/70">
                          Discover fresh fits with elevated silhouettes, vivid tones,
                          and fast delivery for the new season.
                        </p>
                        <Link
                          href="#products"
                          className="mt-5 inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-black/85"
                        >
                          Discover
                        </Link>
                      </div>
                      <div className="absolute right-6 top-6 text-[4rem] leading-none text-[color:var(--accent-pink)]/75">
                        ✦
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 pb-10 md:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredCollections.map((item, index) => (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${item.tone} p-4 text-black shadow-[var(--shadow)] ${item.glow}`}
              >
                <div className="grid min-h-[14rem] rounded-[1.3rem] border border-white/40 bg-white/10 p-5 backdrop-blur-[2px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="max-w-[12rem] text-[1.6rem] font-black leading-[0.94] tracking-tight">
                        {item.title}
                      </h2>
                      <p className="mt-3 max-w-[14rem] text-sm font-medium leading-6 text-black/78">
                        {item.description}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
                      <ArrowIcon />
                    </span>
                  </div>
                  <div className="mt-auto flex items-end justify-between">
                    <Link
                      href="#products"
                      className="inline-flex items-center gap-2 text-[0.74rem] font-extrabold uppercase tracking-[0.18em]"
                    >
                      {item.cta}
                      <ArrowIcon />
                    </Link>
                    <span className="text-[4rem] leading-none opacity-25">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <SectionTag>Follow collection</SectionTag>
              <h2 className="mt-3 font-display text-[clamp(2.8rem,4.6vw,4.8rem)] leading-none text-black">
                Latest Products
              </h2>
            </div>
            <Link
              href="#featured-products"
              className="hidden items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-black transition hover:opacity-70 md:inline-flex"
            >
              View all products
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {latestProducts.map((item, index) => (
              <ProductCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-[1600px] px-4 py-10 md:px-6">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <SectionTag>Follow collection</SectionTag>
              <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.4rem)] leading-none text-black">
                Top Categories
              </h2>
            </div>
            <Link
              href="#footer"
              className="hidden items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-black transition hover:opacity-70 md:inline-flex"
            >
              View all categories
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {topCategories.map((item) => (
              <CategoryTile
                key={item.title}
                title={item.title}
                accent={item.accent}
                glyph={item.glyph}
              />
            ))}
          </div>
        </section>

        <section
          id="featured-products"
          className="mx-auto max-w-[1600px] px-4 py-8 md:px-6"
        >
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <SectionTag>Follow collection</SectionTag>
              <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.4rem)] leading-none text-black">
                Latest Products
              </h2>
            </div>
            <Link
              href="#how-we-work"
              className="hidden items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-black transition hover:opacity-70 md:inline-flex"
            >
              View all products
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 overflow-x-auto pb-2 md:grid-cols-3 xl:grid-cols-6">
            {latestProducts.map((item, index) => (
              <ProductCard key={`${item.name}-${index}`} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="how-we-work" className="mx-auto max-w-[1600px] px-4 py-12 md:px-6">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_2.1fr]">
            <div className="space-y-4">
              <SectionTag>Follow collection</SectionTag>
              <h2 className="font-display text-[clamp(3rem,4.5vw,4.8rem)] leading-none text-black">
                How We Work
              </h2>
              <p className="max-w-md text-base leading-7 text-[color:var(--muted)]">
                We keep the buying journey simple, fast, and trustworthy from
                product discovery to checkout and delivery.
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              {howItWorks.map((item, index) => (
                <StepCard
                  key={item.title}
                  step={item.title}
                  description={item.description}
                  icon={item.icon}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="mx-auto max-w-[1600px] px-4 py-12 md:px-6">
          <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[1.8rem] border border-black/10 bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]">
              <SectionTag>Follow us</SectionTag>
              <h2 className="mt-3 font-display text-[clamp(2.5rem,4vw,4.5rem)] leading-none text-black">
                Woodmart on Instagram
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-[color:var(--muted)]">
                Follow our styling stories, new drops, and behind-the-scenes
                moments to keep your store experience fresh and social.
              </p>
              <Link
                href="#footer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-black bg-[color:var(--accent-lime)] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:translate-y-[-1px]"
              >
                Follow @Woodmart
                <ArrowIcon />
              </Link>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
              {instagramGallery.map((accent, index) => (
                <div
                  key={accent}
                  className={`aspect-square overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${accent} shadow-[var(--shadow)]`}
                  aria-hidden="true"
                >
                  <div className="flex h-full items-end justify-between p-4 text-white">
                    <span className="rounded-full bg-black/25 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                      Post {index + 1}
                    </span>
                    <span className="text-3xl font-black">IG</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="footer" className="mt-10 border-t border-white/10 bg-[#111111] text-white">
          <div className="mx-auto max-w-[1600px] px-4 py-14 md:px-6">
            <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.1fr]">
              <div className="space-y-4">
                <Link href="#hero" className="font-display text-[2.4rem] leading-none">
                  WOODMART<span className="text-[color:var(--accent-pink)]">.</span>
                </Link>
                <p className="max-w-md text-sm leading-7 text-white/72">
                  WoodMart is a premium ecommerce WordPress theme for any kind of
                  online store and marketplace. This implementation keeps the
                  same bold fashion-energy while staying SEO-friendly in Next.js.
                </p>
              </div>

              <FooterLinks
                title="SHOP"
                links={["Shop Grid", "Shop List", "Product Page", "Categories", "Wishlist"]}
              />
              <FooterLinks
                title="INFORMATION"
                links={["About Us", "Contact Us", "FAQ", "Shipping & Returns", "Privacy Policy"]}
              />
              <FooterLinks
                title="CUSTOMER SERVICE"
                links={["My Account", "Order Tracking", "Support Center", "Payment Methods", "Terms & Conditions"]}
              />

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
                <div className="flex items-center gap-5 pt-4 text-sm text-white/72">
                  <span>VISA</span>
                  <span>Mastercard</span>
                  <span>PayPal</span>
                  <span>Apple Pay</span>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
              © 2026 Ecommerce Doll. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-[0.78rem] font-black uppercase tracking-[0.22em] text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-white/72">
        {links.map((link) => (
          <li key={link}>
            <Link href="#hero" className="transition hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
