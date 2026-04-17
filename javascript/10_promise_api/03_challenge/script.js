// ─── 模擬API（変更不要） ─────────────────────────────────────

const requests = [
  new Promise((resolve) => setTimeout(() => resolve("ニュースA取得"), 300)),
  new Promise((_, reject) => setTimeout(() => reject(new Error("ニュースBサーバーエラー")), 400)),
  new Promise((resolve) => setTimeout(() => resolve("ニュースC取得"), 250)),
  new Promise((_, reject) => setTimeout(() => reject(new Error("ニュースD接続タイムアウト")), 350)),
  new Promise((resolve) => setTimeout(() => resolve("ニュースE取得"), 500)),
];

function fetchData() {
  const ms = Math.floor(Math.random() * 1500) + 500; // 500〜2000ms
  return new Promise((resolve) => {
    setTimeout(() => resolve(`データ取得完了 (${ms}ms)`), ms);
  });
}

// ─── ユーティリティ（変更不要） ──────────────────────────────

function addLog(ulId, message) {
  const li = document.createElement("li");
  li.textContent = message;
  document.getElementById(ulId).appendChild(li);
}

function clearLog(ulId) {
  document.getElementById(ulId).innerHTML = "";
}

// ─── ここからコードを書いてください ─────────────────────────

// 問題1: Promise.allSettled() を使って requests を処理してください
// 成功: "✅ 成功: 値"
// 失敗: "❌ 失敗: エラーメッセージ"
// 最後に: "成功X件 / 失敗Y件"

function runSettled() {
  clearLog("log-settled");
  // ここにコードを書いてください
}


// 問題2: timeout(ms) 関数を実装してください
// → ms ミリ秒後に reject(new Error("タイムアウト")) する Promise を返す

function timeout(ms) {
  // ここにコードを書いてください
}

// runRace() を実装してください
// Promise.race([fetchData(), timeout(1000)]) を使う
// 成功なら "✅ " + result を表示
// タイムアウトなら "⏱️ " + err.message を表示

function runRace() {
  clearLog("log-race");
  // ここにコードを書いてください
}
