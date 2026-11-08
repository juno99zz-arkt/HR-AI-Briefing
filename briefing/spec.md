> 2026-11-08 클라우드 이전: 이 사양은 GitHub Actions(저장소 HR-AI-Briefing)에서 쓴다. P = 저장소의 `briefing/` 폴더. 메일·앱·옵시디언·기록은 워크플로가 하고, Claude는 `briefing/issues/YYYY-MM-DD.json` 작성까지만 한다. 아래 본문 중 Aside·REPL·Gmail 작성창·PowerShell·로컬 경로 언급은 옛 방식 기록이며 `.claude/skills/weekly-briefing/SKILL.md`가 우선한다.
> 2026-11-07 사용자 폴더 재편: 현재 NF는 `4. Resource (외부지식)/AI 브리핑/`이다. 구형 예약 문구의 3번 Resource는 개편 전 경로이므로 새로 만들지 않고 현재 CLAUDE와 이 최신 경로를 따른다. 발행 일정·수신자·내용 형식은 바꾸지 않는다.

# 주간 AI 브리핑 (HR AI T/F) 작성·발송 사양

- 발행: 매주 월요일 07:00 KST, 주 1회 (2026-10-22 사용자 요청으로 월·수·금 → 월요일만. 수집 기간은 직전 호 다음 날~발행일. 헤드라인·제목에 요일 표기 없음. 10/16·10/21 호는 주 2~3회 시기의 기록이라 (금)/(수) 표기가 남아 있음)
- 스마트폰 앱(PWA): https://juno99zz-arkt.github.io/HR-AI-Briefing/ (GitHub 저장소 juno99zz-arkt/HR-AI-Briefing, Pages main/root). 원본 파일 P\app\. 매 호 build(data,{standalone:true,pwa:true,archive}) 로 index.html 만 교체 업로드. 메일 본문 사이드바에 앱 QR·링크(opts.appUrl).
- 수신: 2명(둘 다 To) — 주소는 GitHub 시크릿 BRIEFING_TO (공개 저장소라 파일에 적지 않음)
- 발신: Gmail SMTP (시크릿 EMAIL_SENDER / EMAIL_PASSWORD, 워크플로가 발송)
- 메일 제목: `[주간 AI 브리핑] {YYYY}년 {M}월 {N}째 주 ({M}/{D})` 예: `[주간 AI 브리핑] 2026년 10월 둘째 주 (10/12)`
- 대상 독자: HR AI 도입 T/F (5인). 명칭은 항상 "HR AI T/F"로 쓴다("인사 AI T/F" 사용 금지). 인사(HR) 업무에 AI Agent를 도입하려는 대기업 인사팀 T/F.
- 언어: 한국어. 외국 기사 제목은 링크 텍스트에 원제 유지, 본문은 한국어 요약.
- 2026-10-19 발행분부터 "TF 내부 진행 현황" 섹션은 넣지 않는다. 아래 구성만 사용.

## 구성 (순서 고정, 2026-10-14 사용자 지정)
1. 마스트헤드: 헤드라인 "{M}월 {N}째 주 AI 브리핑", pubDate "YYYY년 M월 D일 월요일", nextDate "M월 D일 월요일", readTime "9분"(8~10분, '약' 없이)
2. 이번 주 핵심: 6개 bullet — 01~06 섹션 순서대로 각 1개 요약(핵심 수치·고유명사 포함)
3. 01 · HR 특화 AI 동향 — title "채용·평가·조직관리에 적용되는 AI", tag "동향", 2~4건
4. 02 · 경쟁사·타사 도입 사례 — title "국내외 기업 HR AI 도입 벤치마킹", tag "사례", 2~4건 (국내 대기업 우선: 삼성 계열, SK, LG, 현대차 등 + 해외 사례)
5. 03 · AI 업계 주요 이슈 — title "이번 주 산업 동향", tag "이슈", 3~5건
6. 04 · Now Hot, AI 유튜브 콘텐츠 — title "이번 주 주목받은 AI 영상", tag "영상", type "video", 3~4건
7. 05 · 주요 인사의 멘트·주장 — title "업계 리더 발언", tag "발언", 2~3건 (발언자 이름·직함 명시)
8. 06 · 주요 AI 모델 벤치마크 — title "LMArena 종합 순위 (실사용자 블라인드 평가 기반)", tag "벤치마크", type "benchmark", Top 10 + 교차 확인 Top 5
9. T/F 시사점: 3~4개 문단. 이번 주 기사·영상·벤치마크를 근거로 우리 T/F가 취할 행동/관점을 구체적으로.
10. 푸터: 자동 생성 안내 + 다음 발행일

