# MingPainter 문서 사이트

MingPainter(Unity 안에서 3D 모델 텍스처를 칠하는 도구)의 사용 설명서를 Docusaurus로 만든 사이트입니다.
구조와 설정은 MingToon 문서 사이트(`mingtoon-docs`)와 같은 Docusaurus 3.10.2를 씁니다.

## 구성

| 경로 | 내용 |
|---|---|
| `docs/` | 한국어 문서 (ko 기본). 장마다 폴더를 나눕니다 |
| `docs/reference/shortcuts.md`, `docs/reference/subtools.md` | 제품 코드에서 생성한 표. 손으로 고치지 않습니다 |
| `static/img/captures/` | 화면 캡처. 실제 캡처는 `scripts/sync-captures.mjs`가 복사하고, 없는 캡처는 회색 자리표시자가 채웁니다 |
| `i18n/<locale>/docusaurus-theme-classic/` | 테마 번역 (navbar, footer). 페이지 번역은 아직 없습니다 |
| `scripts/` | 캡처 동기화, 자리표시자 생성, 번역 점검 |

## 명령

```sh
npm ci                                  # 의존성 설치 (lock 파일 기준)
node scripts/sync-captures.mjs          # 캡처 복사와 자리표시자 생성 (빌드 전 실행)
npm run start                           # 로컬 개발 서버
npm run build -- --locale ko            # 한국어 빌드 (깨진 링크와 깨진 앵커는 빌드 오류)
```

캡처 원본 위치는 `CAPTURE_SRC` 환경 변수로 바꿉니다. 기본값은 `E:/Unity/_mingpainter/work/S7/docs-captures/final`입니다.

## 상태

- 버전: MingPainter 0.1.0 (`docusaurus.config.js`의 `MINGPAINTER_VERSION`). 버전을 올리면 패치노트 페이지도 함께 추가합니다.
- 한국어 페이지만 있습니다. 영어와 일본어 페이지는 번역 작업에서 추가합니다.
- BOOTH 상점 링크는 아직 없습니다. `docusaurus.config.js`의 TODO를 보세요.
