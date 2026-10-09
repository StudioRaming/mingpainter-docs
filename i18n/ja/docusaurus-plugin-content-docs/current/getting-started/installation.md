---
id: installation
title: インストール
sidebar_label: インストール
sidebar_position: 1
---

# インストール

**この文書を読むと** MingPainter を Unity プロジェクトに入れ、実行環境を整え、必要なときに削除する方法がわかります。

## インストール方法

**2 つの方法**があります。どちらの場合も MingPainter のパッケージをプロジェクトに追加します。クローズドベータ（0.1.0-beta.1）は unitypackage のみでお渡しします。

1. **unitypackage**: パッケージファイルを Unity エディターの Project ウィンドウにドラッグして入れます。
2. **VPM**: VCC または VPM リポジトリから追加します。正式版から提供し、リポジトリの URL はその時にこの文書に記載します。

パッケージファイル名は `com.studioraming.mingpainter-<バージョン>.unitypackage` の形式です。この文書はバージョン 0.1.0-beta.1 を基準にしています。

![パッケージが追加された Project ウィンドウ](/img/captures/install-project-window.png)

## 初回起動

このバージョンにはオンボーディングウィンドウがありません。次の順序で始めてください。

1. アバターのプレハブまたはマテリアルを選びます。入り口は [描画を始める入り口](/getting-started/entry-points) にあります。
2. 描画ウィンドウが開いたら、ツールバーで **ペン** を選びます。
3. Scene ビューでドラッグして描きます。保存は `Ctrl+S` です。

![描画ウィンドウを初めて開いた画面](/img/captures/first-run-paint-window.png)

## サポートするバージョンとパイプライン {#지원-버전과-파이프라인}

| 項目 | 内容 |
|---|---|
| Unity バージョン | 2019.4.31f1 ～ Unity 6 LTS |
| OS | Windows |
| レンダーパイプライン | Built-in（BRP）、URP |
| 非対応 | HDRP、macOS |

## 削除

1. プロジェクトの `Assets/StudioRaming/MingPainter` フォルダーを削除します。
2. プロジェクトの `Library/StudioRaming/MingPainter/` フォルダーは Unity が再び作ります。復元フォルダーに保存されていない作業が残っている場合は、削除の前に保存してください。→ [保存と復元](/guides/save-recover)
3. ユーザーデータはプロジェクトの外、`%APPDATA%\StudioRaming\MingPainter` に残ります。パッケージを削除しても、このフォルダーは自動では削除されません。ブラシライブラリ、プロファイル、グラデーション一覧がここにあります。
