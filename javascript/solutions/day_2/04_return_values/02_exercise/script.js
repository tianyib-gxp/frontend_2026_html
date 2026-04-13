function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// 摂氏を1引数に取り、华氏に変換して返す。公式: (℃ × 9 / 5) + 32
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const temps = [0, 20, 37, 100];
  for (let i = 0; i < temps.length; i++) {
    const f = celsiusToFahrenheit(temps[i]);
    addItem(`${temps[i]}℃ → ${f}°F`);
  }
}
