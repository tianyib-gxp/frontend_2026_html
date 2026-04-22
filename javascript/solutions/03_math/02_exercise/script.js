function calculate(operator) {
  // Number() で入力値を数値に変換する
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);

  let answer;
  let symbol;

  // 演算子に応じて計算する
  if (operator === '+') {
    answer = num1 + num2;
    symbol = '+';
  } else if (operator === '-') {
    answer = num1 - num2;
    symbol = '-';
  } else if (operator === '*') {
    answer = num1 * num2;
    symbol = '×';
  } else if (operator === '/') {
    // 0での割り算を防ぐ
    if (num2 === 0) {
      document.getElementById('result').textContent = '0で割ることはできません';
      return;
    }
    answer = num1 / num2;
    symbol = '÷';
  }

  // 結果を表示する
  document.getElementById('result').textContent = `${num1} ${symbol} ${num2} = ${answer}`;
}
