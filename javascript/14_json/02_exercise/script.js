function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

const jsonData = `{
  "store": "サンプルショップ",
  "products": [
    { "name": "りんご",   "price": 150, "inStock": true  },
    { "name": "バナナ",   "price": 90,  "inStock": true  },
    { "name": "いちご",   "price": 400, "inStock": false },
    { "name": "メロン",   "price": 800, "inStock": true  }
  ]
}`;

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * 要件:
   * 1. jsonData を JSON.parse() でオブジェクトにする
   * 2. products 配列をループする
   * 3. 各商品を「○○: ○○円（在庫:あり）」または
   *    「○○: ○○円（在庫なし）」の形式で addItem() に渡す
   * =============================================
   */
}
