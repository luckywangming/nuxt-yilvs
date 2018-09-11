module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yilvs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** 多次调用确保编译一次啊
  */
  vendor: [
    'axios',
    'element-ui'
  ],
  /*
  ** Customize the progress bar color
  */
  plugins: [
    {
      src: '~plugins/ElementUI'
    }
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/scss/reset.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
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

