// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", ["@vite-pwa/nuxt", {
    manifest: {
      name: "My Nuxt App",
      short_name: "My Nuxt App",
      description: "My Nuxt App description",
      theme_color: "#ffffff",
      lang: "en",
    },
  }], "@vite-pwa/nuxt"],
})