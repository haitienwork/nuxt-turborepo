import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	extends: ["@repo/utils"],
	modules: ["nuxt-auth-utils"],
	alias: {
		"@": join(currentDir, "./app"),
		"~": join(currentDir, "./app"),
		"#shared": join(currentDir, "./shared"),
	},
	runtimeConfig: {
		public: {
			apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT,
			discordClientId: process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID,
		},
		session: {
			name: "auth-session",
			password: process.env.NUXT_SESSION_PASSWORD || "",
		},
	},
});
