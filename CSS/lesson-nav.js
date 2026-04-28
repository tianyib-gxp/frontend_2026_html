(function () {
  const lessons = [
    { num: '01', name: 'width/height' },
    { num: '02', name: 'margin/padding' },
    { num: '03', name: 'セレクター' },
    { num: '04', name: 'display' },
    { num: '05', name: 'position' },
    { num: '06', name: 'z-index' },
    { num: '07', name: 'テキスト' },
    { num: '08', name: 'Flexbox' },
    { num: '09', name: 'max-width' },
    { num: '10', name: 'overflow' },
    { num: '11', name: '背景' },
  ];

  const path = window.location.pathname.replace(/\\/g, '/');
  const match = path.match(/\/(\d+)\/(demo|practice)\.html/);
  if (!match) return;

  const currentNum = match[1];
  const currentType = match[2];
  const idx = lessons.findIndex(function (l) { return l.num === currentNum; });
  if (idx === -1) return;

  const isDemo = currentType === 'demo';
  const cur = lessons[idx];

  // 線形フロー: 01説明 → 01練習 → 02説明 → 02練習 → ...
  // 説明ページ: prev = 前レッスンの練習 / next = 同レッスンの練習
  // 練習ページ: prev = 同レッスンの説明 / next = 次レッスンの説明
  var prev, next;
  if (isDemo) {
    prev = idx > 0
      ? { href: '../' + lessons[idx - 1].num + '/practice.html', label: '← ' + lessons[idx - 1].name + ' 練習' }
      : null;
    next = { href: './practice.html', label: cur.name + ' 練習問題へ →', isPrimary: true };
  } else {
    prev = { href: './demo.html', label: '← ' + cur.name + ' 説明' };
    next = idx < lessons.length - 1
      ? { href: '../' + lessons[idx + 1].num + '/demo.html', label: lessons[idx + 1].name + ' 説明へ →', isPrimary: true }
      : null;
  }

  function btnHtml(info, cls) {
    if (!info) return '<span></span>';
    return '<a href="' + info.href + '" class="lnav-btn ' + cls + '">' + info.label + '</a>';
  }

  var endMsg = (!next && !isDemo)
    ? '<span class="lnav-end">🎉 全レッスン完了！</span>'
    : '';

  var navHtml =
    '<nav class="lesson-nav">' +
      '<div class="lnav-left">' + (prev ? btnHtml(prev, 'lnav-prev') : '') + '</div>' +
      '<div class="lnav-center"><span class="lnav-current">' + cur.name + '&nbsp;' + (isDemo ? '説明' : '練習') + '</span></div>' +
      '<div class="lnav-right">' + (next ? btnHtml(next, 'lnav-next' + (isDemo ? ' lnav-to-practice' : ' lnav-to-demo')) : endMsg) + '</div>' +
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
    '.lnav-to-practice{background:#f77f00;color:#fff;}',
    '.lnav-to-practice:hover{background:#c96200;}',
    '.lnav-to-demo{background:#4361ee;color:#fff;}',
    '.lnav-to-demo:hover{background:#3a0ca3;}',
    '.lnav-end{color:#2d6a4f;font-weight:bold;}',
  ].join('\n');
  document.head.appendChild(style);
})();
