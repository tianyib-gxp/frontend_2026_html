function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// type に応じてプレフィックスを付けてメッセージを表示する
function showMessage(text, type) {
  if (type === 'success') {
    addItem('✅ ' + text);
  } else if (type === 'error') {
    addItem('❌ ' + text);
  } else {
    addItem(text);
  }
}

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  showMessage('保存できました', 'success');
  showMessage('エラーが発生しました', 'error');
}
