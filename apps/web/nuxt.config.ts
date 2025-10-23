import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
	extends: ['@repo/ui', '@repo/utils'],
	css: ['./app/assets/css/tailwind.css'],
	modules: [
    '@nuxtjs/color-mode'
  ],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "./app",
				"~": "./app",
			},
		},
	},
  colorMode: {
    classSuffix: ''
  }
})
