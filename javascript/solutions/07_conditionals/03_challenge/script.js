function showDaysInMonth() {
  // 入力値を数値に変換する
  const month = Number(document.getElementById('month-input').value);
  const year = Number(document.getElementById('year-input').value);

  // うるう年の判定: 4で割り切れる かつ (100で割り切れない または 400で割り切れる)
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // switch 文で月に対応する日数を求める
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      // 三項演算子でうるう年かどうかで日数を決める
      days = isLeapYear ? 29 : 28;
      break;
    default:
      days = null;
  }

  // 結果を表示する
  const leapLabel = isLeapYear ? 'うるう年' : '平年';
  const output = document.getElementById('days-output');
  if (days === null) {
    output.textContent = '無効な月です（1〜12を入力してください）';
  } else {
    output.innerHTML = `
      <p>${year}年 → ${leapLabel}</p>
      <p>${month}月の日数: ${days}日</p>
    `;
  }
}
