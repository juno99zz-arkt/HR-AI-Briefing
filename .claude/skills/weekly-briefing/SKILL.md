---
name: weekly-briefing
description: HR AI T/F 주간 AI 브리핑의 리서치·작성 단계를 GitHub Actions 안에서 Claude Code 가 수행하는 절차. 결과는 briefing/issues/YYYY-MM-DD.json 한 파일. 메일·앱·옵시디언·기록은 워크플로가 한다.
---

# 주간 AI 브리핑 작성 (GitHub Actions · Claude Code)

Aside 루틴 "주간 AI 브리핑 메일 발송 (월 07:00)"(2026-11-08 기준)을 클라우드로 옮긴 판. 내용 규칙은 `briefing/spec.md` 가 기준이고, 이 문서는 실행 방법만 정한다.

## 하지 않는 일 (워크플로 담당)
메일 발송, 앱(index.html) 갱신, 옵시디언 노트, archive-index·send-log 기록, git 커밋. **지난 호 json 은 절대 수정하지 않는다.**
쓰는 파일은 `briefing/issues/<발행일>.json` 하나뿐이다.

## 1. 준비
- 발행일 = 프롬프트가 알려준 날짜(월요일). 수집 기간 = `briefing/issues/` 의 최신 json(발행일 이전) 다음 날 ~ 발행일.
- `briefing/spec.md` 를 끝까지 읽는다.
- 최근 4주치 `briefing/issues/*.json` 을 읽어 형식(최신 호가 가장 좋은 예시)과 중복 방지 목록(URL·영상 ID·사건)을 만든다.
- 주차 표기: 발행일이 속한 주(월~일)가 그 달 몇째 주인지(첫째~다섯째). 요일 표기 (월)/(수)/(금) 는 붙이지 않는다.

## 2. 리서치
- **기사 섹션 01·02·03·05**: WebSearch 로 한국어·영어 쿼리를 섞어 찾고, 후보는 WebFetch 로 직접 열어 날짜·내용·URL 을 검증한다. 검증 못 한 기사는 제외. 창작 금지. 수집 기간 기사 우선, 01·02 는 부족하면 spec 허용 범위(1~2개월) 안에서 보충.
- 섹션별 리서치는 Task 서브에이전트로 병렬 진행해도 된다(01·02·03·05·04·06 각각). 서브에이전트에는 spec.md 의 해당 섹션 규칙, 수집 기간, 중복 방지 목록을 넘기고, 검증된 항목 JSON 배열만 답으로 받는다.
- **04 유튜브** (spec '04 작성 규칙' 대로, 단 도구만 다름):
  - `python scripts/yt.py search "<쿼리>" --lang ko --region KR --days 8` / `--lang en --region US` 로 후보를 찾고,
  - `python scripts/yt.py meta ID1,ID2,...` 로 조회수·게시일·길이·설명란을 확인한다. 필드(views·duration·url·thumbnail)는 이 출력값을 그대로 쓴다.
  - 클라우드에서는 자막을 쓰지 않는다. body 는 설명란과 WebFetch 로 확인한 내용만 근거로 하고, 설명란만 확인했으면 마지막 문장에 그 사실을 적는다.
  - `yt.py` 가 종료 코드 2(API 키 없음)면 WebSearch(`site:youtube.com` + 쿼리)와 WebFetch(영상 페이지)로 대신하고, 조회수·게시일을 확인하지 못한 영상은 쓰지 않는다.
- **06 벤치마크**: WebFetch 로 https://lmarena.ai/leaderboard/text (1~10위)와 https://artificialanalysis.ai/leaderboards/models (상위 5)를 읽어 숫자를 그대로 옮긴다. 직전 호 rows 와 비교해 순위 변화를 note 에. 숫자 추정 금지. 못 읽으면 spec 규칙(직전 표 재사용 + "접속 실패" 명시).

## 3. 작성
- spec 스키마대로: headline "M월 N째 주 AI 브리핑", pubDate "YYYY년 M월 D일 월요일", readTime "9분", nextDate 다음 주 월요일 "M월 D일 월요일", summary 6개(01~06 순서), sections 6개(label "01 · HR 특화 AI 동향" … "06 · 주요 AI 모델 벤치마크", 04 는 type "video", 06 은 type "benchmark"), implications 3~4개.
- 기사 body 4~6문장(약 250~400자), 영상 body 3~4문장. kicker·audience 필드 금지. TF 내부 진행 현황 섹션 금지. 명칭은 항상 "HR AI T/F".
- `briefing/issues/<발행일>.json` 으로 저장(UTF-8, 들여쓰기 1칸).

## 4. 검사
`node scripts/build.mjs --check <발행일>` — ✗ 가 나오면 고쳐서 통과할 때까지 반복한다.

## 마무리 출력
5줄 이내: 헤드라인, 섹션별 건수(01~06), 벤치마크 1위, 이번 호 핵심 3줄, 확인하지 못한 것(있으면).
