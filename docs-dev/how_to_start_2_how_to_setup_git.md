# 始め方２：　git の設定

## ローカルPCに向けての操作

カレントディレクトリーの例： 📁 `C:\Users\muzud\OneDrive\ドキュメント\GitHub\vue-nuxt-webapp-sample`  

```shell
git init
```

👆 📁 `.git` フォルダーが作成されます。  

```shell
git add .
```

👆 カレントディレクトリーの全てのディレクトリー、ファイルを管理の対象にします。（.gitignore で設定されているものを除く）  

```shell
git commit -m "Initial commit"
```

👆 ローカル・リポジトリーにコミットします。  


## このプロジェクトを Git Hub にアップロードしたい

Git Hub へ、 `vue-nuxt-webapp-sample` という名前のリポジトリーを、中身空っぽで作成する。  

以下のコマンドを打鍵。  

```shell
git remote add origin https://github.com/muzudho/vue-nuxt-webapp-sample.git
git branch -M main
git push -u origin main
```
