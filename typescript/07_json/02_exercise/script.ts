function addItem(text: string): void {
  const list = document.getElementById("list") as HTMLUListElement;
  const li: HTMLLIElement = document.createElement("li");

  li.textContent = text;
  list.appendChild(li);
}

const jsonData: string = `{
  "store": "サンプルショップ",
  "products": [
    { "name": "りんご",   "price": 150, "inStock": true  },
    { "name": "バナナ",   "price": 90,  "inStock": true  },
    { "name": "いちご",   "price": 400, "inStock": false },
    { "name": "メロン",   "price": 800, "inStock": true  }
  ]
}`;

/**
 * =============================================
 * ここに型定義を書いてください
 *
 * 例:
 * type Product = { ... }
 * =============================================
 */

function run(): void {
  const list = document.getElementById("list") as HTMLUListElement;
  list.innerHTML = "";

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * 要件:
   * - JSON.parse の結果に型を付ける
   * - products をループする
   * - 表示形式:
   *   ○○: ○○円（在庫:あり）
   *   ○○: ○○円（在庫なし）
   * =============================================
   */

  // 型チェック
  // data.products[0].price = "100";
}

(window as any).run = run;