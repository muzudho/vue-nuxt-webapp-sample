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

## [2025-08-19_Tue]

なんかバージョンが古いみたいなんでアップデートしたい。  

```shell
pnpm info @typescript-eslint/typescript-estree
```

nuxt.config.ts で、public フォルダーの相対パスが間違っていたので修正：  

```
✖ ../public
○ ./public
```

👆 これは正しかったのを間違って変えているのでは？（[2025-08-31_Sun]）  


## [2025-08-31_Sun]

`[Vue warn]: Hydration node mismatch:` みたいなエラーがでたら、 `pnpm build` し直した方がいいか？ --> 意味なかった。  
HTML のソースが更新されていないのは分かる。  
