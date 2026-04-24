function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function runDemo() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const temps = [0, 20, 37, 100];
  for (let i = 0; i < temps.length; i++) {
    const f = celsiusToFahrenheit(temps[i]);
    addItem(temps[i] + '°C → ' + f + '°F');
  }
}
