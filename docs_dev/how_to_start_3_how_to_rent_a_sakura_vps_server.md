# 始め方２：　さくらのＶＰＳサーバーを借りる方法

## ローカルPCの公開鍵を作る：

```powershell
ssh-keygen -t rsa -b 4096 -C "muzudho@＜🌟リポジトリー名＞"
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


### さくらのＶＰＳに、リポジトリーをクローン

さくらのVPSに 📁 `/home/ubuntu/＜🌟リポジトリー名＞` を置きたい。  

```shell
mkdir -p /home/ubuntu/＜🌟リポジトリー名＞
cd /home/ubuntu/＜🌟リポジトリー名＞
git clone https://github.com/muzudho/＜🌟リポジトリー名＞.git .
```

これでクローン完了。  


## さくらのVPSのスケールアップ

Grok に尋ねると、Nuxt + Vue を動かそうと思うと、メモリーは 4GB は欲しいらしい。  
年額 41,400円。月にすると 3,450円。ゲロ高。  

しかし、払わないとウェブ・アプリケーションの練習が進まない。  
払う方向で。  

* 以下の作業をこれから行う：
    * https://manual.sakura.ad.jp/vps/server/disk-expansion/ubuntu-24.04.html

VNCコンソール：

```shell
dpkg -l gdisk
    ※gdiskはインストールされているよう。

sudo gdisk -l /dev/vda
    ※情報が出てくる

lsblk /dev/vda
    ※情報が出てくる

sudo sgdisk -s /dev/vda
    ※なんかソートされる

sudo gdisk -l /dev/vda
    ※ Total free space が増えるはず。

sudo gdisk /dev/vda
    ※ 質問が出てくるので、以下を入力。 n は新しいパーティションを作るという意味。
n
    ※ Partition number はデフォルトのまま使うので、そのままエンター。

    ※ First sector もデフォルトのまま使うので、そのままエンター。

    ※ Last sector もデフォルトのまま使うので、そのままエンター。

    ※ Partition Type もデフォルトの［Linux filesystem］で問題がなければ、そのままエンター。

    ※ 以下のコマンドで、パーティション・テーブルを確認できる。
p
    ※ 問題がなければ、以下のコマンドを打鍵。
w
    ※ 最終確認。ディスクの書き換えが始まる。
y
```

以上はパーティションの作成。以下はファイルシステムの作成。

```shell
ls /dev/vda3
    ※ まだ存在しない場合、以下のコマンドでOSを再起動。
sudo reboot
    ※ 管理者のユーザー名、パスワードを再入力。
ls /dev/vda3
    ※ vda3 がデバイスとして認識されているはず。
sudo mkfs.ext4 /dev/vda3
    ※ フォーマットがされるはず。
sudo mkdir /data
sudo mount /dev/vda3 /data
    ※ /dev/vda3 を /data にマウントした。
mount | grep vda3
    ※ マウントされていることを確認できるはず。
lsblk /dev/vda
    ※ 確認。
id=$(sudo blkid -o value -s UUID /dev/vda3)
echo "UUID=${id} /data  ext4  defaults 0 2" | sudo tee -a /etc/fstab
    ※ OSを再起動してもマウントされるように設定した。
sudo reboot
    ※ サーバーを再起動。
    ※ 管理者のユーザー名、パスワードを再入力。
sudo gdisk -l /dev/vda
    ※ マウントされているか確認する。
```


## さくらのVPSで、Nuxt をビルド：

TODO: 先に pnpm をインストールしておきたかった。  

```shell
cd ＜🌟リポジトリー名＞/
npm install
    ※データの取得に参加するか聞かれるので答える。
