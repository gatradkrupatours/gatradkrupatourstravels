// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-02",
  runtimeConfig: {
    public: {
      gtm: {
        id:
          process.env.NODE_ENV === "production"
            ? "G-4Q3N91R954"
            : "G-4K4Q0S4G7N",
      },
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});