## 04 Now Hot, AI 유튜브 콘텐츠 작성 규칙
- 기간: 발행일 직전 7~8일 안에 올라온 영상. YouTube 스킬(C:\Users\정준오\.aside\u\0\skills\builtin\youtube\SKILL.md)의 youtube.search / getMetadata / getTranscript 사용.
- 검색: 한국어(lang 'ko', region 'KR')와 영어(lang 'en', region 'US')를 섞는다. 예: "AI 에이전트", "ChatGPT", "클로드", "제미나이", "AI 업무 자동화", "조코딩 AI뉴스", "티타임즈 AI", "안될공학", "OpenAI", "Anthropic", "Gemini", "AI agents", "AI HR", "Workday AI".
- 선정(3~4개): ① 이번 주 조회수 최상위 화제작 1~2개(공식 발표 영상 포함 가능) ② 국내 주간 AI 뉴스 정리 1개 ③ 기업 AI 도입·HR·업무 활용 관련 1개. 정치·일반 뉴스, 낚시성·광고성 영상은 제외.
- 본문(body): 3~4문장. 무엇을 다루는지 → 핵심 내용(설명란·자막 근거) → 볼 때 주의점(광고 포함, 채널 해석, 시연 위주 등). 자막/설명란에 없는 내용은 쓰지 않는다.
- 필드: {title(한국어 헤드라인), channel, date "YYYY.MM.DD", views "65만회"(만 단위, 1만 미만은 "8,500회"), duration "22분"/"1시간 19분", url "https://www.youtube.com/watch?v=ID", thumbnail "https://i.ytimg.com/vi/ID/hqdefault.jpg", body}

## 06 주요 AI 모델 벤치마크 작성 규칙
- 메인 지표: LMArena Text Arena 종합(Overall) — https://lmarena.ai/leaderboard/text (수백만 건 실사용자 블라인드 투표 기반, 가장 널리 인용되는 순위). WebFetch로 그날 표를 읽어 1~10위를 그대로 옮긴다(순위·모델·개발사·점수·±오차·투표 수, "Preliminary" 표시는 prelim:true).
- 교차 확인: Artificial Analysis Intelligence Index — https://artificialanalysis.ai/leaderboards/models 의 상위 5개(동점은 같은 순위).
- 모델명은 원문 표기를 읽기 좋게만 바꾼다(예: gemini-4-argon-high → Gemini 4 Argon (high)). 숫자는 절대 추정하지 않는다.
- note(분석): 3~4문장. 1위·신규 진입·잠정 여부와 오차범위, 개발사별 분포, 지난주(issues 직전 JSON) 대비 순위 변화, 두 지표의 차이, T/F 관점 한 줄.
- 페이지를 못 읽으면 섹션을 빼지 말고 note에 "이번 주 순위표 접속 실패"를 적고 직전 발행분 표를 기준일과 함께 재사용한다.

