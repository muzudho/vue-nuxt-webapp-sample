# Nuxt と Vuetify3 の連携

参考になる記事：📖 [Vue3 + Nuxt3 + Vuetify3 のクイックスタート](https://note.com/doui_lab/n/n37a67a01981a)  


## Nuxt と Vuetify3 を連携させるためのプラグインのインストール

```shell
# 古いバージョンの Vuetify がすでに入っているとき
pnpm remove vuetify

pnpm add vuetify@next sass @mdi/font

pnpm add -D vite-plugin-vuetify
```


## nuxt.config.ts を編集

📄 `nuxt.config.ts` ファイルへの追加部分を抜粋：  

```ts
export default defineNuxtConfig({
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
})
```


## /plugins/vuetify.ts ファイルを作成

📁 `plugins` フォルダーを作成。  
📄 `/plugins/vuetify.ts` ファイルを作成：  

```ts
import { defineNuxtPlugin } from 'nuxt/app'; // ここでインポート
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
    });

    nuxtApp.vueApp.use(vuetify);
});
```

## バージョン調整

📄 `/package.json` ファイルを編集：  

変更箇所を抜粋。  

変更前：  

```json
{
    "dependencies": {
        "vuetify": "3.9.0-beta.1"
    }
}
```

変更後：  

```json
{
    "dependencies": {
        "vuetify": "^3.9.2"
    }
}
```

## tsconfig.json ファイルを変更

変更前：  

```json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "files": [],
  "references": [
    {
      "path": "./.nuxt/tsconfig.app.json"
    },
    {
      "path": "./.nuxt/tsconfig.server.json"
    },
    {
      "path": "./.nuxt/tsconfig.shared.json"
    },
    {
      "path": "./.nuxt/tsconfig.node.json"
    }
  ]
}
```

変更後：  

```json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json"
}
```


## app.vue のディレクトリーを変更

Nuxt3 では、 app.vue はプロジェクトのルートに置く。  

* 📄 `/app/app.vue` を、 📄 `/app.vue` へ移動。  
* 📄 `/app.vue` の内容を、 📄 `/pages/index.vue` へ移動。  

📄 `/app.vue` の内容を、以下のように変更。  

```vue
<template>
    <div>
        <NuxtPage />
    </div>
</template>
```


## 起動

以下のコマンドを打鍵。  

```shell
pnpm install
        # 📁 `/node_modules` フォルダー、📁 `/.nuxt` フォルダーが作成されます。
```

```shell
pnpm run build
```

```shell
pnpm run dev
```

## トラブルシューティング

📁 `/.nuxt` を削除。  

```shell
pnpm dev
```