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
  const idx = lessons.findIndex(function (l) { return l.num === currentNum; });
  if (idx === -1) return;

  const cur = lessons[idx];

  var prev = idx > 0
    ? { href: '../' + lessons[idx - 1].num + '/practice.html', label: '← ' + lessons[idx - 1].name }
    : null;

  var next = idx < lessons.length - 1
    ? { href: '../' + lessons[idx + 1].num + '/practice.html', label: lessons[idx + 1].name + ' →' }
    : null;

  function btnHtml(info, cls) {
    if (!info) return '<span></span>';
    return '<a href="' + info.href + '" class="lnav-btn ' + cls + '">' + info.label + '</a>';
  }

  var endMsg = !next
    ? btnHtml({ href: '../../CSS/index.html', label: 'CSS課題へ進む →' }, 'lnav-to-css')
    : '';

  var navHtml =
    '<nav class="lesson-nav">' +
      '<div class="lnav-left">' + btnHtml(prev, 'lnav-prev') + '</div>' +
      '<div class="lnav-center"><span class="lnav-current">' + cur.name + '</span></div>' +
      '<div class="lnav-right">' + (next ? btnHtml(next, 'lnav-next') : endMsg) + '</div>' +
    '</nav>';

  var header = document.querySelector('header.page-header');
  if (header) header.insertAdjacentHTML('afterend', navHtml);

  var style = document.createElement('style');
  style.textContent = [
    '.lesson-nav{',
    '  background:#f1f3f5;border-bottom:2px solid #dee2e6;',
    '  padding:8px 32px;display:flex;align-items:center;justify-content:space-between;',
    '  font-size:13px;flex-wrap:wrap;gap:8px;',
    '}',
    '.lnav-left,.lnav-right{min-width:180px;}',
    '.lnav-right{text-align:right;}',
    '.lnav-center{color:#868e96;font-weight:bold;font-size:12px;text-align:center;}',
    '.lnav-btn{',
    '  display:inline-block;padding:5px 14px;border-radius:20px;',
    '  text-decoration:none;font-weight:bold;white-space:nowrap;',
    '}',
    '.lnav-prev{border:1px solid #ced4da;color:#495057;background:#fff;}',
    '.lnav-prev:hover{background:#e9ecef;}',
    '.lnav-next{background:#4361ee;color:#fff;}',
    '.lnav-next:hover{background:#3a0ca3;}',
    '.lnav-to-css{background:#f77f00;color:#fff;}',
    '.lnav-to-css:hover{background:#c96200;}',
  ].join('\n');
  document.head.appendChild(style);
})();