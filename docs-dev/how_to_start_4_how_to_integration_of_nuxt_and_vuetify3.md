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

以下のコマンドを打鍵。  

```shell
pnpm install
```

```shell
pnpm run build
```

```shell
pnpm run dev
```
