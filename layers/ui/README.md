# UI Layer
A UI component library for Nuxt 4 applications, built with shadcn-vue, Radix Vue, Tailwind CSS v4, and TypeScript.

## Available components/features
  - TailwindCSS v4 Configuration
  - Toggle Theme `@nuxtjs/color-mode`
  - Toast Notification (with Sooner)
  - SVG Icon define as component
  - Shadcn Components:
    - Button
    - Spinner
    - Toaster (sonner)

## Usage

### Extend the Layer in `nuxt.config.ts`
Add this layer to your Nuxt config:

```ts
export default defineNuxtConfig({
  extends: ['@repo/ui']
})
```

## Adding New Components
To add new shadcn-vue components:

```bash
# From repository root
pnpm shadcn:add-component [component_name]
```

## Customization

### Theme Colors

Colors are defined with CSS variables. All your colors will be defined in this file `/app/assets/tailwind.css`:

```css
:root {
  --primary: #4073ff;
  --background: #fff;
  --foreground: #060e23;
  /* ... more variables */
}

.dark {
  --primary: #2474f7;
  --background: #1b1b1f;
  --foreground: #e3e5e8;
  /* ... more variables */
}
```

### Dark Mode

```vue
<script setup>
const colorMode = useColorMode()

// Toggle dark mode
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
```

## Development

```bash
pnpm dev              # Run dev server (Port 3005)
pnpm build            # Build the layer
pnpm lint             # Lint with Biome
pnpm format           # Format with Biome
```

## Resources

- [shadcn-vue](https://www.shadcn-vue.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Radix Vue](https://www.reka-ui.com/)
- [Lucide Icons](https://lucide.dev/)
