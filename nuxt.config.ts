// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ravi+Prakash&display=swap'
        },
        {
          rel: 'stylesheet',
          href: '/style.css' // Mengakses file CSS yang ada di dalam folder static
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Menambahkan meta tag untuk viewport
        { charset: 'UTF-8' } // Menambahkan charset untuk dukungan karakter global
      ]
    }
  }
})
