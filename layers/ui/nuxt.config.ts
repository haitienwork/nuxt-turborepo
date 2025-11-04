import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: [join(currentDir, "./app/assets/css/tailwind.css")],
	modules: ["shadcn-nuxt", "@nuxtjs/color-mode"],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": join(currentDir, "./app"),
				"~": join(currentDir, "./app"),
			},
		},
	},
	shadcn: {
		prefix: "",
		componentDir: join(currentDir, "./app/components/ui"),
	},
	colorMode: {
		classSuffix: "",
	},
});
