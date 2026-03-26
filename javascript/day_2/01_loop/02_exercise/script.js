function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById("list");

  // リセット
  list.innerHTML = "";

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - for文を使う
   * - 1から10まで繰り返す
   * - 偶数のみ表示する
   *
   * ヒント:
   * - if を使う
   * =========================================
   */
}
