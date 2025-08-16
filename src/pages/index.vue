<template>
    <!-- ホームに閉じるボタンはありません。 -->

    <section class="sec-1">
        先頭ページだぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
    </section>

    <h2>インデックスの章だぜ！</h2>
    <section class="sec-2">
        ウェブ・アプリケーションのホームだぜ（＾▽＾）！<br/>
    </section>

    <h3>このホームページの内容の気分的な割合</h3>
    <section class="sec-3">
        以下の円グラフをクリックするとそのページへ飛べるぜ（＾▽＾）！<br/>
	    <canvas id="pieChart" class="pieChartStyle"></canvas>
    </section>

    <br/>
    <section class="sec-1">
        またのお越しをお待ちしておりますだぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
    </section>

    <!-- ホームに閉じるボタンはありません。 -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted } from 'vue';
    import { Chart } from 'chart.js/auto';
    import { useRouter } from 'vue-router';


    // ##############
    // # 共有データ #
    // ##############

    const router = useRouter();

    // 円グラフのための、SPA用のルートパス
    const routes = [
        "/",                            // ホームのURL
        "/making",                      // メイキングのURL
        "/minigames",                   // ミニゲーム
        "/about",                       // ［このサイトについて］のURL
        "/welcome-to-tauri-and-view"    // Tauri のウェルカムページ
    ];

    let chart: Chart | null = null;


    // ############
    // # 開始処理 #
    // ############

    onMounted(() => {
        initChart();
    });

    onUnmounted(() => {
        destroyChart(); // チャートの破棄処理
    });

    function initChart() {
        //const baseUrl = window.location.origin;
        //alert(`baseUrl=${baseUrl}`);
        const ctx : HTMLCanvasElement = document.getElementById('pieChart') as HTMLCanvasElement;

        if (ctx == null){
            return;
        }

        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['ホーム', 'メイキング', 'ミニゲーム', 'このサイトについて', 'ページ無し'],
                datasets: [{
                    data: [40, 40, 15, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(180, 80, 206, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(180, 80, 206, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {   // 凡例
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'このホームページの内容の気分的な割合'
                    }
                },
                onClick: (_e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        // Vue Routerでページ遷移
                        const path = routes[index];
                        router.push(path);
                    }
                }
            }
        });
    }

    function destroyChart() : void {
        if (chart) {
            chart.destroy();
        }
    }

</script>

<style scoped>
    canvas.pieChartStyle {
        min-width: 400px;
        min-height: 400px;
        width: 400px;
        height: 400px;
        margin: 0 auto;
    }
</style>
