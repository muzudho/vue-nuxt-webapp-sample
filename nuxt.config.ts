// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
    srcDir: 'src/', // srcフォルダをルートに設定
    dir: {  // マッピングか？
        assets: 'assets', // src/assets
        //components: 'components', // src/components
        //composables: 'composables', // src/composables
        pages: 'pages', // src/pages
        plugins: 'plugins', // src/plugins
        public: './public', // /public
    },
})