## 아이템 작성 규칙
- 각 아이템: title(한 줄 헤드라인), body, source(매체명), date(YYYY.MM.DD), url, linkText(기사 원제)
- body 분량(2026-10-12 사용자 제공 디자인 기준): 4~6문장, 약 250~400자. 구성 = ①핵심 사실 2문장 → ②구체 정보 1~2문장(수치·표본 수·발표 주체·행사명·시연 내용 등) → ③읽을 때 주의점 1문장(전망치/확정치 구분, 일반화 주의, 상대측 반론, 미확인 부분 등). 원문을 일부만 확인했으면 그 사실을 마지막에 명시(예: "원문 전문은 확인하지 못했습니다.").
- (기사 섹션 01·02·03·05 공통) 03·05는 최근 7일 이내 기사 우선. 01·02는 최근 7일이 부족하면 최근 1~2개월 내 의미 있는 기사 허용(날짜를 정확히 표기).
- 같은 URL이나 같은 사건을 최근 4주 발행분(issues/*.json)과 중복하지 않는다.
- 모든 URL은 WebFetch 등으로 실제 열리는지, 날짜·내용이 요약과 맞는지 확인한다. 확인 안 되는 기사는 쓰지 않는다. 추측·창작 금지.
- 수치·인용은 원문 그대로.

## 디자인 (2026-10-12 사용자 제공 디자인 확정: design_reference_2026-10-12.html)
- 웹/첨부판: 상단바(HR AI Briefing), 히어로 + 발행 정보 카드(수록 기사 수/핵심 주제/읽기 시간), 왼쪽 고정 목차(섹션 바로가기), 네이비 '이번 주 핵심', 섹션별 색상 배지 카드, 연파랑 '시사점', 맨 위로 버튼, 반응형·인쇄 대응.
- 메일 본문판(2026-10-12 사용자 요청): 모바일 맞춤 금지. 데스크톱 웹 디자인 그대로(상단바, 오른쪽 발행 정보 카드, 왼쪽 200px 목차 + 본문, 헤드라인 오른쪽 출처·날짜, 최대 폭 1280px)를 인라인 스타일로 재현. 글꼴은 사용자 제공 리소스의 Pretendard('Pretendard Variable', Pretendard, 'Malgun Gothic'). 원본 리소스: C:\Users\정준오\Desktop\클로드 (AI_Briefing_2026-10-12.html / .zip), 사본: design_reference_2026-10-12.html
- 디자인은 build_email.js 가 전부 담당한다. 데이터만 만들고 빌더를 수정하지 마라. (*_old.js 구버전 사용 금지)

## 데이터 → 메일
- 데이터 JSON 스키마 예시: issues/2026-10-12.json (2026-10-14 새 구성 샘플)
  `{headline, pubDate, readTime, nextDate, summary[6], sections[6], implications[3~4]}`
  - 기사 섹션: {label "01 · HR 특화 AI 동향", title, tag, items[{title, body, source, date, url, linkText}]}
  - 영상 섹션: {label "04 · Now Hot, AI 유튜브 콘텐츠", title, tag "영상", type "video", items[{title, channel, date, views, duration, url, thumbnail, body}]}
  - 벤치마크 섹션: {label "06 · 주요 AI 모델 벤치마크", title, tag "벤치마크", type "benchmark", source{name, url, asOf "YYYY.MM.DD", note "누적 투표 N건 · 모델 N개"}, rows[{rank, model, org, score, ci, votes, prelim?}], note, cross{name, url, asOf, rows[{rank, model, org, score}]}}
- 빌더: build_email.js 의 buildBriefingEmail(data, {attachmentName}) → 메일 본문용 인라인 HTML / buildBriefingEmail(data, {standalone:true}) → 첨부·보관용 단독 HTML
- 결과 저장: issues/YYYY-MM-DD.json, issues/YYYY-MM-DD_email.html(메일 본문), issues/AI_Briefing_YYYY-MM-DD.html(첨부용 단독 HTML)
- 메일에는 AI_Briefing_YYYY-MM-DD.html 을 첨부한다(Gmail 업로드는 세션 폴더 안의 파일만 가능 → 세션 tmp 로 복사 후 첨부).
- 아카이브(2026-10-14 사용자 요청: 매주 누적, 1년치): build 시 opts.archive 에 issues/*.json(현재 호 제외 가능, 빌더가 중복 제거) 전체를 넘긴다. 빌더가 발행일 기준 최근 365일 이내만 골라 첨부 HTML 왼쪽 하단 ARCHIVE 탭(날짜별 목록 + 기사 검색, 지난 호 열람·최신호 복귀)에 내장하고, 메일 본문 사이드바에도 최근 6개 호 목록을 표시한다.
  - 1년(365일) 넘은 호의 json/html 은 issues/old/ 로 이동(삭제 금지).
  - archive-index.md 표 맨 위에 매주 한 줄 추가(발행일, 헤드라인, 기사 수, 영상 수, 벤치마크 1위, 파일).
  - 지난 호 json 은 절대 수정하지 않는다(과거 기록 보존).
- 옵시디언 기록(2026-10-14 사용자 요청, 매주 발송 시점): build_obsidian_md.js 의 buildBriefingMarkdown(data, {htmlName, prevNote, sentAt}) 로 노트 생성 → obsidian-outbox 에 스테이징 → 볼트에 반영.
  - 볼트: C:\Users\정준오\OneDrive\My Knowledge Base\나의 지식베이스 (규칙: projects\옵시디언-정리-루틴\vault-rules.md 1절·3-7)
  - (2026-10-16 변경) 노트: 4. Resource (외부지식)/AI 브리핑/YYYY-MM-DD 주간 AI 브리핑.md (전체 내용 마크다운, 이전 호 링크), 모음: 4. Resource (외부지식)/AI 브리핑/주간 AI 브리핑 모음.md (표 맨 위에 행 추가), HTML: Attachments/AI_Briefing_YYYY-MM-DD.html
  - 볼트 쓰기는 PowerShell(Copy-Item -LiteralPath). 실패하면 outbox 에 남겨 두고, 옵시디언 정리 루틴이 vault-rules 3-7 에 따라 반영. 반영 후 outbox\done 으로 이동.
- 발송 기록: send-log.md 에 "YYYY-MM-DD | 제목 | 수신자 | 결과" 한 줄 추가. 같은 발행일이 이미 '발송완료'면 다시 보내지 않는다.

## 옵시디언 경로 변경 (2026-10-18 최종)
- 노트 폴더 NF = V\4. Resource (외부지식)\AI 브리핑 (주간 AI 브리핑 모음.md 포함), 첨부 = V\Attachments. 루틴 프롬프트도 이 경로로 수정 완료(2026-10-18). 옛 경로(V\20_프로젝트\AI TF, V\_attachments)에 남은 브리핑 파일은 브리핑 루틴이 새 경로로 옮기고, 옵시디언 정리 루틴 3-7이 안전망.
