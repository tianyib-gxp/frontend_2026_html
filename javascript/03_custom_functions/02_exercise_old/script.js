function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function showMessage(text) {
  /**
   * ============================
   * ここにコードを書いてください
   *
   * text を表示する
   * ============================
   */
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  showMessage("こんにちは！");
  showMessage("Good job!");
}
