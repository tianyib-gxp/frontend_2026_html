function addResult(text) {
  const list = document.getElementById('result-list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * 復習：calcBMI を完成させる
 *
 * - 引数に型をつける
 * - 戻り値に型をつける
 * - 小数点2桁にする
 * =============================================
 */
function calcBMI(weight, height) {
  // ここに実装
}

/**
 * =============================================
 * 復習：getBMICategory を完成させる
 *
 * - 引数に型をつける
 * - 戻り値に型をつける
 * =============================================
 */
function getBMICategory(bmi) {
  // ここに実装
}

function runChallenge() {
  const list = document.getElementById('result-list');
  list.innerHTML = '';

  const people = [
    { name: '田中さん', weight: 55, height: 1.7 },
    { name: '佐藤さん', weight: 80, height: 1.65 },
    { name: '山田さん', weight: 48, height: 1.6 },
    { name: '鈴木さん', weight: 100, height: 1.75 },
  ];

  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    const bmi = calcBMI(p.weight, p.height);
    const category = getBMICategory(bmi);

    addResult(`${p.name}: BMI=${bmi} → ${category}`);
  }
}

(window as any).runChallenge = runChallenge;
