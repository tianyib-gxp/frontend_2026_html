function addLog(text) {
  const log = document.getElementById('log');
  const li = document.createElement('li');
  li.textContent = text;
  log.appendChild(li);
}

// 500ms後にユーザー情報を callback に渡す
function fetchUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: '田中' });
  }, 500);
}

// 700ms後に注文一覧を callback に渡す
function fetchOrders(user, callback) {
  setTimeout(() => {
    callback({ user: user, orders: ['注文A', '注文B'] });
  }, 700);
}

// 300ms後に注文件数を callback に渡す
function calcTotal(data, callback) {
  setTimeout(() => {
    callback(data.orders.length);
  }, 300);
}

function runChallenge() {
  const log = document.getElementById('log');
  log.innerHTML = '';

  const start = Date.now();

  function elapsed() {
    return `+${Date.now() - start}ms`;
  }

  addLog(`[${elapsed()}] パイプライン開始`);

  // コールバックネスト: fetchUser → fetchOrders → calcTotal の順に実行
  fetchUser(1, (user) => {
    addLog(`[${elapsed()}] ユーザー取得: ${user.name}`);

    fetchOrders(user, (data) => {
      addLog(`[${elapsed()}] 注文取得: ${data.orders.join(', ')}`);

      calcTotal(data, (total) => {
        addLog(`[${elapsed()}] 合計: ${total}件`);
      });
    });
  });
}
