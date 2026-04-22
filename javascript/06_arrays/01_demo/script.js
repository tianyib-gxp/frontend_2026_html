function addItem(listId, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(listId).appendChild(li);
}

function showBasics() {
  const list = document.getElementById('basics-list');
  list.innerHTML = '';

  const fruits = ['りんご', 'バナナ', 'みかん'];

  addItem('basics-list', `fruits = [${fruits}]`);
  addItem('basics-list', `fruits[0] = "${fruits[0]}"`);
  addItem('basics-list', `fruits[2] = "${fruits[2]}"`);
  addItem('basics-list', `fruits.length = ${fruits.length}`);
  addItem('basics-list', `fruits.indexOf('バナナ') = ${fruits.indexOf('バナナ')}`);
  addItem('basics-list', `fruits.indexOf('スイカ') = ${fruits.indexOf('スイカ')}  （不在は -1）`);
}

function showModify() {
  const list = document.getElementById('modify-list');
  list.innerHTML = '';

  const arr = ['A', 'B', 'C'];
  addItem('modify-list', `初期: [${arr}]`);

  arr.push('D');
  addItem('modify-list', `push('D') → [${arr}]`);

  const popped = arr.pop();
  addItem('modify-list', `pop() → "${popped}" を取り出した → [${arr}]`);

  arr.unshift('Z');
  addItem('modify-list', `unshift('Z') → [${arr}]`);

  const shifted = arr.shift();
  addItem('modify-list', `shift() → "${shifted}" を取り出した → [${arr}]`);

  arr.splice(1, 1);
  addItem('modify-list', `splice(1, 1) → インデックス1を1つ削除 → [${arr}]`);
}

function showTransform() {
  const list = document.getElementById('transform-list');
  list.innerHTML = '';

  const nums = [1, 2, 3, 4, 5, 6];

  const doubled = nums.map((n) => n * 2);
  addItem('transform-list', `nums = [${nums}]`);
  addItem('transform-list', `nums.map(n => n * 2) → [${doubled}]`);

  const evens = nums.filter((n) => n % 2 === 0);
  addItem('transform-list', `nums.filter(n => n % 2 === 0) → [${evens}]`);

  const fruits = ['りんご', 'バナナ', 'みかん'];
  addItem('transform-list', `["りんご","バナナ","みかん"].join(', ') → "${fruits.join(', ')}"`);

  const csv = 'A,B,C,D';
  addItem('transform-list', `"A,B,C,D".split(',') → [${csv.split(',')}]`);
}
