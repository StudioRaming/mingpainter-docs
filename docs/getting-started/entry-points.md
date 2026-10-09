---
id: entry-points
title: 칠하기를 시작하는 진입 방법
sidebar_label: 진입 방법
sidebar_position: 2
---

# 칠하기를 시작하는 진입 방법

**이 문서를 읽으면** 어디에서 칠하기를 시작할 수 있는지, 셰이더에 따라 무엇이 달라지는지 알 수 있습니다.

칠하기는 **세 곳**에서 시작합니다.

| 진입 | 어디서 | 대상 | 셰이더 |
|---|---|---|---|
| 1. 헤더 메뉴 | 재질 인스펙터 헤더의 `CONTEXT/Material` → `Paint with MingPainter...` | 칸 선택 창에서 고른 칸 | 셰이더가 있는 모든 재질 |
| 2. Scene 우클릭 | Hierarchy에서 렌더러가 있는 오브젝트를 우클릭 → `GameObject/StudioRaming/Paint with MingPainter` | 선택한 오브젝트의 렌더러 재질 | 모든 셰이더 |
| 3. Project 우클릭 | Project 창에서 재질, 텍스처, 프리팹 또는 `.mpd`를 우클릭 → `Assets/StudioRaming/Paint with MingPainter` | 선택한 에셋 | 모든 셰이더 |

:::note[메뉴 문자열은 영어로 고정됩니다]
`Paint with MingPainter`와 `StudioRaming/` 경로는 영어로 고정되어 있습니다. 언어를 바꿔도 메뉴 이름은 같습니다.
:::

## 헤더 메뉴의 칸 선택 창

재질에 텍스처 칸이 여러 개면 칸 선택 창이 뜹니다. 칠할 칸 하나를 고르세요. 칸 이름과 채널 묶음은 셰이더 프로필에서 읽습니다.

## 셰이더 프로필

MingPainter가 내장으로 알고 있는 셰이더 프로필은 아래와 같습니다.

| 프로필 id | 셰이더 이름 패턴 | 커스텀 에디터 |
|---|---|---|
| `standard` | `Standard`, `Standard (Specular setup)` | `StandardShaderGUI` |
| `urp-lit` | `Universal Render Pipeline/Lit` | `UnityEditor.Rendering.Universal.ShaderGUI.LitShader` |
| `liltoon` | `lilToon`, `Hidden/lilToon*`, `_lil/lilToon*` | `lilToon.lilToonInspector` |
| `mingtoon` | `StudioRaming/MingToon/*` | `StudioRaming.MingToon.Editor.MingToonShaderGUI` |
| `nilotoon-character` | `Universal Render Pipeline/NiloToon/NiloToon_Character*` | `LWGUI.LWGUI` |
| `nilotoon-environment` | `Universal Render Pipeline/NiloToon/NiloToon_Environment` | `UnityEditor.Rendering.Universal.ShaderGUI.NiloToonEnvironmentShaderGUI` |
| `uts` | `Toon`, `Toon(Tessellation)` | `UnityEditor.Rendering.Toon.UTS3GUI` |

## 다음 단계

- 칠하는 법은 [칠하기](/guides/painting)를 봅니다.
- 칠한 결과를 저장하는 법은 [저장과 복구](/guides/save-recover)를 봅니다.
