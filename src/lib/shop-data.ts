import { cartSeed, categories as seedCategories, products as seedProducts, type Category, type Product } from "./catalog";
import { executeDb, pool, queryDb } from "./mysql";

type ProductRow = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: string | number;
  old_price: string | number | null;
  badge: string | null;
  featured: 0 | 1;
  category_name: string;
  category_slug: string;
  colors: string | null;
};

type CategoryRow = {
  id: number;
  name: string;
  slug: string;
  summary: string | null;
};

type CartRow = {
  product_id: number;
  quantity: number;
  product_name: string;
  product_slug: string;
  price: string | number;
  old_price: string | number | null;
  badge: string | null;
  category_name: string;
  colors: string | null;
};

function toColorPalette(colors: string | null | undefined) {
  if (!colors) return ["#111111", "#d9d9d9", "#ffffff"];
  return colors.split(",").map((color) => color.trim()).filter(Boolean);
}

function mapProduct(row: ProductRow): Product {
  return {
    id: String(row.id),
    slug: row.slug,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    oldPrice: row.old_price == null ? undefined : Number(row.old_price),
    category: row.category_name,
    colorPalette: toColorPalette(row.colors),
    badge: row.badge ?? undefined,
    featured: Boolean(row.featured),
  };
}

function mapCategory(row: CategoryRow): Category {
  return {
    id: String(row.id),
    name: row.name,
    slug: row.slug,
    summary: row.summary ?? "",
  };
}

async function getProductsFromDb() {
  const rows = await queryDb<ProductRow>(`
    SELECT
      p.id,
      p.slug,
      p.name,
      p.description,
      p.price,
      p.old_price,
      p.badge,
      p.featured,
      c.name AS category_name,
      c.slug AS category_slug,
      GROUP_CONCAT(pc.color_hex ORDER BY pc.sort_order SEPARATOR ',') AS colors
    FROM products p
    INNER JOIN categories c ON c.id = p.category_id
    LEFT JOIN product_colors pc ON pc.product_id = p.id
    GROUP BY
      p.id, p.slug, p.name, p.description, p.price, p.old_price, p.badge, p.featured,
      c.name, c.slug
    ORDER BY p.created_at DESC, p.id DESC
  `);

  return rows.map(mapProduct);
}

async function getCategoriesFromDb() {
  const rows = await queryDb<CategoryRow>(`
    SELECT id, name, slug, summary
    FROM categories
    ORDER BY id ASC
  `);

  return rows.map(mapCategory);
}

async function getProductBySlugFromDb(slug: string) {
  const rows = await queryDb<ProductRow>(
    `
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description,
        p.price,
        p.old_price,
        p.badge,
        p.featured,
        c.name AS category_name,
        c.slug AS category_slug,
        GROUP_CONCAT(pc.color_hex ORDER BY pc.sort_order SEPARATOR ',') AS colors
      FROM products p
      INNER JOIN categories c ON c.id = p.category_id
      LEFT JOIN product_colors pc ON pc.product_id = p.id
      WHERE p.slug = ?
      GROUP BY
        p.id, p.slug, p.name, p.description, p.price, p.old_price, p.badge, p.featured,
        c.name, c.slug
      LIMIT 1
    `,
    [slug],
  );

  return rows[0] ? mapProduct(rows[0]) : null;
}

async function getProductsByCategoryFromDb(categoryName: string, limit?: number) {
  const rows = await queryDb<ProductRow>(
    `
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description,
        p.price,
        p.old_price,
        p.badge,
        p.featured,
        c.name AS category_name,
        c.slug AS category_slug,
        GROUP_CONCAT(pc.color_hex ORDER BY pc.sort_order SEPARATOR ',') AS colors
      FROM products p
      INNER JOIN categories c ON c.id = p.category_id
      LEFT JOIN product_colors pc ON pc.product_id = p.id
      WHERE c.name = ?
      GROUP BY
        p.id, p.slug, p.name, p.description, p.price, p.old_price, p.badge, p.featured,
        c.name, c.slug
      ORDER BY p.created_at DESC, p.id DESC
      ${limit ? "LIMIT ?" : ""}
    `,
    limit ? [categoryName, limit] : [categoryName],
  );

  return rows.map(mapProduct);
}

export async function getProducts() {
  try {
    if (!pool) throw new Error("mysql unavailable");
    return await getProductsFromDb();
  } catch {
    return seedProducts;
  }
}

export async function getCategories() {
  try {
    if (!pool) throw new Error("mysql unavailable");
    return await getCategoriesFromDb();
  } catch {
    return seedCategories;
  }
}

export async function getProductBySlug(slug: string) {
  try {
    if (!pool) throw new Error("mysql unavailable");
    return await getProductBySlugFromDb(slug);
  } catch {
    return seedProducts.find((product) => product.slug === slug) ?? null;
  }
}

export async function getRelatedProducts(category: string, currentSlug: string, limit = 3) {
  try {
    if (!pool) throw new Error("mysql unavailable");
    const products = await getProductsByCategoryFromDb(category, limit + 1);
    return products.filter((product) => product.slug !== currentSlug).slice(0, limit);
  } catch {
    return seedProducts.filter((product) => product.category === category && product.slug !== currentSlug).slice(0, limit);
  }
}

