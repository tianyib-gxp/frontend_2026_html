// ─── ユーティリティ ──────────────────────────────────────────

function delay(ms, value, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(`失敗: ${value}`));
      else resolve(value);
    }, ms);
  });
}

function addLog(ulId, message) {
  const li = document.createElement('li');
  li.textContent = message;
  document.getElementById(ulId).appendChild(li);
}

function clearLog(ulId) {
  document.getElementById(ulId).innerHTML = '';
}

// ─── デモ関数 ────────────────────────────────────────────────

function demoAll(withFailure) {
  clearLog('log-all');
  const p1 = delay(400, 'ユーザー取得');
  const p2 = delay(700, '注文取得');
  const p3 = withFailure
    ? delay(500, '在庫確認', true)
    : delay(500, '在庫確認');

  Promise.all([p1, p2, p3])
    .then((results) => {
      addLog('log-all', '✅ 全て成功: ' + results.join(', '));
    })
    .catch((err) => {
      addLog('log-all', '❌ ' + err.message);
    });
}

function demoAny(allFail) {
  clearLog('log-any');
  const p1 = delay(800, 'サーバーA', true);
  const p2 = delay(300, 'サーバーB', allFail);
  const p3 = delay(600, 'サーバーC', true);

  Promise.any([p1, p2, p3])
    .then((first) => {
      addLog('log-any', '🏆 最初の成功: ' + first);
    })
    .catch(() => {
      addLog('log-any', '❌ 全て失敗 (AggregateError)');
    });
}

function demoRace() {
  clearLog('log-race');
  const fast = delay(300, '高速サーバー(300ms)');
  const slow = delay(1000, '低速サーバー(1000ms)');

  addLog('log-race', '⏳ 競争開始...');
  Promise.race([fast, slow]).then((winner) => {
    addLog('log-race', '🏁 勝者: ' + winner);
  });
}

function demoAllSettled() {
  clearLog('log-settled');
  const p1 = delay(300, 'タスクA');
  const p2 = delay(500, 'タスクB', true);
  const p3 = delay(400, 'タスクC');

  Promise.allSettled([p1, p2, p3]).then((results) => {
    results.forEach((r) => {
      if (r.status === 'fulfilled') {
        addLog('log-settled', '✅ 成功: ' + r.value);
      } else {
        addLog('log-settled', '❌ 失敗: ' + r.reason.message);
      }
    });
  });
}
