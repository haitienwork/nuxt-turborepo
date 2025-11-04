# Nuxt Turborepo

A modern monorepo built with Nuxt 4, Turborepo, and pnpm workspaces.

## Features

- ⚡️ **Turborepo** - Fast build system with smart caching
- 📦 **pnpm workspaces** - Efficient dependency management
- 🎨 **Tailwind CSS v4** - Modern styling with Vite plugin
- 🔐 **Authentication** - OAuth (Discord) and credential auth
- 🎭 **UI Components** - Pre-built components with shadcn-vue
- 🛠️ **Utilities** - Reusable utils and composables
- 📝 **Biome** - Fast linting and formatting
- 🔄 **TypeScript** - Type-safe across the entire project

## Project Structure

```
nuxt-turborepo/
├── apps/
│   └── web/                    # Main Nuxt web application
├── layers/
│   ├── auth/                   # Authentication layer
│   ├── ui/                     # UI components library, all colors, tailwind config will be defined in this layer
│   ├── utils/                  # Utilities fn and composables
│   ├── nuxt-layer/             # Base Nuxt layer
│   └── nuxt-layer-tailwind/    # Base Nuxt Layer with Tailwind
└── packages/
    ├── biome-config/           # Shared Biome config
    └── typescript-config/      # Shared TypeScript config
```

## Requirements

- Node.js >= 18.x
- pnpm 9.15.4

## Getting Started

1. **Install dependencies**

```bash
pnpm install
```

2. **Start development server**

```bash
pnpm dev
```

The web app will run on `http://localhost:3000`

## Scripts

```bash
# Development
pnpm dev              # Run all apps in development mode
pnpm build            # Build all apps and layers
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Lint code with Biome
pnpm format           # Format code with Biome

# UI Components
pnpm shadcn:add-component       # Add shadcn-vue component to UI layer
```

## Apps & Layers

### Web App (Port 3000)

Main application that extends all layers.

### Auth Layer (Port 3001)

Authentication with OAuth and credential login.

**API Routes:**
- `POST /api/auth/credential` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/oauth/discord` - Discord OAuth
- `GET /api/me` - Get current user

### UI Layer
Reusable UI components built with shadcn-vue and Radix Vue.

### Utils Layer
Shared utilities and composables.

## Environment Variables

Create a `.env` file in `apps/web`:

```env
# API
NUXT_PUBLIC_API_ENDPOINT=https://api.example.com

# Auth
NUXT_PUBLIC_DISCORD_CLIENT_ID=your_discord_client_id
```

## Build for Production

```bash
pnpm build
```

Turborepo will cache builds and only rebuild what changed.

## Tech Stack

- **Framework:** Nuxt 4 (v4.2.0)
- **Build:** Turborepo (v2.5.5), pnpm (v9.15.4)
- **Styling:** Tailwind CSS v4
- **UI:** shadcn-vue, Radix Vue, Lucide Icons
- **Forms:** vee-validate, Zod
- **Auth:** nuxt-auth-utils
- **Code Quality:** Biome, TypeScript

## Documentation

- [Nuxt 4](https://nuxt.com/docs)
- [Turborepo](https://turbo.build/repo/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn-vue](https://www.shadcn-vue.com/)
