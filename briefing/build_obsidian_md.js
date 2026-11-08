// 주간 AI 브리핑 → 옵시디언 노트(마크다운) 변환기 (2026-10-14)
// 사용법(REPL):
//   const s = await fs.readFile('C:\\Users\\정준오\\.aside\\u\\0\\projects\\주간-AI-브리핑\\build_obsidian_md.js', 'utf8');
//   const toMd = new Function(s + '\nreturn buildBriefingMarkdown;')();
//   const md = toMd(data, { htmlName: 'AI_Briefing_2026-10-12.html', prevNote: '2026-10-05 주간 AI 브리핑', sentAt: '2026-10-12 07:05' });
// 볼트 규칙(projects\옵시디언-정리-루틴\vault-rules.md) 준수: 속성 표준(영역/상태/보안/원본), 위키링크 [[이름]], 태그 3개 이내.
function buildBriefingMarkdown(d, opts = {}) {
  const dm = String(d.pubDate || '').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  const iso = dm ? `${dm[1]}-${dm[2].padStart(2, '0')}-${dm[3].padStart(2, '0')}` : '';
  const one = (s) => String(s ?? '').replace(/\r?\n/g, ' ').trim();
  const cell = (s) => one(s).replace(/\|/g, '\\|');
  const out = [];
  out.push('---');
  out.push(`date: ${iso}`);
  out.push('영역: AI-TF');
  out.push('상태: 완료');
  out.push('보안: 공개');
  out.push('원본: AI 초안');
  out.push('tags: [주간브리핑, AI]');
  out.push(`출처: 주간 AI 브리핑 메일 (${opts.sender || 'GitHub Actions'} 자동 발송)`);
  if (opts.sentAt) out.push(`발송: ${opts.sentAt}`);
  if (opts.recipients) out.push(`수신: ${opts.recipients}`);
  out.push('---');
  out.push('');
  out.push(`# ${one(d.headline)}`);
  out.push('');
  out.push(`> ${one(d.pubDate)} · HR AI 도입 T/F · 읽는 데 ${one(d.readTime || '')}`);
  if (opts.htmlName) out.push(`> 전체 디자인·아카이브 탭 버전: [[${opts.htmlName}]]`);
  const nav = [opts.prevNote ? `← 이전 호 [[${opts.prevNote}]]` : '', '[[주간 AI 브리핑 모음]]'].filter(Boolean).join(' · ');
  out.push(`> ${nav}`);
  out.push('');
  out.push('## 이번 주 핵심');
  d.summary.forEach((s, i) => out.push(`${i + 1}. ${one(s)}`));
  out.push('');
  for (const s of d.sections) {
    out.push(`## ${one(s.label)}`);
    out.push(`*${one(s.title)}*`);
    out.push('');
    const t = s.type || 'articles';
    if (t === 'benchmark') {
      const src = s.source || {};
      out.push(`**${one(src.name)}** · ${one(src.asOf)} 기준${src.note ? ' · ' + one(src.note) : ''}`);
      out.push('');
      out.push('| 순위 | 모델 | 개발사 | 점수 | 투표 수 |');
      out.push('|---:|---|---|---:|---:|');
      for (const r of s.rows || []) out.push(`| ${r.rank} | ${cell(r.model)}${r.prelim ? ' (잠정)' : ''} | ${cell(r.org)} | ${r.score}${r.ci ? ' ±' + r.ci : ''} | ${cell(r.votes || '')} |`);
      out.push('');
      if (s.note) { out.push(one(s.note)); out.push(''); }
      if (s.cross) {
        out.push(`**교차 확인 · ${one(s.cross.name)}** ${one(s.cross.asOf || '')}`);
        out.push('');
        out.push('| 순위 | 모델 | 개발사 | 지수 |');
        out.push('|---:|---|---|---:|');
        for (const r of s.cross.rows || []) out.push(`| ${r.rank} | ${cell(r.model)} | ${cell(r.org)} | ${r.score} |`);
        out.push('');
      }
      const links = [src.url ? `[${one(src.name)}](${src.url})` : '', s.cross && s.cross.url ? `[${one(s.cross.name)}](${s.cross.url})` : ''].filter(Boolean).join(' · ');
      if (links) { out.push(links); out.push(''); }
      continue;
    }
    for (const it of s.items || []) {
      out.push(`### ${one(it.title)}`);
      if (t === 'video') {
        out.push(`\`${one(s.tag)}\` ${[it.channel, it.date, it.views ? '조회수 ' + it.views : '', it.duration].filter(Boolean).map(one).join(' · ')}`);
        out.push('');
        if (it.thumbnail) { out.push(`[![썸네일|320](${it.thumbnail})](${it.url})`); out.push(''); }
        out.push(one(it.body));
        out.push('');
        out.push(`[영상 보기](${it.url})`);
      } else {
        out.push(`\`${one(s.tag)}\` ${one(it.source)}${it.date ? ' · ' + one(it.date) : ''}`);
        out.push('');
        out.push(one(it.body));
        out.push('');
        out.push(`[원문 보기${it.linkText ? ' — ' + one(it.linkText).replace(/[\[\]]/g, '') : ''}](${it.url})`);
      }
      out.push('');
    }
  }
  out.push('## 우리 T/F가 가져갈 시사점');
  d.implications.forEach((s, i) => out.push(`${i + 1}. ${one(s)}`));
  out.push('');
  out.push('---');
  out.push(`*웹 검색 기반 자동 작성 브리핑입니다. 인용 전 원문을 확인하세요. 다음 브리핑: ${one(d.nextDate)} 07:00*`);
  out.push('');
  return out.join('\n');
}
