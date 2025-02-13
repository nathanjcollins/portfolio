export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      "JetBrains Mono": true,
    },
    preload: true,
  },

  compatibilityDate: "2025-02-13",
});