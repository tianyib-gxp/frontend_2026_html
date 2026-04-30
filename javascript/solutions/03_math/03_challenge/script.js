function calcTip() {
  // 入力値を数値に変換する
  const bill = Number(document.getElementById('bill').value);
  const tipRate = Number(document.getElementById('tip-rate').value);
  const people = Number(document.getElementById('people').value);

  // チップ金額を計算する: 請求金額 * (チップ率 / 100)
  const tipAmount = bill * (tipRate / 100);

  // 合計金額を計算する
  const total = bill + tipAmount;

  // 1人分の金額を計算する
  const perPerson = total / people;

  // 結果を表示する
  const result = document.getElementById('tip-result');
  result.innerHTML = `
    <p>チップ金額: ¥${tipAmount.toFixed(2)}</p>
    <p>合計金額: ¥${total.toFixed(2)}</p>
    <p>1人分: ¥${perPerson.toFixed(2)}</p>
  `;
}
