USE ecommerce_doll;

INSERT INTO categories (name, slug, summary) VALUES
('Women', 'women', 'New arrivals, standout layers, and everyday essentials.'),
('Men', 'men', 'Modern fits, relaxed tailoring, and casual staples.'),
('Kids', 'kids', 'Soft, colorful, and easy-to-wear pieces for little ones.'),
('Accessories', 'accessories', 'Bags, shades, and finishing touches for every outfit.');

INSERT INTO products (category_id, name, slug, description, price, old_price, badge, featured) VALUES
(1, 'Embroidered Cotton Blouse', 'embroidered-cotton-blouse', 'Airy fit with a premium texture and a crisp silhouette.', 99.00, NULL, 'NEW', 1),
(1, 'Floral Print Shirt', 'floral-print-shirt', 'Easy layering piece with a lightweight seasonal feel.', 120.00, 140.00, '-15%', 1),
(1, 'Flower Long Kimono', 'flower-long-kimono', 'Statement floral wrap with a flowing relaxed profile.', 89.00, NULL, NULL, 1),
(2, 'Classic Cotton Tank', 'classic-cotton-tank', 'Clean basic with a soft hand feel and a clean neckline.', 39.00, NULL, 'NEW', 1),
(2, 'Utility Oversized Jacket', 'utility-oversized-jacket', 'Relaxed outerwear with a utility-inspired finish.', 159.00, 199.00, '-20%', 1),
(1, 'Off-Shoulder Top', 'off-shoulder-top', 'Easy statement top with a soft drape and modern shape.', 79.00, NULL, NULL, 1),
(2, 'Linen Button Shirt', 'linen-button-shirt', 'Lightweight linen blend for warm days and crisp styling.', 69.00, NULL, NULL, 0),
(3, 'Kids Pink Cap Set', 'kids-pink-cap-set', 'Playful cap and coordinated set for a bright casual look.', 49.00, NULL, NULL, 0);
