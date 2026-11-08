// 주간 AI 브리핑 빌더 v4 (2026-10-14)
// 구성: 이번 주 핵심 → 01 HR 특화 AI 동향 → 02 경쟁사·타사 도입 사례 → 03 AI 업계 주요 이슈 → 04 Now Hot, AI 유튜브 콘텐츠
//       → 05 주요 인사의 멘트·주장 → 06 주요 AI 모델 벤치마크 → T/F 시사점
// 디자인: 사용자 제공 AI_Briefing_2026-10-12.html (원본 CSS 그대로 + 영상 카드·벤치마크 표 확장), 글꼴 Pretendard
// build(data, {attachmentName}) → 메일 본문(인라인, 데스크톱 레이아웃) / build(data, {standalone:true}) → 첨부·보관용 단독 HTML
// section.type: 'articles'(기본) | 'video' | 'benchmark'  — 스키마는 spec.md 참고
function buildBriefingEmail(d, opts = {}) {
  const WEB_CSS = "\r\n:root{--ink:#16263b;--muted:#637084;--blue:#265ce0;--line:#e0e6ef;--paper:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:32px}body{margin:0;background:#f4f6fa;color:var(--ink);font-family:'Pretendard Variable','Malgun Gothic',sans-serif;word-break:keep-all;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}a:focus-visible{outline:3px solid #e8a640;outline-offset:5px}p,h1,h2,h3{margin:0}.topbar{height:76px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 max(32px,calc((100vw - 1280px)/2));gap:20px}.brand{font-weight:800;font-size:17px;display:flex;align-items:center;gap:12px}.brandmark{background:var(--blue);color:#fff;border-radius:10px;padding:9px;font-size:15px}.topbar small{font-size:12px;letter-spacing:1.5px;color:var(--muted)}.shell{max-width:1280px;margin:auto;padding:48px 32px 40px}.hero{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:32px}.eyebrow{font-size:11px;letter-spacing:2px;font-weight:800;color:var(--blue);margin-bottom:14px}h1{font-size:42px;letter-spacing:-2px;line-height:1.25}.hero p{font-size:14px;color:var(--muted);margin-top:16px;line-height:1.7}.edition{display:flex;gap:28px;padding:18px 24px;background:#fff;border:1px solid var(--line);border-radius:14px;flex-shrink:0}.edition div+div{border-left:1px solid var(--line);padding-left:28px}.edition strong{display:block;font-size:25px;letter-spacing:-1px}.edition span{display:block;font-size:11px;color:var(--muted);margin-top:6px}.layout{display:grid;grid-template-columns:200px minmax(0,1fr);gap:32px}.sidebar{position:sticky;top:30px;align-self:start}.nav-label{font-size:10px;font-weight:800;letter-spacing:1.6px;color:#7e899a;margin:8px 12px 14px}.sidebar nav a{display:flex;align-items:start;gap:12px;padding:13px 12px;font-size:13px;line-height:1.6;border-radius:9px;margin:4px 0}.sidebar nav a:hover{background:#e7edfb;color:var(--blue)}nav span{color:#8392ab;font-size:11px;font-weight:700;padding-top:2px}.sidebar .summary-link{background:#e7edfb;color:var(--blue);font-weight:700}.side-note{margin:24px 12px;padding-top:20px;border-top:1px solid var(--line);color:var(--muted);font-size:12px;line-height:1.8}.summary{background:#182c4c;color:#fff;border-radius:20px;padding:30px 32px;position:relative;overflow:hidden}.summary:before{content:'';position:absolute;top:0;right:0;width:6px;height:100%;background:#5b87ff}.summary .eyebrow{color:#a9c4ff;margin-bottom:10px}h2{font-size:23px;letter-spacing:-.8px}.summary .intro{color:#bac9df;font-size:13px;margin-top:8px}.numbered{list-style:none;margin:22px 0 0;padding:0}.numbered li{display:flex;gap:17px;padding:17px 0;border-top:1px solid #ffffff22}.numbered .number{font-size:12px;letter-spacing:1px;font-weight:800;color:#90b1ff;padding-top:5px}.numbered p{font-size:14px;line-height:1.85}.news-section{margin-top:40px}.section-heading{display:flex;align-items:center;gap:14px;margin-bottom:18px}.section-no{width:40px;height:40px;display:grid;place-items:center;background:#e6ecfa;color:var(--blue);border-radius:12px;font-size:13px;font-weight:800}.section-heading h2{font-size:21px}.section-heading p{font-size:12px;color:var(--muted);margin-top:5px}.count{margin-left:auto;color:#7e899a;font-size:9px;letter-spacing:1.3px;white-space:nowrap}.article-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.article{background:white;border:1px solid var(--line);border-radius:15px;padding:24px;display:flex;flex-direction:column;transition:border-color .2s,box-shadow .2s}.article:hover{border-color:#b0c2ed;box-shadow:0 6px 20px #16263b08}.meta{font-size:11px;line-height:1.7;color:var(--muted);display:flex;align-items:baseline;gap:9px;flex-wrap:wrap;margin-bottom:15px}.badge{padding:3px 8px;border-radius:5px;font-weight:700;background:#eaf0ff;color:#315ad1}.badge-2{background:#e8f5ee;color:#26734d}.badge-3{background:#fff2dd;color:#926218}.badge-4{background:#f0ebfb;color:#7451ad}h3{font-size:18px;line-height:1.55;letter-spacing:-.5px;margin-bottom:12px}.article p{font-size:13px;line-height:1.9;color:#5c697b;margin-bottom:22px}.source{font-size:12px;font-weight:700;color:var(--blue);margin-top:auto;display:flex;justify-content:space-between;border-top:1px solid #edf0f5;padding-top:15px}.source:hover{text-decoration:underline}.source span{font-size:16px}.implications{margin-top:40px;background:#eaf0fc;border:1px solid #d5e0f6;border-radius:18px;padding:30px 32px}.implications .eyebrow{margin-bottom:10px}.implications .intro{font-size:13px;color:var(--muted);margin-top:8px}.implications .numbered li{border-color:#cfdaee}.implications .number{color:var(--blue)}footer{margin-top:36px;padding-top:24px;border-top:1px solid var(--line);font-size:11px;line-height:1.9;color:var(--muted)}.footer-brand{font-size:12px;color:var(--ink);font-weight:800;margin-bottom:8px}.back-top{display:inline-block;margin-top:16px;color:var(--blue);font-weight:700}@media(min-width:1000px){.article-grid .article:last-child:nth-child(odd){grid-column:1/-1}}@media(max-width:1000px){.layout{grid-template-columns:1fr}.sidebar{position:static}.sidebar nav{display:flex;flex-wrap:wrap;gap:4px}.sidebar nav a{padding:9px 12px;background:#fff;border:1px solid var(--line)}.nav-label,.side-note{display:none}.hero{align-items:start}.edition{gap:16px;padding:16px}.edition div+div{padding-left:16px}h1{font-size:34px}}@media(max-width:640px){.topbar{height:64px;padding:0 20px}.topbar small{display:none}.shell{padding:30px 20px}.hero{display:block;margin-bottom:24px}h1{font-size:32px}.hero p{font-size:12px}.edition{margin-top:22px;justify-content:space-between}.edition div{flex:1}.layout{gap:20px}.sidebar nav a{font-size:11px}.sidebar nav span{display:none}.summary,.implications{padding:24px 20px;border-radius:15px}.numbered p{font-size:13px}.article-grid{grid-template-columns:1fr}.article{padding:22px}.section-heading{gap:10px}.section-heading h2{font-size:19px}.count{display:none}.section-heading p{font-size:11px}h3{font-size:17px}.news-section{margin-top:30px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.article{transition:none}}@media print{body{background:#fff}.topbar,.sidebar,.edition,.back-top{display:none}.shell{padding:0}.layout{display:block}.summary{background:#f1f4fa;color:#16263b}.summary .intro{color:#637084}.article,.summary,.implications{break-inside:avoid}.article-grid{display:block}.article{margin-bottom:12px}.source{color:#265ce0}}\r\n/* Horizontal briefing articles */\r\n.article-grid{grid-template-columns:minmax(0,1fr)}\r\n.article{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.25fr);column-gap:32px;row-gap:12px;padding:24px 28px;align-items:start}\r\n.article .meta{grid-column:1;grid-row:1;margin:0}\r\n.article h3{grid-column:1;grid-row:2 / 4;margin:0;font-size:18px}\r\n.article>p{grid-column:2;grid-row:1 / 3;margin:0;padding-left:28px;border-left:1px solid var(--line)}\r\n.article .source{grid-column:2;grid-row:3;margin:0 0 0 28px;padding-top:12px}\r\n@media(max-width:760px){.article{display:flex;padding:22px;gap:0}.article .meta{margin-bottom:15px}.article h3{margin-bottom:12px;font-size:17px}.article>p{padding:0;border:0;margin-bottom:22px}.article .source{margin:0}}\r\n@media print{.article{display:block}.article>p{padding:0;border:0;margin:12px 0}.article .source{margin:0}}\r\n/* Full-width article: headline, metadata, summary, source */\r\n.article{display:flex;flex-direction:column;align-items:stretch;gap:0;padding:24px 28px}\r\n.article h3{order:0;margin:0 0 10px;font-size:18px}\r\n.article .meta{order:1;margin:0 0 14px}\r\n.article>p{order:2;margin:0 0 18px;padding:0;border:0}\r\n.article .source{order:3;align-self:flex-end;display:flex;gap:16px;justify-content:flex-end;margin:0;padding:0;border:0}\r\n@media(max-width:760px){.article{padding:22px}.article h3{font-size:17px}.article .source{margin:0}}\r\n/* Align metadata to the right of the headline */\r\n.article{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:24px;row-gap:14px;align-items:start}\r\n.article h3{grid-column:1;grid-row:1;margin:0}\r\n.article .meta{grid-column:2;grid-row:1;justify-content:flex-end;text-align:right;flex-wrap:nowrap;margin:3px 0 0;white-space:nowrap}\r\n.article>p{grid-column:1 / -1;grid-row:2;margin:0}\r\n.article .source{grid-column:1 / -1;grid-row:3;justify-self:end;align-self:end;margin:0}\r\n@media(max-width:760px){.article{grid-template-columns:minmax(0,1fr);row-gap:12px}.article h3{grid-column:1;grid-row:1}.article .meta{grid-column:1;grid-row:2;flex-wrap:wrap;white-space:normal;margin:0}.article>p{grid-column:1;grid-row:3}.article .source{grid-column:1;grid-row:4}}\r\n\n/* v4 확장: 섹션 배지 6색 */\n.badge-4{background:#fdecec;color:#b4232c}.badge-5{background:#f0ebfb;color:#7451ad}.badge-6{background:#e3f5f3;color:#1f7a6f}\n/* v4 확장: Now Hot 유튜브 카드 */\n.video{display:grid;grid-template-columns:240px minmax(0,1fr);gap:24px;background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px;transition:border-color .2s,box-shadow .2s}\n.video:hover{border-color:#b0c2ed;box-shadow:0 6px 20px #16263b08}\n.video .thumb{display:block;position:relative;border-radius:10px;overflow:hidden;aspect-ratio:16/9;background:#e6ecfa;align-self:start}\n.video .thumb img{width:100%;height:100%;object-fit:cover;display:block}\n.video .thumb .dur{position:absolute;right:8px;bottom:8px;background:#16263bd9;color:#fff;font-size:11px;font-weight:700;padding:2px 7px;border-radius:5px}\n.video .meta{margin:0 0 8px}\n.video h3{font-size:17px;margin:0 0 8px}\n.video p{font-size:13px;line-height:1.9;color:#5c697b;margin:0 0 10px}\n.video .source{border:0;padding:0;justify-content:flex-end;gap:6px}\n/* v4 확장: 벤치마크 표 */\n.bench{background:#fff;border:1px solid var(--line);border-radius:15px;padding:24px 28px}\n.bench-meta{font-size:11px;line-height:1.7;color:var(--muted);display:flex;align-items:baseline;gap:9px;flex-wrap:wrap;margin-bottom:14px}\n.bench table{width:100%;border-collapse:collapse;font-size:13px}\n.bench th{font-size:10px;letter-spacing:1.2px;color:#7e899a;font-weight:800;text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);background:#f7f9fc;white-space:nowrap}\n.bench td{padding:11px 12px;border-bottom:1px solid #edf0f5;vertical-align:middle}\n.bench .num{text-align:right;font-variant-numeric:tabular-nums}\n.bench .rank{font-weight:800;color:var(--blue);width:44px}\n.bench tr.top td{background:#f3f6fe}\n.bench .model{font-weight:700}\n.bench .org,.bench .votes{color:var(--muted)}\n.bench .score{font-weight:700;white-space:nowrap}.bench .score small{font-weight:400;color:var(--muted);font-size:10px;margin-left:3px}\n.bench .prelim{font-size:10px;font-weight:700;color:#926218;background:#fff2dd;border-radius:4px;padding:1px 6px;margin-left:6px}\n.bench .barcell{width:140px}.bench .bar{height:6px;background:#e6ecfa;border-radius:3px;overflow:hidden}.bench .bar i{display:block;height:100%;background:var(--blue);border-radius:3px}\n.bench-note{font-size:13px;line-height:1.9;color:#5c697b;margin:18px 0 0}\n.bench-cross{margin-top:20px;padding-top:18px;border-top:1px solid var(--line)}.bench-cross h4{font-size:13px;margin:0 0 10px}.bench-cross h4 span{font-weight:400;color:var(--muted);font-size:11px;margin-left:4px}\n.bench-links{display:flex;justify-content:flex-end;gap:22px;margin-top:16px}.bench-links .source{border:0;padding:0;margin:0;gap:6px}\n@media(max-width:760px){.video{grid-template-columns:1fr}.bench{padding:20px 16px;overflow-x:auto}.bench .barcell{display:none}}\n@media print{.video,.bench{break-inside:avoid}.video{grid-template-columns:160px 1fr}}\n\n/* v5: 좌측 하단 아카이브 탭 (최근 1년) */\n.sidebar{max-height:calc(100vh - 40px);overflow-y:auto;scrollbar-width:thin}\n.archive{margin:8px 4px 12px;border:1px solid var(--line);border-radius:12px;background:#fff;overflow:hidden}\n.archive-head{display:flex;justify-content:space-between;align-items:baseline;padding:12px 12px 8px;font-size:10px;font-weight:800;letter-spacing:1.6px;color:#7e899a}\n.archive-head em{font-style:normal;font-weight:700;letter-spacing:0;color:var(--blue);font-size:11px}\n.archive-tabs{display:flex;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\n.archive-tabs button{flex:1;border:0;background:#f7f9fc;padding:9px 0;font:inherit;font-size:12px;font-weight:700;color:var(--muted);cursor:pointer}\n.archive-tabs button+button{border-left:1px solid var(--line)}\n.archive-tabs button.on{background:#fff;color:var(--blue);box-shadow:inset 0 -2px 0 var(--blue)}\n.archive-body{max-height:300px;overflow-y:auto;padding:4px 6px 8px}\n.arc-month{font-size:10px;font-weight:800;letter-spacing:1.2px;color:#7e899a;margin:10px 6px 4px}\n.arc-item{display:block;width:100%;text-align:left;border:0;background:none;padding:8px;border-radius:8px;font:inherit;font-size:12px;font-weight:700;line-height:1.5;color:var(--ink);cursor:pointer}\n.arc-item em{font-style:normal;font-size:10px;font-weight:800;color:#fff;background:var(--blue);border-radius:4px;padding:1px 5px;margin-left:4px}\n.arc-item small{display:block;font-weight:400;color:var(--muted);font-size:11px;margin-top:2px}\n.arc-item:hover{background:#e7edfb}.arc-item.on{background:#e7edfb;color:var(--blue)}\n.arc-search{width:100%;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font:inherit;font-size:12px;margin:8px 0 6px;outline:none}.arc-search:focus{border-color:var(--blue)}\n.arc-count{font-size:11px;color:var(--muted);margin:2px 6px 4px}\n.arc-empty{font-size:12px;line-height:1.7;color:var(--muted);padding:8px 6px}\n.archive-foot{font-size:10px;color:#7e899a;padding:8px 12px;border-top:1px solid var(--line);background:#f7f9fc}\n.viewing-banner{display:none}\n.viewing-banner.show{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#fff8e6;border:1px solid #f3dfae;color:#7a5a12;border-radius:12px;padding:12px 16px;font-size:13px;font-weight:600;margin-bottom:16px}\n.viewing-banner button{border:0;background:none;color:var(--blue);font:inherit;font-weight:700;cursor:pointer;white-space:nowrap}\n.flash{animation:arcflash 2.2s ease-out}@keyframes arcflash{0%{box-shadow:0 0 0 3px #265ce0}100%{box-shadow:0 0 0 0 #265ce000}}\n@media(max-width:1000px){.sidebar{max-height:none;overflow:visible}.archive{margin:12px 0 0}}\n@media print{.archive,.viewing-banner{display:none!important}}\n\n/* v6: 스마트폰 앱(PWA) 화면 */\n@media(max-width:760px){\nbody{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}\n.topbar{position:sticky;top:0;z-index:20}\n.layout{gap:14px;grid-template-columns:minmax(0,1fr)}.sidebar,.layout>main{min-width:0}.archive-head em{margin-left:8px}\n.sidebar nav{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;margin:0 -20px;padding:0 20px 4px}\n.sidebar nav::-webkit-scrollbar{display:none}\n.sidebar nav a{white-space:nowrap;flex-shrink:0}\n.archive-head{cursor:pointer;font-size:11px;padding:12px 14px}\n.archive-head:after{content:'지난 호 보기 ▾';letter-spacing:0;font-weight:700;color:var(--blue);font-size:12px;margin-left:auto;padding-left:10px}\n.archive.open .archive-head:after{content:'접기 ▴'}\n.archive:not(.open) .archive-tabs,.archive:not(.open) .archive-body,.archive:not(.open) .archive-foot{display:none}\n.archive-body{max-height:55vh}\n.arc-item{padding:11px 8px;font-size:13px}\n.edition strong{font-size:21px}\n.bench table{font-size:12px}.bench td,.bench th{padding:9px 6px}\n}\n";
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dm = String(d.pubDate || '').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  const Y = dm ? dm[1] : '', M = dm ? +dm[2] : 0, D = dm ? +dm[3] : 0;
  const dotDate = dm ? `${Y}.${String(M).padStart(2, '0')}.${String(D).padStart(2, '0')}` : '';
  const eyebrowTop = `WEEKLY INTELLIGENCE · ${MONTHS[M - 1] || ''} ${Y}`.trim();
  const readMin = String(d.readTime || '7분').replace(/[^0-9]/g, '') || '7';
  const typeOf = (s) => s.type || 'articles';
  const total = d.sections.reduce((n, s) => n + (Array.isArray(s.items) ? s.items.length : 0), 0);
  const splitLabel = (label) => {
    const m = String(label).match(/^\s*(\d+)\s*[·.\-]\s*(.+)$/);
    return m ? { no: m[1], name: m[2].trim() } : { no: '', name: label };
  };
  // 섹션 순서별 배지 색: 01 파랑, 02 초록, 03 주황, 04 빨강(영상), 05 보라(발언), 06 청록(벤치마크)
  const BADGE = [
    { bg: '#eaf0ff', c: '#315ad1' }, { bg: '#e8f5ee', c: '#26734d' }, { bg: '#fff2dd', c: '#926218' },
    { bg: '#fdecec', c: '#b4232c' }, { bg: '#f0ebfb', c: '#7451ad' }, { bg: '#e3f5f3', c: '#1f7a6f' },
  ];
  const countLabel = (s) => {
    const t = typeOf(s);
    if (t === 'benchmark') return `TOP ${(s.rows || []).length}`;
    const n = (s.items || []).length;
    return `${n} ${t === 'video' ? 'VIDEO' : 'ARTICLE'}${n > 1 ? 'S' : ''}`;
  };
  const metaText = (it) => `${esc(it.source)}${it.date ? '  ·  ' + esc(it.date) : ''}`;
  const videoMeta = (it) => [it.channel, it.date, it.views ? '조회수 ' + it.views : '', it.duration].filter(Boolean).map(esc).join('  ·  ');
  const barPct = (rows, v) => {
    const xs = rows.map((r) => +r.score).filter((x) => !isNaN(x));
    const lo = Math.min(...xs), hi = Math.max(...xs);
    return hi === lo ? 100 : Math.round(35 + ((+v - lo) / (hi - lo)) * 65);
  };

  // ───────────────── 웹/첨부용 단독 HTML (+ 1년치 아카이브 탭) ─────────────────
  // renderWeb 는 페이지 안 스크립트로도 그대로 삽입되므로 바깥 변수에 의존하지 않게 자급식으로 유지한다.
  function renderWeb(d) {
    const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dm = String(d.pubDate || '').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
    const Y = dm ? dm[1] : '', M = dm ? +dm[2] : 0, D = dm ? +dm[3] : 0;
    const dotDate = dm ? `${Y}.${String(M).padStart(2, '0')}.${String(D).padStart(2, '0')}` : '';
    const eyebrowTop = `WEEKLY INTELLIGENCE · ${MONTHS[M - 1] || ''} ${Y}`.trim();
    const readMin = String(d.readTime || '7분').replace(/[^0-9]/g, '') || '7';
    const typeOf = (s) => s.type || 'articles';
    const total = d.sections.reduce((n, s) => n + (Array.isArray(s.items) ? s.items.length : 0), 0);
    const splitLabel = (label) => { const m = String(label).match(/^\s*(\d+)\s*[·.\-]\s*(.+)$/); return m ? { no: m[1], name: m[2].trim() } : { no: '', name: label }; };
    const countLabel = (s) => { const t = typeOf(s); if (t === 'benchmark') return `TOP ${(s.rows || []).length}`; const n = (s.items || []).length; return `${n} ${t === 'video' ? 'VIDEO' : 'ARTICLE'}${n > 1 ? 'S' : ''}`; };
    const metaText = (it) => `${esc(it.source)}${it.date ? '  ·  ' + esc(it.date) : ''}`;
    const videoMeta = (it) => [it.channel, it.date, it.views ? '조회수 ' + it.views : '', it.duration].filter(Boolean).map(esc).join('  ·  ');
    const barPct = (rows, v) => { const xs = rows.map((r) => +r.score).filter((x) => !isNaN(x)); const lo = Math.min(...xs), hi = Math.max(...xs); return hi === lo ? 100 : Math.round(35 + ((+v - lo) / (hi - lo)) * 65); };
    const numbered = (arr) => `<ol class="numbered">${arr.map((s, i) => `<li><span class="number">${String(i + 1).padStart(2, '0')}</span><p>${esc(s)}</p></li>`).join('')}</ol>`;
    const badgeCls = (i) => `badge badge-${i + 1}`;
    const articleHtml = (it, s, i, k) => `<article class="article" id="a-${i}-${k}"><div class="meta"><span class="${badgeCls(i)}">${esc(s.tag)}</span>${metaText(it)}</div><h3>${esc(it.title)}</h3><p>${esc(it.body)}</p><a class="source" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer" title="${esc(it.linkText || '')}">원문 보기 <span aria-hidden="true">↗</span></a></article>`;
    const videoHtml = (it, s, i, k) => `<article class="video" id="a-${i}-${k}"><a class="thumb" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">${it.thumbnail ? `<img src="${esc(it.thumbnail)}" alt="" loading="lazy">` : ''}${it.duration ? `<span class="dur">${esc(it.duration)}</span>` : ''}</a><div class="video-body"><div class="meta"><span class="${badgeCls(i)}">${esc(s.tag)}</span>${videoMeta(it)}</div><h3>${esc(it.title)}</h3><p>${esc(it.body)}</p><a class="source" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">영상 보기 <span aria-hidden="true">↗</span></a></div></article>`;
    const benchHtml = (s, i) => {
      const src = s.source || {};
      const rows = (s.rows || []).map((r, k) => `<tr class="${k < 3 ? 'top' : ''}"><td class="rank">${esc(r.rank)}</td><td><span class="model">${esc(r.model)}</span>${r.prelim ? '<span class="prelim">잠정</span>' : ''}</td><td class="org">${esc(r.org)}</td><td class="num score">${esc(r.score)}${r.ci ? `<small>±${esc(r.ci)}</small>` : ''}</td><td class="barcell"><div class="bar"><i style="width:${barPct(s.rows, r.score)}%"></i></div></td><td class="num votes">${esc(r.votes || '')}</td></tr>`).join('');
      const cross = s.cross ? `<div class="bench-cross"><h4>교차 확인 · ${esc(s.cross.name)} <span>${esc(s.cross.asOf || '')}</span></h4><table><thead><tr><th>순위</th><th>모델</th><th>개발사</th><th class="num">지수</th></tr></thead><tbody>${s.cross.rows.map((r) => `<tr><td class="rank">${esc(r.rank)}</td><td><span class="model">${esc(r.model)}</span></td><td class="org">${esc(r.org)}</td><td class="num score">${esc(r.score)}</td></tr>`).join('')}</tbody></table></div>` : '';
      return `<div class="bench" id="a-${i}-0"><div class="bench-meta"><span class="${badgeCls(i)}">${esc(s.tag)}</span>${esc(src.name || '')}${src.asOf ? '  ·  ' + esc(src.asOf) + ' 기준' : ''}${src.note ? '  ·  ' + esc(src.note) : ''}</div><table><thead><tr><th>순위</th><th>모델</th><th>개발사</th><th class="num">점수</th><th class="barcell">상대 점수</th><th class="num">투표 수</th></tr></thead><tbody>${rows}</tbody></table>${s.note ? `<p class="bench-note">${esc(s.note)}</p>` : ''}${cross}<div class="bench-links">${src.url ? `<a class="source" href="${esc(src.url)}" target="_blank" rel="noopener noreferrer">${esc(src.name || '순위표')} 보기 <span aria-hidden="true">↗</span></a>` : ''}${s.cross && s.cross.url ? `<a class="source" href="${esc(s.cross.url)}" target="_blank" rel="noopener noreferrer">${esc(s.cross.name)} 보기 <span aria-hidden="true">↗</span></a>` : ''}</div></div>`;
    };
    const sections = d.sections.map((s, i) => {
      const { no, name } = splitLabel(s.label);
      const t = typeOf(s);
      const body = t === 'benchmark' ? benchHtml(s, i) : `<div class="article-grid">${s.items.map((it, k) => (t === 'video' ? videoHtml(it, s, i, k) : articleHtml(it, s, i, k))).join('')}</div>`;
      return `<section id="section-${i + 1}" class="news-section"><header class="section-heading"><span class="section-no">${esc(no)}</span><div><h2>${esc(name)}</h2><p>${esc(s.title)}</p></div><span class="count">${countLabel(s)}</span></header>${body}</section>`;
    }).join('');
    const audience = d.audience || 'HR AI 도입 T/F';
    return {
      hero: `<div><div class="eyebrow">${esc(eyebrowTop)}</div><h1>${esc(d.headline)}</h1><p>${esc(d.pubDate)}  ·  ${esc(audience)}  ·  읽는 데 ${esc(readMin)}분</p></div><div class="edition"><div><strong>${total}</strong><span>수록 콘텐츠</span></div><div><strong>${String(d.sections.length).padStart(2, '0')}</strong><span>핵심 주제</span></div><div><strong>${esc(readMin)}<span style="display:inline;font-size:13px"> min</span></strong><span>예상 읽기 시간</span></div></div>`,
      nav: [`<a class="summary-link" href="#summary"><span>●</span>이번 주 핵심</a>`].concat(d.sections.map((s, i) => `<a href="#section-${i + 1}"><span>${esc(splitLabel(s.label).no)}</span>${esc(splitLabel(s.label).name)}</a>`)).concat([`<a href="#implications"><span>↗</span>T/F 시사점</a>`]).join(''),
      note: `${esc(audience)}<br>${dotDate}<br><br>이번 주 동향부터<br>우리 조직의 시사점까지.`,
      main: `<section id="summary" class="summary"><div class="eyebrow">THE WEEK AT A GLANCE</div><h2>이번 주 핵심</h2><p class="intro">바쁜 분은 이것만 읽으셔도 됩니다</p>${numbered(d.summary)}</section>${sections}<section id="implications" class="implications"><div class="eyebrow">FOR OUR T/F</div><h2>우리 T/F가 가져갈 시사점</h2><p class="intro">이번 주 기사를 바탕으로 정리한 제안입니다</p>${numbered(d.implications)}</section><footer><div class="footer-brand">HR AI T/F · WEEKLY BRIEFING</div>웹 검색을 바탕으로 자동 작성된 브리핑입니다. 인용 전에 원문을 확인해 주세요.<br>다음 브리핑은 ${esc(d.nextDate)} 오전 7시에 보내드립니다.<br><a href="#top" class="back-top">맨 위로 ↑</a></footer>`,
    };
  }

  // 아카이브: 현재 호 + opts.archive(지난 호 데이터 배열) 중 발행일 기준 최근 1년(365일) 이내만 포함, 최신순
  const isoOf = (x) => { const m = String(x.pubDate || '').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/); return m ? `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}` : ''; };
  const curIso = isoOf(d);
  const archiveList = (() => {
    const map = new Map();
    for (const x of (opts.archive || [])) { const k = isoOf(x); if (k && k <= curIso) map.set(k, x); }
    map.set(curIso, d);
    const cutoff = new Date(new Date(curIso + 'T00:00:00Z').getTime() - 365 * 86400000).toISOString().slice(0, 10);
    return [...map.entries()].filter(([k]) => k > cutoff).sort((a, b) => (a[0] < b[0] ? 1 : -1)).map(([date, data]) => ({ date, data }));
  })();

  if (opts.standalone) {
    const r = renderWeb(d);
    const archiveJson = JSON.stringify(archiveList).replace(/</g, '\\u003c');
    const script = `
(function(){
  var ARCHIVE = JSON.parse(document.getElementById('archive-data').textContent);
  var LATEST = ARCHIVE.length ? ARCHIVE[0].date : '';
  var renderWeb = ${renderWeb.toString()};
  var $ = function(id){ return document.getElementById(id); };
  var esc = function(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  var current = LATEST;
  function fmt(iso){ var p = iso.split('-'); var w = ['일','월','화','수','목','금','토'][new Date(iso + 'T00:00:00').getDay()]; return p[1] + '.' + p[2] + ' (' + w + ')'; }
  function drawList(){
    var html = '', month = '';
    ARCHIVE.forEach(function(x){
      var m = x.date.slice(0, 7);
      if (m !== month) { month = m; html += '<div class="arc-month">' + m.slice(0, 4) + '년 ' + (+m.slice(5)) + '월</div>'; }
      html += '<button type="button" class="arc-item' + (x.date === current ? ' on' : '') + '" data-date="' + x.date + '">' + fmt(x.date) + (x.date === LATEST ? ' <em>최신</em>' : '') + '<small>' + esc(x.data.headline) + '</small></button>';
    });
    $('arc-list').innerHTML = html || '<div class="arc-empty">저장된 브리핑이 없습니다.</div>';
  }
  function show(date, anchor){
    var x = ARCHIVE.filter(function(a){ return a.date === date; })[0]; if (!x) return;
    current = date;
    var r = renderWeb(x.data);
    $('hero-root').innerHTML = r.hero; $('nav-root').innerHTML = r.nav; $('note-root').innerHTML = r.note; $('main-root').innerHTML = r.main;
    var b = $('viewing'); if (date === LATEST) { b.className = 'viewing-banner'; } else { b.className = 'viewing-banner show'; $('viewing-text').textContent = fmt(date) + ' 발행 브리핑을 보고 있습니다'; }
    document.title = x.data.headline + ' | HR AI Briefing';
    try { history.replaceState(null, '', date === LATEST ? location.pathname : '#issue=' + date); } catch (e) {}
    drawList();
    if (anchor) { var el = $(anchor); if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); setTimeout(function(){ el.classList.remove('flash'); }, 2200); } }
    else window.scrollTo(0, 0);
  }
  function search(q){
    q = q.trim().toLowerCase(); var out = [];
    if (q.length < 2) { $('arc-results').innerHTML = '<div class="arc-empty">두 글자 이상 입력하세요. 최근 1년치 ' + ARCHIVE.length + '개 호의 기사·영상·발언을 찾습니다.</div>'; return; }
    ARCHIVE.forEach(function(x){
      x.data.sections.forEach(function(s, i){
        (s.items || []).forEach(function(it, k){
          var hay = [it.title, it.body, it.source, it.channel].join(' ').toLowerCase();
          if (hay.indexOf(q) >= 0) out.push({ date: x.date, sec: s.label, title: it.title, anchor: 'a-' + i + '-' + k });
        });
        if (s.type === 'benchmark') {
          var hay2 = [s.note].concat((s.rows || []).map(function(r){ return r.model + ' ' + r.org; })).join(' ').toLowerCase();
          if (hay2.indexOf(q) >= 0) out.push({ date: x.date, sec: s.label, title: (s.source && s.source.name || '벤치마크') + ' 순위표', anchor: 'a-' + i + '-0' });
        }
      });
    });
    $('arc-results').innerHTML = out.length ? '<div class="arc-count">' + out.length + '건</div>' + out.slice(0, 80).map(function(o){ return '<button type="button" class="arc-item" data-date="' + o.date + '" data-anchor="' + o.anchor + '">' + esc(o.title) + '<small>' + fmt(o.date) + ' · ' + esc(o.sec) + '</small></button>'; }).join('') : '<div class="arc-empty">검색 결과가 없습니다.</div>';
  }
  document.addEventListener('click', function(e){
    var t = e.target.closest ? e.target.closest('[data-date],[data-tab],#back-latest') : null; if (!t) return;
    if (t.id === 'back-latest') { show(LATEST); return; }
    if (t.hasAttribute('data-tab')) {
      var tab = t.getAttribute('data-tab');
      [].forEach.call(document.querySelectorAll('.archive-tabs button'), function(b){ b.classList.toggle('on', b === t); });
      $('arc-pane-list').hidden = tab !== 'list'; $('arc-pane-search').hidden = tab !== 'search';
      if (tab === 'search') { $('arc-q').focus(); search($('arc-q').value); }
      return;
    }
    show(t.getAttribute('data-date'), t.getAttribute('data-anchor'));
  });
  $('arc-q').addEventListener('input', function(){ search(this.value); });
  document.querySelector('.archive-head').addEventListener('click', function(){ document.querySelector('.archive').classList.toggle('open'); });
  $('arc-total').textContent = ARCHIVE.length + '개 호';
  drawList();
  var h = location.hash.match(/issue=(\\d{4}-\\d{2}-\\d{2})/); if (h && h[1] !== LATEST) show(h[1]);
})();`;
    return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(d.headline)} | HR AI Briefing</title>${opts.pwa ? `<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#16263b"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="HR AI 브리핑"><link rel="apple-touch-icon" href="icon-192.png"><link rel="icon" href="icon-192.png">` : ""}<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"><style>${WEB_CSS}</style></head><body id="top"><header class="topbar"><div class="brand"><span class="brandmark">AI</span>HR AI Briefing</div><small>INTELLIGENCE FOR BETTER WORK</small></header><div class="shell"><div class="hero" id="hero-root">${r.hero}</div><div class="layout"><aside class="sidebar"><div class="nav-label">IN THIS BRIEFING</div><nav aria-label="브리핑 섹션" id="nav-root">${r.nav}</nav><div class="side-note" id="note-root">${r.note}</div><div class="archive" aria-label="지난 브리핑"><div class="archive-head"><span>ARCHIVE</span><em id="arc-total"></em></div><div class="archive-tabs" role="tablist"><button type="button" class="on" data-tab="list">날짜별</button><button type="button" data-tab="search">기사 검색</button></div><div class="archive-body"><div id="arc-pane-list"><div id="arc-list"></div></div><div id="arc-pane-search" hidden><input id="arc-q" class="arc-search" type="search" placeholder="키워드 (예: 채용, LG전자, Gemini)"><div id="arc-results"></div></div></div><div class="archive-foot">최근 1년치 브리핑이 누적됩니다</div></div></aside><main><div id="viewing" class="viewing-banner"><span id="viewing-text"></span><button type="button" id="back-latest">최신호로 돌아가기 →</button></div><div id="main-root">${r.main}</div></main></div></div><script type="application/json" id="archive-data">${archiveJson}</script><script>${script}</script>${opts.pwa ? `<script>if("serviceWorker" in navigator){addEventListener("load",function(){navigator.serviceWorker.register("sw.js")})}</script>` : ""}</body></html>`;
  }

  // ───────────────── 메일 본문: 데스크톱 웹 디자인을 인라인 스타일로 재현 (모바일 맞춤 금지, 글꼴 Pretendard) ─────────────────
  const F = "'Pretendard Variable',Pretendard,'Malgun Gothic',sans-serif";
  const C = { ink: '#16263b', muted: '#637084', blue: '#265ce0', line: '#e0e6ef', bg: '#f4f6fa' };
  const T = (size, weight, color, extra = '') => `font-family:${F};font-size:${size}px;font-weight:${weight};color:${color};${extra}`;
  const TBL = 'role="presentation" cellpadding="0" cellspacing="0" border="0"';
  const pill = (text, si) => { const b = BADGE[si % BADGE.length]; return `<span style="display:inline-block;padding:3px 8px;border-radius:5px;background:${b.bg};${T(11, 700, b.c)}">${esc(text)}</span>`; };
  const navItems = [['●', '이번 주 핵심', 'summary', true]]
    .concat(d.sections.map((s, i) => [splitLabel(s.label).no, splitLabel(s.label).name, 'section-' + (i + 1), false]))
    .concat([['↗', 'T/F 시사점', 'implications', false]]);
  const nav = navItems.map(([mark, label, id, on]) => `
      <tr><td style="padding:4px 0;"><a href="#${id}" style="display:block;text-decoration:none;border-radius:9px;padding:13px 12px;${on ? 'background:#e7edfb;' : ''}${T(13, on ? 700 : 400, on ? C.blue : C.ink, 'line-height:1.6;')}"><span style="${T(11, 700, on ? C.blue : '#8392ab')}">${esc(mark)}</span>&nbsp;&nbsp;&nbsp;${esc(label)}</a></td></tr>`).join('');

  const numberedMail = (arr, numColor, textColor, lineColor) => arr.map((s, i) => `
      <tr>
        <td valign="top" width="40" style="padding:22px 0 17px 0;border-top:1px solid ${lineColor};${T(12, 800, numColor, 'letter-spacing:1px;line-height:1;')}">${String(i + 1).padStart(2, '0')}</td>
        <td valign="top" style="padding:17px 0;border-top:1px solid ${lineColor};${T(14, 400, textColor, 'line-height:1.85;')}">${esc(s)}</td>
      </tr>`).join('');

  const cardOpen = `<table ${TBL} width="100%" style="border-collapse:separate;background:#ffffff;border:1px solid ${C.line};border-radius:15px;margin:0 0 16px 0;"><tr><td style="padding:24px 28px;">`;
  const cardClose = `</td></tr></table>`;
  const linkRight = (url, text, title) => `<div style="text-align:right;"><a href="${esc(url)}" target="_blank" title="${esc(title || '')}" style="text-decoration:none;${T(12, 700, C.blue)}">${text} <span style="font-size:16px;">↗</span></a></div>`;

  const article = (it, s, si) => `
      ${cardOpen}
        <table ${TBL} width="100%"><tr>
          <td valign="top" width="100%" style="padding:0 24px 14px 0;${T(18, 700, C.ink, 'line-height:1.55;letter-spacing:-0.5px;')}">${esc(it.title)}</td>
          <td valign="top" align="right" width="1%" style="padding:3px 0 14px 0;white-space:nowrap;${T(11, 400, C.muted, 'line-height:1.7;')}">${pill(s.tag, si)}&nbsp;&nbsp;${metaText(it)}</td>
        </tr></table>
        <div style="${T(13, 400, '#5c697b', 'line-height:1.9;margin:0 0 14px 0;')}">${esc(it.body)}</div>
        ${linkRight(it.url, '원문 보기', it.linkText)}
      ${cardClose}`;

  const video = (it, s, si) => `
      <table ${TBL} width="100%" style="border-collapse:separate;background:#ffffff;border:1px solid ${C.line};border-radius:15px;margin:0 0 16px 0;"><tr><td style="padding:20px;">
        <table ${TBL} width="100%"><tr>
          <td valign="top" width="240" style="width:240px;padding:0 24px 0 0;"><a href="${esc(it.url)}" target="_blank" style="display:block;text-decoration:none;">${it.thumbnail ? `<img src="${esc(it.thumbnail)}" width="240" height="135" alt="" style="display:block;width:240px;height:135px;object-fit:cover;border-radius:10px;border:0;">` : `<div style="width:240px;height:135px;border-radius:10px;background:#e6ecfa;"></div>`}</a></td>
          <td valign="top" width="100%">
            <div style="${T(11, 400, C.muted, 'line-height:1.7;margin:0 0 8px 0;')}">${pill(s.tag, si)}&nbsp;&nbsp;${videoMeta(it)}</div>
            <div style="${T(17, 700, C.ink, 'line-height:1.55;letter-spacing:-0.5px;margin:0 0 8px 0;')}">${esc(it.title)}</div>
            <div style="${T(13, 400, '#5c697b', 'line-height:1.9;margin:0 0 10px 0;')}">${esc(it.body)}</div>
            ${linkRight(it.url, '영상 보기')}
          </td>
        </tr></table>
      </td></tr></table>`;

  const th = (t, right) => `<td style="padding:10px 12px;background:#f7f9fc;border-bottom:1px solid ${C.line};${right ? 'text-align:right;' : ''}${T(10, 800, '#7e899a', 'letter-spacing:1.2px;white-space:nowrap;')}">${t}</td>`;
  const bench = (s, si) => {
    const src = s.source || {};
    const rows = (s.rows || []).map((r, k) => {
      const bg = k < 3 ? 'background:#f3f6fe;' : '';
      const td = `padding:11px 12px;border-bottom:1px solid #edf0f5;${bg}`;
      return `<tr>
        <td style="${td}width:44px;${T(13, 800, C.blue)}">${esc(r.rank)}</td>
        <td style="${td}white-space:nowrap;${T(13, 700, C.ink)}">${esc(r.model)}${r.prelim ? `&nbsp;<span style="display:inline-block;padding:1px 6px;border-radius:4px;background:#fff2dd;${T(10, 700, '#926218')}">잠정</span>` : ''}</td>
        <td style="${td}${T(13, 400, C.muted)}">${esc(r.org)}</td>
        <td style="${td}text-align:right;white-space:nowrap;${T(13, 700, C.ink)}">${esc(r.score)}${r.ci ? `<span style="${T(10, 400, C.muted)}"> ±${esc(r.ci)}</span>` : ''}</td>
        <td style="${td}width:140px;"><div style="height:6px;background:#e6ecfa;border-radius:3px;"><div style="height:6px;width:${barPct(s.rows, r.score)}%;background:${C.blue};border-radius:3px;"></div></div></td>
        <td style="${td}text-align:right;${T(12, 400, C.muted)}">${esc(r.votes || '')}</td>
      </tr>`;
    }).join('');
    const cross = s.cross ? `
        <div style="margin:20px 0 0 0;padding:18px 0 0 0;border-top:1px solid ${C.line};">
          <div style="${T(13, 700, C.ink, 'margin:0 0 10px 0;')}">교차 확인 · ${esc(s.cross.name)} <span style="${T(11, 400, C.muted)}">${esc(s.cross.asOf || '')}</span></div>
          <table ${TBL} width="100%" style="border-collapse:collapse;"><tr>${th('순위')}${th('모델')}${th('개발사')}${th('지수', true)}</tr>
          ${s.cross.rows.map((r) => `<tr><td style="padding:9px 12px;border-bottom:1px solid #edf0f5;width:44px;${T(13, 800, C.blue)}">${esc(r.rank)}</td><td style="padding:9px 12px;border-bottom:1px solid #edf0f5;${T(13, 700, C.ink)}">${esc(r.model)}</td><td style="padding:9px 12px;border-bottom:1px solid #edf0f5;${T(13, 400, C.muted)}">${esc(r.org)}</td><td style="padding:9px 12px;border-bottom:1px solid #edf0f5;text-align:right;${T(13, 700, C.ink)}">${esc(r.score)}</td></tr>`).join('')}
          </table>
        </div>` : '';
    return `
      ${cardOpen}
        <div style="${T(11, 400, C.muted, 'line-height:1.7;margin:0 0 14px 0;')}">${pill(s.tag, si)}&nbsp;&nbsp;${esc(src.name || '')}${src.asOf ? '  ·  ' + esc(src.asOf) + ' 기준' : ''}${src.note ? '  ·  ' + esc(src.note) : ''}</div>
        <table ${TBL} width="100%" style="border-collapse:collapse;"><tr>${th('순위')}${th('모델')}${th('개발사')}${th('점수', true)}${th('상대 점수')}${th('투표 수', true)}</tr>${rows}</table>
        ${s.note ? `<div style="${T(13, 400, '#5c697b', 'line-height:1.9;margin:18px 0 0 0;')}">${esc(s.note)}</div>` : ''}
        ${cross}
        <div style="text-align:right;margin:16px 0 0 0;">${src.url ? `<a href="${esc(src.url)}" target="_blank" style="text-decoration:none;${T(12, 700, C.blue)}">${esc(src.name || '순위표')} 보기 <span style="font-size:16px;">↗</span></a>` : ''}${s.cross && s.cross.url ? `&nbsp;&nbsp;&nbsp;&nbsp;<a href="${esc(s.cross.url)}" target="_blank" style="text-decoration:none;${T(12, 700, C.blue)}">${esc(s.cross.name)} 보기 <span style="font-size:16px;">↗</span></a>` : ''}</div>
      ${cardClose}`;
  };

  const section = (s, si) => {
    const { no, name } = splitLabel(s.label);
    const t = typeOf(s);
    const body = t === 'benchmark' ? bench(s, si) : s.items.map((it) => (t === 'video' ? video(it, s, si) : article(it, s, si))).join('');
    return `
    <a name="section-${si + 1}"></a>
    <table ${TBL} width="100%" style="margin:40px 0 18px 0;"><tr>
      <td valign="middle" width="54"><div style="width:40px;height:40px;line-height:40px;text-align:center;background:#e6ecfa;border-radius:12px;${T(13, 800, C.blue)}">${esc(no)}</div></td>
      <td valign="middle"><div style="${T(21, 700, C.ink, 'letter-spacing:-0.8px;line-height:1.3;')}">${esc(name)}</div><div style="${T(12, 400, C.muted, 'margin:5px 0 0 0;')}">${esc(s.title)}</div></td>
      <td valign="middle" align="right" style="white-space:nowrap;${T(9, 400, '#7e899a', 'letter-spacing:1.3px;')}">${countLabel(s)}</td>
    </tr></table>
    ${body}`;
  };

  const edCell = (big, small, first) => `<td valign="top" style="${first ? 'padding:0 28px 0 0;' : 'padding:0 28px;border-left:1px solid ' + C.line + ';'}"><div style="${T(25, 700, C.ink, 'letter-spacing:-1px;line-height:1.2;')}">${big}</div><div style="${T(11, 400, C.muted, 'margin:6px 0 0 0;')}">${small}</div></td>`;
  const edLast = `<td valign="top" style="padding:0 0 0 28px;border-left:1px solid ${C.line};"><div style="${T(25, 700, C.ink, 'letter-spacing:-1px;line-height:1.2;')}">${esc(readMin)}<span style="${T(13, 700, C.ink)}"> min</span></div><div style="${T(11, 400, C.muted, 'margin:6px 0 0 0;')}">예상 읽기 시간</div></td>`;
  const attNote = opts.attachmentName
    ? `<div style="margin:0 12px;${T(11, 400, C.muted, 'line-height:1.7;')}">목차 이동이 되는 전체 버전:<br><b style="color:${C.ink};word-break:break-all;">${esc(opts.attachmentName)}</b> (첨부)</div>`
    : '';

  // 메일 사이드바 하단 ARCHIVE 박스 (최근 6개 호 목록 + 첨부 HTML 안내)
  const fmtArc = (iso) => { const p = iso.split('-'); const w = ['일', '월', '화', '수', '목', '금', '토'][new Date(iso + 'T00:00:00Z').getUTCDay()]; return p[1] + '.' + p[2] + ' (' + w + ')'; };
  const archiveMailBox = `<div style="margin:20px 4px 0 4px;border:1px solid ${C.line};border-radius:12px;background:#ffffff;">
      <div style="padding:12px 12px 8px 12px;${T(10, 800, '#7e899a', 'letter-spacing:1.6px;')}">ARCHIVE&nbsp;&nbsp;<span style="${T(11, 700, C.blue, 'letter-spacing:0;')}">${archiveList.length}개 호</span></div>
      ${archiveList.slice(0, 6).map((x, k) => `<div style="padding:7px 12px;border-top:1px solid #edf0f5;${k === 0 ? 'background:#e7edfb;' : ''}"><div style="${T(12, 700, k === 0 ? C.blue : C.ink)}">${fmtArc(x.date)}${k === 0 ? ' · 이번 호' : ''}</div><div style="${T(11, 400, C.muted, 'margin:2px 0 0 0;')}">${esc(x.data.headline)}</div></div>`).join('')}
      <div style="padding:9px 12px;border-top:1px solid ${C.line};background:#f7f9fc;border-radius:0 0 12px 12px;${T(10, 400, '#7e899a', 'line-height:1.6;')}">지난 호 열람·기사 검색(최근 1년)은 첨부 HTML 왼쪽 아래 ARCHIVE 탭에서 할 수 있습니다.</div>
    </div>`;

  const appMailBox = opts.appUrl ? `<div style="margin:20px 4px 0 4px;border:1px solid ${C.line};border-radius:12px;background:#ffffff;padding:14px 12px;text-align:center;">
      <div style="${T(10, 800, '#7e899a', 'letter-spacing:1.6px;margin:0 0 10px 0;')}">MOBILE APP</div>
      <a href="${esc(opts.appUrl)}" target="_blank" style="text-decoration:none;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=0&data=${encodeURIComponent(opts.appUrl)}" width="140" height="140" alt="앱 QR" style="display:block;margin:0 auto;border:0;width:140px;height:140px;"></a>
      <div style="${T(12, 700, C.ink, 'margin:10px 0 4px 0;')}">스마트폰 앱으로 보기</div>
      <div style="${T(10, 400, C.muted, 'line-height:1.6;')}">QR을 찍고 '홈 화면에 추가'하면<br>앱처럼 매 호를 볼 수 있습니다</div>
      <a href="${esc(opts.appUrl)}" target="_blank" style="display:inline-block;margin:8px 0 0 0;text-decoration:none;${T(11, 700, C.blue)}">앱 열기 ↗</a>
    </div>` : '';
  return `<div style="margin:0;padding:0;background:${C.bg};word-break:keep-all;">
<a name="top"></a>
<table ${TBL} width="100%" style="background:#ffffff;border-bottom:1px solid ${C.line};"><tr><td style="padding:0 32px;">
  <table ${TBL} width="100%" style="max-width:1280px;margin:0 auto;"><tr>
    <td valign="middle" height="76" style="${T(17, 800, C.ink)}"><span style="display:inline-block;background:${C.blue};border-radius:10px;padding:9px;${T(15, 800, '#ffffff', 'line-height:1;')}">AI</span>&nbsp;&nbsp;&nbsp;HR AI Briefing</td>
    <td valign="middle" align="right" style="${T(12, 400, C.muted, 'letter-spacing:1.5px;')}">INTELLIGENCE FOR BETTER WORK</td>
  </tr></table>
</td></tr></table>

<table ${TBL} width="100%" style="background:${C.bg};"><tr><td style="padding:48px 32px 40px 32px;">
<table ${TBL} width="100%" style="max-width:1280px;margin:0 auto;">

<tr><td style="padding:0 0 32px 0;">
  <table ${TBL} width="100%"><tr>
    <td valign="bottom" width="100%" style="padding:0 30px 0 0;">
      <div style="${T(11, 800, C.blue, 'letter-spacing:2px;margin:0 0 14px 0;')}">${esc(eyebrowTop)}</div>
      <div style="${T(42, 700, C.ink, 'letter-spacing:-2px;line-height:1.25;white-space:nowrap;')}">${esc(d.headline)}</div>
      <div style="${T(14, 400, C.muted, 'line-height:1.7;margin:16px 0 0 0;')}">${esc(d.pubDate)}&nbsp;&nbsp;·&nbsp;&nbsp;${esc(d.audience || 'HR AI 도입 T/F')}&nbsp;&nbsp;·&nbsp;&nbsp;읽는 데 ${esc(readMin)}분</div>
    </td>
    <td valign="bottom" align="right" style="white-space:nowrap;">
      <table ${TBL} style="border-collapse:separate;background:#ffffff;border:1px solid ${C.line};border-radius:14px;"><tr><td style="padding:18px 24px;">
        <table ${TBL}><tr>${edCell(total, '수록 콘텐츠', true)}${edCell(String(d.sections.length).padStart(2, '0'), '핵심 주제', false)}${edLast}</tr></table>
      </td></tr></table>
    </td>
  </tr></table>
</td></tr>

<tr><td>
<table ${TBL} width="100%"><tr>
  <td valign="top" width="232" style="width:232px;min-width:232px;padding:0 32px 0 0;">
    <div style="${T(10, 800, '#7e899a', 'letter-spacing:1.6px;margin:8px 12px 14px 12px;')}">IN THIS BRIEFING</div>
    <table ${TBL} width="200">${nav}</table>
    <div style="margin:24px 12px;padding:20px 0 0 0;border-top:1px solid ${C.line};${T(12, 400, C.muted, 'line-height:1.8;')}">${esc(d.audience || 'HR AI 도입 T/F')}<br>${dotDate}<br><br>이번 주 동향부터<br>우리 조직의 시사점까지.</div>
    ${attNote}
    ${appMailBox}
    ${archiveMailBox}
  </td>
  <td valign="top" width="100%">
    <a name="summary"></a>
    <table ${TBL} width="100%" style="border-collapse:separate;background:#182c4c;border-radius:20px;border-right:6px solid #5b87ff;"><tr><td style="padding:30px 32px 13px 32px;">
      <div style="${T(11, 800, '#a9c4ff', 'letter-spacing:2px;margin:0 0 10px 0;')}">THE WEEK AT A GLANCE</div>
      <div style="${T(23, 700, '#ffffff', 'letter-spacing:-0.8px;')}">이번 주 핵심</div>
      <div style="${T(13, 400, '#bac9df', 'margin:8px 0 22px 0;')}">바쁜 분은 이것만 읽으셔도 됩니다</div>
      <table ${TBL} width="100%">${numberedMail(d.summary, '#90b1ff', '#ffffff', '#374864')}</table>
    </td></tr></table>

    ${d.sections.map(section).join('')}

    <a name="implications"></a>
    <table ${TBL} width="100%" style="border-collapse:separate;margin:40px 0 0 0;background:#eaf0fc;border:1px solid #d5e0f6;border-radius:18px;"><tr><td style="padding:30px 32px 13px 32px;">
      <div style="${T(11, 800, C.blue, 'letter-spacing:2px;margin:0 0 10px 0;')}">FOR OUR T/F</div>
      <div style="${T(23, 700, C.ink, 'letter-spacing:-0.8px;')}">우리 T/F가 가져갈 시사점</div>
      <div style="${T(13, 400, C.muted, 'margin:8px 0 22px 0;')}">이번 주 기사를 바탕으로 정리한 제안입니다</div>
      <table ${TBL} width="100%">${numberedMail(d.implications, C.blue, C.ink, '#cfdaee')}</table>
    </td></tr></table>

    <div style="margin:36px 0 0 0;padding:24px 0 0 0;border-top:1px solid ${C.line};">
      <div style="${T(12, 800, C.ink, 'margin:0 0 8px 0;')}">HR AI T/F · WEEKLY BRIEFING</div>
      <div style="${T(11, 400, C.muted, 'line-height:1.9;')}">웹 검색을 바탕으로 자동 작성된 브리핑입니다. 인용 전에 원문을 확인해 주세요.<br>다음 브리핑은 ${esc(d.nextDate)} 오전 7시에 보내드립니다.</div>
      <a href="#top" style="display:inline-block;margin:16px 0 0 0;text-decoration:none;${T(11, 700, C.blue)}">맨 위로 ↑</a>
    </div>
  </td>
</tr></table>
</td></tr>

</table>
</td></tr></table>
</div>`;
}
