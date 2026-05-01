function addItem(text) {
  const list = document.getElementById('cart-list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * ===========================================
 * 問題：calculateTotal を完成させる
 *
 * 条件：
 * - prices は数値の配列
 * - 合計を return する
 * ===========================================
 */

function calculateTotal(prices) {
  // ここに実装
}

/**
 * ===========================================
 * 問題：applyDiscount を完成させる
 *
 * 条件：
 * - total と percent に型をつける
 * - 割引後の金額を return する
 * ===========================================
 */

function applyDiscount(total, percent) {
  // ここに実装
}

function runChallenge() {
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  const prices = [1200, 800, 3500, 650];

  const total = calculateTotal(prices);
  const discounted = applyDiscount(total, 10);

  addItem('合計: ' + total + '円');
  addItem('割引後 (10%引き): ' + discounted + '円');

  // 型確認
  // applyDiscount("1000", 10);
}

(window as any).runChallenge = runChallenge;
