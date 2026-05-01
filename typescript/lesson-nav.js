(function () {
  const lessons = [
    { num: '01', folder: '01_loop',            name: 'ループ',           subs: ['01_demo', '02_exercise', '03_challenge'] },
    { num: '02', folder: '02_functions',       name: '関数',             subs: ['02_exercise', '03_challenge'] },
    { num: '03', folder: '03_custom_functions',name: '独自の関数',       subs: ['02_exercise', '03_challenge'] },
    { num: '04', folder: '04_review',          name: '復習',             subs: ['02_exercise', '03_challenge'] },
    { num: '05', folder: '05_events',          name: 'イベント入門',     subs: ['02_exercise', '03_challenge'] },
    { num: '06', folder: '06_objects',         name: 'オブジェクト',     subs: ['02_exercise', '03_challenge'] },
    { num: '07', folder: '07_json',            name: 'JSON',             subs: ['02_exercise', '03_challenge'] },
    { num: '08', folder: '08_async',           name: '非同期TypeScript', subs: ['02_exercise', '03_challenge'] },
    { num: '09', folder: '09_promises',        name: 'プロミス',         subs: ['02_exercise', '03_challenge'] },
    { num: '10', folder: '10_promise_api',     name: 'Promise API',      subs: ['02_exercise', '03_challenge'] },
  ];

  const subNames = { '01_demo': 'デモ', '02_exercise': '練習', '03_challenge': 'チャレンジ' };

  const path = window.location.pathname.replace(/\\/g, '/');
  const match = path.match(/\/typescript\/(\d+)_[^\/]+\/(0[123])_[^\/]+\/index\.html/);
  if (!match) return;

  const currentLessonNum = match[1];
  const currentSubNum    = match[2]; // '01', '02', or '03'

  const lessonIdx = lessons.findIndex(function (l) { return l.num === currentLessonNum; });
  if (lessonIdx === -1) return;

  const cur = lessons[lessonIdx];
  const currentSub = cur.subs.find(function (s) { return s.startsWith(currentSubNum); });
  if (!currentSub) return;

  const subIdx = cur.subs.indexOf(currentSub);

  var prev, next;

  if (subIdx > 0) {
    // prev: same lesson, previous sub-page
    var prevSub = cur.subs[subIdx - 1];
    prev = { href: '../' + prevSub + '/index.html',
             label: '← ' + cur.name + ' ' + subNames[prevSub] };
  } else if (lessonIdx > 0) {
    // prev: last sub-page of previous lesson
    var prevLesson = lessons[lessonIdx - 1];
    var lastSub = prevLesson.subs[prevLesson.subs.length - 1];
    prev = { href: '../../' + prevLesson.folder + '/' + lastSub + '/index.html',
             label: '← ' + prevLesson.name + ' ' + subNames[lastSub] };
  } else {
    prev = null;
  }

  if (subIdx < cur.subs.length - 1) {
    // next: same lesson, next sub-page
    var nextSub = cur.subs[subIdx + 1];
    next = { href: '../' + nextSub + '/index.html',
             label: cur.name + ' ' + subNames[nextSub] + ' →' };
  } else if (lessonIdx < lessons.length - 1) {
    // next: first sub-page of next lesson
    var nextLesson = lessons[lessonIdx + 1];
    var firstSub = nextLesson.subs[0];
    next = { href: '../../' + nextLesson.folder + '/' + firstSub + '/index.html',
             label: nextLesson.name + ' ' + subNames[firstSub] + 'へ →' };
  } else {
    next = null;
  }

  function btnHtml(info, cls) {
    if (!info) return '<span></span>';
    return '<a href="' + info.href + '" class="lnav-btn ' + cls + '">' + info.label + '</a>';
  }

  // Colour is based on the destination sub-page type
  function nextCls(destSub) {
    if (!destSub) return 'lnav-to-demo';
    if (destSub.startsWith('01')) return 'lnav-to-demo';       // → demo (blue)
    if (destSub.startsWith('02')) return 'lnav-to-exercise';   // → exercise (orange)
    return 'lnav-to-challenge';                                 // → challenge (purple)
  }

  var destSub = next
    ? (subIdx < cur.subs.length - 1 ? cur.subs[subIdx + 1] : lessons[lessonIdx + 1].subs[0])
    : null;

  var endMsg = !next
    ? '<span class="lnav-end">🎉 全レッスン完了！</span>'
    : '';

  var navHtml =
    '<nav class="lesson-nav">' +
      '<div class="lnav-left">' + (prev ? btnHtml(prev, 'lnav-prev') : '<span></span>') + '</div>' +
      '<div class="lnav-center"><span class="lnav-current">' + cur.name + '&nbsp;' + subNames[currentSub] + '</span></div>' +
      '<div class="lnav-right">' + (next ? btnHtml(next, nextCls(destSub)) : endMsg) + '</div>' +
    '</nav>';

  var header = document.querySelector('header.page-header') || document.querySelector('header');
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
