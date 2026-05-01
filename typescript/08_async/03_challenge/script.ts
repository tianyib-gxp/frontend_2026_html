function addLog(text: string): void {
  const log = document.getElementById('log') as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');

  li.textContent = text;
  log.appendChild(li);
}

/**
 * =============================================
 * 型を定義してください
 *
 * - User
 * - OrderData
 * =============================================
 */

/**
 * =============================================
 * fetchUser を作ってください
 *
 * - 引数:
 *   id (number)
 *   callback (User を受け取る関数)
 *
 * - 500ms後に
 *   { id: id, name: "田中" }
 *   を callback に渡す
 * =============================================
 */

/**
 * =============================================
 * fetchOrders を作ってください
 *
 * - 引数:
 *   user (User)
 *   callback (OrderData を受け取る関数)
 *
 * - 700ms後に
 *   { user, orders: ["注文A", "注文B"] }
 *   を callback に渡す
 * =============================================
 */

/**
 * =============================================
 * calcTotal を作ってください
 *
 * - 引数:
 *   data (OrderData)
 *   callback (number を受け取る関数)
 *
 * - 300ms後に
 *   注文数を callback に渡す
 * =============================================
 */

function runChallenge(): void {
  const log = document.getElementById('log') as HTMLUListElement;
  log.innerHTML = '';

  const start: number = Date.now();

  function elapsed(): string {
    return `+${Date.now() - start}ms`;
  }

  addLog(`[${elapsed()}] パイプライン開始`);

  /**
   * =============================================
   * ここに処理を書いてください
   *
   * fetchUser → fetchOrders → calcTotal の順に実行する
   *
   * 各ステップでログを出す:
   * - ユーザー取得
   * - 注文取得
   * - 合計計算
   *
   * 最後に:
   * 「ユーザー: ○○ / 注文数: ○」
   * を表示する
   * =============================================
   */
}

// HTMLから呼び出す
(window as any).runChallenge = runChallenge;
