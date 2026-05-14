function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById('list');

  // リセット
  list.innerHTML = '';

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - for文を使う（1〜20）
   * - 条件分岐を使う（if）
   * - FizzBuzzルールに従う
   *
   * ヒント:
   * - %（余り）を使う
   * =========================================
   */

  for (let i = 1; i <= 20; i++) {
    if (i % 15 == 0) {
      addItem('FizzBuzz');
    } else if (i % 3 == 0) {
      addItem('Fizz');
    } else if (i % 5 == 0) {
      addItem('Buzz');
    } else {
      addItem(String(i));
    }
  }
}
