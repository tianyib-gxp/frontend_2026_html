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

  /**
   * =============================================
   * ここに mockFetch(url) を使った Promise チェーンを書いてください
   *
   * 要件:
   * 1. mockFetch(url) を呼ぶ
   * 2. .then(response => { ... })
   *    - response.status が "ok" でなければ throw new Error("取得失敗")
   *    - "ok" なら response.data を return する
   * 3. .then(data => { ... })
   *    - addLog("取得成功: " + data.length + "件") を呼ぶ
   * 4. .catch(err => { ... })
   *    - addLog("エラー発生: " + err.message) を呼ぶ
   * =============================================
   */
}
