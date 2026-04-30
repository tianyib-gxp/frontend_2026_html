function processNumbers() {
  // 入力値を取得する
  const input = document.getElementById('numbers-input').value;

  // split(',') でカンマ区切りの文字列を配列にする
  const strArray = input.split(',');

  // map(Number) で文字列の配列を数値の配列に変換する
  const numArray = strArray.map(Number);

  // filter() で偶数だけを取り出す
  const evens = numArray.filter((n) => n % 2 === 0);

  // map() で各要素を2倍にする
  const doubled = evens.map((n) => n * 2);

  // 各ステップの結果を表示する
  const output = document.getElementById('numbers-output');
  output.innerHTML = `
    <p>入力: [${numArray.join(', ')}]</p>
    <p>偶数のみ (filter): [${evens.join(', ')}]</p>
    <p>2倍にした (map): [${doubled.join(', ')}]</p>
  `;
}
