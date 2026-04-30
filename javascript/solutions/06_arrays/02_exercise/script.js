let shoppingList = [];

function addItem() {
  const input = document.getElementById('item-input');
  const value = input.value;

  // 空文字の場合は何もしない
  if (!value) return;

  // 配列に追加する
  shoppingList.push(value);

  // DOM に <li> を1つ追加する（ループ不要）
  const li = document.createElement('li');
  li.textContent = value;
  document.getElementById('shopping-list').appendChild(li);

  // 件数を更新する
  document.getElementById('count-display').textContent = `アイテム数: ${shoppingList.length}件`;

  // 入力欄をクリアしてフォーカスを戻す
  input.value = '';
  input.focus();
}

function removeLastItem() {
  // 配列が空なら何もしない
  if (shoppingList.length === 0) return;

  // 配列から最後の要素を削除する
  shoppingList.pop();

  // DOM から最後の <li> を削除する
  const ul = document.getElementById('shopping-list');
  ul.lastElementChild.remove();

  // 件数を更新する
  document.getElementById('count-display').textContent = `アイテム数: ${shoppingList.length}件`;
}

function clearItems() {
  // 配列を空にする
  shoppingList = [];

  // リストをクリアする
  document.getElementById('shopping-list').innerHTML = '';

  // 件数を更新する
  document.getElementById('count-display').textContent = 'アイテム数: 0件';
}
