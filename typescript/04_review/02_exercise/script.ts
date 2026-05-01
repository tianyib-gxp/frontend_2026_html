function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * 復習：celsiusToFahrenheit を完成させる
 *
 * これまでの内容を使って実装してください：
 * - 引数の型
 * - 戻り値の型
 * - 変数の型
 * =============================================
 */

function celsiusToFahrenheit(celsius) {
  // ここに実装
}

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  const temps = [0, 20, 37, 100];

  for (let i = 0; i < temps.length; i++) {
    const f = celsiusToFahrenheit(temps[i]);
    addItem(`${temps[i]}℃ → ${f}°F`);
  }
}

(window as any).run = run;
