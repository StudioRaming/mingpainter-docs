---
id: intro
title: MingPainter 소개
sidebar_label: 소개
slug: /
---

# MingPainter

**Unity 에디터 안에서 3D 모델의 텍스처를 직접 칠하는 도구**입니다.

모델 위에 바로 그리고, 텍스처 칸을 떠나지 않고 레이어와 마스크로 다듬을 수 있습니다. 칠하기 창은 Scene 뷰와 UV 캔버스 두 곳에서 같은 도구를 씁니다.

## 할 수 있는 일

- **모델에 직접 칠하기**: 펜, 붓, 지우개, 채우기, 혼색으로 Scene 뷰의 모델 표면에 바로 칠합니다. → [칠하기](/guides/painting)
- **레이어로 쌓기**: 블렌드 모드, 마스크, 조정 레이어, 레이어 효과, 필터를 씁니다. → [레이어](/guides/layers)
- **선택과 변형**: 선택 영역으로 칠할 곳을 제한하고, 떠 있는 그림으로 옮기거나 늘리고 돌립니다. → [선택](/guides/selection)
- **PSD 왕복**: PSD 파일을 레이어째 열고, 작업 결과를 PSD로 내보냅니다. → [PSD](/guides/psd)
- **2D 캔버스**: 3D 모델 없이 빈 캔버스에 그린 뒤 스탬프로 등록하거나 모델에 붙입니다. → [2D 캔버스](/guides/canvas-2d)

## 지원 환경

| 항목 | 지원 |
|---|---|
| Unity | 2019.4.31f1 ~ Unity 6 LTS |
| 운영체제 | Windows |
| 렌더 파이프라인 | Built-in(BRP), URP |
| 지원하지 않음 | HDRP, macOS |

자세한 설치 절차는 [설치](/getting-started/installation)에 있습니다.

## 처음이라면

[설치](/getting-started/installation) → [칠하기를 시작하는 진입 방법](/getting-started/entry-points) → [칠하기](/guides/painting)

## 어디부터 읽을까

| 상황 | 문서 |
|---|---|
| 처음 설치한다 | [설치](/getting-started/installation) |
| 모델 텍스처를 열고 칠하기 시작한다 | [칠하기를 시작하는 진입 방법](/getting-started/entry-points) |
| 레이어와 마스크를 쓴다 | [레이어](/guides/layers) |
| 저장과 복구가 궁금하다 | [저장과 복구](/guides/save-recover) |
| 단축키를 찾는다 | [단축키](/reference/shortcuts) |
| 설정 항목을 찾는다 | [설정](/reference/settings) |
| 뭔가 이상하다 | [문제 해결](/troubleshooting) |

## 문서 구성

| 영역 | 문서 |
|---|---|
| 시작하기 | [설치](/getting-started/installation) · [진입 방법](/getting-started/entry-points) |
| 칠하기와 레이어 | [칠하기](/guides/painting) · [레이어](/guides/layers) |
| 선택과 변형 | [선택](/guides/selection) · [채우기·그라데이션·도형](/guides/fill-gradient-shape) · [변형·텍스트·자·스탬프](/guides/transform-text) |
| 캔버스와 파일 | [2D 캔버스](/guides/canvas-2d) · [PSD](/guides/psd) · [가져오기](/guides/import) · [저장과 복구](/guides/save-recover) |
| 참조 | [설정](/reference/settings) · [단축키](/reference/shortcuts) · [서브툴](/reference/subtools) |
| 도움 | [문제 해결](/troubleshooting) · [자주 묻는 질문](/faq) · [패치노트](/changelog/0.1.0) |

## 문의

버그나 질문은 `studioraming@gmail.com`으로 보내 주세요.

제보하실 때 아래 내용을 함께 적어 주시면 재현이 빨라집니다.

1. Unity 버전과 렌더 파이프라인 (BRP / URP)
2. MingPainter 버전 (0.1.0)
3. Console 로그 전문
4. 재현 순서
