function addLog(text) {
  const log = document.getElementById("log");
  const li = document.createElement("li");
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

function runChallenge() {
  const log = document.getElementById("log");
  log.innerHTML = "";

  const start = Date.now();

  function elapsed() {
    return `+${Date.now() - start}ms`;
  }

  addLog(`[${elapsed()}] パイプライン開始`);

  // ここで fetchUser → fetchOrders → calcTotal の順に呼んでください
  // 各ステップでログを出力し、最後に結果を表示してください
}
