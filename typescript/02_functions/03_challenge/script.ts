/**
 * ================================================
 * 問題：calculateGrade を完成させてください
 *
 * 条件：
 * - 引数に型をつける
 * - 戻り値の型を自分で考える
 *
 * ヒント：
 * - "A" / "B" / "C" / "F" のどれかを返す
 * ================================================
 */
function addGrade(text) {
  const list = document.getElementById('grade-list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

function calculateGrade(score) {
  // ここに実装
}

function runChallenge() {
  const list = document.getElementById('grade-list');
  list.innerHTML = '';

  const scores = [95, 82, 67, 55, 40];

  for (let i = 0; i < scores.length; i++) {
    const grade = calculateGrade(scores[i]);
    addGrade('スコア: ' + scores[i] + ' → ' + grade);
  }

  /**
   * =========================================
   * 確認用（型をつけたあとに試す）
   * =========================================
   */

  // calculateGrade("90");
}

// HTMLから呼び出すために必要
(window as any).runChallenge = runChallenge;
