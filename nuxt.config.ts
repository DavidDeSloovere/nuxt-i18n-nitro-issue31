// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ["en", "fr"],
    defaultLocale: "en",
    experimental: {
      localeDetector: './../server/utils/i18n/localeDetector.ts'
    }
  },
  nitro: {
    vercel: {
      config: {
        crons: [{
          path: '/api/cron',
          schedule: '* * * * *',
        }],
      }
    }
  }
})