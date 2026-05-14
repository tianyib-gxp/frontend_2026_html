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
function addPrime(text: number) {
  const list = document.getElementById('prime-list') as HTMLUListElement;
  const li = document.createElement('li');
  li.textContent = text.toString();
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById('prime-list') as HTMLUListElement;
  list.innerHTML = '';

  // ここに素数ロジックを書く
  for (let i = 2; i <= 50; i++) {
    if (i === 2) {
      addPrime(i);
    }
    if (i % 2 === 0) {
      continue;
    }
    const limit = Math.sqrt(i);
    for (let j = 3; j <= limit; j += 2) {
      if (i % j === 0) continue;
    }
    addPrime(i);
  }

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
