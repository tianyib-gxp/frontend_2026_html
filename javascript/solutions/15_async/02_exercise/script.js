function addLog(text) {
  const log = document.getElementById('log');
  const li = document.createElement('li');
  li.textContent = text;
  log.appendChild(li);
}

// delay ms後に callback(message) を呼び出す
function delayMessage(message, delay, callback) {
  setTimeout(() => {
    callback(message);
  }, delay);
}

function run() {
  const log = document.getElementById('log');
  log.innerHTML = '';

  addLog('処理を開始します...');

  // 以下は変更しないでください
  delayMessage('ステップ1: データを取得しました', 500, addLog);
  delayMessage('ステップ2: データを処理しました', 1000, addLog);
  delayMessage('ステップ3: 完了しました！', 1500, addLog);
}
