<template>
    <v-app>
        <v-main>

            <!-- ナビゲーション -->
            <nav>
                <router-link to="/">ホーム</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/page-layout">PageLayout</router-link>
            </nav>

            <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
            <NuxtPage />

        </v-main>
    </v-app>
</template>

<style>

    @import './styles/warabenture.css';

</style>
