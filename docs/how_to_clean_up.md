# クリーンアップ

npm, pnpm の両方のバージョンアップ：  

```shell
# Linuxの場合：

sudo npm install -g npm
# ubuntu ユーザーのパスワード入力

sudo npm install -g pnpm
# ubuntu ユーザーのパスワード入力
```

## Node.JS のバージョンを 20 に変更する場合：  

```shell
# nvm のダウンロードとインストール
# Windows の場合、nvm は使わず、ホームページから直接 Node.JS の .msi インストーラーをダウンロードしてインストールする。
# Linux の場合：
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 設定の有効化
source ~/.bashrc

# バージョン確認
nvm --version
        0.40.1
```

```shell
# Node.JS のバージョン確認
node -v
        v18.20.8
        # (Windows 環境) v22.19.0

nvm install 20
        v20.19.4 is already installed.
        Now using node v20.19.4 (npm v10.8.2)

nvm use 20
        Now using node v20.19.4 (npm v10.8.2)

# pnpm の再インストールが必要な場合がある
npm install -g pnpm

pnpm -v
        10.11.0

# node_modules を最新化
pnpm install
```


## キャッシュ・クリアー：  

```shell
pnpm store prune
# （pnpm ではなく npm が悪さをしてるなら） npm cache clean --force
```

削除するフォルダーとファイル：  

```plaintext
# Nuxt の場合：

📁 /
├─ 📁 .nuxt 削除
├─ 📁 .output 削除
├─ 📁 node_modules 削除
└─ 📄 pnpm-lock.yaml 削除
```

## 構築：  

```shell
pnpm install
# （依存関係を満たしていなくても、強制的に構築する場合） pnpm install --force

# ローカルＰＣでの Nuxt のために（サーバーサイドにデプロイする場面では使わない）
pnpm build
```

## （ローカルＰＣでの）実行：  

```shell
# ローカルＰＣ、Nuxt：
pnpm run dev
```
