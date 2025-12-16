<div align="center">

# 🚀 NextJS Base

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-087EA4?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running the Application](#-running-the-application)
- [Docker](#-docker)
- [Code Generation](#-code-generation)
- [Validation \& i18n](#-validation--i18n)
- [Author](#-author)

---

## ✨ Features

- 🧭 **App Router (Next.js 16)** - Modern routing with `src/app` and `src/app/[locale]`
- 🌍 **Internationalization (next-intl)** - Multi-language support (EN/VI) with locale segment + JSON messages
- 🌓 **Theme switching** - Light/Dark/System via `next-themes` + CSS variables (`data-theme`)
- 🎨 **Tailwind CSS v4** - Utility-first styling with PostCSS integration
- 🧱 **Clean project layout** - `components/`, `service/`, `libs/`, `hooks/`, `types/`, `utils/`
- ⚡ **React Compiler enabled** - `reactCompiler: true` in `next.config.ts`
- 🛡️ **Error reporting hook** - `src/app/global-error.tsx` captures unhandled errors (Sentry ready)
- 🧩 **Client/Server data helpers** - `axios` client + `fetchServer` for SSR/ISR caching controls
- 📝 **TypeScript (strict)** - Strict type-checking and path alias `@/*`

---

## 🛠️ Tech Stack

| Technology                                                           | Description                                |
| -------------------------------------------------------------------- | ------------------------------------------ |
| [Next.js](https://nextjs.org/)                                       | React framework (App Router)               |
| [React](https://react.dev/)                                          | UI library (React 19)                      |
| [TypeScript](https://www.typescriptlang.org/)                        | Typed JavaScript (strict mode)             |
| [next-intl](https://next-intl.dev/)                                  | Internationalization for Next.js           |
| [next-themes](https://github.com/pacocoursey/next-themes)            | Theme switching (light/dark/system)        |
| [Tailwind CSS](https://tailwindcss.com/)                             | Utility-first styling (v4)                 |
| [Axios](https://axios-http.com/)                                     | HTTP client for client-side requests       |
| [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/) | Error monitoring (App Router compatible)   |
| [pnpm](https://pnpm.io/)                                             | Fast, disk space efficient package manager |

---

## 📁 Project Structure

```
nextjs/
├── 📄 next.config.ts                 # Next.js config (next-intl plugin, React Compiler)
├── 📄 tsconfig.json                  # TS config (strict, @/* path alias)
├── 📄 eslint.config.mjs              # ESLint config
├── 📂 public/                        # Static assets
└── 📂 src/
    ├── 📂 app/
    │   ├── 📄 layout.tsx             # Root layout (ThemeProvider, fonts, global CSS)
    │   ├── 📄 global-error.tsx       # Global error boundary (captures to Sentry)
    │   └── 📂 [locale]/
    │       ├── 📄 layout.tsx         # Locale layout (NextIntlClientProvider)
    │       └── 📄 page.tsx           # Home page entry
    ├── 📂 components/
    │   ├── 📂 pages/                 # Page-level components
    │   ├── 📂 shared/                # Shared layout primitives (PageContainer, ...)
    │   └── 📂 ui/                    # UI controls (LocaleSwitcher, ThemeSwitcher, ...)
    ├── 📂 contexts/                  # App contexts
    ├── 📂 hooks/                     # Reusable hooks
    ├── 📂 libs/
    │   ├── 📄 env.ts                 # Runtime env helpers (NEXT_PUBLIC_*)
    │   └── 📂 i18n/                  # next-intl routing/navigation config
    ├── 📂 locales/                   # Translation messages (en.json, vi.json)
    ├── 📂 service/
    │   ├── 📂 http/                  # HTTP helpers (axios client, server fetch)
    │   └── 📂 post-example/          # Example service (SSR/ISR + client download)
    ├── 📂 styles/                    # Global styles (Tailwind v4 import, CSS vars)
    ├── 📂 types/                     # Shared types
    └── 📂 utils/                     # App config, constants, helpers
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20+ (recommended v22+)
- **pnpm** package manager
- **Docker** (optional, only if you add containerization)

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment**

```bash
# If you have an example file, copy it first
cp .env.example .env.local
# Edit .env.local with your configuration (NEXT_PUBLIC_*)
```

---

## 🏃 Running the Application

### Development Mode

```bash
pnpm dev
```

### Production Mode

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## 🐳 Docker

This repository does **not** ship with a Dockerfile / docker-compose by default.

If you want to containerize it, a typical baseline is:

1. Add a `Dockerfile` for Next.js (build + runtime)
2. (Optional) Add `docker-compose.yml` to run the app + dependencies (DB, Redis, ...)
3. Ensure `NEXT_PUBLIC_*` env vars are provided at build/runtime as needed

> 📍 Local dev URL (default): `http://localhost:3000`

---

## ⚙️ Code Generation

This starter focuses on a clean structure rather than a dedicated generator CLI.

### Recommended conventions

- **Pages**: create page-level UI in `src/components/pages/*` and render from `src/app/**/page.tsx`
- **UI components**: keep reusable controls in `src/components/ui/*` and export via `src/components/ui/index.ts`
- **Shared primitives**: layout wrappers like `PageContainer` live in `src/components/shared/*`
- **Services**: split server-only and client-only API calls in `src/service/*` (see `post-example`)

---

## 🌍 Validation & i18n

This starter uses **`next-intl`** for translations and locale routing.

### Supported Languages

| Language          | Header Value |
| ----------------- | ------------ |
| English (default) | `en`         |
| Vietnamese        | `vi`         |

### Where translations live

- `src/locales/en.json`
- `src/locales/vi.json`

### Component example

```typescript
import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
};
```

### Locale routing

- Routes are under `src/app/[locale]/*`
- Locale list + default locale are defined in `src/utils/app-config.ts`
- Switching language is handled by `src/components/ui/LocaleSwitcher.tsx`

### Notes

```typescript
// Translation files are plain JSON. Example shape:
// {
//   "HomePage": {
//     "title": "Hello!",
//     "description": "This is your Next.js base for large projects."
//   }
// }
```

---

## 👨‍💻 Author

<div align="center">

**Tùng IT**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tungg-it)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/tungtt.dev/)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@.tung_it)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tung.webdeveloper@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**⭐ If you find this project helpful, please give it a star!**

Made with ❤️ by [Tùng IT](https://github.com/tungg-it)

</div>
