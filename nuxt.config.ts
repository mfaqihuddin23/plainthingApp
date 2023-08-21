// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  app:{
    head:{
      script:[
        {
          src: '_nuxt/assets/js/compo.js',
          body: true
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})