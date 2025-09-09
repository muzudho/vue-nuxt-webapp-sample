<template>
    <v-app>
        <v-main>
            <NuxtLayout>
                <!--
                    v-container は、レイアウトの崩れを防止します。
                    どんなに画面の横幅が広くても、コンテンツはセンタリングされてしまうという欠点はあります
                -->
                <v-container>

                    <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
                    <NuxtPage />

                </v-container>
            </NuxtLayout>
        </v-main>
    </v-app>
</template>

<style>
    @import '@/styles/talk-scene.css';
    @import '@/styles/warabenture.css';
</style>
