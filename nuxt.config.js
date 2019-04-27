import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'GNSG - Sandro VS Freddie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        content: 'Ein Youtube-Commedy Projekt von Sandro und Freddie.'
      },
      {
        name: 'keywords',
        content:
          'commedy, youtube, sandro, gnsg freddie, witzig, lachen, challange, deutsch, german'
      },

      {
        property: 'og:title',
        content: 'GNSG - Das Commedy Battle zwischen Sandro und Freddie!'
      },
      {
        property: 'og:type',
        content: 'Website'
      },
      {
        property: 'og:url',
        content: 'https://gnsg.yt'
      },
      {
        property: 'og:site_name',
        content: 'GNSG - Sandro VS Freddie'
      }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,700,900|Permanent+Marker'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   , '~/assets/scss/master.scss'
   */
  css: ['~/assets/style/app.styl', '~/assets/scss/master.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  /*
   ** Axios config
   */
  axios: {
    baseURL: '/'
  },

  /*
   ** Proxy config
   */
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
