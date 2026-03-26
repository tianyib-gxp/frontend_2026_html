function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById("list");

  // リストをリセット（前の結果を削除）
  list.innerHTML = "";

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - for文を使う
   * - 1から5まで繰り返す
   * - ループの中で addItem(i) を呼ぶ
   *
   * 例:
   * addItem(1)
   * addItem(2)
   * ...
   * =========================================
   */
}
