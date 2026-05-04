ASK
PLAN
Implement
Review DIFF
Run/Test
commit




# Ecommerce Doll

Next.js starter project for an ecommerce storefront.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Set up MySQL/XAMPP connection variables in `.env.local`:

```bash
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=ecommerce_doll
```

Import the schema and seed files into MySQL:

- `database/schema.sql`
- `database/seed.sql`

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run ESLint

## Project Structure

- `src/app/layout.tsx` - root layout and metadata
- `src/app/page.tsx` - homepage
- `src/app/globals.css` - global styles and Tailwind setup
- `tailwind.config.ts` - Tailwind configuration
- `eslint.config.mjs` - ESLint flat config

## Notes

- The project uses the App Router.
- The TypeScript alias `@/*` points to `src/*`.
- If you add new environment variables later, document them here.
