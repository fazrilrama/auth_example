// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { dir: "ltr", lang: "en" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Test Login"
        },
        { name: "author", content: "Themesbrand" }
      ],
      link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }]
    }
  },
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  eslint: {
    lintOnStart: false
  },
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]]
  },

  css: [
    "bootstrap-vue-next/dist/bootstrap-vue-next.css",
    "~/assets/scss/app.scss",
    "simplebar/dist/simplebar.css"
  ],
  alias: {
    assets: "/assets",
    public: "/public"
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700],
      "Open+Sans": [300, 400, 500, 600, 700],
      Nunito: [300, 400, 500, 600, 700],
      Karla: [300, 400, 500, 600, 700],
      Gantari: [300, 400, 500, 600, 700]
    },
    display: "swap"
  },
  runtimeConfig: {
    public: {
      auth: "fakebackend"
    }
  },
  compatibilityDate: '2025-05-08'
});
