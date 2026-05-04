export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  colorPalette: string[];
  badge?: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  summary: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type OrderDraft = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  note?: string;
};

export const categories: Category[] = [
  {
    id: "cat-001",
    name: "Women",
    slug: "women",
    summary: "New arrivals, standout layers, and everyday essentials.",
  },
  {
    id: "cat-002",
    name: "Men",
    slug: "men",
    summary: "Modern fits, relaxed tailoring, and casual staples.",
  },
  {
    id: "cat-003",
    name: "Kids",
    slug: "kids",
    summary: "Soft, colorful, and easy-to-wear pieces for little ones.",
  },
  {
    id: "cat-004",
    name: "Accessories",
    slug: "accessories",
    summary: "Bags, shades, and finishing touches for every outfit.",
  },
];

export const products: Product[] = [
  {
    id: "prd-001",
    slug: "embroidered-cotton-blouse",
    name: "Embroidered Cotton Blouse",
    description: "Airy fit with a premium texture and a crisp silhouette.",
    price: 99,
    category: "Women",
    colorPalette: ["#b0df1d", "#2a2a2a", "#f1f1f1"],
    badge: "NEW",
    featured: true,
  },
  {
    id: "prd-002",
    slug: "floral-print-shirt",
    name: "Floral Print Shirt",
    description: "Easy layering piece with a lightweight seasonal feel.",
    price: 120,
    oldPrice: 140,
    category: "Women",
    colorPalette: ["#ff7a00", "#d0d0d0", "#83cc4a"],
    badge: "-15%",
    featured: true,
  },
  {
    id: "prd-003",
    slug: "flower-long-kimono",
    name: "Flower Long Kimono",
    description: "Statement floral wrap with a flowing relaxed profile.",
    price: 89,
    category: "Women",
    colorPalette: ["#e73535", "#111111", "#dcdcdc"],
    featured: true,
  },
  {
    id: "prd-004",
    slug: "classic-cotton-tank",
    name: "Classic Cotton Tank",
    description: "Clean basic with a soft hand feel and a clean neckline.",
    price: 39,
    category: "Men",
    colorPalette: ["#62a2ff", "#23326b", "#e0e0e0"],
    badge: "NEW",
    featured: true,
  },
  {
    id: "prd-005",
    slug: "utility-oversized-jacket",
    name: "Utility Oversized Jacket",
    description: "Relaxed outerwear with a utility-inspired finish.",
    price: 159,
    oldPrice: 199,
    category: "Men",
    colorPalette: ["#79b41f", "#1f2b11", "#e5e5e5"],
    badge: "-20%",
    featured: true,
  },
  {
    id: "prd-006",
    slug: "off-shoulder-top",
    name: "Off-Shoulder Top",
    description: "Easy statement top with a soft drape and modern shape.",
    price: 79,
    category: "Women",
    colorPalette: ["#ff4b3a", "#2f55ff", "#d8d8d8"],
    featured: true,
  },
  {
    id: "prd-007",
    slug: "linen-button-shirt",
    name: "Linen Button Shirt",
    description: "Lightweight linen blend for warm days and crisp styling.",
    price: 69,
    category: "Men",
    colorPalette: ["#ef5b2e", "#1f4fff", "#f3f3f3"],
    featured: false,
  },
  {
    id: "prd-008",
    slug: "kids-pink-cap-set",
    name: "Kids Pink Cap Set",
    description: "Playful cap and coordinated set for a bright casual look.",
    price: 49,
    category: "Kids",
    colorPalette: ["#ff6fcf", "#ff9de0", "#ffffff"],
    featured: false,
  },
];

export const cartSeed: CartItem[] = [
  { productId: "prd-001", quantity: 1 },
  { productId: "prd-005", quantity: 2 },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
