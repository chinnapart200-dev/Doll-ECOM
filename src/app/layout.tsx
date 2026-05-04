import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Ecommerce Doll",
    template: "%s | Ecommerce Doll",
  },
  description:
    "A fashion ecommerce storefront built with Next.js, React, and MySQL.",
  keywords: ["ecommerce", "fashion store", "Next.js", "React", "MySQL"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ecommerce Doll",
    title: "Ecommerce Doll",
    description:
      "A fashion ecommerce storefront built with Next.js, React, and MySQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Doll",
    description:
      "A fashion ecommerce storefront built with Next.js, React, and MySQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
