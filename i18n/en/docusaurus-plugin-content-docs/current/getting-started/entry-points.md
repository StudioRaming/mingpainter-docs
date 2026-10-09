---
id: entry-points
title: Ways to start painting
sidebar_label: Ways to start
sidebar_position: 2
---

# Ways to start painting

**After reading this page** you will know where you can start painting, and what changes depending on the shader.

You can start painting in **three places**.

| Entry | Where | Target | Shader |
|---|---|---|---|
| 1. Header menu | `CONTEXT/Material` in the material Inspector header → `Paint with MingPainter...` | The slot you pick in the slot picker | Any material with a shader |
| 2. Scene right-click | Right-click an object with a renderer in the Hierarchy → `GameObject/StudioRaming/Paint with MingPainter` | The renderer material of the selected object | Any shader |
| 3. Project right-click | Right-click a material, texture, prefab, or `.mpd` in the Project window → `Assets/StudioRaming/Paint with MingPainter` | The selected asset | Any shader |

:::note[Menu strings stay in English]
`Paint with MingPainter` and the `StudioRaming/` path are fixed in English. The menu names stay the same when you change the language.
:::

## Slot picker in the header menu

If a material has more than one texture slot, the slot picker opens. Pick the one slot you want to paint. Slot names and channel groups are read from the shader profile.

## Shader profiles

These are the shader profiles MingPainter knows built in.

| Profile id | Shader name pattern | Custom editor |
|---|---|---|
| `standard` | `Standard`, `Standard (Specular setup)` | `StandardShaderGUI` |
| `urp-lit` | `Universal Render Pipeline/Lit` | `UnityEditor.Rendering.Universal.ShaderGUI.LitShader` |
| `liltoon` | `lilToon`, `Hidden/lilToon*`, `_lil/lilToon*` | `lilToon.lilToonInspector` |
| `mingtoon` | `StudioRaming/MingToon/*` | `StudioRaming.MingToon.Editor.MingToonShaderGUI` |
| `nilotoon-character` | `Universal Render Pipeline/NiloToon/NiloToon_Character*` | `LWGUI.LWGUI` |

## Next steps

- For how to paint, see [Painting](/guides/painting).
- For how to save your painted result, see [Save and recover](/guides/save-recover).
