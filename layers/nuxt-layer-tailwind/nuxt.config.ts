import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	extends: ["@repo/ui", "@repo/utils"],
	css: [join(currentDir, "./app/assets/css/tailwind.css")],
	modules: ["@nuxtjs/color-mode"],
	vite: {
		plugins: [tailwindcss()],
	},
	alias: {
		"@": join(currentDir, "./app"),
		"~": join(currentDir, "./app"),
	},
	colorMode: {
		classSuffix: "",
	},
});
