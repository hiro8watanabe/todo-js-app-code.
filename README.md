# gulp_baseテンプレート

gulp で Dart Sass & FLOCSS を使用したHTMLコーディングのBASEテンプレート。

Git のリポジトリをコピー後、ターミナルで以下のコマンドを実行。

`git clone https://github.com/hiro8watanabe/gulp_base.git`

`npm install`

`npx gulp`



# ディレクトリ構成

```
docs
 │ index.html
 │
 └─asset
    ├─css
    ├─img
    └─js
src
 │ index.html
 │
 └─asset
    ├─img
    ├─js
    └─sass
       │ style.scss
       │
       ├─foundation
       │   _base.scss
       │   _reset.scss
       │   _system.scss
       │
       ├─layout
       │   _footer.scss
       │   _header.scss
       │
       └─object
          ├─component
          │   _loading.scss
          │   _section.scss
          │
          ├─project
          │   _contact.scss
          │
          └─utility
              _display.scss
```

`src`内でコーディングして`docs`にコンパイルしたファイルを出力させる構成にしています。


## gulpの機能

gulpfileに書いている機能としては大体以下の5つの機能。

- Dart Sass のコンパイル
- CSS の縮小化
- JavaScript の縮小化
- ローカルサーバーの立ち上げ
- 作業ファイルの監視（自動更新）


## ファイル構成

### src/asset/sass

Sass のコーディングファイル。CSS 設計は FLOCSS を採用しています。

Sass 自体は Dart Sass でコーディングして、sass フォルダ直下の style.scss ですべての Sass ファイルを`@use`しています。

Sass の構成一覧は以下のような感じです。

```
sass
│ style.scss
│
├─foundation
│   _base.scss
│   _reset.scss
│   _system.scss
│
├─layout
│   _footer.scss
│   _header.scss
│
└─object
    ├─component
    │   _loading.scss
    │   _section.scss
    │
    ├─project
    │   _contact.scss
    │
    └─utility
        _display.scss
```


# 使い方

## 前提条件

前提として node.js と npm がインストールされているものとします。

## 実際に使う流れ

前提条件が整っていれば、以下のような流れで進めます。

1. コーディングしたいファイルに `cd` コマンドで移動。
2. `git clone https://github.com/hiro8watanabe/gulp_base.git` を実行
3. `npm install` を実行
4. `npx gulp` を実行
5. `src` 内でコーディング
6. `docs` 内のファイルを納品・デプロイ

まずは、gitをcloneします。

```
git clone https://github.com/hiro8watanabe/gulp_base.git
``` 

ファイルが生成されるので、`npm install` で `node_module` など必要なファイルをインストールしましょう。

```
npm install
``` 

そのまま、 `npx gulp` を実行すれば、Dart Sassがコンパイルされ「コンパイルが成功されました」と表記されて、`http://localhost:3000/`が自動的にローカルサーバーが立ち上がるかと思います。

```
npx gulp
``` 

そのままコーディングしたら随時反映されるようになるので、`src` でコーディングしていきましょう。

コーディングが終われば、`docs` ファイルに必要なHTML,CSS,JavaScript,画像ファイルが出来上がっているかと思うので、こちらを納品、もしくはデプロイしていけばOKです。

GitHub Pagesの場合、デプロイする場所を `docs` を選択すればそのまま公開できます。

![docsを選択](https://storage.googleapis.com/zenn-user-upload/4f5de145a8c5-20211211.png)
