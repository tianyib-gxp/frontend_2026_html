function addLog(text: string): void {
  const log = document.getElementById('log') as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');

  li.textContent = text;
  log.appendChild(li);
}

/**
 * =============================================
 * 問題：delayMessage を完成させる
 *
 * 条件：
 * - 引数に型を付ける
 *   - message: 文字列
 *   - delay: 数値（ミリ秒）
 *   - callback: 文字列を受け取る関数
 *
 * - 戻り値は void にする
 *
 * - setTimeout を使い、
 *   delay ミリ秒後に callback(message) を実行する
 *
 * ヒント：
 * - setTimeout(() => { ... }, delay);
 * - callback(message);
 * =============================================
 */

function delayMessage(
  // ここに型を付けてください
  message: string,
  delay: number,
  callback: (msg: string) => void,
) {
  // ここに実装してください
  setTimeout(() => {
    callback(message);
  }, delay);
}

/**
 * =============================================
 * run 関数にも型を付けてください
 *
 * 条件：
 * - 戻り値は void
 * - DOM取得時に型アサーションを使う
 * =============================================
 */

function run(): void {
  const log = document.getElementById('log') as HTMLUListElement;
  log.innerHTML = '';

  addLog('処理を開始します...');

  delayMessage('ステップ1: データを取得しました', 500, addLog);
  delayMessage('ステップ2: データを処理しました', 1000, addLog);
  delayMessage('ステップ3: 完了しました！', 1500, addLog);
}

// HTMLから呼び出す
(window as any).run = run;
