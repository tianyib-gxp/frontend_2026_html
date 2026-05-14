function calculate(operator) {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #num1 と #num2 の値を Number() で数値に変換する
   * - operator が '+', '-', '*', '/' の場合に対応した計算をする
   * - 結果を #result に表示する
   *   例: "10 + 3 = 13"
   * - '/' の場合、num2 が 0 の場合は「0で割ることはできません」と表示する
   *
   * ヒント:
   * - document.getElementById('num1').value で値を取得できる
   * - if / else if を使って演算子を判定する
   * =========================================
   */
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  //console.log(`num1: ${num1} num2: ${num2}`);
  switch (operator) {
    case '+':
      document.getElementById('result').textContent = num1 + num2;
      break;
    case '-':
      document.getElementById('result').textContent = num1 - num2;
      break;
    case '*':
      document.getElementById('result').textContent = num1 * num2;
      break;
    case '/':
      console.log('enter /');
      if (num2 == 0) {
        console.log('enter 0');
        document.getElementById('result').textContent =
          '0で割ることはできません';
        break;
      } else {
        console.log('enter normal');
        document.getElementById('result').textContent = num1 / num2;
        break;
      }
  }
}
