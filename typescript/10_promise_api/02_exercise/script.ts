// ─── 模擬API（型を付けてください） ─────────────────────────

function fetchName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('田中 花子'), 600);
  });
}

function fetchAge(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(22), 400);
  });
}

function fetchCity(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('東京'), 500);
  });
}

// ─── ユーティリティ ─────────────────────────

const list = document.getElementById('result-list') as HTMLUListElement;

function addItem(text: string): void {
  const li: HTMLLIElement = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// ─── ここから実装 ─────────────────────────

/**
 * =============================================
 * runAll を完成させてください
 *
 * 条件:
 * - 戻り値に型を付ける（void）
 * - Promise.all を使う
 * - then の引数に型を付ける
 * - catch にも型を付ける
 *
 * 手順:
 * 1. list.innerHTML = "" でリストをクリア
 * 2. Promise.all([fetchName(), fetchAge(), fetchCity()])
 * 3. .then(([name, age, city]) => { ... })
 *    - addItem("名前: " + name)
 *    - addItem("年齢: " + age)
 *    - addItem("都市: " + city)
 * 4. .catch(err => addItem("エラー: " + err.message))
 * =============================================
 */

function runAll(): void {
  list.innerHTML = '';

  // ここにコードを書いてください
  Promise.all([fetchName(), fetchAge(), fetchCity()])
    .then(([name, age, city]: [string, number, string]) => {
      addItem(name);
      addItem(String(age));
      addItem(city);
    })
    .catch((err) => addItem('エラー: ' + err.message));
}

// HTMLから呼び出す
(window as any).runAll = runAll;