export type CartEntry = {
  product: Product;
  quantity: number;
  subtotal: number;
};

async function getCartFromDb(sessionKey = "demo-cart") {
  const rows = await queryDb<CartRow>(
    `
      SELECT
        ci.product_id,
        ci.quantity,
        p.name AS product_name,
        p.slug AS product_slug,
        p.price,
        p.old_price,
        p.badge,
        c.name AS category_name,
        GROUP_CONCAT(pc.color_hex ORDER BY pc.sort_order SEPARATOR ',') AS colors
      FROM cart_sessions cs
      INNER JOIN cart_items ci ON ci.cart_session_id = cs.id
      INNER JOIN products p ON p.id = ci.product_id
      INNER JOIN categories c ON c.id = p.category_id
      LEFT JOIN product_colors pc ON pc.product_id = p.id
      WHERE cs.session_key = ?
      GROUP BY
        ci.product_id, ci.quantity, p.name, p.slug, p.price, p.old_price, p.badge, c.name
      ORDER BY ci.id ASC
    `,
    [sessionKey],
  );

  const items = rows.map((row) => {
    const product: Product = {
      id: String(row.product_id),
      slug: row.product_slug,
      name: row.product_name,
      description: "",
      price: Number(row.price),
      oldPrice: row.old_price == null ? undefined : Number(row.old_price),
      category: row.category_name,
      colorPalette: toColorPalette(row.colors),
      badge: row.badge ?? undefined,
    };

    return {
      product,
      quantity: row.quantity,
      subtotal: product.price * row.quantity,
    };
  });

  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping = subtotal >= 199 || subtotal === 0 ? 0 : 15;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + shipping + tax;

  return {
    items,
    subtotal,
    shipping,
    tax,
    total,
  };
}

export async function getCartTotals(sessionKey = "demo-cart") {
  try {
    if (!pool) throw new Error("mysql unavailable");
    return await getCartFromDb(sessionKey);
  } catch {
    const items = cartSeed
      .map((entry) => {
        const product = seedProducts.find((item) => item.id === entry.productId);
        if (!product) return null;
        return {
          product,
          quantity: entry.quantity,
          subtotal: product.price * entry.quantity,
        };
      })
      .filter(Boolean) as CartEntry[];

    const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
    const shipping = subtotal >= 199 || subtotal === 0 ? 0 : 15;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = subtotal + shipping + tax;

    return {
      items,
      subtotal,
      shipping,
      tax,
      total,
    };
  }
}

export async function createOrder(draft: {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  note?: string;
  sessionKey?: string;
}) {
  const cart = await getCartTotals(draft.sessionKey ?? "demo-cart");

  const orderCode = `ORD-${Date.now()}`;

  try {
    if (!pool) {
      return {
        orderId: orderCode,
        cart,
      };
    }

    const orderResult = await executeDb(
      `
        INSERT INTO orders (
          order_code, full_name, email, phone, address, city, country, note,
          subtotal, shipping, tax, total, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
      `,
      [
        orderCode,
        draft.fullName,
        draft.email,
        draft.phone,
        draft.address,
        draft.city,
        draft.country,
        draft.note ?? null,
        cart.subtotal,
        cart.shipping,
        cart.tax,
        cart.total,
      ],
    );

    const orderId = Number((orderResult as { insertId?: number }).insertId ?? 0);

    for (const item of cart.items) {
      await executeDb(
        `
          INSERT INTO order_items (
            order_id, product_id, product_name, unit_price, quantity, subtotal
          ) VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
          orderId,
          Number(item.product.id),
          item.product.name,
          item.product.price,
          item.quantity,
          item.subtotal,
        ],
      );
    }

    return {
      orderId: orderCode,
      cart,
    };
  } catch {
    return {
      orderId: orderCode,
      cart,
    };
  }
}

export async function createUser(input: { name: string; email: string; passwordHash: string }) {
  const fallback = {
    id: `USR-${Date.now()}`,
    name: input.name,
    email: input.email,
  };

  try {
    if (!pool) {
      return fallback;
    }

    const result = await executeDb(
      `
        INSERT INTO users (full_name, email, password_hash, role)
        VALUES (?, ?, ?, 'customer')
      `,
      [input.name, input.email, input.passwordHash],
    );

    return {
      id: String((result as { insertId?: number }).insertId ?? Date.now()),
      name: input.name,
      email: input.email,
    };
  } catch {
    return fallback;
  }
}

export async function findUserByEmail(email: string) {
  try {
    if (!pool) {
      return null;
    }

    const rows = await queryDb<{ id: number; full_name: string; email: string; password_hash: string; role: string }>(
      `
        SELECT id, full_name, email, password_hash, role
        FROM users
        WHERE email = ?
        LIMIT 1
      `,
      [email],
    );

    return rows[0] ?? null;
  } catch {
    return null;
  }
}
