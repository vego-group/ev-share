# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

EV Share marketing/landing website — a Next.js 16 (App Router) site presenting a mobility-asset ownership model (scooters, bikes, cars) and capturing partner leads. Bilingual (Arabic/English) via next-intl. See [docs/golden-presentation-path.md](docs/golden-presentation-path.md) for the full product narrative, current known gaps, and the intended demo flow — read it before making UX/copy changes so you don't contradict the presentation script.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`, `pnpm-workspace.yaml`).

- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test suite configured in this repo.

## Architecture

### Routing & i18n

- App Router with a required `[locale]` segment (`src/app/[locale]/...`). Locale config lives in [src/i18n/routing.ts](src/i18n/routing.ts): locales are `ar`/`en`, default is `ar`, prefix mode is `as-needed` (so `/` serves Arabic, `/en` serves English).
- Route groups: `(main)` wraps public pages with `Navbar`/`Footer` ([src/app/[locale]/(main)/layout.tsx](src/app/[locale]/(main)/layout.tsx)). Pages: `/`, `/about`, `/contact`, `/partner`, `/privacy-policy`, `/terms-of-service`.
- `/qr` sits outside `(main)` and is currently an empty stub — do not treat it as a finished page.
- `src/app/[...catchAll]/page.tsx` handles unmatched routes outside the locale scope; `src/app/not-found.tsx` handles in-locale 404s.
- Always import navigation primitives (`Link`, `redirect`, `usePathname`, `useRouter`, `getPathname`) from [src/i18n/navigation.ts](src/i18n/navigation.ts), not `next/navigation` or plain `next/link`, so locale prefixing stays correct.
- Translated strings live in `src/messages/{ar,en}.json`, loaded via [src/i18n/request.ts](src/i18n/request.ts). Note (from project docs): the Arabic message file has known mojibake/encoding issues in some strings — verify rendering when touching Arabic copy.
- RTL/LTR is derived from locale in the root `[locale]/layout.tsx` (`dir="rtl"` for `ar`).

### Component organization

- `src/components/ui/` — shadcn/ui primitives (style "new-york", configured via [components.json](components.json); aliases `@/components`, `@/lib`, `@/components/ui`, `@/hooks`). Add new shadcn components with the `shadcn` CLI rather than hand-rolling.
- `src/components/main/<feature>/` — one directory per page/section (e.g. `landing/hero`, `landing/passive-income`, `partner`, `about`, `contact`). Landing page itself is composed from many small section directories under `src/components/main/landing/`.
- `src/components/navbar/`, `src/components/footer/` — shared chrome used by the `(main)` layout.
- Path alias `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)).

### Forms, validation & data flow

Forms follow a consistent pattern (see `partner` as the reference implementation, the only fully-wired form):

1. Zod schema in `src/schemas/main/<name>.ts` defines validation and does any input normalization (e.g. `partner.ts` normalizes local Saudi numbers into `9665XXXXXXXX` via `z.preprocess`). Schemas are re-exported through `src/schemas/index.ts` / `src/schemas/main/index.ts`.
2. `react-hook-form` + `@hookform/resolvers/zod` binds the schema to the form component. Field-level components live alongside the form (e.g. `partner-full-name-field.tsx`, `partner-phone-field.tsx`).
3. Submission calls a server action in `src/services/mutations/<name>.ts` (marked `"use server"`), which calls `safeApi(method, url, payload)`.
4. `safeApi`/`safe` in [src/services/index.ts](src/services/index.ts) is the single entry point for all HTTP calls: it attaches the auth token (from cookies via [src/lib/utils/auth.ts](src/lib/utils/auth.ts)), sets JSON or multipart headers, and always resolves to a typed `ApiResult<T, E>` (`{ ok, status, data?, error?, message }`) — callers should branch on `ok`, never on thrown exceptions in the happy path.
5. `BASE_URL` comes from `NEXT_PUBLIC_API_BASE_URL` (`.env`); production backend is `https://backend.evshare.app/api/v1`.

The `contact` form has a schema (`src/schemas/main/contact.ts`) and client-side validation but is **not** wired to a backend mutation — don't assume it submits anywhere.

### Other conventions

- `cn()` in [src/lib/utils/utils.ts](src/lib/utils/utils.ts) (clsx + tailwind-merge) is the standard way to compose conditional Tailwind classes.
- Animation helpers live in [src/lib/motion.ts](src/lib/motion.ts) (framer-motion).
- Toasts use `react-hot-toast`, mounted once in the root `[locale]/layout.tsx`.
- Tailwind v4 is configured via `@tailwindcss/postcss`; theme/CSS variables live in `src/app/globals.css` (referenced by `components.json`), not a `tailwind.config`.
