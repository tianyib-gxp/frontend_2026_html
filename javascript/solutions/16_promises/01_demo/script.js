function addLog(text, listId) {
  const log = document.getElementById(listId || 'log');
  const li = document.createElement('li');
  li.textContent = text;
  log.appendChild(li);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitAndResolve(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

function waitAndReject(reason, ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(reason)), ms);
  });
}

// 成功パターン
function runSuccess() {
  const log = document.getElementById('log');
  log.innerHTML = '';
  addLog('Promise 待機中 (pending)...');

  waitAndResolve('データ取得完了', 600)
    .then((result) => {
      addLog('✓ 履行 (fulfilled): ' + result);
      return result + ' → 加工済み';
    })
    .then((result) => {
      addLog('✓ 2つ目の then: ' + result);
    })
    .catch((err) => {
      addLog('✗ エラー: ' + err.message);
    });
}

// 失敗パターン
function runFail() {
  const log = document.getElementById('log');
  log.innerHTML = '';
  addLog('Promise 待機中 (pending)...');

  waitAndReject('サーバーがダウンしています', 600)
    .then((result) => {
      addLog('✓ 成功: ' + result); // 呼ばれない
    })
    .catch((err) => {
      addLog('✗ 拒否 (rejected) → catch: ' + err.message);
    });
}

// async / await パターン
async function runAsyncAwait() {
  const log = document.getElementById('awLog');
  log.innerHTML = '';
  addLog('async 関数 開始', 'awLog');

  try {
    const result = await waitAndResolve('await で取得成功！', 600);
    addLog('受け取った値: ' + result, 'awLog');
    addLog('次の処理（同期コードに見える）', 'awLog');
  } catch (err) {
    addLog('エラー: ' + err.message, 'awLog');
  }

  addLog('async 関数 完了', 'awLog');
}
