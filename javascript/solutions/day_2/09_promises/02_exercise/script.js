function addLog(text) {
  const log = document.getElementById("log");
  const li = document.createElement("li");
  li.textContent = text;
  log.appendChild(li);
}

// 模擬APIリクエスト（変更しないでください）
function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url.includes("error")) {
        resolve({ status: "error", data: null });
      } else {
        resolve({ status: "ok", data: ["商品A", "商品B", "商品C"] });
      }
    }, 800);
  });
}

function run(url) {
  const log = document.getElementById("log");
  log.innerHTML = "";
  addLog(`リクエスト中... (${url})`);

  // Promiseチェーン: 取得→ステータス確認→表示
  mockFetch(url)
    .then((response) => {
      // status が "ok" でなければエラーとして扱う
      if (response.status !== "ok") throw new Error("取得失敗");
      return response.data; // 次の .then に data を渡す
    })
    .then((data) => {
      addLog("取得成功: " + data.length + "件");
    })
    .catch((err) => {
      addLog("エラー発生: " + err.message);
    });
}
