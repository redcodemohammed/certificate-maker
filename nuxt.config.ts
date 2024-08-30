// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "nuxt-typed-router",
  ],
  css: [
    "assets/css/fonts.css",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  i18n: {
    langDir: "locales",
    locales: [
      {
        code: "ar",
        language: "ar-IQ",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
      },
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
    ],
    strategy: "no_prefix",
    types: "composition",
    defaultLocale: "ar",
    defaultDirection: "rtl",
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
  zodI18n: {
    useModuleLocale: false,
  },
  eslint: {
    config: {
      stylistic: {
        blockSpacing: true,
        quotes: "double",
        semi: true,
        arrowParens: true,
      },
    },
  },
  fonts: {},
});
