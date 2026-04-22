let shoppingList = [];

function renderList() {
  /**
   * =========================================
   * ここにコードを書いてください（renderList）
   *
   * 要件:
   * - #shopping-list の中身をクリアする
   * - shoppingList の各アイテムを <li> として追加する
   * - #count-display に「アイテム数: X件」と表示する
   *
   * ヒント:
   * - for...of ループで配列の要素を繰り返す
   * - document.createElement('li') と textContent を使う
   * =========================================
   */
}

function addItem() {
  /**
   * =========================================
   * ここにコードを書いてください（addItem）
   *
   * 要件:
   * - #item-input の値を取得する
   * - 空文字の場合は何もしない
   * - shoppingList に .push() で追加する
   * - 入力欄をクリアする
   * - renderList() を呼んでリストを更新する
   * =========================================
   */
}

function removeLastItem() {
  /**
   * =========================================
   * ここにコードを書いてください（removeLastItem）
   *
   * 要件:
   * - 配列が空なら何もしない
   * - shoppingList の最後の要素を .pop() で削除する
   * - renderList() を呼んでリストを更新する
   * =========================================
   */
}

function clearItems() {
  // ここにコードを書いてください
  // ヒント: shoppingList を [] に代入してから renderList() を呼ぶ
}

// 初期表示
renderList();
