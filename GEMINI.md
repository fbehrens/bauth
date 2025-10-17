# Project Overview

This is a SvelteKit project using `better-auth` for authentication. It's configured to use a Node.js adapter, meaning it runs as a standalone server. The database is SQLite, with the schema managed by Drizzle ORM. Tailwind CSS is used for styling.

## Building and Running

- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Preview:** `pnpm preview`
- **Testing:** `pnpm test`

## Development Conventions

- **Formatting:** Use `pnpm format` to format the code with Prettier.
- **Linting:** Use `pnpm lint` to check for code quality with ESLint and Prettier.
- **Database:**
    - `pnpm db:push`: Apply schema changes to the database.
    - `pnpm db:generate`: Generate Drizzle migrations.
    - `pnpm db:migrate`: Run database migrations.
    - `pnpm db:studio`: Open Drizzle Studio to browse the database.
- **Authentication:** The project uses `better-auth`. The main page (`+page.svelte`) shows how to sign in with GitHub and Google, and how to sign out.
- **Database Schema:** The database schema is defined in `src/lib/server/db/schema.ts`. It includes tables for users, sessions, accounts, and verifications.
