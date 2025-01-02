// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-02',
  $production: {
    app: {
      head: {
        meta: [
          { name: 'description', content: 'Everything about Nuxt 3' }
        ],
        script: [
          { src: '/js/jquery.js' },
          { src: '/js/bootstrap.min.js' },
          { src: '/js/owl.carousel.min.js' },
          { src: '/js/smoothscroll.js' },
        ]
      }
    },
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      script: [
        { src: '/js/jquery.js' },
        { src: '/js/bootstrap.min.js' },
        { src: '/js/owl.carousel.min.js' },
        { src: '/js/smoothscroll.js' },
      ]
    }
  },
})
