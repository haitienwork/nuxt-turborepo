# Nuxt Layer with Tailwind CSS

A base Nuxt layer that comes pre-configured with Tailwind CSS v4, color mode support, and extends the UI and Utils layers.

## What's Included

- ✅ Tailwind CSS v4 with Vite plugin
- ✅ Color mode support (`@nuxtjs/color-mode`)
- ✅ Pre-configured aliases (`@` and `~`)
- ✅ Extends `@repo/ui` and `@repo/utils` layers

## Usage

### 1. Clone this layer

```bash
cp -r layers/nuxt-layer-tailwind layers/your-new-layer
```

### 2. Update the package name

Edit `layers/your-new-layer/package.json` and change the name:

```json
{
  "name": "@repo/your-new-layer",
  // ... rest of the config
}
```

### 3. Extend in your Nuxt app

Add the new layer to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ['@repo/your-new-layer'],
  // ... your other config
})
```

### 4. Install dependencies

```bash
pnpm install
```

## What You Get

When you extend this layer, your Nuxt app will automatically have:

- All UI components from `@repo/ui`
- All utilities from `@repo/utils`
- Tailwind CSS configured and ready to use
- Dark mode / light mode support out of the box

## Customization

You can override any configuration in your app's `nuxt.config.ts` or add additional layers to extend.
