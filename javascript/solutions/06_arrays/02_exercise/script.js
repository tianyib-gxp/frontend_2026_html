let shoppingList = [];

function renderList() {
  // リストをクリアする
  const ul = document.getElementById('shopping-list');
  ul.innerHTML = '';

  // shoppingList の各アイテムを <li> として追加する
  for (const item of shoppingList) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }

  // 件数を表示する
  document.getElementById('count-display').textContent = `アイテム数: ${shoppingList.length}件`;
}

function addItem() {
  const input = document.getElementById('item-input');
  const value = input.value;

  // 空文字の場合は何もしない
  if (!value) return;

  // push() で配列に追加する
  shoppingList.push(value);

  // 入力欄をクリアしてフォーカスを戻す
  input.value = '';
  input.focus();

  // リストを再描画する
  renderList();
}

function removeLastItem() {
  // 配列が空なら何もしない
  if (shoppingList.length === 0) return;

  // pop() で最後の要素を削除する
  shoppingList.pop();

  renderList();
}

function clearItems() {
  // 配列を空にする
  shoppingList = [];
  renderList();
}

// 初期表示
renderList();
