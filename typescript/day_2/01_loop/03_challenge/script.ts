/**
 * =========================================
 * 問題1：型をつける
 * =========================================
 *
 * 以下に型をつけてください
 * - addPrime の引数
 * - runBonus の戻り値
 * - list の型
 * - i, j の型
 */
function addPrime(text) {
  const list = document.getElementById('prime-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById('prime-list');
  list.innerHTML = '';

  // ここに素数ロジックを書く

  /**
   * =========================================
   * 問題2：エラーを確認する
   * =========================================
   *
   * 型をつけたあとに以下を試してください
   */

  // addPrime(true);
}

// HTMLから呼び出すために必要
(window as any).runBonus = runBonus;
