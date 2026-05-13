function calcBMI() {
  // ここにコードを書いてください
  // ヒント: Number() で文字列を数値に変換する
  // ヒント: 身長は cm → m に変換が必要 (÷ 100)
  // ヒント: BMI = 体重 / (身長m * 身長m)
  // ヒント: bmi.toFixed(2) で小数点2桁に丸める
  // ヒント: if/else で判定して document.getElementById('bmi-result').textContent に表示する

  const height = Number(document.getElementById('height').value) / 100;
  const weight = Number(document.getElementById('weight').value);

  const BMI = (weight / (height * height)).toFixed(2);
  console.log(BMI);

  if (BMI < 18.5) {
    console.log('first if');
    document.getElementById('bmi-result').textContent = 'やせ';
  } else if (18.5 <= BMI && BMI < 25) {
    console.log('first else');
    document.getElementById('bmi-result').textContent = '普通';
  } else {
    console.log('second else');
    document.getElementById('bmi-result').textContent = '肥満';
  }
}
