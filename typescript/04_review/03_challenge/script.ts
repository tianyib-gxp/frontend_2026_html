function addResult(text: string) {
  const list = document.getElementById('result-list') as HTMLUListElement;
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
function calcBMI(weight: number, height: number): number {
  // ここに実装
  return parseFloat((weight / (height * height)).toFixed(2));
}

/**
 * =============================================
 * 復習：getBMICategory を完成させる
 *
 * - 引数に型をつける
 * - 戻り値に型をつける
 * =============================================
 */
function getBMICategory(bmi: number): string {
  // ここに実装
  if (bmi < 18.5) {
    return '低体重';
  } else if (bmi < 25) {
    return '普通体重';
  } else if (bmi < 30) {
    return '過体重';
  } else {
    return '肥満';
  }
}

function runChallenge() {
  const list = document.getElementById('result-list') as HTMLUListElement;
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
