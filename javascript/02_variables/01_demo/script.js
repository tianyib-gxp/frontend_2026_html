function addItem(listId, text) {
  const list = document.getElementById(listId);
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function showVariables() {
  const list = document.getElementById('var-list');
  list.innerHTML = '';

  // 変数の宣言と初期化
  let myName = '田中';
  const myAge = 25;
  let isStudent = true;

  addItem('var-list', `myName = "${myName}" (文字列)`);
  addItem('var-list', `myAge = ${myAge} (数値)`);
  addItem('var-list', `isStudent = ${isStudent} (論理値)`);

  // let は再代入できる
  myName = '鈴木';
  addItem('var-list', `myName を再代入後 → "${myName}"`);
}

function showDataTypes() {
  const list = document.getElementById('type-list');
  list.innerHTML = '';

  const num = 42;
  const pi = 3.14;
  const greeting = 'こんにちは';
  const flag = true;
  const fruits = ['りんご', 'バナナ', 'みかん'];
  const person = { name: '花子', age: 22 };

  addItem('type-list', `数値 (整数): ${num} → typeof: "${typeof num}"`);
  addItem('type-list', `数値 (小数): ${pi} → typeof: "${typeof pi}"`);
  addItem('type-list', `文字列: "${greeting}" → typeof: "${typeof greeting}"`);
  addItem('type-list', `論理値: ${flag} → typeof: "${typeof flag}"`);
  addItem('type-list', `配列: [${fruits}] → typeof: "${typeof fruits}"`);
  addItem('type-list', `オブジェクト: {name: "${person.name}", age: ${person.age}} → typeof: "${typeof person}"`);
}
