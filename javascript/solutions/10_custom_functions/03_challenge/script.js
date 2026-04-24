function addItem(text) {
  const list = document.getElementById('cart-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// 価格配列の合計を計算して返す
function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

// 合計金額に割引率を適用して返す（percentは0〜100）
function applyDiscount(total, percent) {
  return total * (1 - percent / 100);
}

function runChallenge() {
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  const prices = [1200, 800, 3500, 650];
  const total = calculateTotal(prices);
  const discounted = applyDiscount(total, 10);

  addItem('合計: ' + total + '円');
  addItem('割引後 (10%引き): ' + discounted + '円');
}
