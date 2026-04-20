function addLog(text, listId) {
  const log = document.getElementById(listId || 'log');
  const li = document.createElement('li');
  li.textContent = text;
  log.appendChild(li);
}

function runSync() {
  const log = document.getElementById('log');
  log.innerHTML = '';
  addLog('1. 同期: 処理開始');
  addLog('2. 同期: 第2ステップ（即時）');
  addLog('3. 同期: 第3ステップ（即時）');
  addLog('4. 同期: 完了 — 常に順番通り');
}

function runAsync() {
  const log = document.getElementById('log');
  log.innerHTML = '';
  addLog('1. 非同期: 処理開始');
  setTimeout(() => {
    addLog('3. 非同期: setTimeout コールバック（1秒後）');
  }, 1000);
  addLog(
    '2. 非同期: setTimeoutをセット後、すぐ次の行へ → これが先に実行される',
  );
}

function fetchData(callback) {
  setTimeout(() => {
    const data = { user: '田中', score: 92 };
    callback(data);
  }, 800);
}

function runCallback() {
  const log = document.getElementById('cbLog');
  log.innerHTML = '';
  addLog('データ取得中...', 'cbLog');
  fetchData((result) => {
    addLog(
      `受け取ったデータ: ユーザー=${result.user}, スコア=${result.score}`,
      'cbLog',
    );
  });
  addLog('fetchData() を呼んだ直後（まだ結果は来ていない）', 'cbLog');
}
