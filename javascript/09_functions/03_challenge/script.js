function addGrade(text) {
  const list = document.getElementById('grade-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * ================================================
 * ここに関数 calculateGrade を作ってください
 *
 * - 引数: score (数値)
 * - return: "A" / "B" / "C" / "F"
 *   - 90以上 → "A"
 *   - 70以上 → "B"
 *   - 50以上 → "C"
 *   - それ以外 → "F"
 * ================================================
 */

function runChallenge() {
  const list = document.getElementById('grade-list');
  list.innerHTML = '';

  const scores = [95, 82, 67, 55, 40];
  for (let i = 0; i < scores.length; i++) {
    const grade = calculateGrade(scores[i]);
    addGrade('スコア: ' + scores[i] + ' → ' + grade);
  }
}
