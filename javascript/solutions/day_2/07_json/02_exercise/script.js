function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
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
  const list = document.getElementById("list");
  list.innerHTML = "";

  // JSON文字列をオブジェクトに変換
  const data = JSON.parse(jsonData);

  // products 配列をループして表示
  for (let i = 0; i < data.products.length; i++) {
    const p = data.products[i];
    // inStock の値に応じて在庫メッセージを切り替える
    const stock = p.inStock ? "在庫：あり" : "在庫なし";
    addItem(`${p.name}: ${p.price}円（${stock}）`);
  }
}
