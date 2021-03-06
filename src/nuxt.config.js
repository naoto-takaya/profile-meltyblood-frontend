const title = "メルブラTL自己紹介カードメーカー"
const description = 'メルブラTLであなただけの自己紹介カードを作成してSNSでアピールできます。\
同じプラットフォームやプレイスタイルの近い相手を見つけて交流しましょう。'
const ogURL = "https://profile.meltyblood-typelumina-fan.com"
const ogImage = "https://file.meltyblood-typelumina-fan.com/site_image/ogp.jpeg"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: ogURL },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/data.js', ssr: true },
    { src: '@/plugins/axios.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/google-gtag',
  ],
  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700']
    }
  },
  'google-gtag': {
    id: 'G-F2PPS3JJGC',
    debug: false,
  },
  // googleAnalytics: {
  //   id: 'G-F2PPS3JJGC',
  //   debug: {
  //     enabled: false,
  //     sendHitTask: false
  //   }
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:80',
    browserBaseURL: 'http://localhost:80'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    siteURL: process.env.SITE_URL,
    storageURL: process.env.STORAGE_URL,
  },
}
