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
}
