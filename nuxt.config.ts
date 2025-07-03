// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  css: ["~/assets/css/main.css"],
});
