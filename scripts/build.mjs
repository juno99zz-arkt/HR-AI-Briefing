// 주간 AI 브리핑 빌드 (GitHub Actions, 2026-11-08)
//   node scripts/build.mjs --check YYYY-MM-DD   : issues JSON 형식 검사만 (Claude 가 작성 후 스스로 실행)
//   node scripts/build.mjs YYYY-MM-DD out/      : 메일 본문·첨부·앱 index.html·옵시디언 노트·기록 행 생성
// 디자인은 briefing/build_email.js, 노트는 briefing/build_obsidian_md.js 가 담당 (Aside 때와 같은 빌더).
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'briefing';
const args = process.argv.slice(2);
const check = args[0] === '--check';
const date = check ? args[1] : args[0];
const out = check ? null : args[1] || 'out';
if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) { console.error('사용법: build.mjs [--check] YYYY-MM-DD [out]'); process.exit(2); }

const load = (file, fn) => new Function(fs.readFileSync(path.join(DIR, file), 'utf8') + `\nreturn ${fn};`)();
const issuePath = path.join(DIR, 'issues', `${date}.json`);
if (!fs.existsSync(issuePath)) { console.error(`없음: ${issuePath}`); process.exit(1); }
const data = JSON.parse(fs.readFileSync(issuePath, 'utf8'));

// ── 형식 검사 ──
const errs = [];
const need = (cond, msg) => { if (!cond) errs.push(msg); };
need(/^\d{1,2}월 .+째 주 AI 브리핑$/.test(data.headline || ''), `headline 형식: ${data.headline}`);
need(/^\d{4}년 \d{1,2}월 \d{1,2}일 월요일$/.test(data.pubDate || ''), `pubDate 형식: ${data.pubDate}`);
need(Array.isArray(data.summary) && data.summary.length === 6, 'summary 6개');
need(Array.isArray(data.implications) && data.implications.length >= 3 && data.implications.length <= 4, 'implications 3~4개');
need(Array.isArray(data.sections) && data.sections.length === 6, 'sections 6개');
(data.sections || []).forEach((s, i) => {
  const no = String(i + 1).padStart(2, '0');
  need(String(s.label || '').startsWith(`${no} · `), `섹션 ${no} label: ${s.label}`);
  if (s.type === 'benchmark') {
    need(Array.isArray(s.rows) && s.rows.length >= 5, `섹션 ${no} rows 5개 이상`);
    need(s.cross && Array.isArray(s.cross.rows), `섹션 ${no} cross.rows`);
    return;
  }
  need(Array.isArray(s.items) && s.items.length >= 2, `섹션 ${no} items 2개 이상`);
  const keys = s.type === 'video' ? ['title', 'channel', 'date', 'views', 'duration', 'url', 'thumbnail', 'body']
                                  : ['title', 'body', 'source', 'date', 'url', 'linkText'];
  (s.items || []).forEach((it, j) => keys.forEach(k => need(it[k], `섹션 ${no} 항목 ${j + 1} ${k} 없음`)));
});
if (errs.length) { console.error('✗ ' + errs.join('\n✗ ')); process.exit(1); }
console.log(`✓ ${issuePath} 형식 통과`);
if (check) process.exit(0);

// ── 빌드 ──
const buildEmail = load('build_email.js', 'buildBriefingEmail');
const buildMd = load('build_obsidian_md.js', 'buildBriefingMarkdown');
const issueFiles = fs.readdirSync(path.join(DIR, 'issues')).filter(f => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
const archive = issueFiles.map(f => JSON.parse(fs.readFileSync(path.join(DIR, 'issues', f), 'utf8')));
const prev = issueFiles.map(f => f.slice(0, 10)).filter(d => d < date).pop();
const attName = `AI_Briefing_${date}.html`;
const appUrl = 'https://juno99zz-arkt.github.io/HR-AI-Briefing/';

fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, `${date}_email.html`), buildEmail(data, { attachmentName: attName, archive, appUrl }));
fs.writeFileSync(path.join(out, attName), buildEmail(data, { standalone: true, archive }));
fs.writeFileSync(path.join(out, 'index.html'), buildEmail(data, { standalone: true, pwa: true, archive }));

const kst = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 16).replace('T', ' ');
const noteName = `${date} 주간 AI 브리핑`;
fs.writeFileSync(path.join(out, `${noteName}.md`),
  buildMd(data, { htmlName: attName, prevNote: prev ? `${prev} 주간 AI 브리핑` : undefined, sentAt: kst, sender: 'GitHub Actions' }));

const [Y, M, D] = date.split('-').map(Number);
const articles = data.sections.filter(s => !s.type || s.type === 'articles').reduce((n, s) => n + s.items.length, 0);
const videos = data.sections.filter(s => s.type === 'video').reduce((n, s) => n + s.items.length, 0);
const top1 = (data.sections.find(s => s.type === 'benchmark')?.rows?.[0]?.model) || '-';
const meta = {
  date, noteName, attName,
  subject: `[주간 AI 브리핑] ${Y}년 ${data.headline.replace(/ AI 브리핑$/, '')} (${M}/${D})`,
  articles, videos, top1,
  archiveRow: `| ${date} | ${data.headline} | ${articles} | ${videos} | ${top1} | ${date}.json |`,
  digestRow: `| ${date} | [[${noteName}]] | ${top1} |`,
};
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify(meta, null, 1));
console.log(`빌드 완료 → ${out}/ (기사 ${articles} · 영상 ${videos} · 벤치마크 1위 ${top1} · 아카이브 ${archive.length}호)`);
