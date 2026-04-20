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

  // JSONを配列に変換
  const employees = JSON.parse(employeesJson);

  // 全スキルを集める配列
  const allSkills = [];

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];

    // 社員カード要素を作成
    const card = document.createElement('div');
    card.className = 'employee-card';

    const nameEl = document.createElement('h3');
    nameEl.textContent = emp.name;

    const deptEl = document.createElement('p');
    deptEl.textContent = '部署: ' + emp.department;

    const skillEl = document.createElement('p');
    skillEl.textContent = 'スキル: ' + emp.skills.join(', ');

    card.appendChild(nameEl);
    card.appendChild(deptEl);
    card.appendChild(skillEl);
    cardsContainer.appendChild(card);

    // 全スキル配列に追加
    for (let j = 0; j < emp.skills.length; j++) {
      allSkills.push(emp.skills[j]);
    }
  }

  // Set で重複を除去し、JSONに変換して表示
  const unique = [...new Set(allSkills)];
  allSkillsDisplay.textContent =
    '全スキル（重複なし）: ' + JSON.stringify(unique);
}
