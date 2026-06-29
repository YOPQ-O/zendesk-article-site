# Zendesk AI Agent テストサイト

Zendesk AI Agent Advanced Web Crawler用のテスト記事サイトです。

## 📚 含まれるページ

- `article.html` - 製品サポートガイド（FAQ、トラブルシューティング、使い方）
- `sample.html` - シンプルなサンプルページ

## 🚀 ローカルでの起動

```bash
npm install
npm start
```

サーバーが起動したら:
- http://localhost:3000/article.html
- http://localhost:3000/sample.html

## 🌐 デプロイ方法（Render.com）

### 1. GitHubリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名: `zendesk-article-site`
3. Publicを選択
4. "Create repository"をクリック

### 2. コードをプッシュ

```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/zendesk-article-site.git
git push -u origin main
```

### 3. Render.comでデプロイ

1. https://render.com にログイン
2. **New +** → **Web Service**
3. GitHubリポジトリを接続
4. 設定:
   - **Name**: `zendesk-article-site`
   - **Region**: `Singapore (Southeast Asia)`
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. **Create Web Service**をクリック

### 4. 公開URL

デプロイ完了後、以下のようなURLでアクセスできます:

```
https://zendesk-article-site-xxxx.onrender.com/article.html
```

## 🤖 Zendesk AI Agentでの使用

1. Zendesk管理画面 → **AI Agents** → **Advanced Web Crawler**
2. 公開URLを追加: `https://your-app.onrender.com/article.html`
3. クロール開始

AI Agentが記事内容を解析し、自動的にナレッジベース化します。

## 📄 記事ページの構造

- セマンティックHTML（article, header, nav, h2, h3）
- メタデータ（title, description）
- 目次ナビゲーション
- FAQ 8項目
- トラブルシューティングガイド
- インストール手順
- エラーコード一覧

## ⚠️ 注意事項

Render.com無料プランでは:
- 15分間アクセスがないとスリープ
- 次回アクセス時に起動（30-60秒かかる）
- 月750時間まで無料
