import { cartSeed, products } from "./catalog";

export function buildCartItems() {
  return cartSeed
    .map((entry) => {
      const product = products.find((item) => item.id === entry.productId);
      if (!product) return null;
      return {
        ...entry,
        product,
        subtotal: product.price * entry.quantity,
      };
    })
    .filter(Boolean);
}

export function calculateCartTotals() {
  const items = buildCartItems();
  const subtotal = items.reduce((total, item) => total + item!.subtotal, 0);
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
