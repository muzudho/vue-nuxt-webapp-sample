// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        '#public': './public', // public/ フォルダをエイリアス
    },
    build: {
        transpile: ["vuetify"],
    },
    compatibilityDate: '2025-07-15',
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    devtools: { enabled: true },
    dir: {  // マッピングか？
        assets: 'assets', // src/assets
        //components: 'components', // src/components
        //composables: 'composables', // src/composables
        pages: 'pages', // src/pages
        plugins: 'plugins', // src/plugins
        public: '../public', // src から見て ../public
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.VITE_BASE_URL || 'http://localhost:3000/', // デフォルト値として開発環境のURLを設定
        },
    },
    srcDir: 'src/', // srcフォルダをルートに設定
})
