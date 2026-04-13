function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // 1〜20までループし、FizzBuzz条件を判定する
  // 15の倍数（3かつ5）を先にチェックするのがポイント
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      addItem("FizzBuzz");
    } else if (i % 3 === 0) {
      addItem("Fizz");
    } else if (i % 5 === 0) {
      addItem("Buzz");
    } else {
      addItem(i);
    }
  }
}
