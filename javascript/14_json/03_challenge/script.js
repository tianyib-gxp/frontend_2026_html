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

  const obj = JSON.parse(employeesJson);
  let skillsDup = [];

  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);

    let div = document.createElement('div');
    div.classList.add('employee-card');

    let head3 = document.createElement('h3');
    head3.textContent = obj[i].name;
    div.appendChild(head3);

    let p1 = document.createElement('p');
    p1.textContent = obj[i].department;
    div.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = obj[i].skills;
    div.appendChild(p2);

    cardsContainer.appendChild(div);

    for (let j = 0; j < obj[i].skills.length; j++) {
      skillsDup.push(obj[i].skills[j]);
    }
  }
  const unique = [...new Set(skillsDup)];
  allSkillsDisplay.textContent = JSON.stringify(unique);
  console.log(skillsDup);
}
