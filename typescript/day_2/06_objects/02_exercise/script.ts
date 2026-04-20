function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * 問題：book オブジェクトを完成させる
 *
 * 条件：
 * - 各プロパティに型をつける
 * - describe に戻り値の型をつける
 * =============================================
 */

const book = {
  // ここに実装
};

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  addItem('タイトル: ' + book.title);
  addItem('著者: ' + book.author);
  addItem('出版年: ' + book.year);
  addItem('ページ数: ' + book.pages);
  addItem(book.describe());
}

(window as any).run = run;
