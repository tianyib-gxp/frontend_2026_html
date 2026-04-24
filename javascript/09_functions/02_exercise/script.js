function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * ====================================
 * ここに関数 add を作ってください
 *
 * - 引数: a, b
 * - return: a + b
 * ====================================
 */

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  const result = add(3, 5);
  addItem(result);
}
