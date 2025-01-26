// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: ['@pinia/nuxt'],
    plugins: [
    '~/plugins/dayjs.js'
  ],
   css: [
    '@/styles/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/_global.scss";`
        }
      }
    },
  }
})
