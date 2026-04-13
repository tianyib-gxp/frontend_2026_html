function addResult(text) {
  const list = document.getElementById("result-list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// BMI = 体重(kg) / (身長(m) ^ 2)、小数点2桁で丸める
function calcBMI(weight, height) {
  return parseFloat((weight / (height * height)).toFixed(2));
}

// BMI値から体型カテゴリーを判定
// 18.5未満→低体重、25未満→普通体重、30未満→過体重、それ以上→肥満
function getBMICategory(bmi) {
  if (bmi < 18.5) return "低体重";
  if (bmi < 25)   return "普通体重";
  if (bmi < 30)   return "過体重";
  return "肥満";
}

function runChallenge() {
  const list = document.getElementById("result-list");
  list.innerHTML = "";

  const people = [
    { name: "田中さん", weight: 55, height: 1.70 },
    { name: "佐藤さん", weight: 80, height: 1.65 },
    { name: "山田さん", weight: 48, height: 1.60 },
    { name: "鈴木さん", weight: 100, height: 1.75 },
  ];

  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    const bmi = calcBMI(p.weight, p.height);
    const category = getBMICategory(bmi);
    addResult(`${p.name}: BMI=${bmi} → ${category}`);
  }
}
