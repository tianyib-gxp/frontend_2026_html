function addItem(listId, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(listId).appendChild(li);
}

function showArithmetic() {
  const list = document.getElementById('arith-list');
  list.innerHTML = '';

  const a = 10;
  const b = 3;

  addItem('arith-list', `${a} + ${b} = ${a + b}`);
  addItem('arith-list', `${a} - ${b} = ${a - b}`);
  addItem('arith-list', `${a} * ${b} = ${a * b}`);
  addItem('arith-list', `${a} / ${b} = ${a / b}`);
  addItem('arith-list', `${a} % ${b} = ${a % b}  （余り）`);
  addItem('arith-list', `2 ** 10 = ${2 ** 10}  （べき乗）`);
}

function showAssignment() {
  const list = document.getElementById('assign-list');
  list.innerHTML = '';

  let x = 10;
  addItem('assign-list', `初期値: x = ${x}`);
  x += 5;
  addItem('assign-list', `x += 5 → x = ${x}`);
  x -= 3;
  addItem('assign-list', `x -= 3 → x = ${x}`);
  x *= 2;
  addItem('assign-list', `x *= 2 → x = ${x}`);
  x /= 4;
  addItem('assign-list', `x /= 4 → x = ${x}`);
  x **= 2;
  addItem('assign-list', `x **= 2 → x = ${x}`);
}

function showComparison() {
  const list = document.getElementById('compare-list');
  list.innerHTML = '';

  addItem('compare-list', `5 === 5 → ${5 === 5}`);
  addItem('compare-list', `5 === "5" → ${5 === '5'}  （型が違う！）`);
  addItem('compare-list', `5 !== 3 → ${5 !== 3}`);
  addItem('compare-list', `3 < 5 → ${3 < 5}`);
  addItem('compare-list', `5 > 3 → ${5 > 3}`);
  addItem('compare-list', `5 <= 5 → ${5 <= 5}`);
  addItem('compare-list', `5 >= 6 → ${5 >= 6}`);
}
