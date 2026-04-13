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

  // allSettled は全て完了待ち。拒否しない
  Promise.allSettled(requests).then((results) => {
    let ok = 0;
    let fail = 0;

    results.forEach((r) => {
      if (r.status === "fulfilled") {
        addLog("log-settled", "✅ 成功: " + r.value);
        ok++;
      } else {
        addLog("log-settled", "❌ 失敗: " + r.reason.message);
        fail++;
      }
    });

    addLog("log-settled", `成功${ok}件 / 失敗${fail}件`);
  });
}

// ms ミリ秒後に拒否する Promise を返すタイムアウト関数
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("タイムアウト")), ms);
  });
}

function runRace() {
  clearLog("log-race");

  // race: 最初に結果を返した方が勝つ。timeout が先に発火すればタイムアウト
  Promise.race([fetchData(), timeout(1000)])
    .then((result) => {
      addLog("log-race", "✅ " + result);
    })
    .catch((err) => {
      addLog("log-race", "⏱️ " + err.message);
    });
}
