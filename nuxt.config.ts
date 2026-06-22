export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: false,  // ← ajoute ça
  devtools: { enabled: false },  // ← désactive en prod

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'AutoMarket CI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plateforme de vente et location de véhicules en Côte d\'Ivoire' }
      ]
    }
  }
})