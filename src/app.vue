<!--
    Nuxt ウェブ・アプリケーションでは：
        src/app.vue がルートコンポーネントです。
        ここで、アプリ全体のレイアウトを定義します。
        例えば、ヘッダーやフッター、サイドバーなど、全ページに共通する部分を配置します。

    Tauri デスクトップ・アプリケーションでは：
        src/router/index.ts で src/app.vue をルートコンポーネントとして指定しています。
-->

<template>
    <v-app>
        <v-app-bar app fixed density="compact">
            <!--
                <img
                    src="@/assets/img/reference/application/202509__warabenture__12-1833-logo-since20220507.png"
                    class="ml-2"
                    style="
                        width: 32px;
                        height: 32px;
                    "
                />
            -->
            <v-toolbar-title style="display: inline;">ウェブアプリ</v-toolbar-title>
        </v-app-bar>

        <!--
            `id="top"` - #top を使って画面上部に飛ぶリンクを作るのに使う。
        -->
        <v-main id="top">

            <!-- Nuxt + Vue ウェブアプリ用：
                <v-container> は：
                    スマホでのレイアウトの崩れを防止します。
                    ただし、どんなに画面の横幅が広くても、コンテンツはセンタリングされてしまうという欠点はあります
                <NuxtPage> は：
                    この部分に、pages フォルダーの中にある Vue コンポーネント（.vue ファイル）がレンダリングされます。
            -->
            <NuxtLayout>
                <v-container>
                    <NuxtPage />
                </v-container>
            </NuxtLayout>

            <!-- Tauri + Vue デスクトップアプリ用：
                <router-view> は：
                    Nuxt の <NuxtPage> に相当し、この部分にコンポーネントがレンダリングされます。

            <router-view />
            -->

        </v-main>
    </v-app>
</template>

<style>
    @import '@/styles/application.css';
    @import '@/styles/talk-scene.css';
    @import '@/styles/vuetify-bug-fix.css';
</style>
