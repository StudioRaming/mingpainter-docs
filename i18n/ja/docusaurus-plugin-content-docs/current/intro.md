---
id: intro
title: MingPainter の紹介
sidebar_label: 紹介
slug: /
---

# MingPainter

**Unity エディター内で 3D モデルのテクスチャに直接描画するツール**です。

モデルの上にそのまま描き、テクスチャのスロットを離れずにレイヤーとマスクで仕上げられます。描画ウィンドウは Scene ビューと UV キャンバスの 2 か所で同じツールを使います。

## できること

- **モデルに直接描く**: ペン、筆、消しゴム、塗りつぶし、色混ぜで、Scene ビューのモデル表面に直接描けます。→ [描画](/guides/painting)
- **レイヤーで重ねる**: 合成モード、マスク、調整レイヤー、レイヤーエフェクト、フィルターを使えます。→ [レイヤー](/guides/layers)
- **選択と変形**: 選択範囲で描く場所を制限し、浮いた絵として移動、拡大、回転できます。→ [選択](/guides/selection)
- **PSD の往復**: PSD ファイルをレイヤーごと開き、作業結果を PSD として書き出せます。→ [PSD](/guides/psd)
- **2D キャンバス**: 3D モデルなしで白紙のキャンバスに描き、スタンプとして登録するかモデルに貼れます。→ [2D キャンバス](/guides/canvas-2d)
- **3D 作業**: 表示範囲（非表示）、ミラー詳細、ウェイト選択、AO ベイク、凹凸、複数のマテリアルをセットで扱えます。→ [3D 作業](/guides/3d)

## 対応環境

| 項目 | 対応 |
|---|---|
| Unity | 2019.4.31f1 ～ Unity 6 LTS |
| OS | Windows |
| レンダーパイプライン | Built-in（BRP）、URP |
| 非対応 | HDRP、macOS |

詳しいインストール手順は [インストール](/getting-started/installation) にあります。

## はじめての方へ

[インストール](/getting-started/installation) → [描画を始める入り口](/getting-started/entry-points) → [描画](/guides/painting)

## どこから読むか

| 状況 | 文書 |
|---|---|
| 初めてインストールする | [インストール](/getting-started/installation) |
| モデルのテクスチャを開いて描き始める | [描画を始める入り口](/getting-started/entry-points) |
| レイヤーとマスクを使う | [レイヤー](/guides/layers) |
| 保存と復元が知りたい | [保存と復元](/guides/save-recover) |
| ショートカットを探す | [ショートカット](/reference/shortcuts) |
| 設定項目を探す | [設定](/reference/settings) |
| 何かがおかしい | [トラブルシューティング](/troubleshooting) |

## 文書の構成

| 分野 | 文書 |
|---|---|
| はじめに | [インストール](/getting-started/installation) · [入り口](/getting-started/entry-points) |
| 描画とレイヤー | [描画](/guides/painting) · [レイヤー](/guides/layers) |
| 選択と変形 | [選択](/guides/selection) · [塗りつぶし・グラデーション・図形](/guides/fill-gradient-shape) · [変形・テキスト・定規・スタンプ](/guides/transform-text) |
| 3D 作業 | [3D 作業](/guides/3d) |
| キャンバスとファイル | [2D キャンバス](/guides/canvas-2d) · [PSD](/guides/psd) · [読み込み](/guides/import) · [保存と復元](/guides/save-recover) |
| リファレンス | [設定](/reference/settings) · [ショートカット](/reference/shortcuts) · [サブツール](/reference/subtools) |
| ヘルプ | [トラブルシューティング](/troubleshooting) · [よくある質問](/faq) · [パッチノート](/changelog/0.1.0) |

## お問い合わせ

不具合や質問は `studioraming@gmail.com` までお送りください。

報告していただく際は、以下の内容も一緒に書いていただくと再現が早くなります。

1. Unity のバージョンとレンダーパイプライン（BRP / URP）
2. MingPainter のバージョン（0.1.0）
3. Console のログ全文
4. 再現手順
