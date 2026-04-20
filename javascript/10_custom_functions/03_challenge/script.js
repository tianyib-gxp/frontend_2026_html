function addItem(text) {
  const list = document.getElementById('cart-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * ===========================================
 * ここに calculateTotal を作ってください
 *
 * - 引数: prices (数値の配列)
 * - return: 合計金額 (数値)
 * ヒント: for文で配列をループして足し合わせる
 * ===========================================
 */

/**
 * ===========================================
 * ここに applyDiscount を作ってください
 *
 * - 引数: total (数値), percent (割引率 0～100)
 * - return: 割引後の金額 (数値)
 * ヒント: total * (1 - percent / 100)
 * ===========================================
 */

function runChallenge() {
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  const prices = [1200, 800, 3500, 650];
  const total = calculateTotal(prices);
  const discounted = applyDiscount(total, 10);

  addItem('合計: ' + total + '円');
  addItem('割引後 (10%引き): ' + discounted + '円');
}
