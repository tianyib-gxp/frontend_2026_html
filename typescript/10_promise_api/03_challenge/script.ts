// ─── 模擬API ─────────────────────────────────────

const requests: Promise<string>[] = [
  new Promise((resolve) => setTimeout(() => resolve('ニュースA取得'), 300)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('ニュースBエラー')), 400),
  ),
  new Promise((resolve) => setTimeout(() => resolve('ニュースC取得'), 250)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('ニュースDエラー')), 350),
  ),
  new Promise((resolve) => setTimeout(() => resolve('ニュースE取得'), 500)),
];

function fetchData(): Promise<string> {
  const ms: number = Math.floor(Math.random() * 1500) + 500;
  return new Promise((resolve) => {
    setTimeout(() => resolve(`データ取得 (${ms}ms)`), ms);
  });
}

// ─── ユーティリティ ─────────────────────────────

function addLog(id: string, text: string): void {
  const ul = document.getElementById(id) as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

function clearLog(id: string): void {
  const ul = document.getElementById(id) as HTMLUListElement;
  ul.innerHTML = '';
}

// ─── 問題1 ─────────────────────────

// Promise.allSettled を使う
function runSettled(): void {
  clearLog('log-settled');

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * ヒント:
   * Promise.allSettled(requests).then(results => {
   *   results は PromiseSettledResult<string>[]
   * })
   *
   * 成功:
   * result.status === "fulfilled"
   *
   * 失敗:
   * result.status === "rejected"
   * =============================================
   */
  Promise.allSettled(requests).then((results) => {
    results.forEach((r) => {
      if (r.status === 'fulfilled')
        addLog('log-settled', `✅ 成功: ${r.value}`);
      else addLog('log-settled', `❌ 失敗: ${r.reason}`);
    });
  });
}

// ─── 問題2 ─────────────────────────

// timeout関数を作る
function timeout(ms: number): Promise<never> {
  /**
   * =============================================
   * ここにコードを書いてください
   *
   * ヒント:
   * setTimeout + reject
   * =============================================
   */
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('タイムアウト')), ms);
  });
}

// Promise.race を使う
function runRace(): void {
  clearLog('log-race');

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * ヒント:
   * Promise.race([fetchData(), timeout(1000)])
   *   .then(...)
   *   .catch(...)
   * =============================================
   */
  Promise.race([fetchData(), timeout(1000)])
    .then((result) => {
      addLog('log-race', '✅ ' + result);
    })
    .catch((err) => {
      addLog('log-race', '⏱️ ' + err.message);
    });
}

// HTMLから呼び出す
(window as any).runSettled = runSettled;
(window as any).runRace = runRace;
