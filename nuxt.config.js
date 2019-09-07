import posts from './posts'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Generate the blog routes. Passing payload means no AJAX request on initial page load.
   */
  generate: {
    async routes() {
      const results = await posts()

      const routes = results.map((post) => ({
        route: `/blog/${post.slug}/`,
        payload: post
      }))

      routes.push({
        route: '/blog/',
        payload: results.map(({ slug, attributes }) => ({ slug, attributes }))
      })

      return routes
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['~/modules/contently', '@nuxtjs/axios'],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
