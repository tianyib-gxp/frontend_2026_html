(function () {
  const lessons = [
    { num: '01', name: 'Session 1' },
    { num: '02', name: 'Session 2' },
    { num: '03', name: 'Session 3' },
    { num: '04', name: 'Session 4' },
    { num: '05', name: 'Session 5' },
    { num: '06', name: 'Session 6' },
  ];

  const path = window.location.pathname.replace(/\\/g, '/');
  const match = path.match(/\/HTML\/(\d+)\/practice\.html$/);
  if (!match) return;

  const currentNum = match[1];
  const idx = lessons.findIndex(function (lesson) {
    return lesson.num === currentNum;
  });
  if (idx === -1) return;

  const current = lessons[idx];
  const prev = idx > 0
    ? {
        href: '../' + lessons[idx - 1].num + '/practice.html',
        label: '← ' + lessons[idx - 1].name,
      }
    : { href: '../index.html', label: '← HTML一覧' };

  const next = idx < lessons.length - 1
    ? {
        href: '../' + lessons[idx + 1].num + '/practice.html',
        label: lessons[idx + 1].name + ' →',
      }
    : {
        href: '../../CSS/index.html',
        label: 'CSS課題へ進む →',
      };

  const nav = document.createElement('nav');
  nav.className = 'lesson-nav';
  nav.innerHTML =
    '<div class="lnav-left"><a class="lnav-btn lnav-prev" href="' + prev.href + '">' + prev.label + '</a></div>' +
    '<div class="lnav-center"><span class="lnav-current">' + current.name + '</span></div>' +
    '<div class="lnav-right"><a class="lnav-btn lnav-next" href="' + next.href + '">' + next.label + '</a></div>';

  const header = document.querySelector('header.page-header');
  if (header) {
    header.insertAdjacentElement('afterend', nav);
  }

  const style = document.createElement('style');
  style.textContent = [
    '.lesson-nav{',
    '  background:#f1f3f5;border-bottom:2px solid #dee2e6;',
    '  padding:8px 32px;display:flex;align-items:center;justify-content:space-between;',
    '  font-size:13px;flex-wrap:wrap;gap:8px;',
    '}',
    '.lnav-left,.lnav-right{min-width:180px;}',
    '.lnav-right{text-align:right;}',
    '.lnav-center{color:#868e96;font-weight:bold;font-size:12px;text-align:center;}',
    '.lnav-btn{display:inline-block;padding:5px 14px;border-radius:20px;text-decoration:none;font-weight:bold;white-space:nowrap;}',
    '.lnav-prev{border:1px solid #ced4da;color:#495057;background:#fff;}',
    '.lnav-prev:hover{background:#e9ecef;}',
    '.lnav-next{background:#4361ee;color:#fff;}',
    '.lnav-next:hover{background:#2f4acb;}',
    '@media (max-width:640px){',
    '  .lesson-nav{padding:8px 12px;}',
    '  .lnav-left,.lnav-right{min-width:120px;}',
    '}',
  ].join('\n');
  document.head.appendChild(style);
})();