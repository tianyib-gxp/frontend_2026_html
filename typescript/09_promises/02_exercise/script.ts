function addLog(text: string): void {
  const log = document.getElementById('log') as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');

  li.textContent = text;
  log.appendChild(li);
}

/**
 * =============================================
 * 型定義を作ってください
 *
 * ヒント:
 * - status: "ok" | "error"
 * - data: string[] | null
 * =============================================
 */
type ApiResponse = {
  status: 'ok' | 'error';
  data: string[] | null;
};

/**
 * 模擬APIリクエスト（型を付けてください）
 */
function mockFetch(url: string): Promise<ApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url.includes('error')) {
        resolve({ status: 'error', data: null });
      } else {
        resolve({
          status: 'ok',
          data: ['商品A', '商品B', '商品C'],
        });
      }
    }, 800);
  });
}

function run(url: string): void {
  const log = document.getElementById('log') as HTMLUListElement;
  log.innerHTML = '';

  addLog(`リクエスト中... (${url})`);

  /**
   * =============================================
   * ここに Promise チェーンを書いてください
   *
   * 要件:
   * 1. mockFetch(url) を呼ぶ
   * 2. .then((response: ApiResponse) => { ... })
   *    - status が "ok" でなければ throw new Error("取得失敗")
   *    - okなら response.data を return
   * 3. .then((data: string[]) => { ... })
   *    - addLog("取得成功: " + data.length + "件")
   * 4. .catch((err: Error) => { ... })
   *    - addLog("エラー発生: " + err.message)
   * =============================================
   */
  mockFetch(url)
    .then((response: ApiResponse) => {
      if (response.status != 'ok' || !response.data) {
        throw new Error('取得失敗');
      } else {
        return response.data;
      }
    })
    .then((data: string[]) => {
      addLog('取得成功: ' + data.length + '件');
    })
    .catch((err: Error) => {
      addLog('エラー発生: ' + err.message);
    });
}

// HTMLから呼び出すため
(window as any).run = run;
