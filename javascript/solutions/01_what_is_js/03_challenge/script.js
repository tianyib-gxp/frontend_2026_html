let isDark = false;

function toggleTheme() {
  const box = document.getElementById('main-box');
  isDark = !isDark;

  if (isDark) {
    // ダークテーマに切替
    box.style.backgroundColor = 'black';
    box.style.color = 'white';
    box.style.borderColor = '#555';
  } else {
    // ライトテーマに切替
    box.style.backgroundColor = 'white';
    box.style.color = 'black';
    box.style.borderColor = '#ccc';
  }
}

function addText() {
  const input = document.getElementById('text-input');
  const value = input.value;

  // 空の場合は何もしない
  if (!value) return;

  // リストアイテムを作成して追加する
  const li = document.createElement('li');
  li.textContent = value;
  document.getElementById('text-list').appendChild(li);

  // 入力欄をクリアする
  input.value = '';
  input.focus();
}

function clearList() {
  // リストを空にする
  document.getElementById('text-list').textContent = '';
}
