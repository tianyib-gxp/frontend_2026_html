(function () {
  const lessons = [
    { num: '01', folder: '01_what_is_js',          name: 'JavaScriptとは' },
    { num: '02', folder: '02_variables',            name: '変数' },
    { num: '03', folder: '03_math',                 name: '数値と演算子' },
    { num: '04', folder: '04_strings',              name: '文字列' },
    { num: '05', folder: '05_useful_string_methods',name: '文字列メソッド' },
    { num: '06', folder: '06_arrays',               name: '配列' },
    { num: '07', folder: '07_conditionals',         name: '条件文' },
    { num: '08', folder: '08_loop',                 name: 'ループ' },
    { num: '09', folder: '09_functions',            name: '関数' },
    { num: '10', folder: '10_custom_functions',     name: '独自の関数' },
    { num: '11', folder: '11_return_values',        name: '関数の返値' },
    { num: '12', folder: '12_events',               name: 'イベント入門' },
    { num: '13', folder: '13_objects',              name: 'オブジェクト' },
    { num: '14', folder: '14_json',                 name: 'JSON' },
    { num: '15', folder: '15_async',                name: '非同期JavaScript' },
    { num: '16', folder: '16_promises',             name: 'プロミス' },
    { num: '17', folder: '17_promise_api',          name: 'Promise API' },
  ];

  // sub-folder order: 01_demo → 02_exercise → 03_challenge
  const subFolders = ['01_demo', '02_exercise', '03_challenge'];
  const subNames   = ['デモ', '練習', 'チャレンジ'];

  const path = window.location.pathname.replace(/\\/g, '/');
  const match = path.match(/\/javascript\/(?:solutions\/)?(\d+)_[^/]+\/(0[123])_[^/]+\/index\.html/);
  if (!match) return;

  const currentLessonNum = match[1];
  const currentSubNum    = match[2]; // '01', '02', or '03'

  const lessonIdx = lessons.findIndex(function (l) { return l.num === currentLessonNum; });
  if (lessonIdx === -1) return;

  const subIdx = subFolders.findIndex(function (s) { return s.startsWith(currentSubNum); });
  if (subIdx === -1) return;

  const cur = lessons[lessonIdx];

  // Linear flow: demo → exercise → challenge → next lesson's demo
  var prev, next;

  if (subIdx > 0) {
    // prev: same lesson, previous sub-page
    prev = { href: '../' + subFolders[subIdx - 1] + '/index.html',
             label: '← ' + cur.name + ' ' + subNames[subIdx - 1] };
  } else if (lessonIdx > 0) {
    // prev: previous lesson's challenge
    prev = { href: '../../' + lessons[lessonIdx - 1].folder + '/03_challenge/index.html',
             label: '← ' + lessons[lessonIdx - 1].name + ' チャレンジ' };
  } else {
    prev = null;
  }

  if (subIdx < subFolders.length - 1) {
    // next: same lesson, next sub-page
    next = { href: '../' + subFolders[subIdx + 1] + '/index.html',
             label: cur.name + ' ' + subNames[subIdx + 1] + ' →' };
  } else if (lessonIdx < lessons.length - 1) {
    // next: next lesson's demo
    next = { href: '../../' + lessons[lessonIdx + 1].folder + '/01_demo/index.html',
             label: lessons[lessonIdx + 1].name + ' デモへ →' };
  } else {
    next = null;
  }

  function btnHtml(info, cls) {
    if (!info) return '<span></span>';
    return '<a href="' + info.href + '" class="lnav-btn ' + cls + '">' + info.label + '</a>';
  }

  // Choose forward-button colour based on destination
  var nextCls;
  if (subIdx === 0) {
    nextCls = 'lnav-to-exercise'; // demo → exercise (orange)
  } else if (subIdx === 1) {
    nextCls = 'lnav-to-challenge'; // exercise → challenge (purple)
  } else {
    nextCls = 'lnav-to-demo'; // challenge → next demo (blue)
  }

  var endMsg = !next
    ? '<span class="lnav-end">🎉 全レッスン完了！</span>'
    : '';

  var navHtml =
    '<nav class="lesson-nav">' +
      '<div class="lnav-left">' + (prev ? btnHtml(prev, 'lnav-prev') : '<span></span>') + '</div>' +
      '<div class="lnav-center"><span class="lnav-current">' + cur.name + '&nbsp;' + subNames[subIdx] + '</span></div>' +
      '<div class="lnav-right">' + (next ? btnHtml(next, nextCls) : endMsg) + '</div>' +
    '</nav>';

  var header = document.querySelector('header');
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
    '.lnav-to-exercise{background:#f77f00;color:#fff;}',
    '.lnav-to-exercise:hover{background:#c96200;}',
    '.lnav-to-challenge{background:#7209b7;color:#fff;}',
    '.lnav-to-challenge:hover{background:#560bad;}',
    '.lnav-to-demo{background:#4361ee;color:#fff;}',
    '.lnav-to-demo:hover{background:#3a0ca3;}',
    '.lnav-end{color:#2d6a4f;font-weight:bold;}',
  ].join('\n');
  document.head.appendChild(style);
})();