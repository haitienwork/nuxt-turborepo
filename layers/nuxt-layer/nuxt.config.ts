import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	extends: ["@repo/utils"],
	alias: {
		"@": join(currentDir, "./app"),
		"~": join(currentDir, "./app"),
	},
});
