# Nuxt Layer Base

A minimal base Nuxt layer template that extends the `@repo/utils` layer. This layer provides a clean starting point for creating new Nuxt layers in your monorepo.

## Features

- ✨ Pre-configured with `@repo/utils` layer
- 📁 Alias setup for `@` and `~` paths
- 🛠️ Ready-to-use with Biome for linting and formatting
- 🎯 TypeScript support

## Quick Start

### 1. Clone this folder

```bash
# From the layers directory
cp -r nuxt-layer my-new-layer
cd my-new-layer
```

### 2. Update package.json

Change the `name` field to your new layer name:

```json
{
  "name": "@repo/my-new-layer",
  // ... rest of the config
}
```

### 3. Extend in your Nuxt app

Add your new layer to any Nuxt app's `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@repo/my-new-layer"],
  // ... rest of your config
})
```

### 4. Install dependencies

```bash
# From the root of the monorepo
pnpm install
```

## What's Included

- **Utils Layer**: This layer already extends `@repo/utils`, giving you access to shared utilities and composables

## Structure

```
nuxt-layer/
├── nuxt.config.ts    # Layer configuration
├── package.json      # Package configuration
├── biome.json        # Linting/formatting config
├── tsconfig.json     # TypeScript config
└── app/              # Your layer's app directory (optional)
```

## Usage Example

After setting up your new layer, you can:

- Add components in `app/components/`
- Add composables in `app/composables/`
- Add utilities in `app/utils/`
- Add plugins in `app/plugins/`
- Configure middleware in `app/middleware/`

All of these will be automatically available to apps that extend your layer.

