const employeesJson = `[
  { "name": "田中 太郎", "department": "開発部", "skills": ["JavaScript", "React", "Node.js"] },
  { "name": "佐藤 花子", "department": "デザイン部", "skills": ["CSS", "Figma", "HTML"] },
  { "name": "鈴木 健一", "department": "開発部", "skills": ["Python", "JavaScript", "SQL"] },
  { "name": "山田 明美", "department": "営業部", "skills": ["Excel", "PowerPoint", "SQL"] }
]`;

function runChallenge() {
  const cardsContainer = document.getElementById('cards');
  const allSkillsDisplay = document.getElementById('allSkills');
  cardsContainer.innerHTML = '';

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * 要件:
   * 1. employeesJson を JSON.parse() で配列にする
   * 2. 各社員をループして <div class="employee-card"> を作成
   *    カード内に:
   *    - <h3> に名前
   *    - <p> に部署
   *    - <p> にスキル（カンマ区切り）
   *    を追加し、cardsContainer に appendChild する
   * 3. 全社員のスキルを一つの配列にまとめ、重複を除去した後、
   *    JSON.stringify() で文字列にして allSkillsDisplay.textContent に表示する
   *    例: 全スキル（重複なし）: ["JavaScript","React",...]
   *
   * ヒント（重複除去）:
   *    const unique = [...new Set(allSkillsArray)];
   * =============================================
   */
}
