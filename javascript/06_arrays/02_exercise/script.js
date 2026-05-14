let shoppingList = [];

function addItem() {
  /**
   * =========================================
   * ここにコードを書いてください（addItem）
   *
   * 要件:
   * - #item-input の値を取得する
   * - 空文字の場合は何もしない
   * - shoppingList に .push() で追加する
   * - <li> 要素を1つ作成してテキストを設定し、#shopping-list に追加する
   * - #count-display に「アイテム数: X件」と更新する
   * - 入力欄をクリアする
   *
   * ヒント:
   * - const li = document.createElement('li'); で li を作成する
   * - li.textContent = value; でテキストを設定する
   * - document.getElementById('shopping-list').appendChild(li); で追加する
   * - shoppingList.length で現在の件数を取得できる
   * =========================================
   */
  const itemInput = document.getElementById('item-input').value;

  if (itemInput != '') {
    shoppingList.push(itemInput);
    //console.log('shoppingList:' + shoppingList);
    const listItem = document.createElement('li');
    listItem.textContent = itemInput;

    document.getElementById('shopping-list').appendChild(listItem);
    document.getElementById('count-display').textContent =
      `アイテム数: ${shoppingList.length}件`;
  }
}

function removeLastItem() {
  /**
   * =========================================
   * ここにコードを書いてください（removeLastItem）
   *
   * 要件:
   * - 配列が空なら何もしない
   * - shoppingList の最後の要素を .pop() で削除する
   * - #shopping-list の最後の <li> を削除する
   * - #count-display を更新する
   *
   * ヒント:
   * - const ul = document.getElementById('shopping-list');
   * - ul.lastElementChild.remove() で最後の要素を削除できる
   * =========================================
   */
  if (shoppingList.length != 0) {
    shoppingList.pop();
    const ul = document.getElementById('shopping-list');
    ul.lastElementChild.remove();
    document.getElementById('count-display').textContent =
      `アイテム数: ${shoppingList.length}件`;
  }
}

function clearItems() {
  /**
   * =========================================
   * ここにコードを書いてください（clearItems）
   *
   * 要件:
   * - shoppingList を空の配列 [] に代入する
   * - #shopping-list の中身を空にする
   * - #count-display を「アイテム数: 0件」に更新する
   *
   * ヒント:
   * - document.getElementById('shopping-list').innerHTML = '' でリストを空にする
   * =========================================
   */
  shoppingList = [];
  document.getElementById('shopping-list').innerHTML = '';
  document.getElementById('count-display').textContent =
    `アイテム数: ${shoppingList.length}件`;
}
