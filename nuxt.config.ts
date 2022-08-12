import Icons from "unplugin-icons/vite";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: [["unplugin-icons/nuxt", {}]],
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
