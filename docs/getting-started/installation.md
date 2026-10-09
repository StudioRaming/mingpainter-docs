---
id: installation
title: 설치
sidebar_label: 설치
sidebar_position: 1
---

# 설치

**이 문서를 읽으면** MingPainter를 Unity 프로젝트에 넣고, 실행 환경을 맞추고, 필요할 때 지우는 방법을 알 수 있습니다.

## 설치 방법

**두 가지 방법** 중 편한 쪽을 고르세요. 어느 쪽이든 MingPainter 패키지를 프로젝트에 추가합니다.

1. **unitypackage**: 패키지 파일을 Unity 에디터의 Project 창으로 끌어 넣습니다.
2. **VPM**: VCC 또는 VPM 저장소에서 추가합니다. 저장소 주소는 배포 시 이 문서에 적습니다.

패키지 파일 이름은 `<제품명>_<버전>` 형식입니다. 이 문서는 버전 0.1.0 기준입니다.

![패키지가 추가된 Project 창](/img/captures/install-project-window.png)

## 첫 실행

이 버전에는 온보딩 창이 없습니다. 아래 순서로 시작하세요.

1. 아바타 프리팹이나 재질을 고릅니다. 진입 방법은 [칠하기를 시작하는 진입 방법](/getting-started/entry-points)에 있습니다.
2. 칠하기 창이 열리면 도구 띠에서 **펜**을 고릅니다.
3. Scene 뷰에서 드래그해 칠합니다. 저장은 `Ctrl+S`입니다.

![칠하기 창을 처음 연 화면](/img/captures/first-run-paint-window.png)

## 지원 버전과 파이프라인

| 항목 | 내용 |
|---|---|
| Unity 버전 | 2019.4.31f1 ~ Unity 6 LTS |
| 운영체제 | Windows |
| 렌더 파이프라인 | Built-in(BRP), URP |
| 지원하지 않음 | HDRP, macOS |

## 제거

1. 프로젝트의 `Assets/StudioRaming/MingPainter` 폴더를 지웁니다.
2. 프로젝트의 `Library/StudioRaming/MingPainter/` 폴더는 Unity가 다시 만듭니다. 복구 폴더에 저장되지 않은 작업이 남아 있다면 제거 전에 저장하세요. → [저장과 복구](/guides/save-recover)
3. 사용자 데이터는 프로젝트 밖의 `%APPDATA%\StudioRaming\MingPainter`에 남습니다. 패키지를 지워도 이 폴더는 자동으로 지워지지 않습니다. 브러시 라이브러리, 프로필, 그라데이션 목록이 여기에 있습니다.
