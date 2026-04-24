function addGrade(text) {
  const list = document.getElementById('grade-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// スコアに応じてA〜Fの評価を返す
// 大きい方の条件から順に判定するのがシンプル
function calculateGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 70) return 'B';
  if (score >= 50) return 'C';
  return 'F';
}

function runChallenge() {
  const list = document.getElementById('grade-list');
  list.innerHTML = '';

  const scores = [95, 82, 67, 55, 40];
  for (let i = 0; i < scores.length; i++) {
    const grade = calculateGrade(scores[i]);
    addGrade('スコア: ' + scores[i] + ' → ' + grade);
  }
}
