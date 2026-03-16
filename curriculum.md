# Web フロントエンド研修カリキュラム

> 基本方針：**実践（手を動かす）→ 座学（理解・発見）** の順で進める

---

## Phase 1: HTML

### Session 1｜環境を作り、最初のHTMLを表示する

**内容**

実践（先）:
- VS Code をインストールし、作業フォルダを作る
- `index.html` を作り `<h1>Hello</h1>` を書いてブラウザで開く
- 自分が作りたいサイトのコンテンツ・色・フォントをメモに書き出す（企画）

座学（後）:
- フォルダ構成のベストプラクティス
- ファイル名のルール（小文字・スペースなし・半角英数字）
- HTML / CSS / JavaScript の役割分担
- サイト設計で考えること（目的・ターゲット・コンテンツ・配色）

**参考URL**
- [ファイルの扱い - MDN](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [ウェブサイトをどんな見た目にするか - MDN](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)

---

### Session 2｜HTMLの骨格を理解する

**内容**

実践（先）:
- DOCTYPE・html・head・body を意図的に削除して壊してみる
- タブ名・favicon・文字コードを変えて確認
- `<meta name="description">` を書いてページソースで確認
- 外部CSSを link タグでつないでみる（空ファイルでOK）

座学（後）:
- タグ・要素・属性・空要素の違い
- head に書くもの（title / meta / link / script）
- 文字コード（UTF-8）と viewport の意味
- ブラウザのデフォルトスタイル（なぜ何も書いていないのに余白があるか）

**参考URL**
- [HTML を始めよう - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [head とは? HTML のメタデータ - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

---

### Session 3｜テキストを意味のある構造にする

**内容**

実践（先）:
- 素の文章テキストを渡す → タグなしでブラウザ表示させる
- 見出し・段落・リスト・強調を付けて構造化する
- h1 を h2 に変えたとき何が変わるか確認
- `<b>` と `<strong>` の違いを DevTools で確認

座学（後）:
- ブロック要素 vs インライン要素
- セマンティクスとは何か・なぜ重要か
- 見出し階層のルール（h1 は 1 ページ 1 つ）
- スクリーンリーダーとアクセシビリティの入口

**参考URL**
- [HTML テキストの基礎 - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

---

### Session 4｜複数ページをリンクでつなぎ、構造を作る

**内容**

実践（先）:
- `about.html` を作り `index.html` からリンクする
- 相対パス・絶対パス・ルートパスを全部試す
- header / nav / main / footer を使ってレイアウトを組む
- 画像と `alt` テキストを追加する

座学（後）:
- href のパス 3 種（相対・絶対・ルート）の違い
- `target="_blank"` と `rel="noopener"` が必要な理由
- セマンティックレイアウト要素（header / nav / main / article / footer）の役割
- alt 属性の書き方と SEO・アクセシビリティへの影響

**参考URL**
- [ハイパーリンクの作成 - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [文書とウェブサイトの構造 - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

---

### Session 5｜バグを直し、DevToolsを使いこなす

**内容**

実践（先）:
- バグ入りHTML（タグ閉じ忘れ・入れ子ミスなど）を渡して直す
- DevTools の Elements パネルで DOM を確認・編集する
- Console のエラーメッセージを読む
- W3C バリデーターに URL を入力して結果を見る

座学（後）:
- よくある HTML ミス TOP5
- ブラウザの「エラー修復」挙動（なぜ壊れていても表示されるか）
- DevTools: Elements / Console / Network の使い分け
- バリデーターの使い方と限界

**参考URL**
- [HTML のデバッグ - MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)

---

### Session 6｜ウェブの仕組みを体感で理解する

**内容**

実践（先）:
- DevTools の Network タブを開き、ページをリロードする
- HTML ファイル・CSS・画像それぞれのリクエストを確認
- レスポンスコード（200 / 404 / 301）を意図的に出す
- GitHub Pages などでサイトを公開してみる

座学（後）:
- クライアント・サーバー・DNS の関係
- HTTP リクエスト / レスポンスの構造
- パケット・TCP/IP とは何か（概念レベル）
- ブラウザが HTML を表示するまでの流れ（パース → レンダリング）

**参考URL**
- [ウェブのしくみ - MDN](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

---

### HTML フェーズ 総合課題

Session 1 で企画した自分のサイトを、セマンティックな HTML で実装する。

**完了条件**
- 複数ページ構成（最低 2 ページ）
- ナビゲーションでページ間を移動できる
- セマンティック要素（header / nav / main / footer）を使っている
- DevTools でエラーが出ていない
- W3C バリデーターを通過している

---

## Phase 2: CSS

> ※ CSS フェーズの URL が決まり次第追記

---

## Phase 3: JavaScript

> ※ JavaScript フェーズの URL が決まり次第追記
