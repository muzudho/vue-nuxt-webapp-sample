# 始め方５： Vuetify3 を使ってみる

📄 `/app/app.vue` ファイルを編集。  

変更前：  

```vue
<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
    </div>
</template>
```

変更後：  


```vue
<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="8">
                        Vuetify3と連携
                    </v-col>
                    <v-col cols="2">
                        テスト１
                    </v-col>
                    <v-col cols="2">
                        <v-btn>あいうボタン</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
```
