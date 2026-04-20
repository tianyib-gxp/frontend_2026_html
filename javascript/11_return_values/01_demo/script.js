function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let result = num;
  let x = num - 1;
  while (x > 1) {
    result *= x;
    x--;
  }
  return result;
}

function runDemo() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const num = parseFloat(document.getElementById('numInput').value);
  if (isNaN(num)) {
    addItem('数値を入力してください。');
    return;
  }
  addItem(`${num} の2乗: ${squared(num)}`);
  addItem(`${num} の3乗: ${cubed(num)}`);
  addItem(`${num} の階乗: ${factorial(num)}`);
}
