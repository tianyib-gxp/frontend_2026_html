function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function greet(name) {
  /**
   * ============================
   * ここにコードを書いてください
   *
   * "Hello 太郎" のように表示する
   * ============================
   */
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  greet("太郎");
}
