# 始め方２：　さくらのＶＰＳサーバーを借りる方法

## ローカルPCの公開鍵を作る：

```powershell
ssh-keygen -t rsa -b 4096 -C "muzudho@warabenture-2025"
    Generating public/private rsa key pair.

Enter file in which to save the key (C:\Users\muzud/.ssh/id_rsa):
```

エンター・キーを押下。  

```
📁 `C:\Users\muzud/.ssh/`
    📄 id_rsa
    📄 id_rsa.pub   🌟公開鍵はこっち。
```

これでローカルPCの公開鍵はできた。  


## さくらのVPSサーバーを借りて、そこへOSをインストールする：

* OSインストール方法： 標準OS
* OS: Ubuntu
* バージョン： `24.04 amd64`
* サーバーの管理ユーザー情報
    * 管理ユーザー名： `ubuntu`
    * 管理ユーザーのパスワード： `自分で入力したパスワードを使う`
    * SSHキー登録： `追加済みの公開鍵を使ってインストールする`
    * サーバーにインストールしたい公開鍵： 適切に選ぶ。
    * ［パスワードを利用したログインを許可する］にチェック。


## さくらVPSにログインしたい：  

さくらインターネットにログイン。  
VPSを選択。
［SSHキー管理］メニューをクリック　＞　［SSHキー追加］ボタン押下。
名前と、公開鍵の入力を求められる。  

名前を `Muzudho's White PC` とか入れる。  
公開鍵を入れる。


## Visual Studio Code を、SSH 接続できるように設定したい：

Microsoftの［Remote - SSH］エクステンションをインストールする。  

Visual Studio Code で [F1] キーを押下。（コマンドパレットが出る）  
`Remote-SSH: Open SSH Configuration File` を検索。  
`C:Users/Muzud/.ssh/config` を選択、無ければ作成。  

📄 `C:Users/Muzud/.ssh/config`:  

```conf
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host alias
    HostName hostname
    User user
```

以下のように変更。

```conf
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host sakura-vps
    HostName ＜IPアドレスを入れる＞
    User ubuntu
    IdentityFile ~/.ssh/id_rsa
    Port 22
```

VSCode のサイドバーの［Remote Explorer］から、［SSH Targets］＞［sakura-vps］にマウスカーソルを合わせ、［Connect in New Window］アイコンをクリック。  
（Ubuntu 24.02を入れたはずだから、［Linux］を選択）  
初回は［Continue］を選択。  
ルート権限を持ったユーザー（ubuntu）のパスワードが求められるので入れる。  

`/home/ubuntu` フォルダーを開けてみる。  


## VNCコンソールからも入れる。  

ユーザー名： ubuntu
パスワード： ワラベンチャーメインのパスワード。


### Ubuntu の状態を確認：

```bash
sudo apt update

sudo systemctl status ssh
    動いてそう。

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    🌟 ubuntuユーザーのパスワード入力

sudo apt install -y nodejs

node -v
    v18.20.8

npm -v
    10.8.2

git --version
    git version 2.43.0
```
