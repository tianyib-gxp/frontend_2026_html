function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function showMessage() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  /**
   * ============================
   * ここにコードを書いてください
   *
   * 「メッセージです」と表示
   * ============================
   */
}
