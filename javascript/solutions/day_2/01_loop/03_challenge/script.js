function addPrime(text) {
  const list = document.getElementById("prime-list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById("prime-list");
  list.innerHTML = "";

  // 外側ループ: 2〜50の各数字を候補にする
  for (let i = 2; i <= 50; i++) {
    let isPrime = true;

    // 内側ループ: 2〜(i-1)で割り切れるか確認
    // 割り切れたら素数ではない
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break; // 一度割り切れたら内側ループを抜ける
      }
    }

    if (isPrime) {
      addPrime(i);
    }
  }
}
