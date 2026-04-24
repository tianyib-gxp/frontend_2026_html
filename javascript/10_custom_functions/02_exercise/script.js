function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =====================================
 * ここに関数を書いてください
 *
 * showMessage(text, type)
 * =====================================
 */

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  showMessage('保存できました', 'success');
  showMessage('エラーが発生しました', 'error');
}
