function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * ここに関数 celsiusToFahrenheit を作ってください
 *
 * - 引数: celsius (摂氏の数値)
 * - return: 華氏の数値 (℃ × 9 / 5 + 32)
 * =============================================
 */

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const temps = [0, 20, 37, 100];
  for (let i = 0; i < temps.length; i++) {
    const f = celsiusToFahrenheit(temps[i]);
    addItem(`${temps[i]}℃ → ${f}°F`);
  }
}
