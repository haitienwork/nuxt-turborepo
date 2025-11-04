import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  extends: ["@repo/ui", "@repo/utils", "@repo/auth", "@repo/nuxt-layer-tailwind"],
  css: ["./app/assets/css/tailwind.css"],
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
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT,

      // cms
      apiCmsEndpoint: process.env.NUXT_PUBLIC_API_CMS,

      // finance
      financeEndpoint: process.env.NUXT_PUBLIC_FINANCE_API,
      financeApiKey: process.env.NUXT_PUBLIC_API_KEY_FINANCE,

      // auth
      discordClientId: process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID,
      vapidPublicKey: process.env.NUXT_PUBLIC_VAPID_PUBLIC_KEY,

      // posthog
      posthogPublicKey:
        process.env.NUXT_PUBLIC_POSTHOG_KEY || "<ph_project_api_key>",
      posthogHost:
        process.env.NUXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      posthogDefaults: "2025-05-24",

      // sentry
      sentry: {
        dsn: process.env.NUXT_PUBLIC_SENTRY_DSN,
      },
      sentryTracing: process.env.NUXT_PUBLIC_SENTRY_TRACING,
    },
  },
});
