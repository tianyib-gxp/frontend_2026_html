function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * ここに book オブジェクトを作ってください
 *
 * プロパティ:
 * - title: "JavaScript入門"
 * - author: "田中 一郎"
 * - year: 2023
 * - pages: 320
 *
 * メソッド:
 * - describe(): 「"タイトル"（著者, 年, ページ数ページ）」を return する
 * =============================================
 */

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  addItem("タイトル: " + book.title);
  addItem("著者: " + book.author);
  addItem("出版年: " + book.year);
  addItem("ページ数: " + book.pages);
  addItem(book.describe());
}
