// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      script: [
      ]
    }
  },
})
