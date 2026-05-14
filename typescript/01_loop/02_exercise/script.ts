function addItem(text: string | number): void {
  const list = document.getElementById('list') as HTMLUListElement;
  const li = document.createElement('li');
  li.textContent = text.toString();
  list.appendChild(li);
}

function runLoop(): void {
  const list = document.getElementById('list') as HTMLUListElement;

  // リセット
  list.innerHTML = '';

  /**
   * =========================================
   * 問題1：型をつける
   * =========================================
   *
   * 以下に型をつけてください
   *
   * 対象：
   * - addItem の引数
   * - runLoop の戻り値
   * - list の型
   * - li の型
   * - i の型
   */
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      addItem('FizzBuzz');
    } else if (i % 3 === 0) {
      addItem('Fizz');
    } else if (i % 5 === 0) {
      addItem('Buzz');
    } else {
      addItem(i);
    }
  }

  /**
   * =========================================
   * 問題2：エラーを確認する
   * =========================================
   *
   * 以下のコードを有効にして、
   * なぜエラーになるか確認してください
   */

  // addItem(true);
}
