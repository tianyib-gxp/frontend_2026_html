function addLog(text) {
  const log = document.getElementById('log');
  const li = document.createElement('li');
  li.textContent = text;
  log.appendChild(li);
}

/**
 * =============================================
 * 以下の3つの関数を実装してください
 *
 * fetchUser(id, callback)
 * - 500ms後に { id: id, name: "田中" } を callback に渡す
 *
 * fetchOrders(user, callback)
 * - 700ms後に { user: user, orders: ["注文A", "注文B"] } を callback に渡す
 *
 * calcTotal(data, callback)
 * - 300ms後に data.orders.length を callback に渡す
 *
 * ヒント:
 * function fetchUser(id, callback) {
 *   setTimeout(() => {
 *     callback({ id: id, name: "田中" });
 *   }, 500);
 * }
 * =============================================
 */

function fetchUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: '田中' });
  }, 500);
}

function fetchOrders(user, callback) {
  setTimeout(() => {
    callback({ user: user, orders: ['注文A', '注文B'] });
  }, 700);
}

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

  // ここで fetchUser → fetchOrders → calcTotal の順に呼んでください
  // 各ステップでログを出力し、最後に結果を表示してください
  fetchUser(1, (user) => {
    addLog(`[${elapsed()}] fetchUser ${user.name} 開始`);
    fetchOrders(user, (data) => {
      addLog(`[${elapsed()}] fetchOrders ${data.orders} 開始`);
      calcTotal(data, (total) => {
        addLog(`[${elapsed()}] calcTotal ${total} 開始`);
      });
    });
  });
}
