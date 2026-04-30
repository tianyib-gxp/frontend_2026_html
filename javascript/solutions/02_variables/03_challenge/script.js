function calcBMI() {
  // 入力値を文字列として取得し、Number() で数値に変換する
  const heightCm = Number(document.getElementById('height').value);
  const weightKg = Number(document.getElementById('weight').value);

  // 身長を cm から m に変換する
  const heightM = heightCm / 100;

  // BMI を計算する: 体重(kg) ÷ (身長(m) * 身長(m))
  const bmi = weightKg / (heightM * heightM);

  // BMI の判定
  let judgment;
  if (bmi < 18.5) {
    judgment = 'やせ';
  } else if (bmi < 25) {
    judgment = '普通';
  } else {
    judgment = '肥満';
  }

  // 結果を表示する（toFixed(2) で小数点2桁に丸める）
  const result = document.getElementById('bmi-result');
  result.textContent = `BMI: ${bmi.toFixed(2)} → 判定: ${judgment}`;
}
