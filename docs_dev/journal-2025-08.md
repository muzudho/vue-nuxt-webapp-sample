# 作業日誌 2025-08

## [2025-08-09_Sat]

ルートディレクトリーにフォルダーが増えてきたので、  
📁 `src` フォルダーを作って、その中にフロントエンドのファイルを移動したい。  

📄 `nuxt.config.ts` ファイルを編集（抜粋）：  

```ts
export default defineNuxtConfig({
    srcDir: 'src/', // srcフォルダをルートに設定
    dir: {  // マッピングか？
        assets: 'assets', // src/assets
        //components: 'components', // src/components
        //composables: 'composables', // src/composables
        pages: 'pages', // src/pages
        plugins: 'plugins', // src/plugins
        public: '../public', // /public
    },
})
```
