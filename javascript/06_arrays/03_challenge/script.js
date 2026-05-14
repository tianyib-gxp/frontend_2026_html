function processNumbers() {
  // ここにコードを書いてください
  // ヒント: document.getElementById('numbers-input').value で入力値を取得
  // ヒント: .split(',') でカンマ区切りの文字列を配列にする
  // ヒント: .map(Number) で文字列の配列を数値の配列に変換する
  // ヒント: .filter(n => n % 2 === 0) で偶数だけ取り出す
  // ヒント: .map(n => n * 2) で各要素を2倍にする
  // ヒント: 各ステップの結果を #numbers-output に innerHTML で表示する
  const numbersInput = document.getElementById('numbers-input').value;
  let nums = numbersInput
    .split(',')
    .map(Number)
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2);
  document.getElementById('numbers-output').innerHTML = nums;
}
