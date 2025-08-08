<template>
    <v-app>
        <v-main>

            <NuxtLayout>
                <!-- ナビゲーション -->
                <nav>
                    <!--
                        pages/ フォルダー下のページのファイル名は、
                        Nuxt 公式では kebab-case、
                            📖 https://nuxt.com/docs/3.x/guide/directory-structure/pages
                        Tauri では PascalCase が習慣的に使われています。異なるので注意。
                    -->
                    <router-link to="/">ホーム</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/page-layout">PageLayout</router-link>
                </nav>

                <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
                <NuxtPage />
            </NuxtLayout>

        </v-main>
    </v-app>
</template>

<style>

    @import './styles/warabenture.css';

</style>