npm run generate
```


## Nginx の設定：

```shell
sudo apt install nginx
y
sudo nano /etc/nginx/sites-available/＜🌟リポジトリー名＞
```

📄 `/etc/nginx/sites-available/＜🌟リポジトリー名＞`:  

```
server {
  listen 80;
  server_name ＜🌟IPアドレス＞;
  root /home/ubuntu/＜🌟リポジトリー名＞/dist;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

👆 マウスの右クリックで貼り付けして、[Ctrl]+[O]で保存、エンターで抜けて、[Ctrl]+[X]で閉じる。  

```shell
sudo ln -s /etc/nginx/sites-available/＜🌟リポジトリー名＞ /etc/nginx/sites-enabled/
sudo nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    ※ 設定ファイルの構文テストをした。
sudo systemctl restart nginx
sudo systemctl status nginx
    ※ active(running)になっていることを確認。
sudo chown -R ubuntu:ubuntu /home/ubuntu/＜🌟リポジトリー名＞
sudo chmod -R 755 /home/ubuntu/＜🌟リポジトリー名＞/dist
```

👆 これで設定終わり。  


## /etc/nginx/sites-enabled/default が有効になってるので、それを解除する

```shell
ls -l /etc/nginx/sites-enabled/
    total 0
    lrwxrwxrwx 1 root root 34 May 25 22:00 default -> /etc/nginx/sites-available/default
    lrwxrwxrwx 1 root root 43 May 25 22:03 ＜🌟リポジトリー名＞ -> /etc/nginx/sites-available/＜🌟リポジトリー名＞

# リンクを外す
sudo unlink /etc/nginx/sites-enabled/default
ls -l /etc/nginx/sites-enabled/  # defaultが消えたか確認
    total 0
    lrwxrwxrwx 1 root root 43 May 25 22:03 ＜🌟リポジトリー名＞ -> /etc/nginx/sites-available/＜🌟リポジトリー名＞

sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx  # active (running)
```

```shell
sudo nano /etc/nginx/sites-available/＜🌟リポジトリー名＞
    ※ 更新
    ※ server_name 49.212.140.81 os3-288-33577.vs.sakura.ne.jp;

sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx  # active (running)
```

```shell
# アクセスログを見る
sudo tail -n 20 /var/log/nginx/access.log

sudo netstat -tulnp | grep :80
    sudo: netstat: command not found

sudo ss -tulnp | grep :80
    tcp   LISTEN 0      511          0.0.0.0:80         0.0.0.0:*    users:(("nginx",pid=7314,fd=5),("nginx",pid=7313,fd=5),("nginx",pid=7311,fd=5),("nginx",pid=7310,fd=5),("nginx",pid=6188,fd=5))
```


## VNCコンソール:  

```shell
sudo ufw status
    Status: inactive

# ポート 80 解放
sudo ufw allow 80
    Rules updated
    Rules updated (v6)
sudo ufw status
    Status: inactive
```


## さくらのVPS　＞　パケットフィルター設定

https://manual.sakura.ad.jp/vps/network/packetfilter.html?gad_source=1&gad_campaignid=17299504274&gbraid=0AAAAADrEfxQW-_0gUeYPQ69-ud3u7MNIF&gclid=Cj0KCQjw_8rBBhCFARIsAJrc9yACyz-JYRdAil1EeCjnbbOc71d5PIJuYjIrdU8uGCns3vpeHBOJX6UaAtZyEALw_wcB

```
Sakura VPSコントロールパネルでパケットフィルターを設定：
Sakura VPSのコントロールパネルにログイン。
対象のサーバーを選択し、「グローバルネットワーク」タブをクリック。
「パケットフィルター設定」をクリック。
「パケットフィルターを利用する（推奨）」が選択されてるはず（現在SSHのみ許可の状態）。
「パケットフィルター設定を追加する」をクリック。
フィルターの種類で「Web」を選択（これがポート80/TCPを許可する設定）。
プロトコル：TCP、ポート番号：80 が自動で設定されるはず。確認して「設定を保存する」をクリック。
保存後、設定が反映されるまで数分待つ（即時反映のはずだが、念のため）。
参考：さくらの公式マニュアル（）や設定ガイド（）。
```

これで解決。  


## 開発ローカルPCで、ホームページを更新した。

リモートローカルPCで:  

```shell
cd ~/＜🌟リポジトリー名＞
pwd
    /home/ubuntu/＜🌟リポジトリー名＞

# 未コミットの変更をすべてリセット：
git reset --hard

# 追跡されてないファイルやディレクトリ（例: 新規ファイル）を削除：
git clean -fd

git pull origin main

# 再作成、再起動
npm install  # 依存関係が更新されてる場合に必要
npm run build
#npm run start
npm run generate

sudo nginx -t
sudo systemctl restart nginx
```


## http だけでなく、 https にも対応させるための、SSL証明書取得の手続き

* Let's encrypt の手続きは、 `Certbot` というツールで自動化に対応している。以下の記事を読んで行う。

📖 [Let’s Encryptで無料SSL証明書を取得する](https://savacan.space-i.com/lets-encrypt%E3%81%A7%E7%84%A1%E6%96%99ssl%E8%A8%BC%E6%98%8E%E6%9B%B8%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/)  
