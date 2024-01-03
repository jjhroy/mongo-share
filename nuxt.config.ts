// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  app: {
    head: {
      title: 'Mongo123',
      meta: [
        { name: 'keywords', content: 'Mongo123,baidu,google,bing' },
        {
          name: 'description',
          content: 'Mongo123是一个简单的提供了信息搜索和网页导航的网站',
        },
        {
          property: 'og:image',
          name: 'main_icon',
          content: 'https://img.amz123.com/static/images/head_logo.jpg',
        },
      ],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
    'nuxt-lodash',
    'nuxt-icon',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
  ],
  devServer: {
    port: 2333,
  },
});
