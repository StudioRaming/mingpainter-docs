---
id: entry-points
title: 描画を始める入り口
sidebar_label: 入り口
sidebar_position: 2
---

# 描画を始める入り口

**この文書を読むと** どこから描画を始められるか、シェーダーによって何が変わるかがわかります。

描画は **3 か所**から始められます。

| 入り口 | どこから | 対象 | シェーダー |
|---|---|---|---|
| 1. ヘッダーメニュー | マテリアルのインスペクターのヘッダーにある `CONTEXT/Material` → `Paint with MingPainter...` | スロット選択ウィンドウで選んだスロット | シェーダーがあるすべてのマテリアル |
| 2. Scene の右クリック | Hierarchy でレンダラーのあるオブジェクトを右クリック → `GameObject/StudioRaming/Paint with MingPainter` | 選んだオブジェクトのレンダラーのマテリアル | すべてのシェーダー |
| 3. Project の右クリック | Project ウィンドウでマテリアル、テクスチャ、プレハブ、または `.mpd` を右クリック → `Assets/StudioRaming/Paint with MingPainter` | 選んだアセット | すべてのシェーダー |

:::note[メニューの文字列は英語で固定されます]
`Paint with MingPainter` と `StudioRaming/` のパスは英語で固定されています。言語を変えてもメニュー名は同じです。
:::

## ヘッダーメニューのスロット選択ウィンドウ

マテリアルにテクスチャのスロットが複数あると、スロット選択ウィンドウが開きます。描くスロットを 1 つ選んでください。スロット名とチャンネルの組み合わせは、シェーダープロファイルから読み取ります。

## シェーダープロファイル

MingPainter が内蔵で認識しているシェーダープロファイルは次のとおりです。

| プロファイル id | シェーダー名のパターン | カスタムエディター |
|---|---|---|
| `standard` | `Standard`、`Standard (Specular setup)` | `StandardShaderGUI` |
| `urp-lit` | `Universal Render Pipeline/Lit` | `UnityEditor.Rendering.Universal.ShaderGUI.LitShader` |
| `liltoon` | `lilToon`、`Hidden/lilToon*`、`_lil/lilToon*` | `lilToon.lilToonInspector` |
| `mingtoon` | `StudioRaming/MingToon/*` | `StudioRaming.MingToon.Editor.MingToonShaderGUI` |
| `nilotoon-character` | `Universal Render Pipeline/NiloToon/NiloToon_Character*` | `LWGUI.LWGUI` |
| `nilotoon-environment` | `Universal Render Pipeline/NiloToon/NiloToon_Environment` | `UnityEditor.Rendering.Universal.ShaderGUI.NiloToonEnvironmentShaderGUI` |
| `uts` | `Toon`、`Toon(Tessellation)` | `UnityEditor.Rendering.Toon.UTS3GUI` |

## 次のステップ

- 描き方は [描画](/guides/painting) を参照してください。
- 描いた結果の保存方法は [保存と復元](/guides/save-recover) を参照してください。
