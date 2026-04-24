function addPrime(text) {
  const list = document.getElementById('prime-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById('prime-list');
  list.innerHTML = '';

  // ここにfor文を使って2〜50の素数をリスト表示するコードを書いてください
  // ヒント: for文の中にfor文（ネスト）を使う
}
